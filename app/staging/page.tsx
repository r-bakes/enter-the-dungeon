'use client'
import MenuSelect from "@/components/staging/MenuSelect/MenuSelect"
import InventoryMenu from "@/components/staging/Menus/InventoryMenu/InventoryMenu"
import SkillMenu from "@/components/staging/Menus/SkillMenu/SkillMenu"
import { Menu, combatMenus, miscMenus, skillMenus } from "@/game/data/menus/Menu"
import { inventory } from "@/game/data/menus/allMenus/Inventory"
import { Skill } from "@/game/data/skills/Skills"
import { martial } from "@/game/data/skills/allSkills/Martial"
import EngineProvider from "@/game/engine/EngineContext"
import React from "react"


export default function Page({}) {
    const [selectedMenu, setSelectedMenu] = React.useState<Menu>(martial)
    let menus: {[menuId: string]: JSX.Element} = {}
    skillMenus.forEach((menu) => menus[menu.id] = <SkillMenu key={menu.id} skill={selectedMenu as Skill}></SkillMenu>)
    menus[inventory.id] = <InventoryMenu></InventoryMenu>


    return (
        <div className="flex w-full h-full py-10">
            <EngineProvider>
                <MenuSelect selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></MenuSelect>
                {menus[selectedMenu.id]}
            </EngineProvider>
        </div>
    )
}