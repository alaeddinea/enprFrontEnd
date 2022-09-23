interface NavAttributes {
  [propName: string]: any;
}
interface NavWrapper {
  attributes: NavAttributes;
  element: string;
}
interface NavBadge {
  text: string;
  variant: string;
}
interface NavLabel {
  class?: string;
  variant: string;
}

export interface NavData {
  name?: string;
  url?: string;
  icon?: string;
  badge?: NavBadge;
  title?: boolean;
  children?: NavData[];
  variant?: string;
  attributes?: NavAttributes;
  divider?: boolean;
  class?: string;
  label?: NavLabel;
  wrapper?: NavWrapper;
}
export const navItemsSante: NavData[] = [
  {
    name: 'المصحة',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'المصحة'
    },
    children: [
      {
        name: ' التلاميذ',
        url: '/enpr/list-eleve',
        icon: 'icon-puzzle'
      },
      {
        name: ' المواعيد ',
        url: '/enpr/rendezvous-today',
        icon: 'icon-speedometer',
      },
      {
        name: 'الراحة الطبية ',
        url: '/enpr/list-medicale',
        icon: 'icon-speedometer',
      },
      {
        name: ' التلقيح ',
        url: '/enpr/list-vaccin',
        icon: 'icon-speedometer',
      },
    ]
  }, {
    name: 'إحصائيات',
    url: '/enpr/statistique',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }];
export const navItemsPsycho: NavData[] = [
  {
    name: 'الإخصائي النفسي',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'النفسي'
    },
    children: [
      {
        name: 'الإختبارات',
        url: '/enpr/list-testpsy',
        icon: 'icon-puzzle'
      },
      {
        name: ' التلاميذ',
        url: '/enpr/list-eleve',
        icon: 'icon-puzzle'
      }
    ]
  }, {
    name: 'إحصائيات',
    url: '/enpr/statistique',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }];
export const navItemsManipulation: NavData[] = [
  {
    name: 'الإعدادات',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'الإعدادات'
    },
    children: [
      {
        name: 'الولايات',
        url: '/enpr/list-gouvernorat',
        icon: 'icon-puzzle'

      },
      {
        name: 'الرتب',
        url: '/enpr/list-grade',
        icon: 'icon-puzzle'

      },
      {
        name: 'المبيتات',
        url: '/enpr/list-foyer',
        icon: 'icon-puzzle'
      },
      {
        name: 'قاعات الدروس',
        url: '/enpr/list-salle',
        icon: 'icon-puzzle'
      },
      {
        name: 'العقوبات ',
        url: '/enpr/list-penalite',
        icon: 'icon-speedometer',
      },
    ]
  },
  {
    name: 'التكوين',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'التكوين'
    },
    children: [
      {
        name: 'التكوين الاساسي',
        url: '/enpr/list-eleve',
        icon: 'icon-puzzle',

        children: [
          {
            name: 'التلاميذ ',
            url: '/enpr/list-eleve',
            icon: 'icon-speedometer',
          },
          {
            name: '  المقبولين الجدد ',
            url: '/enpr/list-elv-pre-selection',
            icon: 'icon-speedometer',
          },
          {
            name: 'الراحة الطبية ',
            url: '/enpr/list-medicale',
            icon: 'icon-speedometer',
          }
        ]

      },
      {
        name: 'البرمجة الهيكلية',
        url: '/enpr',
        icon: 'icon-speedometer',

        children: [
          {
            name: 'الدورة التكوينية',
            url: '/enpr/list-session',
            icon: 'icon-puzzle'
          },
          {
            name: 'الفوج',
            url: '/enpr/list-group',
            icon: 'icon-puzzle'
          },
          {
            name: 'السرية',
            url: '/enpr/list-company',
            icon: 'icon-puzzle'
          },
          {
            name: 'الفصيل',
            url: '/enpr/list-section',
            icon: 'icon-puzzle'
          },
          {
            name: 'نموذج توضيحي',
            url: '/enpr/organi',
            icon: 'icon-puzzle'
          }

        ]
      }
    ]
  }, {
    name: 'إحصائيات',
    url: '/enpr/statistique',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }];
export const navItemsUser: NavData[] = [
  {
    name: 'التكوين',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'التكوين'
    },
    children: [
      {
        name: 'التكوين الاساسي',
        url: '/enpr/list-eleve',
        icon: 'icon-puzzle',

        children: [
          {
            name: 'التلاميذ ',
            url: '/enpr/list-eleve',
            icon: 'icon-speedometer',
          },
          {
            name: '  المقبولين الجدد ',
            url: '/enpr/list-elv-pre-selection',
            icon: 'icon-speedometer',
          }
        ]

      }
    ]
  }, {
    name: 'إحصائيات',
    url: '/enpr/statistique',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  }];
