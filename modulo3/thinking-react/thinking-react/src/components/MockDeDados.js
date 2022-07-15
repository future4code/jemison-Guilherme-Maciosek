import React from 'react'

export default function MockDeDados () {
    const listaDeDados = [{
        id: 1,
        nomeDoProduto: 'Conjunto de Pratos',
        valor: 80,
        imgSrc: 'https://a-static.mlcdn.com.br/618x463/pratos-18-pecas-6-rasos-6-fundos-6-sobremesa-pomerode-porcelana-schmidt/belaporcelana/4304/ff40a6b8038711f72ca644f730dd5cb7.jpg',
    },
    {
        id: 2,
        nomeDoProduto: 'Conjunto de Pratos',
        valor: 60,
        imgSrc: 'https://d2vsk5azc8gn86.cloudfront.net/Custom/Content/Products/10/15/10154_jogo-de-talheres-inox-c-porta-talheres-25-pcs-caprese-pr-7298-co9118118-80082_m1_637704296590876797.png',
    },
    {
        id: 3,
        nomeDoProduto: 'Conjunto de Tuppweware',
        valor: 150,
        imgSrc: 'https://a-static.mlcdn.com.br/800x560/tupperware-conjunto-armazenagem-pb-12-pecas/chefetupperware/hj6w4zjzq/84b56fff78a4742ebf900c6531af2a6c.jpeg',
    },
    {
        id: 4,
        nomeDoProduto: 'Conjunto de Panos de Prato',
        valor: 35,
        imgSrc: 'https://images.yampi.me/assets/stores/bordabordados/uploads/images/jogo-de-pano-de-prato-semaninha-100-algodao-07-pecas-gourmet-5a5603dc5ba19-medium.jpg',
    },
    {
        id: 5,
        nomeDoProduto: 'Conjunto de Panelas',
        valor: 180,
        imgSrc: 'https://images-americanas.b2w.io/produtos/01/00/img7/01/00/item/7403/8/7403894_1GG.jpg',
    },
    {
        id: 6,
        nomeDoProduto: 'Tábua de Carne Churrasco',
        valor: 110,
        imgSrc: 'https://images-americanas.b2w.io/produtos/5068194121/imagens/tabua-carne-churrasco-frios-madeira-tronco-rustica/5068194139_1_large.jpg',
    }]

    const listaDeDadosTratadas = listaDeDados.map((nome, index) => {
        return <li key={index}>{nome.nomeDoProduto}</li>

    })
    return
}