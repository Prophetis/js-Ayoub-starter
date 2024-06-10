/**
 * retourne la valeur la plus grande des deux paramètres
 *
 * Contraintes:
 *    - utiliser l'opérateur ternaire (if interdit)
 */
function ternaire(a, b) {
    a > b ? console.log('Yup') : console.log('Nope')
}

ternaire(1, 2)

module.exports = ternaire