export const navItems1: NavData[] = [
  {
    name: 'الإعدادات',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'الإعدادات'
    },
    children: [
      {
        name: 'إضافة مستعمل',
        url: '/enpr/register',
        icon: 'icon-puzzle'
      },
      {
        name: 'الولايات',
        url: '/enpr/list-gouvernorat',
        icon: 'icon-puzzle'

      },
      {
        name: 'الرتب',
        url: '/enpr/list-grade',
        icon: 'icon-puzzle'

      },
      {
        name: 'المبيتات',
        url: '/enpr/list-foyer',
        icon: 'icon-puzzle'
      },
      {
        name: 'قاعات الدروس',
        url: '/enpr/list-salle',
        icon: 'icon-puzzle'
      },
      {
        name: 'العقوبات ',
        url: '/enpr/list-penalite',
        icon: 'icon-speedometer',
      },
    ]
  }
];


export const navItems: NavData[] = [

  {
    name: 'الإعدادات',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'الإعدادات'
    },
    children: [
      {
        name: 'إضافة مستعمل',
        url: '/enpr/register',
        icon: 'icon-puzzle'
      },
      {
        name: 'الولايات',
        url: '/enpr/list-gouvernorat',
        icon: 'icon-puzzle'

      },
      {
        name: 'الرتب',
        url: '/enpr/list-grade',
        icon: 'icon-puzzle'

      },
      {
        name: 'الإختصاصات',
        url: '/enpr/list-specialite',
        icon: 'icon-puzzle'

      },
      {
        name: 'الحالة المدنية',
        url: '/enpr/list-etatcivil',
        icon: 'icon-puzzle'

      },
      {
        name: 'المبيتات',
        url: '/enpr/list-foyer',
        icon: 'icon-puzzle'
      },
      {
        name: 'قاعات الدروس',
        url: '/enpr/list-salle',
        icon: 'icon-puzzle'
      },
      {
        name: 'العقوبات ',
        url: '/enpr/list-penalite',
        icon: 'icon-speedometer',
      },
    ]
  },
  {
    name: 'التكوين',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'التكوين'
    },
    children: [
      {
        name: 'التكوين الاساسي',
        url: '/enpr/list-eleve',
        icon: 'icon-puzzle',

        children: [
          {
            name: 'التلاميذ ',
            url: '/enpr/list-eleve',
            icon: 'icon-speedometer',
          },
          {
            name: '  المقبولين الجدد ',
            url: '/enpr/list-elv-pre-selection',
            icon: 'icon-speedometer',
          },


          {
            name: 'البرمجة الهيكلية',
            url: '/enpr',
            icon: 'icon-speedometer',

            children: [
              {
                name: 'الدورة التكوينية',
                url: '/enpr/list-session',
                icon: 'icon-puzzle'
              },
              {
                name: 'الفوج',
                url: '/enpr/list-group',
                icon: 'icon-puzzle'
              },
              {
                name: 'السرية',
                url: '/enpr/list-company',
                icon: 'icon-puzzle'
              },
              {
                name: 'الفصيل',
                url: '/enpr/list-section',
                icon: 'icon-puzzle'
              },
              {
                name: 'نموذج توضيحي',
                url: '/enpr/organi',
                icon: 'icon-puzzle'
              }

            ]
          },

        ]

      },
      {
        name: 'التكوين المستمر',
        url: '/enpr/list-eleve',
        icon: 'icon-puzzle'
      },


      {
        name: 'التكوين التطبيقي',
        url: '/enpr/list-eleve',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'المصحة',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'المصحة'
    },
    children: [

      {
        name: 'الراحة الطبية ',
        url: '/enpr/list-medicale',
        icon: 'icon-speedometer',
      }, {
        name: ' المواعيد ',
        url: '/enpr/rendezvous-today',
        icon: 'icon-speedometer',
      },
      {
        name: ' التلقيح ',
        url: '/enpr/list-vaccin',
        icon: 'icon-speedometer',
      },
    ]
  },
  {
    name: 'الإخصائي النفسي',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'النفسي'
    },
    children: [
      {
        name: 'الإختبارات',
        url: '/enpr/list-testpsy',
        icon: 'icon-puzzle'
      },
      {
        name: ' الملف النفسي',
        url: '/enpr/list-eleve',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: ' شؤون الأعوان و الإطارات',
    url: '/enpr',
    icon: 'icon-puzzle',
    badge: {
      variant: 'info',
      text: 'الأعوان و الإطارات'
    },
    children: [
      {
        name: 'الموظفين',
        url: '/enpr/list-personelle',
        icon: 'icon-puzzle'
      },
      {
        name: 'الادارات الفرعية',
        url: '/enpr/list-administration',
        icon: 'icon-puzzle'
      },
      {
        name: 'المصالح',
        url: '/enpr/list-service',
        icon: 'icon-puzzle'
      },
      {
        name: 'المهام',
        url: '/enpr/list-fonction',
        icon: 'icon-puzzle'
      },
      {
        name: 'نظام العمل',
        url: '/enpr/list-regime',
        icon: 'icon-puzzle'
      }
    ]
  },
  {
    name: 'إحصائيات',
    url: '/enpr/statistique',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },

];
