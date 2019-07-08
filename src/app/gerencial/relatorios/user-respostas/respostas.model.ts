export class RespostasClass {
    public id: string;
    public cnpj: string;
    public respostaCorfio: string;
    public respostaOutros: string;

    constructor ( id: string, cnpj: string, respostaCorfio: string, respostaOutros: string ) {
        this.id = id;
        this.cnpj = cnpj;
        this.respostaCorfio = respostaCorfio;
        this.respostaOutros = respostaOutros;
    }
}
