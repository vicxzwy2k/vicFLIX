type menuOptions = '' | 'home' | 'terror' | 'acao' | 'animacao'

export const createMenuObject = (activeMenu:menuOptions) =>{
    let returnObject = {
        home: false,
        terror: false,
        acao: false,
        animacao: false
    }
    if(activeMenu !== ''){
        returnObject[activeMenu] = true
    }
        return returnObject
   
}