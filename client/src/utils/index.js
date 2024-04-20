import {surpriseMePrompts} from '../constants';

export function getRandomPrompt(prompt) {
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
    const randomPrompt = surpriseMePrompts[randomIndex];
    
    if(randomPrompt === prompt) return getRandomPrompt(prompt); //makes sure that you don't get the same random prompt two three times in a row!!
    
    return randomPrompt;
} 