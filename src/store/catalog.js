import data from './data.json'

export default {
    
    state: {
        catalog: data,
    },
    actions: {
        filter({commit}, fit){
            commit('addFilter', fit)
        },
        deleteFilter({commit}){
            commit('deleteFltr')
        }
    },
    mutations: {
        addFilter(state, fit){
            console.log(fit)
                if(fit.room.length == 0){
                    let Card = state.catalog.filter(function(item){
                        return item.floor <= fit.maxFl && item.floor >= fit.minFl 
                    })
                    state.catalog = Card
    
                    let Square = state.catalog.filter(function(item){
                        return item.square <= fit.maxSqre && item.square >= fit.minSqre
                    })
                    state.catalog = Square
    
                    let Price = state.catalog.filter(function(item){
                        return item.price <= fit.maxPrce && item.price >= fit.minPrce
                    })
                    state.catalog = Price
                }else{
                    let SortArray = []
                    for(let j =0; j < fit.room.length; j++){
                        for (let i=0; i < state.catalog.length; i++){
                            let res = fit.room[j]
                            let item = state.catalog[i]
                            if(res == item.rooms){
                                SortArray.push(item)
                            }
                        
                        }
                    }
                    state.catalog = SortArray
                }
                
        },
        deleteFltr(state){
            state.catalog = data
        }
    },
    getters: {
        getCatalog(state){
            return state.catalog
        }
    }
}