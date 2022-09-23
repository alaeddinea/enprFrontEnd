import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { Eleve } from '../domain/eleve';
import { Router } from '@angular/router';
import { CrudGlobalService } from '../crud-global.service';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { ElvPreselection } from '../domain/elv-preselection';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { DatePipe } from '@angular/common';
import { LoginComponent } from '../../login/login.component';

@Component({
  selector: 'app-statistique',
  templateUrl: './statistique.component.html',
  styleUrls: ['./statistique.component.scss']
})
export class StatistiqueComponent implements OnInit {
    currentUserRole: any ;
  age24: any = '24 سنة';
  age23: any = '23 سنة';
  age22: any = '22 سنة';
  age21: any = '21 سنة';

  count99Boy: number = 0;
  count98Boy: number = 0;
  count97Boy: number = 0;
  count96Boy: number = 0;
  count95Boy: number = 0;
  count94Boy: number = 0;

  count99Girl: number = 0;
  count98Girl: number = 0;
  count97Girl: number = 0;
  count96Girl: number = 0;
  count95Girl: number = 0;
  count94Girl: number = 0;

  public pieChartLabelsBySex: string[] = ['إناث', 'ذكور'];
  public pieChartDataBySex: number[] = [0, 0];
  public pieChartType = 'pie';
  entities: Eleve[];
  entitiesPreSelected: ElvPreselection[];
  ojetUrl: string = 'eleve';
  ojetUrlPreSelected: string = 'elvpreselection';
  countAccepted: number = 0;
  countOfBoyAccepted: number = 0;
  countOfGirlAccepted: number = 0;

  countPresSelected: number = 0;
  countOfBoypPreSelected: number = 0;
  countOfGirlPreSelected: number = 0;
  // debut chart
  // barChartBy Gov
  public barChartOptionsByGov: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabelsByGov: string[] = [
    'القصرين','مدنين','المنستير','الكاف','أريانة','توزر','المهدية','قبلي','باجة','القيروان','تطاوين','بنزرت','زغوان','بن عروس','تونس','جندوبة','قابس','منوبة','سيدي بوزيد','سوسة','نابل','سليانة','صفاقس','قفصة'
  ];
  public barChartTypeByGov = 'bar';
  public barChartLegendByGov = true;

  public barChartDataByGov: any[] = [
    {data: [18,7,27,25,26,8,4,8,37,25,1,22,13,40,68,17,9,51,15,18,29,14,26,20], label: 'ذكور'},
            
    {data: [1,0,2,3,3,0,0,0,4,1,0,5,0,3,8,3,2,4,5,3,2,5,4,2], label: 'إناث'}
  ];
  // barChart By Sex
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };

  public barChartLabels: string[] = [  this.age24, this.age23, this.age22, this.age21 ];
  public barChartData = [
    {
      data: [ 125,148,138,117], label: 'ذكور'
    },
    {
      // tslint:disable-next-line:max-line-length
      data: [ 8,11,26,15], label: 'إناث'
    }
  ];
  public barChartType = 'bar';
  public barChartLegend = true;



  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A',
      barPercentage: 0.6,
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';
  public lineChart2Legend = false;
  public lineChart2Type = 'line';
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];

  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'إحصائيات'
    }
  ];
  public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };

  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';

  // fin chart


  // tslint:disable-next-line: max-line-length
  constructor(private datePipe: DatePipe, private confirmationService: ConfirmationService, private router: Router, private crudservice: CrudGlobalService) { }

  ngOnInit() {
    

      this.getAllAcceptedStudent();
      this.getAllPreSelectedStudent();
setInterval(() => {
      this.getAllAcceptedStudent();
      this.getAllPreSelectedStudent();
    }, 10000);
  }
  getAllAcceptedStudent() {
    this.countOfGirlAccepted = this.countOfBoyAccepted = this.countAccepted = 0;
    this.crudservice.getlistEntity(this.ojetUrl)
      .subscribe(data => {
        this.entities = data.result;
        console.log("nombre des eleve :");
        console.log(this.entities.length);
        console.log(this.entities);
        console.log("nombre des eleve :");
     this.entities.forEach((eleve: Eleve, index: any) => {
          this.countAccepted++;
          if (eleve.sexeEl.toString() === '0') {
            this.countOfBoyAccepted++;
          } else {
            this.countOfGirlAccepted++;
          }
        });

        this.pieChartDataBySex = [this.countOfGirlAccepted, this.countOfBoyAccepted];
      });

  }
  getAllPreSelectedStudent() {
    this.countOfGirlPreSelected = this.countOfBoypPreSelected = this.countPresSelected  = 0;
    this.crudservice.getlistEntity(this.ojetUrlPreSelected)
      .subscribe(data => {
        this.entitiesPreSelected = data.result;
        this.entitiesPreSelected.forEach((elevep: ElvPreselection, index: any) => {
          this.countPresSelected++;
          if (elevep.cod_sexe.toString() === '0') {
            this.countOfBoypPreSelected++;
          } else {
            this.countOfGirlPreSelected++;
          }
        });
      });
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
