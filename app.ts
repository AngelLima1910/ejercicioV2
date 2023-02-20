class V2 {
    public ej1 () {
        let nombre = prompt('Captura tu nombre');
        console.log(`Hola ${nombre} como te va!`);
    }
    public ej2() {
        let altura : number;
        let base : number;
        let area : number = 0;
        let perimetro : number = 0;
        base = Number(prompt('Ingresa la base del rectangulo'));
        altura = Number(prompt('Ingresa la altura del rectangulo'));
        area = base * altura;
        perimetro = 2 * (base + altura);
        console.log(`El area del rectangulo ${area} y el perimetro del rectangulo ${perimetro}`);
    }
    public ej3() {
        let cateto1 : number;
        let cateto2 : number;
        let hipotenusa : number;
        cateto1 = Number(prompt('Ingresa el cateto 1'));
        cateto2 = Number(prompt('Ingresa el cateto 2'));
        hipotenusa = (cateto1) * (cateto1) + (cateto2) * (cateto2);
        hipotenusa = Math.sqrt(hipotenusa);
        console.log(`La hipotenusa es ${hipotenusa}`);
    }
    public ej4() {
        let numero1 : number;
        let numero2 : number;
        let suma : number = 0;
        let resta : number = 0;
        let division : number = 0;
        let multiplicacion : number = 0;
        numero1 = Number(prompt('Ingresa el primer valor numerico'));
        numero2 = Number(prompt('Ingresa el segundo valor numerico'));
        suma = (numero1 + numero2);
        resta = (numero1 - numero2);
        division = (numero1 / numero2);
        multiplicacion = (numero1 * numero2);
        console.log(`El resultado de la suma es ${suma}`);
        console.log(`El resultado de la resta es ${resta}`);
        console.log(`El resultado de la division es ${division}`);
        console.log(`El resultado de la multiplicacion es ${multiplicacion}`);
    }
    public ej5() {
        let celsius : number;
        let total : number = 0;
        celsius = Number(prompt('Ingresa la temperatura en F° que quieres conocer en C°'));
        total = (celsius-32) * 5/9;
        console.log(`La temperatura en C° es ${total}`);
    }
    public ej6() {
        let numeros : number[] = [];
        let valor : number = 0;
        let total : number = 0;
        for (let i = 0; i < 3; i++) {
            valor = Number(prompt('Ingresa un numero ' + (i+1)) ?? "");
            numeros.push(valor);
            total += valor;
        }
        total = total / 3;
        console.log(`El promedio es ${total}`);
    }
    public ej7() {
        let mins: number;
        let h : number = 0;
        let mins2: number = 0;
        mins = Number(prompt('Ingresa los minutos'));
        h = (mins / 60);
        mins2 = (mins % 60);
        console.log(`Corresponde a ${h} hrs y ${mins2} mins`);
    }
    public ej8() {
        let sueldo : number;
        let comision : number;
        let sueldoTotal : number = 0;
        let venta1 : number = 0;
        let venta2 : number = 0;
        let venta3 : number = 0;
        sueldo = Number(prompt('Ingresa tu sueldo base'));
        venta1 = Number(prompt('Ingresa el precio de tu primer venta'));
        venta2 = Number(prompt('Ingresa el precio de tu segunda venta'));
        venta3 = Number(prompt('Ingresa el precio de tu tercer venta'));
        comision = (venta1 * 0.10 + venta2 * 0.10 + venta3 * 0.10);
        sueldoTotal = (sueldo + comision);
        console.log(`La comision de tus ventas generadas en el mes es de $${comision}`);
        console.log(`El sueldo total es $${sueldoTotal}`);
    }
    public ej9() {
        let precio : number;
        let precioDescuento : number;
        precio = Number(prompt('Ingresa el total de tu compra'));
        precioDescuento = (precio * 0.15);
        precioDescuento = (precio - precioDescuento);
        console.log(`El total de tu compra es de $${precioDescuento}`);
    }
    public ej10() {
        let cal1 : number;
        let cal2 : number;
        let cal3 : number;
        let final : number = 0;
        cal1 = Number(prompt('Ingresa la primer calificacion'));
        cal2 = Number(prompt('Ingresa la segunda calificacion'));
        cal3 = Number(prompt('Igresa la tercer calificacion'));
        cal1 = cal1 * 55 /100;
        cal2 = cal2 * 30 /100;
        cal3 = cal3 * 15 /100;
        final = cal1 + cal2 + cal3;
        console.log(`El promedio final es ${final}`);
    }
}
let objeto = new V2();
objeto.ej10();