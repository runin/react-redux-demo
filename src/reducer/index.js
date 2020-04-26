const initState = {
    count: 0
}
exports.reducer = (state = initState, action) => {
    console.log(action)
    switch (action.type){
        case 'add_action':
            return {
                count: state.count + 1
            }
        case 'sub_action':
            return {
                count: state.count - 1
            }
        default:
            return state;
        
    }
    return state;   
}