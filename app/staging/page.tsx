'use client'
import MenuSelect from "@/components/staging/MenuSelect/MenuSelect"
import SkillMenu from "@/components/staging/Menus/SkillMenu/SkillMenu"
import { Menu, combatMenus, miscMenus, skillMenus } from "@/game/data/menus/Menu"
import { Skill } from "@/game/data/skills/Skills"
import { martial } from "@/game/data/skills/allSkills/Martial"
import EngineProvider from "@/game/engine/EngineContext"
import React from "react"


export default function Page({}) {
    const [selectedMenu, setSelectedMenu] = React.useState<Menu>(martial)
    let menu = null;
    if (skillMenus.includes(selectedMenu)) {
        menu = <SkillMenu skill={selectedMenu as Skill}></SkillMenu>
    } else if (miscMenus.includes(selectedMenu)) {
        menu = null;
    } else if (combatMenus.includes(selectedMenu)) {
        menu = null;
    }

    return (
        <div className="flex w-full h-full py-10">
            <EngineProvider>
                <MenuSelect selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></MenuSelect>
                {menu}
            </EngineProvider>
        </div>
    )
}