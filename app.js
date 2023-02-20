var V2 = /** @class */ (function () {
    function V2() {
    }
    V2.prototype.ej1 = function () {
        var nombre = prompt('Captura tu nombre');
        console.log("Hola ".concat(nombre, " como te va!"));
    };
    V2.prototype.ej2 = function () {
        var altura;
        var base;
        var area = 0;
        var perimetro = 0;
        base = Number(prompt('Ingresa la base del rectangulo'));
        altura = Number(prompt('Ingresa la altura del rectangulo'));
        area = base * altura;
        perimetro = 2 * (base + altura);
        console.log("El area del rectangulo ".concat(area, " y el perimetro del rectangulo ").concat(perimetro));
    };
    V2.prototype.ej3 = function () {
        var cateto1;
        var cateto2;
        var hipotenusa;
        cateto1 = Number(prompt('Ingresa el cateto 1'));
        cateto2 = Number(prompt('Ingresa el cateto 2'));
        hipotenusa = (cateto1) * (cateto1) + (cateto2) * (cateto2);
        hipotenusa = Math.sqrt(hipotenusa);
        console.log("La hipotenusa es ".concat(hipotenusa));
    };
    V2.prototype.ej4 = function () {
        var numero1;
        var numero2;
        var suma = 0;
        var resta = 0;
        var division = 0;
        var multiplicacion = 0;
        numero1 = Number(prompt('Ingresa el primer valor numerico'));
        numero2 = Number(prompt('Ingresa el segundo valor numerico'));
        suma = (numero1 + numero2);
        resta = (numero1 - numero2);
        division = (numero1 / numero2);
        multiplicacion = (numero1 * numero2);
        console.log("El resultado de la suma es ".concat(suma));
        console.log("El resultado de la resta es ".concat(resta));
        console.log("El resultado de la division es ".concat(division));
        console.log("El resultado de la multiplicacion es ".concat(multiplicacion));
    };
    V2.prototype.ej5 = function () {
        var celsius;
        var total = 0;
        celsius = Number(prompt('Ingresa la temperatura en F° que quieres conocer en C°'));
        total = (celsius - 32) * 5 / 9;
        console.log("La temperatura en C\u00B0 es ".concat(total));
    };
    V2.prototype.ej6 = function () {
        var _a;
        var numeros = [];
        var valor = 0;
        var total = 0;
        for (var i = 0; i < 3; i++) {
            valor = Number((_a = prompt('Ingresa un numero ' + (i + 1))) !== null && _a !== void 0 ? _a : "");
            numeros.push(valor);
            total += valor;
        }
        total = total / 3;
        console.log("El promedio es ".concat(total));
    };
    V2.prototype.ej7 = function () {
        var mins;
        var h = 0;
        var mins2 = 0;
        mins = Number(prompt('Ingresa los minutos'));
        h = (mins / 60);
        mins2 = (mins % 60);
        console.log("Corresponde a ".concat(h, " hrs y ").concat(mins2, " mins"));
    };
    V2.prototype.ej8 = function () {
        var sueldo;
        var comision;
        var sueldoTotal = 0;
        var venta1 = 0;
        var venta2 = 0;
        var venta3 = 0;
        sueldo = Number(prompt('Ingresa tu sueldo base'));
        venta1 = Number(prompt('Ingresa el precio de tu primer venta'));
        venta2 = Number(prompt('Ingresa el precio de tu segunda venta'));
        venta3 = Number(prompt('Ingresa el precio de tu tercer venta'));
        comision = (venta1 * 0.10 + venta2 * 0.10 + venta3 * 0.10);
        sueldoTotal = (sueldo + comision);
        console.log("La comision de tus ventas generadas en el mes es de $".concat(comision));
        console.log("El sueldo total es $".concat(sueldoTotal));
    };
    V2.prototype.ej9 = function () {
        var precio;
        var precioDescuento;
        precio = Number(prompt('Ingresa el total de tu compra'));
        precioDescuento = (precio * 0.15);
        precioDescuento = (precio - precioDescuento);
        console.log("El total de tu compra es de $".concat(precioDescuento));
    };
    V2.prototype.ej10 = function () {
        var cal1;
        var cal2;
        var cal3;
        var final = 0;
        cal1 = Number(prompt('Ingresa la primer calificacion'));
        cal2 = Number(prompt('Ingresa la segunda calificacion'));
        cal3 = Number(prompt('Igresa la tercer calificacion'));
        cal1 = cal1 * 55 / 100;
        cal2 = cal2 * 30 / 100;
        cal3 = cal3 * 15 / 100;
        final = cal1 + cal2 + cal3;
        console.log("El promedio final es ".concat(final));
    };
    return V2;
}());
var objeto = new V2();
objeto.ej10();
