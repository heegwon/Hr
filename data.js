var APP_DATA = {
  "scenes": [
    {
      "id": "0-start-point",
      "name": "Start Point",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 0.4935817183332283,
          "pitch": 0.11005169917577007,
          "rotation": 0,
          "target": "1-sky-view-cine-spa--"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5689790173572433,
          "pitch": -0.011223666576283264,
          "title": "Sky View Cine Spa",
          "text": "스파샵 정면부터, 전체적인 외관을 보실 수 있으며, 내부로 들어갈 수 있는 길입니다."
        }
      ]
    },
    {
      "id": "1-sky-view-cine-spa--",
      "name": "Sky View Cine Spa 정면 ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 0.21179308380919792,
          "pitch": 0.1341706980730848,
          "rotation": 0,
          "target": "2-entrance"
        },
        {
          "yaw": -1.2116220303521459,
          "pitch": 0.1488037638097417,
          "rotation": 0,
          "target": "0-start-point"
        },
        {
          "yaw": 0.8594950902927678,
          "pitch": 0.0373461809814124,
          "rotation": 0,
          "target": "24-exteriot-east"
        },
        {
          "yaw": -0.7657783857496891,
          "pitch": 0.10367167303513547,
          "rotation": 0,
          "target": "26-exteriot-west"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7275161279926401,
          "pitch": -0.2609143173898012,
          "title": "Sky View Cine Spa",
          "text": "스파샵의 외관을 보실 수 있습니다.<div>정면 공간은 계절감을 느낄 수 있는 홍단풍 나무를 사용하였습니다.</div>"
        },
        {
          "yaw": 0.2973544981411873,
          "pitch": 0.04455617114268584,
          "title": "Entrance",
          "text": "스파샵 내부로 들어가실 수 있습니다."
        }
      ]
    },
    {
      "id": "2-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.124736377064952,
          "pitch": 0.16667623132835452,
          "rotation": 0,
          "target": "1-sky-view-cine-spa--"
        },
        {
          "yaw": 0.05102896302509308,
          "pitch": 0.11262342565129657,
          "rotation": 0,
          "target": "3-robby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.43688888957340666,
          "pitch": -0.3134606403307565,
          "title": "Spa Shop 정면&nbsp;",
          "text": "스파샵 로비로 들어가는 길입니다.&nbsp;"
        }
      ]
    },
    {
      "id": "3-robby",
      "name": "Robby",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9996326943406437,
          "pitch": 0.03889610307646585,
          "rotation": 0,
          "target": "4-therapy-zone"
        },
        {
          "yaw": 1.4637708780546674,
          "pitch": 0.09907411162224378,
          "rotation": 0,
          "target": "7-1f-hall"
        },
        {
          "yaw": -0.4696360502033805,
          "pitch": 0.03384431404657029,
          "rotation": 0,
          "target": "6-1f-toilet"
        },
        {
          "yaw": -3.0891725997565445,
          "pitch": 0.20514254695879863,
          "rotation": 0,
          "target": "2-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5783777793353888,
          "pitch": 0.14948793441265806,
          "title": "Robby",
          "text": "예약을 확인하며 대기 할 수 있는 로비 공간입니다.<div>왼쪽으로는 테라피존 , 오른쪽으로는 마사지룸과 2층으로 갈 수 있는 계단이 있습니다.&nbsp;</div>"
        },
        {
          "yaw": -2.956951080518131,
          "pitch": 0.10971542980532512,
          "title": "Spa Shop Exterior",
          "text": "Text"
        },
        {
          "yaw": -0.9656250611999226,
          "pitch": -0.0025265309993915963,
          "title": "Therapy Zone",
          "text": "테라피 존으로 가실 수 있습니다.<div>족욕존과, 마사지룸이 있는 공간입니다.</div>"
        },
        {
          "yaw": 1.5482758628405175,
          "pitch": -0.012738849210958136,
          "title": "1F Hall",
          "text": "1층 마사지실이 모여있는 공간으로 가실 수 있습니다."
        }
      ]
    },
    {
      "id": "4-therapy-zone",
      "name": "Therapy Zone",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.37449423623869293,
          "pitch": 0.03718300706903932,
          "rotation": 0,
          "target": "5-masage-room-"
        },
        {
          "yaw": -2.825430742414193,
          "pitch": 0.09274685494820467,
          "rotation": 0,
          "target": "3-robby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6424353853098186,
          "pitch": -0.2522991212056418,
          "title": "Therapy Zone",
          "text": "조망을 즐기며 족욕을 할 수 있는 공간으로 마사지룸 출입구와 분리하기 위해 낮은 수납장을 활용하였습니다.&nbsp;"
        }
      ]
    },
    {
      "id": "5-masage-room-",
      "name": "Masage Room ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 3.017868773298095,
          "pitch": 0.17782069621961583,
          "rotation": 0,
          "target": "29-therapy-zone-"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4825964736039907,
          "pitch": -0.41065816099572316,
          "title": "Masage Room",
          "text": "2인 수용 가능한 마사지 공간입니다.<div>차분한 분위기를 위해 어두운 컬러의 바닥재와 베이지톤의 벽재를 사용하여 구성하였습니다.</div>"
        }
      ]
    },
    {
      "id": "6-1f-toilet",
      "name": "1F Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.243254569354459,
          "pitch": 0.26909751401392334,
          "rotation": 0,
          "target": "3-robby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.34335178244995035,
          "pitch": 0.14154655592595056,
          "title": "1F Toilet",
          "text": "1층 화장실 입니다.&nbsp;<div>고급스러운 분위기를 연출하기 위해&nbsp;</div><div>로비와 반대되는 어두운 컬러를 사용하였습니다.</div>"
        }
      ]
    },
    {
      "id": "7-1f-hall",
      "name": "1F Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2836338566494465,
          "pitch": 0.09039764578151122,
          "rotation": 0,
          "target": "8-masage-room-"
        },
        {
          "yaw": 0.2174533759082653,
          "pitch": 0.04325839511175111,
          "rotation": 0,
          "target": "9-masage-room"
        },
        {
          "yaw": 1.7263687173978886,
          "pitch": 0.25384080754826677,
          "rotation": 0,
          "target": "10-stairs"
        },
        {
          "yaw": -3.1064768735218227,
          "pitch": 0.13746373390342548,
          "rotation": 0,
          "target": "3-robby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.47499856342108515,
          "pitch": -0.3330594201339778,
          "title": "1F Hall&nbsp;",
          "text": "4개의 마사지룸이 모여있는 공간으로 베이지컬러의 벽재와 딥브라운 컬러의 목재문을 사용하여 대비감을 주었습니다."
        },
        {
          "yaw": 1.9039161959979811,
          "pitch": 0.09154740301513975,
          "title": "Stairs",
          "text": "2층으로 올라가실 수 있습니다."
        }
      ]
    },
    {
      "id": "8-masage-room-",
      "name": "Masage Room ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.79958804750866,
          "pitch": 0.15106548497319316,
          "rotation": 0,
          "target": "7-1f-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.2986877643115413,
          "pitch": -0.3636309896962242,
          "title": "Masage Room",
          "text": "2인 수용 가능한 마사지 공간입니다.<div>차분한 분위기를 위해 어두운 컬러의 바닥재와 베이지톤의 벽재를 사용하여 구성하였습니다.</div>"
        }
      ]
    },
    {
      "id": "9-masage-room",
      "name": "Masage Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5799982099139012,
          "pitch": 0.08779695428382617,
          "rotation": 0,
          "target": "7-1f-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7847705498419515,
          "pitch": -0.18806236776640972,
          "title": "Masage Room",
          "text": "2인 수용 가능한 마사지 공간입니다.<div>차분한 분위기를 위해 어두운 컬러의 바닥재와 베이지톤의 벽재를 사용하여 구성하였습니다.</div>"
        }
      ]
    },
    {
      "id": "10-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.014671442483969344,
          "pitch": -0.03177235593119576,
          "rotation": 0,
          "target": "11-2f-hall"
        },
        {
          "yaw": -2.9984753584180304,
          "pitch": 0.7675155961557252,
          "rotation": 0,
          "target": "7-1f-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-2f-hall",
      "name": "2F Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7104433929420289,
          "pitch": 0.16170812218689612,
          "rotation": 0,
          "target": "14-2f-toilet"
        },
        {
          "yaw": -2.9804853380210954,
          "pitch": 0.23632093650382302,
          "rotation": 0,
          "target": "12-1f-terrace-"
        },
        {
          "yaw": 0.17155738273551613,
          "pitch": 0.2917040866314444,
          "rotation": 0,
          "target": "15-2f-hall"
        },
        {
          "yaw": 2.2361769851088553,
          "pitch": 0.015401559111930752,
          "rotation": 0,
          "target": "18-2f-terrace-entrance"
        },
        {
          "yaw": 1.56670503533417,
          "pitch": 0.5634460508662062,
          "rotation": 0,
          "target": "7-1f-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4022490954246596,
          "pitch": -0.3398472767243952,
          "title": "2F Hall&nbsp;",
          "text": "2층 복도로 마사지룸과 옥외공간으로 갈 수 있는 통로입니다."
        },
        {
          "yaw": -2.8732847166012174,
          "pitch": 0.10796787858119039,
          "title": "1F Terrace",
          "text": "1층 옥외공간으로 가실 수 있습니다."
        }
      ]
    },
    {
      "id": "12-1f-terrace-",
      "name": "1F Terrace ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.03329637470744373,
          "pitch": 0.04878687926375136,
          "rotation": 0,
          "target": "28-1f-terrace"
        },
        {
          "yaw": -3.0504237899966036,
          "pitch": 0.05850923257991525,
          "rotation": 0,
          "target": "11-2f-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.13899556680884118,
          "pitch": -0.04395465498793527,
          "title": "1F Terrace",
          "text": "1층 옥외로 나가는 통로로 대나무 길을 연출하였습니다."
        }
      ]
    },
    {
      "id": "13-1f-terrace",
      "name": "1F Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.6095631167792668,
          "pitch": 0.08156860238679364,
          "rotation": 0,
          "target": "11-2f-hall"
        },
        {
          "yaw": 2.526884222808264,
          "pitch": 0.04993572063300178,
          "rotation": 0,
          "target": "28-1f-terrace"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6903656297691896,
          "pitch": -0.09833130934381451,
          "title": "1F Terrace",
          "text": "1층 옥외 공간으로 영화나 음악을 시청하며 차를 마실 수 있는 공간입니다."
        }
      ]
    },
    {
      "id": "14-2f-toilet",
      "name": "2F Toilet",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.018962201182642247,
          "pitch": 0.15034099926468159,
          "rotation": 0,
          "target": "11-2f-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6509211854334218,
          "pitch": -0.12651067721772336,
          "title": "2F Toilet",
          "text": "2층 화장실 입니다.&nbsp;<div>고급스러운 분위기를 연출하기 위해&nbsp;</div><div>로비와 반대되는 어두운 컬러를 사용하였습니다.</div>"
        }
      ]
    },
    {
      "id": "15-2f-hall",
      "name": "2F Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.32118015468840433,
          "pitch": 0.1172180214925227,
          "rotation": 0,
          "target": "16-family-masage-room"
        },
        {
          "yaw": -0.3235262854902885,
          "pitch": 0.09237286834252423,
          "rotation": 0,
          "target": "17-couple-masage-room-"
        },
        {
          "yaw": -2.34482670655135,
          "pitch": 0.10298776141940635,
          "rotation": 0,
          "target": "27-1f-terrace-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-family-masage-room",
      "name": "Family Masage Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.8667488069906533,
          "pitch": 0.11281925441875629,
          "rotation": 0,
          "target": "15-2f-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5442026739548691,
          "pitch": -0.22961745188020544,
          "title": "Family Masage Room",
          "text": "4인 수용 가능한 마사지 공간입니다.<div>차분한 분위기를 위해 어두운 컬러의 바닥재와 베이지톤의 벽재를 사용하여 구성하였습니다.</div>"
        }
      ]
    },
    {
      "id": "17-couple-masage-room-",
      "name": "Couple Masage Room ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.200324617939014,
          "pitch": 0.08789173562217023,
          "rotation": 0,
          "target": "15-2f-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7130325216650117,
          "pitch": -0.2423385031024381,
          "title": "Couple Masage Room",
          "text": "2인 수용 가능한 마사지 공간입니다.<div>차분한 분위기를 위해 어두운 컬러의 바닥재와 베이지톤의 벽재를 사용하여 구성하였습니다.</div>"
        }
      ]
    },
    {
      "id": "18-2f-terrace-entrance",
      "name": "2F Terrace Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.5396019870895838
      },
      "linkHotspots": [
        {
          "yaw": 0.22571265292362597,
          "pitch": 0.1979391975888376,
          "rotation": 0,
          "target": "19-2f-terrace-hall"
        },
        {
          "yaw": -3.1018336619028766,
          "pitch": 0.21794248122401783,
          "rotation": 0,
          "target": "11-2f-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5084816772857028,
          "pitch": 0.0058190052491866595,
          "title": "2F Terrace",
          "text": "2층 이용고객들만 사용가능한 개별 스파 공간입니다."
        }
      ]
    },
    {
      "id": "19-2f-terrace-hall",
      "name": "2F Terrace Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0060355195378978,
          "pitch": 0.35499595363486947,
          "rotation": 0,
          "target": "20-2f-terrace-hall"
        },
        {
          "yaw": -3.103896919374794,
          "pitch": 0.31622290232543726,
          "rotation": 0,
          "target": "11-2f-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 1.4257667222157107,
          "pitch": -0.17111682069302425,
          "title": "2F Spa Room",
          "text": "2층 이용고객들만 사용가능한 개별 스파 공간입니다."
        }
      ]
    },
    {
      "id": "20-2f-terrace-hall",
      "name": "2F Terrace Hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6481045728728283,
          "pitch": 0.09706101724330196,
          "rotation": 0,
          "target": "21-spa-room-1"
        },
        {
          "yaw": 0.4508356996041769,
          "pitch": 0.07779212066100705,
          "rotation": 0,
          "target": "22-spa-room-2"
        },
        {
          "yaw": 3.050208326786173,
          "pitch": 0.19665960933327042,
          "rotation": 0,
          "target": "23-spa-room-3"
        },
        {
          "yaw": -1.8431011811533864,
          "pitch": 0.15590925159654034,
          "rotation": 0,
          "target": "18-2f-terrace-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-spa-room-1",
      "name": "Spa Room 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9360576106483602,
          "pitch": 0.21117040266305054,
          "rotation": 0,
          "target": "20-2f-terrace-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.9080150807658853,
          "pitch": -0.142086073704343,
          "title": "Spa Room 1",
          "text": "2인 수용 가능한 스파 공간으로 외부 시선을 차단하기 위해 대나무를 설치 하였습니다."
        }
      ]
    },
    {
      "id": "22-spa-room-2",
      "name": "Spa Room 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.5920834403506294,
          "pitch": 0.16953690315717118,
          "rotation": 0,
          "target": "20-2f-terrace-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.48557935310525124,
          "pitch": -0.15538016622766548,
          "title": "Spa Room 2",
          "text": "4인 수용 가능한 스파 공간으로 외부 시선을 차단하기 위해 대나무를 설치 하였습니다."
        }
      ]
    },
    {
      "id": "23-spa-room-3",
      "name": "Spa Room 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.9798780027016427,
          "pitch": 0.2990283237825224,
          "rotation": 0,
          "target": "20-2f-terrace-hall"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.5067849248531857,
          "pitch": -0.18614260041120545,
          "title": "Spa Room 3",
          "text": "2인 수용 가능한 스파 공간으로 외부 시선을 차단하기 위해 대나무를 설치 하였습니다."
        }
      ]
    },
    {
      "id": "24-exteriot-east",
      "name": "Exteriot East",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.691746634263902,
          "pitch": 0.08529947376860747,
          "rotation": 0,
          "target": "1-sky-view-cine-spa--"
        },
        {
          "yaw": 0.6824569197232648,
          "pitch": 0.07396345043449415,
          "rotation": 0,
          "target": "25-exterior-north"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7419615840318574,
          "pitch": -0.2980667303436668,
          "title": "Sky View Cine Spa",
          "text": "스파샵의 동쪽 외관을 보실 수 있습니다."
        }
      ]
    },
    {
      "id": "25-exterior-north",
      "name": "Exterior North",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9479372884105981,
          "pitch": 0.05951782450630816,
          "rotation": 0,
          "target": "26-exteriot-west"
        },
        {
          "yaw": -0.86274486911406,
          "pitch": 0.0835663726652065,
          "rotation": 0,
          "target": "24-exteriot-east"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.7336738507147089,
          "pitch": -0.30666908050460506,
          "title": "Sky View Cine Spa",
          "text": "스파샵의 뒷 모습을 보실 수 있습니다.<div>실내에서 볼 수 있는 조경을 설치해 조망 포인트를 주었습니다.<br><div><br></div></div>"
        }
      ]
    },
    {
      "id": "26-exteriot-west",
      "name": "Exteriot West",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7385520813472404,
          "pitch": 0.062314930128142265,
          "rotation": 0,
          "target": "1-sky-view-cine-spa--"
        },
        {
          "yaw": -0.8035655610832801,
          "pitch": 0.07845004085333684,
          "rotation": 0,
          "target": "25-exterior-north"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6995973819787231,
          "pitch": -0.20763561529241414,
          "title": "Sky View Cine Spa",
          "text": "총 8대 수용가능한 주차 공간과 야외 조경을 설치 하였습니다."
        }
      ]
    },
    {
      "id": "27-1f-terrace-entrance",
      "name": "1F Terrace Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.024421503449836734,
          "pitch": 0.12586629811290706,
          "rotation": 0,
          "target": "12-1f-terrace-"
        },
        {
          "yaw": 0.6632736574015752,
          "pitch": 0.1786834050983952,
          "rotation": 0,
          "target": "14-2f-toilet"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.13681603945378207,
          "pitch": 0.039576324457403445,
          "title": "1F Terrace",
          "text": "1층 옥외공간으로 가실 수 있습니다."
        }
      ]
    },
    {
      "id": "28-1f-terrace",
      "name": "1F Terrace",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.11762527635702291,
          "pitch": 0.11651988637263955,
          "rotation": 0,
          "target": "13-1f-terrace"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.4991313546759013,
          "pitch": -0.10455293713962277,
          "title": "1F Terrace",
          "text": "1층 옥외 공간으로 영화나 음악을 시청하며 차를 마실 수 있는 공간입니다."
        }
      ]
    },
    {
      "id": "29-therapy-zone-",
      "name": "Therapy Zone ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5498365094819739,
          "pitch": 0.032174742834019554,
          "rotation": 0,
          "target": "3-robby"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.6263762859395925,
          "pitch": -0.05997663041683765,
          "title": "Therapy Zone",
          "text": "조망을 즐기며 족욕을 할 수 있는 공간으로 마사지룸 출입구와 분리하기 위해 낮은 수납장을 활용하였습니다.&nbsp;"
        }
      ]
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": true
  }
};
