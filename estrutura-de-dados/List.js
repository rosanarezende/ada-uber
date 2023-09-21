class List {
  constructor() {
    this.dados = [];
    this.tamanho = 0;
  }

  add(item) {
    this.dados[this.tamanho] = item;
    this.tamanho++;

    return this.dados;
  }

  delete(indice) {
    for (let i = indice; i < this.tamanho; i++) {
      this.dados[i] = this.dados[i + 1];
    }

    // diminuir a variável de tamanho da lista
    this.tamanho--;

    // remover o ultimo item de fato (que ficou duplicado)
    this.dados.length = this.tamanho;

    return this.dados;
  }

  access(indice) {
    return this.dados[indice];
  }

  search(item) {
    for (let i = 0; i < this.tamanho; i++) {
      if (this.dados[i] === item) {
        return i;
      }
    }

    return null;
  }
}

const list = new List();
list.add("a");
list.add("b");
list.add("c");
list.add("d");

console.log(list.access(0));

console.log(list.search("b"));

console.log(list.delete(1))

console.log(list);
