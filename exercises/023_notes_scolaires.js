/*
 * Exercise 023: Notes scolaires
 * Exercice 7 / 61
 * ============================================================
 */

/*
 * Créez une fonction getGrade qui convertit une note numérique (0-100) en lettre selon le barème américain.
 */

/*
 * - A : 90-100
 * - B : 80-89
 * - C : 70-79
 * - D : 60-69
 * - F : 0-59 (échec)
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * getGrade(95)   // "A"
 * getGrade(85)   // "B"
 * getGrade(75)   // "C"
 * getGrade(65)   // "D"
 * getGrade(55)   // "F"
 * getGrade(100)  // "A"
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

function getGrade(score) {
    if (score >= 90 && score <= 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else if (score >= 0 && score < 60) {
        return "F";
    } else {
        return "Invalid score";
    }
}

console.log(getGrade(85));
console.log(getGrade(42));
console.log(getGrade(73));
console.log(getGrade(91));
console.log(getGrade(58));
console.log(getGrade(100));
