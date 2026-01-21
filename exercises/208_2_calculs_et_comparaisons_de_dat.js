/*
 * Exercise 208.2: Calculs et comparaisons de dates
 * Exercice 99 / 105
 * ============================================================
 */

/*
 * Effectuez des calculs et comparaisons entre dates (différences, ajouts, soustractions).
 */

/*
 * - ✅ Calculer la différence entre dates (jours, heures, etc.)
 * - ✅ Ajouter/soustraire du temps (jours, mois, années)
 * - ✅ Obtenir le début/fin de période (jour, mois, année)
 * - ✅ Comparer des dates (isBefore, isAfter, isBetween)
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * class DateUtils {
 *   static diff(date1, date2, unit)      // Différence
 *   static add(date, amount, unit)       // Ajouter
 *   static subtract(date, amount, unit)  // Soustraire
 *   static startOf(date, unit)           // Début de période
 *   static endOf(date, unit)             // Fin de période
 *   static isBetween(date, start, end)   // Entre deux dates
 *   static isToday(date)                 // Est aujourd'hui
 * }
 */

// ==================== SOLUTION ====================

class DateUtils {
    static diff(date1, date2, unit = 'days') {
        const ms = date2.getTime() - date1.getTime();
        
        switch(unit) {
            case 'milliseconds':
                return ms;
            case 'seconds':
                return Math.floor(ms / 1000);
            case 'minutes':
                return Math.floor(ms / (1000 * 60));
            case 'hours':
                return Math.floor(ms / (1000 * 60 * 60));
            case 'days':
                return Math.floor(ms / (1000 * 60 * 60 * 24));
            default:
                return ms;
        }
    }
    
    static add(date, amount, unit = 'days') {
        const result = new Date(date);
        
        switch(unit) {
            case 'days':
                result.setDate(result.getDate() + amount);
                break;
            case 'months':
                result.setMonth(result.getMonth() + amount);
                break;
            case 'years':
                result.setFullYear(result.getFullYear() + amount);
                break;
            case 'hours':
                result.setHours(result.getHours() + amount);
                break;
        }
        
        return result;
    }
    
    static subtract(date, amount, unit = 'days') {
        return this.add(date, -amount, unit);
    }
    
    static startOf(date, unit = 'day') {
        const result = new Date(date);
        
        switch(unit) {
            case 'day':
                result.setHours(0, 0, 0, 0);
                break;
            case 'month':
                result.setDate(1);
                result.setHours(0, 0, 0, 0);
                break;
            case 'year':
                result.setMonth(0, 1);
                result.setHours(0, 0, 0, 0);
                break;
        }
        
        return result;
    }
    
    static endOf(date, unit = 'day') {
        const result = new Date(date);
        
        switch(unit) {
            case 'day':
                result.setHours(23, 59, 59, 999);
                break;
            case 'month':
                result.setMonth(result.getMonth() + 1, 0);
                result.setHours(23, 59, 59, 999);
                break;
            case 'year':
                result.setMonth(11, 31);
                result.setHours(23, 59, 59, 999);
                break;
        }
        
        return result;
    }
    
    static isBetween(date, start, end) {
        const time = date.getTime();
        return time >= start.getTime() && time <= end.getTime();
    }
    
    static isToday(date) {
        const today = new Date();
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
    }
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    // Tests pour diff
    test.run('Exercise 208.2: DateUtils.diff', [
        { input: [new Date('2024-01-01'), new Date('2024-01-11'), 'days'], expected: 10, description: 'Diff de 10 jours' },
        { input: [new Date('2024-01-01'), new Date('2024-01-02'), 'hours'], expected: 24, description: 'Diff de 24 heures' },
        { input: [new Date('2024-01-01'), new Date('2024-01-01'), 'days'], expected: 0, description: 'Diff de 0 jour (même date)' }
    ], DateUtils.diff);
    
    // Tests pour add
    test.run('Exercise 208.2: DateUtils.add', [
        { input: [new Date('2024-01-01'), 5, 'days'], expected: new Date('2024-01-06').getTime(), description: 'Ajouter 5 jours' },
        { input: [new Date('2024-01-01'), 1, 'months'], expected: new Date('2024-02-01').getTime(), description: 'Ajouter 1 mois' },
        { input: [new Date('2024-01-01'), 1, 'years'], expected: new Date('2025-01-01').getTime(), description: 'Ajouter 1 an' }
    ], (...args) => DateUtils.add(...args).getTime());
    
    // Tests pour subtract
    test.run('Exercise 208.2: DateUtils.subtract', [
        { input: [new Date('2024-01-10'), 3, 'days'], expected: new Date('2024-01-07').getTime(), description: 'Soustraire 3 jours' },
        { input: [new Date('2024-01-01'), 1, 'months'], expected: new Date('2023-12-01').getTime(), description: 'Soustraire 1 mois' }
    ], (...args) => DateUtils.subtract(...args).getTime());

    // Tests pour isBetween
    test.run('Exercise 208.2: DateUtils.isBetween', [
        { input: [new Date('2024-01-15'), new Date('2024-01-10'), new Date('2024-01-20')], expected: true, description: 'Date entre deux dates' },
        { input: [new Date('2024-01-05'), new Date('2024-01-10'), new Date('2024-01-20')], expected: false, description: 'Date avant l\'intervalle' }
    ], (...args) => DateUtils.isBetween(...args));

    // Tests pour isToday
    test.run('Exercise 208.2: DateUtils.isToday', [
        { input: [new Date()], expected: true, description: 'Date est aujourd\'hui' },
        { input: [new Date('2024-01-01')], expected: false, description: 'Date n\'est pas aujourd\'hui' }
    ], (...args) => DateUtils.isToday(...args));
}
