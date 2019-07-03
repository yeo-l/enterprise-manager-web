export const ISO_DATE_FORMAT = 'YYYY-MM-DD';
export const EURO_DATE_FORMAT = 'DD-MM-YYYY';
export const DATE_TIME_FORMAT = 'YYYY-MM-DDTHH:mm';
export const SERVER_API_URL = 'http://localhost:8088/api';
export let dtOptions = {
  pagingType: 'full_numbers',
  // scrollY: 300,
  paging: true,
  pageLength: 10,
  lengthChange: false,
  language: {
    decimal:        ',',
    info:           '_START_ à _END_ sur _TOTAL_',
    infoEmpty:      '0 to 0 of 0',
    paginate: {
      first:      '<<',
      last:       '>>',
      next:       '>',
      previous:   '<'
    },
    zeroRecords:    'Aucune valeur retrouvée',
    search:         'Recherche',
    processing:     'En cours d\'exécution...',
    loadingRecords: 'Chargement...',
    /*infoFiltered:   '(filtered from _MAX_ total entries)',
    emptyTable:     'No data available in table',
    thousands:      '.',
    lengthMenu:     'Show _MENU_ entries',
    loadingRecords: 'Loading...',
    processing:     'En cours d'exécution...',
    aria: {
      sortAscending:  'activate to sort column ascending',
      sortDescending: 'activate to sort column descending'
    }*/
  }
};

export let dtOptionsAllButtons = {...dtOptions, dom: 'Bfrtip', buttons: [
      'columnsToggle',
      'colvis',
      'copy',
      'print',
      'excel'
]};

export let dtOptionsExcelPrintButtons = {...dtOptions, dom: 'Bfrtip', buttons: [
  'copy',
  'print',
  'excel'
]};


export let dtOptionsExcelButtons = {...dtOptions, dom: 'Bfrtip', buttons: [
  'copy',
  'excel'
]};

// export function GetFormattedDate(date: Date) {
//   let month = format(date .getMonth() + 1);
//   let day = format(todayTime .getDate());
//   let year = format(todayTime .getFullYear());
//   return month + '/' + day + '/' + year;
//
// }
