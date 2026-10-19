import { WizardRepository } from "./repository";
import type { Wizard,NewWizard } from "./types";


 const repoWizard= new WizardRepository();

export function saveWizard(newWizard:NewWizard): Wizard {
    
    const length:number =repoWizard.getAll().length;
    const newId=length+1;
    const finalWizard={id:newId, ...newWizard} as Wizard;
    repoWizard.add(finalWizard);
    return finalWizard;
}