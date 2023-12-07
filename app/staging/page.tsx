'use client'
import MenuSelect from "@/components/staging/MenuSelect/MenuSelect"
import SkillMenu from "@/components/staging/Menus/SkillMenu/SkillMenu"
import { CharacterProvider } from "@/context/CharacterProvider"
import { MenuData, CharacterData, Skill, CombatSkill, nonCombatSkills, combatSkills, characterData } from "@/game/data/MenuData"
import { martial } from "@/game/data/skills/Martial"
import React from "react"


export default function Page({}) {
    const [selectedMenu, setSelectedMenu] = React.useState<MenuData>(martial)
    let menu = null;
    if (nonCombatSkills.includes(selectedMenu)) {
        menu = <SkillMenu skill={selectedMenu}></SkillMenu>
    } else if (combatSkills.includes(selectedMenu)) {
        menu = null;
    } else if (characterData.includes(selectedMenu)) {
        menu = null;
    }

    return (
        <CharacterProvider>
            <div className="flex w-full h-full py-10">
                <MenuSelect selectedMenu={selectedMenu} setSelectedMenu={setSelectedMenu}></MenuSelect>
                {menu}
            </div>
        </CharacterProvider>
    )
}