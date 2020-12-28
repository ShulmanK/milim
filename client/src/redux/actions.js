import ADD_VERB from './types'

export function createVerb(payload){
    return {
        type: ADD_VERB,
        payload
    }
}
