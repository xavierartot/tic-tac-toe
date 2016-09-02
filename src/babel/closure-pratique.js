var creerBouton = function(label) {
  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode(label));
  document.body.appendChild(btn);
  return btn;
};

var planetes = ['terre', 'mars', 'venus', 'pluton'];
for (var i = 0; i <= 2; i++) {
   var btn = creerBouton(planetes[i]);
  btn.onclick = function() {
    //i vaut 3 puisqu'il n'a jamais ete fige et donc affiche pluton
    console.log('Cette planete est ' + planetes[i]);
  }
}

//explication:
  //a chaque click sur un bouton la valeur de planete est 'pluton'
  //quand on click, les boutons sont deja creer, donc la boucle est fini.

  //pour s'en sortir il faut creer une closure pour enfermer les differents 
//etat de i dans un contexte.
// 
var memoriserPlanete = function(index) {
  return function() { // 'index' donne restera en memoire
    console.log('cette planete est ' + planetes[index]);
  };
};
for (var j = 0; j <= 2; j++) {
  // on cree 3 bouton
  var btn = creerBouton(planetes[j]);

  // cette valeur de i est enferme dans CE contexte
  var logPlaneteMemorise = memoriserPlanete(j);

  // la fonction retourne s'execute au click donc pas de ()
  btn.onclick = logPlaneteMemorise;
}

