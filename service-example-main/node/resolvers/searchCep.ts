type ArgsType = {
    cep: string
}

// export const queries = (
//     _: any,
//     args: ArgsType,
//     { clients: { cep: viaCep } }: Context
// ) => viaCep.searchCep(args)

export const queries = {
    searchCep: ( args: ArgsType, ctx: Context) => {
        const {
            clients: { viaCep },
        } = ctx

        const { cep } = args

        return viaCep.searchCep(cep)
    }
}