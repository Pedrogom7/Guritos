let map;
let userMarker;
let storeMarkers;
const stores = [
  //NOVA ESPERANÇA
  { name: "Supermercado Alves", lat: -23.177189243267897, lng: -52.20316564872775 },
  { name: "Supermercado Camilo", lat: -23.19018732989401, lng: -52.19929105210866 },
  { name: "Supermercado Bom Dia Gazola", lat: -23.180060815537033, lng: -52.209183396987456 },
  { name: "Supermercado Mulati", lat: -23.185543319753865, lng: -52.20283418599989 },
  //PARANAPOEMA
  { name: "Supermercado Pag Pouco", lat: -22.652668274722284, lng: -52.08445486401983 },
  //SANTA CRUZ DO MONTE CASTELO
  { name: "Supermercado Sobral", lat: -22.961029439814716, lng: -53.295788203199756 },
  { name: "Chega Mais Supermercado", lat: -22.96354699020644, lng: -53.29666306275347 },
  //SANTA ISABEL DO IVAI
  { name: "Supermercado Irmãos Sartori", lat: -23.002328536551918, lng: -53.19489160690127 },
  { name: "Chega Mais Supermercado", lat: -23.001100088989595, lng: -53.191369526425724 },
  //LOANDA
  { name: "Supermercado Irmãos Sartori", lat: -22.938514972737995, lng: -53.142169003200365 },
  { name: "Tend Tudo", lat: -22.930255693005208, lng: -53.13652140320063 },
  //PARANAVAI
  { name: "Super Happy", lat: -23.08355834333288, lng: -52.44492542891378 },
  { name: "Guguy Supermercado", lat: -23.073593091469316, lng: -52.40904270319713 },
  { name: "Guguy Supermercado", lat: -23.076587755985248, lng: -52.43785184718777 },
  { name: "Guguy Supermercado", lat: -23.100318870516173, lng: -52.486435715432556 },
  { name: "Gugão Supermercado", lat: -23.079815176343498, lng: -52.474478015499336 },
  //MARILENA
  { name: "Supermercado Araras", lat: -22.732837262560075, lng: -53.03964927251798 },
  //TAMBOARA
  { name: "Supermercado Biscola", lat: -23.19692718084777, lng: -52.496695732030304 },
  //QUERENCIA DO NORTE
  { name: "Supermercado Ronqui", lat: -23.085951987144504, lng: -53.48503767594326 },
  { name: "Supermercado Chega Mais", lat: -23.09043023392843, lng: -53.48556888665697 },
  { name: "Supermercado Bom Preço", lat: -23.091794256339778, lng: -53.486344921433755 },
  //COLORADO 
  { name: "Supermercado São José", lat: -22.838167522569318, lng: -51.975899542483994 },
  { name: "Supermercado Fantucci", lat: -22.837874326139605, lng: -51.98067503203856 },
  //ITAGUAJÉ
  { name: "Supermercado Pag Pouco", lat: -22.618741896349125, lng: -51.96389953019255 },
  //GUAIRAÇÁ
  { name: "Supermercado Almeida", lat: -22.935562358593288, lng: -52.68665069384796 },
  //NOVA LONDRINA
  { name: "Gugão Atacado e Varejo", lat: -22.772467176713086, lng: -52.98960661484527 },
  //ALTO PARANÁ
  { name: "Supermercado Gugão", lat: -23.12744956802002, lng: -52.30916740740606 },
  { name: "Supermercado Alto Paraná", lat: -23.13149206035831, lng: -52.31955724597006 },
  //PRESIDENTE CASTELO BRANCO
  { name: "Supermercado Alves", lat: -23.2788653188485, lng: -52.15437460954687 },
  //AMAMBAI
  { name: "Supermercado Planalto", lat: -23.11064179389495, lng: -55.225764959016864 },
  { name: "Supermercado Manso", lat: -23.109749632284714, lng: -55.2278526455245 },
  { name: "Supermercado Ideal", lat: -23.117731236827954, lng: -55.21295504367303 },
  //JUTI 
  { name: "Supermercado Santos", lat: -22.866460951319677, lng: -54.60630344553017 },
  //ITAQUIRAI
  { name: "Supermercado Principal II", lat: -23.47644255750333, lng: -54.17815204777695 },
  { name: "Supermercado Quevedo", lat: -23.48666199911229, lng: -54.181845343664364 },
  { name: "Adega Fest Conveniência", lat: -23.47544358222053, lng: -54.187735521945925 },
  //ITAPORÃ
  { name: "Mercearia Teixeira", lat: -22.08099680266696, lng: 54.7924385492506 },
  { name: "Mercado Portuga", lat: -22.081268925213998, lng: -54.77625492159127 },
  //DEODAPOLIS
  { name: "Supermercado Macaúba", lat: -22.270189965810893, lng: -54.16555214739515 },
  //RIO BRILHANTE
  { name: "Hipermercado C Vale", lat: -21.797495018290363, lng: -54.5545805615299 },
  //EL DORADO
  { name: "Supermercado Marini", lat: -23.786511546829082, lng: -54.2853538743443 },
  { name: "Supermercado Santos", lat: -23.782231058416624, lng: -54.28983317185232 },
  //FATIMA DO SUL
  { name: "Supermercado Julifran", lat: -22.377082708364725, lng: -54.50840128524831 },
  { name: "Supermercado Marambaia", lat: -22.37800416663845, lng: -54.511221816705785 },
  { name: "Supermercado Julifran Bairro", lat: -22.36345312166745, lng: -54.5053803637926 },
  //IGUATEMI
  { name: "Supermercado Paulistano", lat: -23.69992129886102, lng: -54.56104947434632 },
  { name: "Supermercado Bonaza", lat: -23.666317159102068, lng: -54.56239107519742 },
  { name: "Supermercado Serve Bem", lat: -23.674915042334312, lng: -54.56044727434702 },
  { name: "Mercado e Toral", lat: -23.665977639784018, lng: -54.56219437619842 },
  //DOURADOS
  { name: "Supermercado Santos", lat: -22.244810761255334, lng: -54.82351273554707 },
  { name: "Supermercado Macauba", lat: -22.22690068148122, lng: -54.757363209856166 },
  { name: "Mercearia Bittencourt", lat: -22.20521721700852, lng: -54.850566587873516 },
  //BATAGUASSU
  { name: "E.B. Presentes", lat: -21.715897638645348, lng: -52.42356374555626 },
  // CAARAPÓ 
  { name: "Mercearia Julian", lat: -22.625413710522146, lng: -54.823381174371704 },
  { name: "C Vale Supermercados", lat: -22.63228498319486, lng: -54.83146018778527 },
  { name: "Supermercados Tupy", lat: -22.633959547668436, lng: -54.81980588498593 },
  //MUNDO NOVO
  { name: "Supermercado Sol 2", lat: -23.935508630321486, lng: -54.28679496269948 },
  { name: "Supermercado Sol", lat: -23.937384481119018, lng: -54.27978827385016 },
  { name: "Supermercado Central Socoloski", lat: -23.925318315951454, lng: -54.29219028968447 },
  { name: "Supermercado Central", lat: -23.93868186857451, lng: -54.28571943319109 },
  { name: "Sergio Pereira", lat: -23.93636142707154, lng: -54.28459997972674 },
  { name: "L.M.G. Comercial", lat: -23.93514034901484, lng: -54.27994307540851 },
  //SANTA RITA DO PARDO
  { name: "Loja do Gilvan", lat: -21.304001869285536, lng: -52.8265347544181 },
  //NOVA ANDRADINA
  { name: "Central Max", lat: -22.24909831457487, lng: -53.34757020305912 },
  { name: "Supermercado União", lat: -22.258463056468823, lng: -53.363961241637284 },
  { name: "Paraíso Bairro", lat: -22.255289086736614, lng: -53.34717774683581 },
  { name: "Supermercado Paraíso", lat: -22.250079802282425, lng: -53.349550838186175 },
  { name: "Coopavil Agroindustria", lat: -22.246666082845515, lng: -53.3502628076481 },
  //IVINHEMA
  { name: "Ribeiro e Manari", lat: -22.296686895626717, lng: -53.8231354814045 },
  { name: "Mercearia Macaúba", lat: -22.308921667992912, lng: -53.82005095246632 },
  //NAVIRAI
  { name: "Supermercado Naviraí", lat: -23.06834626969324, lng: -54.20732653711329 },
  { name: "Supermercado Naviraí II", lat: -23.049855063127172, lng: -54.21648696278896 },
  { name: "Supermercado Cro & Cra", lat: -23.049424341414532, lng: -54.20374832481358 },
  { name: "Mercearia Paraíso", lat: -23.05676806022272, lng: -54.218323799442686 },
  { name: "Supermercado Santos", lat: -23.056303114904043, lng: -54.20051538970812 },
  { name: "Ivo Doces", lat: -23.056213915371224, lng: -54.224446813031 },
  { name: "Frutaria Paraíso", lat: -23.05795254710652, lng: -54.21827380319745 },
  { name: "Hipermercado C Vale", lat: -23.339820748239713, lng: -52.09739875097628 },
  //TACURU
  { name: "Supermercado Paraná", lat: -23.634965151800337, lng: -55.01350666198568 },
  { name: "Supermercado Raldi", lat: -23.634118857845152, lng: -55.01226324736323 },
  { name: "Supermercado Santana", lat: -23.633313459726292, lng: -55.01736524736331 },
  //OURO VERDE
  { name: "Supermercado Benedito", lat: -21.489556206166824, lng: -51.700352175273714 },
  //TEODORO SAMPAIO
  { name: "Supermercado Paulinho", lat: -22.528298496363302, lng: -52.16664143019448 },
  { name: "Super Frangolandia", lat: -22.53078615030543, lng: -52.17182741855323 },
  { name: "Conveniência Paulista", lat: -22.540219651716036, lng: -52.17294140320953 },
  { name: "Supermercado Triunfo", lat: -22.524516223693798, lng: -52.1563876185534 },
  { name: "Schin Bar", lat: -22.534144530659656, lng: -52.17666216088154 },
  { name: "Mercadinho Ulloffo", lat: -22.538994737137937, lng: -52.167361244470555 },
  //MIRANTE DO PARANAPANEMA
  { name: "Supermercado Taniguichi", lat: -22.292816703953275, lng: -51.90784157952793 },
  { name: "Supermercado Bandeirante", lat: -22.29744638045555, lng: -51.906598913604036 },
  //PRESIDENTE VENCESLAU
  { name: "Murilo Chicale", lat: -21.884476732015184, lng: -51.83788479594006 },
  //PRESIDENTE EPITACIO
  { name: "Diego Doces", lat: -21.766344422836593, lng: -52.10990545622035 },
  { name: "Shopping Popular", lat: -21.768572509794616, lng: -52.11151998795759 },
  { name: "Lojão Variedades", lat: -21.783748348324377, lng: -52.13040425043015 },
  //MARABA PAULISTA
  { name: "Supermercado Pag Menos", lat: -22.110300261208792, lng: -51.96344442653831 },
  { name: "Supermercado Geraldo", lat: -22.111536079822727, lng: -51.967411873771745 },
  //SANTO ANASTACIO
  { name: "Mini Preço", lat: -21.972117391984696, lng: -51.65035916730477 },
  { name: "Brink Lar", lat: -21.973016148098647, lng: -51.649740834500975 },
  //JUNQUEIROPOLIS
  { name: "Brink Lar", lat: -21.513817758769715, lng: -51.435484068051586 }
];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -23.55052, lng: -46.633308 },
    zoom: 5
  });

  stores.forEach(store => {
    const marker = new google.maps.Marker({
      position: { lat: store.lat, lng: store.lng },
      map: map,
      title: store.name
    });

    marker.addListener("click", () => {
      const googleMapsUrl = `https://www.google.com/maps?q=${store.lat},${store.lng}`;
      window.open(googleMapsUrl, "_blank");
    });
  });


  // Tentar obter a localização do usuário
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const userPos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };

        userMarker = new google.maps.Marker({
          position: userPos,
          map: map,
          title: "Você está aqui",
          icon: {
            url: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png"
          }
        });

        map.setCenter(userPos);
        map.setZoom(10);
      },
      () => {
        console.warn("Erro ao obter localização do usuário.");
      }
    );
  } else {
    console.warn("Geolocalização não suportada pelo navegador.");
  }
}