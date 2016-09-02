// les function sont des variables qui se manipulent comme les autres variables
// une function peux retourner une autre function
var maFunction = function () {
  return function (x) {
    console.log(x);
  };
};
var nouvelleFunction = maFunction()// stocke la nouvelle function
nouvelleFunction('y') // execute la function (affiche 'y' dans la console)


//origine est defini dans la parente et est utilise par la fille
var setOrigineAndGetVoyage = function (origine) {
  var voyagerVers = function (nouvellePlanete) {
    console.log('Nous vivons desormais sur ' + nouvellePlanete );
    console.log('Mais nous venons de ' + origine );
  };
  return voyagerVers;
};

// la variable origine en premier est affecte a setOrigineAndGetVoyage
var demenager = setOrigineAndGetVoyage('la terre');
//puis le parametre de la variable voyagerVers est utilise, par ordre
//puisqu'il y a conflit
demenager('Mars');

// affiche: Nous vivons desormais sur Mars
// affiche: Mais nous venons de la terre 


