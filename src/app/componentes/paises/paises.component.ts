
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

interface SeccionPais {
  titulo: string;
  icono: string;
  textos?: string[];
  lista?: string[];
}

interface PaisInfo {
  nombre: string;
  bandera: string;
  divisa: string;
  secciones: SeccionPais[];
}

@Component({
  selector: 'app-paises',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent {
  paisSeleccionado: string | null = null;

  paises: PaisInfo[] = [
    // ESTADOS UNIDOS
    {
      nombre: 'Estados Unidos',
      bandera: 'assets/Paises/img/USA.png',
      divisa: 'Dólar estadounidense (USD)',
      secciones: [
        {
          titulo: 'Documentos aceptados',
          icono: 'fa-solid fa-id-card',
          lista: [
            'Licencia de conducir',
            'Documento de identidad',
            'Pasaporte'
          ]
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Cuenta bancaria local o de Estados Unidos',
            'Tarjeta de débito VISA o Mastercard',
            'PayPal Debit',
            'Cheque'
          ]
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria local: $1.00 USD',
            'Tarjeta de débito: $1.00 USD',
            'Cheque: $150.00 USD'
          ]
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          lista: [
            'Cuenta bancaria local: 5 días hábiles',
            'Tarjeta de débito: hasta 48 horas',
            'Cheque: de 2 a 4 semanas',
            'Retiro instantáneo: de 30 minutos a 24 horas'
          ]
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: [
            'Se puede recargar mediante tarjeta de débito o cuenta bancaria.',
            'Monto mínimo: $1.00 USD.',
            'Cuenta bancaria: 5 días hábiles.',
            'Tarjeta de débito: hasta 24 horas hábiles.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria estándar: sin comisión.',
            'Cuenta bancaria instantánea: porcentaje pendiente de confirmar.',
            'Tarjeta estándar: sin comisión.',
            'Tarjeta instantánea: 1.75%.',
            'Cheque: $1.50 USD.',
            'PayPal Debit en cajero MoneyPass: sin comisión.',
            'Cajero fuera de MoneyPass: comisión pendiente de confirmar.'
          ]
        }
      ]
    },

    // MÉXICO
    {
      nombre: 'México',
      bandera: 'assets/Paises/img/MX.jpg',
      divisa: 'Peso mexicano (MXN)',
      secciones: [
        {
          titulo: 'Documentos aceptados',
          icono: 'fa-solid fa-id-card',
          lista: ['DNI', 'INE', 'CURP', 'IFE']
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Cuenta bancaria local.',
            'Cuenta bancaria de Estados Unidos.'
          ]
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No es posible recargar saldo PayPal.']
        },
        {
          titulo: 'Retiros automáticos',
          icono: 'fa-solid fa-rotate',
          textos: [
            'Los retiros automáticos se realizan a medianoche por normativa local (Ley Fintech).'
          ]
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          lista: [
            'Retiro estándar: 5 días hábiles.',
            'Retiro instantáneo: aproximadamente 30 minutos.'
          ]
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          textos: [
            'No se indica un monto mínimo para la transferencia automática.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria local estándar: sin comisión.',
            'Retiro instantáneo: $40.00 MXN.',
            'Cuenta bancaria de Estados Unidos: sin comisión.'
          ]
        },
        {
          titulo: 'Nota',
          icono: 'fa-solid fa-circle-info',
          textos: [
            'Para facturación de empresas se utiliza la plataforma DETECNO EMAIL608.'
          ]
        }
      ]
    },

    // ARGENTINA
    {
      nombre: 'Argentina',
      bandera: 'assets/Paises/img/AR.png',
      divisa: 'Peso argentino (ARS)',
      secciones: [
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria local: $20.00 USD.',
            'Cheque: $150.00 USD.',
            'Monto mínimo para cuenta bancaria de Estados Unidos: pendiente de confirmar.'
          ]
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          lista: [
            'Cuenta bancaria local: 5 días hábiles.',
            'Cheque: de 4 a 6 semanas.',
            'Tiempo para cuenta bancaria de Estados Unidos: pendiente de confirmar.'
          ]
        },
        {
          titulo: 'Tercero regulador',
          icono: 'fa-solid fa-building',
          textos: ['Jet Perú.']
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No es posible recargar saldo.']
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Cuenta bancaria local.',
            'Cuenta bancaria de Estados Unidos.',
            'Solicitud de cheque por correo postal.'
          ]
        },
        {
          titulo: 'Consideraciones importantes',
          icono: 'fa-solid fa-circle-info',
          lista: [
            'La cuenta bancaria asociada debe estar en pesos argentinos.',
            'Los retiros a cuentas locales en dólares se revertirán.',
            'Para retirar en USD, se debe vincular una cuenta bancaria estadounidense de la que el usuario sea titular.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria local: $75.00 ARS por retiro en ARS.',
            'Cuenta bancaria de Estados Unidos: 3.50%.',
            'Cheque: $11.00 USD.'
          ]
        }
      ]
    },

    // BOLIVIA
    {
      nombre: 'Bolivia',
      bandera: 'assets/Paises/img/BO.png',
      divisa: 'Boliviano (BOB)',
      secciones: [
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['Cédula de identidad.']
        },
        {
          titulo: 'Servicios disponibles',
          icono: 'fa-solid fa-circle-info',
          lista: [
            'No se puede recargar saldo PayPal.',
            'Solo se pueden usar tarjetas de crédito o débito para realizar pagos.',
            'Solo se pueden enviar pagos; no se pueden recibir.'
          ]
        }
      ]
    },

    // CHILE
    {
      nombre: 'Chile',
      bandera: 'assets/Paises/img/CL.png',
      divisa: 'Peso chileno (CLP)',
      secciones: [
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['Cédula de identidad.']
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria local: $10.00 USD.',
            'Cuenta bancaria de Estados Unidos: $1.00 USD.',
            'Wire Transfer: $20.00 USD.'
          ]
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          lista: [
            'Tarjeta: 7 días hábiles.',
            'Cuenta bancaria local: 1 día hábil.',
            'Wire Transfer: 1 día hábil.',
            'Cheque: de 4 a 6 semanas.',
            'Cuenta bancaria de Estados Unidos: 5 días hábiles.',
            'Transferencia instantánea: de 30 minutos a un máximo de 24 horas.'
          ]
        },
        {
          titulo: 'Tercero regulador',
          icono: 'fa-solid fa-building',
          textos: ['AFEX.']
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Cuenta bancaria local.',
            'Tarjeta VISA.',
            'Cuenta bancaria de Estados Unidos.',
            'Wire Transfer.',
            'Retiro mediante cheque.'
          ]
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No es posible recargar saldo.']
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Banco local: $800.00 CLP por retiro en CLP.',
            'Wire Transfer: 1.00%, comisión mínima de $10.00 USD.',
            'Cuenta bancaria de Estados Unidos: 3.00%.',
            'Tarjeta: $11.00 USD.'
          ]
        }
      ]
    },

    // COLOMBIA
    {
      nombre: 'Colombia',
      bandera: 'assets/Paises/img/CO.png',
      divisa: 'Peso colombiano (COP)',
      secciones: [
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria local: $30.00 USD.',
            'Cuenta bancaria de Estados Unidos: $1.00 USD.'
          ]
        },
        {
          titulo: 'Tercero regulador',
          icono: 'fa-solid fa-building',
          textos: ['Pagos Internacionales (Banco W).']
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          textos: [
            'De 3 a 5 días hábiles para ambos tipos de cuenta bancaria.'
          ]
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No se puede recargar saldo PayPal.']
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Nequi: TEAM1188 y EMAIL627.',
            'Cuenta bancaria local: HELP183.',
            'Cuenta bancaria de Estados Unidos.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria local: $3,500.00 COP.',
            'Cuenta bancaria de Estados Unidos: 3.50%.'
          ]
        }
      ]
    },

    // COSTA RICA
    {
      nombre: 'Costa Rica',
      bandera: 'assets/Paises/img/CR.png',
      divisa: 'Colón costarricense (CRC)',
      secciones: [
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria local: $10.00 USD.',
            'Cuenta bancaria de Estados Unidos: $1.00 USD.',
            'Wire Transfer: $20.00 USD.'
          ]
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          textos: ['5 días hábiles para los métodos indicados.']
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Kipo: TEAM1188 y KIPO.',
            'Wink: TEAM192.',
            'Cuenta bancaria local: HELP183.',
            'Cuenta bancaria de Estados Unidos.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria local: $625.00 CRC.',
            'Cuenta bancaria de Estados Unidos: 3.00%.',
            'Wire Transfer: 1.00%, comisión mínima de $10.00 USD.'
          ]
        }
      ]
    },

    // REPÚBLICA DOMINICANA
    {
      nombre: 'República Dominicana',
      bandera: 'assets/Paises/img/RD.png',
      divisa: 'Peso dominicano (DOP)',
      secciones: [
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['Cédula de identidad y electoral.']
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria local: $10.00 USD.',
            'Cuenta bancaria de Estados Unidos: $1.00 USD.',
            'Wire Transfer: $20.00 USD.'
          ]
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          lista: [
            'Cuenta bancaria local: de 1 a 2 días hábiles, según la información recibida.',
            'Wire Transfer: 5 días hábiles.',
            'Cuenta bancaria de Estados Unidos: 5 días hábiles.'
          ]
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Cuenta bancaria local.',
            'Cuenta bancaria de Estados Unidos.',
            'Wire Transfer.'
          ]
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No se puede recargar saldo PayPal.']
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria local: $100.00 DOP.',
            'Cuenta bancaria de Estados Unidos: 3.00%.',
            'Wire Transfer: 1.00%, comisión mínima de $10.00 USD.'
          ]
        }
      ]
    },

    // ECUADOR
    {
      nombre: 'Ecuador',
      bandera: 'assets/Paises/img/EC.svg',
      divisa: 'Dólar estadounidense (USD)',
      secciones: [
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['Cédula de identidad.']
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria de Estados Unidos: $1.00 USD.',
            'Wire Transfer: $20.00 USD.',
            'Cheque: $150.00 USD.'
          ]
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          lista: [
            'Wire Transfer: 1 día hábil.',
            'Cuenta bancaria de Estados Unidos: 5 días hábiles.',
            'Cheque: de 4 a 6 semanas.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria de Estados Unidos: 3.00%.',
            'Wire Transfer: 0.50%, comisión mínima de $10.00 USD.',
            'Cheque: $11.00 USD.'
          ]
        }
      ]
    },

    // HONDURAS
    {
      nombre: 'Honduras',
      bandera: 'assets/Paises/img/HN.png',
      divisa: 'Lempira (HNL)',
      secciones: [
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No es posible recargar saldo PayPal.']
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Cuenta bancaria de Estados Unidos.',
            'Tarjetas de crédito, débito o prepagadas VISA y Mastercard.',
            'Es posible generar retiros instantáneos a las tarjetas admitidas.'
          ]
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          lista: [
            'Cuenta bancaria de Estados Unidos: 5 días hábiles.',
            'Tarjeta estándar: 48 horas.',
            'Tarjeta instantánea: de 30 minutos a 24 horas.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria de Estados Unidos: sin comisión.',
            'Tarjeta estándar: depende de la divisa del retiro; consultar las comisiones oficiales de PayPal.'
          ]
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria de Estados Unidos: $1.00 USD.',
            'Tarjeta: $1.00 USD.'
          ]
        },
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['Documento de identidad del país (DNI).']
        }
      ]
    },

    // NICARAGUA
    {
      nombre: 'Nicaragua',
      bandera: 'assets/Paises/img/NI.png',
      divisa: 'Córdoba (NIO)',
      secciones: [
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No se puede recargar saldo PayPal.']
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          textos: [
            'Cuenta bancaria de Estados Unidos.',
            'Según la información proporcionada, no tienen BMW o intermediarios.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          textos: ['Cuenta bancaria de Estados Unidos: sin comisión.']
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          textos: ['Cuenta bancaria de Estados Unidos: 5 días hábiles.']
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          textos: ['Cuenta bancaria de Estados Unidos: $1.00 USD.']
        },
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['Cédula de identificación ciudadana.']
        }
      ]
    },

    // PANAMÁ
    {
      nombre: 'Panamá',
      bandera: 'assets/Paises/img/PA.svg',
      divisa: 'Balboa (PAB)',
      secciones: [
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['Cédula de identidad personal.']
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Cuenta bancaria de Estados Unidos.',
            'Cuenta bancaria local mediante Wire Transfer.'
          ]
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No se puede recargar saldo PayPal.']
        },
        {
          titulo: 'Aliados',
          icono: 'fa-solid fa-circle-info',
          textos: [
            'Según la información proporcionada, no tienen BMW o intermediarios.'
          ]
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria de Estados Unidos: $1.00 USD.',
            'Wire Transfer: $25.00 USD.'
          ]
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          textos: [
            '5 días hábiles para Wire Transfer y cuenta bancaria de Estados Unidos.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria de Estados Unidos: 3.00%.',
            'Wire Transfer: 1.00%, comisión mínima de $10.00 USD.'
          ]
        }
      ]
    },

    // PARAGUAY
    {
      nombre: 'Paraguay',
      bandera: 'assets/Paises/img/PY.png',
      divisa: 'Guaraní (PYG)',
      secciones: [
        {
          titulo: 'Servicios disponibles',
          icono: 'fa-solid fa-circle-info',
          lista: [
            'No se puede recargar saldo PayPal.',
            'Solo se pueden realizar pagos con tarjetas de crédito o débito.',
            'Tarjetas indicadas: VISA, Mastercard y American Express (Discover).',
            'Solo se pueden enviar pagos; no se pueden recibir.'
          ]
        },
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['Cédula de identidad.']
        }
      ]
    },

    // PERÚ
    {
      nombre: 'Perú',
      bandera: 'assets/Paises/img/PE.jpeg',
      divisa: 'Nuevo sol peruano (PEN)',
      secciones: [
        {
          titulo: 'Entidad regulatoria',
          icono: 'fa-solid fa-building',
          textos: ['Citibank.']
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          textos: [
            'De 3 a 5 días hábiles para cuenta bancaria/BMW, según la información proporcionada.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria local: 64.00 PEN.',
            'Wire Transfer: 1.00%, comisión mínima de $10.00 USD.',
            'Cuenta bancaria de Estados Unidos: 3.00%.'
          ]
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria local: $20.00 USD.',
            'Wire Transfer: $20.00 USD.'
          ]
        },
        {
          titulo: 'Aliados de PayPal',
          icono: 'fa-solid fa-handshake',
          textos: ['Ligo. Para mayor información, contactar con el partner.']
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No se puede recargar saldo PayPal.']
        },
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['ID peruano.']
        }
      ]
    },

    // URUGUAY
    {
      nombre: 'Uruguay',
      bandera: 'assets/Paises/img/UY.png',
      divisa: 'Peso uruguayo (UYU)',
      secciones: [
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['Cédula de identidad.']
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No se puede recargar saldo PayPal.']
        },
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Cuenta bancaria local o de Estados Unidos.',
            'Tarjeta VISA de débito, crédito o prepago.',
            'Prex (BMW).',
            'Cheque.'
          ]
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria local: $20.00 USD.',
            'Cuenta bancaria de Estados Unidos: $1.00 USD.',
            'Tarjeta: $1.00 USD.',
            'Cheque: $150.00 USD.'
          ]
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          lista: [
            'Cuenta bancaria de Estados Unidos: 1 día hábil.',
            'Tarjeta: 48 horas.',
            'Cheque: de 4 a 6 semanas.'
          ]
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          lista: [
            'Cuenta bancaria local: $200.00 UYU.',
            'Cuenta bancaria de Estados Unidos: 3.00%.',
            'Tarjeta: depende de la divisa del retiro; consultar las comisiones oficiales de PayPal.',
            'Cheque: $11.00 USD.'
          ]
        }
      ]
    },

    // VENEZUELA
    {
      nombre: 'Venezuela',
      bandera: 'assets/Paises/img/VZLA.png',
      divisa: 'Bolívar venezolano (VES)',
      secciones: [
        {
          titulo: 'Métodos de retiro',
          icono: 'fa-solid fa-building-columns',
          textos: ['Cuenta bancaria de Estados Unidos.']
        },
        {
          titulo: 'Aliados de PayPal',
          icono: 'fa-solid fa-handshake',
          textos: [
            'Actualmente no se cuenta con partners en Venezuela, según la información proporcionada.'
          ]
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No se puede recargar saldo PayPal.']
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          textos: ['Tiempo pendiente de confirmar.']
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          textos: ['Cuenta bancaria de Estados Unidos: sin comisión.']
        },
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['ID venezolano.']
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          textos: ['Pendiente de confirmar.']
        }
      ]
    },

    // EL SALVADOR
    {
      nombre: 'El Salvador',
      bandera: 'assets/Paises/img/SV.svg',
      divisa: 'Divisa pendiente de confirmar',
      secciones: [
        {
          titulo: 'Documento',
          icono: 'fa-solid fa-id-card',
          textos: ['Documento Único de Identidad (DUI).']
        },
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No se puede recargar saldo PayPal.']
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          textos: ['Cuenta bancaria local: de 3 a 5 días.']
        },
        {
          titulo: 'Cuenta bancaria de Estados Unidos',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Comisión: 3.00%.',
            'Retiro mínimo: $1.00 USD.',
            'Retiro máximo: N/A, según la información recibida.'
          ]
        },
        {
          titulo: 'Cuenta local en USD',
          icono: 'fa-solid fa-building-columns',
          lista: [
            'Retiro mínimo: $20.00 USD.',
            'Retiro máximo: 99 millones USD, según la nota recibida.',
            'Comisión: 0.5%, comisión mínima de $10.00 USD.'
          ]
        }
      ]
    },

    // GUATEMALA
    {
      nombre: 'Guatemala',
      bandera: 'assets/Paises/img/GT.svg',
      divisa: 'Quetzal guatemalteco (GTQ)',
      secciones: [
        {
          titulo: 'Recargar saldo PayPal',
          icono: 'fa-solid fa-wallet',
          textos: ['No se puede recargar saldo PayPal.']
        },
        {
          titulo: 'Tiempo de fondos',
          icono: 'fa-regular fa-clock',
          textos: [
            'De 3 a 5 días hábiles, según la información proporcionada.'
          ]
        },
        {
          titulo: 'Método de retiro',
          icono: 'fa-solid fa-building-columns',
          textos: ['Únicamente cuenta bancaria de Estados Unidos.']
        },
        {
          titulo: 'Comisiones',
          icono: 'fa-solid fa-percent',
          textos: ['Cuenta bancaria de Estados Unidos: sin comisión.']
        },
        {
          titulo: 'Monto mínimo',
          icono: 'fa-solid fa-dollar-sign',
          lista: [
            'Cuenta bancaria de Estados Unidos: $1.00 USD.',
            'Monto máximo: N/A, según la información recibida.'
          ]
        }
      ]
    }
  ];

  get paisActual(): PaisInfo | undefined {
    return this.paises.find(
      pais => pais.nombre === this.paisSeleccionado
    );
  }

  abrirPais(nombre: string): void {
    this.paisSeleccionado = nombre;
  }

  cerrarPais(): void {
    this.paisSeleccionado = null;
  }
}
