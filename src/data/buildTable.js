import elementsData from './elements.json'

// Índice rápido por posición (grupo-periodo) para armar la tabla principal
const byPosition = {}
elementsData.forEach((el) => {
    byPosition[`${el.grupo}-${el.periodo}`] = el
})

const placeholderLantanidos = { placeholder: true, simbolo: '', nombre: '57-71', categoria: 'lanthanides' }
const placeholderActinidos = { placeholder: true, simbolo: '', nombre: '89-103', categoria: 'actinides' }

// periodicTable: un array de 18 columnas (grupos 1-18), cada una con sus elementos
// de arriba hacia abajo (periodo 1 al 7). En el grupo 3, los periodos 6 y 7 muestran
// una casilla de referencia hacia los lantánidos/actínidos en vez del elemento real.
export const periodicTable = []
for (let grupo = 1; grupo <= 18; grupo++) {
    const columna = []
    for (let periodo = 1; periodo <= 7; periodo++) {
        if (grupo === 3 && periodo === 6) {
            columna.push(placeholderLantanidos)
            continue
        }
        if (grupo === 3 && periodo === 7) {
            columna.push(placeholderActinidos)
            continue
        }
        const el = byPosition[`${grupo}-${periodo}`]
        if (el && el.categoria !== 'lanthanides' && el.categoria !== 'actinides') {
            columna.push(el)
        }
    }
    periodicTable.push(columna)
}

const lantanidos = elementsData
    .filter((el) => el.categoria === 'lanthanides')
    .sort((a, b) => a.numero_atomico - b.numero_atomico)

const actinidos = elementsData
    .filter((el) => el.categoria === 'actinides')
    .sort((a, b) => a.numero_atomico - b.numero_atomico)

// blockF: las dos filas que van debajo de la tabla principal
export const blockF = [lantanidos, actinidos]
