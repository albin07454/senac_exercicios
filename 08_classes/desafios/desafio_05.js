class Funcionario {
    constructor(nome,cargo,salario){
        this.nome = nome;
        this.cargo = cargo;
        this.salario = salario;
    }
    apresentar(){
        
        console.log(`Nome:${this.nome} | Cargo: ${this.cargo}| Salário: R$ ${this.salario}`);
    }
}
const funcionario1 = new Funcionario("Ana", "Atendente", 1800);
const funcionario2 = new Funcionario("Bruno","Vendedor",2200);

funcionario1.apresentar();
funcionario2.apresentar();