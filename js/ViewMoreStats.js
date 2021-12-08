(function($) {
    'use strict';
   
     
      if ($("#BmiStats-chart").length) {
        var GenderChartCanvas = $("#BmiStats-chart").get(0).getContext("2d");
        var GenderChart = new Chart(GenderChartCanvas, {
          type: 'bar',
          data: {
            labels: ["Underweight", "Normal", "Overweight", "Obese", "Extreme Obese"],
            datasets: [{
                label: 'Sample',
                data: [480, 230, 470, 210, 330],
                backgroundColor: '#98BDFF'
              }
    
            ]
          },
          options: {
            cornerRadius: 5,
            responsive: true,
            maintainAspectRatio: true,
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 50
              }
            },
            scales: {
              yAxes: [{
                display: true,
                gridLines: {
                  display: true,
                  drawBorder: false,
                  color: "#F2F2F2"
                },
                ticks: {
                  display: true,
                  min: 0,
                  max: 600,
                  callback: function(value, index, values) {
                    return  value + '' ;
                  },
                  autoSkip: true,
                  maxTicksLimit: 10,
                  fontColor:"#6C7383"
                }
              }],
              xAxes: [{
                stacked: false,
                ticks: {
                  beginAtZero: true,
                  fontColor: "#6C7383"
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  display: false
                },
                barPercentage: 1
              }]
            },
            legend: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            }
          },
        });
        document.getElementById('BmiStats-legend').innerHTML = GenderChart.generateLegend();
      }

         
     
      if ($("#SOD-chart").length) {
        var GenderChartCanvas = $("#SOD-chart").get(0).getContext("2d");
        var GenderChart = new Chart(GenderChartCanvas, {
          type: 'bar',
          data: {
            
            labels: ['Infant', 'Child', 'Teenager', 'Adult', 'Senior'],
            datasets: [{
                label: '',
                data: [480, 230, 470, 210, 330],
                backgroundColor: ['#98BDFF', '#DB0345', '#FAD000', '#299438', '#AF38EB']       
                     }
            ]
          },

          options: {
            cornerRadius: 5,
            responsive: true,
            maintainAspectRatio: true,
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 50
              }
            },
            scales: {
              yAxes: [{
                display: true,
                gridLines: {
                  display: true,
                  drawBorder: false,
                  color: "#F2F2F2"
                },
                ticks: {
                  display: true,
                  min: 0,
                  max: 600,
                  callback: function(value, index, values) {
                    return  value + '' ;
                  },
                  autoSkip: true,
                  maxTicksLimit: 10,
                  fontColor:"#6C7383"
                }
              }],
              xAxes: [{
                stacked: false,
                ticks: {
                  beginAtZero: true,
                  fontColor: "#6C7383"
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  display: false
                },
                barPercentage: 1
              }]
            },
            legend: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            }
          },
        });
        document.getElementById('SOD-legend').innerHTML = GenderChart.generateLegend();
      }

 
      if ($("#emprate-chart").length) {
        var GenderChartCanvas = $("#emprate-chart").get(0).getContext("2d");
        var GenderChart = new Chart(GenderChartCanvas, {
          type: 'bar',
          data: {
            
            labels: ['Employed', 'Unemployed'],
            datasets: [{
                label: '',
                data: [480, 230, 470, 210, 330],
                backgroundColor: ['#98BDFF', '#DB0345']       
                     }
            ]
          },

          options: {
            cornerRadius: 5,
            responsive: true,
            maintainAspectRatio: true,
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 50
              }
            },
            scales: {
              yAxes: [{
                display: true,
                gridLines: {
                  display: true,
                  drawBorder: false,
                  color: "#F2F2F2"
                },
                ticks: {
                  display: true,
                  min: 0,
                  max: 600,
                  callback: function(value, index, values) {
                    return  value + '' ;
                  },
                  autoSkip: true,
                  maxTicksLimit: 10,
                  fontColor:"#6C7383"
                }
              }],
              xAxes: [{
                stacked: false,
                ticks: {
                  beginAtZero: true,
                  fontColor: "#6C7383"
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  display: false
                },
                barPercentage: 1
              }]
            },
            legend: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            }
          },
        });
        document.getElementById('emprate-legend').innerHTML = GenderChart.generateLegend();
      }

      


      if ($("#bloodT-chart").length) {
        var GenderChartCanvas = $("#bloodT-chart").get(0).getContext("2d");
        var GenderChart = new Chart(GenderChartCanvas, {
          type: 'bar',
          data: {
            
            labels: ['O+', 'O-', 'A+', 'A-', 'B+', 'B-', 'AB+', 'AB-'],

            datasets: [{
                label: '',
                data: [480, 230, 470, 210, 330, 45, 555, 145],
                backgroundColor: ['#98BDFF', '#DB0345', '#FAD000', '#299438', '#AF38EB','#158FAD', '#B8B8B8', '#FF8D85']  
                     }
            ]
          },

          options: {
            cornerRadius: 5,
            responsive: true,
            maintainAspectRatio: true,
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 50
              }
            },
            scales: {
              yAxes: [{
                display: true,
                gridLines: {
                  display: true,
                  drawBorder: false,
                  color: "#F2F2F2"
                },
                ticks: {
                  display: true,
                  min: 0,
                  max: 600,
                  callback: function(value, index, values) {
                    return  value + '' ;
                  },
                  autoSkip: true,
                  maxTicksLimit: 10,
                  fontColor:"#6C7383"
                }
              }],
              xAxes: [{
                stacked: false,
                ticks: {
                  beginAtZero: true,
                  fontColor: "#6C7383"
                },
                gridLines: {
                  color: "rgba(0, 0, 0, 0)",
                  display: false
                },
                barPercentage: 1
              }]
            },
            legend: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            }
          },
        });
        document.getElementById('bloodT-legend').innerHTML = GenderChart.generateLegend();
      }

      






      if ($("#BmiStats-chart-dark").length) {
        var GenderChartCanvas = $("#BmiStats-chart-dark").get(0).getContext("2d");
        var GenderChart = new Chart(GenderChartCanvas, {
          type: 'bar',
          data: {
            labels: ["2010", "2013", "2016", "2019", "2022"],
            datasets: [{
                label: 'Male',
                data: [480, 230, 470, 210, 330],
                backgroundColor: '#98BDFF'
              },
              {
                label: 'Female',
                data: [400, 340, 550, 480, 170],
                backgroundColor: '#FEC5E5'
              }
            ]
          },
          options: {
            cornerRadius: 5,
            responsive: true,
            maintainAspectRatio: true,
            layout: {
              padding: {
                left: 0,
                right: 0,
                top: 20,
                bottom: 0
              }
            },
            scales: {
              yAxes: [{
                display: true,
                gridLines: {
                  display: true,
                  drawBorder: false,
                  color: "#575757"
                },
                ticks: {
                  display: true,
                  min: 0,
                  max: 500,
                  callback: function(value, index, values) {
                    return  value + '' ;
                  },
                  autoSkip: true,
                  maxTicksLimit: 10,
                  fontColor:"#F0F0F0"
                }
              }],
              xAxes: [{
                stacked: false,
                ticks: {
                  beginAtZero: true,
                  fontColor: "#F0F0F0"
                },
                gridLines: {
                  color: "#575757",
                  display: false
                },
                barPercentage: 1
              }]
            },
            legend: {
              display: false
            },
            elements: {
              point: {
                radius: 0
              }
            }
          },
        });
        document.getElementById('BmiStats-legend').innerHTML = GenderChart.generateLegend();
      }
     
   










  
      function format ( d ) {
        // `d` is the original data object for the row
        return '<table cellpadding="5" cellspacing="0" border="0" style="width:100%;">'+
            '<tr class="expanded-row">'+
                '<td colspan="8" class="row-bg"><div><div class="d-flex justify-content-between"><div class="cell-hilighted"><div class="d-flex mb-2"><div class="mr-2 min-width-cell"><p>Policy start date</p><h6>25/04/2020</h6></div><div class="min-width-cell"><p>Policy end date</p><h6>24/04/2021</h6></div></div><div class="d-flex"><div class="mr-2 min-width-cell"><p>Sum insured</p><h5>$26,000</h5></div><div class="min-width-cell"><p>Premium</p><h5>$1200</h5></div></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Quote no.</p><h6>Incs234</h6></div><div class="mr-2"><p>Vehicle Reg. No.</p><h6>KL-65-A-7004</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Policy number</p><h6>Incsq123456</h6></div><div class="mr-2"><p>Policy number</p><h6>Incsq123456</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-3 d-flex"><div class="highlighted-alpha"> A</div><div><p>Agent / Broker</p><h6>Abcd Enterprices</h6></div></div><div class="mr-2 d-flex"> <img src="../../images/faces/face5.jpg" alt="profile"/><div><p>Policy holder Name & ID Number</p><h6>Phillip Harris / 1234567</h6></div></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Branch</p><h6>Koramangala, Bangalore</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Channel</p><h6>Online</h6></div></div></div></div></td>'
            '</tr>'+
        '</table>';
    }
    var table = $('#example').DataTable( {
      "ajax": "js/data.txt",
      "columns": [
          { "data": "Quote" },
          { "data": "Product" },
          { "data": "Business" },
          { "data": "Policy" }, 
          { "data": "Premium" }, 
          { "data": "Status" }, 
          { "data": "Updated" }, 
          {
            "className":      'details-control',
            "orderable":      false,
            "data":           null,
            "defaultContent": ''
          }
      ],
      "order": [[1, 'asc']],
      "paging":   false,
      "ordering": true,
      "info":     false,
      "filter": false,
      columnDefs: [{
        orderable: false,
        className: 'select-checkbox',
        targets: 0
      }],
      select: {
        style: 'os',
        selector: 'td:first-child'
      }
    } );
  $('#example tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = table.row( tr );
  
    if ( row.child.isShown() ) {
        // This row is already open - close it
        row.child.hide();
        tr.removeClass('shown');
    }
    else {
        // Open this row
        row.child( format(row.data()) ).show();
        tr.addClass('shown');
    }
  } );
    
   
  })(jQuery);