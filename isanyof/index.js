/* *****************
 *
 * isAnyOf module by Michal W.
 * Licensed under GNU GPL License v3
 *
 **************** */

Boolean.prototype.isanyof = function (...args) {
    for (arg of args) {
        if (this == arg) {
            return true
        }
    }
    return false
}

Number.prototype.isanyof = function (...args) {
    for (arg of args) {
        if (this == arg) {
            return true
        }
    }
    return false
}

String.prototype.isanyof = function (...args) {
    for (arg of args) {
        if (this == arg) {
            return true
        }
    }
    return false
}

Symbol.prototype.isanyof = function (...args) {
    for (arg of args) {
        if (this == arg) {
            return true
        }
    }
    return false
}

Object.prototype.isanyof = function (...args) {
    for (arg of args) {
        if (this == arg) {
            return true
        }
    }
    return false
}