
import fetch from "node-fetch";


// Define your location coordinates
const homeLat = 49.2077738; //   49.2077738
const homeLong = 16.6241738; //  16.6241738
//50.091097,14.401617 - Prazsky Hrad: doesn't work becuase the API is based only on Morava region  
//49.208668,16.59438 - MZK Brno
//49.256769,16.46176 - Hrad Veveri
//49.194493,16.599177 - Spilberk Castle - depends where we're standing 

/*
const stops = [
  {
    "StopID": 1001,
    "Zone": 101,
    "Name": "Achtelky",
    "Latitude": 49.185345,
    "Longitude": 16.542756,
    "IsPublic": true,
    "LineList": "90"
  },
  {
    "StopID": 1002,
    "Zone": 100,
    "Name": "Akátky",
    "Latitude": 49.208634,
    "Longitude": 16.648730,
    "IsPublic": true,
    "LineList": "27,57,99"
  },
  {
    "StopID": 1003,
    "Zone": 101,
    "Name": "Antonína Procházky",
    "Latitude": 49.193926,
    "Longitude": 16.560528,
    "IsPublic": true,
    "LineList": "37,52,68,97"
  },
  {
    "StopID": 1004,
    "Zone": 101,
    "Name": "Adamcova",
    "Latitude": 49.218338,
    "Longitude": 16.519954,
    "IsPublic": true,
    "LineList": "50,790"
  },
  {
    "StopID": 1006,
    "Zone": 100,
    "Name": "Antonínská",
    "Latitude": 49.203426,
    "Longitude": 16.606796,
    "IsPublic": true,
    "LineList": "1,2,3,4,6,7,8,9,10,90,91"
  },
  {
    "StopID": 1007,
    "Zone": 101,
    "Name": "Anthropos",
    "Latitude": 49.193345,
    "Longitude": 16.566013,
    "IsPublic": true,
    "LineList": "25,26,35,37,38,39,44,52,68,84,95,97,98"
  },
  {
    "StopID": 1008,
    "Zone": 101,
    "Name": "Arbesova",
    "Latitude": 49.225977,
    "Longitude": 16.630652,
    "IsPublic": true,
    "LineList": "46,92"
  },
  {
    "StopID": 1010,
    "Zone": 101,
    "Name": "Airport Park",
    "Latitude": 49.158124,
    "Longitude": 16.683868,
    "IsPublic": true,
    "LineList": "77,89"
  },
  {
    "StopID": 1011,
    "Zone": 100,
    "Name": "Autobusové nádraží",
    "Latitude": 49.186521,
    "Longitude": 16.617986,
    "IsPublic": true,
    "LineList": "12,40,44,48,49,76,77,84,95,103"
  },
  {
    "StopID": 1012,
    "Zone": 101,
    "Name": "Bartákova",
    "Latitude": 49.203984,
    "Longitude": 16.678964,
    "IsPublic": true,
    "LineList": "27,99"
  },
  {
    "StopID": 1013,
    "Zone": 100,
    "Name": "Barvičova",
    "Latitude": 49.201118,
    "Longitude": 16.575764,
    "IsPublic": true,
    "LineList": "35,39"
  },
  {
    "StopID": 1014,
    "Zone": 100,
    "Name": "Obřany, Babická",
    "Latitude": 49.228066,
    "Longitude": 16.652340,
    "IsPublic": true,
    "LineList": "4"
  },
  {
    "StopID": 1015,
    "Zone": 101,
    "Name": "Bartolomějská",
    "Latitude": 49.203599,
    "Longitude": 16.489424,
    "IsPublic": true,
    "LineList": "52,98"
  },
  {
    "StopID": 1016,
    "Zone": 101,
    "Name": "Bednářova",
    "Latitude": 49.161902,
    "Longitude": 16.613570,
    "IsPublic": true,
    "LineList": "49"
  },
  {
    "StopID": 1017,
    "Zone": 101,
    "Name": "Bellova",
    "Latitude": 49.194042,
    "Longitude": 16.531232,
    "IsPublic": true,
    "LineList": "37,50,97"
  },
  {
    "StopID": 1018,
    "Zone": 101,
    "Name": "Bělohorská",
    "Latitude": 49.189951,
    "Longitude": 16.662938,
    "IsPublic": true,
    "LineList": "8,10,55,75,89,98"
  },
  {
    "StopID": 1019,
    "Zone": 100,
    "Name": "Bauerova",
    "Latitude": 49.185782,
    "Longitude": 16.574652,
    "IsPublic": true,
    "LineList": "44,84,98"
  },
  {
    "StopID": 1021,
    "Zone": 101,
    "Name": "Běloruská",
    "Latitude": 49.170590,
    "Longitude": 16.581156,
    "IsPublic": true,
    "LineList": "6,7,8,91,790"
  },
  {
    "StopID": 1023,
    "Zone": 100,
    "Name": "Bieblova",
    "Latitude": 49.215971,
    "Longitude": 16.615406,
    "IsPublic": true,
    "LineList": "7,9,93"
  },
  {
    "StopID": 1024,
    "Zone": 100,
    "Name": "Bidláky",
    "Latitude": 49.178402,
    "Longitude": 16.606213,
    "IsPublic": true,
    "LineList": "40"
  },
  {
    "StopID": 1026,
    "Zone": 101,
    "Name": "Bílá hora",
    "Latitude": 49.194275,
    "Longitude": 16.667629,
    "IsPublic": true,
    "LineList": "8,10,55,98"
  },
  {
    "StopID": 1027,
    "Zone": 100,
    "Name": "Bílovická",
    "Latitude": 49.232561,
    "Longitude": 16.648627,
    "IsPublic": true,
    "LineList": "72,75,94"
  },
  {
    "StopID": 1028,
    "Zone": 101,
    "Name": "Blažkova",
    "Latitude": 49.230082,
    "Longitude": 16.631032,
    "IsPublic": true,
    "LineList": "46,92"
  },
  {
    "StopID": 1031,
    "Zone": 101,
    "Name": "Bohunická",
    "Latitude": 49.162460,
    "Longitude": 16.599594,
    "IsPublic": true,
    "LineList": "2,50,96,790"
  },
  {
    "StopID": 1033,
    "Zone": 101,
    "Name": "Borodinova",
    "Latitude": 49.196244,
    "Longitude": 16.545492,
    "IsPublic": true,
    "LineList": "37,97"
  },
  {
    "StopID": 1034,
    "Zone": 101,
    "Name": "Borovník",
    "Latitude": 49.198485,
    "Longitude": 16.499738,
    "IsPublic": true,
    "LineList": "51"
  },
  {
    "StopID": 1036,
    "Zone": 101,
    "Name": "Bořetická",
    "Latitude": 49.201410,
    "Longitude": 16.658674,
    "IsPublic": true,
    "LineList": "27,78,99"
  },
  {
    "StopID": 1037,
    "Zone": 101,
    "Name": "Bosonohy",
    "Latitude": 49.176446,
    "Longitude": 16.525653,
    "IsPublic": true,
    "LineList": "69,96"
  },
  {
    "StopID": 1038,
    "Zone": 100,
    "Name": "Botanická",
    "Latitude": 49.210704,
    "Longitude": 16.597622,
    "IsPublic": true,
    "LineList": "32"
  },
  {
    "StopID": 1041,
    "Zone": 100,
    "Name": "Bráfova",
    "Latitude": 49.206955,
    "Longitude": 16.570536,
    "IsPublic": true,
    "LineList": "11"
  },
  {
    "StopID": 1042,
    "Zone": 101,
    "Name": "Branka",
    "Latitude": 49.219368,
    "Longitude": 16.547816,
    "IsPublic": true,
    "LineList": "3,10,89"
  },
  {
    "StopID": 1043,
    "Zone": 101,
    "Name": "Brechtova",
    "Latitude": 49.233750,
    "Longitude": 16.629322,
    "IsPublic": true,
    "LineList": "46,92"
  },
  {
    "StopID": 1046,
    "Zone": 101,
    "Name": "Brněnky",
    "Latitude": 49.178866,
    "Longitude": 16.675154,
    "IsPublic": true,
    "LineList": "31"
  },
  {
    "StopID": 1047,
    "Zone": 100,
    "Name": "Burianovo náměstí",
    "Latitude": 49.212378,
    "Longitude": 16.578603,
    "IsPublic": true,
    "LineList": "3,10,92"
  },
  {
    "StopID": 1048,
    "Zone": 100,
    "Name": "Buzkova",
    "Latitude": 49.194150,
    "Longitude": 16.641128,
    "IsPublic": true,
    "LineList": "9,64,84,89,98"
  },
  {
    "StopID": 1052,
    "Zone": 101,
    "Name": "Bzenecká",
    "Latitude": 49.205970,
    "Longitude": 16.661120,
    "IsPublic": true,
    "LineList": "27,57,78,99"
  },
  {
    "StopID": 1053,
    "Zone": 100,
    "Name": "Celní",
    "Latitude": 49.179358,
    "Longitude": 16.595285,
    "IsPublic": true,
    "LineList": "2,5,6,7,90,91"
  },
  {
    "StopID": 1054,
    "Zone": 100,
    "Name": "Cacovická",
    "Latitude": 49.214376,
    "Longitude": 16.638163,
    "IsPublic": true,
    "LineList": "4,72"
  },
  {
    "StopID": 1055,
    "Zone": 100,
    "Name": "Čápkova",
    "Latitude": 49.203434,
    "Longitude": 16.593136,
    "IsPublic": true,
    "LineList": "25,26,38,39"
  },
  {
    "StopID": 1058,
    "Zone": 101,
    "Name": "Čejkovická",
    "Latitude": 49.200336,
    "Longitude": 16.662160,
    "IsPublic": true,
    "LineList": "27,78,99"
  },
  {
    "StopID": 1061,
    "Zone": 101,
    "Name": "Čermákova",
    "Latitude": 49.164342,
    "Longitude": 16.565102,
    "IsPublic": true,
    "LineList": "51,69,96,403,404,790"
  },
  {
    "StopID": 1062,
    "Zone": 101,
    "Name": "Černého",
    "Latitude": 49.213984,
    "Longitude": 16.522950,
    "IsPublic": true,
    "LineList": "30,92"
  },
  {
    "StopID": 1063,
    "Zone": 101,
    "Name": "Černohorská",
    "Latitude": 49.258708,
    "Longitude": 16.571388,
    "IsPublic": true,
    "LineList": "41,71,91"
  },
  {
    "StopID": 1064,
    "Zone": 101,
    "Name": "Černovická terasa I",
    "Latitude": 49.171508,
    "Longitude": 16.673293,
    "IsPublic": true,
    "LineList": "73,77,89,790,795"
  },
  {
    "StopID": 1065,
    "Zone": 101,
    "Name": "Černovická terasa II",
    "Latitude": 49.167728,
    "Longitude": 16.675694,
    "IsPublic": true,
    "LineList": "73,77,89,790,795"
  },
  {
    "StopID": 1066,
    "Zone": 101,
    "Name": "Černovická",
    "Latitude": 49.176878,
    "Longitude": 16.627324,
    "IsPublic": true,
    "LineList": "49,67,94"
  },
  {
    "StopID": 1067,
    "Zone": 100,
    "Name": "Černovické nábřeží",
    "Latitude": 49.180623,
    "Longitude": 16.629860,
    "IsPublic": true,
    "LineList": "67"
  },
  {
    "StopID": 1068,
    "Zone": 101,
    "Name": "Černovičky",
    "Latitude": 49.183212,
    "Longitude": 16.668265,
    "IsPublic": true,
    "LineList": "31,33,75,76,89,96,601,602,701,702"
  },
  {
    "StopID": 1069,
    "Zone": 101,
    "Name": "Čertova rokle",
    "Latitude": 49.226399,
    "Longitude": 16.623268,
    "IsPublic": true,
    "LineList": "7,9"
  },
  {
    "StopID": 1070,
    "Zone": 100,
    "Name": "Červený kopec",
    "Latitude": 49.182091,
    "Longitude": 16.587995,
    "IsPublic": true,
    "LineList": "62"
  },
  {
    "StopID": 1071,
    "Zone": 100,
    "Name": "Červený písek",
    "Latitude": 49.220474,
    "Longitude": 16.657375,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1072,
    "Zone": 101,
    "Name": "Kr. Pole, Červinkova",
    "Latitude": 49.225029,
    "Longitude": 16.582866,
    "IsPublic": true,
    "LineList": "3,4,5,12,99"
  },
  {
    "StopID": 1073,
    "Zone": 100,
    "Name": "Česká",
    "Latitude": 49.197939,
    "Longitude": 16.605886,
    "IsPublic": true,
    "LineList": "3,4,5,6,8,9,10,12,32,34,36,92,93,99"
  },
  {
    "StopID": 1077,
    "Zone": 100,
    "Name": "Čtvery hony",
    "Latitude": 49.225880,
    "Longitude": 16.645263,
    "IsPublic": true,
    "LineList": "4,72,75,94"
  },
  {
    "StopID": 1078,
    "Zone": 101,
    "Name": "Čtvrtě",
    "Latitude": 49.178319,
    "Longitude": 16.562330,
    "IsPublic": true,
    "LineList": "25,26,37,50,90,95"
  },
  {
    "StopID": 1082,
    "Zone": 100,
    "Name": "Dělnický dům",
    "Latitude": 49.195559,
    "Longitude": 16.649869,
    "IsPublic": true,
    "LineList": "9,55,58,75,78,89,97,98"
  },
  {
    "StopID": 1083,
    "Zone": 100,
    "Name": "Depo ČD",
    "Latitude": 49.214862,
    "Longitude": 16.652828,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1085,
    "Zone": 101,
    "Name": "Díly",
    "Latitude": 49.254250,
    "Longitude": 16.574421,
    "IsPublic": true,
    "LineList": "41,71,91"
  },
  {
    "StopID": 1086,
    "Zone": 100,
    "Name": "Dětská nemocnice",
    "Latitude": 49.202932,
    "Longitude": 16.618830,
    "IsPublic": true,
    "LineList": "3,5,9,92,93"
  },
  {
    "StopID": 1087,
    "Zone": 101,
    "Name": "Divišova čtvrť",
    "Latitude": 49.223599,
    "Longitude": 16.613037,
    "IsPublic": true,
    "LineList": "44,72,84,93"
  },
  {
    "StopID": 1088,
    "Zone": 100,
    "Name": "Dobrovského",
    "Latitude": 49.218060,
    "Longitude": 16.587650,
    "IsPublic": true,
    "LineList": "3,4,5,12,93,99"
  },
  {
    "StopID": 1091,
    "Zone": 101,
    "Name": "Dohnalova",
    "Latitude": 49.249496,
    "Longitude": 16.617749,
    "IsPublic": true,
    "LineList": "43,93"
  },
  {
    "StopID": 1092,
    "Zone": 101,
    "Name": "Dolní Heršpice",
    "Latitude": 49.152198,
    "Longitude": 16.621592,
    "IsPublic": true,
    "LineList": "49,94"
  },
  {
    "StopID": 1095,
    "Zone": 101,
    "Name": "Drážní",
    "Latitude": 49.167392,
    "Longitude": 16.685454,
    "IsPublic": true,
    "LineList": "77"
  },
  {
    "StopID": 1096,
    "Zone": 101,
    "Name": "Drdy",
    "Latitude": 49.209414,
    "Longitude": 16.492426,
    "IsPublic": true,
    "LineList": "51,52,98"
  },
  {
    "StopID": 1097,
    "Zone": 101,
    "Name": "Dunajská",
    "Latitude": 49.169155,
    "Longitude": 16.556080,
    "IsPublic": true,
    "LineList": "6,7,69,96,790"
  },
  {
    "StopID": 1098,
    "Zone": 101,
    "Name": "Dvorska, smyčka",
    "Latitude": 49.143394,
    "Longitude": 16.707386,
    "IsPublic": true,
    "LineList": "48,89"
  },
  {
    "StopID": 1099,
    "Zone": 101,
    "Name": "Duhová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1100,
    "Zone": 100,
    "Name": "Erbenova",
    "Latitude": 49.209515,
    "Longitude": 16.615701,
    "IsPublic": true,
    "LineList": "46"
  },
  {
    "StopID": 1101,
    "Zone": 510,
    "Name": "Dvůr v lese",
    "Latitude": 49.125693,
    "Longitude": 16.633448,
    "IsPublic": true,
    "LineList": "49"
  },
  {
    "StopID": 1102,
    "Zone": 101,
    "Name": "Bystrc, Ečerova",
    "Latitude": 49.218242,
    "Longitude": 16.509265,
    "IsPublic": true,
    "LineList": "3,10,51,52,54,98,790"
  },
  {
    "StopID": 1103,
    "Zone": 101,
    "Name": "Elplova",
    "Latitude": 49.210446,
    "Longitude": 16.674988,
    "IsPublic": true,
    "LineList": "55,78,98"
  },
  {
    "StopID": 1104,
    "Zone": 101,
    "Name": "Edisonova",
    "Latitude": 49.228280,
    "Longitude": 16.576461,
    "IsPublic": true,
    "LineList": "72,99"
  },
  {
    "StopID": 1105,
    "Zone": 101,
    "Name": "Ericha Roučky",
    "Latitude": 49.175227,
    "Longitude": 16.669237,
    "IsPublic": true,
    "LineList": "75,77,89,790,795"
  },
  {
    "StopID": 1106,
    "Zone": 101,
    "Name": "Faměrovo náměstí",
    "Latitude": 49.176871,
    "Longitude": 16.640466,
    "IsPublic": true,
    "LineList": "47,49,94"
  },
  {
    "StopID": 1107,
    "Zone": 101,
    "Name": "Filipova",
    "Latitude": 49.217714,
    "Longitude": 16.525190,
    "IsPublic": true,
    "LineList": "30,92"
  },
  {
    "StopID": 1108,
    "Zone": 101,
    "Name": "Filkukova",
    "Latitude": 49.243880,
    "Longitude": 16.581656,
    "IsPublic": true,
    "LineList": "1,91"
  },
  {
    "StopID": 1110,
    "Zone": 101,
    "Name": "Firkušného",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1111,
    "Zone": 101,
    "Name": "Fillova",
    "Latitude": 49.229226,
    "Longitude": 16.616896,
    "IsPublic": true,
    "LineList": "57,92"
  },
  {
    "StopID": 1112,
    "Zone": 100,
    "Name": "Fügnerova",
    "Latitude": 49.219976,
    "Longitude": 16.619348,
    "IsPublic": true,
    "LineList": "7,9,93"
  },
  {
    "StopID": 1113,
    "Zone": 100,
    "Name": "Gajdošova",
    "Latitude": 49.198483,
    "Longitude": 16.645774,
    "IsPublic": true,
    "LineList": "44,55,58,75,78,84,97"
  },
  {
    "StopID": 1114,
    "Zone": 100,
    "Name": "Francouzská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1116,
    "Zone": 100,
    "Name": "Geislerova",
    "Latitude": 49.192638,
    "Longitude": 16.634790,
    "IsPublic": true,
    "LineList": "8,9,10,64,84,89,98"
  },
  {
    "StopID": 1117,
    "Zone": 101,
    "Name": "Glinkova",
    "Latitude": 49.193913,
    "Longitude": 16.544278,
    "IsPublic": true,
    "LineList": "37,97"
  },
  {
    "StopID": 1118,
    "Zone": 101,
    "Name": "Glocova",
    "Latitude": 49.151188,
    "Longitude": 16.659329,
    "IsPublic": true,
    "LineList": "40,74,85,95"
  },
  {
    "StopID": 1121,
    "Zone": 100,
    "Name": "Grohova",
    "Latitude": 49.201240,
    "Longitude": 16.599534,
    "IsPublic": true,
    "LineList": "3,4,5,10,12,92,93,99"
  },
  {
    "StopID": 1122,
    "Zone": 101,
    "Name": "Gruzínská",
    "Latitude": 49.166131,
    "Longitude": 16.585378,
    "IsPublic": true,
    "LineList": "50,96"
  },
  {
    "StopID": 1127,
    "Zone": 101,
    "Name": "Hájecká",
    "Latitude": 49.174660,
    "Longitude": 16.641766,
    "IsPublic": true,
    "LineList": "47,49,94"
  },
  {
    "StopID": 1128,
    "Zone": 101,
    "Name": "Halasovo náměstí",
    "Latitude": 49.223382,
    "Longitude": 16.622508,
    "IsPublic": true,
    "LineList": "7,9,44,57,72,84,86,92,93"
  },
  {
    "StopID": 1130,
    "Zone": 101,
    "Name": "Hamerláky",
    "Latitude": 49.236340,
    "Longitude": 16.603766,
    "IsPublic": true,
    "LineList": "43,93"
  },
  {
    "StopID": 1131,
    "Zone": 101,
    "Name": "Hanácká",
    "Latitude": 49.147098,
    "Longitude": 16.667018,
    "IsPublic": true,
    "LineList": "40,48,73,74,78,85,95,109"
  },
  {
    "StopID": 1132,
    "Zone": 101,
    "Name": "Lesná, Haškova",
    "Latitude": 49.233657,
    "Longitude": 16.624466,
    "IsPublic": true,
    "LineList": "46,57,92"
  },
  {
    "StopID": 1133,
    "Zone": 101,
    "Name": "Haasova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1136,
    "Zone": 101,
    "Name": "Havránkova",
    "Latitude": 49.157660,
    "Longitude": 16.621496,
    "IsPublic": true,
    "LineList": "49,94"
  },
  {
    "StopID": 1137,
    "Zone": 100,
    "Name": "Heinrichova",
    "Latitude": 49.200413,
    "Longitude": 16.584511,
    "IsPublic": true,
    "LineList": "4,89"
  },
  {
    "StopID": 1138,
    "Zone": 101,
    "Name": "Heleny Malířové",
    "Latitude": 49.223344,
    "Longitude": 16.629390,
    "IsPublic": true,
    "LineList": "46,92"
  },
  {
    "StopID": 1139,
    "Zone": 101,
    "Name": "Helenčina",
    "Latitude": 49.206864,
    "Longitude": 16.486008,
    "IsPublic": true,
    "LineList": "52"
  },
  {
    "StopID": 1141,
    "Zone": 101,
    "Name": "Heršpická",
    "Latitude": 49.170364,
    "Longitude": 16.599630,
    "IsPublic": true,
    "LineList": "51,96,501"
  },
  {
    "StopID": 1142,
    "Zone": 100,
    "Name": "Hlaváčova",
    "Latitude": 49.229189,
    "Longitude": 16.648819,
    "IsPublic": true,
    "LineList": "72,75,94"
  },
  {
    "StopID": 1143,
    "Zone": 101,
    "Name": "Hlavní",
    "Latitude": 49.216778,
    "Longitude": 16.560244,
    "IsPublic": true,
    "LineList": "30,32,36,44,67,84,89,92,93"
  },
  {
    "StopID": 1144,
    "Zone": 100,
    "Name": "Hladíkova",
    "Latitude": 49.187553,
    "Longitude": 16.625741,
    "IsPublic": true,
    "LineList": "44,49,64,67,77,84,94"
  },
  {
    "StopID": 1146,
    "Zone": 100,
    "Name": "Hlavní nádraží",
    "Latitude": 49.191703,
    "Longitude": 16.613050,
    "IsPublic": true,
    "LineList": "1,2,4,7,8,9,10,12,31,33,47,67,76,86,89,90,91,92,93,94,95,96,97,98,99,103,105,108,120,123,124,125,126,130,135,136,140,141,144,145,146,147,602,701,702"
  },
  {
    "StopID": 1147,
    "Zone": 100,
    "Name": "Hluboká",
    "Latitude": 49.175552,
    "Longitude": 16.596200,
    "IsPublic": true,
    "LineList": "2,5,90,91"
  },
  {
    "StopID": 1148,
    "Zone": 101,
    "Name": "Hněvkovského",
    "Latitude": 49.169791,
    "Longitude": 16.626105,
    "IsPublic": true,
    "LineList": "40,48,64,67,74,95"
  },
  {
    "StopID": 1149,
    "Zone": 100,
    "Name": "Holandská",
    "Latitude": 49.180817,
    "Longitude": 16.605066,
    "IsPublic": true,
    "LineList": "40"
  },
  {
    "StopID": 1150,
    "Zone": 101,
    "Name": "Högrova",
    "Latitude": 49.228712,
    "Longitude": 16.604394,
    "IsPublic": true,
    "LineList": "43,93"
  },
  {
    "StopID": 1151,
    "Zone": 101,
    "Name": "Holásky",
    "Latitude": 49.143345,
    "Longitude": 16.650765,
    "IsPublic": true,
    "LineList": "48,64,85,95"
  },
  {
    "StopID": 1152,
    "Zone": 101,
    "Name": "Holzova",
    "Latitude": 49.194800,
    "Longitude": 16.696964,
    "IsPublic": true,
    "LineList": "78"
  },
  {
    "StopID": 1153,
    "Zone": 101,
    "Name": "Horácké náměstí",
    "Latitude": 49.247766,
    "Longitude": 16.582362,
    "IsPublic": true,
    "LineList": "42,70"
  },
  {
    "StopID": 1154,
    "Zone": 101,
    "Name": "Holásecká",
    "Latitude": 49.147592,
    "Longitude": 16.661368,
    "IsPublic": true,
    "LineList": "48,85,95"
  },
  {
    "StopID": 1155,
    "Zone": 101,
    "Name": "Horská",
    "Latitude": 49.221613,
    "Longitude": 16.579490,
    "IsPublic": true,
    "LineList": "72"
  },
  {
    "StopID": 1156,
    "Zone": 101,
    "Name": "Horní Heršpice",
    "Latitude": 49.166686,
    "Longitude": 16.616550,
    "IsPublic": true,
    "LineList": "49,50,94,790"
  },
  {
    "StopID": 1157,
    "Zone": 101,
    "Name": "Horníkova",
    "Latitude": 49.211974,
    "Longitude": 16.676556,
    "IsPublic": true,
    "LineList": "55,78,98,201"
  },
  {
    "StopID": 1161,
    "Zone": 101,
    "Name": "Hoštická",
    "Latitude": 49.173825,
    "Longitude": 16.528135,
    "IsPublic": true,
    "LineList": "51,69,96,401,402"
  },
  {
    "StopID": 1162,
    "Zone": 101,
    "Name": "Houbalova",
    "Latitude": 49.205854,
    "Longitude": 16.674029,
    "IsPublic": true,
    "LineList": "55,98"
  },
  {
    "StopID": 1163,
    "Zone": 100,
    "Name": "Hrad Špilberk",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1165,
    "Zone": 0,
    "Name": "Hrad Veveří, přístaviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1166,
    "Zone": 100,
    "Name": "Hrnčířská",
    "Latitude": 49.210437,
    "Longitude": 16.602748,
    "IsPublic": true,
    "LineList": "1,2,3,4,6,7,8,9,10,90,91"
  },
  {
    "StopID": 1167,
    "Zone": 101,
    "Name": "Hudcova",
    "Latitude": 49.235496,
    "Longitude": 16.587256,
    "IsPublic": true,
    "LineList": "1,41,42,70,71,90,91"
  },
  {
    "StopID": 1168,
    "Zone": 101,
    "Name": "Humenná",
    "Latitude": 49.167776,
    "Longitude": 16.573016,
    "IsPublic": true,
    "LineList": "50,91,96,790"
  },
  {
    "StopID": 1171,
    "Zone": 101,
    "Name": "Husitská",
    "Latitude": 49.223614,
    "Longitude": 16.594592,
    "IsPublic": true,
    "LineList": "1,2,3,4,6,7,8,9,10,30,44,72,84,90,91"
  },
  {
    "StopID": 1172,
    "Zone": 101,
    "Name": "Hutařova",
    "Latitude": 49.226182,
    "Longitude": 16.588378,
    "IsPublic": true,
    "LineList": "32"
  },
  {
    "StopID": 1173,
    "Zone": 101,
    "Name": "Hviezdoslavova",
    "Latitude": 49.181927,
    "Longitude": 16.676587,
    "IsPublic": true,
    "LineList": "33,96"
  },
  {
    "StopID": 1176,
    "Zone": 100,
    "Name": "Hybešova",
    "Latitude": 49.189266,
    "Longitude": 16.603113,
    "IsPublic": true,
    "LineList": "1,2,4,9,12,91,97,98"
  },
  {
    "StopID": 1177,
    "Zone": 100,
    "Name": "Schodová",
    "Latitude": 49.206602,
    "Longitude": 16.612234,
    "IsPublic": true,
    "LineList": "67"
  },
  {
    "StopID": 1178,
    "Zone": 101,
    "Name": "Chaloupky",
    "Latitude": 49.222913,
    "Longitude": 16.556764,
    "IsPublic": true,
    "LineList": "36,93"
  },
  {
    "StopID": 1181,
    "Zone": 100,
    "Name": "Charvatská",
    "Latitude": 49.219391,
    "Longitude": 16.592380,
    "IsPublic": true,
    "LineList": "32,67"
  },
  {
    "StopID": 1182,
    "Zone": 101,
    "Name": "Chrlice, smyčka",
    "Latitude": 49.126699,
    "Longitude": 16.654897,
    "IsPublic": true,
    "LineList": "64,95,509"
  },
  {
    "StopID": 1183,
    "Zone": 101,
    "Name": "Chrlice, nádraží",
    "Latitude": 49.131978,
    "Longitude": 16.656924,
    "IsPublic": true,
    "LineList": "64,95,120,144,509"
  },
  {
    "StopID": 1185,
    "Zone": 101,
    "Name": "Chvalovka",
    "Latitude": 49.214852,
    "Longitude": 16.499799,
    "IsPublic": true,
    "LineList": "52,54,98,790"
  },
  {
    "StopID": 1186,
    "Zone": 101,
    "Name": "Chrlická",
    "Latitude": 49.144130,
    "Longitude": 16.665114,
    "IsPublic": true,
    "LineList": "40,73,74,78,85,95"
  },
  {
    "StopID": 1187,
    "Zone": 101,
    "Name": "Chrlické náměstí",
    "Latitude": 49.135613,
    "Longitude": 16.653520,
    "IsPublic": true,
    "LineList": "64,78,95,509"
  },
  {
    "StopID": 1189,
    "Zone": 101,
    "Name": "Globus",
    "Latitude": 49.262808,
    "Longitude": 16.577990,
    "IsPublic": true,
    "LineList": "41,42,91"
  },
  {
    "StopID": 1191,
    "Zone": 101,
    "Name": "Ivanovické náměstí",
    "Latitude": 49.153348,
    "Longitude": 16.653773,
    "IsPublic": true,
    "LineList": "40,74,85,95,109"
  },
  {
    "StopID": 1193,
    "Zone": 100,
    "Name": "Janáčkovo divadlo",
    "Latitude": 49.198081,
    "Longitude": 16.610170,
    "IsPublic": true,
    "LineList": "67"
  },
  {
    "StopID": 1196,
    "Zone": 101,
    "Name": "Jandáskova",
    "Latitude": 49.255828,
    "Longitude": 16.589900,
    "IsPublic": true,
    "LineList": "70,90"
  },
  {
    "StopID": 1197,
    "Zone": 100,
    "Name": "Jarní ČD",
    "Latitude": 49.220582,
    "Longitude": 16.652824,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1198,
    "Zone": 101,
    "Name": "Jehnice",
    "Latitude": 49.271378,
    "Longitude": 16.595778,
    "IsPublic": true,
    "LineList": "70,90"
  },
  {
    "StopID": 1202,
    "Zone": 101,
    "Name": "Jemelkova",
    "Latitude": 49.173248,
    "Longitude": 16.548706,
    "IsPublic": true,
    "LineList": "51,69,96,401,402"
  },
  {
    "StopID": 1203,
    "Zone": 100,
    "Name": "Jílkova",
    "Latitude": 49.196001,
    "Longitude": 16.636897,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1204,
    "Zone": 101,
    "Name": "Jezerní",
    "Latitude": 49.140706,
    "Longitude": 16.616994,
    "IsPublic": true,
    "LineList": "49,94"
  },
  {
    "StopID": 1206,
    "Zone": 100,
    "Name": "Jindřichova",
    "Latitude": 49.213196,
    "Longitude": 16.583044,
    "IsPublic": true,
    "LineList": "34,36,89"
  },
  {
    "StopID": 1207,
    "Zone": 100,
    "Name": "Jiránkova",
    "Latitude": 49.187536,
    "Longitude": 16.633488,
    "IsPublic": true,
    "LineList": "47,49,94"
  },
  {
    "StopID": 1208,
    "Zone": 101,
    "Name": "Líšeň, Jírova",
    "Latitude": 49.209219,
    "Longitude": 16.687734,
    "IsPublic": true,
    "LineList": "8,27,55,78,98,99,151"
  },
  {
    "StopID": 1209,
    "Zone": 101,
    "Name": "Jírovcova",
    "Latitude": 49.188047,
    "Longitude": 16.534331,
    "IsPublic": true,
    "LineList": "37,50,97,790"
  },
  {
    "StopID": 1211,
    "Zone": 100,
    "Name": "Jugoslávská",
    "Latitude": 49.204675,
    "Longitude": 16.623891,
    "IsPublic": true,
    "LineList": "3,5,7,9,92,93"
  },
  {
    "StopID": 1212,
    "Zone": 100,
    "Name": "Juliánov",
    "Latitude": 49.196208,
    "Longitude": 16.654629,
    "IsPublic": true,
    "LineList": "9,58,78,97"
  },
  {
    "StopID": 1213,
    "Zone": 101,
    "Name": "Jundrov",
    "Latitude": 49.211751,
    "Longitude": 16.550650,
    "IsPublic": true,
    "LineList": "67,88"
  },
  {
    "StopID": 1214,
    "Zone": 101,
    "Name": "Jundrovský most",
    "Latitude": 49.210068,
    "Longitude": 16.557459,
    "IsPublic": true,
    "LineList": "25,26,35,37,38,39,44,67,84,88,98"
  },
  {
    "StopID": 1215,
    "Zone": 101,
    "Name": "Jundrovská",
    "Latitude": 49.211889,
    "Longitude": 16.560144,
    "IsPublic": true,
    "LineList": "89,92,93,98"
  },
  {
    "StopID": 1216,
    "Zone": 101,
    "Name": "Jundrov, hřiště",
    "Latitude": 49.204662,
    "Longitude": 16.560121,
    "IsPublic": true,
    "LineList": "25,26,35,37,38,39,44,84,98"
  },
  {
    "StopID": 1217,
    "Zone": 101,
    "Name": "Vozovna Komín",
    "Latitude": 49.213719,
    "Longitude": 16.559676,
    "IsPublic": true,
    "LineList": "3,10,11,25,26,30,32,36,37,38,39,44,67,84,88,89,92,93"
  },
  {
    "StopID": 1218,
    "Zone": 100,
    "Name": "Jungmannova",
    "Latitude": 49.220970,
    "Longitude": 16.596500,
    "IsPublic": true,
    "LineList": "1,2,3,4,6,7,8,9,10,90,91"
  },
  {
    "StopID": 1221,
    "Zone": 101,
    "Name": "Kamechy",
    "Latitude": 49.215696,
    "Longitude": 16.495309,
    "IsPublic": true,
    "LineList": "52,54,98,790"
  },
  {
    "StopID": 1222,
    "Zone": 101,
    "Name": "Kamenice",
    "Latitude": 49.177702,
    "Longitude": 16.573062,
    "IsPublic": true,
    "LineList": "69"
  },
  {
    "StopID": 1223,
    "Zone": 101,
    "Name": "Kamenný vrch",
    "Latitude": 49.179830,
    "Longitude": 16.547760,
    "IsPublic": true,
    "LineList": "26,37,50,90,95"
  },
  {
    "StopID": 1226,
    "Zone": 101,
    "Name": "Kamenolom",
    "Latitude": 49.221926,
    "Longitude": 16.536894,
    "IsPublic": true,
    "LineList": "3,10,30,89"
  },
  {
    "StopID": 1227,
    "Zone": 101,
    "Name": "Karpatská",
    "Latitude": 49.168067,
    "Longitude": 16.561978,
    "IsPublic": true,
    "LineList": "6,7"
  },
  {
    "StopID": 1228,
    "Zone": 100,
    "Name": "Kampelíkova",
    "Latitude": 49.197448,
    "Longitude": 16.581192,
    "IsPublic": true,
    "LineList": "35,39"
  },
  {
    "StopID": 1230,
    "Zone": 101,
    "Name": "Kavčí",
    "Latitude": 49.216644,
    "Longitude": 16.500684,
    "IsPublic": true,
    "LineList": "52,54,98,790"
  },
  {
    "StopID": 1231,
    "Zone": 100,
    "Name": "Karlova",
    "Latitude": 49.213898,
    "Longitude": 16.643867,
    "IsPublic": true,
    "LineList": "72,75,94"
  },
  {
    "StopID": 1232,
    "Zone": 101,
    "Name": "Karolíny Světlé",
    "Latitude": 49.203160,
    "Longitude": 16.693878,
    "IsPublic": true,
    "LineList": "58,78,97"
  },
  {
    "StopID": 1233,
    "Zone": 100,
    "Name": "Kartouzská",
    "Latitude": 49.216824,
    "Longitude": 16.598987,
    "IsPublic": true,
    "LineList": "1,2,3,4,6,7,8,9,10,90,91"
  },
  {
    "StopID": 1234,
    "Zone": 100,
    "Name": "Kaunicovy koleje",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1235,
    "Zone": 101,
    "Name": "Soběšice, Klarisky",
    "Latitude": 49.257047,
    "Longitude": 16.622602,
    "IsPublic": true,
    "LineList": "43,57,93"
  },
  {
    "StopID": 1236,
    "Zone": 101,
    "Name": "Kejbaly",
    "Latitude": 49.174527,
    "Longitude": 16.582149,
    "IsPublic": true,
    "LineList": "40,69,90"
  },
  {
    "StopID": 1237,
    "Zone": 101,
    "Name": "Kleštínek",
    "Latitude": 49.269430,
    "Longitude": 16.595956,
    "IsPublic": true,
    "LineList": "70,90"
  },
  {
    "StopID": 1238,
    "Zone": 101,
    "Name": "Klicperova",
    "Latitude": 49.202451,
    "Longitude": 16.688124,
    "IsPublic": true,
    "LineList": "58,97"
  },
  {
    "StopID": 1241,
    "Zone": 101,
    "Name": "Kluchova",
    "Latitude": 49.183141,
    "Longitude": 16.563177,
    "IsPublic": true,
    "LineList": "25,26,95"
  },
  {
    "StopID": 1242,
    "Zone": 100,
    "Name": "Klusáčkova",
    "Latitude": 49.212134,
    "Longitude": 16.592770,
    "IsPublic": true,
    "LineList": "3,4,5,12,34,36,68,93,99"
  },
  {
    "StopID": 1246,
    "Zone": 101,
    "Name": "Kociánka",
    "Latitude": 49.225774,
    "Longitude": 16.601808,
    "IsPublic": true,
    "LineList": "44,72,84,93"
  },
  {
    "StopID": 1248,
    "Zone": 101,
    "Name": "Kohoutovice, hájenka",
    "Latitude": 49.196467,
    "Longitude": 16.531181,
    "IsPublic": true,
    "LineList": "50,52,90,790"
  },
  {
    "StopID": 1251,
    "Zone": 101,
    "Name": "Kohoutovická",
    "Latitude": 49.207006,
    "Longitude": 16.497999,
    "IsPublic": true,
    "LineList": "52"
  },
  {
    "StopID": 1252,
    "Zone": 101,
    "Name": "Kolejní",
    "Latitude": 49.230641,
    "Longitude": 16.571910,
    "IsPublic": true,
    "LineList": "72,99"
  },
  {
    "StopID": 1256,
    "Zone": 101,
    "Name": "Komárov",
    "Latitude": 49.175244,
    "Longitude": 16.621510,
    "IsPublic": true,
    "LineList": "12,40,48,49,50,64,67,74,94,95,109,503,790"
  },
  {
    "StopID": 1257,
    "Zone": 100,
    "Name": "Komenského náměstí",
    "Latitude": 49.197069,
    "Longitude": 16.602171,
    "IsPublic": true,
    "LineList": "4,38,39,89,95"
  },
  {
    "StopID": 1258,
    "Zone": 101,
    "Name": "Komín, sídliště",
    "Latitude": 49.226918,
    "Longitude": 16.553423,
    "IsPublic": true,
    "LineList": "36,93"
  },
  {
    "StopID": 1261,
    "Zone": 101,
    "Name": "Komín, smyčka",
    "Latitude": 49.216183,
    "Longitude": 16.556125,
    "IsPublic": true,
    "LineList": "11"
  },
  {
    "StopID": 1262,
    "Zone": 100,
    "Name": "Konečného náměstí",
    "Latitude": 49.204679,
    "Longitude": 16.595509,
    "IsPublic": true,
    "LineList": "3,4,5,10,12,25,26,38,39,92,93,99"
  },
  {
    "StopID": 1263,
    "Zone": 101,
    "Name": "Koniklecová",
    "Latitude": 49.176526,
    "Longitude": 16.558783,
    "IsPublic": true,
    "LineList": "26,37,50,90,95"
  },
  {
    "StopID": 1266,
    "Zone": 100,
    "Name": "Konopná",
    "Latitude": 49.179978,
    "Longitude": 16.621377,
    "IsPublic": true,
    "LineList": "12,40,48,64,67,74,95,109"
  },
  {
    "StopID": 1267,
    "Zone": 101,
    "Name": "Kopce",
    "Latitude": 49.205470,
    "Longitude": 16.509312,
    "IsPublic": true,
    "LineList": "52"
  },
  {
    "StopID": 1271,
    "Zone": 100,
    "Name": "Körnerova",
    "Latitude": 49.198216,
    "Longitude": 16.619724,
    "IsPublic": true,
    "LineList": "2,4,7,94,97,99"
  },
  {
    "StopID": 1272,
    "Zone": 101,
    "Name": "Kořískova",
    "Latitude": 49.239392,
    "Longitude": 16.585020,
    "IsPublic": true,
    "LineList": "1,42,70,91"
  },
  {
    "StopID": 1273,
    "Zone": 101,
    "Name": "Kosmonautů",
    "Latitude": 49.167065,
    "Longitude": 16.567734,
    "IsPublic": true,
    "LineList": "50,51,69,91,403,404"
  },
  {
    "StopID": 1275,
    "Zone": 101,
    "Name": "Košuličova",
    "Latitude": 49.164637,
    "Longitude": 16.610050,
    "IsPublic": true,
    "LineList": "50"
  },
  {
    "StopID": 1277,
    "Zone": 101,
    "Name": "Kotlanova",
    "Latitude": 49.209856,
    "Longitude": 16.681364,
    "IsPublic": true,
    "LineList": "8"
  },
  {
    "StopID": 1278,
    "Zone": 100,
    "Name": "Kovářská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1279,
    "Zone": 100,
    "Name": "Kounicovy koleje",
    "Latitude": 49.207752,
    "Longitude": 16.583217,
    "IsPublic": true,
    "LineList": "68,89"
  },
  {
    "StopID": 1280,
    "Zone": 101,
    "Name": "Kouty",
    "Latitude": 49.264601,
    "Longitude": 16.565130,
    "IsPublic": true,
    "LineList": "41,71,91"
  },
  {
    "StopID": 1281,
    "Zone": 0,
    "Name": "Kozí horka, přístaviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1282,
    "Zone": 100,
    "Name": "Králova",
    "Latitude": 49.211297,
    "Longitude": 16.583386,
    "IsPublic": true,
    "LineList": "3,10,92"
  },
  {
    "StopID": 1283,
    "Zone": 101,
    "Name": "Královka",
    "Latitude": 49.256043,
    "Longitude": 16.586381,
    "IsPublic": true,
    "LineList": "42"
  },
  {
    "StopID": 1286,
    "Zone": 101,
    "Name": "Královo Pole, nádraží",
    "Latitude": 49.230272,
    "Longitude": 16.595810,
    "IsPublic": true,
    "LineList": "6,30,41,42,43,44,70,71,72,84,123,130,147,175,301,796"
  },
  {
    "StopID": 1288,
    "Zone": 101,
    "Name": "Královopolská strojírna",
    "Latitude": 49.224012,
    "Longitude": 16.607284,
    "IsPublic": true,
    "LineList": "44,72,84,93"
  },
  {
    "StopID": 1291,
    "Zone": 100,
    "Name": "Krásného",
    "Latitude": 49.190552,
    "Longitude": 16.649729,
    "IsPublic": true,
    "LineList": "8,10"
  },
  {
    "StopID": 1292,
    "Zone": 101,
    "Name": "Krejčího",
    "Latitude": 49.177588,
    "Longitude": 16.691202,
    "IsPublic": true,
    "LineList": "31,78,96"
  },
  {
    "StopID": 1293,
    "Zone": 101,
    "Name": "Krematorium",
    "Latitude": 49.172576,
    "Longitude": 16.588325,
    "IsPublic": true,
    "LineList": "6,7,8,40,90,91"
  },
  {
    "StopID": 1296,
    "Zone": 101,
    "Name": "Kristenova",
    "Latitude": 49.221020,
    "Longitude": 16.554302,
    "IsPublic": true,
    "LineList": "36,93"
  },
  {
    "StopID": 1297,
    "Zone": 101,
    "Name": "Kroměřížská",
    "Latitude": 49.178648,
    "Longitude": 16.688698,
    "IsPublic": true,
    "LineList": "33,96"
  },
  {
    "StopID": 1298,
    "Zone": 101,
    "Name": "Kronova",
    "Latitude": 49.251310,
    "Longitude": 16.588596,
    "IsPublic": true,
    "LineList": "42,65,70,90"
  },
  {
    "StopID": 1300,
    "Zone": 101,
    "Name": "Křehlíkova",
    "Latitude": 49.174816,
    "Longitude": 16.685206,
    "IsPublic": true,
    "LineList": "31,78"
  },
  {
    "StopID": 1301,
    "Zone": 100,
    "Name": "Křídlovická",
    "Latitude": 49.185190,
    "Longitude": 16.602857,
    "IsPublic": true,
    "LineList": "7,8,40,44,84,90,96"
  },
  {
    "StopID": 1302,
    "Zone": 101,
    "Name": "Křivánkovo náměstí",
    "Latitude": 49.207030,
    "Longitude": 16.487556,
    "IsPublic": true,
    "LineList": "51,52,98"
  },
  {
    "StopID": 1307,
    "Zone": 100,
    "Name": "Křížkovského",
    "Latitude": 49.187378,
    "Longitude": 16.587186,
    "IsPublic": true,
    "LineList": "44,84,98"
  },
  {
    "StopID": 1308,
    "Zone": 101,
    "Name": "Kšírova",
    "Latitude": 49.171538,
    "Longitude": 16.615758,
    "IsPublic": true,
    "LineList": "49,50,94"
  },
  {
    "StopID": 1311,
    "Zone": 101,
    "Name": "Kubelíkova",
    "Latitude": 49.212070,
    "Longitude": 16.698811,
    "IsPublic": true,
    "LineList": "58,97"
  },
  {
    "StopID": 1312,
    "Zone": 101,
    "Name": "Kubíčkova",
    "Latitude": 49.221263,
    "Longitude": 16.519844,
    "IsPublic": true,
    "LineList": "3,10,54,98"
  },
  {
    "StopID": 1313,
    "Zone": 100,
    "Name": "Kuldova",
    "Latitude": 49.201308,
    "Longitude": 16.634428,
    "IsPublic": true,
    "LineList": "2,3,64,97,99"
  },
  {
    "StopID": 1316,
    "Zone": 100,
    "Name": "Kulkova",
    "Latitude": 49.211699,
    "Longitude": 16.648437,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1317,
    "Zone": 101,
    "Name": "Kupkova",
    "Latitude": 49.236324,
    "Longitude": 16.627680,
    "IsPublic": true,
    "LineList": "57"
  },
  {
    "StopID": 1318,
    "Zone": 101,
    "Name": "Kurská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1319,
    "Zone": 101,
    "Name": "K terminálu",
    "Latitude": 49.161508,
    "Longitude": 16.612183,
    "IsPublic": true,
    "LineList": "49"
  },
  {
    "StopID": 1320,
    "Zone": 100,
    "Name": "Květná",
    "Latitude": 49.193384,
    "Longitude": 16.576691,
    "IsPublic": true,
    "LineList": "68,95"
  },
  {
    "StopID": 1321,
    "Zone": 101,
    "Name": "Kyjevská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1322,
    "Zone": 101,
    "Name": "Labská",
    "Latitude": 49.171374,
    "Longitude": 16.559226,
    "IsPublic": true,
    "LineList": "69,91,403,404"
  },
  {
    "StopID": 1323,
    "Zone": 101,
    "Name": "Langrova",
    "Latitude": 49.179926,
    "Longitude": 16.680928,
    "IsPublic": true,
    "LineList": "33,96"
  },
  {
    "StopID": 1326,
    "Zone": 101,
    "Name": "Laštůvkova",
    "Latitude": 49.220367,
    "Longitude": 16.525724,
    "IsPublic": true,
    "LineList": "30,50,51,52,92"
  },
  {
    "StopID": 1328,
    "Zone": 100,
    "Name": "Lerchova",
    "Latitude": 49.198722,
    "Longitude": 16.583664,
    "IsPublic": true,
    "LineList": "68"
  },
  {
    "StopID": 1331,
    "Zone": 101,
    "Name": "Lesná, nádraží",
    "Latitude": 49.220368,
    "Longitude": 16.628544,
    "IsPublic": true,
    "LineList": "44,46,57,72,84,92,130"
  },
  {
    "StopID": 1332,
    "Zone": 101,
    "Name": "Lesní",
    "Latitude": 49.185528,
    "Longitude": 16.564700,
    "IsPublic": true,
    "LineList": "25,26,95"
  },
  {
    "StopID": 1333,
    "Zone": 101,
    "Name": "Lesní školka",
    "Latitude": 49.263118,
    "Longitude": 16.625941,
    "IsPublic": true,
    "LineList": "57,93"
  },
  {
    "StopID": 1334,
    "Zone": 101,
    "Name": "Letiště - logistický areál",
    "Latitude": 49.156624,
    "Longitude": 16.698627,
    "IsPublic": true,
    "LineList": "76,77,89"
  },
  {
    "StopID": 1335,
    "Zone": 101,
    "Name": "Letiště - služební vstup",
    "Latitude": 49.155635,
    "Longitude": 16.691132,
    "IsPublic": true,
    "LineList": "76,89"
  },
  {
    "StopID": 1336,
    "Zone": 100,
    "Name": "Lesnická",
    "Latitude": 49.212767,
    "Longitude": 16.617747,
    "IsPublic": true,
    "LineList": "7,9,25,26,46,93"
  },
  {
    "StopID": 1337,
    "Zone": 101,
    "Name": "Letiště Tuřany",
    "Latitude": 49.154830,
    "Longitude": 16.692439,
    "IsPublic": true,
    "LineList": "76,89"
  },
  {
    "StopID": 1338,
    "Zone": 101,
    "Name": "Letovická",
    "Latitude": 49.245894,
    "Longitude": 16.587594,
    "IsPublic": true,
    "LineList": "42,70"
  },
  {
    "StopID": 1339,
    "Zone": 101,
    "Name": "Letecká",
    "Latitude": 49.197708,
    "Longitude": 16.695849,
    "IsPublic": true,
    "LineList": "78"
  },
  {
    "StopID": 1341,
    "Zone": 101,
    "Name": "Libušina třída",
    "Latitude": 49.197798,
    "Longitude": 16.548650,
    "IsPublic": true,
    "LineList": "37,97"
  },
  {
    "StopID": 1342,
    "Zone": 101,
    "Name": "Libušino údolí",
    "Latitude": 49.195704,
    "Longitude": 16.555314,
    "IsPublic": true,
    "LineList": "37,97"
  },
  {
    "StopID": 1343,
    "Zone": 100,
    "Name": "Lipová",
    "Latitude": 49.191545,
    "Longitude": 16.576234,
    "IsPublic": true,
    "LineList": "1,2,3,4,5,6,7,9,10,12,25,26,35,37,38,39,52,97"
  },
  {
    "StopID": 1345,
    "Zone": 101,
    "Name": "Lísky",
    "Latitude": 49.219896,
    "Longitude": 16.549074,
    "IsPublic": true,
    "LineList": "30,93"
  },
  {
    "StopID": 1346,
    "Zone": 101,
    "Name": "Líšeň, hřbitov",
    "Latitude": 49.217477,
    "Longitude": 16.702717,
    "IsPublic": true,
    "LineList": "58,97"
  },
  {
    "StopID": 1347,
    "Zone": 101,
    "Name": "Líšeňská",
    "Latitude": 49.197580,
    "Longitude": 16.665216,
    "IsPublic": true,
    "LineList": "8,10"
  },
  {
    "StopID": 1348,
    "Zone": 101,
    "Name": "Loosova",
    "Latitude": 49.231972,
    "Longitude": 16.619445,
    "IsPublic": true,
    "LineList": "57,86,92"
  },
  {
    "StopID": 1350,
    "Zone": 101,
    "Name": "Macháčkova",
    "Latitude": 49.206113,
    "Longitude": 16.701930,
    "IsPublic": true,
    "LineList": "55,98,151"
  },
  {
    "StopID": 1351,
    "Zone": 101,
    "Name": "Mácova",
    "Latitude": 49.265805,
    "Longitude": 16.569125,
    "IsPublic": true,
    "LineList": "41,71,91"
  },
  {
    "StopID": 1352,
    "Zone": 100,
    "Name": "Makovského náměstí",
    "Latitude": 49.217902,
    "Longitude": 16.576709,
    "IsPublic": true,
    "LineList": "34,36,89"
  },
  {
    "StopID": 1353,
    "Zone": 101,
    "Name": "Malá Klajdovka",
    "Latitude": 49.199130,
    "Longitude": 16.662908,
    "IsPublic": true,
    "LineList": "58,78,97"
  },
  {
    "StopID": 1354,
    "Zone": 101,
    "Name": "Malá",
    "Latitude": 49.149332,
    "Longitude": 16.621834,
    "IsPublic": true,
    "LineList": "49,94"
  },
  {
    "StopID": 1355,
    "Zone": 101,
    "Name": "Malinová",
    "Latitude": 49.259310,
    "Longitude": 16.623807,
    "IsPublic": true,
    "LineList": "57,93"
  },
  {
    "StopID": 1356,
    "Zone": 101,
    "Name": "Malečkova",
    "Latitude": 49.185748,
    "Longitude": 16.692664,
    "IsPublic": true,
    "LineList": "78"
  },
  {
    "StopID": 1357,
    "Zone": 100,
    "Name": "Malinovského náměstí",
    "Latitude": 49.195541,
    "Longitude": 16.613774,
    "IsPublic": true,
    "LineList": "1,2,4,7,8,9,10,67,90,91,92,93,94,97,99"
  },
  {
    "StopID": 1358,
    "Zone": 100,
    "Name": "Maloměřický most",
    "Latitude": 49.215360,
    "Longitude": 16.643229,
    "IsPublic": true,
    "LineList": "4,72,75,94"
  },
  {
    "StopID": 1361,
    "Zone": 101,
    "Name": "Mariánské náměstí",
    "Latitude": 49.176588,
    "Longitude": 16.622541,
    "IsPublic": true,
    "LineList": "40,48,49,50,64,67,74,94,95,109,503,790"
  },
  {
    "StopID": 1362,
    "Zone": 101,
    "Name": "Mariánské údolí",
    "Latitude": 49.203324,
    "Longitude": 16.716063,
    "IsPublic": true,
    "LineList": "55,96,98,151"
  },
  {
    "StopID": 1366,
    "Zone": 100,
    "Name": "Marie Pujmanové",
    "Latitude": 49.198196,
    "Longitude": 16.573544,
    "IsPublic": true,
    "LineList": "38"
  },
  {
    "StopID": 1367,
    "Zone": 101,
    "Name": "Maříkova",
    "Latitude": 49.259325,
    "Longitude": 16.579787,
    "IsPublic": true,
    "LineList": "41,42,91"
  },
  {
    "StopID": 1368,
    "Zone": 101,
    "Name": "Masarova",
    "Latitude": 49.206997,
    "Longitude": 16.677557,
    "IsPublic": true,
    "LineList": "8"
  },
  {
    "StopID": 1371,
    "Zone": 100,
    "Name": "Náměstí Míru",
    "Latitude": 49.202138,
    "Longitude": 16.581754,
    "IsPublic": true,
    "LineList": "4,68,89"
  },
  {
    "StopID": 1372,
    "Zone": 100,
    "Name": "Masná",
    "Latitude": 49.191177,
    "Longitude": 16.625683,
    "IsPublic": true,
    "LineList": "8,9,10,31,33,47,64,67,84,89,96,98"
  },
  {
    "StopID": 1375,
    "Zone": 0,
    "Name": "Mečkov, přístaviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1376,
    "Zone": 101,
    "Name": "Medlánky",
    "Latitude": 49.240507,
    "Longitude": 16.573700,
    "IsPublic": true,
    "LineList": "41,65,71,90"
  },
  {
    "StopID": 1377,
    "Zone": 101,
    "Name": "Medlánky, škola",
    "Latitude": 49.238314,
    "Longitude": 16.578217,
    "IsPublic": true,
    "LineList": "41,65,70,71,90"
  },
  {
    "StopID": 1378,
    "Zone": 100,
    "Name": "Mendlovo náměstí",
    "Latitude": 49.190178,
    "Longitude": 16.593729,
    "IsPublic": true,
    "LineList": "1,2,3,4,5,6,7,9,10,12,25,26,35,37,38,39,44,52,62,84,97,98"
  },
  {
    "StopID": 1381,
    "Zone": 100,
    "Name": "Merhautova",
    "Latitude": 49.214918,
    "Longitude": 16.627558,
    "IsPublic": true,
    "LineList": "44,57,72,84"
  },
  {
    "StopID": 1382,
    "Zone": 101,
    "Name": "Mikulčická",
    "Latitude": 49.178346,
    "Longitude": 16.684273,
    "IsPublic": true,
    "LineList": "33,96"
  },
  {
    "StopID": 1383,
    "Zone": 101,
    "Name": "Mikulovská",
    "Latitude": 49.205906,
    "Longitude": 16.665328,
    "IsPublic": true,
    "LineList": "78"
  },
  {
    "StopID": 1384,
    "Zone": 101,
    "Name": "Líšeň, Mifkova",
    "Latitude": 49.207263,
    "Longitude": 16.692381,
    "IsPublic": true,
    "LineList": "8,55,78,98,151"
  },
  {
    "StopID": 1385,
    "Zone": 100,
    "Name": "Mlýnská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1386,
    "Zone": 101,
    "Name": "Mírová",
    "Latitude": 49.176500,
    "Longitude": 16.632395,
    "IsPublic": true,
    "LineList": "49,94"
  },
  {
    "StopID": 1387,
    "Zone": 101,
    "Name": "Modřická",
    "Latitude": 49.137918,
    "Longitude": 16.616374,
    "IsPublic": true,
    "LineList": "49,94"
  },
  {
    "StopID": 1388,
    "Zone": 101,
    "Name": "Mojmírovo náměstí",
    "Latitude": 49.226032,
    "Longitude": 16.597340,
    "IsPublic": true,
    "LineList": "43"
  },
  {
    "StopID": 1389,
    "Zone": 101,
    "Name": "Modřická cihelna",
    "Latitude": 49.137391,
    "Longitude": 16.603426,
    "IsPublic": true,
    "LineList": "2"
  },
  {
    "StopID": 1391,
    "Zone": 101,
    "Name": "Mokrá Hora",
    "Latitude": 49.258258,
    "Longitude": 16.593655,
    "IsPublic": true,
    "LineList": "70,90"
  },
  {
    "StopID": 1392,
    "Zone": 101,
    "Name": "Molákova",
    "Latitude": 49.212738,
    "Longitude": 16.686949,
    "IsPublic": true,
    "LineList": "55,78,98"
  },
  {
    "StopID": 1393,
    "Zone": 101,
    "Name": "Moravanská",
    "Latitude": 49.142750,
    "Longitude": 16.602546,
    "IsPublic": true,
    "LineList": "2,504,505"
  },
  {
    "StopID": 1396,
    "Zone": 101,
    "Name": "Moravanské lány",
    "Latitude": 49.149447,
    "Longitude": 16.601400,
    "IsPublic": true,
    "LineList": "2,504,505"
  },
  {
    "StopID": 1397,
    "Zone": 100,
    "Name": "Moravské náměstí",
    "Latitude": 49.199416,
    "Longitude": 16.608437,
    "IsPublic": true,
    "LineList": "1,2,3,4,5,6,7,8,9,10,67,90,91,92,93"
  },
  {
    "StopID": 1398,
    "Zone": 100,
    "Name": "Mostecká",
    "Latitude": 49.206951,
    "Longitude": 16.627329,
    "IsPublic": true,
    "LineList": "4,94"
  },
  {
    "StopID": 1399,
    "Zone": 101,
    "Name": "Moskalykova",
    "Latitude": 49.231472,
    "Longitude": 16.608054,
    "IsPublic": true,
    "LineList": "43,93"
  },
  {
    "StopID": 1400,
    "Zone": 100,
    "Name": "Mozolky",
    "Latitude": 49.213616,
    "Longitude": 16.574845,
    "IsPublic": true,
    "LineList": "3,10,92"
  },
  {
    "StopID": 1401,
    "Zone": 100,
    "Name": "Mošnova",
    "Latitude": 49.196198,
    "Longitude": 16.640931,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1403,
    "Zone": 101,
    "Name": "Mutěnická",
    "Latitude": 49.203470,
    "Longitude": 16.654842,
    "IsPublic": true,
    "LineList": "27,78,99"
  },
  {
    "StopID": 1406,
    "Zone": 101,
    "Name": "Muzeum dopravy",
    "Latitude": 49.201411,
    "Longitude": 16.694502,
    "IsPublic": true,
    "LineList": "78"
  },
  {
    "StopID": 1407,
    "Zone": 101,
    "Name": "Myslivecký stadion",
    "Latitude": 49.241075,
    "Longitude": 16.609296,
    "IsPublic": true,
    "LineList": "43,93"
  },
  {
    "StopID": 1408,
    "Zone": 101,
    "Name": "Myslivna",
    "Latitude": 49.187665,
    "Longitude": 16.552102,
    "IsPublic": true,
    "LineList": "68,90"
  },
  {
    "StopID": 1409,
    "Zone": 101,
    "Name": "Myslivní",
    "Latitude": 49.190456,
    "Longitude": 16.543482,
    "IsPublic": true,
    "LineList": "52,90"
  },
  {
    "StopID": 1412,
    "Zone": 101,
    "Name": "Na kovárně",
    "Latitude": 49.253652,
    "Longitude": 16.620986,
    "IsPublic": true,
    "LineList": "43,93"
  },
  {
    "StopID": 1414,
    "Zone": 101,
    "Name": "Nadační",
    "Latitude": 49.245169,
    "Longitude": 16.570704,
    "IsPublic": true,
    "LineList": "65"
  },
  {
    "StopID": 1415,
    "Zone": 100,
    "Name": "NC Královo Pole",
    "Latitude": 49.217570,
    "Longitude": 16.607100,
    "IsPublic": true,
    "LineList": "67"
  },
  {
    "StopID": 1416,
    "Zone": 101,
    "Name": "Nálepkova",
    "Latitude": 49.208794,
    "Longitude": 16.552320,
    "IsPublic": true,
    "LineList": "67"
  },
  {
    "StopID": 1417,
    "Zone": 101,
    "Name": "Náměstí 28. dubna",
    "Latitude": 49.225751,
    "Longitude": 16.531631,
    "IsPublic": true,
    "LineList": "30,50,51,52,92"
  },
  {
    "StopID": 1418,
    "Zone": 100,
    "Name": "Náměstí 28. října",
    "Latitude": 49.201362,
    "Longitude": 16.613654,
    "IsPublic": true,
    "LineList": "3,5,9,67,92,93"
  },
  {
    "StopID": 1421,
    "Zone": 101,
    "Name": "Náměstí Karla IV.",
    "Latitude": 49.206545,
    "Longitude": 16.694702,
    "IsPublic": true,
    "LineList": "55,58,78,97,98,151"
  },
  {
    "StopID": 1422,
    "Zone": 100,
    "Name": "Náměstí Republiky",
    "Latitude": 49.211073,
    "Longitude": 16.633854,
    "IsPublic": true,
    "LineList": "4,94"
  },
  {
    "StopID": 1423,
    "Zone": 100,
    "Name": "Náměstí Svobody",
    "Latitude": 49.195661,
    "Longitude": 16.608003,
    "IsPublic": true,
    "LineList": "4,8,9"
  },
  {
    "StopID": 1426,
    "Zone": 100,
    "Name": "Nám.Svornosti",
    "Latitude": 49.215382,
    "Longitude": 16.582495,
    "IsPublic": true,
    "LineList": "34,36,88,89"
  },
  {
    "StopID": 1428,
    "Zone": 100,
    "Name": "Nemocnice u sv. Anny",
    "Latitude": 49.191497,
    "Longitude": 16.599030,
    "IsPublic": true,
    "LineList": "3,4,5,6,9,10,12,97"
  },
  {
    "StopID": 1429,
    "Zone": 101,
    "Name": "Nemocnice Bohunice",
    "Latitude": 49.175806,
    "Longitude": 16.567233,
    "IsPublic": true,
    "LineList": "8,25,37,40,50,51,69,90,401,402,405,406,796"
  },
  {
    "StopID": 1430,
    "Zone": 100,
    "Name": "Nemocnice Milosrdných bratří",
    "Latitude": 49.183691,
    "Longitude": 16.595021,
    "IsPublic": true,
    "LineList": "2,5,6,7,62,91"
  },
  {
    "StopID": 1431,
    "Zone": 100,
    "Name": "Nerudova",
    "Latitude": 49.206274,
    "Longitude": 16.595414,
    "IsPublic": true,
    "LineList": "3,4,5,12,93,99"
  },
  {
    "StopID": 1433,
    "Zone": 100,
    "Name": "Neumannova",
    "Latitude": 49.196590,
    "Longitude": 16.577965,
    "IsPublic": true,
    "LineList": "38"
  },
  {
    "StopID": 1434,
    "Zone": 100,
    "Name": "Vozovna Husovice",
    "Latitude": 49.208432,
    "Longitude": 16.629818,
    "IsPublic": true,
    "LineList": "4,94"
  },
  {
    "StopID": 1435,
    "Zone": 101,
    "Name": "Novomoravanská",
    "Latitude": 49.153104,
    "Longitude": 16.600346,
    "IsPublic": true,
    "LineList": "504"
  },
  {
    "StopID": 1436,
    "Zone": 100,
    "Name": "Nové sady",
    "Latitude": 49.190126,
    "Longitude": 16.609250,
    "IsPublic": true,
    "LineList": "1,2,4,7,8,9,12"
  },
  {
    "StopID": 1437,
    "Zone": 100,
    "Name": "Nové sady\u00A0-\u00A0smyčka",
    "Latitude": 49.189634,
    "Longitude": 16.606862,
    "IsPublic": true,
    "LineList": "1"
  },
  {
    "StopID": 1438,
    "Zone": 101,
    "Name": "Novolíšeňská",
    "Latitude": 49.201852,
    "Longitude": 16.670414,
    "IsPublic": true,
    "LineList": "8,10,27,99"
  },
  {
    "StopID": 1440,
    "Zone": 101,
    "Name": "OC Futurum",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1441,
    "Zone": 101,
    "Name": "Obecká",
    "Latitude": 49.214410,
    "Longitude": 16.701682,
    "IsPublic": true,
    "LineList": "58,97"
  },
  {
    "StopID": 1442,
    "Zone": 100,
    "Name": "Obilní trh",
    "Latitude": 49.198122,
    "Longitude": 16.597846,
    "IsPublic": true,
    "LineList": "4,38,39,89,95"
  },
  {
    "StopID": 1443,
    "Zone": 101,
    "Name": "Oblá",
    "Latitude": 49.177499,
    "Longitude": 16.552706,
    "IsPublic": true,
    "LineList": "26,37,50,90,95"
  },
  {
    "StopID": 1447,
    "Zone": 100,
    "Name": "Obřanská\u00A0-\u00A0u školy",
    "Latitude": 49.222716,
    "Longitude": 16.644771,
    "IsPublic": true,
    "LineList": "4,72,75,94"
  },
  {
    "StopID": 1448,
    "Zone": 100,
    "Name": "Obřanský most",
    "Latitude": 49.227738,
    "Longitude": 16.649466,
    "IsPublic": true,
    "LineList": "4,94"
  },
  {
    "StopID": 1452,
    "Zone": 100,
    "Name": "Obřany, sídliště",
    "Latitude": 49.235584,
    "Longitude": 16.644343,
    "IsPublic": true,
    "LineList": "72,75,94"
  },
  {
    "StopID": 1453,
    "Zone": 101,
    "Name": "Olbrachtovo náměstí",
    "Latitude": 49.224699,
    "Longitude": 16.558583,
    "IsPublic": true,
    "LineList": "36,93"
  },
  {
    "StopID": 1455,
    "Zone": 101,
    "Name": "Olomoucká - u školy",
    "Latitude": 49.186303,
    "Longitude": 16.652718,
    "IsPublic": true,
    "LineList": "31,33,77,96,790,795"
  },
  {
    "StopID": 1457,
    "Zone": 101,
    "Name": "Olšanského",
    "Latitude": 49.244294,
    "Longitude": 16.577498,
    "IsPublic": true,
    "LineList": "41,65,71,90"
  },
  {
    "StopID": 1461,
    "Zone": 101,
    "Name": "Ondrouškova",
    "Latitude": 49.217593,
    "Longitude": 16.517246,
    "IsPublic": true,
    "LineList": "3,10,51,52,54,98,790"
  },
  {
    "StopID": 1462,
    "Zone": 101,
    "Name": "Optátova",
    "Latitude": 49.208720,
    "Longitude": 16.555587,
    "IsPublic": true,
    "LineList": "25,26,35,37,44,67,88,98"
  },
  {
    "StopID": 1463,
    "Zone": 100,
    "Name": "Opuštěná",
    "Latitude": 49.185561,
    "Longitude": 16.613497,
    "IsPublic": true,
    "LineList": "44,49,77,84,701,702"
  },
  {
    "StopID": 1466,
    "Zone": 101,
    "Name": "Ořechovská",
    "Latitude": 49.156838,
    "Longitude": 16.599868,
    "IsPublic": true,
    "LineList": "2,51,96,501,504,505"
  },
  {
    "StopID": 1467,
    "Zone": 101,
    "Name": "Ořešín",
    "Latitude": 49.276463,
    "Longitude": 16.606664,
    "IsPublic": true,
    "LineList": "70,90"
  },
  {
    "StopID": 1468,
    "Zone": 101,
    "Name": "Ořešínská",
    "Latitude": 49.273454,
    "Longitude": 16.599796,
    "IsPublic": true,
    "LineList": "70,90"
  },
  {
    "StopID": 1472,
    "Zone": 101,
    "Name": "Osová",
    "Latitude": 49.169074,
    "Longitude": 16.566732,
    "IsPublic": true,
    "LineList": "6,7,8,25,37,50,51,69,91,403,404"
  },
  {
    "StopID": 1473,
    "Zone": 100,
    "Name": "Otakara Ševčíka",
    "Latitude": 49.195162,
    "Longitude": 16.645991,
    "IsPublic": true,
    "LineList": "9,44,84,89,98"
  },
  {
    "StopID": 1475,
    "Zone": 101,
    "Name": "Palackého vrch",
    "Latitude": 49.224173,
    "Longitude": 16.573374,
    "IsPublic": true,
    "LineList": "72"
  },
  {
    "StopID": 1476,
    "Zone": 101,
    "Name": "Palackého náměstí",
    "Latitude": 49.250828,
    "Longitude": 16.581838,
    "IsPublic": true,
    "LineList": "42,65,70,90"
  },
  {
    "StopID": 1477,
    "Zone": 101,
    "Name": "Pálavské náměstí",
    "Latitude": 49.205873,
    "Longitude": 16.657823,
    "IsPublic": true,
    "LineList": "27,57,78,99"
  },
  {
    "StopID": 1478,
    "Zone": 100,
    "Name": "Pavlíkova",
    "Latitude": 49.194724,
    "Longitude": 16.583000,
    "IsPublic": true,
    "LineList": "38,68,95"
  },
  {
    "StopID": 1479,
    "Zone": 101,
    "Name": "Panská lícha",
    "Latitude": 49.245186,
    "Longitude": 16.624820,
    "IsPublic": true,
    "LineList": "57"
  },
  {
    "StopID": 1481,
    "Zone": 101,
    "Name": "Pavlovská",
    "Latitude": 49.189760,
    "Longitude": 16.531177,
    "IsPublic": true,
    "LineList": "37,50,97"
  },
  {
    "StopID": 1483,
    "Zone": 100,
    "Name": "Pionýrská",
    "Latitude": 49.207723,
    "Longitude": 16.604443,
    "IsPublic": true,
    "LineList": "1,2,3,4,6,7,8,9,10,25,26,90,91"
  },
  {
    "StopID": 1485,
    "Zone": 101,
    "Name": "Pluháčkova",
    "Latitude": 49.275205,
    "Longitude": 16.604222,
    "IsPublic": true,
    "LineList": "70,90"
  },
  {
    "StopID": 1487,
    "Zone": 100,
    "Name": "Pisárky",
    "Latitude": 49.193346,
    "Longitude": 16.570456,
    "IsPublic": true,
    "LineList": "1,25,26,35,37,38,39,44,52,68,84,88,95,97,98,796"
  },
  {
    "StopID": 1488,
    "Zone": 101,
    "Name": "Pod dálnicí",
    "Latitude": 49.163526,
    "Longitude": 16.555281,
    "IsPublic": true,
    "LineList": "51,403,404"
  },
  {
    "StopID": 1489,
    "Zone": 101,
    "Name": "Podbělová",
    "Latitude": 49.213965,
    "Longitude": 16.681522,
    "IsPublic": true,
    "LineList": "55,78,98"
  },
  {
    "StopID": 1490,
    "Zone": 101,
    "Name": "Pod Jurankou",
    "Latitude": 49.199163,
    "Longitude": 16.566294,
    "IsPublic": true,
    "LineList": "25,26,35,37,38,39,44,84,88,98"
  },
  {
    "StopID": 1491,
    "Zone": 101,
    "Name": "Podkomorská",
    "Latitude": 49.225484,
    "Longitude": 16.513572,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 1492,
    "Zone": 101,
    "Name": "Pod nemocnicí",
    "Latitude": 49.172180,
    "Longitude": 16.568988,
    "IsPublic": true,
    "LineList": "25,37,50,51,69,91,403,404"
  },
  {
    "StopID": 1493,
    "Zone": 101,
    "Name": "Podlesí",
    "Latitude": 49.218760,
    "Longitude": 16.542320,
    "IsPublic": true,
    "LineList": "3,10,30,89"
  },
  {
    "StopID": 1494,
    "Zone": 101,
    "Name": "Pod Mniší horou",
    "Latitude": 49.227402,
    "Longitude": 16.534252,
    "IsPublic": true,
    "LineList": "89,302"
  },
  {
    "StopID": 1495,
    "Zone": 101,
    "Name": "Pod Tuřankou",
    "Latitude": 49.173121,
    "Longitude": 16.675222,
    "IsPublic": true,
    "LineList": "73,75"
  },
  {
    "StopID": 1496,
    "Zone": 100,
    "Name": "Podlomní",
    "Latitude": 49.192374,
    "Longitude": 16.655178,
    "IsPublic": true,
    "LineList": "55,75,89,98"
  },
  {
    "StopID": 1497,
    "Zone": 101,
    "Name": "Podolská",
    "Latitude": 49.203070,
    "Longitude": 16.713793,
    "IsPublic": true,
    "LineList": "55,98,151"
  },
  {
    "StopID": 1498,
    "Zone": 100,
    "Name": "Podsednická",
    "Latitude": 49.210274,
    "Longitude": 16.646281,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1499,
    "Zone": 101,
    "Name": "Podnikatelská",
    "Latitude": 49.227371,
    "Longitude": 16.576366,
    "IsPublic": true,
    "LineList": "72"
  },
  {
    "StopID": 1500,
    "Zone": 0,
    "Name": "Pod Trnůvkou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1501,
    "Zone": 101,
    "Name": "Podstránská",
    "Latitude": 49.187131,
    "Longitude": 16.666511,
    "IsPublic": true,
    "LineList": "10,75,89"
  },
  {
    "StopID": 1502,
    "Zone": 101,
    "Name": "Podveská",
    "Latitude": 49.217615,
    "Longitude": 16.558598,
    "IsPublic": true,
    "LineList": "30,36"
  },
  {
    "StopID": 1503,
    "Zone": 100,
    "Name": "Podzimní",
    "Latitude": 49.221612,
    "Longitude": 16.653014,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1506,
    "Zone": 101,
    "Name": "Poliklinika Lesná",
    "Latitude": 49.222462,
    "Longitude": 16.625658,
    "IsPublic": true,
    "LineList": "44,57,72,84"
  },
  {
    "StopID": 1511,
    "Zone": 101,
    "Name": "Popelova",
    "Latitude": 49.156660,
    "Longitude": 16.646610,
    "IsPublic": true,
    "LineList": "40,48,64,74,95"
  },
  {
    "StopID": 1512,
    "Zone": 100,
    "Name": "Poříčí",
    "Latitude": 49.187296,
    "Longitude": 16.594572,
    "IsPublic": true,
    "LineList": "2,5,6,7,44,62,84,91"
  },
  {
    "StopID": 1513,
    "Zone": 101,
    "Name": "Pratecká",
    "Latitude": 49.146272,
    "Longitude": 16.681430,
    "IsPublic": true,
    "LineList": "48,89"
  },
  {
    "StopID": 1514,
    "Zone": 101,
    "Name": "Pražákova",
    "Latitude": 49.162888,
    "Longitude": 16.602621,
    "IsPublic": true,
    "LineList": "50"
  },
  {
    "StopID": 1515,
    "Zone": 101,
    "Name": "Pražákova\u00A0-\u00A0obchodní centrum",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1516,
    "Zone": 101,
    "Name": "Pražská",
    "Latitude": 49.173478,
    "Longitude": 16.531543,
    "IsPublic": true,
    "LineList": "51,69,96,401,402"
  },
  {
    "StopID": 1517,
    "Zone": 100,
    "Name": "Preslova",
    "Latitude": 49.199298,
    "Longitude": 16.570799,
    "IsPublic": true,
    "LineList": "38"
  },
  {
    "StopID": 1518,
    "Zone": 101,
    "Name": "Prodloužená",
    "Latitude": 49.151762,
    "Longitude": 16.647696,
    "IsPublic": true,
    "LineList": "48,64,85,95"
  },
  {
    "StopID": 1520,
    "Zone": 101,
    "Name": "Průmyslová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1521,
    "Zone": 100,
    "Name": "Proškovo náměstí",
    "Latitude": 49.220018,
    "Longitude": 16.643342,
    "IsPublic": true,
    "LineList": "4,72,75,94"
  },
  {
    "StopID": 1522,
    "Zone": 100,
    "Name": "Provazníkova",
    "Latitude": 49.214494,
    "Longitude": 16.623938,
    "IsPublic": true,
    "LineList": "25,26,46"
  },
  {
    "StopID": 1523,
    "Zone": 101,
    "Name": "Prušánecká",
    "Latitude": 49.208886,
    "Longitude": 16.663417,
    "IsPublic": true,
    "LineList": "27,57,99,201"
  },
  {
    "StopID": 1525,
    "Zone": 101,
    "Name": "Přemyslovo náměstí",
    "Latitude": 49.176372,
    "Longitude": 16.687310,
    "IsPublic": true,
    "LineList": "31,78"
  },
  {
    "StopID": 1526,
    "Zone": 101,
    "Name": "Příjezdová",
    "Latitude": 49.261837,
    "Longitude": 16.569462,
    "IsPublic": true,
    "LineList": "41,71,91"
  },
  {
    "StopID": 1527,
    "Zone": 101,
    "Name": "Přístaviště",
    "Latitude": 49.228231,
    "Longitude": 16.522304,
    "IsPublic": true,
    "LineList": "3,10,54,98,303"
  },
  {
    "StopID": 1528,
    "Zone": 101,
    "Name": "Přívrat",
    "Latitude": 49.218448,
    "Longitude": 16.574184,
    "IsPublic": true,
    "LineList": "30,32,34,36,44,67,84,88,89,93"
  },
  {
    "StopID": 1530,
    "Zone": 101,
    "Name": "Přízřenice, smyčka",
    "Latitude": 49.144280,
    "Longitude": 16.621157,
    "IsPublic": true,
    "LineList": "49"
  },
  {
    "StopID": 1531,
    "Zone": 101,
    "Name": "Přízřenice",
    "Latitude": 49.145202,
    "Longitude": 16.620114,
    "IsPublic": true,
    "LineList": "49,94"
  },
  {
    "StopID": 1532,
    "Zone": 101,
    "Name": "Raisova",
    "Latitude": 49.181997,
    "Longitude": 16.562512,
    "IsPublic": true,
    "LineList": "25,26,95"
  },
  {
    "StopID": 1533,
    "Zone": 101,
    "Name": "Ráječek",
    "Latitude": 49.161100,
    "Longitude": 16.637814,
    "IsPublic": true,
    "LineList": "40,48,64,74,95,109"
  },
  {
    "StopID": 1535,
    "Zone": 100,
    "Name": "Reissigova",
    "Latitude": 49.216255,
    "Longitude": 16.604041,
    "IsPublic": true,
    "LineList": "67"
  },
  {
    "StopID": 1536,
    "Zone": 101,
    "Name": "Rakovec",
    "Latitude": 49.227805,
    "Longitude": 16.508536,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 1537,
    "Zone": 101,
    "Name": "Bystrc, Rakovecká",
    "Latitude": 49.226049,
    "Longitude": 16.518757,
    "IsPublic": true,
    "LineList": "3,54,98,303"
  },
  {
    "StopID": 1538,
    "Zone": 101,
    "Name": "Revoluční",
    "Latitude": 49.149762,
    "Longitude": 16.662448,
    "IsPublic": true,
    "LineList": "40,48,74,85,95"
  },
  {
    "StopID": 1539,
    "Zone": 101,
    "Name": "Renčova",
    "Latitude": 49.246955,
    "Longitude": 16.575106,
    "IsPublic": true,
    "LineList": "65"
  },
  {
    "StopID": 1540,
    "Zone": 101,
    "Name": "Ríšova",
    "Latitude": 49.206684,
    "Longitude": 16.481219,
    "IsPublic": true,
    "LineList": "52"
  },
  {
    "StopID": 1541,
    "Zone": 100,
    "Name": "Riviéra",
    "Latitude": 49.187416,
    "Longitude": 16.571518,
    "IsPublic": true,
    "LineList": "44,84,98"
  },
  {
    "StopID": 1542,
    "Zone": 0,
    "Name": "Rokle, přístaviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1543,
    "Zone": 101,
    "Name": "Rolencova",
    "Latitude": 49.145211,
    "Longitude": 16.655319,
    "IsPublic": true,
    "LineList": "48,85,95"
  },
  {
    "StopID": 1544,
    "Zone": 101,
    "Name": "Rosického náměstí",
    "Latitude": 49.214727,
    "Longitude": 16.568532,
    "IsPublic": true,
    "LineList": "3,10,44,67,84,88,92"
  },
  {
    "StopID": 1545,
    "Zone": 0,
    "Name": "Rokle, přístaviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1546,
    "Zone": 101,
    "Name": "Rotreklova",
    "Latitude": 49.206567,
    "Longitude": 16.685010,
    "IsPublic": true,
    "LineList": "27,99"
  },
  {
    "StopID": 1547,
    "Zone": 101,
    "Name": "Roviny",
    "Latitude": 49.127846,
    "Longitude": 16.681374,
    "IsPublic": true,
    "LineList": "40,95"
  },
  {
    "StopID": 1548,
    "Zone": 101,
    "Name": "Rozárka",
    "Latitude": 49.254287,
    "Longitude": 16.622674,
    "IsPublic": true,
    "LineList": "43,57,93"
  },
  {
    "StopID": 1549,
    "Zone": 101,
    "Name": "Rozhraní",
    "Latitude": 49.155776,
    "Longitude": 16.592203,
    "IsPublic": true,
    "LineList": "51,501"
  },
  {
    "StopID": 1550,
    "Zone": 101,
    "Name": "Ruda",
    "Latitude": 49.220526,
    "Longitude": 16.502696,
    "IsPublic": true,
    "LineList": "51,52,54,98,790"
  },
  {
    "StopID": 1551,
    "Zone": 101,
    "Name": "Růženin dvůr",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1552,
    "Zone": 100,
    "Name": "Rybkova",
    "Latitude": 49.206076,
    "Longitude": 16.593384,
    "IsPublic": true,
    "LineList": "3,10,92"
  },
  {
    "StopID": 1553,
    "Zone": 101,
    "Name": "Řečkovice",
    "Latitude": 49.247143,
    "Longitude": 16.579164,
    "IsPublic": true,
    "LineList": "1,41,65,71,90,91"
  },
  {
    "StopID": 1554,
    "Zone": 101,
    "Name": "Rozcestí",
    "Latitude": 49.285676,
    "Longitude": 16.631799,
    "IsPublic": true,
    "LineList": "57,93"
  },
  {
    "StopID": 1556,
    "Zone": 101,
    "Name": "Řečkovice, hřbitov",
    "Latitude": 49.253379,
    "Longitude": 16.582412,
    "IsPublic": true,
    "LineList": "42,65"
  },
  {
    "StopID": 1557,
    "Zone": 101,
    "Name": "Řečkovice, nádraží",
    "Latitude": 49.250891,
    "Longitude": 16.590190,
    "IsPublic": true,
    "LineList": "65,130"
  },
  {
    "StopID": 1559,
    "Zone": 101,
    "Name": "Říčanská",
    "Latitude": 49.218570,
    "Longitude": 16.497466,
    "IsPublic": true,
    "LineList": "52,54,98,790"
  },
  {
    "StopID": 1561,
    "Zone": 101,
    "Name": "Řezáčova",
    "Latitude": 49.226292,
    "Longitude": 16.555472,
    "IsPublic": true,
    "LineList": "36,93"
  },
  {
    "StopID": 1562,
    "Zone": 101,
    "Name": "Řípská",
    "Latitude": 49.173322,
    "Longitude": 16.682044,
    "IsPublic": true,
    "LineList": "31,75,76,77,78,89"
  },
  {
    "StopID": 1563,
    "Zone": 100,
    "Name": "Psychiatrická nemocnice",
    "Latitude": 49.185064,
    "Longitude": 16.636430,
    "IsPublic": true,
    "LineList": "47,49,94"
  },
  {
    "StopID": 1564,
    "Zone": 101,
    "Name": "Sadová",
    "Latitude": 49.234032,
    "Longitude": 16.604326,
    "IsPublic": true,
    "LineList": "43,93"
  },
  {
    "StopID": 1565,
    "Zone": 101,
    "Name": "Sazenice",
    "Latitude": 49.172877,
    "Longitude": 16.623824,
    "IsPublic": true,
    "LineList": "40,48,64,67,74,95"
  },
  {
    "StopID": 1566,
    "Zone": 101,
    "Name": "Semilasso",
    "Latitude": 49.228076,
    "Longitude": 16.593128,
    "IsPublic": true,
    "LineList": "1,2,3,4,6,7,8,9,10,30,41,42,44,70,71,72,84,90,91"
  },
  {
    "StopID": 1567,
    "Zone": 101,
    "Name": "Skácelova",
    "Latitude": 49.221527,
    "Longitude": 16.585279,
    "IsPublic": true,
    "LineList": "3,4,5,12,30,32,44,67,72,84,93,99"
  },
  {
    "StopID": 1568,
    "Zone": 101,
    "Name": "Skalní",
    "Latitude": 49.174240,
    "Longitude": 16.536133,
    "IsPublic": true,
    "LineList": "51,69,96,401,402"
  },
  {
    "StopID": 1571,
    "Zone": 0,
    "Name": "Skály",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1572,
    "Zone": 101,
    "Name": "Skrejš",
    "Latitude": 49.262076,
    "Longitude": 16.595350,
    "IsPublic": true,
    "LineList": "70,90"
  },
  {
    "StopID": 1573,
    "Zone": 101,
    "Name": "Slatina, nádraží",
    "Latitude": 49.169622,
    "Longitude": 16.682352,
    "IsPublic": true,
    "LineList": "75,77,126,146"
  },
  {
    "StopID": 1576,
    "Zone": 101,
    "Name": "Slatina, rozcestí",
    "Latitude": 49.182194,
    "Longitude": 16.691974,
    "IsPublic": true,
    "LineList": "78,96"
  },
  {
    "StopID": 1577,
    "Zone": 101,
    "Name": "Slatina, sídliště",
    "Latitude": 49.181876,
    "Longitude": 16.690302,
    "IsPublic": true,
    "LineList": "33,78,96,601,602,701,702"
  },
  {
    "StopID": 1580,
    "Zone": 101,
    "Name": "Slatinka",
    "Latitude": 49.164924,
    "Longitude": 16.688890,
    "IsPublic": true,
    "LineList": "77"
  },
  {
    "StopID": 1581,
    "Zone": 101,
    "Name": "Areál Slatina",
    "Latitude": 49.168608,
    "Longitude": 16.678414,
    "IsPublic": true,
    "LineList": "73,75,77,78,89,790,795"
  },
  {
    "StopID": 1582,
    "Zone": 101,
    "Name": "Slavíčkova",
    "Latitude": 49.225954,
    "Longitude": 16.617936,
    "IsPublic": true,
    "LineList": "57,92"
  },
  {
    "StopID": 1583,
    "Zone": 101,
    "Name": "Slévárna Heunisch",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1586,
    "Zone": 101,
    "Name": "Slovanské náměstí",
    "Latitude": 49.222986,
    "Longitude": 16.591408,
    "IsPublic": true,
    "LineList": "30,32,44,67,72,84"
  },
  {
    "StopID": 1587,
    "Zone": 100,
    "Name": "Smetanova",
    "Latitude": 49.201590,
    "Longitude": 16.601968,
    "IsPublic": true,
    "LineList": "32,34,36"
  },
  {
    "StopID": 1591,
    "Zone": 101,
    "Name": "Sochorova",
    "Latitude": 49.213448,
    "Longitude": 16.564637,
    "IsPublic": true,
    "LineList": "3,10"
  },
  {
    "StopID": 1592,
    "Zone": 101,
    "Name": "Sokolnická",
    "Latitude": 49.131433,
    "Longitude": 16.683993,
    "IsPublic": true,
    "LineList": "40,73,74,95"
  },
  {
    "StopID": 1593,
    "Zone": 0,
    "Name": "Sokolské koupaliště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1594,
    "Zone": 101,
    "Name": "Sokolova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1596,
    "Zone": 100,
    "Name": "Soukenická",
    "Latitude": 49.188683,
    "Longitude": 16.607355,
    "IsPublic": true,
    "LineList": "7,8,40,90,96"
  },
  {
    "StopID": 1597,
    "Zone": 100,
    "Name": "Soukopova",
    "Latitude": 49.199044,
    "Longitude": 16.578890,
    "IsPublic": true,
    "LineList": "35,39"
  },
  {
    "StopID": 1598,
    "Zone": 100,
    "Name": "Spáčilova",
    "Latitude": 49.188646,
    "Longitude": 16.641256,
    "IsPublic": true,
    "LineList": "31,33,44,77,89,96"
  },
  {
    "StopID": 1601,
    "Zone": 100,
    "Name": "Spojovací",
    "Latitude": 49.211936,
    "Longitude": 16.586668,
    "IsPublic": true,
    "LineList": "34,36,89"
  },
  {
    "StopID": 1602,
    "Zone": 100,
    "Name": "Sportovní",
    "Latitude": 49.212118,
    "Longitude": 16.607154,
    "IsPublic": true,
    "LineList": "67"
  },
  {
    "StopID": 1603,
    "Zone": 101,
    "Name": "Správa dálnic",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1606,
    "Zone": 101,
    "Name": "Srbská",
    "Latitude": 49.228165,
    "Longitude": 16.586996,
    "IsPublic": true,
    "LineList": "32"
  },
  {
    "StopID": 1607,
    "Zone": 101,
    "Name": "Stamicova",
    "Latitude": 49.194785,
    "Longitude": 16.539673,
    "IsPublic": true,
    "LineList": "37,52,97"
  },
  {
    "StopID": 1608,
    "Zone": 101,
    "Name": "Stará dálnice",
    "Latitude": 49.199295,
    "Longitude": 16.517112,
    "IsPublic": true,
    "LineList": "50,52"
  },
  {
    "StopID": 1610,
    "Zone": 101,
    "Name": "Stará nemocnice",
    "Latitude": 49.173540,
    "Longitude": 16.577451,
    "IsPublic": true,
    "LineList": "40,90"
  },
  {
    "StopID": 1611,
    "Zone": 100,
    "Name": "Stará osada",
    "Latitude": 49.202304,
    "Longitude": 16.641929,
    "IsPublic": true,
    "LineList": "2,3,27,44,55,58,64,75,78,84,97,99,201,795"
  },
  {
    "StopID": 1612,
    "Zone": 101,
    "Name": "Staré Černovice",
    "Latitude": 49.169957,
    "Longitude": 16.647909,
    "IsPublic": true,
    "LineList": "47,49"
  },
  {
    "StopID": 1613,
    "Zone": 101,
    "Name": "Staré letiště",
    "Latitude": 49.184967,
    "Longitude": 16.659274,
    "IsPublic": true,
    "LineList": "31,33,96"
  },
  {
    "StopID": 1616,
    "Zone": 101,
    "Name": "Starý Lískovec",
    "Latitude": 49.171189,
    "Longitude": 16.554169,
    "IsPublic": true,
    "LineList": "6,7,69,96,790"
  },
  {
    "StopID": 1618,
    "Zone": 101,
    "Name": "Stránská skála",
    "Latitude": 49.191852,
    "Longitude": 16.673998,
    "IsPublic": true,
    "LineList": "10"
  },
  {
    "StopID": 1619,
    "Zone": 101,
    "Name": "Str.skála smyčka",
    "Latitude": 49.192720,
    "Longitude": 16.677384,
    "IsPublic": true,
    "LineList": "10"
  },
  {
    "StopID": 1621,
    "Zone": 100,
    "Name": "Stránského",
    "Latitude": 49.211954,
    "Longitude": 16.568673,
    "IsPublic": true,
    "LineList": "11"
  },
  {
    "StopID": 1622,
    "Zone": 100,
    "Name": "Strážní",
    "Latitude": 49.178342,
    "Longitude": 16.603811,
    "IsPublic": true,
    "LineList": "96,104,105,108"
  },
  {
    "StopID": 1623,
    "Zone": 101,
    "Name": "Strnadova",
    "Latitude": 49.205788,
    "Longitude": 16.668752,
    "IsPublic": true,
    "LineList": "78,201"
  },
  {
    "StopID": 1624,
    "Zone": 101,
    "Name": "Studentská",
    "Latitude": 49.179331,
    "Longitude": 16.569806,
    "IsPublic": true,
    "LineList": "40"
  },
  {
    "StopID": 1626,
    "Zone": 100,
    "Name": "Sušilova",
    "Latitude": 49.204372,
    "Longitude": 16.598724,
    "IsPublic": true,
    "LineList": "32,34,36"
  },
  {
    "StopID": 1627,
    "Zone": 101,
    "Name": "Svah",
    "Latitude": 49.165062,
    "Longitude": 16.567843,
    "IsPublic": true,
    "LineList": "51,69,96,403,404"
  },
  {
    "StopID": 1628,
    "Zone": 100,
    "Name": "Svatopetrská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1631,
    "Zone": 100,
    "Name": "Svatoplukova",
    "Latitude": 49.205100,
    "Longitude": 16.641425,
    "IsPublic": true,
    "LineList": "27,64,99"
  },
  {
    "StopID": 1632,
    "Zone": 101,
    "Name": "Svážná",
    "Latitude": 49.173476,
    "Longitude": 16.553444,
    "IsPublic": true,
    "LineList": "51,401,402"
  },
  {
    "StopID": 1633,
    "Zone": 101,
    "Name": "Svratecká",
    "Latitude": 49.218243,
    "Longitude": 16.553765,
    "IsPublic": true,
    "LineList": "3,10,30,36,88,89,92,93,98"
  },
  {
    "StopID": 1635,
    "Zone": 100,
    "Name": "Šelepova",
    "Latitude": 49.213347,
    "Longitude": 16.596037,
    "IsPublic": true,
    "LineList": "32,68"
  },
  {
    "StopID": 1636,
    "Zone": 101,
    "Name": "Šárka",
    "Latitude": 49.191438,
    "Longitude": 16.545825,
    "IsPublic": true,
    "LineList": "52,68"
  },
  {
    "StopID": 1637,
    "Zone": 100,
    "Name": "Šilingrovo náměstí",
    "Latitude": 49.192077,
    "Longitude": 16.604799,
    "IsPublic": true,
    "LineList": "3,4,5,6,9,10,12,89,92,93,95,99"
  },
  {
    "StopID": 1638,
    "Zone": 101,
    "Name": "Šimáčkova",
    "Latitude": 49.209487,
    "Longitude": 16.696101,
    "IsPublic": true,
    "LineList": "58,97"
  },
  {
    "StopID": 1639,
    "Zone": 100,
    "Name": "Škrobárenská",
    "Latitude": 49.182874,
    "Longitude": 16.626291,
    "IsPublic": true,
    "LineList": "64,67"
  },
  {
    "StopID": 1640,
    "Zone": 101,
    "Name": "Šmahova",
    "Latitude": 49.171448,
    "Longitude": 16.685105,
    "IsPublic": true,
    "LineList": "76,89"
  },
  {
    "StopID": 1641,
    "Zone": 100,
    "Name": "Škroupova",
    "Latitude": 49.192022,
    "Longitude": 16.648112,
    "IsPublic": true,
    "LineList": "44,89"
  },
  {
    "StopID": 1642,
    "Zone": 100,
    "Name": "Špačkova",
    "Latitude": 49.190872,
    "Longitude": 16.659172,
    "IsPublic": true,
    "LineList": "55,75,89,98"
  },
  {
    "StopID": 1643,
    "Zone": 100,
    "Name": "Štefánikova",
    "Latitude": 49.215332,
    "Longitude": 16.599140,
    "IsPublic": true,
    "LineList": "67,68"
  },
  {
    "StopID": 1644,
    "Zone": 101,
    "Name": "Šromova",
    "Latitude": 49.133870,
    "Longitude": 16.650872,
    "IsPublic": true,
    "LineList": "78"
  },
  {
    "StopID": 1646,
    "Zone": 100,
    "Name": "Štefánikova čtvrť",
    "Latitude": 49.217046,
    "Longitude": 16.627718,
    "IsPublic": true,
    "LineList": "5,25,26,44,46,57,72,84,92"
  },
  {
    "StopID": 1647,
    "Zone": 101,
    "Name": "Štěpánkova",
    "Latitude": 49.251442,
    "Longitude": 16.623214,
    "IsPublic": true,
    "LineList": "57"
  },
  {
    "StopID": 1648,
    "Zone": 101,
    "Name": "Štouračova",
    "Latitude": 49.215221,
    "Longitude": 16.521682,
    "IsPublic": true,
    "LineList": "50,790"
  },
  {
    "StopID": 1651,
    "Zone": 101,
    "Name": "Štursova",
    "Latitude": 49.216110,
    "Longitude": 16.564118,
    "IsPublic": true,
    "LineList": "30,32,36,44,67,84,88,89,92,93"
  },
  {
    "StopID": 1652,
    "Zone": 100,
    "Name": "Šumavská",
    "Latitude": 49.213805,
    "Longitude": 16.600721,
    "IsPublic": true,
    "LineList": "1,2,3,4,6,7,8,9,10,68,90,91"
  },
  {
    "StopID": 1653,
    "Zone": 101,
    "Name": "Švermova",
    "Latitude": 49.169226,
    "Longitude": 16.573184,
    "IsPublic": true,
    "LineList": "6,7,8"
  },
  {
    "StopID": 1654,
    "Zone": 101,
    "Name": "Švédské valy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1657,
    "Zone": 100,
    "Name": "Tábor",
    "Latitude": 49.210315,
    "Longitude": 16.586914,
    "IsPublic": true,
    "LineList": "3,10,68,88,92"
  },
  {
    "StopID": 1658,
    "Zone": 101,
    "Name": "Talichova",
    "Latitude": 49.191569,
    "Longitude": 16.529872,
    "IsPublic": true,
    "LineList": "37,50,52,97"
  },
  {
    "StopID": 1659,
    "Zone": 101,
    "Name": "Technologický park",
    "Latitude": 49.231561,
    "Longitude": 16.576901,
    "IsPublic": true,
    "LineList": "3,4,5,12,65,72,99"
  },
  {
    "StopID": 1660,
    "Zone": 101,
    "Name": "Technická",
    "Latitude": 49.223360,
    "Longitude": 16.578350,
    "IsPublic": true,
    "LineList": "72"
  },
  {
    "StopID": 1661,
    "Zone": 100,
    "Name": "Tererova",
    "Latitude": 49.215782,
    "Longitude": 16.589206,
    "IsPublic": true,
    "LineList": "3,4,5,12,93,99"
  },
  {
    "StopID": 1662,
    "Zone": 100,
    "Name": "Textilní kombinát",
    "Latitude": 49.181803,
    "Longitude": 16.637916,
    "IsPublic": true,
    "LineList": "47,49,94"
  },
  {
    "StopID": 1663,
    "Zone": 100,
    "Name": "Tkalcovská",
    "Latitude": 49.200033,
    "Longitude": 16.626022,
    "IsPublic": true,
    "LineList": "2,4,7,94,97,99"
  },
  {
    "StopID": 1664,
    "Zone": 101,
    "Name": "Technické muzeum",
    "Latitude": 49.228326,
    "Longitude": 16.582190,
    "IsPublic": true,
    "LineList": "3,4,5,12,99"
  },
  {
    "StopID": 1665,
    "Zone": 101,
    "Name": "Těžební",
    "Latitude": 49.182303,
    "Longitude": 16.656836,
    "IsPublic": true,
    "LineList": "77,790,795"
  },
  {
    "StopID": 1666,
    "Zone": 101,
    "Name": "Točná",
    "Latitude": 49.164752,
    "Longitude": 16.561586,
    "IsPublic": true,
    "LineList": "51,69,96,403,404"
  },
  {
    "StopID": 1667,
    "Zone": 100,
    "Name": "Tomanova",
    "Latitude": 49.207932,
    "Longitude": 16.620361,
    "IsPublic": true,
    "LineList": "7,9,93"
  },
  {
    "StopID": 1668,
    "Zone": 100,
    "Name": "Tomkovo náměstí",
    "Latitude": 49.213637,
    "Longitude": 16.636788,
    "IsPublic": true,
    "LineList": "4,44,57,72,84,94"
  },
  {
    "StopID": 1669,
    "Zone": 100,
    "Name": "Tomáškova",
    "Latitude": 49.199245,
    "Longitude": 16.631698,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1670,
    "Zone": 100,
    "Name": "Tichého",
    "Latitude": 49.204993,
    "Longitude": 16.581692,
    "IsPublic": true,
    "LineList": "68"
  },
  {
    "StopID": 1671,
    "Zone": 101,
    "Name": "Tovární",
    "Latitude": 49.133331,
    "Longitude": 16.673614,
    "IsPublic": true,
    "LineList": "40,95"
  },
  {
    "StopID": 1672,
    "Zone": 101,
    "Name": "Tranzitní plynovod",
    "Latitude": 49.174108,
    "Longitude": 16.522723,
    "IsPublic": true,
    "LineList": "401,402"
  },
  {
    "StopID": 1673,
    "Zone": 101,
    "Name": "Traťová",
    "Latitude": 49.163736,
    "Longitude": 16.595604,
    "IsPublic": true,
    "LineList": "50,96"
  },
  {
    "StopID": 1676,
    "Zone": 100,
    "Name": "Trávníčkova",
    "Latitude": 49.204420,
    "Longitude": 16.625658,
    "IsPublic": true,
    "LineList": "4,94"
  },
  {
    "StopID": 1677,
    "Zone": 100,
    "Name": "Tržní",
    "Latitude": 49.189574,
    "Longitude": 16.630826,
    "IsPublic": true,
    "LineList": "31,33,44,47,49,76,77,89,94,96,106,107,601,602,701,702"
  },
  {
    "StopID": 1681,
    "Zone": 101,
    "Name": "Tuřany, smyčka",
    "Latitude": 49.141816,
    "Longitude": 16.666903,
    "IsPublic": true,
    "LineList": "40,73,74,85,95,109"
  },
  {
    "StopID": 1682,
    "Zone": 100,
    "Name": "Tvrdého",
    "Latitude": 49.196633,
    "Longitude": 16.593629,
    "IsPublic": true,
    "LineList": "25,26,35,38,39,95"
  },
  {
    "StopID": 1683,
    "Zone": 101,
    "Name": "Tylova",
    "Latitude": 49.231775,
    "Longitude": 16.589714,
    "IsPublic": true,
    "LineList": "1,2,3,4,6,7,8,9,10,41,42,70,71,90,91"
  },
  {
    "StopID": 1684,
    "Zone": 101,
    "Name": "U buku",
    "Latitude": 49.276364,
    "Longitude": 16.630347,
    "IsPublic": true,
    "LineList": "57,93"
  },
  {
    "StopID": 1685,
    "Zone": 0,
    "Name": "U kotvy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1687,
    "Zone": 101,
    "Name": "U hřiště",
    "Latitude": 49.166010,
    "Longitude": 16.558615,
    "IsPublic": true,
    "LineList": "51,69,96"
  },
  {
    "StopID": 1689,
    "Zone": 101,
    "Name": "Kníničky, U Luhu",
    "Latitude": 49.239168,
    "Longitude": 16.530091,
    "IsPublic": true,
    "LineList": "89,302"
  },
  {
    "StopID": 1690,
    "Zone": 101,
    "Name": "U památníku",
    "Latitude": 49.235978,
    "Longitude": 16.527994,
    "IsPublic": true,
    "LineList": "89,302"
  },
  {
    "StopID": 1691,
    "Zone": 101,
    "Name": "U rozvodny",
    "Latitude": 49.240862,
    "Longitude": 16.627351,
    "IsPublic": true,
    "LineList": "57"
  },
  {
    "StopID": 1692,
    "Zone": 101,
    "Name": "U tunýlku",
    "Latitude": 49.222795,
    "Longitude": 16.617560,
    "IsPublic": true,
    "LineList": "44,72,84,93"
  },
  {
    "StopID": 1693,
    "Zone": 101,
    "Name": "U viaduktu",
    "Latitude": 49.138999,
    "Longitude": 16.660428,
    "IsPublic": true,
    "LineList": "78,95"
  },
  {
    "StopID": 1694,
    "Zone": 101,
    "Name": "U jezírka",
    "Latitude": 49.269806,
    "Longitude": 16.629159,
    "IsPublic": true,
    "LineList": "57,93"
  },
  {
    "StopID": 1696,
    "Zone": 100,
    "Name": "Brno, ÚAN Zvonařka",
    "Latitude": 49.185353,
    "Longitude": 16.616430,
    "IsPublic": true,
    "LineList": "44,48,74,104,105,106,107,108,109,601,602"
  },
  {
    "StopID": 1698,
    "Zone": 100,
    "Name": "Údolíček",
    "Latitude": 49.206660,
    "Longitude": 16.644320,
    "IsPublic": true,
    "LineList": "27,57,64,99"
  },
  {
    "StopID": 1699,
    "Zone": 101,
    "Name": "Univerzitní kampus",
    "Latitude": 49.177970,
    "Longitude": 16.567382,
    "IsPublic": true,
    "LineList": "25,37,40,50,69,90,796"
  },
  {
    "StopID": 1701,
    "Zone": 101,
    "Name": "Ukrajinská",
    "Latitude": 49.170594,
    "Longitude": 16.584956,
    "IsPublic": true,
    "LineList": "69"
  },
  {
    "StopID": 1703,
    "Zone": 101,
    "Name": "Ústřední hřbitov",
    "Latitude": 49.171553,
    "Longitude": 16.597658,
    "IsPublic": true,
    "LineList": "2,5,40,51,104,105,108,501,502,504"
  },
  {
    "StopID": 1706,
    "Zone": 101,
    "Name": "Ústř. hřbitov\u00A0-\u00A0smyčka",
    "Latitude": 49.164732,
    "Longitude": 16.598275,
    "IsPublic": true,
    "LineList": "2,5"
  },
  {
    "StopID": 1707,
    "Zone": 101,
    "Name": "Útěchov",
    "Latitude": 49.288628,
    "Longitude": 16.630576,
    "IsPublic": true,
    "LineList": "57,93"
  },
  {
    "StopID": 1711,
    "Zone": 101,
    "Name": "Útěchovská",
    "Latitude": 49.247237,
    "Longitude": 16.616106,
    "IsPublic": true,
    "LineList": "43,93"
  },
  {
    "StopID": 1712,
    "Zone": 100,
    "Name": "Úvoz",
    "Latitude": 49.198679,
    "Longitude": 16.593730,
    "IsPublic": true,
    "LineList": "4,25,26,38,39,89,95"
  },
  {
    "StopID": 1713,
    "Zone": 100,
    "Name": "Uzavřená",
    "Latitude": 49.196770,
    "Longitude": 16.633390,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1714,
    "Zone": 101,
    "Name": "Uzbecká",
    "Latitude": 49.172258,
    "Longitude": 16.583346,
    "IsPublic": true,
    "LineList": "69,91"
  },
  {
    "StopID": 1716,
    "Zone": 100,
    "Name": "Úzká",
    "Latitude": 49.189460,
    "Longitude": 16.613739,
    "IsPublic": true,
    "LineList": "12,40,48,49,76,77,94,95,502,503,701,702"
  },
  {
    "StopID": 1717,
    "Zone": 101,
    "Name": "V aleji",
    "Latitude": 49.147844,
    "Longitude": 16.648605,
    "IsPublic": true,
    "LineList": "48,64,85,95"
  },
  {
    "StopID": 1718,
    "Zone": 101,
    "Name": "V rejích",
    "Latitude": 49.139252,
    "Longitude": 16.654914,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1719,
    "Zone": 101,
    "Name": "V Újezdech",
    "Latitude": 49.241921,
    "Longitude": 16.573179,
    "IsPublic": true,
    "LineList": "65"
  },
  {
    "StopID": 1721,
    "Zone": 100,
    "Name": "Václavská",
    "Latitude": 49.188698,
    "Longitude": 16.597048,
    "IsPublic": true,
    "LineList": "1,2,4,9,12,91,98"
  },
  {
    "StopID": 1722,
    "Zone": 101,
    "Name": "Valašská",
    "Latitude": 49.166732,
    "Longitude": 16.562860,
    "IsPublic": true,
    "LineList": "51"
  },
  {
    "StopID": 1723,
    "Zone": 100,
    "Name": "Vaňkovo náměstí",
    "Latitude": 49.195119,
    "Longitude": 16.585619,
    "IsPublic": true,
    "LineList": "35,38,39,68,95"
  },
  {
    "StopID": 1726,
    "Zone": 101,
    "Name": "Velatická",
    "Latitude": 49.204397,
    "Longitude": 16.707685,
    "IsPublic": true,
    "LineList": "55,98,151"
  },
  {
    "StopID": 1727,
    "Zone": 101,
    "Name": "Velká Klajdovka",
    "Latitude": 49.217042,
    "Longitude": 16.681069,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 1728,
    "Zone": 100,
    "Name": "Velodrom",
    "Latitude": 49.184651,
    "Longitude": 16.579918,
    "IsPublic": true,
    "LineList": "44,84,98"
  },
  {
    "StopID": 1731,
    "Zone": 100,
    "Name": "Venhudova",
    "Latitude": 49.212318,
    "Longitude": 16.625038,
    "IsPublic": true,
    "LineList": "5,92"
  },
  {
    "StopID": 1732,
    "Zone": 101,
    "Name": "Veslařská",
    "Latitude": 49.202758,
    "Longitude": 16.565000,
    "IsPublic": true,
    "LineList": "25,26,35,37,38,39,44,84,98"
  },
  {
    "StopID": 1733,
    "Zone": 101,
    "Name": "Vědeckotechnický park",
    "Latitude": 49.232600,
    "Longitude": 16.574806,
    "IsPublic": true,
    "LineList": "72,99"
  },
  {
    "StopID": 1734,
    "Zone": 0,
    "Name": "Veverská Bítýška, přístaviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1737,
    "Zone": 101,
    "Name": "Vinohradská",
    "Latitude": 49.172746,
    "Longitude": 16.645529,
    "IsPublic": true,
    "LineList": "47,49"
  },
  {
    "StopID": 1738,
    "Zone": 101,
    "Name": "Vítězná",
    "Latitude": 49.147113,
    "Longitude": 16.672104,
    "IsPublic": true,
    "LineList": "48,89"
  },
  {
    "StopID": 1739,
    "Zone": 101,
    "Name": "Vlastimila Pecha",
    "Latitude": 49.179565,
    "Longitude": 16.662574,
    "IsPublic": true,
    "LineList": "77,790,795"
  },
  {
    "StopID": 1741,
    "Zone": 101,
    "Name": "Vlárská",
    "Latitude": 49.180836,
    "Longitude": 16.673012,
    "IsPublic": true,
    "LineList": "31,75,89"
  },
  {
    "StopID": 1742,
    "Zone": 101,
    "Name": "Vlčkova",
    "Latitude": 49.141064,
    "Longitude": 16.701285,
    "IsPublic": true,
    "LineList": "48,89"
  },
  {
    "StopID": 1743,
    "Zone": 101,
    "Name": "Vlčnovská",
    "Latitude": 49.211080,
    "Longitude": 16.659982,
    "IsPublic": true,
    "LineList": "27,57,99"
  },
  {
    "StopID": 1746,
    "Zone": 100,
    "Name": "Vlhká",
    "Latitude": 49.191849,
    "Longitude": 16.619066,
    "IsPublic": true,
    "LineList": "8,9,10,31,33,47,67,89,96,98"
  },
  {
    "StopID": 1747,
    "Zone": 101,
    "Name": "Vlkova",
    "Latitude": 49.202670,
    "Longitude": 16.667936,
    "IsPublic": true,
    "LineList": "55,98"
  },
  {
    "StopID": 1748,
    "Zone": 101,
    "Name": "Vltavská",
    "Latitude": 49.172571,
    "Longitude": 16.564402,
    "IsPublic": true,
    "LineList": "69,91,403,404"
  },
  {
    "StopID": 1751,
    "Zone": 100,
    "Name": "Vojtova",
    "Latitude": 49.182787,
    "Longitude": 16.600514,
    "IsPublic": true,
    "LineList": "7,8,90"
  },
  {
    "StopID": 1752,
    "Zone": 101,
    "Name": "Vondrákova",
    "Latitude": 49.221374,
    "Longitude": 16.528614,
    "IsPublic": true,
    "LineList": "30,50,51,52,92"
  },
  {
    "StopID": 1753,
    "Zone": 101,
    "Name": "Voříškova",
    "Latitude": 49.196478,
    "Longitude": 16.535088,
    "IsPublic": true,
    "LineList": "37,97"
  },
  {
    "StopID": 1756,
    "Zone": 101,
    "Name": "Vozovna Medlánky",
    "Latitude": 49.235516,
    "Longitude": 16.585908,
    "IsPublic": true,
    "LineList": "1,2,3,4,6,7,8,9,10,41,65,71,90"
  },
  {
    "StopID": 1757,
    "Zone": 101,
    "Name": "Vozovna Slatina",
    "Latitude": 49.183009,
    "Longitude": 16.672599,
    "IsPublic": true,
    "LineList": "31,33,75,96"
  },
  {
    "StopID": 1758,
    "Zone": 101,
    "Name": "Vrázova",
    "Latitude": 49.216972,
    "Longitude": 16.568484,
    "IsPublic": true,
    "LineList": "30,32,36,89,93"
  },
  {
    "StopID": 1761,
    "Zone": 100,
    "Name": "Vsetínská",
    "Latitude": 49.179478,
    "Longitude": 16.597782,
    "IsPublic": true,
    "LineList": "7,8"
  },
  {
    "StopID": 1762,
    "Zone": 100,
    "Name": "Všetičkova",
    "Latitude": 49.198698,
    "Longitude": 16.589046,
    "IsPublic": true,
    "LineList": "4,89"
  },
  {
    "StopID": 1763,
    "Zone": 101,
    "Name": "Vyhlídalova",
    "Latitude": 49.165260,
    "Longitude": 16.576930,
    "IsPublic": true,
    "LineList": "50,96"
  },
  {
    "StopID": 1766,
    "Zone": 101,
    "Name": "Vychodilova",
    "Latitude": 49.220318,
    "Longitude": 16.571604,
    "IsPublic": true,
    "LineList": "34"
  },
  {
    "StopID": 1767,
    "Zone": 101,
    "Name": "Výletní",
    "Latitude": 49.191648,
    "Longitude": 16.539190,
    "IsPublic": true,
    "LineList": "52,90"
  },
  {
    "StopID": 1768,
    "Zone": 100,
    "Name": "Výstaviště - hlavní vstup",
    "Latitude": 49.189498,
    "Longitude": 16.585793,
    "IsPublic": true,
    "LineList": "1,2,3,4,5,6,7,9,10,12,25,26,35,37,38,39,52,97"
  },
  {
    "StopID": 1769,
    "Zone": 100,
    "Name": "Výstaviště - vstup G2",
    "Latitude": 49.190382,
    "Longitude": 16.580067,
    "IsPublic": true,
    "LineList": "1,2,3,4,5,6,7,9,10,12,97"
  },
  {
    "StopID": 1771,
    "Zone": 101,
    "Name": "Wollmanova",
    "Latitude": 49.222192,
    "Longitude": 16.522638,
    "IsPublic": true,
    "LineList": "50,51,52"
  },
  {
    "StopID": 1772,
    "Zone": 101,
    "Name": "Za křížem",
    "Latitude": 49.159435,
    "Longitude": 16.670794,
    "IsPublic": true,
    "LineList": "73,78,89"
  },
  {
    "StopID": 1773,
    "Zone": 100,
    "Name": "Vojenská nemocnice",
    "Latitude": 49.202275,
    "Longitude": 16.629688,
    "IsPublic": true,
    "LineList": "2,3,97,99"
  },
  {
    "StopID": 1774,
    "Zone": 101,
    "Name": "Za hřbitovem",
    "Latitude": 49.164318,
    "Longitude": 16.591448,
    "IsPublic": true,
    "LineList": "50,96"
  },
  {
    "StopID": 1776,
    "Zone": 100,
    "Name": "Zahradníkova",
    "Latitude": 49.207958,
    "Longitude": 16.599068,
    "IsPublic": true,
    "LineList": "32"
  },
  {
    "StopID": 1777,
    "Zone": 101,
    "Name": "Záhřebská",
    "Latitude": 49.219819,
    "Longitude": 16.579715,
    "IsPublic": true,
    "LineList": "30,32,44,67,72,84,93"
  },
  {
    "StopID": 1778,
    "Zone": 101,
    "Name": "Záhumenice",
    "Latitude": 49.164024,
    "Longitude": 16.618158,
    "IsPublic": true,
    "LineList": "49,94"
  },
  {
    "StopID": 1779,
    "Zone": 101,
    "Name": "Západní brána",
    "Latitude": 49.173300,
    "Longitude": 16.567031,
    "IsPublic": true,
    "LineList": "8"
  },
  {
    "StopID": 1780,
    "Zone": 101,
    "Name": "Zaoralova",
    "Latitude": 49.200302,
    "Longitude": 16.679144,
    "IsPublic": true,
    "LineList": "58,97"
  },
  {
    "StopID": 1781,
    "Zone": 101,
    "Name": "Zámecká",
    "Latitude": 49.132647,
    "Longitude": 16.642677,
    "IsPublic": true,
    "LineList": "78"
  },
  {
    "StopID": 1782,
    "Zone": 100,
    "Name": "Zdráhalova",
    "Latitude": 49.209520,
    "Longitude": 16.623795,
    "IsPublic": true,
    "LineList": "5,92"
  },
  {
    "StopID": 1784,
    "Zone": 100,
    "Name": "Zelný trh",
    "Latitude": 49.193027,
    "Longitude": 16.609925,
    "IsPublic": true,
    "LineList": "4,8,9"
  },
  {
    "StopID": 1786,
    "Zone": 100,
    "Name": "Zemědělská",
    "Latitude": 49.210441,
    "Longitude": 16.618555,
    "IsPublic": true,
    "LineList": "7,9,46,93"
  },
  {
    "StopID": 1787,
    "Zone": 101,
    "Name": "Zetor\u00A0-\u00A0silnice",
    "Latitude": 49.200770,
    "Longitude": 16.670376,
    "IsPublic": true,
    "LineList": "58,97"
  },
  {
    "StopID": 1788,
    "Zone": 101,
    "Name": "Zetor - smyčka",
    "Latitude": 49.199463,
    "Longitude": 16.670240,
    "IsPublic": true,
    "LineList": "58,702"
  },
  {
    "StopID": 1791,
    "Zone": 100,
    "Name": "Zimní I",
    "Latitude": 49.213186,
    "Longitude": 16.658794,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1792,
    "Zone": 100,
    "Name": "Zimní II",
    "Latitude": 49.213409,
    "Longitude": 16.655937,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1793,
    "Zone": 100,
    "Name": "Zimní stadion",
    "Latitude": 49.209300,
    "Longitude": 16.609648,
    "IsPublic": true,
    "LineList": "25,26,67"
  },
  {
    "StopID": 1794,
    "Zone": 101,
    "Name": "ZKL",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 1796,
    "Zone": 101,
    "Name": "Bystrc, ZOO",
    "Latitude": 49.227773,
    "Longitude": 16.531579,
    "IsPublic": true,
    "LineList": "3,10,30,50,51,52,54,88,98,302,303"
  },
  {
    "StopID": 1798,
    "Zone": 100,
    "Name": "Zvonařka",
    "Latitude": 49.187292,
    "Longitude": 16.619436,
    "IsPublic": true,
    "LineList": "94,602,701,702"
  },
  {
    "StopID": 1800,
    "Zone": 101,
    "Name": "Žebětín, hřbitov",
    "Latitude": 49.204634,
    "Longitude": 16.487304,
    "IsPublic": true,
    "LineList": "51,52,98"
  },
  {
    "StopID": 1802,
    "Zone": 101,
    "Name": "Žebětínský rybník",
    "Latitude": 49.215320,
    "Longitude": 16.493586,
    "IsPublic": true,
    "LineList": "51,52,98"
  },
  {
    "StopID": 1803,
    "Zone": 101,
    "Name": "Žebětín, škola",
    "Latitude": 49.207416,
    "Longitude": 16.492246,
    "IsPublic": true,
    "LineList": "52"
  },
  {
    "StopID": 1806,
    "Zone": 101,
    "Name": "Žebětínská",
    "Latitude": 49.195204,
    "Longitude": 16.536300,
    "IsPublic": true,
    "LineList": "52,90"
  },
  {
    "StopID": 1807,
    "Zone": 100,
    "Name": "Železniční",
    "Latitude": 49.183031,
    "Longitude": 16.619474,
    "IsPublic": true,
    "LineList": "12,40,48,74,95"
  },
  {
    "StopID": 1808,
    "Zone": 100,
    "Name": "Železniční stavitelství",
    "Latitude": 49.216966,
    "Longitude": 16.654196,
    "IsPublic": true,
    "LineList": "64"
  },
  {
    "StopID": 1809,
    "Zone": 100,
    "Name": "Židenice, nádraží",
    "Latitude": 49.203484,
    "Longitude": 16.636338,
    "IsPublic": true,
    "LineList": "55,58,78,120,125,130,136,144,146,201,795"
  },
  {
    "StopID": 1810,
    "Zone": 100,
    "Name": "Židovský hřbitov",
    "Latitude": 49.191436,
    "Longitude": 16.641394,
    "IsPublic": true,
    "LineList": "8,10"
  },
  {
    "StopID": 1811,
    "Zone": 100,
    "Name": "Židenice, kasárna",
    "Latitude": 49.208502,
    "Longitude": 16.642330,
    "IsPublic": true,
    "LineList": "44,57,75,84"
  },
  {
    "StopID": 1812,
    "Zone": 101,
    "Name": "Žilkova",
    "Latitude": 49.252610,
    "Longitude": 16.575758,
    "IsPublic": true,
    "LineList": "41,71,91"
  },
  {
    "StopID": 1813,
    "Zone": 101,
    "Name": "Žitná",
    "Latitude": 49.240088,
    "Longitude": 16.588411,
    "IsPublic": true,
    "LineList": "42,70"
  },
  {
    "StopID": 1814,
    "Zone": 100,
    "Name": "Životského",
    "Latitude": 49.190600,
    "Longitude": 16.634283,
    "IsPublic": true,
    "LineList": "8,9,10,31,33,64,84,89,96,98"
  },
  {
    "StopID": 1816,
    "Zone": 100,
    "Name": "Žlutý kopec",
    "Latitude": 49.195259,
    "Longitude": 16.587780,
    "IsPublic": true,
    "LineList": "35,38,39,95"
  },
  {
    "StopID": 2101,
    "Zone": 215,
    "Name": "Babice nad Svitavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2113,
    "Zone": 215,
    "Name": "Bílovice n.S., UP závody",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2115,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, u kapličky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2118,
    "Zone": 215,
    "Name": "Kanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2120,
    "Zone": 215,
    "Name": "Kanice, koupaliště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2122,
    "Zone": 215,
    "Name": "Řícmanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2123,
    "Zone": 215,
    "Name": "Řícmanice, u lomu",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2124,
    "Zone": 215,
    "Name": "Řícmanice, u skály",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2125,
    "Zone": 215,
    "Name": "Řícmanice, Na Štukách",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2151,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, Na Nivách",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2152,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, křižovatka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2153,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, Polanka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2154,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, hřbitov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2155,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, Nad Tratí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2156,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, Soběšická",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2157,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, Vodárenská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2158,
    "Zone": 215,
    "Name": "Bílovice n.S., železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2159,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, Vojanka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2160,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, náměstí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2230,
    "Zone": 225,
    "Name": "Adamov, žel. st.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2231,
    "Zone": 225,
    "Name": "Adamov, železniční zastávka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2233,
    "Zone": 225,
    "Name": "Adamov, Adamov III",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 2236,
    "Zone": 225,
    "Name": "Adamov, obchodní dům",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3101,
    "Zone": 310,
    "Name": "Česká, Hlavní",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3103,
    "Zone": 310,
    "Name": "Česká, křižovatka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3105,
    "Zone": 310,
    "Name": "Česká, Nádavky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3107,
    "Zone": 310,
    "Name": "Česká, UP závody",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3109,
    "Zone": 310,
    "Name": "Česká, železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3114,
    "Zone": 310,
    "Name": "Jinačovice, Chaloupky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3115,
    "Zone": 310,
    "Name": "Jinačovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3117,
    "Zone": 310,
    "Name": "Jinačovice, golfové hřiště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3121,
    "Zone": 310,
    "Name": "Kuřim, Díly pod Sv. Jánem",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3122,
    "Zone": 310,
    "Name": "Podlesí, Pramen",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3123,
    "Zone": 310,
    "Name": "Kuřim, kulturní dům",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3125,
    "Zone": 310,
    "Name": "Kuřim, Popkova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3126,
    "Zone": 310,
    "Name": "Kuřim, Podlesí, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3127,
    "Zone": 310,
    "Name": "Kuřim, TOS",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3128,
    "Zone": 310,
    "Name": "Kuřim, poliklinika",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3129,
    "Zone": 310,
    "Name": "Kuřim, TE",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3131,
    "Zone": 310,
    "Name": "Kuřim, Prefa rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3133,
    "Zone": 310,
    "Name": "Kuřim, sokolovna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3138,
    "Zone": 310,
    "Name": "Rozdrojovice, Na dědině",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3139,
    "Zone": 310,
    "Name": "Rozdrojovice, Obecnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3140,
    "Zone": 310,
    "Name": "Rozdrojovice, rekreační středisko",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3141,
    "Zone": 310,
    "Name": "Rozdrojovice, rozcestí přehrada",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3143,
    "Zone": 310,
    "Name": "Kuřim, železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3146,
    "Zone": 310,
    "Name": "Rozdrojovice, Na Březině",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3151,
    "Zone": 310,
    "Name": "Lelekovice, náves",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3153,
    "Zone": 310,
    "Name": "Lelekovice, škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3155,
    "Zone": 310,
    "Name": "Lelekovice, u Hrazdírů",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3157,
    "Zone": 310,
    "Name": "Lelekovice, u kříže",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3161,
    "Zone": 310,
    "Name": "Moravské Knínice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3163,
    "Zone": 310,
    "Name": "Moravské Knínice, Podhájí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3181,
    "Zone": 310,
    "Name": "Vranov, hřbitov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3183,
    "Zone": 310,
    "Name": "Vranov, křižovatka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3185,
    "Zone": 310,
    "Name": "Vranov, myslivna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3187,
    "Zone": 310,
    "Name": "Vranov, smyčka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3191,
    "Zone": 310,
    "Name": "Brno, Hrad Veveří",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3192,
    "Zone": 310,
    "Name": "Brno, Jelenice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3193,
    "Zone": 310,
    "Name": "Brno, Kozí horka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3194,
    "Zone": 310,
    "Name": "Brno, Lávka Pod Hradem",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3195,
    "Zone": 310,
    "Name": "Brno, Obora",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3196,
    "Zone": 310,
    "Name": "Brno, Obora, smyčka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3197,
    "Zone": 310,
    "Name": "Brno, Rokle",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3202,
    "Zone": 320,
    "Name": "Čebín, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3204,
    "Zone": 320,
    "Name": "Čebín, sídliště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3214,
    "Zone": 325,
    "Name": "Brno, Nové Dvory",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3215,
    "Zone": 325,
    "Name": "Brno, U Matky Boží",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3227,
    "Zone": 325,
    "Name": "Veverská Bítýška, Vápenice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3251,
    "Zone": 325,
    "Name": "Hvozdec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3261,
    "Zone": 325,
    "Name": "Veverská Bítýška, hájovna Na Hlince",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3263,
    "Zone": 325,
    "Name": "Veverská Bítýška, Mečkov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3265,
    "Zone": 325,
    "Name": "Veverská Bítýška, náměstí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3269,
    "Zone": 325,
    "Name": "Veverská Bítýška, sídliště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3306,
    "Zone": 330,
    "Name": "Hradčany, železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3307,
    "Zone": 330,
    "Name": "Hradčany",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3310,
    "Zone": 330,
    "Name": "Předklášteří, obecní úřad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3311,
    "Zone": 330,
    "Name": "Předklášteří, papírna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3312,
    "Zone": 330,
    "Name": "Předklášteří, Zetor šroubárna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3319,
    "Zone": 330,
    "Name": "Štěpánovice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3320,
    "Zone": 330,
    "Name": "Tišnov, čerpací stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3401,
    "Zone": 340,
    "Name": "Borač",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3402,
    "Zone": 340,
    "Name": "Borač, Vrby",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3437,
    "Zone": 340,
    "Name": "Štěpánovice, h.k.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3438,
    "Zone": 340,
    "Name": "Štěpánovice, obecní úřad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3504,
    "Zone": 350,
    "Name": "Doubravník, náměstí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3523,
    "Zone": 350,
    "Name": "Nedvědice, škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3524,
    "Zone": 350,
    "Name": "Nedvědice, u zdrav.stř.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3525,
    "Zone": 350,
    "Name": "Nedvědice, rozcestí Sejřek",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3531,
    "Zone": 350,
    "Name": "Černvír",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3533,
    "Zone": 350,
    "Name": "Nedvědice, Pernštejn, u mostku",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3534,
    "Zone": 350,
    "Name": "Doubravník, Štěpnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3535,
    "Zone": 350,
    "Name": "Nedvědice, Pernštejn, hrad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3536,
    "Zone": 0,
    "Name": "Nedvědice, rozcestí Skorotice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3626,
    "Zone": 360,
    "Name": "Býšovec, Smrček",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3627,
    "Zone": 360,
    "Name": "Býšovec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3628,
    "Zone": 360,
    "Name": "Věchnov, rozcestí lom",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3629,
    "Zone": 360,
    "Name": "Věchnov, u rybníka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3630,
    "Zone": 370,
    "Name": "Bystřice nad Pern., rozcestí Věchnov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3631,
    "Zone": 0,
    "Name": "Ujčov, Bořinov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3632,
    "Zone": 0,
    "Name": "Ujčov, Kasany",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3633,
    "Zone": 0,
    "Name": "Ujčov, u hřiště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3634,
    "Zone": 0,
    "Name": "Ujčov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3635,
    "Zone": 0,
    "Name": "Štěpánov nad Svratkou, závod",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3636,
    "Zone": 0,
    "Name": "Štěpánov nad Svratkou, rozc. závod",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3637,
    "Zone": 0,
    "Name": "Štěpánov nad Svratkou, náměstí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3716,
    "Zone": 370,
    "Name": "Bystřice n/P., gymnázium",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3721,
    "Zone": 370,
    "Name": "Bystřice n/P., Masarykovo náměstí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3724,
    "Zone": 370,
    "Name": "Bystřice n/P., sídliště I",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3725,
    "Zone": 370,
    "Name": "Bystřice n/P., sídliště II",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3726,
    "Zone": 370,
    "Name": "Bystřice n/P., u mostu",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3731,
    "Zone": 370,
    "Name": "Bystřice n/P., Domanín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3732,
    "Zone": 370,
    "Name": "Bystřice n/P., Domanín, Jednota",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3733,
    "Zone": 370,
    "Name": "Bystřice n/P., Domanín, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3734,
    "Zone": 370,
    "Name": "Bystřice n/P., Domanín, U Šejnohů",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3740,
    "Zone": 370,
    "Name": "Bystřice nad Pern., Novoměstská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3742,
    "Zone": 370,
    "Name": "Bystřice n/P., a. n.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3743,
    "Zone": 0,
    "Name": "Bystřice nad Pern., Kozlov, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3744,
    "Zone": 0,
    "Name": "Bystřice nad Pern., Lesoňovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3746,
    "Zone": 0,
    "Name": "Bystřice nad Pern., rozcestí Janovičky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3802,
    "Zone": 0,
    "Name": "Bohuňov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3803,
    "Zone": 0,
    "Name": "Lísek",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 3804,
    "Zone": 0,
    "Name": "Lísek, Skalský Dvůr",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4101,
    "Zone": 410,
    "Name": "Ostopovice, Branky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4102,
    "Zone": 410,
    "Name": "Ostopovice, Lipová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4103,
    "Zone": 410,
    "Name": "Ostopovice, náměstí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4104,
    "Zone": 410,
    "Name": "Ostopovice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4105,
    "Zone": 410,
    "Name": "Ostopovice, smyčka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4106,
    "Zone": 410,
    "Name": "Troubsko, kaplička",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4107,
    "Zone": 410,
    "Name": "Troubsko, Kovopodnik",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4109,
    "Zone": 410,
    "Name": "Troubsko, obecní úřad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4110,
    "Zone": 410,
    "Name": "Troubsko, U dráhy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4112,
    "Zone": 410,
    "Name": "Omice, Kývalka, spojovací",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4117,
    "Zone": 410,
    "Name": "Popůvky, Náves",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4119,
    "Zone": 410,
    "Name": "Střelice, dolní železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4123,
    "Zone": 410,
    "Name": "Ostrovačice, Start",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4126,
    "Zone": 410,
    "Name": "Troubsko, Nová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4133,
    "Zone": 410,
    "Name": "Popůvky, Vintrovna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 4160,
    "Zone": 410,
    "Name": "Troubsko, Veselka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5113,
    "Zone": 510,
    "Name": "Moravany, Bohunická cesta",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5114,
    "Zone": 510,
    "Name": "Moravany, Hlavní",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5115,
    "Zone": 510,
    "Name": "Moravany, Nebovidská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5122,
    "Zone": 510,
    "Name": "Modřice, Brněnská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5123,
    "Zone": 510,
    "Name": "Modřice, čistička",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5124,
    "Zone": 510,
    "Name": "Modřice, Drůbežářské závody",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5126,
    "Zone": 510,
    "Name": "Modřice, Husova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5127,
    "Zone": 510,
    "Name": "Modřice, Masarykova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5128,
    "Zone": 510,
    "Name": "Měnín, u mlýna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5129,
    "Zone": 510,
    "Name": "Modřice, náměstí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5130,
    "Zone": 510,
    "Name": "Modřice, Olympia",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5132,
    "Zone": 510,
    "Name": "Modřice, Olympia jih",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5133,
    "Zone": 510,
    "Name": "Otmarov, chaloupka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5134,
    "Zone": 510,
    "Name": "Modřice, smyčka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5137,
    "Zone": 510,
    "Name": "Modřice, Tyršova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5139,
    "Zone": 510,
    "Name": "Modřice, Za mlýnem",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5140,
    "Zone": 510,
    "Name": "Modřice, železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5141,
    "Zone": 510,
    "Name": "Modřice, Žižkova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5144,
    "Zone": 510,
    "Name": "Rajhradice, váha",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5145,
    "Zone": 510,
    "Name": "Rebešovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5146,
    "Zone": 510,
    "Name": "Rebešovice, Horky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5154,
    "Zone": 510,
    "Name": "Měnín, ZD",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5165,
    "Zone": 510,
    "Name": "Měnín, obchodní středisko",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5167,
    "Zone": 610,
    "Name": "Měnín, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5175,
    "Zone": 510,
    "Name": "Otmarov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5176,
    "Zone": 510,
    "Name": "Rajhradice, obalovna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5177,
    "Zone": 510,
    "Name": "Modřice, Uhelné sklady",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5185,
    "Zone": 510,
    "Name": "Modřice, Decathlon",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 5186,
    "Zone": 510,
    "Name": "Modřice, XXXLutz",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6101,
    "Zone": 610,
    "Name": "Blažovice, hostinec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6102,
    "Zone": 610,
    "Name": "Blažovice, pod kostelem",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6103,
    "Zone": 610,
    "Name": "Hostěrádky-Rešov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6111,
    "Zone": 610,
    "Name": "Kobylnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6112,
    "Zone": 610,
    "Name": "Kobylnice, Na Rybníku",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6115,
    "Zone": 610,
    "Name": "Kobylnice, obecní úřad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6116,
    "Zone": 610,
    "Name": "Podolí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6118,
    "Zone": 610,
    "Name": "Podolí, Líšeňská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6129,
    "Zone": 610,
    "Name": "Šlapanice, Bedřichovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6130,
    "Zone": 610,
    "Name": "Šlapanice, Bedřichovice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6132,
    "Zone": 610,
    "Name": "Šlapanice, Hraničky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6134,
    "Zone": 610,
    "Name": "Šlapanice, Evropská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6138,
    "Zone": 610,
    "Name": "Telnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6139,
    "Zone": 610,
    "Name": "Prace, náves",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6141,
    "Zone": 610,
    "Name": "Prace, škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6143,
    "Zone": 610,
    "Name": "Prace, točna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6145,
    "Zone": 610,
    "Name": "Sokolnice, obecní úřad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6147,
    "Zone": 610,
    "Name": "Sokolnice, rozvodna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6149,
    "Zone": 610,
    "Name": "Sokolnice, železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6150,
    "Zone": 610,
    "Name": "Žatčany, náves",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6152,
    "Zone": 610,
    "Name": "Žatčany, u mlýna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6155,
    "Zone": 610,
    "Name": "Šlapanice, Čechova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6156,
    "Zone": 610,
    "Name": "Újezd u Brna, městský úřad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6157,
    "Zone": 610,
    "Name": "Újezd u Brna, Revoluční",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6159,
    "Zone": 610,
    "Name": "Šlapanice, Kalvodova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6163,
    "Zone": 610,
    "Name": "Šlapanice, Riegrova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6165,
    "Zone": 610,
    "Name": "Šlapanice, sídliště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6173,
    "Zone": 610,
    "Name": "Sokolnice, Brněnská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6212,
    "Zone": 620,
    "Name": "Křenovice, hor.ž.s.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 6225,
    "Zone": 620,
    "Name": "Zbýšov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 7001,
    "Zone": 100,
    "Name": "IŠZP Hroznová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 7016,
    "Zone": 101,
    "Name": "ZŠ Herčíkova",
    "Latitude": 49.230531,
    "Longitude": 16.584437,
    "IsPublic": true,
    "LineList": "65,70"
  },
  {
    "StopID": 7021,
    "Zone": 100,
    "Name": "ZŠ Jana Babáka",
    "Latitude": 49.213800,
    "Longitude": 16.590632,
    "IsPublic": true,
    "LineList": "88"
  },
  {
    "StopID": 7031,
    "Zone": 101,
    "Name": "ZŠ Laštůvkova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 7050,
    "Zone": 101,
    "Name": "ZŠ Vedlejší",
    "Latitude": 49.170719,
    "Longitude": 16.569134,
    "IsPublic": true,
    "LineList": "50,69,403,404"
  },
  {
    "StopID": 7502,
    "Zone": 101,
    "Name": "CTPark Brno South",
    "Latitude": 49.160548,
    "Longitude": 16.700716,
    "IsPublic": true,
    "LineList": "76"
  },
  {
    "StopID": 7503,
    "Zone": 101,
    "Name": "Electroworld",
    "Latitude": 49.154535,
    "Longitude": 16.629288,
    "IsPublic": true,
    "LineList": "67"
  },
  {
    "StopID": 7505,
    "Zone": 101,
    "Name": "Ikea",
    "Latitude": 49.156262,
    "Longitude": 16.627906,
    "IsPublic": true,
    "LineList": "67"
  },
  {
    "StopID": 7506,
    "Zone": 100,
    "Name": "Mosilana",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 7510,
    "Zone": 100,
    "Name": "Nová Zbrojovka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 7524,
    "Zone": 101,
    "Name": "Avion Shopping Park",
    "Latitude": 49.158270,
    "Longitude": 16.627949,
    "IsPublic": true,
    "LineList": "67"
  },
  {
    "StopID": 7530,
    "Zone": 100,
    "Name": "Dolní nádraží",
    "Latitude": 49.183234,
    "Longitude": 16.615723,
    "IsPublic": true,
    "LineList": "103,140,145"
  },
  {
    "StopID": 8101,
    "Zone": 100,
    "Name": "Hala Rosnička",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8102,
    "Zone": 100,
    "Name": "Hala VA",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8103,
    "Zone": 100,
    "Name": "Hala VFU",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8104,
    "Zone": 100,
    "Name": "Koleje Kounicova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8105,
    "Zone": 100,
    "Name": "Kraví hora",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8106,
    "Zone": 100,
    "Name": "Plavecký stadion",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8107,
    "Zone": 101,
    "Name": "Přehrada",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8108,
    "Zone": 100,
    "Name": "Sokol Kounicova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8109,
    "Zone": 101,
    "Name": "Squash Vodařská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8110,
    "Zone": 101,
    "Name": "Zamilovaný hájek",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8111,
    "Zone": 100,
    "Name": "Janouškova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8112,
    "Zone": 0,
    "Name": "Předklášteří",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8113,
    "Zone": 0,
    "Name": "Rajhrad (Památník písemnictví)",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8114,
    "Zone": 0,
    "Name": "Mohyla míru",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8115,
    "Zone": 101,
    "Name": "Parkoviště Černovická terasa I",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8116,
    "Zone": 101,
    "Name": "Parkoviště Černovická terasa II",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8117,
    "Zone": 101,
    "Name": "Parkoviště Černovická terasa III",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8118,
    "Zone": 0,
    "Name": "Předklášteří, papírna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8120,
    "Zone": 0,
    "Name": "Žebětín, Chrpová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8121,
    "Zone": 0,
    "Name": "Ostrovačice, camp",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8124,
    "Zone": 101,
    "Name": "Tribuny A-B-C",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8126,
    "Zone": 101,
    "Name": "Tribuna D",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8127,
    "Zone": 101,
    "Name": "Camp Žebětín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8128,
    "Zone": 101,
    "Name": "Parkoviště Žebětín I",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8129,
    "Zone": 101,
    "Name": "Parkoviště Žebětín II",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8130,
    "Zone": 0,
    "Name": "Ostrovačice, parkoviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8131,
    "Zone": 101,
    "Name": "Parkoviště - Težební",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8132,
    "Zone": 101,
    "Name": "Parkoviště - silnice I",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8133,
    "Zone": 101,
    "Name": "Parkoviště - silnice II",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8134,
    "Zone": 101,
    "Name": "Parkoviště - silnice III",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8135,
    "Zone": 101,
    "Name": "Parkoviště - Švedské valy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8136,
    "Zone": 101,
    "Name": "Parkoviště - Ericha Roučky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8140,
    "Zone": 0,
    "Name": "Mahenovo divadlo",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8141,
    "Zone": 0,
    "Name": "Zemanova kavárna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8142,
    "Zone": 0,
    "Name": "Vila Tugendhat",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8143,
    "Zone": 0,
    "Name": "Jaruškův dům",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8144,
    "Zone": 0,
    "Name": "Palác Tivoli",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8145,
    "Zone": 0,
    "Name": "Hvězdárna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8146,
    "Zone": 0,
    "Name": "Jurkovičova vila",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8147,
    "Zone": 0,
    "Name": "Brněnská přehrada",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8148,
    "Zone": 0,
    "Name": "Hrad Veveří",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8149,
    "Zone": 0,
    "Name": "Reissigova vila",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8150,
    "Zone": 0,
    "Name": "vila Baas",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8151,
    "Zone": 0,
    "Name": "vila rodiny Stiassni",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8152,
    "Zone": 0,
    "Name": "areál BVV",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8153,
    "Zone": 0,
    "Name": "brněnská Ringstrasse",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8154,
    "Zone": 0,
    "Name": "Hrad Špilberk",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8175,
    "Zone": 100,
    "Name": "Žlutý kopec (Mahenův památník)",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8176,
    "Zone": 100,
    "Name": "M. Pujmanové (Centrum moderní architekt)",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8177,
    "Zone": 100,
    "Name": "VIDA !",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8178,
    "Zone": 101,
    "Name": "Zetor Gallery",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8179,
    "Zone": 101,
    "Name": "Městský stadion Draci",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8180,
    "Zone": 100,
    "Name": "Žižkova (Gymázium Matyáše Lercha)",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8181,
    "Zone": 101,
    "Name": "Stadion Hroši",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8440,
    "Zone": 101,
    "Name": "Gar AD Slat",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8450,
    "Zone": 101,
    "Name": "Garáž Medlánky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8485,
    "Zone": 0,
    "Name": "stanoviště 11",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8486,
    "Zone": 0,
    "Name": "stanoviště 10",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8487,
    "Zone": 0,
    "Name": "stanoviště Hradecká",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8488,
    "Zone": 0,
    "Name": "stanoviště Česká",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8489,
    "Zone": 0,
    "Name": "stanoviště Rakovecká",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8490,
    "Zone": 0,
    "Name": "stanoviště Dolní nádraží",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8491,
    "Zone": 0,
    "Name": "stanoviště 1",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8492,
    "Zone": 0,
    "Name": "stanoviště 2",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8493,
    "Zone": 0,
    "Name": "stanoviště 3",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8494,
    "Zone": 0,
    "Name": "stanoviště 4",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8495,
    "Zone": 0,
    "Name": "stanoviště 5",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8496,
    "Zone": 0,
    "Name": "stanoviště 6",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8497,
    "Zone": 0,
    "Name": "stanoviště 7",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8498,
    "Zone": 0,
    "Name": "stanoviště 8",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8499,
    "Zone": 0,
    "Name": "stanoviště 9",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8500,
    "Zone": 100,
    "Name": "křiž. Vranovská x Cejl",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8501,
    "Zone": 100,
    "Name": "tunel Kohoutova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 8502,
    "Zone": 0,
    "Name": "ulice Hradecká",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9410,
    "Zone": 100,
    "Name": "Vozovna Pisárky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9421,
    "Zone": 100,
    "Name": "Vozovna Husovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9422,
    "Zone": 101,
    "Name": "Vozovna Slatina",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9423,
    "Zone": 101,
    "Name": "Vozovna Komín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9430,
    "Zone": 101,
    "Name": "Vozovna Medlánky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9438,
    "Zone": 101,
    "Name": "Vozovna Novolíšeňská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9439,
    "Zone": 101,
    "Name": "Vozovna Jírova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9440,
    "Zone": 101,
    "Name": "Garáž Slatina",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9450,
    "Zone": 101,
    "Name": "Garáž Medlánky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9459,
    "Zone": 0,
    "Name": "nocovna Borovinka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9460,
    "Zone": 0,
    "Name": "Molo Bystrc",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 9490,
    "Zone": 100,
    "Name": "ÚAN odstavení",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 10001,
    "Zone": 800,
    "Name": "Expres Znojmo",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 10002,
    "Zone": 100,
    "Name": "Expres Brno",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 10003,
    "Zone": 571,
    "Name": "Expres Mikulov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11001,
    "Zone": 100,
    "Name": "Brno-Černovice",
    "Latitude": 49.188984,
    "Longitude": 16.631233,
    "IsPublic": true,
    "LineList": "126,146"
  },
  {
    "StopID": 11002,
    "Zone": 101,
    "Name": "Brno-Horní Heršpice",
    "Latitude": 49.167404,
    "Longitude": 16.606860,
    "IsPublic": true,
    "LineList": "130,140,141"
  },
  {
    "StopID": 11004,
    "Zone": 100,
    "Name": "Brno-Maloměřice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11005,
    "Zone": 100,
    "Name": "Brno-dolní nádraží",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11006,
    "Zone": 101,
    "Name": "Brno-jih",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11007,
    "Zone": 101,
    "Name": "Brno přednádraží",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11008,
    "Zone": 100,
    "Name": "Brno Komárovská spojka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11009,
    "Zone": 101,
    "Name": "Brno-Starý Lískovec",
    "Latitude": 49.162216,
    "Longitude": 16.570659,
    "IsPublic": true,
    "LineList": "141"
  },
  {
    "StopID": 11801,
    "Zone": 101,
    "Name": "Brno, Osová u tramvaje",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11802,
    "Zone": 101,
    "Name": "Brno, Osová na mostě",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11901,
    "Zone": 999,
    "Name": "Garáž Tourbus",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11902,
    "Zone": 999,
    "Name": "Garáž FTL",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11903,
    "Zone": 999,
    "Name": "Garáž DOPAZ",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11904,
    "Zone": 999,
    "Name": "Crhov, odstavná",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11905,
    "Zone": 999,
    "Name": "Blučina, odstavná",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11906,
    "Zone": 999,
    "Name": "Provozovna Hustopeče BORS",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11907,
    "Zone": 101,
    "Name": "Brno,parkoviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11908,
    "Zone": 999,
    "Name": "Uhřice,stanoviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11909,
    "Zone": 999,
    "Name": "Provozovna Letovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11910,
    "Zone": 999,
    "Name": "BORS Garáž Hodonín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11911,
    "Zone": 999,
    "Name": "ČSAD Hodonín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11912,
    "Zone": 999,
    "Name": "Garáž Břeclav",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11913,
    "Zone": 999,
    "Name": "Velká Bíteš, nocovna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11914,
    "Zone": 999,
    "Name": "Garáž Boskovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11915,
    "Zone": 999,
    "Name": "ČSAD Kyjov Bus",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11916,
    "Zone": 999,
    "Name": "ŽS Real, a.s.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11917,
    "Zone": 999,
    "Name": "AD Podbořany",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11918,
    "Zone": 999,
    "Name": "ARRIVA MORAVA a.s.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11919,
    "Zone": 999,
    "Name": "Garáž Brno",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11920,
    "Zone": 999,
    "Name": "TRADO-ICOM-BKbus",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11921,
    "Zone": 999,
    "Name": "TRADO-BUS Třebíč",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11922,
    "Zone": 999,
    "Name": "Provozovna Hustopeče BORS",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11923,
    "Zone": 999,
    "Name": "NAD České dráhy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11924,
    "Zone": 999,
    "Name": "Autobusy Karlovy Vary",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11942,
    "Zone": 999,
    "Name": "ČSAD ÚO Boskovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11943,
    "Zone": 999,
    "Name": "ČSAD ÚO Slavkov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11944,
    "Zone": 999,
    "Name": "SDS Opava",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11958,
    "Zone": 999,
    "Name": "Garáž BORS Znojmo",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11959,
    "Zone": 999,
    "Name": "ZDS Znojmo",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11960,
    "Zone": 999,
    "Name": "BřDS Znojmo",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11961,
    "Zone": 999,
    "Name": "TREDOS Moravský Krumlov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11962,
    "Zone": 999,
    "Name": "Adosa Moravský Krumlov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11963,
    "Zone": 999,
    "Name": "BDS-BUS",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11964,
    "Zone": 999,
    "Name": "Garáž Pohořelice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11991,
    "Zone": 999,
    "Name": "stanoviště 1",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 11999,
    "Zone": 999,
    "Name": "Neznámý dopravce",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12002,
    "Zone": 245,
    "Name": "Spešov",
    "Latitude": 49.393878,
    "Longitude": 16.630693,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12003,
    "Zone": 245,
    "Name": "Spešov, horní část",
    "Latitude": 49.394060,
    "Longitude": 16.625940,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12004,
    "Zone": 226,
    "Name": "Lipůvka",
    "Latitude": 49.338776,
    "Longitude": 16.552699,
    "IsPublic": true,
    "LineList": "152,301,313,320"
  },
  {
    "StopID": 12005,
    "Zone": 226,
    "Name": "Lipůvka, ZŠ",
    "Latitude": 49.338142,
    "Longitude": 16.558029,
    "IsPublic": true,
    "LineList": "152,301,313"
  },
  {
    "StopID": 12006,
    "Zone": 226,
    "Name": "Svinošice",
    "Latitude": 49.333298,
    "Longitude": 16.574451,
    "IsPublic": true,
    "LineList": "152"
  },
  {
    "StopID": 12007,
    "Zone": 226,
    "Name": "Svinošice, náves",
    "Latitude": 49.333645,
    "Longitude": 16.575506,
    "IsPublic": true,
    "LineList": "152"
  },
  {
    "StopID": 12008,
    "Zone": 226,
    "Name": "Šebrov-Kateřina, Sv. Kateřina",
    "Latitude": 49.330247,
    "Longitude": 16.614367,
    "IsPublic": true,
    "LineList": "152"
  },
  {
    "StopID": 12009,
    "Zone": 226,
    "Name": "Šebrov-Kateřina, Šebrov",
    "Latitude": 49.328891,
    "Longitude": 16.598355,
    "IsPublic": true,
    "LineList": "152"
  },
  {
    "StopID": 12011,
    "Zone": 232,
    "Name": "Vavřinec, Nové Dvory",
    "Latitude": 49.381264,
    "Longitude": 16.712819,
    "IsPublic": true,
    "LineList": "233"
  },
  {
    "StopID": 12012,
    "Zone": 232,
    "Name": "Vavřinec, Suchdol",
    "Latitude": 49.391377,
    "Longitude": 16.717568,
    "IsPublic": true,
    "LineList": "233"
  },
  {
    "StopID": 12013,
    "Zone": 232,
    "Name": "Vavřinec, Veselice",
    "Latitude": 49.395137,
    "Longitude": 16.713123,
    "IsPublic": true,
    "LineList": "233"
  },
  {
    "StopID": 12014,
    "Zone": 236,
    "Name": "Milonice",
    "Latitude": 49.368080,
    "Longitude": 16.565709,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12016,
    "Zone": 236,
    "Name": "Závist",
    "Latitude": 49.374632,
    "Longitude": 16.572812,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12018,
    "Zone": 266,
    "Name": "Kunštát, Touboř, rozcestí",
    "Latitude": 49.497688,
    "Longitude": 16.489758,
    "IsPublic": true,
    "LineList": "276"
  },
  {
    "StopID": 12019,
    "Zone": 266,
    "Name": "Kunštát, Újezd",
    "Latitude": 49.506910,
    "Longitude": 16.539206,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12020,
    "Zone": 266,
    "Name": "Makov",
    "Latitude": 49.518297,
    "Longitude": 16.484328,
    "IsPublic": true,
    "LineList": "256,301"
  },
  {
    "StopID": 12021,
    "Zone": 266,
    "Name": "Makov, hájenka",
    "Latitude": 49.517438,
    "Longitude": 16.477055,
    "IsPublic": true,
    "LineList": "256,301"
  },
  {
    "StopID": 12022,
    "Zone": 266,
    "Name": "Nýrov",
    "Latitude": 49.527963,
    "Longitude": 16.536341,
    "IsPublic": true,
    "LineList": "276"
  },
  {
    "StopID": 12023,
    "Zone": 266,
    "Name": "Zbraslavec",
    "Latitude": 49.484485,
    "Longitude": 16.528109,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12024,
    "Zone": 266,
    "Name": "Zbraslavec, rozcestí k závodu",
    "Latitude": 49.489828,
    "Longitude": 16.523142,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12025,
    "Zone": 266,
    "Name": "Zbraslavec, závod Best",
    "Latitude": 49.490995,
    "Longitude": 16.519361,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12026,
    "Zone": 267,
    "Name": "Hodonín u Kunštátu",
    "Latitude": 49.501284,
    "Longitude": 16.409916,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12027,
    "Zone": 267,
    "Name": "Tasovice",
    "Latitude": 49.496425,
    "Longitude": 16.440405,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12028,
    "Zone": 267,
    "Name": "Tasovice, rozcestí",
    "Latitude": 49.511078,
    "Longitude": 16.435412,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12029,
    "Zone": 260,
    "Name": "Okrouhlá",
    "Latitude": 49.508335,
    "Longitude": 16.732441,
    "IsPublic": true,
    "LineList": "262"
  },
  {
    "StopID": 12030,
    "Zone": 260,
    "Name": "Okrouhlá, horní konec",
    "Latitude": 49.510832,
    "Longitude": 16.738122,
    "IsPublic": true,
    "LineList": "262"
  },
  {
    "StopID": 12031,
    "Zone": 236,
    "Name": "Újezd u Černé Hory, SPD",
    "Latitude": 49.378226,
    "Longitude": 16.556024,
    "IsPublic": true,
    "LineList": "313"
  },
  {
    "StopID": 12032,
    "Zone": 236,
    "Name": "Újezd u Černé Hory",
    "Latitude": 49.370400,
    "Longitude": 16.544608,
    "IsPublic": true,
    "LineList": "313"
  },
  {
    "StopID": 12033,
    "Zone": 265,
    "Name": "Boskovice, Šmelcovna",
    "Latitude": 49.488330,
    "Longitude": 16.691848,
    "IsPublic": true,
    "LineList": "262"
  },
  {
    "StopID": 12034,
    "Zone": 265,
    "Name": "Boskovice, Hrádkov",
    "Latitude": 49.489347,
    "Longitude": 16.702870,
    "IsPublic": true,
    "LineList": "262"
  },
  {
    "StopID": 12035,
    "Zone": 265,
    "Name": "Boskovice, Vratíkov",
    "Latitude": 49.496974,
    "Longitude": 16.710415,
    "IsPublic": true,
    "LineList": "262"
  },
  {
    "StopID": 12036,
    "Zone": 265,
    "Name": "Sebranice, Vaculka",
    "Latitude": 49.492859,
    "Longitude": 16.588124,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12037,
    "Zone": 265,
    "Name": "Sebranice, ALPS",
    "Latitude": 49.491011,
    "Longitude": 16.588750,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12038,
    "Zone": 266,
    "Name": "Zbraslavec, u kapličky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12039,
    "Zone": 226,
    "Name": "Lipůvka, u hřbitova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12040,
    "Zone": 235,
    "Name": "Blansko, Písečná, hotel Probe",
    "Latitude": 49.354507,
    "Longitude": 16.653087,
    "IsPublic": true,
    "LineList": "221"
  },
  {
    "StopID": 12041,
    "Zone": 235,
    "Name": "Blansko, Komenského",
    "Latitude": 49.359262,
    "Longitude": 16.637984,
    "IsPublic": true,
    "LineList": "224"
  },
  {
    "StopID": 12101,
    "Zone": 210,
    "Name": "Kanice, archiv",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12102,
    "Zone": 210,
    "Name": "Brno, Na Spáleništi",
    "Latitude": 49.243873,
    "Longitude": 16.713933,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12104,
    "Zone": 210,
    "Name": "Ochoz u Brna, kamenolom",
    "Latitude": 49.253999,
    "Longitude": 16.753389,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12105,
    "Zone": 210,
    "Name": "Ochoz u Brna, myslivna pod Hádkem",
    "Latitude": 49.251700,
    "Longitude": 16.764203,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12106,
    "Zone": 210,
    "Name": "Ochoz u Brna, Na pastýřkách",
    "Latitude": 49.251335,
    "Longitude": 16.733611,
    "IsPublic": true,
    "LineList": "201,210"
  },
  {
    "StopID": 12107,
    "Zone": 210,
    "Name": "Ochoz u Brna, příhon",
    "Latitude": 49.254627,
    "Longitude": 16.746378,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12108,
    "Zone": 210,
    "Name": "Ochoz u Brna, restaurace U Votrubů",
    "Latitude": 49.255852,
    "Longitude": 16.732638,
    "IsPublic": true,
    "LineList": "201,210"
  },
  {
    "StopID": 12109,
    "Zone": 210,
    "Name": "Ochoz u Brna, rozcestí Kanice",
    "Latitude": 49.262329,
    "Longitude": 16.729613,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12110,
    "Zone": 210,
    "Name": "Ochoz u Brna, Říčky, rozc.",
    "Latitude": 49.245586,
    "Longitude": 16.724876,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12111,
    "Zone": 210,
    "Name": "Ochoz u Brna, ObÚ",
    "Latitude": 49.254296,
    "Longitude": 16.736846,
    "IsPublic": true,
    "LineList": "201,210"
  },
  {
    "StopID": 12113,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, UP závody",
    "Latitude": 49.250448,
    "Longitude": 16.677380,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12115,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, u kapličky",
    "Latitude": 49.248420,
    "Longitude": 16.674345,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12118,
    "Zone": 215,
    "Name": "Kanice",
    "Latitude": 49.264053,
    "Longitude": 16.713886,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12120,
    "Zone": 215,
    "Name": "Kanice, koupaliště",
    "Latitude": 49.260693,
    "Longitude": 16.708410,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12121,
    "Zone": 215,
    "Name": "Kanice, škola",
    "Latitude": 49.264457,
    "Longitude": 16.711083,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12122,
    "Zone": 215,
    "Name": "Řícmanice",
    "Latitude": 49.257062,
    "Longitude": 16.693207,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12123,
    "Zone": 215,
    "Name": "Řícmanice, u lomu",
    "Latitude": 49.258378,
    "Longitude": 16.701651,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12124,
    "Zone": 215,
    "Name": "Řícmanice, u skály",
    "Latitude": 49.253507,
    "Longitude": 16.680573,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12125,
    "Zone": 215,
    "Name": "Řícmanice, Na Štukách",
    "Latitude": 49.254554,
    "Longitude": 16.685904,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12151,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, Na Nivách",
    "Latitude": 49.242502,
    "Longitude": 16.658286,
    "IsPublic": true,
    "LineList": "75,94"
  },
  {
    "StopID": 12152,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, křižovatka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12153,
    "Zone": 215,
    "Name": "Bílovice n/S Polanka",
    "Latitude": 49.250009,
    "Longitude": 16.667782,
    "IsPublic": true,
    "LineList": "211"
  },
  {
    "StopID": 12154,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, hřbitov",
    "Latitude": 49.245226,
    "Longitude": 16.668030,
    "IsPublic": true,
    "LineList": "75,94,211"
  },
  {
    "StopID": 12155,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, Nad Tratí",
    "Latitude": 49.250683,
    "Longitude": 16.669068,
    "IsPublic": true,
    "LineList": "211"
  },
  {
    "StopID": 12156,
    "Zone": 215,
    "Name": "Bílovice n/S Soběšická",
    "Latitude": 49.244264,
    "Longitude": 16.657272,
    "IsPublic": true,
    "LineList": "211"
  },
  {
    "StopID": 12157,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, Vodárenská",
    "Latitude": 49.244170,
    "Longitude": 16.661221,
    "IsPublic": true,
    "LineList": "211"
  },
  {
    "StopID": 12158,
    "Zone": 215,
    "Name": "Bílovice n/S, žel.st.",
    "Latitude": 49.243059,
    "Longitude": 16.673976,
    "IsPublic": true,
    "LineList": "75,94,120,210,211"
  },
  {
    "StopID": 12159,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, Vojanka",
    "Latitude": 49.251396,
    "Longitude": 16.665709,
    "IsPublic": true,
    "LineList": "211"
  },
  {
    "StopID": 12160,
    "Zone": 215,
    "Name": "Bílovice nad Svitavou, náměstí",
    "Latitude": 49.246771,
    "Longitude": 16.672540,
    "IsPublic": true,
    "LineList": "75,94,211"
  },
  {
    "StopID": 12201,
    "Zone": 220,
    "Name": "Babice nad Svitavou, dolní zastávka",
    "Latitude": 49.279869,
    "Longitude": 16.694012,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12202,
    "Zone": 220,
    "Name": "Babice n/S, horní zastávka",
    "Latitude": 49.284465,
    "Longitude": 16.696982,
    "IsPublic": true,
    "LineList": "210"
  },
  {
    "StopID": 12205,
    "Zone": 220,
    "Name": "Březina, jeskyně Výpustek",
    "Latitude": 49.291428,
    "Longitude": 16.726978,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 12206,
    "Zone": 220,
    "Name": "Březina, Lhotky, rozcestí 1.7",
    "Latitude": 49.286848,
    "Longitude": 16.764426,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12207,
    "Zone": 220,
    "Name": "Březina, u pomníku",
    "Latitude": 49.282012,
    "Longitude": 16.754153,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12208,
    "Zone": 220,
    "Name": "Březina, Táborská",
    "Latitude": 49.281478,
    "Longitude": 16.749272,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12209,
    "Zone": 220,
    "Name": "Březina, u sokolovny",
    "Latitude": 49.284160,
    "Longitude": 16.759465,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12210,
    "Zone": 220,
    "Name": "Bukovinka, Pindula",
    "Latitude": 49.295128,
    "Longitude": 16.796592,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 12211,
    "Zone": 220,
    "Name": "Bukovina",
    "Latitude": 49.297528,
    "Longitude": 16.772977,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 12212,
    "Zone": 220,
    "Name": "Bukovina, rozcestí 2.0",
    "Latitude": 49.290291,
    "Longitude": 16.763768,
    "IsPublic": true,
    "LineList": "157,201"
  },
  {
    "StopID": 12213,
    "Zone": 220,
    "Name": "Bukovina, škola",
    "Latitude": 49.298080,
    "Longitude": 16.775843,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 12215,
    "Zone": 220,
    "Name": "Bukovinka",
    "Latitude": 49.293166,
    "Longitude": 16.805062,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 12216,
    "Zone": 220,
    "Name": "Habrůvka",
    "Latitude": 49.302742,
    "Longitude": 16.723657,
    "IsPublic": true,
    "LineList": "157,201"
  },
  {
    "StopID": 12218,
    "Zone": 220,
    "Name": "Habrůvka, Josefov",
    "Latitude": 49.308362,
    "Longitude": 16.690512,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 12219,
    "Zone": 220,
    "Name": "Adamov, Stará huť",
    "Latitude": 49.306628,
    "Longitude": 16.677588,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 12220,
    "Zone": 220,
    "Name": "Křtiny, hájovna Na lukách",
    "Latitude": 49.318617,
    "Longitude": 16.744597,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12221,
    "Zone": 220,
    "Name": "Křtiny, Dělnická čtvrť",
    "Latitude": 49.302159,
    "Longitude": 16.743308,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12222,
    "Zone": 220,
    "Name": "Křtiny, kino",
    "Latitude": 49.294592,
    "Longitude": 16.747538,
    "IsPublic": true,
    "LineList": "157,201"
  },
  {
    "StopID": 12223,
    "Zone": 220,
    "Name": "Křtiny, pivovar",
    "Latitude": 49.292333,
    "Longitude": 16.756510,
    "IsPublic": true,
    "LineList": "157,201"
  },
  {
    "StopID": 12225,
    "Zone": 220,
    "Name": "Křtiny, obecní úřad",
    "Latitude": 49.297010,
    "Longitude": 16.743809,
    "IsPublic": true,
    "LineList": "157,201"
  },
  {
    "StopID": 12226,
    "Zone": 225,
    "Name": "Adamov, Karlov",
    "Latitude": 49.306675,
    "Longitude": 16.665753,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 12228,
    "Zone": 225,
    "Name": "Adamov, závod",
    "Latitude": 49.303390,
    "Longitude": 16.650323,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 12229,
    "Zone": 225,
    "Name": "Adamov, ž.s. točna",
    "Latitude": 49.292238,
    "Longitude": 16.670122,
    "IsPublic": true,
    "LineList": "215"
  },
  {
    "StopID": 12230,
    "Zone": 225,
    "Name": "Adamov, žel. st.",
    "Latitude": 49.295632,
    "Longitude": 16.663277,
    "IsPublic": true,
    "LineList": "120,125,157,215"
  },
  {
    "StopID": 12231,
    "Zone": 225,
    "Name": "Adamov, železniční zastávka",
    "Latitude": 49.301497,
    "Longitude": 16.649317,
    "IsPublic": true,
    "LineList": "120,157,215"
  },
  {
    "StopID": 12232,
    "Zone": 225,
    "Name": "Adamov III, točna",
    "Latitude": 49.289750,
    "Longitude": 16.662247,
    "IsPublic": true,
    "LineList": "215"
  },
  {
    "StopID": 12233,
    "Zone": 225,
    "Name": "Adamov, Adamov III",
    "Latitude": 49.291236,
    "Longitude": 16.663963,
    "IsPublic": true,
    "LineList": "215"
  },
  {
    "StopID": 12234,
    "Zone": 225,
    "Name": "Adamov, Kolonka",
    "Latitude": 49.292452,
    "Longitude": 16.666482,
    "IsPublic": true,
    "LineList": "215"
  },
  {
    "StopID": 12236,
    "Zone": 225,
    "Name": "Adamov, obchodní dům",
    "Latitude": 49.301899,
    "Longitude": 16.652118,
    "IsPublic": true,
    "LineList": "215"
  },
  {
    "StopID": 12237,
    "Zone": 225,
    "Name": "Adamov, Horka",
    "Latitude": 49.300851,
    "Longitude": 16.658047,
    "IsPublic": true,
    "LineList": "215"
  },
  {
    "StopID": 12238,
    "Zone": 225,
    "Name": "Horka, točna",
    "Latitude": 49.302925,
    "Longitude": 16.655013,
    "IsPublic": true,
    "LineList": "215"
  },
  {
    "StopID": 12239,
    "Zone": 226,
    "Name": "Lažany",
    "Latitude": 49.353978,
    "Longitude": 16.550992,
    "IsPublic": true,
    "LineList": "301,313"
  },
  {
    "StopID": 12240,
    "Zone": 236,
    "Name": "Lažany, rozcestí Újezd",
    "Latitude": 49.359462,
    "Longitude": 16.554464,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12241,
    "Zone": 220,
    "Name": "Březina, škola",
    "Latitude": 49.281931,
    "Longitude": 16.750376,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12242,
    "Zone": 220,
    "Name": "Bukovinka, Černý les",
    "Latitude": 49.295136,
    "Longitude": 16.793950,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 12301,
    "Zone": 230,
    "Name": "Kotvrdovice, horní konec",
    "Latitude": 49.353990,
    "Longitude": 16.786858,
    "IsPublic": true,
    "LineList": "167,231"
  },
  {
    "StopID": 12302,
    "Zone": 230,
    "Name": "Kotvrdovice, ObÚ",
    "Latitude": 49.355177,
    "Longitude": 16.784182,
    "IsPublic": true,
    "LineList": "167,231"
  },
  {
    "StopID": 12303,
    "Zone": 230,
    "Name": "Kotvrdovice, žleb",
    "Latitude": 49.356753,
    "Longitude": 16.782577,
    "IsPublic": true,
    "LineList": "167,231"
  },
  {
    "StopID": 12304,
    "Zone": 230,
    "Name": "Krásensko, rozcestí 1.0",
    "Latitude": 49.368567,
    "Longitude": 16.818525,
    "IsPublic": true,
    "LineList": "167,231"
  },
  {
    "StopID": 12305,
    "Zone": 230,
    "Name": "Krásensko",
    "Latitude": 49.365116,
    "Longitude": 16.829078,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 12306,
    "Zone": 230,
    "Name": "Krásensko, ZD",
    "Latitude": 49.360273,
    "Longitude": 16.831087,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 12307,
    "Zone": 230,
    "Name": "Kotvrdovice, rozcestí Krasová",
    "Latitude": 49.356501,
    "Longitude": 16.776081,
    "IsPublic": true,
    "LineList": "167,231"
  },
  {
    "StopID": 12308,
    "Zone": 230,
    "Name": "Lipovec",
    "Latitude": 49.382805,
    "Longitude": 16.807698,
    "IsPublic": true,
    "LineList": "231,232"
  },
  {
    "StopID": 12309,
    "Zone": 230,
    "Name": "Lipovec, horní konec",
    "Latitude": 49.379080,
    "Longitude": 16.812818,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12310,
    "Zone": 230,
    "Name": "Lipovec, kravín",
    "Latitude": 49.386168,
    "Longitude": 16.810772,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12311,
    "Zone": 230,
    "Name": "Lipovec, točna",
    "Latitude": 49.388843,
    "Longitude": 16.802232,
    "IsPublic": true,
    "LineList": "231,232,260"
  },
  {
    "StopID": 12312,
    "Zone": 230,
    "Name": "Senetářov, Chemoplast",
    "Latitude": 49.348578,
    "Longitude": 16.811332,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 12313,
    "Zone": 230,
    "Name": "Senetářov, Jednota",
    "Latitude": 49.351367,
    "Longitude": 16.806697,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 12314,
    "Zone": 230,
    "Name": "Senetářov, MŠ",
    "Latitude": 49.354867,
    "Longitude": 16.804213,
    "IsPublic": true,
    "LineList": "167,231"
  },
  {
    "StopID": 12315,
    "Zone": 232,
    "Name": "Skalní Mlýn",
    "Latitude": 49.363600,
    "Longitude": 16.708253,
    "IsPublic": true,
    "LineList": "226"
  },
  {
    "StopID": 12316,
    "Zone": 232,
    "Name": "Jedovnice, Chaloupky",
    "Latitude": 49.339842,
    "Longitude": 16.747774,
    "IsPublic": true,
    "LineList": "167,231"
  },
  {
    "StopID": 12317,
    "Zone": 232,
    "Name": "Jedovnice, gar.ČAD",
    "Latitude": 49.347640,
    "Longitude": 16.761251,
    "IsPublic": true,
    "LineList": "167,201,231"
  },
  {
    "StopID": 12318,
    "Zone": 232,
    "Name": "Jedovnice, náměstí",
    "Latitude": 49.343278,
    "Longitude": 16.754642,
    "IsPublic": true,
    "LineList": "167,201,231"
  },
  {
    "StopID": 12319,
    "Zone": 232,
    "Name": "Jedovnice, pila",
    "Latitude": 49.331892,
    "Longitude": 16.739983,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12320,
    "Zone": 232,
    "Name": "Jedovnice, Újezd",
    "Latitude": 49.339426,
    "Longitude": 16.748598,
    "IsPublic": true,
    "LineList": "201"
  },
  {
    "StopID": 12321,
    "Zone": 232,
    "Name": "Krasová",
    "Latitude": 49.361398,
    "Longitude": 16.767632,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12322,
    "Zone": 232,
    "Name": "Krasová, dolní konec",
    "Latitude": 49.358998,
    "Longitude": 16.764543,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12323,
    "Zone": 232,
    "Name": "Olomučany, dolní konec",
    "Latitude": 49.337113,
    "Longitude": 16.666925,
    "IsPublic": true,
    "LineList": "230"
  },
  {
    "StopID": 12324,
    "Zone": 232,
    "Name": "Olomučany, horní konec",
    "Latitude": 49.325477,
    "Longitude": 16.677109,
    "IsPublic": true,
    "LineList": "230"
  },
  {
    "StopID": 12325,
    "Zone": 232,
    "Name": "Olomučany, restaurace",
    "Latitude": 49.329918,
    "Longitude": 16.672347,
    "IsPublic": true,
    "LineList": "230"
  },
  {
    "StopID": 12326,
    "Zone": 232,
    "Name": "Olomučany, škola",
    "Latitude": 49.333130,
    "Longitude": 16.669910,
    "IsPublic": true,
    "LineList": "230"
  },
  {
    "StopID": 12327,
    "Zone": 232,
    "Name": "Olomučany, točna",
    "Latitude": 49.322893,
    "Longitude": 16.679930,
    "IsPublic": true,
    "LineList": "230"
  },
  {
    "StopID": 12328,
    "Zone": 232,
    "Name": "Ostrov u Macochy, Balcarka",
    "Latitude": 49.377199,
    "Longitude": 16.757568,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12329,
    "Zone": 232,
    "Name": "Ostrov u Macochy, Jednota",
    "Latitude": 49.382005,
    "Longitude": 16.766531,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12330,
    "Zone": 232,
    "Name": "Ostrov u Mac. léčebna",
    "Latitude": 49.379492,
    "Longitude": 16.761712,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12331,
    "Zone": 232,
    "Name": "Ostrov u M., u ryb.",
    "Latitude": 49.378859,
    "Longitude": 16.764366,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12332,
    "Zone": 232,
    "Name": "Rudice",
    "Latitude": 49.337428,
    "Longitude": 16.725183,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12334,
    "Zone": 232,
    "Name": "Rudice, rozcestí 2.0",
    "Latitude": 49.344647,
    "Longitude": 16.735222,
    "IsPublic": true,
    "LineList": "167,231"
  },
  {
    "StopID": 12335,
    "Zone": 232,
    "Name": "Vilémovice",
    "Latitude": 49.361242,
    "Longitude": 16.746443,
    "IsPublic": true,
    "LineList": "231,232"
  },
  {
    "StopID": 12336,
    "Zone": 232,
    "Name": "Vilémovice, Macocha rozc. 2.0",
    "Latitude": 49.371431,
    "Longitude": 16.746444,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12337,
    "Zone": 235,
    "Name": "Blansko, Kaufland",
    "Latitude": 49.370152,
    "Longitude": 16.642519,
    "IsPublic": true,
    "LineList": "221,222"
  },
  {
    "StopID": 12338,
    "Zone": 235,
    "Name": "Blansko, průmyslová zóna",
    "Latitude": 49.377279,
    "Longitude": 16.642138,
    "IsPublic": true,
    "LineList": "222,234,235"
  },
  {
    "StopID": 12339,
    "Zone": 235,
    "Name": "Blansko, Svitavská",
    "Latitude": 49.359251,
    "Longitude": 16.642955,
    "IsPublic": true,
    "LineList": "222,233,234,235"
  },
  {
    "StopID": 12340,
    "Zone": 235,
    "Name": "Blansko, rozvodna, točna",
    "Latitude": 49.350642,
    "Longitude": 16.644909,
    "IsPublic": true,
    "LineList": "224"
  },
  {
    "StopID": 12341,
    "Zone": 235,
    "Name": "Blansko, Synthon",
    "Latitude": 49.353642,
    "Longitude": 16.641533,
    "IsPublic": true,
    "LineList": "224"
  },
  {
    "StopID": 12342,
    "Zone": 235,
    "Name": "Blansko, aut. st.",
    "Latitude": 49.353654,
    "Longitude": 16.646766,
    "IsPublic": true,
    "LineList": "120,125,152,167,221,222,223,224,226,230,231,232,233,234,235"
  },
  {
    "StopID": 12343,
    "Zone": 235,
    "Name": "Blansko, Brněnská",
    "Latitude": 49.356420,
    "Longitude": 16.639269,
    "IsPublic": true,
    "LineList": "224"
  },
  {
    "StopID": 12344,
    "Zone": 235,
    "Name": "Blansko, Čelakovského",
    "Latitude": 49.366449,
    "Longitude": 16.648607,
    "IsPublic": true,
    "LineList": "222"
  },
  {
    "StopID": 12345,
    "Zone": 235,
    "Name": "Blansko, Češkovice, chatová oblast",
    "Latitude": 49.379412,
    "Longitude": 16.682008,
    "IsPublic": true,
    "LineList": "223"
  },
  {
    "StopID": 12346,
    "Zone": 235,
    "Name": "Blansko, Češkovice",
    "Latitude": 49.377118,
    "Longitude": 16.675243,
    "IsPublic": true,
    "LineList": "223"
  },
  {
    "StopID": 12347,
    "Zone": 235,
    "Name": "Blansko, Komenského",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12348,
    "Zone": 235,
    "Name": "Blansko, DSB sl.",
    "Latitude": 49.356875,
    "Longitude": 16.684215,
    "IsPublic": true,
    "LineList": "222,226"
  },
  {
    "StopID": 12349,
    "Zone": 235,
    "Name": "Blansko, ČKD nová hala",
    "Latitude": 49.353313,
    "Longitude": 16.673467,
    "IsPublic": true,
    "LineList": "167,222,226,231,232"
  },
  {
    "StopID": 12350,
    "Zone": 235,
    "Name": "Blansko, Klepačov, U kapličky",
    "Latitude": 49.343191,
    "Longitude": 16.660455,
    "IsPublic": true,
    "LineList": "223"
  },
  {
    "StopID": 12351,
    "Zone": 235,
    "Name": "Blansko, ČKD ředitelství",
    "Latitude": 49.349692,
    "Longitude": 16.656330,
    "IsPublic": true,
    "LineList": "167,222,226,231,232"
  },
  {
    "StopID": 12352,
    "Zone": 235,
    "Name": "Blansko, ČKD strojírna",
    "Latitude": 49.353165,
    "Longitude": 16.669370,
    "IsPublic": true,
    "LineList": "167,222,226,231,232"
  },
  {
    "StopID": 12353,
    "Zone": 235,
    "Name": "Blansko, ČKD Orlík",
    "Latitude": 49.352410,
    "Longitude": 16.682560,
    "IsPublic": true,
    "LineList": "167,222,226,231,232"
  },
  {
    "StopID": 12354,
    "Zone": 235,
    "Name": "Blansko, Dolní L.",
    "Latitude": 49.384352,
    "Longitude": 16.632894,
    "IsPublic": true,
    "LineList": "222,235"
  },
  {
    "StopID": 12355,
    "Zone": 235,
    "Name": "Blansko, Dolní Lhota, škola",
    "Latitude": 49.381918,
    "Longitude": 16.631510,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12356,
    "Zone": 235,
    "Name": "Blansko, Dvorská",
    "Latitude": 49.365367,
    "Longitude": 16.644965,
    "IsPublic": true,
    "LineList": "222,223"
  },
  {
    "StopID": 12357,
    "Zone": 235,
    "Name": "Blansko, Erbenova",
    "Latitude": 49.358538,
    "Longitude": 16.656593,
    "IsPublic": true,
    "LineList": "222,223"
  },
  {
    "StopID": 12358,
    "Zone": 235,
    "Name": "Blansko, Horní L.",
    "Latitude": 49.384052,
    "Longitude": 16.647172,
    "IsPublic": true,
    "LineList": "222,234"
  },
  {
    "StopID": 12359,
    "Zone": 235,
    "Name": "Blansko, Hořice",
    "Latitude": 49.356217,
    "Longitude": 16.623013,
    "IsPublic": true,
    "LineList": "224"
  },
  {
    "StopID": 12360,
    "Zone": 235,
    "Name": "Blansko, hřbitov",
    "Latitude": 49.366969,
    "Longitude": 16.651820,
    "IsPublic": true,
    "LineList": "222,223"
  },
  {
    "StopID": 12361,
    "Zone": 235,
    "Name": "Blansko, Klepačov",
    "Latitude": 49.341605,
    "Longitude": 16.665548,
    "IsPublic": true,
    "LineList": "223"
  },
  {
    "StopID": 12362,
    "Zone": 235,
    "Name": "Blansko, Klepačov, spodní část",
    "Latitude": 49.345348,
    "Longitude": 16.657631,
    "IsPublic": true,
    "LineList": "223"
  },
  {
    "StopID": 12363,
    "Zone": 235,
    "Name": "Blansko, Lažánky, kamnárna",
    "Latitude": 49.352402,
    "Longitude": 16.702037,
    "IsPublic": true,
    "LineList": "167,231,232"
  },
  {
    "StopID": 12364,
    "Zone": 235,
    "Name": "Blansko, Lažánky, Márovky",
    "Latitude": 49.350688,
    "Longitude": 16.693005,
    "IsPublic": true,
    "LineList": "167,231,232"
  },
  {
    "StopID": 12365,
    "Zone": 235,
    "Name": "Blansko, Lažánky, škola",
    "Latitude": 49.351732,
    "Longitude": 16.711995,
    "IsPublic": true,
    "LineList": "167,231,232"
  },
  {
    "StopID": 12366,
    "Zone": 230,
    "Name": "Lipovec, dolní konec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12367,
    "Zone": 235,
    "Name": "Blansko, Lažánky",
    "Latitude": 49.350763,
    "Longitude": 16.707844,
    "IsPublic": true,
    "LineList": "167,231,232"
  },
  {
    "StopID": 12368,
    "Zone": 235,
    "Name": "Blansko, Mánesova",
    "Latitude": 49.367788,
    "Longitude": 16.644849,
    "IsPublic": true,
    "LineList": "222"
  },
  {
    "StopID": 12370,
    "Zone": 235,
    "Name": "Blansko, pošta",
    "Latitude": 49.355879,
    "Longitude": 16.649710,
    "IsPublic": true,
    "LineList": "221,222,223"
  },
  {
    "StopID": 12371,
    "Zone": 235,
    "Name": "Blansko, Metra 2",
    "Latitude": 49.372116,
    "Longitude": 16.641276,
    "IsPublic": true,
    "LineList": "222,234,235"
  },
  {
    "StopID": 12372,
    "Zone": 235,
    "Name": "Blansko, Masarykova",
    "Latitude": 49.352598,
    "Longitude": 16.651733,
    "IsPublic": true,
    "LineList": "223"
  },
  {
    "StopID": 12373,
    "Zone": 235,
    "Name": "Blansko, Bezručova",
    "Latitude": 49.370592,
    "Longitude": 16.645941,
    "IsPublic": true,
    "LineList": "221,222,234"
  },
  {
    "StopID": 12374,
    "Zone": 235,
    "Name": "Blansko, Na Žižlavici",
    "Latitude": 49.363702,
    "Longitude": 16.681912,
    "IsPublic": true,
    "LineList": "233"
  },
  {
    "StopID": 12375,
    "Zone": 235,
    "Name": "Blansko, Náměstí Míru",
    "Latitude": 49.358057,
    "Longitude": 16.651959,
    "IsPublic": true,
    "LineList": "221,222,223"
  },
  {
    "StopID": 12376,
    "Zone": 235,
    "Name": "Blansko, náměstí Republiky",
    "Latitude": 49.361613,
    "Longitude": 16.644347,
    "IsPublic": true,
    "LineList": "221,222,223,234"
  },
  {
    "StopID": 12377,
    "Zone": 235,
    "Name": "Blansko, náměstí Svobody",
    "Latitude": 49.364868,
    "Longitude": 16.644157,
    "IsPublic": true,
    "LineList": "221,222,223"
  },
  {
    "StopID": 12378,
    "Zone": 235,
    "Name": "Blansko, Obůrka",
    "Latitude": 49.376198,
    "Longitude": 16.690512,
    "IsPublic": true,
    "LineList": "223,233"
  },
  {
    "StopID": 12379,
    "Zone": 235,
    "Name": "Blansko, Okružní",
    "Latitude": 49.374403,
    "Longitude": 16.653057,
    "IsPublic": true,
    "LineList": "221"
  },
  {
    "StopID": 12380,
    "Zone": 235,
    "Name": "Blansko, Olešná",
    "Latitude": 49.339630,
    "Longitude": 16.637227,
    "IsPublic": true,
    "LineList": "224"
  },
  {
    "StopID": 12381,
    "Zone": 235,
    "Name": "Blansko, Písečná",
    "Latitude": 49.354667,
    "Longitude": 16.656703,
    "IsPublic": true,
    "LineList": "221"
  },
  {
    "StopID": 12382,
    "Zone": 235,
    "Name": "Blansko, Písečná",
    "Latitude": 49.355080,
    "Longitude": 16.654007,
    "IsPublic": true,
    "LineList": "221"
  },
  {
    "StopID": 12384,
    "Zone": 235,
    "Name": "Blansko, Podlesí",
    "Latitude": 49.359574,
    "Longitude": 16.661079,
    "IsPublic": true,
    "LineList": "222,233"
  },
  {
    "StopID": 12385,
    "Zone": 235,
    "Name": "Blansko, Poliklinika",
    "Latitude": 49.360943,
    "Longitude": 16.652416,
    "IsPublic": true,
    "LineList": "221,222,223,233,234,235"
  },
  {
    "StopID": 12386,
    "Zone": 235,
    "Name": "Blansko, Poříčí",
    "Latitude": 49.362451,
    "Longitude": 16.641309,
    "IsPublic": true,
    "LineList": "222,234,235"
  },
  {
    "StopID": 12387,
    "Zone": 235,
    "Name": "Blansko, přehrada",
    "Latitude": 49.360375,
    "Longitude": 16.692937,
    "IsPublic": true,
    "LineList": "226"
  },
  {
    "StopID": 12389,
    "Zone": 235,
    "Name": "Blansko, rozcestí Klepačov",
    "Latitude": 49.346355,
    "Longitude": 16.650873,
    "IsPublic": true,
    "LineList": "152,230"
  },
  {
    "StopID": 12390,
    "Zone": 235,
    "Name": "Blansko, Sadová",
    "Latitude": 49.359287,
    "Longitude": 16.658128,
    "IsPublic": true,
    "LineList": "222,233"
  },
  {
    "StopID": 12391,
    "Zone": 235,
    "Name": "Blansko, Seifertova",
    "Latitude": 49.362427,
    "Longitude": 16.645358,
    "IsPublic": true,
    "LineList": "221,222,223"
  },
  {
    "StopID": 12392,
    "Zone": 235,
    "Name": "Blansko, Sever",
    "Latitude": 49.368765,
    "Longitude": 16.655574,
    "IsPublic": true,
    "LineList": "222,223"
  },
  {
    "StopID": 12393,
    "Zone": 235,
    "Name": "Blansko, Supermarket Albert",
    "Latitude": 49.353288,
    "Longitude": 16.649513,
    "IsPublic": true,
    "LineList": "221"
  },
  {
    "StopID": 12394,
    "Zone": 235,
    "Name": "Blansko, Těchov",
    "Latitude": 49.368004,
    "Longitude": 16.695261,
    "IsPublic": true,
    "LineList": "223,233"
  },
  {
    "StopID": 12395,
    "Zone": 235,
    "Name": "Blansko, Těchov, MŠ",
    "Latitude": 49.368022,
    "Longitude": 16.690073,
    "IsPublic": true,
    "LineList": "223,233"
  },
  {
    "StopID": 12396,
    "Zone": 230,
    "Name": "Lipovec, škola",
    "Latitude": 49.384060,
    "Longitude": 16.808073,
    "IsPublic": true,
    "LineList": "231,260"
  },
  {
    "StopID": 12397,
    "Zone": 235,
    "Name": "Blansko, ul. 9. května",
    "Latitude": 49.357038,
    "Longitude": 16.656638,
    "IsPublic": true,
    "LineList": "222"
  },
  {
    "StopID": 12399,
    "Zone": 235,
    "Name": "Zborovce",
    "Latitude": 49.372770,
    "Longitude": 16.650120,
    "IsPublic": true,
    "LineList": "221,222"
  },
  {
    "StopID": 12401,
    "Zone": 240,
    "Name": "Holštejn, rozc. 2.0",
    "Latitude": 49.395312,
    "Longitude": 16.770218,
    "IsPublic": true,
    "LineList": "232,260"
  },
  {
    "StopID": 12402,
    "Zone": 240,
    "Name": "Holštejn",
    "Latitude": 49.406067,
    "Longitude": 16.777873,
    "IsPublic": true,
    "LineList": "232,260"
  },
  {
    "StopID": 12403,
    "Zone": 240,
    "Name": "Kulířov",
    "Latitude": 49.378768,
    "Longitude": 16.846940,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12404,
    "Zone": 240,
    "Name": "Lipovec, Marianín",
    "Latitude": 49.389672,
    "Longitude": 16.838365,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12405,
    "Zone": 240,
    "Name": "Nové Sady",
    "Latitude": 49.408905,
    "Longitude": 16.901903,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 12406,
    "Zone": 240,
    "Name": "Rozstání, čekárna Na stráni",
    "Latitude": 49.396277,
    "Longitude": 16.848742,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12407,
    "Zone": 240,
    "Name": "Rozstání, Baldovec, lom",
    "Latitude": 49.407731,
    "Longitude": 16.823391,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12408,
    "Zone": 240,
    "Name": "Rozstání, Baldovec, točna",
    "Latitude": 49.411725,
    "Longitude": 16.822305,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12409,
    "Zone": 240,
    "Name": "Rozstání, hřbitov",
    "Latitude": 49.399651,
    "Longitude": 16.835137,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12410,
    "Zone": 240,
    "Name": "Rozstání, křižovatka",
    "Latitude": 49.397094,
    "Longitude": 16.836995,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12411,
    "Zone": 240,
    "Name": "Rozstání, obchod",
    "Latitude": 49.397512,
    "Longitude": 16.844770,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12412,
    "Zone": 240,
    "Name": "Studnice",
    "Latitude": 49.375649,
    "Longitude": 16.879734,
    "IsPublic": true,
    "LineList": "231,750"
  },
  {
    "StopID": 12413,
    "Zone": 240,
    "Name": "Studnice, Odrůvky",
    "Latitude": 49.394387,
    "Longitude": 16.882099,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 12415,
    "Zone": 240,
    "Name": "Šošůvka, Na Bráně",
    "Latitude": 49.413965,
    "Longitude": 16.756121,
    "IsPublic": true,
    "LineList": "232,260"
  },
  {
    "StopID": 12416,
    "Zone": 240,
    "Name": "Šošůvka, rozcestí 1.0",
    "Latitude": 49.401761,
    "Longitude": 16.751483,
    "IsPublic": true,
    "LineList": "260"
  },
  {
    "StopID": 12417,
    "Zone": 240,
    "Name": "Šošůvka, obecní úřad",
    "Latitude": 49.410268,
    "Longitude": 16.752199,
    "IsPublic": true,
    "LineList": "232,260"
  },
  {
    "StopID": 12418,
    "Zone": 247,
    "Name": "Bukovice",
    "Latitude": 49.407422,
    "Longitude": 16.488207,
    "IsPublic": true,
    "LineList": "332"
  },
  {
    "StopID": 12419,
    "Zone": 247,
    "Name": "Bukovice, rozc.",
    "Latitude": 49.414123,
    "Longitude": 16.492185,
    "IsPublic": true,
    "LineList": "235,332"
  },
  {
    "StopID": 12420,
    "Zone": 247,
    "Name": "Rašov, dolní konec",
    "Latitude": 49.416383,
    "Longitude": 16.448175,
    "IsPublic": true,
    "LineList": "235,332"
  },
  {
    "StopID": 12421,
    "Zone": 247,
    "Name": "Rašov, hostinec",
    "Latitude": 49.415610,
    "Longitude": 16.454468,
    "IsPublic": true,
    "LineList": "235,332"
  },
  {
    "StopID": 12422,
    "Zone": 247,
    "Name": "Zhoř",
    "Latitude": 49.415077,
    "Longitude": 16.480260,
    "IsPublic": true,
    "LineList": "235,332"
  },
  {
    "StopID": 12423,
    "Zone": 240,
    "Name": "Sloup",
    "Latitude": 49.415453,
    "Longitude": 16.739635,
    "IsPublic": true,
    "LineList": "233,240,260"
  },
  {
    "StopID": 12424,
    "Zone": 240,
    "Name": "Sloup, Nová čtvrť",
    "Latitude": 49.413691,
    "Longitude": 16.735348,
    "IsPublic": true,
    "LineList": "233,240"
  },
  {
    "StopID": 12425,
    "Zone": 240,
    "Name": "Vavřinec",
    "Latitude": 49.402771,
    "Longitude": 16.720310,
    "IsPublic": true,
    "LineList": "233"
  },
  {
    "StopID": 12427,
    "Zone": 245,
    "Name": "Kuničky",
    "Latitude": 49.434060,
    "Longitude": 16.683617,
    "IsPublic": true,
    "LineList": "240"
  },
  {
    "StopID": 12428,
    "Zone": 245,
    "Name": "Petrovice",
    "Latitude": 49.413973,
    "Longitude": 16.700938,
    "IsPublic": true,
    "LineList": "240"
  },
  {
    "StopID": 12429,
    "Zone": 245,
    "Name": "Rájec-Jestřebí, Holešín",
    "Latitude": 49.428315,
    "Longitude": 16.654862,
    "IsPublic": true,
    "LineList": "240"
  },
  {
    "StopID": 12430,
    "Zone": 255,
    "Name": "Doubravice, zahradnictví",
    "Latitude": 49.431636,
    "Longitude": 16.632933,
    "IsPublic": true,
    "LineList": "234,240"
  },
  {
    "StopID": 12431,
    "Zone": 245,
    "Name": "Rájec-Jestřebí, Jestřebí",
    "Latitude": 49.410975,
    "Longitude": 16.617053,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12432,
    "Zone": 245,
    "Name": "Rájec-Jestřebí, Karolín",
    "Latitude": 49.407715,
    "Longitude": 16.670517,
    "IsPublic": true,
    "LineList": "240"
  },
  {
    "StopID": 12433,
    "Zone": 245,
    "Name": "Rájec-Jestřebí, Karolín, rozc.1.0",
    "Latitude": 49.414345,
    "Longitude": 16.682047,
    "IsPublic": true,
    "LineList": "240"
  },
  {
    "StopID": 12434,
    "Zone": 245,
    "Name": "Rájec-Jestřebí, Komenského",
    "Latitude": 49.415396,
    "Longitude": 16.632578,
    "IsPublic": true,
    "LineList": "234,240"
  },
  {
    "StopID": 12435,
    "Zone": 245,
    "Name": "Rájec-Jestřebí, lékárna",
    "Latitude": 49.407568,
    "Longitude": 16.632147,
    "IsPublic": true,
    "LineList": "235,240"
  },
  {
    "StopID": 12436,
    "Zone": 245,
    "Name": "Rájec-Jestřebí, MKZ",
    "Latitude": 49.403442,
    "Longitude": 16.632571,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12437,
    "Zone": 245,
    "Name": "Rájec-Jestřebí nám.",
    "Latitude": 49.410927,
    "Longitude": 16.639334,
    "IsPublic": true,
    "LineList": "234,240"
  },
  {
    "StopID": 12438,
    "Zone": 245,
    "Name": "Rájec-Jestřebí, pošta",
    "Latitude": 49.406178,
    "Longitude": 16.637668,
    "IsPublic": true,
    "LineList": "234,235"
  },
  {
    "StopID": 12439,
    "Zone": 245,
    "Name": "Rájec-Jestřebí ž.s.",
    "Latitude": 49.408793,
    "Longitude": 16.627341,
    "IsPublic": true,
    "LineList": "120,234,235,240,251,258"
  },
  {
    "StopID": 12440,
    "Zone": 245,
    "Name": "Rájec-Jestřebí, Lenčov, křiž.",
    "Latitude": 49.421079,
    "Longitude": 16.665728,
    "IsPublic": true,
    "LineList": "240"
  },
  {
    "StopID": 12441,
    "Zone": 245,
    "Name": "Ráječko",
    "Latitude": 49.395251,
    "Longitude": 16.642904,
    "IsPublic": true,
    "LineList": "234,235"
  },
  {
    "StopID": 12442,
    "Zone": 245,
    "Name": "Žďár",
    "Latitude": 49.421052,
    "Longitude": 16.698148,
    "IsPublic": true,
    "LineList": "240"
  },
  {
    "StopID": 12443,
    "Zone": 246,
    "Name": "Bořitov",
    "Latitude": 49.422598,
    "Longitude": 16.590117,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12444,
    "Zone": 246,
    "Name": "Bořitov, sokolovna",
    "Latitude": 49.419892,
    "Longitude": 16.589843,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12445,
    "Zone": 246,
    "Name": "Bořitov, ZD",
    "Latitude": 49.424088,
    "Longitude": 16.582656,
    "IsPublic": true,
    "LineList": "250,301"
  },
  {
    "StopID": 12446,
    "Zone": 246,
    "Name": "Brťov-Jeneč, obecní úřad",
    "Latitude": 49.413778,
    "Longitude": 16.517202,
    "IsPublic": true,
    "LineList": "235,313"
  },
  {
    "StopID": 12447,
    "Zone": 246,
    "Name": "Brťov-Jeneč, Jeneč",
    "Latitude": 49.411110,
    "Longitude": 16.507692,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12448,
    "Zone": 246,
    "Name": "Brťov-Jeneč, Na Návsi",
    "Latitude": 49.414708,
    "Longitude": 16.513961,
    "IsPublic": true,
    "LineList": "313"
  },
  {
    "StopID": 12449,
    "Zone": 246,
    "Name": "Černá Hora, Na kopci",
    "Latitude": 49.410358,
    "Longitude": 16.580818,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12450,
    "Zone": 246,
    "Name": "Černá Hora, nám.",
    "Latitude": 49.414722,
    "Longitude": 16.582284,
    "IsPublic": true,
    "LineList": "235,250,301"
  },
  {
    "StopID": 12453,
    "Zone": 246,
    "Name": "Černá Hora, Na Škrku",
    "Latitude": 49.414750,
    "Longitude": 16.571891,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12454,
    "Zone": 246,
    "Name": "Lubě",
    "Latitude": 49.396479,
    "Longitude": 16.528379,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12455,
    "Zone": 246,
    "Name": "Žernovník, obecní úřad",
    "Latitude": 49.407095,
    "Longitude": 16.545576,
    "IsPublic": true,
    "LineList": "235,313"
  },
  {
    "StopID": 12456,
    "Zone": 246,
    "Name": "Žernovník, pod Horkou",
    "Latitude": 49.411055,
    "Longitude": 16.557176,
    "IsPublic": true,
    "LineList": "235"
  },
  {
    "StopID": 12457,
    "Zone": 257,
    "Name": "Rašov, rozc. 1.0",
    "Latitude": 49.439178,
    "Longitude": 16.467531,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12458,
    "Zone": 246,
    "Name": "Malá Lhota",
    "Latitude": 49.391597,
    "Longitude": 16.550408,
    "IsPublic": true,
    "LineList": "313"
  },
  {
    "StopID": 12459,
    "Zone": 246,
    "Name": "Býkovice",
    "Latitude": 49.429568,
    "Longitude": 16.535336,
    "IsPublic": true,
    "LineList": "313"
  },
  {
    "StopID": 12460,
    "Zone": 256,
    "Name": "Žerůtky",
    "Latitude": 49.440563,
    "Longitude": 16.536595,
    "IsPublic": true,
    "LineList": "313"
  },
  {
    "StopID": 12461,
    "Zone": 246,
    "Name": "Býkovice, nákupní středisko Hrnčíř",
    "Latitude": 49.430158,
    "Longitude": 16.538692,
    "IsPublic": true,
    "LineList": "313"
  },
  {
    "StopID": 12462,
    "Zone": 246,
    "Name": "Dlouhá Lhota",
    "Latitude": 49.428423,
    "Longitude": 16.510978,
    "IsPublic": true,
    "LineList": "313"
  },
  {
    "StopID": 12463,
    "Zone": 246,
    "Name": "Žernovník, Hasičský dům",
    "Latitude": 49.404762,
    "Longitude": 16.544333,
    "IsPublic": true,
    "LineList": "313"
  },
  {
    "StopID": 12464,
    "Zone": 240,
    "Name": "Rozstání, ZŠ",
    "Latitude": 49.398110,
    "Longitude": 16.837101,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12465,
    "Zone": 240,
    "Name": "Rozstání, křižovatka Baldovec",
    "Latitude": 49.397253,
    "Longitude": 16.837974,
    "IsPublic": true,
    "LineList": "231"
  },
  {
    "StopID": 12501,
    "Zone": 250,
    "Name": "Vysočany",
    "Latitude": 49.431882,
    "Longitude": 16.810942,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12502,
    "Zone": 250,
    "Name": "Vysočany, Housko",
    "Latitude": 49.430718,
    "Longitude": 16.798257,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12503,
    "Zone": 257,
    "Name": "Brumov",
    "Latitude": 49.461662,
    "Longitude": 16.426932,
    "IsPublic": true,
    "LineList": "257,333"
  },
  {
    "StopID": 12504,
    "Zone": 257,
    "Name": "Brumov, dolní konec",
    "Latitude": 49.458362,
    "Longitude": 16.431693,
    "IsPublic": true,
    "LineList": "257,333"
  },
  {
    "StopID": 12505,
    "Zone": 257,
    "Name": "Brumov, rozcestí 0.5",
    "Latitude": 49.455091,
    "Longitude": 16.435770,
    "IsPublic": true,
    "LineList": "257,333"
  },
  {
    "StopID": 12506,
    "Zone": 257,
    "Name": "Osiky",
    "Latitude": 49.456580,
    "Longitude": 16.421352,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 12507,
    "Zone": 257,
    "Name": "Osiky, rozcestí",
    "Latitude": 49.446017,
    "Longitude": 16.431717,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 12508,
    "Zone": 257,
    "Name": "Osiky, točna",
    "Latitude": 49.454918,
    "Longitude": 16.422437,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 12509,
    "Zone": 255,
    "Name": "Doubravice, nám.",
    "Latitude": 49.434979,
    "Longitude": 16.629459,
    "IsPublic": true,
    "LineList": "234,240,258,259"
  },
  {
    "StopID": 12510,
    "Zone": 255,
    "Name": "Doubravice, ZD 0.3",
    "Latitude": 49.439550,
    "Longitude": 16.626440,
    "IsPublic": true,
    "LineList": "234,258,259"
  },
  {
    "StopID": 12511,
    "Zone": 255,
    "Name": "Doubravice, žel.st.",
    "Latitude": 49.440452,
    "Longitude": 16.622388,
    "IsPublic": true,
    "LineList": "120,258,259"
  },
  {
    "StopID": 12512,
    "Zone": 255,
    "Name": "Jabloňany",
    "Latitude": 49.466338,
    "Longitude": 16.604952,
    "IsPublic": true,
    "LineList": "258"
  },
  {
    "StopID": 12513,
    "Zone": 255,
    "Name": "Lhota Rapotina",
    "Latitude": 49.465343,
    "Longitude": 16.625225,
    "IsPublic": true,
    "LineList": "234"
  },
  {
    "StopID": 12514,
    "Zone": 255,
    "Name": "Lhota Rapotina, točna",
    "Latitude": 49.466137,
    "Longitude": 16.624646,
    "IsPublic": true,
    "LineList": "258"
  },
  {
    "StopID": 12515,
    "Zone": 255,
    "Name": "Obora",
    "Latitude": 49.452277,
    "Longitude": 16.604263,
    "IsPublic": true,
    "LineList": "258"
  },
  {
    "StopID": 12516,
    "Zone": 255,
    "Name": "Obora, Hutě",
    "Latitude": 49.449435,
    "Longitude": 16.595437,
    "IsPublic": true,
    "LineList": "258"
  },
  {
    "StopID": 12517,
    "Zone": 255,
    "Name": "Újezd u Boskovic",
    "Latitude": 49.463678,
    "Longitude": 16.655392,
    "IsPublic": true,
    "LineList": "259"
  },
  {
    "StopID": 12518,
    "Zone": 255,
    "Name": "Újezd u Boskovic, lom",
    "Latitude": 49.453692,
    "Longitude": 16.642022,
    "IsPublic": true,
    "LineList": "259"
  },
  {
    "StopID": 12519,
    "Zone": 256,
    "Name": "Drnovice",
    "Latitude": 49.468642,
    "Longitude": 16.541195,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12520,
    "Zone": 256,
    "Name": "Drnovice, hor.zast.",
    "Latitude": 49.467880,
    "Longitude": 16.534243,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12521,
    "Zone": 256,
    "Name": "Drnovice, rozc.0.5",
    "Latitude": 49.468238,
    "Longitude": 16.533202,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12523,
    "Zone": 256,
    "Name": "Lysice, Perná",
    "Latitude": 49.446968,
    "Longitude": 16.574575,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12524,
    "Zone": 256,
    "Name": "Lysice, pohostinství",
    "Latitude": 49.452366,
    "Longitude": 16.537888,
    "IsPublic": true,
    "LineList": "235,245,257,301,313"
  },
  {
    "StopID": 12525,
    "Zone": 256,
    "Name": "Drnovice, rozcestí Kunice",
    "Latitude": 49.472532,
    "Longitude": 16.532808,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12526,
    "Zone": 256,
    "Name": "Lysice, Brněnská",
    "Latitude": 49.449730,
    "Longitude": 16.545254,
    "IsPublic": true,
    "LineList": "235,301"
  },
  {
    "StopID": 12527,
    "Zone": 256,
    "Name": "Lysice, škola",
    "Latitude": 49.457244,
    "Longitude": 16.538210,
    "IsPublic": true,
    "LineList": "245,257,301"
  },
  {
    "StopID": 12528,
    "Zone": 256,
    "Name": "Lysice, Štěchovská",
    "Latitude": 49.450982,
    "Longitude": 16.527408,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12529,
    "Zone": 256,
    "Name": "Lysice, výzkum",
    "Latitude": 49.456417,
    "Longitude": 16.556818,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12531,
    "Zone": 256,
    "Name": "Štěchov",
    "Latitude": 49.451959,
    "Longitude": 16.506836,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12532,
    "Zone": 257,
    "Name": "Bedřichov",
    "Latitude": 49.461608,
    "Longitude": 16.465750,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12534,
    "Zone": 257,
    "Name": "Brumov, rozc.3.0",
    "Latitude": 49.465681,
    "Longitude": 16.456082,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12535,
    "Zone": 257,
    "Name": "Černovice",
    "Latitude": 49.483054,
    "Longitude": 16.424926,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12536,
    "Zone": 257,
    "Name": "Kozárov",
    "Latitude": 49.443447,
    "Longitude": 16.458255,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12537,
    "Zone": 257,
    "Name": "Kunčina Ves",
    "Latitude": 49.447553,
    "Longitude": 16.476239,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12538,
    "Zone": 260,
    "Name": "Niva, u mlýna",
    "Latitude": 49.440812,
    "Longitude": 16.855585,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12539,
    "Zone": 260,
    "Name": "Niva, čekárna",
    "Latitude": 49.444099,
    "Longitude": 16.852823,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12540,
    "Zone": 260,
    "Name": "Otinoves, obecní úřad",
    "Latitude": 49.421283,
    "Longitude": 16.871167,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12541,
    "Zone": 260,
    "Name": "Drahany",
    "Latitude": 49.434565,
    "Longitude": 16.899170,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12542,
    "Zone": 260,
    "Name": "Bousín",
    "Latitude": 49.455042,
    "Longitude": 16.889737,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12543,
    "Zone": 260,
    "Name": "Otinoves, horní konec",
    "Latitude": 49.426410,
    "Longitude": 16.870252,
    "IsPublic": true,
    "LineList": "232"
  },
  {
    "StopID": 12544,
    "Zone": 255,
    "Name": "Doubravice nad Svitavou, rozcestí Újezd",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12601,
    "Zone": 260,
    "Name": "Benešov",
    "Latitude": 49.508993,
    "Longitude": 16.767662,
    "IsPublic": true,
    "LineList": "233,261,262"
  },
  {
    "StopID": 12602,
    "Zone": 260,
    "Name": "Benešov, Pavlov",
    "Latitude": 49.510633,
    "Longitude": 16.780900,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12603,
    "Zone": 260,
    "Name": "Benešov, Pavlov, Dvůr",
    "Latitude": 49.515340,
    "Longitude": 16.791413,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12604,
    "Zone": 260,
    "Name": "Benešov, škola",
    "Latitude": 49.510317,
    "Longitude": 16.776693,
    "IsPublic": true,
    "LineList": "261,262"
  },
  {
    "StopID": 12605,
    "Zone": 260,
    "Name": "Benešov, ZD střed",
    "Latitude": 49.503434,
    "Longitude": 16.764196,
    "IsPublic": true,
    "LineList": "233,261"
  },
  {
    "StopID": 12606,
    "Zone": 260,
    "Name": "Buková",
    "Latitude": 49.508883,
    "Longitude": 16.830467,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12607,
    "Zone": 260,
    "Name": "Buková, horní zastávka",
    "Latitude": 49.511758,
    "Longitude": 16.824548,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12608,
    "Zone": 260,
    "Name": "Kořenec",
    "Latitude": 49.530331,
    "Longitude": 16.755271,
    "IsPublic": true,
    "LineList": "262,277"
  },
  {
    "StopID": 12609,
    "Zone": 260,
    "Name": "Kořenec, hor.zast.",
    "Latitude": 49.529241,
    "Longitude": 16.759881,
    "IsPublic": true,
    "LineList": "262,277"
  },
  {
    "StopID": 12610,
    "Zone": 260,
    "Name": "Kořenec, točna",
    "Latitude": 49.531797,
    "Longitude": 16.749272,
    "IsPublic": true,
    "LineList": "262,277"
  },
  {
    "StopID": 12611,
    "Zone": 260,
    "Name": "Okrouhlá, Melkov, rozc.2.0",
    "Latitude": 49.534740,
    "Longitude": 16.728412,
    "IsPublic": true,
    "LineList": "277"
  },
  {
    "StopID": 12612,
    "Zone": 260,
    "Name": "Protivanov",
    "Latitude": 49.482344,
    "Longitude": 16.836900,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12613,
    "Zone": 260,
    "Name": "Protivanov, dol.zast.",
    "Latitude": 49.487370,
    "Longitude": 16.837736,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12614,
    "Zone": 260,
    "Name": "Protivanov, hor.zast.",
    "Latitude": 49.480137,
    "Longitude": 16.836125,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12615,
    "Zone": 260,
    "Name": "Protivanov, pila",
    "Latitude": 49.476104,
    "Longitude": 16.826375,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12616,
    "Zone": 260,
    "Name": "Boskovice, Na Chmelnici",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12617,
    "Zone": 260,
    "Name": "Protivanov, tábor Metra",
    "Latitude": 49.471394,
    "Longitude": 16.814908,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12618,
    "Zone": 262,
    "Name": "Ludíkov",
    "Latitude": 49.455820,
    "Longitude": 16.732787,
    "IsPublic": true,
    "LineList": "233,260,261"
  },
  {
    "StopID": 12619,
    "Zone": 262,
    "Name": "Ludíkov, rozcestí",
    "Latitude": 49.458203,
    "Longitude": 16.736358,
    "IsPublic": true,
    "LineList": "233,260,261"
  },
  {
    "StopID": 12620,
    "Zone": 262,
    "Name": "Němčice",
    "Latitude": 49.446616,
    "Longitude": 16.713523,
    "IsPublic": true,
    "LineList": "233,260"
  },
  {
    "StopID": 12621,
    "Zone": 262,
    "Name": "Němčice, Jednota",
    "Latitude": 49.450262,
    "Longitude": 16.717968,
    "IsPublic": true,
    "LineList": "233,260"
  },
  {
    "StopID": 12622,
    "Zone": 262,
    "Name": "Němčice, Dendera",
    "Latitude": 49.451719,
    "Longitude": 16.720388,
    "IsPublic": true,
    "LineList": "233,260,261"
  },
  {
    "StopID": 12623,
    "Zone": 262,
    "Name": "Suchý",
    "Latitude": 49.481303,
    "Longitude": 16.761940,
    "IsPublic": true,
    "LineList": "233,261"
  },
  {
    "StopID": 12624,
    "Zone": 262,
    "Name": "Suchý, u rybníka",
    "Latitude": 49.487335,
    "Longitude": 16.761290,
    "IsPublic": true,
    "LineList": "233,261"
  },
  {
    "StopID": 12625,
    "Zone": 262,
    "Name": "Valchov",
    "Latitude": 49.471395,
    "Longitude": 16.719147,
    "IsPublic": true,
    "LineList": "260,261"
  },
  {
    "StopID": 12626,
    "Zone": 262,
    "Name": "Valchov, rozc.",
    "Latitude": 49.471588,
    "Longitude": 16.719758,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12627,
    "Zone": 262,
    "Name": "Velenov",
    "Latitude": 49.486975,
    "Longitude": 16.732297,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12628,
    "Zone": 262,
    "Name": "Žďárná",
    "Latitude": 49.468497,
    "Longitude": 16.754933,
    "IsPublic": true,
    "LineList": "233,261"
  },
  {
    "StopID": 12629,
    "Zone": 265,
    "Name": "Boskovice, průmyslová zóna",
    "Latitude": 49.496579,
    "Longitude": 16.642359,
    "IsPublic": true,
    "LineList": "250,254"
  },
  {
    "StopID": 12630,
    "Zone": 262,
    "Name": "Ludíkov, točna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12631,
    "Zone": 262,
    "Name": "Žďárná, horní zastávka",
    "Latitude": 49.468553,
    "Longitude": 16.761956,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 12632,
    "Zone": 262,
    "Name": "Žďárná, škola",
    "Latitude": 49.468172,
    "Longitude": 16.760707,
    "IsPublic": true,
    "LineList": "233,261"
  },
  {
    "StopID": 12633,
    "Zone": 265,
    "Name": "Boskovice, 17. list.",
    "Latitude": 49.489357,
    "Longitude": 16.661780,
    "IsPublic": true,
    "LineList": "234,250,251,252,253,254,255,256,257,261"
  },
  {
    "StopID": 12634,
    "Zone": 265,
    "Name": "Boskovice, Kaufland",
    "Latitude": 49.490560,
    "Longitude": 16.641980,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12635,
    "Zone": 265,
    "Name": "Boskovice, aut.st.",
    "Latitude": 49.491599,
    "Longitude": 16.653129,
    "IsPublic": true,
    "LineList": "121,234,250,251,252,253,254,255,256,257,258,259,260,261,262"
  },
  {
    "StopID": 12636,
    "Zone": 265,
    "Name": "Boskovice, Boženy Němcové",
    "Latitude": 49.493585,
    "Longitude": 16.666403,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12637,
    "Zone": 265,
    "Name": "Boskovice, Gagarinova",
    "Latitude": 49.484847,
    "Longitude": 16.675190,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12638,
    "Zone": 265,
    "Name": "Boskovice, hřbitov",
    "Latitude": 49.493698,
    "Longitude": 16.677302,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12639,
    "Zone": 265,
    "Name": "Chrudichromy, rozcestí Bačov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12640,
    "Zone": 265,
    "Name": "Boskovice, Hybešova 25",
    "Latitude": 49.489517,
    "Longitude": 16.666210,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12641,
    "Zone": 265,
    "Name": "Boskovice, Hybešova 55",
    "Latitude": 49.487828,
    "Longitude": 16.671618,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12642,
    "Zone": 265,
    "Name": "Boskovice, Komenského",
    "Latitude": 49.489510,
    "Longitude": 16.655473,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12643,
    "Zone": 265,
    "Name": "Bosk., Kosmonautů",
    "Latitude": 49.485878,
    "Longitude": 16.673002,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12644,
    "Zone": 265,
    "Name": "Boskovice, Kras",
    "Latitude": 49.491675,
    "Longitude": 16.657418,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12645,
    "Zone": 265,
    "Name": "Boskovice, Ludvíka Vojtěcha",
    "Latitude": 49.484998,
    "Longitude": 16.681002,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12646,
    "Zone": 265,
    "Name": "Boskovice, Lidická",
    "Latitude": 49.487012,
    "Longitude": 16.665368,
    "IsPublic": true,
    "LineList": "250,259,260,261,262"
  },
  {
    "StopID": 12647,
    "Zone": 265,
    "Name": "Boskovice, Mánesova",
    "Latitude": 49.484955,
    "Longitude": 16.644376,
    "IsPublic": true,
    "LineList": "234,258,259"
  },
  {
    "StopID": 12648,
    "Zone": 265,
    "Name": "Boskovice, Mladkov",
    "Latitude": 49.490615,
    "Longitude": 16.619263,
    "IsPublic": true,
    "LineList": "250,253,255,256,257"
  },
  {
    "StopID": 12649,
    "Zone": 265,
    "Name": "Boskovice, Mladkov, pekárna",
    "Latitude": 49.490321,
    "Longitude": 16.615458,
    "IsPublic": true,
    "LineList": "250,256"
  },
  {
    "StopID": 12650,
    "Zone": 265,
    "Name": "Boskovice, nemocnice",
    "Latitude": 49.491648,
    "Longitude": 16.644472,
    "IsPublic": true,
    "LineList": "234,250,253,254,255,256,257,261"
  },
  {
    "StopID": 12651,
    "Zone": 265,
    "Name": "Boskovice, Pod Oborou",
    "Latitude": 49.486997,
    "Longitude": 16.653119,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12652,
    "Zone": 265,
    "Name": "Boskovice, Podhradí",
    "Latitude": 49.483863,
    "Longitude": 16.666407,
    "IsPublic": true,
    "LineList": "259"
  },
  {
    "StopID": 12653,
    "Zone": 265,
    "Name": "Boskovice, Podlesí",
    "Latitude": 49.482291,
    "Longitude": 16.685418,
    "IsPublic": true,
    "LineList": "260,261,262"
  },
  {
    "StopID": 12654,
    "Zone": 265,
    "Name": "Boskovice, Smetanova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12655,
    "Zone": 265,
    "Name": "Boskovice, Sokolská",
    "Latitude": 49.490970,
    "Longitude": 16.660723,
    "IsPublic": true,
    "LineList": "250,251,252,259,260,262"
  },
  {
    "StopID": 12656,
    "Zone": 265,
    "Name": "Boskovice, STS",
    "Latitude": 49.495901,
    "Longitude": 16.646367,
    "IsPublic": true,
    "LineList": "250,254"
  },
  {
    "StopID": 12657,
    "Zone": 265,
    "Name": "Boskovice, Suš. ZŠ II",
    "Latitude": 49.486201,
    "Longitude": 16.663522,
    "IsPublic": true,
    "LineList": "234,250,252,254,256,258,259,260,261,262"
  },
  {
    "StopID": 12658,
    "Zone": 265,
    "Name": "Boskovice, Svat.Čecha",
    "Latitude": 49.492133,
    "Longitude": 16.669020,
    "IsPublic": true,
    "LineList": "250"
  },
  {
    "StopID": 12659,
    "Zone": 265,
    "Name": "Boskovice, školní statek",
    "Latitude": 49.498839,
    "Longitude": 16.665738,
    "IsPublic": true,
    "LineList": "251,252"
  },
  {
    "StopID": 12660,
    "Zone": 265,
    "Name": "Boskovice, U Kapličky",
    "Latitude": 49.483205,
    "Longitude": 16.673843,
    "IsPublic": true,
    "LineList": "260,261,262"
  },
  {
    "StopID": 12661,
    "Zone": 265,
    "Name": "Boskovice, v údolí",
    "Latitude": 49.478417,
    "Longitude": 16.650883,
    "IsPublic": true,
    "LineList": "259"
  },
  {
    "StopID": 12662,
    "Zone": 265,
    "Name": "Chrudichromy",
    "Latitude": 49.502565,
    "Longitude": 16.633960,
    "IsPublic": true,
    "LineList": "254"
  },
  {
    "StopID": 12663,
    "Zone": 265,
    "Name": "Jabloňany, rozc.",
    "Latitude": 49.474603,
    "Longitude": 16.594418,
    "IsPublic": true,
    "LineList": "250,257"
  },
  {
    "StopID": 12664,
    "Zone": 265,
    "Name": "Jabloňany, rozc.1.0",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12665,
    "Zone": 265,
    "Name": "Krhov",
    "Latitude": 49.463333,
    "Longitude": 16.583250,
    "IsPublic": true,
    "LineList": "250,257"
  },
  {
    "StopID": 12666,
    "Zone": 265,
    "Name": "Krhov, Pohodlí",
    "Latitude": 49.462461,
    "Longitude": 16.575173,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12667,
    "Zone": 265,
    "Name": "Krhov, rozc. 1.0",
    "Latitude": 49.468313,
    "Longitude": 16.584207,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12668,
    "Zone": 265,
    "Name": "Sebranice, horní zast.",
    "Latitude": 49.498804,
    "Longitude": 16.569252,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12669,
    "Zone": 265,
    "Name": "Sebranice, u pošty",
    "Latitude": 49.496763,
    "Longitude": 16.575394,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12670,
    "Zone": 265,
    "Name": "Sebranice, Vaculka rozc.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12671,
    "Zone": 265,
    "Name": "Skalice nad Svitavou, ACHP",
    "Latitude": 49.482396,
    "Longitude": 16.600134,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12672,
    "Zone": 260,
    "Name": "Benešov, hřbitov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12674,
    "Zone": 265,
    "Name": "Skalice nad Svitavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12676,
    "Zone": 265,
    "Name": "Skalice n/S, žel.st.",
    "Latitude": 49.480321,
    "Longitude": 16.608999,
    "IsPublic": true,
    "LineList": "120,121,125,250,256,257,258"
  },
  {
    "StopID": 12679,
    "Zone": 265,
    "Name": "Svitávka, bytovky",
    "Latitude": 49.509934,
    "Longitude": 16.615209,
    "IsPublic": true,
    "LineList": "253"
  },
  {
    "StopID": 12680,
    "Zone": 265,
    "Name": "Svitávka, MŠ",
    "Latitude": 49.500869,
    "Longitude": 16.600843,
    "IsPublic": true,
    "LineList": "253,255"
  },
  {
    "StopID": 12681,
    "Zone": 265,
    "Name": "Svitávka, náměstí",
    "Latitude": 49.502962,
    "Longitude": 16.595598,
    "IsPublic": true,
    "LineList": "253,255"
  },
  {
    "StopID": 12682,
    "Zone": 265,
    "Name": "Svitávka, Podhradí",
    "Latitude": 49.508032,
    "Longitude": 16.599474,
    "IsPublic": true,
    "LineList": "253"
  },
  {
    "StopID": 12683,
    "Zone": 265,
    "Name": "Svitávka, Sasina",
    "Latitude": 49.513740,
    "Longitude": 16.585419,
    "IsPublic": true,
    "LineList": "255"
  },
  {
    "StopID": 12684,
    "Zone": 265,
    "Name": "Svitávka, U labutě",
    "Latitude": 49.506918,
    "Longitude": 16.585819,
    "IsPublic": true,
    "LineList": "255"
  },
  {
    "StopID": 12685,
    "Zone": 265,
    "Name": "Voděrady, hor.zast.",
    "Latitude": 49.479458,
    "Longitude": 16.558265,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12686,
    "Zone": 265,
    "Name": "Voděrady, nám.",
    "Latitude": 49.480946,
    "Longitude": 16.560205,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12687,
    "Zone": 266,
    "Name": "Kunštát, U Bílého kříže",
    "Latitude": 49.502952,
    "Longitude": 16.523785,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12688,
    "Zone": 266,
    "Name": "Hluboké u Kunštátu",
    "Latitude": 49.495687,
    "Longitude": 16.472747,
    "IsPublic": true,
    "LineList": "276"
  },
  {
    "StopID": 12689,
    "Zone": 266,
    "Name": "Kunštát, kult.dům",
    "Latitude": 49.506329,
    "Longitude": 16.524172,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12690,
    "Zone": 266,
    "Name": "Kunštát, nám.",
    "Latitude": 49.507260,
    "Longitude": 16.518184,
    "IsPublic": true,
    "LineList": "256,276,301"
  },
  {
    "StopID": 12693,
    "Zone": 266,
    "Name": "Kunštát, Rudka",
    "Latitude": 49.520422,
    "Longitude": 16.514495,
    "IsPublic": true,
    "LineList": "276"
  },
  {
    "StopID": 12694,
    "Zone": 266,
    "Name": "Kunštát, Rudka, hotel",
    "Latitude": 49.516992,
    "Longitude": 16.510802,
    "IsPublic": true,
    "LineList": "256,276"
  },
  {
    "StopID": 12695,
    "Zone": 266,
    "Name": "Kunštát, Rudka, Na samotě",
    "Latitude": 49.526268,
    "Longitude": 16.520565,
    "IsPublic": true,
    "LineList": "276"
  },
  {
    "StopID": 12696,
    "Zone": 266,
    "Name": "Kunštát, Rudka, prodejna",
    "Latitude": 49.520395,
    "Longitude": 16.512147,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12697,
    "Zone": 266,
    "Name": "Kunštát, Sychotín",
    "Latitude": 49.503769,
    "Longitude": 16.509598,
    "IsPublic": true,
    "LineList": "256,276,301"
  },
  {
    "StopID": 12698,
    "Zone": 266,
    "Name": "Kunštát, Sychotín, Grafitárna",
    "Latitude": 49.508925,
    "Longitude": 16.498938,
    "IsPublic": true,
    "LineList": "256,301"
  },
  {
    "StopID": 12699,
    "Zone": 266,
    "Name": "Kunštát, Touboř",
    "Latitude": 49.492955,
    "Longitude": 16.495338,
    "IsPublic": true,
    "LineList": "276"
  },
  {
    "StopID": 12700,
    "Zone": 270,
    "Name": "Horní Štěpánov, Nové Sady",
    "Latitude": 49.558674,
    "Longitude": 16.799326,
    "IsPublic": true,
    "LineList": "277,291"
  },
  {
    "StopID": 12701,
    "Zone": 270,
    "Name": "Horní Štěpánov, Pohora",
    "Latitude": 49.561210,
    "Longitude": 16.755417,
    "IsPublic": true,
    "LineList": "277"
  },
  {
    "StopID": 12702,
    "Zone": 270,
    "Name": "Horní Štěpánov, toč.",
    "Latitude": 49.547154,
    "Longitude": 16.789813,
    "IsPublic": true,
    "LineList": "277,291"
  },
  {
    "StopID": 12703,
    "Zone": 275,
    "Name": "Bačov, rozc.",
    "Latitude": 49.522980,
    "Longitude": 16.643150,
    "IsPublic": true,
    "LineList": "252"
  },
  {
    "StopID": 12704,
    "Zone": 275,
    "Name": "Knínice, Městečko",
    "Latitude": 49.539509,
    "Longitude": 16.694200,
    "IsPublic": true,
    "LineList": "251"
  },
  {
    "StopID": 12705,
    "Zone": 275,
    "Name": "Knínice, horní zastávka",
    "Latitude": 49.539652,
    "Longitude": 16.702808,
    "IsPublic": true,
    "LineList": "251"
  },
  {
    "StopID": 12706,
    "Zone": 275,
    "Name": "Letovice, Alb.Krejčího",
    "Latitude": 49.545781,
    "Longitude": 16.585550,
    "IsPublic": true,
    "LineList": "254,271,272,276,277"
  },
  {
    "StopID": 12707,
    "Zone": 275,
    "Name": "Letovice, náměstí",
    "Latitude": 49.547031,
    "Longitude": 16.572057,
    "IsPublic": true,
    "LineList": "254,255,271,272,273,274,275,276,277"
  },
  {
    "StopID": 12708,
    "Zone": 275,
    "Name": "Letovice, Borová",
    "Latitude": 49.578215,
    "Longitude": 16.558556,
    "IsPublic": true,
    "LineList": "272,273"
  },
  {
    "StopID": 12709,
    "Zone": 275,
    "Name": "Letovice, Havírna",
    "Latitude": 49.561698,
    "Longitude": 16.579030,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12710,
    "Zone": 275,
    "Name": "Letovice, Havírna rozcestí",
    "Latitude": 49.561325,
    "Longitude": 16.573375,
    "IsPublic": true,
    "LineList": "272,273"
  },
  {
    "StopID": 12711,
    "Zone": 275,
    "Name": "Knínice, U Nádraží",
    "Latitude": 49.534880,
    "Longitude": 16.689404,
    "IsPublic": true,
    "LineList": "121,251"
  },
  {
    "StopID": 12712,
    "Zone": 275,
    "Name": "Letovice, Jasinov",
    "Latitude": 49.537627,
    "Longitude": 16.530525,
    "IsPublic": true,
    "LineList": "276"
  },
  {
    "StopID": 12713,
    "Zone": 275,
    "Name": "Letovice, Kladoruby",
    "Latitude": 49.555240,
    "Longitude": 16.608133,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12714,
    "Zone": 275,
    "Name": "Letovice, Kochov",
    "Latitude": 49.564555,
    "Longitude": 16.611283,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12715,
    "Zone": 275,
    "Name": "Letovice, Kovošrot",
    "Latitude": 49.557232,
    "Longitude": 16.576095,
    "IsPublic": true,
    "LineList": "254,271"
  },
  {
    "StopID": 12716,
    "Zone": 275,
    "Name": "Letovice, Letostroj I",
    "Latitude": 49.554860,
    "Longitude": 16.575637,
    "IsPublic": true,
    "LineList": "274,275,276"
  },
  {
    "StopID": 12717,
    "Zone": 275,
    "Name": "Letovice, Letostroj II",
    "Latitude": 49.569200,
    "Longitude": 16.563411,
    "IsPublic": true,
    "LineList": "272,273"
  },
  {
    "StopID": 12718,
    "Zone": 275,
    "Name": "Letovice, Meziříčko",
    "Latitude": 49.565837,
    "Longitude": 16.556512,
    "IsPublic": true,
    "LineList": "254"
  },
  {
    "StopID": 12719,
    "Zone": 275,
    "Name": "Letovice, Meziříčko, dol.konec",
    "Latitude": 49.561093,
    "Longitude": 16.568512,
    "IsPublic": true,
    "LineList": "254"
  },
  {
    "StopID": 12720,
    "Zone": 275,
    "Name": "Novičí, rozc.",
    "Latitude": 49.584110,
    "Longitude": 16.591507,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12721,
    "Zone": 275,
    "Name": "Letovice, papírny",
    "Latitude": 49.549632,
    "Longitude": 16.566906,
    "IsPublic": true,
    "LineList": "274,275"
  },
  {
    "StopID": 12722,
    "Zone": 275,
    "Name": "Letovice, Podolí",
    "Latitude": 49.530655,
    "Longitude": 16.617452,
    "IsPublic": true,
    "LineList": "253,254,277"
  },
  {
    "StopID": 12723,
    "Zone": 275,
    "Name": "Letovice, přehrada",
    "Latitude": 49.553448,
    "Longitude": 16.556195,
    "IsPublic": true,
    "LineList": "274,275"
  },
  {
    "StopID": 12724,
    "Zone": 275,
    "Name": "Letovice, Slatinka",
    "Latitude": 49.575185,
    "Longitude": 16.570358,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12725,
    "Zone": 275,
    "Name": "Letovice, Třebětín",
    "Latitude": 49.558122,
    "Longitude": 16.589022,
    "IsPublic": true,
    "LineList": "254"
  },
  {
    "StopID": 12726,
    "Zone": 275,
    "Name": "Letovice, Třebětín, rozc.",
    "Latitude": 49.558322,
    "Longitude": 16.583230,
    "IsPublic": true,
    "LineList": "254"
  },
  {
    "StopID": 12727,
    "Zone": 275,
    "Name": "Letovice, Tylex",
    "Latitude": 49.535323,
    "Longitude": 16.579190,
    "IsPublic": true,
    "LineList": "255"
  },
  {
    "StopID": 12728,
    "Zone": 275,
    "Name": "Letovice, Tylex jíd.",
    "Latitude": 49.536972,
    "Longitude": 16.580704,
    "IsPublic": true,
    "LineList": "255,271,272,273,275,276,277"
  },
  {
    "StopID": 12729,
    "Zone": 275,
    "Name": "Letovice, Tyršova park.",
    "Latitude": 49.543073,
    "Longitude": 16.572313,
    "IsPublic": true,
    "LineList": "271,272"
  },
  {
    "StopID": 12730,
    "Zone": 275,
    "Name": "Letovice, u hřiště",
    "Latitude": 49.543523,
    "Longitude": 16.571390,
    "IsPublic": true,
    "LineList": "273,276"
  },
  {
    "StopID": 12731,
    "Zone": 275,
    "Name": "Letovice, u mostu",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12732,
    "Zone": 275,
    "Name": "Letovice, u školy",
    "Latitude": 49.544002,
    "Longitude": 16.583570,
    "IsPublic": true,
    "LineList": "254,255,271,272,273,274,275,276,277"
  },
  {
    "StopID": 12733,
    "Zone": 275,
    "Name": "Letovice, u zámku-nem.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12734,
    "Zone": 275,
    "Name": "Letovice, Zábludov",
    "Latitude": 49.540562,
    "Longitude": 16.546412,
    "IsPublic": true,
    "LineList": "276"
  },
  {
    "StopID": 12735,
    "Zone": 275,
    "Name": "Letovice, Zboněk",
    "Latitude": 49.523978,
    "Longitude": 16.585142,
    "IsPublic": true,
    "LineList": "255"
  },
  {
    "StopID": 12736,
    "Zone": 275,
    "Name": "Letovice, žel.st.",
    "Latitude": 49.557181,
    "Longitude": 16.571328,
    "IsPublic": true,
    "LineList": "120,122,125,254,255,271,272,273,274,275,276,277"
  },
  {
    "StopID": 12737,
    "Zone": 275,
    "Name": "Míchov",
    "Latitude": 49.525262,
    "Longitude": 16.613995,
    "IsPublic": true,
    "LineList": "253,254"
  },
  {
    "StopID": 12738,
    "Zone": 275,
    "Name": "Pamětice",
    "Latitude": 49.548285,
    "Longitude": 16.646305,
    "IsPublic": true,
    "LineList": "253,277"
  },
  {
    "StopID": 12739,
    "Zone": 275,
    "Name": "Pamětice, samota",
    "Latitude": 49.547017,
    "Longitude": 16.641407,
    "IsPublic": true,
    "LineList": "253,277"
  },
  {
    "StopID": 12740,
    "Zone": 275,
    "Name": "Skrchov, točna",
    "Latitude": 49.580142,
    "Longitude": 16.552832,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12741,
    "Zone": 275,
    "Name": "Sudice",
    "Latitude": 49.529338,
    "Longitude": 16.669178,
    "IsPublic": true,
    "LineList": "251,252"
  },
  {
    "StopID": 12742,
    "Zone": 275,
    "Name": "Sudice, samota",
    "Latitude": 49.517825,
    "Longitude": 16.664367,
    "IsPublic": true,
    "LineList": "251,252"
  },
  {
    "StopID": 12743,
    "Zone": 275,
    "Name": "Sudice, Semíč",
    "Latitude": 49.513990,
    "Longitude": 16.678513,
    "IsPublic": true,
    "LineList": "251,252"
  },
  {
    "StopID": 12744,
    "Zone": 275,
    "Name": "Sudice, zast.",
    "Latitude": 49.525527,
    "Longitude": 16.669570,
    "IsPublic": true,
    "LineList": "251,252"
  },
  {
    "StopID": 12745,
    "Zone": 275,
    "Name": "Šebetov",
    "Latitude": 49.549173,
    "Longitude": 16.709912,
    "IsPublic": true,
    "LineList": "251,277"
  },
  {
    "StopID": 12746,
    "Zone": 275,
    "Name": "Skrchov, rozc.I",
    "Latitude": 49.580147,
    "Longitude": 16.551469,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12747,
    "Zone": 275,
    "Name": "Skrchov, rozc.II",
    "Latitude": 49.579143,
    "Longitude": 16.553808,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12748,
    "Zone": 275,
    "Name": "Šebetov, myslivna",
    "Latitude": 49.544052,
    "Longitude": 16.733930,
    "IsPublic": true,
    "LineList": "277"
  },
  {
    "StopID": 12749,
    "Zone": 275,
    "Name": "Šebetov, na Křižnicích",
    "Latitude": 49.536599,
    "Longitude": 16.724140,
    "IsPublic": true,
    "LineList": "277"
  },
  {
    "StopID": 12750,
    "Zone": 275,
    "Name": "Šebetov, u pily",
    "Latitude": 49.554964,
    "Longitude": 16.698653,
    "IsPublic": true,
    "LineList": "121,277"
  },
  {
    "StopID": 12751,
    "Zone": 275,
    "Name": "Šebetov, u zámku",
    "Latitude": 49.544337,
    "Longitude": 16.717370,
    "IsPublic": true,
    "LineList": "277"
  },
  {
    "StopID": 12752,
    "Zone": 275,
    "Name": "Vážany",
    "Latitude": 49.530412,
    "Longitude": 16.686022,
    "IsPublic": true,
    "LineList": "251"
  },
  {
    "StopID": 12753,
    "Zone": 275,
    "Name": "Vísky",
    "Latitude": 49.535672,
    "Longitude": 16.624120,
    "IsPublic": true,
    "LineList": "253,277"
  },
  {
    "StopID": 12754,
    "Zone": 275,
    "Name": "Vísky, u školy",
    "Latitude": 49.541210,
    "Longitude": 16.628907,
    "IsPublic": true,
    "LineList": "253,277"
  },
  {
    "StopID": 12755,
    "Zone": 275,
    "Name": "Vranová",
    "Latitude": 49.553098,
    "Longitude": 16.524654,
    "IsPublic": true,
    "LineList": "275"
  },
  {
    "StopID": 12756,
    "Zone": 275,
    "Name": "Vranová, rozc.0.2",
    "Latitude": 49.556572,
    "Longitude": 16.528542,
    "IsPublic": true,
    "LineList": "274,275"
  },
  {
    "StopID": 12757,
    "Zone": 275,
    "Name": "Vranová, samota",
    "Latitude": 49.555510,
    "Longitude": 16.536349,
    "IsPublic": true,
    "LineList": "274,275"
  },
  {
    "StopID": 12758,
    "Zone": 277,
    "Name": "Crhov",
    "Latitude": 49.544699,
    "Longitude": 16.436252,
    "IsPublic": true,
    "LineList": "256,301"
  },
  {
    "StopID": 12759,
    "Zone": 277,
    "Name": "Hodonín u Kunštátu, rozcestí",
    "Latitude": 49.519298,
    "Longitude": 16.441355,
    "IsPublic": true,
    "LineList": "256,257"
  },
  {
    "StopID": 12760,
    "Zone": 277,
    "Name": "Křtěnov",
    "Latitude": 49.546783,
    "Longitude": 16.419988,
    "IsPublic": true,
    "LineList": "256,257"
  },
  {
    "StopID": 12762,
    "Zone": 277,
    "Name": "Lhota u Olešnice",
    "Latitude": 49.542987,
    "Longitude": 16.390853,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12763,
    "Zone": 277,
    "Name": "Louka",
    "Latitude": 49.527897,
    "Longitude": 16.430135,
    "IsPublic": true,
    "LineList": "256,257"
  },
  {
    "StopID": 12764,
    "Zone": 277,
    "Name": "Louka, Loucký Dvůr",
    "Latitude": 49.532593,
    "Longitude": 16.420752,
    "IsPublic": true,
    "LineList": "256,257"
  },
  {
    "StopID": 12765,
    "Zone": 277,
    "Name": "Louka, Karlov",
    "Latitude": 49.515151,
    "Longitude": 16.412635,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12766,
    "Zone": 277,
    "Name": "Olešnice, Lamberk",
    "Latitude": 49.569197,
    "Longitude": 16.409317,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12767,
    "Zone": 277,
    "Name": "Olešnice, nám.",
    "Latitude": 49.557881,
    "Longitude": 16.422294,
    "IsPublic": true,
    "LineList": "256,257,275,301"
  },
  {
    "StopID": 12768,
    "Zone": 277,
    "Name": "Olešnice, u lávky",
    "Latitude": 49.554382,
    "Longitude": 16.422187,
    "IsPublic": true,
    "LineList": "256,301"
  },
  {
    "StopID": 12769,
    "Zone": 277,
    "Name": "Olešnice, závod",
    "Latitude": 49.551247,
    "Longitude": 16.420538,
    "IsPublic": true,
    "LineList": "256,257"
  },
  {
    "StopID": 12770,
    "Zone": 277,
    "Name": "Petrov",
    "Latitude": 49.533803,
    "Longitude": 16.489012,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12771,
    "Zone": 277,
    "Name": "Petrov, rozc. 1.0",
    "Latitude": 49.536579,
    "Longitude": 16.499728,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12772,
    "Zone": 277,
    "Name": "Prosetín",
    "Latitude": 49.526242,
    "Longitude": 16.395115,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12773,
    "Zone": 277,
    "Name": "Prosetín, rozcestí",
    "Latitude": 49.523515,
    "Longitude": 16.413892,
    "IsPublic": true,
    "LineList": "257"
  },
  {
    "StopID": 12774,
    "Zone": 277,
    "Name": "Rozseč nad Kunštátem, Horničí",
    "Latitude": 49.537493,
    "Longitude": 16.456100,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12775,
    "Zone": 277,
    "Name": "Rozseč nad Kunštátem, rozcestí",
    "Latitude": 49.528047,
    "Longitude": 16.463960,
    "IsPublic": true,
    "LineList": "256,301"
  },
  {
    "StopID": 12776,
    "Zone": 277,
    "Name": "Rozsíčka",
    "Latitude": 49.552504,
    "Longitude": 16.467263,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12777,
    "Zone": 277,
    "Name": "Rozsíčka, U lípy",
    "Latitude": 49.556027,
    "Longitude": 16.474998,
    "IsPublic": true,
    "LineList": "275"
  },
  {
    "StopID": 12778,
    "Zone": 277,
    "Name": "Sulíkov",
    "Latitude": 49.546555,
    "Longitude": 16.491536,
    "IsPublic": true,
    "LineList": "256,275"
  },
  {
    "StopID": 12779,
    "Zone": 277,
    "Name": "Sulíkov, dolní zast.",
    "Latitude": 49.543152,
    "Longitude": 16.490049,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12780,
    "Zone": 277,
    "Name": "Sulíkov, Vřesice",
    "Latitude": 49.547288,
    "Longitude": 16.503893,
    "IsPublic": true,
    "LineList": "275"
  },
  {
    "StopID": 12781,
    "Zone": 270,
    "Name": "Horní Štěpánov",
    "Latitude": 49.549460,
    "Longitude": 16.790815,
    "IsPublic": true,
    "LineList": "277,291"
  },
  {
    "StopID": 12782,
    "Zone": 270,
    "Name": "Horní Štěpánov, u rybníka",
    "Latitude": 49.553242,
    "Longitude": 16.792962,
    "IsPublic": true,
    "LineList": "277,291"
  },
  {
    "StopID": 12783,
    "Zone": 277,
    "Name": "Rozseč nad Kunštátem",
    "Latitude": 49.525618,
    "Longitude": 16.462825,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12784,
    "Zone": 277,
    "Name": "Rozseč nad Kunštátem, hájenka",
    "Latitude": 49.521122,
    "Longitude": 16.451018,
    "IsPublic": true,
    "LineList": "256"
  },
  {
    "StopID": 12785,
    "Zone": 275,
    "Name": "Letovice, Halasova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12786,
    "Zone": 275,
    "Name": "Letovice, Babolky",
    "Latitude": 49.589610,
    "Longitude": 16.579372,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12787,
    "Zone": 270,
    "Name": "Horní Štěpánov, rozcestí Skřípov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12788,
    "Zone": 275,
    "Name": "Lhota u Letovic",
    "Latitude": 49.536524,
    "Longitude": 16.563714,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12801,
    "Zone": 256,
    "Name": "Kunice",
    "Latitude": 49.479538,
    "Longitude": 16.491585,
    "IsPublic": true,
    "LineList": "245"
  },
  {
    "StopID": 12802,
    "Zone": 256,
    "Name": "Lhota u Lysic",
    "Latitude": 49.468540,
    "Longitude": 16.495952,
    "IsPublic": true,
    "LineList": "245"
  },
  {
    "StopID": 12803,
    "Zone": 285,
    "Name": "Brněnec, křižovatka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12804,
    "Zone": 285,
    "Name": "Brněnec, Mor.Chrastová, žel.st.",
    "Latitude": 49.622584,
    "Longitude": 16.524857,
    "IsPublic": true,
    "LineList": "120,122,273"
  },
  {
    "StopID": 12805,
    "Zone": 256,
    "Name": "Lysice, škola točna",
    "Latitude": 49.457263,
    "Longitude": 16.536873,
    "IsPublic": true,
    "LineList": "245,257,313"
  },
  {
    "StopID": 12806,
    "Zone": 256,
    "Name": "Lysice, Záoboří",
    "Latitude": 49.465888,
    "Longitude": 16.518342,
    "IsPublic": true,
    "LineList": "245"
  },
  {
    "StopID": 12807,
    "Zone": 280,
    "Name": "Borotín",
    "Latitude": 49.583038,
    "Longitude": 16.676638,
    "IsPublic": true,
    "LineList": "251,253"
  },
  {
    "StopID": 12808,
    "Zone": 285,
    "Name": "Brněnec, Chrastová Lhota",
    "Latitude": 49.611199,
    "Longitude": 16.532323,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12809,
    "Zone": 285,
    "Name": "Mor.Chrastová, pošta",
    "Latitude": 49.621767,
    "Longitude": 16.526340,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12810,
    "Zone": 280,
    "Name": "Cetkovice",
    "Latitude": 49.578028,
    "Longitude": 16.721211,
    "IsPublic": true,
    "LineList": "251,290"
  },
  {
    "StopID": 12811,
    "Zone": 280,
    "Name": "Cetkovice, MŠ",
    "Latitude": 49.579756,
    "Longitude": 16.723792,
    "IsPublic": true,
    "LineList": "251,290"
  },
  {
    "StopID": 12812,
    "Zone": 280,
    "Name": "Cetkovice, žel.st.",
    "Latitude": 49.588256,
    "Longitude": 16.704873,
    "IsPublic": true,
    "LineList": "121,251"
  },
  {
    "StopID": 12813,
    "Zone": 280,
    "Name": "Deštná",
    "Latitude": 49.613558,
    "Longitude": 16.564775,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12814,
    "Zone": 280,
    "Name": "Deštná, Rumberk",
    "Latitude": 49.609132,
    "Longitude": 16.563768,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12815,
    "Zone": 280,
    "Name": "Letovice, Dolní Smržov",
    "Latitude": 49.590730,
    "Longitude": 16.556445,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12816,
    "Zone": 280,
    "Name": "Letovice, Dolní Smržov, Jednota",
    "Latitude": 49.598680,
    "Longitude": 16.556450,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12817,
    "Zone": 280,
    "Name": "Letovice, Chlum",
    "Latitude": 49.593702,
    "Longitude": 16.595440,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12818,
    "Zone": 285,
    "Name": "Rozhraní, Vilémov",
    "Latitude": 49.594594,
    "Longitude": 16.538958,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12819,
    "Zone": 285,
    "Name": "Rozhraní, železniční zastávka",
    "Latitude": 49.603242,
    "Longitude": 16.531880,
    "IsPublic": true,
    "LineList": "120,122,273"
  },
  {
    "StopID": 12820,
    "Zone": 285,
    "Name": "Stvolová",
    "Latitude": 49.589613,
    "Longitude": 16.543348,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12821,
    "Zone": 280,
    "Name": "Světlá",
    "Latitude": 49.565448,
    "Longitude": 16.718135,
    "IsPublic": true,
    "LineList": "251"
  },
  {
    "StopID": 12822,
    "Zone": 280,
    "Name": "Uhřice",
    "Latitude": 49.596328,
    "Longitude": 16.735359,
    "IsPublic": true,
    "LineList": "290"
  },
  {
    "StopID": 12823,
    "Zone": 280,
    "Name": "Uhřice, točna",
    "Latitude": 49.594158,
    "Longitude": 16.734925,
    "IsPublic": true,
    "LineList": "251,290"
  },
  {
    "StopID": 12824,
    "Zone": 280,
    "Name": "Vanovice",
    "Latitude": 49.567448,
    "Longitude": 16.665570,
    "IsPublic": true,
    "LineList": "253,277"
  },
  {
    "StopID": 12825,
    "Zone": 280,
    "Name": "Vanovice, Drválovice",
    "Latitude": 49.565667,
    "Longitude": 16.649975,
    "IsPublic": true,
    "LineList": "253,277"
  },
  {
    "StopID": 12826,
    "Zone": 280,
    "Name": "Vanovice, zastávka",
    "Latitude": 49.564510,
    "Longitude": 16.671064,
    "IsPublic": true,
    "LineList": "277"
  },
  {
    "StopID": 12827,
    "Zone": 280,
    "Name": "Velké Opatovice, Bezděčí",
    "Latitude": 49.606324,
    "Longitude": 16.615755,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12828,
    "Zone": 280,
    "Name": "Velké Opatovice, Bezděčí, rozcestí",
    "Latitude": 49.605642,
    "Longitude": 16.608354,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12829,
    "Zone": 280,
    "Name": "Velké Opatovice, Svárov",
    "Latitude": 49.591727,
    "Longitude": 16.618577,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12830,
    "Zone": 286,
    "Name": "Bohuňov, náves",
    "Latitude": 49.597640,
    "Longitude": 16.464068,
    "IsPublic": true,
    "LineList": "274"
  },
  {
    "StopID": 12831,
    "Zone": 286,
    "Name": "Horní Poříčí",
    "Latitude": 49.586985,
    "Longitude": 16.476890,
    "IsPublic": true,
    "LineList": "274"
  },
  {
    "StopID": 12832,
    "Zone": 277,
    "Name": "Kněževes",
    "Latitude": 49.585679,
    "Longitude": 16.420402,
    "IsPublic": true,
    "LineList": "275"
  },
  {
    "StopID": 12833,
    "Zone": 277,
    "Name": "Kněževes, rozc.1.0",
    "Latitude": 49.582283,
    "Longitude": 16.418832,
    "IsPublic": true,
    "LineList": "275"
  },
  {
    "StopID": 12834,
    "Zone": 277,
    "Name": "Kněževes, Veselka",
    "Latitude": 49.578012,
    "Longitude": 16.449327,
    "IsPublic": true,
    "LineList": "275"
  },
  {
    "StopID": 12835,
    "Zone": 286,
    "Name": "Křetín",
    "Latitude": 49.563161,
    "Longitude": 16.504478,
    "IsPublic": true,
    "LineList": "274"
  },
  {
    "StopID": 12836,
    "Zone": 286,
    "Name": "Křetín, Dolní Poříčí",
    "Latitude": 49.566043,
    "Longitude": 16.509838,
    "IsPublic": true,
    "LineList": "274"
  },
  {
    "StopID": 12837,
    "Zone": 286,
    "Name": "Křetín, škola",
    "Latitude": 49.561967,
    "Longitude": 16.500213,
    "IsPublic": true,
    "LineList": "274"
  },
  {
    "StopID": 12838,
    "Zone": 286,
    "Name": "Lazinov",
    "Latitude": 49.565158,
    "Longitude": 16.521766,
    "IsPublic": true,
    "LineList": "274"
  },
  {
    "StopID": 12839,
    "Zone": 286,
    "Name": "Lazinov, točna",
    "Latitude": 49.564708,
    "Longitude": 16.527658,
    "IsPublic": true,
    "LineList": "274"
  },
  {
    "StopID": 12840,
    "Zone": 286,
    "Name": "Prostřední Poříčí",
    "Latitude": 49.571628,
    "Longitude": 16.491496,
    "IsPublic": true,
    "LineList": "274"
  },
  {
    "StopID": 12841,
    "Zone": 286,
    "Name": "Prostřední Poříčí, host.u Dvořáků",
    "Latitude": 49.576753,
    "Longitude": 16.485446,
    "IsPublic": true,
    "LineList": "274"
  },
  {
    "StopID": 12842,
    "Zone": 277,
    "Name": "Ústup",
    "Latitude": 49.564672,
    "Longitude": 16.465055,
    "IsPublic": true,
    "LineList": "275"
  },
  {
    "StopID": 12843,
    "Zone": 287,
    "Name": "Nyklovice",
    "Latitude": 49.604472,
    "Longitude": 16.347493,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12844,
    "Zone": 287,
    "Name": "Rovečné",
    "Latitude": 49.577878,
    "Longitude": 16.363352,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12845,
    "Zone": 287,
    "Name": "Rovečné, rozcestí",
    "Latitude": 49.587810,
    "Longitude": 16.371897,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12846,
    "Zone": 287,
    "Name": "Velké Tresné, rozc.",
    "Latitude": 49.583003,
    "Longitude": 16.384695,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12847,
    "Zone": 285,
    "Name": "Stvolová, ObÚ",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12848,
    "Zone": 280,
    "Name": "Úsobrno, hostinec",
    "Latitude": 49.592450,
    "Longitude": 16.761761,
    "IsPublic": true,
    "LineList": "290,291"
  },
  {
    "StopID": 12849,
    "Zone": 280,
    "Name": "Úsobrno, závod",
    "Latitude": 49.584950,
    "Longitude": 16.765969,
    "IsPublic": true,
    "LineList": "290,291"
  },
  {
    "StopID": 12850,
    "Zone": 280,
    "Name": "Úsobrno, nové domy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12851,
    "Zone": 280,
    "Name": "Úsobrno, pila",
    "Latitude": 49.596810,
    "Longitude": 16.761827,
    "IsPublic": true,
    "LineList": "290,291"
  },
  {
    "StopID": 12852,
    "Zone": 285,
    "Name": "Brněnec, mlýn",
    "Latitude": 49.628117,
    "Longitude": 16.520918,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12853,
    "Zone": 285,
    "Name": "Brněnec, mlýn - most",
    "Latitude": 49.629743,
    "Longitude": 16.520828,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12854,
    "Zone": 287,
    "Name": "Velké Tresné",
    "Latitude": 49.574158,
    "Longitude": 16.381681,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12855,
    "Zone": 287,
    "Name": "Velké Tresné, závod",
    "Latitude": 49.569070,
    "Longitude": 16.386339,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12856,
    "Zone": 280,
    "Name": "Vanovice, Drválovice, křižovatka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12901,
    "Zone": 290,
    "Name": "Biskupice, lihovar",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12902,
    "Zone": 290,
    "Name": "Horní Smržov",
    "Latitude": 49.617102,
    "Longitude": 16.577260,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12903,
    "Zone": 290,
    "Name": "Horní Smržov, Jednota",
    "Latitude": 49.618461,
    "Longitude": 16.581972,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12904,
    "Zone": 290,
    "Name": "Jaroměřice, hájenka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12905,
    "Zone": 290,
    "Name": "Jaroměřice, rest.",
    "Latitude": 49.625363,
    "Longitude": 16.751822,
    "IsPublic": true,
    "LineList": "290,291"
  },
  {
    "StopID": 12906,
    "Zone": 290,
    "Name": "Jaroměřice, rozcestí",
    "Latitude": 49.611643,
    "Longitude": 16.735587,
    "IsPublic": true,
    "LineList": "290"
  },
  {
    "StopID": 12907,
    "Zone": 290,
    "Name": "Jaroměřice, u hřiště",
    "Latitude": 49.627601,
    "Longitude": 16.746418,
    "IsPublic": true,
    "LineList": "290,291"
  },
  {
    "StopID": 12908,
    "Zone": 290,
    "Name": "Jevíčko, ASCI",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12909,
    "Zone": 290,
    "Name": "Jevíčko, nám.",
    "Latitude": 49.632649,
    "Longitude": 16.711559,
    "IsPublic": true,
    "LineList": "251,290,291"
  },
  {
    "StopID": 12910,
    "Zone": 290,
    "Name": "Jevíčko, uhelné sklady",
    "Latitude": 49.630228,
    "Longitude": 16.729527,
    "IsPublic": true,
    "LineList": "290,291"
  },
  {
    "StopID": 12911,
    "Zone": 290,
    "Name": "Malá Roudka",
    "Latitude": 49.602052,
    "Longitude": 16.646302,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12912,
    "Zone": 290,
    "Name": "Malá Roudka, rozc.0.5",
    "Latitude": 49.601828,
    "Longitude": 16.647300,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12913,
    "Zone": 290,
    "Name": "Malá Roudka, Skočova Lhota",
    "Latitude": 49.606455,
    "Longitude": 16.650608,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12914,
    "Zone": 290,
    "Name": "Roubanina",
    "Latitude": 49.615422,
    "Longitude": 16.593686,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12915,
    "Zone": 290,
    "Name": "Roubanina, Roubanská",
    "Latitude": 49.614983,
    "Longitude": 16.608969,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12916,
    "Zone": 290,
    "Name": "Slatina, Na Červené",
    "Latitude": 49.624497,
    "Longitude": 16.604450,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12917,
    "Zone": 290,
    "Name": "Slatina, náves",
    "Latitude": 49.630246,
    "Longitude": 16.607803,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12918,
    "Zone": 290,
    "Name": "Slatina, rozc.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12919,
    "Zone": 290,
    "Name": "Velké Opatovice,a.s.",
    "Latitude": 49.610978,
    "Longitude": 16.673748,
    "IsPublic": true,
    "LineList": "251,253,271,272,291"
  },
  {
    "StopID": 12920,
    "Zone": 290,
    "Name": "Velké Opatovice, Brťov",
    "Latitude": 49.617423,
    "Longitude": 16.640337,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12921,
    "Zone": 290,
    "Name": "Velké Opatovice, Korbelova Lhota",
    "Latitude": 49.617058,
    "Longitude": 16.622961,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12922,
    "Zone": 290,
    "Name": "Velké Opatovice, sídliště",
    "Latitude": 49.614464,
    "Longitude": 16.679971,
    "IsPublic": true,
    "LineList": "251"
  },
  {
    "StopID": 12923,
    "Zone": 290,
    "Name": "Velké Opatovice, Velká Roudka",
    "Latitude": 49.596382,
    "Longitude": 16.658592,
    "IsPublic": true,
    "LineList": "271"
  },
  {
    "StopID": 12924,
    "Zone": 290,
    "Name": "Velké Opatovice, Zádvoří",
    "Latitude": 49.610633,
    "Longitude": 16.664929,
    "IsPublic": true,
    "LineList": "271,272"
  },
  {
    "StopID": 12925,
    "Zone": 290,
    "Name": "V. Opatovice, závod",
    "Latitude": 49.611699,
    "Longitude": 16.685494,
    "IsPublic": true,
    "LineList": "251,253,271,291"
  },
  {
    "StopID": 12926,
    "Zone": 297,
    "Name": "Bystré, městský úřad",
    "Latitude": 49.628215,
    "Longitude": 16.347280,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 12927,
    "Zone": 290,
    "Name": "Jevíčko, stř.ČSAD",
    "Latitude": 49.628988,
    "Longitude": 16.711722,
    "IsPublic": true,
    "LineList": "251,290,291"
  },
  {
    "StopID": 12928,
    "Zone": 290,
    "Name": "Slatina, rozc.I",
    "Latitude": 49.623876,
    "Longitude": 16.612817,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12929,
    "Zone": 290,
    "Name": "Slatina, rozc.II",
    "Latitude": 49.623525,
    "Longitude": 16.613954,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12930,
    "Zone": 290,
    "Name": "Březina, rozc.",
    "Latitude": 49.651120,
    "Longitude": 16.619720,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12931,
    "Zone": 290,
    "Name": "Jaroměřice, Nový Dvůr",
    "Latitude": 49.605428,
    "Longitude": 16.762193,
    "IsPublic": true,
    "LineList": "290,291"
  },
  {
    "StopID": 12932,
    "Zone": 290,
    "Name": "Jaroměřice, Nadevsí",
    "Latitude": 49.623045,
    "Longitude": 16.756738,
    "IsPublic": true,
    "LineList": "290,291"
  },
  {
    "StopID": 12933,
    "Zone": 295,
    "Name": "Březová nad Svitavou, Doubkovy louky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12934,
    "Zone": 295,
    "Name": "Březová nad Svitavou, stolárna",
    "Latitude": 49.638606,
    "Longitude": 16.520190,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12935,
    "Zone": 295,
    "Name": "Březová n/S, nám.",
    "Latitude": 49.645113,
    "Longitude": 16.517187,
    "IsPublic": true,
    "LineList": "273"
  },
  {
    "StopID": 12936,
    "Zone": 295,
    "Name": "Březová n/S., ž.s.",
    "Latitude": 49.634180,
    "Longitude": 16.519565,
    "IsPublic": true,
    "LineList": "120,122,125,273"
  },
  {
    "StopID": 12937,
    "Zone": 292,
    "Name": "Chornice, Biskupická",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12938,
    "Zone": 292,
    "Name": "Chornice, hostinec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12939,
    "Zone": 290,
    "Name": "Slatina, u hasičárny",
    "Latitude": 49.629180,
    "Longitude": 16.607972,
    "IsPublic": true,
    "LineList": "272"
  },
  {
    "StopID": 12940,
    "Zone": 290,
    "Name": "Velké Opatovice, rozcestí",
    "Latitude": 49.614778,
    "Longitude": 16.681521,
    "IsPublic": true,
    "LineList": "291"
  },
  {
    "StopID": 12941,
    "Zone": 999,
    "Name": "Rudná, obecní úřad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 12942,
    "Zone": 297,
    "Name": "Bystré, rozc. Nyklovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13101,
    "Zone": 310,
    "Name": "Česká, Hlavní",
    "Latitude": 49.281169,
    "Longitude": 16.565213,
    "IsPublic": true,
    "LineList": "41,71,91,175"
  },
  {
    "StopID": 13103,
    "Zone": 310,
    "Name": "Česká, křižovatka",
    "Latitude": 49.282940,
    "Longitude": 16.565352,
    "IsPublic": true,
    "LineList": "41,91,175,310"
  },
  {
    "StopID": 13105,
    "Zone": 310,
    "Name": "Česká, Nádavky",
    "Latitude": 49.274560,
    "Longitude": 16.567823,
    "IsPublic": true,
    "LineList": "41,71,91"
  },
  {
    "StopID": 13107,
    "Zone": 310,
    "Name": "Česká, UP závody",
    "Latitude": 49.288799,
    "Longitude": 16.561525,
    "IsPublic": true,
    "LineList": "71,91,310"
  },
  {
    "StopID": 13109,
    "Zone": 310,
    "Name": "Česká, žel.st.",
    "Latitude": 49.284324,
    "Longitude": 16.567388,
    "IsPublic": true,
    "LineList": "41,91,130,310"
  },
  {
    "StopID": 13114,
    "Zone": 310,
    "Name": "Jinačovice, Chaloupky",
    "Latitude": 49.264602,
    "Longitude": 16.527256,
    "IsPublic": true,
    "LineList": "302"
  },
  {
    "StopID": 13115,
    "Zone": 310,
    "Name": "Jinačovice",
    "Latitude": 49.267725,
    "Longitude": 16.527344,
    "IsPublic": true,
    "LineList": "302"
  },
  {
    "StopID": 13116,
    "Zone": 310,
    "Name": "Kuřim, golfové hřiště",
    "Latitude": 49.278706,
    "Longitude": 16.526126,
    "IsPublic": true,
    "LineList": "302"
  },
  {
    "StopID": 13117,
    "Zone": 310,
    "Name": "Kuřim, škola Jungmannova",
    "Latitude": 49.304197,
    "Longitude": 16.528445,
    "IsPublic": true,
    "LineList": "310,312"
  },
  {
    "StopID": 13118,
    "Zone": 310,
    "Name": "Kuřim, fara",
    "Latitude": 49.296795,
    "Longitude": 16.526584,
    "IsPublic": true,
    "LineList": "310"
  },
  {
    "StopID": 13120,
    "Zone": 310,
    "Name": "Kuřim, rozcestí 2.0",
    "Latitude": 49.317856,
    "Longitude": 16.551692,
    "IsPublic": true,
    "LineList": "301"
  },
  {
    "StopID": 13121,
    "Zone": 310,
    "Name": "Kuřim, Díly pod Sv. Jánem",
    "Latitude": 49.296906,
    "Longitude": 16.547684,
    "IsPublic": true,
    "LineList": "71,91,310"
  },
  {
    "StopID": 13122,
    "Zone": 310,
    "Name": "Podlesí, Pramen",
    "Latitude": 49.305115,
    "Longitude": 16.557422,
    "IsPublic": true,
    "LineList": "91,310"
  },
  {
    "StopID": 13123,
    "Zone": 310,
    "Name": "Kuřim, kulturní dům",
    "Latitude": 49.307694,
    "Longitude": 16.531809,
    "IsPublic": true,
    "LineList": "91,152,302,310,311,312,313,314"
  },
  {
    "StopID": 13124,
    "Zone": 310,
    "Name": "Kuřim, Prefa",
    "Latitude": 49.318358,
    "Longitude": 16.546958,
    "IsPublic": true,
    "LineList": "302,310,311,312,314"
  },
  {
    "StopID": 13125,
    "Zone": 310,
    "Name": "Kuřim, Popkova",
    "Latitude": 49.304662,
    "Longitude": 16.531029,
    "IsPublic": true,
    "LineList": "91,152,310"
  },
  {
    "StopID": 13126,
    "Zone": 310,
    "Name": "Podlesí, rozc.",
    "Latitude": 49.305558,
    "Longitude": 16.554872,
    "IsPublic": true,
    "LineList": "91,301,310"
  },
  {
    "StopID": 13127,
    "Zone": 310,
    "Name": "Kuřim, TOS",
    "Latitude": 49.313448,
    "Longitude": 16.540448,
    "IsPublic": true,
    "LineList": "91,152,301,302,310,311,312,313,314"
  },
  {
    "StopID": 13128,
    "Zone": 310,
    "Name": "Kuřim, poliklinika",
    "Latitude": 49.309782,
    "Longitude": 16.534662,
    "IsPublic": true,
    "LineList": "91,152,302,310,311,312,313,314"
  },
  {
    "StopID": 13129,
    "Zone": 310,
    "Name": "Kuřim, TE",
    "Latitude": 49.314359,
    "Longitude": 16.547182,
    "IsPublic": true,
    "LineList": "91,152,301,302,310,311,312,313,314"
  },
  {
    "StopID": 13130,
    "Zone": 310,
    "Name": "Kuřim, zámek",
    "Latitude": 49.297350,
    "Longitude": 16.524288,
    "IsPublic": true,
    "LineList": "302,310,311,312,314"
  },
  {
    "StopID": 13131,
    "Zone": 310,
    "Name": "Kuřim, Prefa rozcestí",
    "Latitude": 49.316222,
    "Longitude": 16.548480,
    "IsPublic": true,
    "LineList": "91,152,301,310,313"
  },
  {
    "StopID": 13133,
    "Zone": 310,
    "Name": "Kuřim, sokolovna",
    "Latitude": 49.298166,
    "Longitude": 16.539216,
    "IsPublic": true,
    "LineList": "71,91,310"
  },
  {
    "StopID": 13136,
    "Zone": 310,
    "Name": "Moravské Knínice",
    "Latitude": 49.293165,
    "Longitude": 16.503428,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13137,
    "Zone": 310,
    "Name": "Moravské Knínice, Podhájí",
    "Latitude": 49.292659,
    "Longitude": 16.477428,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13138,
    "Zone": 310,
    "Name": "Rozdrojovice, Na dědině",
    "Latitude": 49.255170,
    "Longitude": 16.510942,
    "IsPublic": true,
    "LineList": "302"
  },
  {
    "StopID": 13139,
    "Zone": 310,
    "Name": "Rozdrojovice, Obecnice",
    "Latitude": 49.252937,
    "Longitude": 16.512518,
    "IsPublic": true,
    "LineList": "302"
  },
  {
    "StopID": 13140,
    "Zone": 310,
    "Name": "Rozdrojovice, rekreační středisko",
    "Latitude": 49.248168,
    "Longitude": 16.519248,
    "IsPublic": true,
    "LineList": "302"
  },
  {
    "StopID": 13141,
    "Zone": 310,
    "Name": "Rozdrojovice, rozcestí přehrada",
    "Latitude": 49.250282,
    "Longitude": 16.515923,
    "IsPublic": true,
    "LineList": "302"
  },
  {
    "StopID": 13143,
    "Zone": 310,
    "Name": "Kuřim, žel.st.",
    "Latitude": 49.300036,
    "Longitude": 16.534115,
    "IsPublic": true,
    "LineList": "71,91,123,130,152,175,302,310,311,312,313"
  },
  {
    "StopID": 13146,
    "Zone": 310,
    "Name": "Rozdrojovice, Na Březině",
    "Latitude": 49.254364,
    "Longitude": 16.516596,
    "IsPublic": true,
    "LineList": "302"
  },
  {
    "StopID": 13151,
    "Zone": 310,
    "Name": "Lelekovice, náves",
    "Latitude": 49.291232,
    "Longitude": 16.578953,
    "IsPublic": true,
    "LineList": "41,91,310"
  },
  {
    "StopID": 13153,
    "Zone": 310,
    "Name": "Lelekovice, škola",
    "Latitude": 49.290028,
    "Longitude": 16.575464,
    "IsPublic": true,
    "LineList": "41,91,310"
  },
  {
    "StopID": 13155,
    "Zone": 310,
    "Name": "Lelekovice, u Hrazdírů",
    "Latitude": 49.287462,
    "Longitude": 16.572706,
    "IsPublic": true,
    "LineList": "41,91,310"
  },
  {
    "StopID": 13157,
    "Zone": 310,
    "Name": "Lelekovice, u kříže",
    "Latitude": 49.290172,
    "Longitude": 16.587318,
    "IsPublic": true,
    "LineList": "41,91,310"
  },
  {
    "StopID": 13161,
    "Zone": 310,
    "Name": "Kuřim, Dr. Vališe",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13162,
    "Zone": 310,
    "Name": "Kuřim, Pod Zárubou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13163,
    "Zone": 310,
    "Name": "Kuřim, Na Záhoří",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13181,
    "Zone": 310,
    "Name": "Vranov, hřbitov",
    "Latitude": 49.305780,
    "Longitude": 16.622561,
    "IsPublic": true,
    "LineList": "57,93"
  },
  {
    "StopID": 13183,
    "Zone": 310,
    "Name": "Vranov, křižovatka",
    "Latitude": 49.310230,
    "Longitude": 16.612362,
    "IsPublic": true,
    "LineList": "41,57,93"
  },
  {
    "StopID": 13185,
    "Zone": 310,
    "Name": "Vranov, myslivna",
    "Latitude": 49.308411,
    "Longitude": 16.621848,
    "IsPublic": true,
    "LineList": "41,57,93"
  },
  {
    "StopID": 13187,
    "Zone": 310,
    "Name": "Vranov, smyčka",
    "Latitude": 49.311112,
    "Longitude": 16.612000,
    "IsPublic": true,
    "LineList": "57,93"
  },
  {
    "StopID": 13191,
    "Zone": 310,
    "Name": "Brno, Hrad Veveří",
    "Latitude": 49.254541,
    "Longitude": 16.461517,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 13192,
    "Zone": 310,
    "Name": "Brno, Jelenice",
    "Latitude": 49.250710,
    "Longitude": 16.485159,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 13193,
    "Zone": 310,
    "Name": "Brno, Kozí horka",
    "Latitude": 49.236499,
    "Longitude": 16.504572,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 13194,
    "Zone": 310,
    "Name": "Brno, Lávka Pod Hradem",
    "Latitude": 49.260157,
    "Longitude": 16.465291,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 13195,
    "Zone": 310,
    "Name": "Brno, Obora",
    "Latitude": 49.255526,
    "Longitude": 16.476006,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 13196,
    "Zone": 310,
    "Name": "Brno, Obora, smyčka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13197,
    "Zone": 310,
    "Name": "Brno, Rokle",
    "Latitude": 49.245682,
    "Longitude": 16.496135,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 13201,
    "Zone": 320,
    "Name": "Čebín, náměstí",
    "Latitude": 49.312885,
    "Longitude": 16.477450,
    "IsPublic": true,
    "LineList": "311,321,330"
  },
  {
    "StopID": 13202,
    "Zone": 320,
    "Name": "Čebín, rozcestí",
    "Latitude": 49.312802,
    "Longitude": 16.484690,
    "IsPublic": true,
    "LineList": "311,314"
  },
  {
    "StopID": 13204,
    "Zone": 320,
    "Name": "Čebín, sídliště",
    "Latitude": 49.316846,
    "Longitude": 16.474095,
    "IsPublic": true,
    "LineList": "175,314,320,321,330"
  },
  {
    "StopID": 13205,
    "Zone": 320,
    "Name": "Čebín, vápenka",
    "Latitude": 49.318149,
    "Longitude": 16.491675,
    "IsPublic": true,
    "LineList": "311"
  },
  {
    "StopID": 13206,
    "Zone": 320,
    "Name": "Čebín, žel.st.",
    "Latitude": 49.319596,
    "Longitude": 16.465897,
    "IsPublic": true,
    "LineList": "130,320,321,330"
  },
  {
    "StopID": 13207,
    "Zone": 320,
    "Name": "Drásov, Siemens",
    "Latitude": 49.327290,
    "Longitude": 16.476888,
    "IsPublic": true,
    "LineList": "314,320,321"
  },
  {
    "StopID": 13208,
    "Zone": 320,
    "Name": "Drásov, most",
    "Latitude": 49.337675,
    "Longitude": 16.480024,
    "IsPublic": true,
    "LineList": "321"
  },
  {
    "StopID": 13209,
    "Zone": 320,
    "Name": "Drásov, náměstí",
    "Latitude": 49.332017,
    "Longitude": 16.478214,
    "IsPublic": true,
    "LineList": "311,320,321"
  },
  {
    "StopID": 13210,
    "Zone": 320,
    "Name": "Malhostovice, náměstí",
    "Latitude": 49.333385,
    "Longitude": 16.501989,
    "IsPublic": true,
    "LineList": "320"
  },
  {
    "StopID": 13211,
    "Zone": 320,
    "Name": "Malhostovice, Nuzířov",
    "Latitude": 49.343685,
    "Longitude": 16.521873,
    "IsPublic": true,
    "LineList": "320"
  },
  {
    "StopID": 13212,
    "Zone": 320,
    "Name": "Malhostovice, rozcestí",
    "Latitude": 49.331455,
    "Longitude": 16.498112,
    "IsPublic": true,
    "LineList": "311,320"
  },
  {
    "StopID": 13213,
    "Zone": 320,
    "Name": "Malhostovice, ZD",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13214,
    "Zone": 325,
    "Name": "Brno, Nové Dvory",
    "Latitude": 49.251482,
    "Longitude": 16.450320,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 13215,
    "Zone": 325,
    "Name": "Brno, U Matky Boží",
    "Latitude": 49.254192,
    "Longitude": 16.453256,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 13217,
    "Zone": 325,
    "Name": "Chudčice",
    "Latitude": 49.287531,
    "Longitude": 16.456819,
    "IsPublic": true,
    "LineList": "153,312"
  },
  {
    "StopID": 13218,
    "Zone": 325,
    "Name": "Chudčice, Delník",
    "Latitude": 49.292692,
    "Longitude": 16.454401,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 13219,
    "Zone": 325,
    "Name": "Chudčice, na hrázi",
    "Latitude": 49.283035,
    "Longitude": 16.455596,
    "IsPublic": true,
    "LineList": "153,312"
  },
  {
    "StopID": 13224,
    "Zone": 325,
    "Name": "Veverská Bítýška, přístav",
    "Latitude": 49.275418,
    "Longitude": 16.452167,
    "IsPublic": true,
    "LineList": "153,312"
  },
  {
    "StopID": 13227,
    "Zone": 325,
    "Name": "Veverská Bítýška, Vápenice",
    "Latitude": 49.244957,
    "Longitude": 16.445980,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 13251,
    "Zone": 325,
    "Name": "Hvozdec",
    "Latitude": 49.247071,
    "Longitude": 16.426336,
    "IsPublic": true,
    "LineList": "153,303"
  },
  {
    "StopID": 13261,
    "Zone": 325,
    "Name": "Veverská Bítýška, hájovna Na Hlince",
    "Latitude": 49.251530,
    "Longitude": 16.429154,
    "IsPublic": true,
    "LineList": "153,303"
  },
  {
    "StopID": 13263,
    "Zone": 325,
    "Name": "Veverská Bítýška, rozcestí Mečkov",
    "Latitude": 49.261050,
    "Longitude": 16.443674,
    "IsPublic": true,
    "LineList": "303"
  },
  {
    "StopID": 13265,
    "Zone": 325,
    "Name": "Vev. Bítýška, nám.",
    "Latitude": 49.276043,
    "Longitude": 16.436098,
    "IsPublic": true,
    "LineList": "153,303,312"
  },
  {
    "StopID": 13269,
    "Zone": 325,
    "Name": "Veverská Bítýška, sídliště",
    "Latitude": 49.269902,
    "Longitude": 16.433448,
    "IsPublic": true,
    "LineList": "153,303"
  },
  {
    "StopID": 13301,
    "Zone": 330,
    "Name": "Březina",
    "Latitude": 49.321472,
    "Longitude": 16.422928,
    "IsPublic": true,
    "LineList": "331"
  },
  {
    "StopID": 13302,
    "Zone": 330,
    "Name": "Heroltice",
    "Latitude": 49.311648,
    "Longitude": 16.412858,
    "IsPublic": true,
    "LineList": "331"
  },
  {
    "StopID": 13303,
    "Zone": 330,
    "Name": "Heroltice, rozcestí",
    "Latitude": 49.319203,
    "Longitude": 16.416328,
    "IsPublic": true,
    "LineList": "331"
  },
  {
    "StopID": 13304,
    "Zone": 330,
    "Name": "Hluboké Dvory",
    "Latitude": 49.382973,
    "Longitude": 16.514133,
    "IsPublic": true,
    "LineList": "332"
  },
  {
    "StopID": 13306,
    "Zone": 330,
    "Name": "Hradčany, železniční stanice",
    "Latitude": 49.333205,
    "Longitude": 16.438194,
    "IsPublic": true,
    "LineList": "130,153,175,314,330,331"
  },
  {
    "StopID": 13307,
    "Zone": 330,
    "Name": "Hradčany",
    "Latitude": 49.328232,
    "Longitude": 16.441969,
    "IsPublic": true,
    "LineList": "153,314,330"
  },
  {
    "StopID": 13308,
    "Zone": 330,
    "Name": "Lomnička, obecní úřad",
    "Latitude": 49.367903,
    "Longitude": 16.429825,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13309,
    "Zone": 330,
    "Name": "Lomnička, u Hamru",
    "Latitude": 49.365984,
    "Longitude": 16.425075,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13310,
    "Zone": 330,
    "Name": "Předklášteří, obecní úřad",
    "Latitude": 49.352526,
    "Longitude": 16.403233,
    "IsPublic": true,
    "LineList": "163,334,335,336"
  },
  {
    "StopID": 13311,
    "Zone": 330,
    "Name": "Předklášteří, papírna",
    "Latitude": 49.351218,
    "Longitude": 16.408248,
    "IsPublic": true,
    "LineList": "163,335,336"
  },
  {
    "StopID": 13312,
    "Zone": 330,
    "Name": "Předklášteří, Zetor šroubárna",
    "Latitude": 49.363236,
    "Longitude": 16.396185,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13313,
    "Zone": 330,
    "Name": "Rohozec",
    "Latitude": 49.390107,
    "Longitude": 16.482793,
    "IsPublic": true,
    "LineList": "332"
  },
  {
    "StopID": 13314,
    "Zone": 330,
    "Name": "Sentice",
    "Latitude": 49.314147,
    "Longitude": 16.452970,
    "IsPublic": true,
    "LineList": "153,330"
  },
  {
    "StopID": 13315,
    "Zone": 330,
    "Name": "Sentice, obecní úřad",
    "Latitude": 49.311867,
    "Longitude": 16.447750,
    "IsPublic": true,
    "LineList": "330"
  },
  {
    "StopID": 13316,
    "Zone": 330,
    "Name": "Sentice, rozcestí",
    "Latitude": 49.323873,
    "Longitude": 16.457293,
    "IsPublic": true,
    "LineList": "153,330"
  },
  {
    "StopID": 13317,
    "Zone": 330,
    "Name": "Skalička, hostinec",
    "Latitude": 49.358295,
    "Longitude": 16.514417,
    "IsPublic": true,
    "LineList": "321"
  },
  {
    "StopID": 13318,
    "Zone": 330,
    "Name": "Skalička, chaloupky",
    "Latitude": 49.357481,
    "Longitude": 16.521578,
    "IsPublic": true,
    "LineList": "321"
  },
  {
    "StopID": 13319,
    "Zone": 330,
    "Name": "Štěpánovice, rozcestí",
    "Latitude": 49.359322,
    "Longitude": 16.399662,
    "IsPublic": true,
    "LineList": "163,334,335,336"
  },
  {
    "StopID": 13320,
    "Zone": 330,
    "Name": "Tišnov, čerpací stanice",
    "Latitude": 49.342135,
    "Longitude": 16.420179,
    "IsPublic": true,
    "LineList": "163,312,331,335,336"
  },
  {
    "StopID": 13321,
    "Zone": 330,
    "Name": "Tišnov, Hájek, Stanovisko rozcestí",
    "Latitude": 49.364978,
    "Longitude": 16.453314,
    "IsPublic": true,
    "LineList": "332"
  },
  {
    "StopID": 13322,
    "Zone": 330,
    "Name": "Tišnov, Hájek, rozcestí",
    "Latitude": 49.372833,
    "Longitude": 16.465503,
    "IsPublic": true,
    "LineList": "332"
  },
  {
    "StopID": 13324,
    "Zone": 330,
    "Name": "Tišnov, Jamné",
    "Latitude": 49.375989,
    "Longitude": 16.467680,
    "IsPublic": true,
    "LineList": "332"
  },
  {
    "StopID": 13326,
    "Zone": 330,
    "Name": "Tišnov, Kukýrna",
    "Latitude": 49.352511,
    "Longitude": 16.425461,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13327,
    "Zone": 330,
    "Name": "Tišnov, Nádražní",
    "Latitude": 49.344912,
    "Longitude": 16.422168,
    "IsPublic": true,
    "LineList": "153,163,311,312,314,330,331,333,335,336"
  },
  {
    "StopID": 13328,
    "Zone": 330,
    "Name": "Tišnov, náměstí",
    "Latitude": 49.349435,
    "Longitude": 16.423238,
    "IsPublic": true,
    "LineList": "331,332,333"
  },
  {
    "StopID": 13329,
    "Zone": 330,
    "Name": "Tišnov, Pejškov",
    "Latitude": 49.316552,
    "Longitude": 16.378515,
    "IsPublic": true,
    "LineList": "331"
  },
  {
    "StopID": 13331,
    "Zone": 330,
    "Name": "Tišnov, Riegrova",
    "Latitude": 49.349942,
    "Longitude": 16.424945,
    "IsPublic": true,
    "LineList": "153,311,312,330,331,332,333,334,336"
  },
  {
    "StopID": 13332,
    "Zone": 330,
    "Name": "Tišnov, sídliště Klucanina",
    "Latitude": 49.340373,
    "Longitude": 16.432865,
    "IsPublic": true,
    "LineList": "153,311,314,330,331"
  },
  {
    "StopID": 13333,
    "Zone": 330,
    "Name": "Tišnov, Trnec",
    "Latitude": 49.336272,
    "Longitude": 16.441295,
    "IsPublic": true,
    "LineList": "311"
  },
  {
    "StopID": 13334,
    "Zone": 330,
    "Name": "Tišnov, žel.st.",
    "Latitude": 49.346805,
    "Longitude": 16.419219,
    "IsPublic": true,
    "LineList": "123,130,131,153,163,175,311,312,314,330,331,332,333,334,335,336"
  },
  {
    "StopID": 13335,
    "Zone": 330,
    "Name": "Unín",
    "Latitude": 49.382742,
    "Longitude": 16.492227,
    "IsPublic": true,
    "LineList": "332"
  },
  {
    "StopID": 13336,
    "Zone": 330,
    "Name": "Unín, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13337,
    "Zone": 330,
    "Name": "Vohančice",
    "Latitude": 49.321844,
    "Longitude": 16.394478,
    "IsPublic": true,
    "LineList": "331"
  },
  {
    "StopID": 13338,
    "Zone": 330,
    "Name": "Vohančice, Závist",
    "Latitude": 49.334312,
    "Longitude": 16.400098,
    "IsPublic": true,
    "LineList": "312,331"
  },
  {
    "StopID": 13339,
    "Zone": 330,
    "Name": "Všechovice",
    "Latitude": 49.357503,
    "Longitude": 16.494357,
    "IsPublic": true,
    "LineList": "321"
  },
  {
    "StopID": 13340,
    "Zone": 330,
    "Name": "Všechovice, rozcestí",
    "Latitude": 49.353690,
    "Longitude": 16.496828,
    "IsPublic": true,
    "LineList": "321"
  },
  {
    "StopID": 13341,
    "Zone": 330,
    "Name": "Železné, obec",
    "Latitude": 49.360132,
    "Longitude": 16.450265,
    "IsPublic": true,
    "LineList": "332"
  },
  {
    "StopID": 13342,
    "Zone": 330,
    "Name": "Železné, u Vitaru",
    "Latitude": 49.356568,
    "Longitude": 16.443518,
    "IsPublic": true,
    "LineList": "332"
  },
  {
    "StopID": 13343,
    "Zone": 335,
    "Name": "Braníškov",
    "Latitude": 49.294719,
    "Longitude": 16.342831,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13344,
    "Zone": 335,
    "Name": "Lažánky, hotel",
    "Latitude": 49.281054,
    "Longitude": 16.391306,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13345,
    "Zone": 335,
    "Name": "Lažánky, Holasice, rozcestí",
    "Latitude": 49.276392,
    "Longitude": 16.405497,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13346,
    "Zone": 335,
    "Name": "Lažánky",
    "Latitude": 49.278741,
    "Longitude": 16.388185,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13347,
    "Zone": 335,
    "Name": "Lažánky, šachty",
    "Latitude": 49.280904,
    "Longitude": 16.373445,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13348,
    "Zone": 335,
    "Name": "Maršov",
    "Latitude": 49.283420,
    "Longitude": 16.360229,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13349,
    "Zone": 335,
    "Name": "Maršov, Vobůrka",
    "Latitude": 49.284480,
    "Longitude": 16.354984,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13350,
    "Zone": 330,
    "Name": "Tišnov, Lomnická",
    "Latitude": 49.355382,
    "Longitude": 16.428726,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13351,
    "Zone": 330,
    "Name": "Tišnov, Rybníček",
    "Latitude": 49.343079,
    "Longitude": 16.429620,
    "IsPublic": true,
    "LineList": "153,311,314,330,331"
  },
  {
    "StopID": 13352,
    "Zone": 330,
    "Name": "Tišnov, Nový hřbitov",
    "Latitude": 49.350648,
    "Longitude": 16.434651,
    "IsPublic": true,
    "LineList": "332"
  },
  {
    "StopID": 13401,
    "Zone": 340,
    "Name": "Borač",
    "Latitude": 49.400717,
    "Longitude": 16.360932,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13402,
    "Zone": 340,
    "Name": "Borač, Vrby",
    "Latitude": 49.396655,
    "Longitude": 16.365591,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13403,
    "Zone": 340,
    "Name": "Lomnice, Brusná, rozcestí",
    "Latitude": 49.392560,
    "Longitude": 16.408758,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13404,
    "Zone": 340,
    "Name": "Lomnice, Řepka",
    "Latitude": 49.386294,
    "Longitude": 16.412417,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13405,
    "Zone": 340,
    "Name": "Dolní Loučky, hájenka",
    "Latitude": 49.349228,
    "Longitude": 16.347000,
    "IsPublic": true,
    "LineList": "163"
  },
  {
    "StopID": 13406,
    "Zone": 340,
    "Name": "Dolní Loučky, Chytálky, rozcestí",
    "Latitude": 49.345551,
    "Longitude": 16.341482,
    "IsPublic": true,
    "LineList": "163"
  },
  {
    "StopID": 13407,
    "Zone": 340,
    "Name": "Dolní Loučky, Mezihoří",
    "Latitude": 49.360630,
    "Longitude": 16.361338,
    "IsPublic": true,
    "LineList": "163,335,336"
  },
  {
    "StopID": 13409,
    "Zone": 340,
    "Name": "Dolní Loučky, Střemchoví",
    "Latitude": 49.362060,
    "Longitude": 16.369694,
    "IsPublic": true,
    "LineList": "163,335,336"
  },
  {
    "StopID": 13410,
    "Zone": 340,
    "Name": "Dolní Loučky, šk.",
    "Latitude": 49.361334,
    "Longitude": 16.354375,
    "IsPublic": true,
    "LineList": "163,335,336"
  },
  {
    "StopID": 13411,
    "Zone": 340,
    "Name": "Dolní Loučky, železniční stanice",
    "Latitude": 49.357389,
    "Longitude": 16.347245,
    "IsPublic": true,
    "LineList": "130,336"
  },
  {
    "StopID": 13412,
    "Zone": 340,
    "Name": "Horní Loučky, obecní úřad",
    "Latitude": 49.366992,
    "Longitude": 16.341324,
    "IsPublic": true,
    "LineList": "336"
  },
  {
    "StopID": 13413,
    "Zone": 340,
    "Name": "Kaly",
    "Latitude": 49.377835,
    "Longitude": 16.352718,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13414,
    "Zone": 340,
    "Name": "Kaly, Zahrada, rozcestí",
    "Latitude": 49.372110,
    "Longitude": 16.364934,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13415,
    "Zone": 340,
    "Name": "Kuřimské Jestřabí",
    "Latitude": 49.345121,
    "Longitude": 16.312082,
    "IsPublic": true,
    "LineList": "163"
  },
  {
    "StopID": 13416,
    "Zone": 340,
    "Name": "Kuřimská Nová Ves",
    "Latitude": 49.344115,
    "Longitude": 16.298895,
    "IsPublic": true,
    "LineList": "163"
  },
  {
    "StopID": 13418,
    "Zone": 340,
    "Name": "Lomnice, internát",
    "Latitude": 49.411482,
    "Longitude": 16.419356,
    "IsPublic": true,
    "LineList": "235,332,333"
  },
  {
    "StopID": 13419,
    "Zone": 340,
    "Name": "Lomnice, nám.",
    "Latitude": 49.403439,
    "Longitude": 16.414087,
    "IsPublic": true,
    "LineList": "235,332,333,340"
  },
  {
    "StopID": 13420,
    "Zone": 340,
    "Name": "Lomnice, škola",
    "Latitude": 49.400940,
    "Longitude": 16.408116,
    "IsPublic": true,
    "LineList": "235,332,333,340"
  },
  {
    "StopID": 13421,
    "Zone": 340,
    "Name": "Lomnice, Družstevní",
    "Latitude": 49.410190,
    "Longitude": 16.408294,
    "IsPublic": true,
    "LineList": "235,332,333,340"
  },
  {
    "StopID": 13422,
    "Zone": 340,
    "Name": "Ochoz u Tišnova",
    "Latitude": 49.427442,
    "Longitude": 16.393607,
    "IsPublic": true,
    "LineList": "340"
  },
  {
    "StopID": 13423,
    "Zone": 340,
    "Name": "Pernštejnské Jestřabí, Jilmoví, rozcestí",
    "Latitude": 49.393997,
    "Longitude": 16.329382,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13424,
    "Zone": 340,
    "Name": "Pernštejnské Jestřabí, rozcestí",
    "Latitude": 49.401448,
    "Longitude": 16.323877,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13425,
    "Zone": 340,
    "Name": "Řikonín, žel.st.",
    "Latitude": 49.365663,
    "Longitude": 16.307352,
    "IsPublic": true,
    "LineList": "130,336,350"
  },
  {
    "StopID": 13426,
    "Zone": 340,
    "Name": "Skryje",
    "Latitude": 49.392942,
    "Longitude": 16.311338,
    "IsPublic": true,
    "LineList": "336"
  },
  {
    "StopID": 13427,
    "Zone": 340,
    "Name": "Skryje, Arka a.s.",
    "Latitude": 49.380247,
    "Longitude": 16.317942,
    "IsPublic": true,
    "LineList": "336"
  },
  {
    "StopID": 13428,
    "Zone": 340,
    "Name": "Skryje, Boudy",
    "Latitude": 49.384268,
    "Longitude": 16.312363,
    "IsPublic": true,
    "LineList": "336"
  },
  {
    "StopID": 13429,
    "Zone": 340,
    "Name": "Skryje, rozcestí",
    "Latitude": 49.373298,
    "Longitude": 16.315118,
    "IsPublic": true,
    "LineList": "336"
  },
  {
    "StopID": 13430,
    "Zone": 340,
    "Name": "Strhaře",
    "Latitude": 49.435563,
    "Longitude": 16.436468,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13431,
    "Zone": 340,
    "Name": "Strhaře, rozcestí",
    "Latitude": 49.426007,
    "Longitude": 16.426024,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13432,
    "Zone": 340,
    "Name": "Strhaře, Žleby, kamenolom",
    "Latitude": 49.439560,
    "Longitude": 16.425950,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13433,
    "Zone": 340,
    "Name": "Strhaře, Žleby, pila",
    "Latitude": 49.429936,
    "Longitude": 16.428152,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13434,
    "Zone": 340,
    "Name": "Synalov",
    "Latitude": 49.432263,
    "Longitude": 16.413870,
    "IsPublic": true,
    "LineList": "340"
  },
  {
    "StopID": 13435,
    "Zone": 340,
    "Name": "Synalov, rozcestí",
    "Latitude": 49.420153,
    "Longitude": 16.398867,
    "IsPublic": true,
    "LineList": "340"
  },
  {
    "StopID": 13436,
    "Zone": 340,
    "Name": "Šerkovice",
    "Latitude": 49.385972,
    "Longitude": 16.429794,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13437,
    "Zone": 340,
    "Name": "Štěpánovice, h.k.",
    "Latitude": 49.378987,
    "Longitude": 16.379521,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13438,
    "Zone": 340,
    "Name": "Štěpánovice, obecní úřad",
    "Latitude": 49.372419,
    "Longitude": 16.388198,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13439,
    "Zone": 340,
    "Name": "Tišnovská Nová Ves",
    "Latitude": 49.383768,
    "Longitude": 16.293142,
    "IsPublic": true,
    "LineList": "336"
  },
  {
    "StopID": 13440,
    "Zone": 340,
    "Name": "Tišnovská Nová Ves, rozcestí",
    "Latitude": 49.367938,
    "Longitude": 16.318267,
    "IsPublic": true,
    "LineList": "336"
  },
  {
    "StopID": 13441,
    "Zone": 340,
    "Name": "Újezd u Tišnova",
    "Latitude": 49.365685,
    "Longitude": 16.323372,
    "IsPublic": true,
    "LineList": "336"
  },
  {
    "StopID": 13442,
    "Zone": 340,
    "Name": "Újezd u Tišnova, závod",
    "Latitude": 49.361347,
    "Longitude": 16.331313,
    "IsPublic": true,
    "LineList": "336"
  },
  {
    "StopID": 13443,
    "Zone": 340,
    "Name": "Žďárec, Ostrov",
    "Latitude": 49.374226,
    "Longitude": 16.279618,
    "IsPublic": true,
    "LineList": "336,350"
  },
  {
    "StopID": 13444,
    "Zone": 345,
    "Name": "Deblín, myslivna",
    "Latitude": 49.311700,
    "Longitude": 16.329960,
    "IsPublic": true,
    "LineList": "312,411"
  },
  {
    "StopID": 13445,
    "Zone": 345,
    "Name": "Deblín, ObÚ",
    "Latitude": 49.320404,
    "Longitude": 16.345811,
    "IsPublic": true,
    "LineList": "312,331,411"
  },
  {
    "StopID": 13446,
    "Zone": 345,
    "Name": "Deblín, Pod cihelnou",
    "Latitude": 49.322102,
    "Longitude": 16.350949,
    "IsPublic": true,
    "LineList": "312,331,411"
  },
  {
    "StopID": 13447,
    "Zone": 345,
    "Name": "Deblín, zemědělské družstvo",
    "Latitude": 49.318813,
    "Longitude": 16.337792,
    "IsPublic": true,
    "LineList": "312,331,411"
  },
  {
    "StopID": 13448,
    "Zone": 345,
    "Name": "Katov",
    "Latitude": 49.332765,
    "Longitude": 16.280015,
    "IsPublic": true,
    "LineList": "163"
  },
  {
    "StopID": 13449,
    "Zone": 345,
    "Name": "Křižínkov",
    "Latitude": 49.324868,
    "Longitude": 16.269850,
    "IsPublic": true,
    "LineList": "163"
  },
  {
    "StopID": 13450,
    "Zone": 345,
    "Name": "Lubné",
    "Latitude": 49.353712,
    "Longitude": 16.275280,
    "IsPublic": true,
    "LineList": "163"
  },
  {
    "StopID": 13452,
    "Zone": 345,
    "Name": "Nelepeč, Žernůvka",
    "Latitude": 49.333125,
    "Longitude": 16.387765,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13453,
    "Zone": 345,
    "Name": "Níhov",
    "Latitude": 49.342059,
    "Longitude": 16.258953,
    "IsPublic": true,
    "LineList": "163"
  },
  {
    "StopID": 13454,
    "Zone": 345,
    "Name": "Níhov, žel.st.",
    "Latitude": 49.335893,
    "Longitude": 16.269655,
    "IsPublic": true,
    "LineList": "130,163"
  },
  {
    "StopID": 13455,
    "Zone": 345,
    "Name": "Kuřimská Nová Ves, Prosatín, rozcestí",
    "Latitude": 49.339120,
    "Longitude": 16.294157,
    "IsPublic": true,
    "LineList": "163"
  },
  {
    "StopID": 13457,
    "Zone": 345,
    "Name": "Svatoslav, hájenka",
    "Latitude": 49.311658,
    "Longitude": 16.315907,
    "IsPublic": true,
    "LineList": "312,411"
  },
  {
    "StopID": 13458,
    "Zone": 345,
    "Name": "Svatoslav, horní konec",
    "Latitude": 49.304095,
    "Longitude": 16.312546,
    "IsPublic": true,
    "LineList": "312,411"
  },
  {
    "StopID": 13459,
    "Zone": 345,
    "Name": "Svatoslav, obecní úřad",
    "Latitude": 49.301606,
    "Longitude": 16.308603,
    "IsPublic": true,
    "LineList": "312,411"
  },
  {
    "StopID": 13460,
    "Zone": 345,
    "Name": "Úsuší",
    "Latitude": 49.334512,
    "Longitude": 16.355700,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13461,
    "Zone": 345,
    "Name": "Úsuší, Čížky",
    "Latitude": 49.328030,
    "Longitude": 16.366757,
    "IsPublic": true,
    "LineList": "312"
  },
  {
    "StopID": 13462,
    "Zone": 340,
    "Name": "Štěpánovice",
    "Latitude": 49.374444,
    "Longitude": 16.388056,
    "IsPublic": true,
    "LineList": "131"
  },
  {
    "StopID": 13463,
    "Zone": 340,
    "Name": "Borač, žel. st.",
    "Latitude": 49.400144,
    "Longitude": 16.366389,
    "IsPublic": true,
    "LineList": "131"
  },
  {
    "StopID": 13464,
    "Zone": 340,
    "Name": "Prudká zastávka",
    "Latitude": 49.419194,
    "Longitude": 16.367361,
    "IsPublic": true,
    "LineList": "131"
  },
  {
    "StopID": 13465,
    "Zone": 340,
    "Name": "Lomnice, Brusná",
    "Latitude": 49.393247,
    "Longitude": 16.399719,
    "IsPublic": true,
    "LineList": "333"
  },
  {
    "StopID": 13466,
    "Zone": 345,
    "Name": "Deblín, škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13467,
    "Zone": 340,
    "Name": "Pernštejnské Jestřabí, Maňová",
    "Latitude": 49.415564,
    "Longitude": 16.332006,
    "IsPublic": true,
    "LineList": "340"
  },
  {
    "StopID": 13468,
    "Zone": 340,
    "Name": "Dolní Loučky, orl.",
    "Latitude": 49.361884,
    "Longitude": 16.353911,
    "IsPublic": true,
    "LineList": "336"
  },
  {
    "StopID": 13501,
    "Zone": 350,
    "Name": "Běleč",
    "Latitude": 49.433229,
    "Longitude": 16.384300,
    "IsPublic": true,
    "LineList": "340"
  },
  {
    "StopID": 13502,
    "Zone": 350,
    "Name": "Běleč, dolní konec",
    "Latitude": 49.428424,
    "Longitude": 16.375960,
    "IsPublic": true,
    "LineList": "340"
  },
  {
    "StopID": 13503,
    "Zone": 350,
    "Name": "Běleč, Křeptov",
    "Latitude": 49.440602,
    "Longitude": 16.378132,
    "IsPublic": true,
    "LineList": "340"
  },
  {
    "StopID": 13504,
    "Zone": 350,
    "Name": "Doubravník, náměstí",
    "Latitude": 49.424575,
    "Longitude": 16.351759,
    "IsPublic": true,
    "LineList": "334,340"
  },
  {
    "StopID": 13505,
    "Zone": 350,
    "Name": "Doubravník, Prudká, rozcestí",
    "Latitude": 49.421984,
    "Longitude": 16.370048,
    "IsPublic": true,
    "LineList": "340"
  },
  {
    "StopID": 13506,
    "Zone": 350,
    "Name": "Doubravník, železniční stanice",
    "Latitude": 49.427615,
    "Longitude": 16.352198,
    "IsPublic": true,
    "LineList": "131,340"
  },
  {
    "StopID": 13507,
    "Zone": 350,
    "Name": "Drahonín",
    "Latitude": 49.413092,
    "Longitude": 16.277102,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13508,
    "Zone": 350,
    "Name": "Olší",
    "Latitude": 49.421758,
    "Longitude": 16.291287,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13509,
    "Zone": 350,
    "Name": "Olší, Klokočí, rozcestí",
    "Latitude": 49.412668,
    "Longitude": 16.306297,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13510,
    "Zone": 350,
    "Name": "Olší, Litava",
    "Latitude": 49.410388,
    "Longitude": 16.312237,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13511,
    "Zone": 355,
    "Name": "Borovník",
    "Latitude": 49.355849,
    "Longitude": 16.229482,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13512,
    "Zone": 355,
    "Name": "Rojetín, rozcestí",
    "Latitude": 49.370438,
    "Longitude": 16.254441,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13513,
    "Zone": 355,
    "Name": "Rozseč",
    "Latitude": 49.360127,
    "Longitude": 16.221967,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13514,
    "Zone": 355,
    "Name": "Vidonín",
    "Latitude": 49.379702,
    "Longitude": 16.221743,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13515,
    "Zone": 355,
    "Name": "Vidonín, rozcestí",
    "Latitude": 49.375700,
    "Longitude": 16.220140,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13516,
    "Zone": 355,
    "Name": "Vratislávka",
    "Latitude": 49.386806,
    "Longitude": 16.248536,
    "IsPublic": true,
    "LineList": "336,350,358,359"
  },
  {
    "StopID": 13517,
    "Zone": 355,
    "Name": "Žďárec, náměstí",
    "Latitude": 49.379579,
    "Longitude": 16.267219,
    "IsPublic": true,
    "LineList": "336,350"
  },
  {
    "StopID": 13518,
    "Zone": 355,
    "Name": "Žďárec, u kostela",
    "Latitude": 49.376253,
    "Longitude": 16.264473,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13520,
    "Zone": 350,
    "Name": "Nedvědice, žel.st.",
    "Latitude": 49.454427,
    "Longitude": 16.337335,
    "IsPublic": true,
    "LineList": "131,335"
  },
  {
    "StopID": 13521,
    "Zone": 355,
    "Name": "Rojetín",
    "Latitude": 49.367423,
    "Longitude": 16.257195,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13522,
    "Zone": 350,
    "Name": "Nedvědice, náměstí",
    "Latitude": 49.457083,
    "Longitude": 16.334446,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13523,
    "Zone": 350,
    "Name": "Nedvědice, škola",
    "Latitude": 49.456054,
    "Longitude": 16.332550,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13524,
    "Zone": 350,
    "Name": "Nedvědice, u zdrav.stř.",
    "Latitude": 49.454088,
    "Longitude": 16.330866,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13525,
    "Zone": 350,
    "Name": "Nedvědice, rozcestí Sejřek",
    "Latitude": 49.453187,
    "Longitude": 16.335985,
    "IsPublic": true,
    "LineList": "334,335"
  },
  {
    "StopID": 13526,
    "Zone": 350,
    "Name": "Sejřek, Bor, rozc.",
    "Latitude": 49.432262,
    "Longitude": 16.289314,
    "IsPublic": true,
    "LineList": "335,355"
  },
  {
    "StopID": 13527,
    "Zone": 350,
    "Name": "Sejřek, Bor",
    "Latitude": 49.438214,
    "Longitude": 16.289248,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13528,
    "Zone": 350,
    "Name": "Sejřek, zbrojnice",
    "Latitude": 49.435866,
    "Longitude": 16.308854,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13529,
    "Zone": 350,
    "Name": "Sejřek, Mansberk",
    "Latitude": 49.438187,
    "Longitude": 16.316116,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13530,
    "Zone": 350,
    "Name": "Sejřek, u dvora",
    "Latitude": 49.442745,
    "Longitude": 16.320028,
    "IsPublic": true,
    "LineList": "335"
  },
  {
    "StopID": 13531,
    "Zone": 350,
    "Name": "Černvír",
    "Latitude": 49.444866,
    "Longitude": 16.346458,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13532,
    "Zone": 350,
    "Name": "Nedvědice, Pernštejn, u studánky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13533,
    "Zone": 350,
    "Name": "Nedvědice, Pernštejn, u mostku",
    "Latitude": 49.452656,
    "Longitude": 16.325211,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13534,
    "Zone": 350,
    "Name": "Doubravník, Štěpnice",
    "Latitude": 49.419008,
    "Longitude": 16.351986,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13535,
    "Zone": 350,
    "Name": "Nedvědice, Pernštejn, hrad",
    "Latitude": 49.453657,
    "Longitude": 16.313606,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13536,
    "Zone": 0,
    "Name": "Nedvědice, rozcestí Skorotice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13601,
    "Zone": 365,
    "Name": "Heřmanov",
    "Latitude": 49.379850,
    "Longitude": 16.181983,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13602,
    "Zone": 365,
    "Name": "Milešín",
    "Latitude": 49.368178,
    "Longitude": 16.202088,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13603,
    "Zone": 365,
    "Name": "Nová Ves",
    "Latitude": 49.390687,
    "Longitude": 16.196008,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13604,
    "Zone": 365,
    "Name": "Radňoves",
    "Latitude": 49.388153,
    "Longitude": 16.214103,
    "IsPublic": true,
    "LineList": "350"
  },
  {
    "StopID": 13605,
    "Zone": 360,
    "Name": "Rožná, železniční stanice",
    "Latitude": 49.472143,
    "Longitude": 16.245416,
    "IsPublic": true,
    "LineList": "131"
  },
  {
    "StopID": 13606,
    "Zone": 360,
    "Name": "Střítež, hájenka",
    "Latitude": 49.433158,
    "Longitude": 16.275532,
    "IsPublic": true,
    "LineList": "355"
  },
  {
    "StopID": 13607,
    "Zone": 360,
    "Name": "Střítež, rozcestí Moravecké Pavlovice",
    "Latitude": 49.434511,
    "Longitude": 16.264074,
    "IsPublic": true,
    "LineList": "355"
  },
  {
    "StopID": 13608,
    "Zone": 360,
    "Name": "Moravecké Pavlovice",
    "Latitude": 49.427958,
    "Longitude": 16.256271,
    "IsPublic": true,
    "LineList": "355"
  },
  {
    "StopID": 13609,
    "Zone": 360,
    "Name": "Střítež",
    "Latitude": 49.440949,
    "Longitude": 16.258227,
    "IsPublic": true,
    "LineList": "355"
  },
  {
    "StopID": 13610,
    "Zone": 360,
    "Name": "Bukov, rozcestí",
    "Latitude": 49.461266,
    "Longitude": 16.227242,
    "IsPublic": true,
    "LineList": "355"
  },
  {
    "StopID": 13611,
    "Zone": 360,
    "Name": "Bukov",
    "Latitude": 49.454931,
    "Longitude": 16.224250,
    "IsPublic": true,
    "LineList": "355"
  },
  {
    "StopID": 13612,
    "Zone": 360,
    "Name": "Bukov, šachta",
    "Latitude": 49.463568,
    "Longitude": 16.219284,
    "IsPublic": true,
    "LineList": "355"
  },
  {
    "StopID": 13613,
    "Zone": 365,
    "Name": "Strážek, Moravecké Janovice, rozcestí",
    "Latitude": 49.405719,
    "Longitude": 16.228902,
    "IsPublic": true,
    "LineList": "358,359"
  },
  {
    "StopID": 13614,
    "Zone": 365,
    "Name": "Strážek, Moravecké Janovice",
    "Latitude": 49.411290,
    "Longitude": 16.244931,
    "IsPublic": true,
    "LineList": "359"
  },
  {
    "StopID": 13615,
    "Zone": 365,
    "Name": "Strážek, Meziboří, rozcestí",
    "Latitude": 49.415037,
    "Longitude": 16.222159,
    "IsPublic": true,
    "LineList": "358,359"
  },
  {
    "StopID": 13616,
    "Zone": 365,
    "Name": "Strážek, Krčma",
    "Latitude": 49.419251,
    "Longitude": 16.217208,
    "IsPublic": true,
    "LineList": "358,359"
  },
  {
    "StopID": 13617,
    "Zone": 365,
    "Name": "Strážek, rozcestí Radkovičky",
    "Latitude": 49.427355,
    "Longitude": 16.202533,
    "IsPublic": true,
    "LineList": "358,359"
  },
  {
    "StopID": 13618,
    "Zone": 365,
    "Name": "Strážek, u kostela",
    "Latitude": 49.439073,
    "Longitude": 16.195103,
    "IsPublic": true,
    "LineList": "358,359"
  },
  {
    "StopID": 13619,
    "Zone": 365,
    "Name": "Strážek",
    "Latitude": 49.441042,
    "Longitude": 16.192107,
    "IsPublic": true,
    "LineList": "358,359"
  },
  {
    "StopID": 13620,
    "Zone": 365,
    "Name": "Blažkov, Dolní Rozsíčka",
    "Latitude": 49.456042,
    "Longitude": 16.194731,
    "IsPublic": true,
    "LineList": "358"
  },
  {
    "StopID": 13621,
    "Zone": 365,
    "Name": "Strážek, Jemnice",
    "Latitude": 49.439678,
    "Longitude": 16.172801,
    "IsPublic": true,
    "LineList": "359"
  },
  {
    "StopID": 13622,
    "Zone": 360,
    "Name": "Věžná, rozcestí Bor",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13623,
    "Zone": 360,
    "Name": "Věžná",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13624,
    "Zone": 360,
    "Name": "Věžná, Jabloňov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13625,
    "Zone": 360,
    "Name": "Milasín, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13626,
    "Zone": 360,
    "Name": "Býšovec, Smrček",
    "Latitude": 49.458554,
    "Longitude": 16.306014,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13627,
    "Zone": 360,
    "Name": "Býšovec",
    "Latitude": 49.475588,
    "Longitude": 16.288634,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13628,
    "Zone": 360,
    "Name": "Věchnov, rozcestí lom",
    "Latitude": 49.495274,
    "Longitude": 16.285670,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13629,
    "Zone": 360,
    "Name": "Věchnov, u rybníka",
    "Latitude": 49.498436,
    "Longitude": 16.279772,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13630,
    "Zone": 370,
    "Name": "Bystřice nad Pern., rozcestí Věchnov",
    "Latitude": 49.513680,
    "Longitude": 16.260900,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13631,
    "Zone": 0,
    "Name": "Ujčov, Bořinov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13632,
    "Zone": 0,
    "Name": "Ujčov, Kasany",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13633,
    "Zone": 0,
    "Name": "Ujčov, u hřiště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13634,
    "Zone": 0,
    "Name": "Ujčov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13635,
    "Zone": 0,
    "Name": "Štěpánov nad Svratkou, závod",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13636,
    "Zone": 0,
    "Name": "Štěpánov nad Svratkou, rozc. závod",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13637,
    "Zone": 0,
    "Name": "Štěpánov nad Svratkou, náměstí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13701,
    "Zone": 370,
    "Name": "Bystřice n/P., žel.st.",
    "Latitude": 49.513545,
    "Longitude": 16.247490,
    "IsPublic": true,
    "LineList": "131,370"
  },
  {
    "StopID": 13702,
    "Zone": 370,
    "Name": "Dolní Rožínka, dílny",
    "Latitude": 49.471842,
    "Longitude": 16.209322,
    "IsPublic": true,
    "LineList": "355"
  },
  {
    "StopID": 13703,
    "Zone": 370,
    "Name": "Dolní Rožínka, aut.st.",
    "Latitude": 49.475509,
    "Longitude": 16.207128,
    "IsPublic": true,
    "LineList": "355,358"
  },
  {
    "StopID": 13704,
    "Zone": 370,
    "Name": "Dolní Rožínka, sídliště",
    "Latitude": 49.478306,
    "Longitude": 16.211074,
    "IsPublic": true,
    "LineList": "355,358"
  },
  {
    "StopID": 13705,
    "Zone": 370,
    "Name": "Dolní Rožínka, jáma R4",
    "Latitude": 49.485138,
    "Longitude": 16.210682,
    "IsPublic": true,
    "LineList": "355,358"
  },
  {
    "StopID": 13706,
    "Zone": 370,
    "Name": "Rožná, šachta K. H. Borovský",
    "Latitude": 49.481872,
    "Longitude": 16.217996,
    "IsPublic": true,
    "LineList": "355,358"
  },
  {
    "StopID": 13707,
    "Zone": 370,
    "Name": "Dolní Rožínka, Horní Rozsíčka, rozcestí",
    "Latitude": 49.463429,
    "Longitude": 16.198529,
    "IsPublic": true,
    "LineList": "358"
  },
  {
    "StopID": 13708,
    "Zone": 370,
    "Name": "Rožná, Diamo",
    "Latitude": 49.495954,
    "Longitude": 16.228020,
    "IsPublic": true,
    "LineList": "358"
  },
  {
    "StopID": 13709,
    "Zone": 375,
    "Name": "Radkov, Radkovičky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13710,
    "Zone": 375,
    "Name": "Radkov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13711,
    "Zone": 375,
    "Name": "Moravec, Bažantnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13712,
    "Zone": 375,
    "Name": "Moravec, rozcestí Radkov",
    "Latitude": 49.438641,
    "Longitude": 16.153749,
    "IsPublic": true,
    "LineList": "359"
  },
  {
    "StopID": 13713,
    "Zone": 375,
    "Name": "Moravec",
    "Latitude": 49.439282,
    "Longitude": 16.143173,
    "IsPublic": true,
    "LineList": "359"
  },
  {
    "StopID": 13714,
    "Zone": 370,
    "Name": "Bystřice n/P., Černý vršek",
    "Latitude": 49.528480,
    "Longitude": 16.243963,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13715,
    "Zone": 370,
    "Name": "Bystřice n/P., DPS",
    "Latitude": 49.525302,
    "Longitude": 16.250398,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13716,
    "Zone": 370,
    "Name": "Bystřice n/P., gymnázium",
    "Latitude": 49.518186,
    "Longitude": 16.259108,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13717,
    "Zone": 370,
    "Name": "Bystřice n/P., hřbitov",
    "Latitude": 49.525823,
    "Longitude": 16.255462,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13718,
    "Zone": 370,
    "Name": "Bystřice n/P., kotelna",
    "Latitude": 49.519362,
    "Longitude": 16.262274,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13719,
    "Zone": 370,
    "Name": "Bystřice n/P., kulturní dům",
    "Latitude": 49.523275,
    "Longitude": 16.253980,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13720,
    "Zone": 370,
    "Name": "Bystřice n/P., lihovar",
    "Latitude": 49.521609,
    "Longitude": 16.260784,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13721,
    "Zone": 370,
    "Name": "Bystřice n/P., Masarykovo náměstí",
    "Latitude": 49.523433,
    "Longitude": 16.260112,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13722,
    "Zone": 370,
    "Name": "Bystřice n/P., poliklinika",
    "Latitude": 49.524697,
    "Longitude": 16.262204,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13723,
    "Zone": 370,
    "Name": "Bystřice n/P., Rovinky",
    "Latitude": 49.527434,
    "Longitude": 16.245654,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13724,
    "Zone": 370,
    "Name": "Bystřice n/P., sídliště I",
    "Latitude": 49.516207,
    "Longitude": 16.260727,
    "IsPublic": true,
    "LineList": "334,370"
  },
  {
    "StopID": 13725,
    "Zone": 370,
    "Name": "Bystřice n/P., sídliště II",
    "Latitude": 49.527033,
    "Longitude": 16.250829,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13726,
    "Zone": 370,
    "Name": "Bystřice n/P., u mostu",
    "Latitude": 49.521673,
    "Longitude": 16.267837,
    "IsPublic": true,
    "LineList": "334,370"
  },
  {
    "StopID": 13727,
    "Zone": 370,
    "Name": "Bystřice n/P., u závodu",
    "Latitude": 49.512900,
    "Longitude": 16.252244,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13728,
    "Zone": 370,
    "Name": "Bystřice n/P., Voldán",
    "Latitude": 49.523411,
    "Longitude": 16.266288,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13729,
    "Zone": 370,
    "Name": "Bystřice n/P., zahradnictví",
    "Latitude": 49.525743,
    "Longitude": 16.259495,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13730,
    "Zone": 370,
    "Name": "Bystřice n/P., Bratrušín",
    "Latitude": 49.514675,
    "Longitude": 16.274628,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13731,
    "Zone": 370,
    "Name": "Bystřice n/P., Domanín",
    "Latitude": 49.545506,
    "Longitude": 16.228498,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13732,
    "Zone": 370,
    "Name": "Bystřice n/P., Domanín, Jednota",
    "Latitude": 49.541648,
    "Longitude": 16.234393,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13733,
    "Zone": 370,
    "Name": "Bystřice n/P., Domanín, rozcestí",
    "Latitude": 49.529200,
    "Longitude": 16.245992,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13734,
    "Zone": 370,
    "Name": "Bystřice n/P., Domanín, U Šejnohů",
    "Latitude": 49.538662,
    "Longitude": 16.238029,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13735,
    "Zone": 370,
    "Name": "Bystřice n/P., Domanínek",
    "Latitude": 49.528545,
    "Longitude": 16.240941,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13736,
    "Zone": 370,
    "Name": "Bystřice n/P., Domanínek, rozcestí",
    "Latitude": 49.529657,
    "Longitude": 16.240220,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13737,
    "Zone": 370,
    "Name": "Rožná, drtírna R3",
    "Latitude": 49.496692,
    "Longitude": 16.217032,
    "IsPublic": true,
    "LineList": "358"
  },
  {
    "StopID": 13738,
    "Zone": 370,
    "Name": "Blažkov, rozcestí Jasan",
    "Latitude": 49.493239,
    "Longitude": 16.209161,
    "IsPublic": true,
    "LineList": "358"
  },
  {
    "StopID": 13739,
    "Zone": 370,
    "Name": "Bystřice nad Pern., Výrobní",
    "Latitude": 49.513852,
    "Longitude": 16.244187,
    "IsPublic": true,
    "LineList": "370"
  },
  {
    "StopID": 13740,
    "Zone": 370,
    "Name": "Bystřice nad Pern., Novoměstská",
    "Latitude": 49.528048,
    "Longitude": 16.249750,
    "IsPublic": true,
    "LineList": "334,370"
  },
  {
    "StopID": 13741,
    "Zone": 380,
    "Name": "Bystřice nad Pernštejnem, Rovné",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13742,
    "Zone": 370,
    "Name": "Bystřice n/P., a. n.",
    "Latitude": 49.526292,
    "Longitude": 16.260560,
    "IsPublic": true,
    "LineList": "334"
  },
  {
    "StopID": 13743,
    "Zone": 0,
    "Name": "Bystřice nad Pern., Kozlov, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13744,
    "Zone": 0,
    "Name": "Bystřice nad Pern., Lesoňovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13745,
    "Zone": 0,
    "Name": "Bystřice nad Pern., Pivonice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13746,
    "Zone": 0,
    "Name": "Bystřice nad Pern., rozcestí Janovičky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13801,
    "Zone": 380,
    "Name": "Rozsochy, železniční stanice",
    "Latitude": 49.537385,
    "Longitude": 16.195122,
    "IsPublic": true,
    "LineList": "131"
  },
  {
    "StopID": 13802,
    "Zone": 0,
    "Name": "Bohuňov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13803,
    "Zone": 0,
    "Name": "Lísek",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13804,
    "Zone": 0,
    "Name": "Lísek, Skalský Dvůr",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13901,
    "Zone": 999,
    "Name": "Garáž Moravec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 13902,
    "Zone": 999,
    "Name": "BDS-BUS Velká Bíteš",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14001,
    "Zone": 446,
    "Name": "Březník",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14002,
    "Zone": 446,
    "Name": "Březník, Horky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14003,
    "Zone": 446,
    "Name": "Kuroslepy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14004,
    "Zone": 446,
    "Name": "Kuroslepy, pila",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14005,
    "Zone": 446,
    "Name": "Kuroslepy, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14006,
    "Zone": 446,
    "Name": "Kuroslepy, u mlýna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14009,
    "Zone": 449,
    "Name": "Branišovice, Kanada",
    "Latitude": 48.961572,
    "Longitude": 16.432311,
    "IsPublic": true,
    "LineList": "450"
  },
  {
    "StopID": 14010,
    "Zone": 449,
    "Name": "Branišovice, p.",
    "Latitude": 48.961796,
    "Longitude": 16.428626,
    "IsPublic": true,
    "LineList": "450"
  },
  {
    "StopID": 14011,
    "Zone": 449,
    "Name": "Branišovice, státní silnice",
    "Latitude": 48.959135,
    "Longitude": 16.429386,
    "IsPublic": true,
    "LineList": "108,450"
  },
  {
    "StopID": 14012,
    "Zone": 449,
    "Name": "Kubšice, křižovatka",
    "Latitude": 49.001998,
    "Longitude": 16.408543,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 14014,
    "Zone": 449,
    "Name": "Loděnice, křižovatka Šumická",
    "Latitude": 49.011128,
    "Longitude": 16.458541,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 14015,
    "Zone": 449,
    "Name": "Loděnice, obecní úřad",
    "Latitude": 49.011484,
    "Longitude": 16.463219,
    "IsPublic": true,
    "LineList": "164,446"
  },
  {
    "StopID": 14016,
    "Zone": 449,
    "Name": "Loděnice, škola",
    "Latitude": 49.011772,
    "Longitude": 16.468037,
    "IsPublic": true,
    "LineList": "164,446"
  },
  {
    "StopID": 14018,
    "Zone": 449,
    "Name": "Olbramovice, prodejna",
    "Latitude": 48.989883,
    "Longitude": 16.395776,
    "IsPublic": true,
    "LineList": "164,450"
  },
  {
    "StopID": 14019,
    "Zone": 449,
    "Name": "Olbramovice, rest.",
    "Latitude": 48.984200,
    "Longitude": 16.400764,
    "IsPublic": true,
    "LineList": "164,450"
  },
  {
    "StopID": 14020,
    "Zone": 449,
    "Name": "Olbramovice, samota",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14022,
    "Zone": 449,
    "Name": "Šumice, škola",
    "Latitude": 48.991759,
    "Longitude": 16.437271,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 14023,
    "Zone": 449,
    "Name": "Trnové Pole",
    "Latitude": 48.945566,
    "Longitude": 16.409677,
    "IsPublic": true,
    "LineList": "450"
  },
  {
    "StopID": 14024,
    "Zone": 449,
    "Name": "Trnové Pole, rozcestí",
    "Latitude": 48.955230,
    "Longitude": 16.413587,
    "IsPublic": true,
    "LineList": "108"
  },
  {
    "StopID": 14025,
    "Zone": 449,
    "Name": "Vedrovice, obecní úřad",
    "Latitude": 49.019952,
    "Longitude": 16.376920,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 14026,
    "Zone": 449,
    "Name": "Vedrovice, u lípy",
    "Latitude": 49.021731,
    "Longitude": 16.380867,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 14027,
    "Zone": 446,
    "Name": "Kralice nad Oslavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14028,
    "Zone": 446,
    "Name": "Kralice nad Oslavou, Horní Lhotice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14030,
    "Zone": 446,
    "Name": "Kralice nad Oslavou, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14033,
    "Zone": 446,
    "Name": "Kralice nad Oslavou, železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14034,
    "Zone": 446,
    "Name": "Lesní Jakubov",
    "Latitude": 49.205913,
    "Longitude": 16.243831,
    "IsPublic": true,
    "LineList": "424"
  },
  {
    "StopID": 14035,
    "Zone": 446,
    "Name": "Sudice, rozcestí 2.0",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14036,
    "Zone": 448,
    "Name": "Moravský Krumlov, Lerchov",
    "Latitude": 49.049697,
    "Longitude": 16.296095,
    "IsPublic": true,
    "LineList": "442"
  },
  {
    "StopID": 14101,
    "Zone": 410,
    "Name": "Ostopovice, Branky",
    "Latitude": 49.159940,
    "Longitude": 16.548608,
    "IsPublic": true,
    "LineList": "51,403,404"
  },
  {
    "StopID": 14102,
    "Zone": 410,
    "Name": "Ostopovice, Lipová",
    "Latitude": 49.163052,
    "Longitude": 16.536032,
    "IsPublic": true,
    "LineList": "403,404"
  },
  {
    "StopID": 14103,
    "Zone": 410,
    "Name": "Ostopovice, náměstí",
    "Latitude": 49.161085,
    "Longitude": 16.545654,
    "IsPublic": true,
    "LineList": "51,403,404"
  },
  {
    "StopID": 14104,
    "Zone": 410,
    "Name": "Ostopovice, rozcestí",
    "Latitude": 49.163089,
    "Longitude": 16.542837,
    "IsPublic": true,
    "LineList": "51,403,404"
  },
  {
    "StopID": 14105,
    "Zone": 410,
    "Name": "Ostopovice",
    "Latitude": 49.164405,
    "Longitude": 16.540807,
    "IsPublic": true,
    "LineList": "51,403,404"
  },
  {
    "StopID": 14106,
    "Zone": 410,
    "Name": "Troubsko, kaplička",
    "Latitude": 49.168968,
    "Longitude": 16.511527,
    "IsPublic": true,
    "LineList": "51,403,404"
  },
  {
    "StopID": 14107,
    "Zone": 410,
    "Name": "Troubsko, Kovopodnik",
    "Latitude": 49.175824,
    "Longitude": 16.511608,
    "IsPublic": true,
    "LineList": "401,402"
  },
  {
    "StopID": 14108,
    "Zone": 410,
    "Name": "Troubsko, Lísek",
    "Latitude": 49.171815,
    "Longitude": 16.480037,
    "IsPublic": true,
    "LineList": "403"
  },
  {
    "StopID": 14109,
    "Zone": 410,
    "Name": "Troubsko, obecní úřad",
    "Latitude": 49.170909,
    "Longitude": 16.506305,
    "IsPublic": true,
    "LineList": "51,403,404"
  },
  {
    "StopID": 14110,
    "Zone": 410,
    "Name": "Troubsko, U dráhy",
    "Latitude": 49.163603,
    "Longitude": 16.526822,
    "IsPublic": true,
    "LineList": "140,403,404"
  },
  {
    "StopID": 14111,
    "Zone": 410,
    "Name": "Omice, Kývalka",
    "Latitude": 49.190014,
    "Longitude": 16.451805,
    "IsPublic": true,
    "LineList": "401,402"
  },
  {
    "StopID": 14112,
    "Zone": 410,
    "Name": "Omice, Kývalka, spojovací",
    "Latitude": 49.190404,
    "Longitude": 16.456031,
    "IsPublic": true,
    "LineList": "402"
  },
  {
    "StopID": 14113,
    "Zone": 410,
    "Name": "Omice, samoobsluha",
    "Latitude": 49.169980,
    "Longitude": 16.451412,
    "IsPublic": true,
    "LineList": "403"
  },
  {
    "StopID": 14114,
    "Zone": 410,
    "Name": "Omice, sokolovna",
    "Latitude": 49.171992,
    "Longitude": 16.454951,
    "IsPublic": true,
    "LineList": "403"
  },
  {
    "StopID": 14117,
    "Zone": 410,
    "Name": "Popůvky, Náves",
    "Latitude": 49.178184,
    "Longitude": 16.487946,
    "IsPublic": true,
    "LineList": "51,402,403"
  },
  {
    "StopID": 14119,
    "Zone": 410,
    "Name": "Střelice, dolní železniční stanice",
    "Latitude": 49.156474,
    "Longitude": 16.506767,
    "IsPublic": true,
    "LineList": "140,141,404"
  },
  {
    "StopID": 14120,
    "Zone": 410,
    "Name": "Střelice, nákupní středisko",
    "Latitude": 49.152768,
    "Longitude": 16.493960,
    "IsPublic": true,
    "LineList": "404"
  },
  {
    "StopID": 14121,
    "Zone": 410,
    "Name": "Střelice, obecní úřad",
    "Latitude": 49.152648,
    "Longitude": 16.503052,
    "IsPublic": true,
    "LineList": "404"
  },
  {
    "StopID": 14122,
    "Zone": 410,
    "Name": "Střelice, rozcestí Radostice",
    "Latitude": 49.150463,
    "Longitude": 16.464430,
    "IsPublic": true,
    "LineList": "404"
  },
  {
    "StopID": 14123,
    "Zone": 410,
    "Name": "Automotodrom",
    "Latitude": 49.201089,
    "Longitude": 16.445464,
    "IsPublic": true,
    "LineList": "402"
  },
  {
    "StopID": 14124,
    "Zone": 410,
    "Name": "Střelice, Vršovice",
    "Latitude": 49.153443,
    "Longitude": 16.480213,
    "IsPublic": true,
    "LineList": "404"
  },
  {
    "StopID": 14126,
    "Zone": 410,
    "Name": "Troubsko, Nová",
    "Latitude": 49.166762,
    "Longitude": 16.518608,
    "IsPublic": true,
    "LineList": "51,403,404"
  },
  {
    "StopID": 14129,
    "Zone": 410,
    "Name": "Brno, Masarykův okruh",
    "Latitude": 49.204702,
    "Longitude": 16.447220,
    "IsPublic": true,
    "LineList": "402"
  },
  {
    "StopID": 14130,
    "Zone": 410,
    "Name": "Brno, Tribuna B",
    "Latitude": 49.209160,
    "Longitude": 16.453081,
    "IsPublic": true,
    "LineList": "402"
  },
  {
    "StopID": 14131,
    "Zone": 410,
    "Name": "Ostrovačice, hájenka Na Šípu",
    "Latitude": 49.206408,
    "Longitude": 16.438228,
    "IsPublic": true,
    "LineList": "402"
  },
  {
    "StopID": 14133,
    "Zone": 410,
    "Name": "Popůvky, Vintrovna",
    "Latitude": 49.181486,
    "Longitude": 16.490772,
    "IsPublic": true,
    "LineList": "51,401,402,403"
  },
  {
    "StopID": 14138,
    "Zone": 410,
    "Name": "Střelice, ústav sociální péče",
    "Latitude": 49.151699,
    "Longitude": 16.470175,
    "IsPublic": true,
    "LineList": "404"
  },
  {
    "StopID": 14160,
    "Zone": 410,
    "Name": "Troubsko, Veselka",
    "Latitude": 49.176598,
    "Longitude": 16.503605,
    "IsPublic": true,
    "LineList": "51,401,402,403"
  },
  {
    "StopID": 14201,
    "Zone": 427,
    "Name": "Ořechov, Jeř.",
    "Latitude": 49.108913,
    "Longitude": 16.512492,
    "IsPublic": true,
    "LineList": "154,501,510"
  },
  {
    "StopID": 14202,
    "Zone": 427,
    "Name": "Ořechov, Kerendov",
    "Latitude": 49.117391,
    "Longitude": 16.525788,
    "IsPublic": true,
    "LineList": "501"
  },
  {
    "StopID": 14203,
    "Zone": 427,
    "Name": "Ořechov, kravín",
    "Latitude": 49.108647,
    "Longitude": 16.496457,
    "IsPublic": true,
    "LineList": "154,510"
  },
  {
    "StopID": 14204,
    "Zone": 427,
    "Name": "Ořechov, obecní úřad",
    "Latitude": 49.111516,
    "Longitude": 16.518332,
    "IsPublic": true,
    "LineList": "501,510"
  },
  {
    "StopID": 14205,
    "Zone": 427,
    "Name": "Ořechov, orlovna",
    "Latitude": 49.111078,
    "Longitude": 16.526128,
    "IsPublic": true,
    "LineList": "501"
  },
  {
    "StopID": 14206,
    "Zone": 427,
    "Name": "Ořechov, tábor",
    "Latitude": 49.110182,
    "Longitude": 16.539924,
    "IsPublic": true,
    "LineList": "501,510"
  },
  {
    "StopID": 14207,
    "Zone": 427,
    "Name": "Ořechov, zdravotní středisko",
    "Latitude": 49.110529,
    "Longitude": 16.525983,
    "IsPublic": true,
    "LineList": "501,510"
  },
  {
    "StopID": 14208,
    "Zone": 427,
    "Name": "Prštice, rozcestí Hlína",
    "Latitude": 49.113503,
    "Longitude": 16.468491,
    "IsPublic": true,
    "LineList": "510"
  },
  {
    "StopID": 14209,
    "Zone": 427,
    "Name": "Prštice, u zámku",
    "Latitude": 49.118024,
    "Longitude": 16.473362,
    "IsPublic": true,
    "LineList": "510"
  },
  {
    "StopID": 14210,
    "Zone": 427,
    "Name": "Silůvky",
    "Latitude": 49.105948,
    "Longitude": 16.468237,
    "IsPublic": true,
    "LineList": "154,510"
  },
  {
    "StopID": 14211,
    "Zone": 427,
    "Name": "Radostice, koupaliště",
    "Latitude": 49.138151,
    "Longitude": 16.467962,
    "IsPublic": true,
    "LineList": "404"
  },
  {
    "StopID": 14212,
    "Zone": 427,
    "Name": "Radostice, Mlýnská silnice",
    "Latitude": 49.135629,
    "Longitude": 16.474970,
    "IsPublic": true,
    "LineList": "404"
  },
  {
    "StopID": 14213,
    "Zone": 427,
    "Name": "Radostice, sokol.",
    "Latitude": 49.131522,
    "Longitude": 16.477831,
    "IsPublic": true,
    "LineList": "404,510"
  },
  {
    "StopID": 14214,
    "Zone": 427,
    "Name": "Radostice, u Žemličků",
    "Latitude": 49.143552,
    "Longitude": 16.467291,
    "IsPublic": true,
    "LineList": "404"
  },
  {
    "StopID": 14215,
    "Zone": 420,
    "Name": "Ostrovačice, nám.",
    "Latitude": 49.210680,
    "Longitude": 16.409513,
    "IsPublic": true,
    "LineList": "401,402"
  },
  {
    "StopID": 14216,
    "Zone": 420,
    "Name": "Ostrovačice, Veveří",
    "Latitude": 49.213362,
    "Longitude": 16.407678,
    "IsPublic": true,
    "LineList": "153,402"
  },
  {
    "StopID": 14217,
    "Zone": 420,
    "Name": "Říčany",
    "Latitude": 49.214791,
    "Longitude": 16.394854,
    "IsPublic": true,
    "LineList": "153,401,402"
  },
  {
    "StopID": 14218,
    "Zone": 420,
    "Name": "Říčany, ZD",
    "Latitude": 49.210156,
    "Longitude": 16.396064,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14219,
    "Zone": 420,
    "Name": "Říčky",
    "Latitude": 49.232504,
    "Longitude": 16.356725,
    "IsPublic": true,
    "LineList": "401"
  },
  {
    "StopID": 14220,
    "Zone": 420,
    "Name": "Veverské Knínice",
    "Latitude": 49.236629,
    "Longitude": 16.403758,
    "IsPublic": true,
    "LineList": "153,402"
  },
  {
    "StopID": 14221,
    "Zone": 420,
    "Name": "Vev. Knínice, h.k.",
    "Latitude": 49.237818,
    "Longitude": 16.396128,
    "IsPublic": true,
    "LineList": "153,402"
  },
  {
    "StopID": 14222,
    "Zone": 420,
    "Name": "Veverské Knínice, rozcestí Pohádka Máje",
    "Latitude": 49.227455,
    "Longitude": 16.418309,
    "IsPublic": true,
    "LineList": "153,402"
  },
  {
    "StopID": 14223,
    "Zone": 420,
    "Name": "Veverské Knínice, ZOD Veveří",
    "Latitude": 49.231958,
    "Longitude": 16.409008,
    "IsPublic": true,
    "LineList": "153,402"
  },
  {
    "StopID": 14224,
    "Zone": 425,
    "Name": "Babice u Rosic",
    "Latitude": 49.171092,
    "Longitude": 16.359149,
    "IsPublic": true,
    "LineList": "153,421,422"
  },
  {
    "StopID": 14225,
    "Zone": 425,
    "Name": "Rosice, ADOSA",
    "Latitude": 49.184040,
    "Longitude": 16.370951,
    "IsPublic": true,
    "LineList": "153,405"
  },
  {
    "StopID": 14226,
    "Zone": 425,
    "Name": "Rosice, Brněnská",
    "Latitude": 49.182938,
    "Longitude": 16.398250,
    "IsPublic": true,
    "LineList": "405"
  },
  {
    "StopID": 14227,
    "Zone": 425,
    "Name": "Rosice, Husova",
    "Latitude": 49.182042,
    "Longitude": 16.398904,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14229,
    "Zone": 425,
    "Name": "Rosice, Kamínky",
    "Latitude": 49.184752,
    "Longitude": 16.382659,
    "IsPublic": true,
    "LineList": "153,405,423"
  },
  {
    "StopID": 14232,
    "Zone": 425,
    "Name": "Rosice, Říčanská",
    "Latitude": 49.185322,
    "Longitude": 16.384281,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14233,
    "Zone": 425,
    "Name": "Rosice, STK",
    "Latitude": 49.184718,
    "Longitude": 16.404969,
    "IsPublic": true,
    "LineList": "405"
  },
  {
    "StopID": 14234,
    "Zone": 425,
    "Name": "Rosice, Těstárny",
    "Latitude": 49.179428,
    "Longitude": 16.386583,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14235,
    "Zone": 425,
    "Name": "Rosice, Trávníky",
    "Latitude": 49.183503,
    "Longitude": 16.390776,
    "IsPublic": true,
    "LineList": "153,405,423"
  },
  {
    "StopID": 14237,
    "Zone": 425,
    "Name": "Tetčice, Neslovická",
    "Latitude": 49.166335,
    "Longitude": 16.401901,
    "IsPublic": true,
    "LineList": "406,423"
  },
  {
    "StopID": 14238,
    "Zone": 425,
    "Name": "Tetčice, žel. st.",
    "Latitude": 49.172935,
    "Longitude": 16.409051,
    "IsPublic": true,
    "LineList": "140,405,406,423"
  },
  {
    "StopID": 14239,
    "Zone": 425,
    "Name": "Zastávka, Dům zdraví",
    "Latitude": 49.186899,
    "Longitude": 16.361801,
    "IsPublic": true,
    "LineList": "153,405,420,423,424"
  },
  {
    "StopID": 14240,
    "Zone": 425,
    "Name": "Zastávka, hotel",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14241,
    "Zone": 425,
    "Name": "Zastávka, Kopečky",
    "Latitude": 49.196112,
    "Longitude": 16.359186,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14242,
    "Zone": 425,
    "Name": "Zastávka, žel.st.",
    "Latitude": 49.187485,
    "Longitude": 16.359290,
    "IsPublic": true,
    "LineList": "140,153,405,420,421,422,423,424"
  },
  {
    "StopID": 14244,
    "Zone": 420,
    "Name": "Ostrovačice, Říčanská",
    "Latitude": 49.212743,
    "Longitude": 16.406495,
    "IsPublic": true,
    "LineList": "153,401,402"
  },
  {
    "StopID": 14301,
    "Zone": 430,
    "Name": "Domašov",
    "Latitude": 49.245685,
    "Longitude": 16.343530,
    "IsPublic": true,
    "LineList": "401,410"
  },
  {
    "StopID": 14302,
    "Zone": 430,
    "Name": "Domašov, cestmistrovství",
    "Latitude": 49.257232,
    "Longitude": 16.311991,
    "IsPublic": true,
    "LineList": "401"
  },
  {
    "StopID": 14303,
    "Zone": 430,
    "Name": "Domašov, Nový konec",
    "Latitude": 49.240332,
    "Longitude": 16.347682,
    "IsPublic": true,
    "LineList": "401"
  },
  {
    "StopID": 14304,
    "Zone": 430,
    "Name": "Domašov, u hřbitova",
    "Latitude": 49.247189,
    "Longitude": 16.343496,
    "IsPublic": true,
    "LineList": "401,410"
  },
  {
    "StopID": 14305,
    "Zone": 430,
    "Name": "Javůrek",
    "Latitude": 49.254545,
    "Longitude": 16.360777,
    "IsPublic": true,
    "LineList": "401,410"
  },
  {
    "StopID": 14306,
    "Zone": 430,
    "Name": "Lesní Hluboké",
    "Latitude": 49.268358,
    "Longitude": 16.310195,
    "IsPublic": true,
    "LineList": "401"
  },
  {
    "StopID": 14307,
    "Zone": 430,
    "Name": "Lesní Hluboké, motel 9 křížů",
    "Latitude": 49.266652,
    "Longitude": 16.296542,
    "IsPublic": true,
    "LineList": "401"
  },
  {
    "StopID": 14308,
    "Zone": 430,
    "Name": "Litostrov",
    "Latitude": 49.226977,
    "Longitude": 16.334207,
    "IsPublic": true,
    "LineList": "401,410"
  },
  {
    "StopID": 14309,
    "Zone": 430,
    "Name": "Rudka",
    "Latitude": 49.241582,
    "Longitude": 16.330561,
    "IsPublic": true,
    "LineList": "401,410"
  },
  {
    "StopID": 14310,
    "Zone": 430,
    "Name": "Rudka, u křížku",
    "Latitude": 49.243468,
    "Longitude": 16.335031,
    "IsPublic": true,
    "LineList": "401,410"
  },
  {
    "StopID": 14311,
    "Zone": 430,
    "Name": "Zálesná Zhoř, rozcestí",
    "Latitude": 49.261910,
    "Longitude": 16.301337,
    "IsPublic": true,
    "LineList": "401"
  },
  {
    "StopID": 14312,
    "Zone": 435,
    "Name": "Příbram na Moravě, Brodek",
    "Latitude": 49.198295,
    "Longitude": 16.303898,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14313,
    "Zone": 435,
    "Name": "Příbram na Mor.",
    "Latitude": 49.194501,
    "Longitude": 16.302344,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14314,
    "Zone": 435,
    "Name": "Příbram na Moravě, rozc. 2.0",
    "Latitude": 49.204668,
    "Longitude": 16.310300,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14315,
    "Zone": 435,
    "Name": "Zbraslav",
    "Latitude": 49.221018,
    "Longitude": 16.295808,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14316,
    "Zone": 435,
    "Name": "Zbraslav, Březina",
    "Latitude": 49.221818,
    "Longitude": 16.282842,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14318,
    "Zone": 435,
    "Name": "Zbraslav, Malinovského",
    "Latitude": 49.217576,
    "Longitude": 16.298769,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14319,
    "Zone": 436,
    "Name": "Hlína",
    "Latitude": 49.114511,
    "Longitude": 16.427406,
    "IsPublic": true,
    "LineList": "422"
  },
  {
    "StopID": 14320,
    "Zone": 436,
    "Name": "Hlína, samota",
    "Latitude": 49.123142,
    "Longitude": 16.421010,
    "IsPublic": true,
    "LineList": "422"
  },
  {
    "StopID": 14321,
    "Zone": 436,
    "Name": "Kratochvilka",
    "Latitude": 49.157053,
    "Longitude": 16.376949,
    "IsPublic": true,
    "LineList": "422,423"
  },
  {
    "StopID": 14322,
    "Zone": 436,
    "Name": "Lukovany, na dolině",
    "Latitude": 49.162935,
    "Longitude": 16.299698,
    "IsPublic": true,
    "LineList": "421"
  },
  {
    "StopID": 14323,
    "Zone": 436,
    "Name": "Lukovany, točna",
    "Latitude": 49.163362,
    "Longitude": 16.295969,
    "IsPublic": true,
    "LineList": "421"
  },
  {
    "StopID": 14324,
    "Zone": 436,
    "Name": "Lukovany, u kapličky",
    "Latitude": 49.163293,
    "Longitude": 16.302804,
    "IsPublic": true,
    "LineList": "421"
  },
  {
    "StopID": 14325,
    "Zone": 436,
    "Name": "Neslovice",
    "Latitude": 49.142578,
    "Longitude": 16.387408,
    "IsPublic": true,
    "LineList": "406,422,423"
  },
  {
    "StopID": 14326,
    "Zone": 436,
    "Name": "Neslovice, škola",
    "Latitude": 49.145908,
    "Longitude": 16.387286,
    "IsPublic": true,
    "LineList": "422,423"
  },
  {
    "StopID": 14327,
    "Zone": 436,
    "Name": "Oslavany, Padochov, restaurace",
    "Latitude": 49.135068,
    "Longitude": 16.354682,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14328,
    "Zone": 436,
    "Name": "Oslavany, Padochov, rozcestí",
    "Latitude": 49.132730,
    "Longitude": 16.352482,
    "IsPublic": true,
    "LineList": "406"
  },
  {
    "StopID": 14329,
    "Zone": 436,
    "Name": "Oslavany, Padochov, závod",
    "Latitude": 49.137143,
    "Longitude": 16.348372,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14330,
    "Zone": 436,
    "Name": "Zakřany, Jednota",
    "Latitude": 49.168718,
    "Longitude": 16.331429,
    "IsPublic": true,
    "LineList": "421"
  },
  {
    "StopID": 14331,
    "Zone": 436,
    "Name": "Zakřany, obecní úřad",
    "Latitude": 49.170329,
    "Longitude": 16.325743,
    "IsPublic": true,
    "LineList": "421"
  },
  {
    "StopID": 14332,
    "Zone": 436,
    "Name": "Zakřany, ZD",
    "Latitude": 49.169187,
    "Longitude": 16.319818,
    "IsPublic": true,
    "LineList": "421"
  },
  {
    "StopID": 14333,
    "Zone": 436,
    "Name": "Zbýšov, Anenská",
    "Latitude": 49.148768,
    "Longitude": 16.350715,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14334,
    "Zone": 436,
    "Name": "Zbýšov, internát",
    "Latitude": 49.161724,
    "Longitude": 16.343861,
    "IsPublic": true,
    "LineList": "153,421"
  },
  {
    "StopID": 14335,
    "Zone": 436,
    "Name": "Zbýšov, Jednota",
    "Latitude": 49.161450,
    "Longitude": 16.342754,
    "IsPublic": true,
    "LineList": "421"
  },
  {
    "StopID": 14336,
    "Zone": 436,
    "Name": "Zbýšov, MěÚ",
    "Latitude": 49.154662,
    "Longitude": 16.349258,
    "IsPublic": true,
    "LineList": "153,421"
  },
  {
    "StopID": 14337,
    "Zone": 436,
    "Name": "Zbýšov, Poustka",
    "Latitude": 49.158587,
    "Longitude": 16.346868,
    "IsPublic": true,
    "LineList": "153,421"
  },
  {
    "StopID": 14338,
    "Zone": 436,
    "Name": "Zbýšov, Sička",
    "Latitude": 49.166856,
    "Longitude": 16.353205,
    "IsPublic": true,
    "LineList": "153,421"
  },
  {
    "StopID": 14339,
    "Zone": 437,
    "Name": "Dolní Kounice, Masarykovo nám.",
    "Latitude": 49.070302,
    "Longitude": 16.464113,
    "IsPublic": true,
    "LineList": "154,512"
  },
  {
    "StopID": 14340,
    "Zone": 437,
    "Name": "Dolní Kounice, Rybárna",
    "Latitude": 49.071380,
    "Longitude": 16.469110,
    "IsPublic": true,
    "LineList": "512"
  },
  {
    "StopID": 14341,
    "Zone": 437,
    "Name": "Dolní Kounice, Skalní",
    "Latitude": 49.070306,
    "Longitude": 16.456692,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14342,
    "Zone": 437,
    "Name": "Dolní Kounice, Trboušanská",
    "Latitude": 49.066130,
    "Longitude": 16.468147,
    "IsPublic": true,
    "LineList": "512"
  },
  {
    "StopID": 14343,
    "Zone": 437,
    "Name": "Jezeřany-Maršovice, Jezeřany",
    "Latitude": 49.029247,
    "Longitude": 16.436871,
    "IsPublic": true,
    "LineList": "446,512,513"
  },
  {
    "StopID": 14344,
    "Zone": 437,
    "Name": "Jezeřany-Maršovice, škola",
    "Latitude": 49.033484,
    "Longitude": 16.431745,
    "IsPublic": true,
    "LineList": "446,512,513"
  },
  {
    "StopID": 14345,
    "Zone": 437,
    "Name": "Jezeřany-Mar., točna",
    "Latitude": 49.036405,
    "Longitude": 16.427709,
    "IsPublic": true,
    "LineList": "446,512,513"
  },
  {
    "StopID": 14346,
    "Zone": 437,
    "Name": "Kupařovice",
    "Latitude": 49.042100,
    "Longitude": 16.487380,
    "IsPublic": true,
    "LineList": "512"
  },
  {
    "StopID": 14347,
    "Zone": 437,
    "Name": "Moravské Bránice, U Mašinhózu",
    "Latitude": 49.083147,
    "Longitude": 16.433545,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14348,
    "Zone": 437,
    "Name": "Mor. Bránice, škola",
    "Latitude": 49.081528,
    "Longitude": 16.438244,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14349,
    "Zone": 437,
    "Name": "Moravské Bránice, u hřbitova",
    "Latitude": 49.086134,
    "Longitude": 16.438924,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14350,
    "Zone": 437,
    "Name": "Mor. Bránice, žel.st.",
    "Latitude": 49.084765,
    "Longitude": 16.428795,
    "IsPublic": true,
    "LineList": "141,154"
  },
  {
    "StopID": 14351,
    "Zone": 437,
    "Name": "Nové Bránice",
    "Latitude": 49.070354,
    "Longitude": 16.443385,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14352,
    "Zone": 437,
    "Name": "Nové Bránice, rozc.",
    "Latitude": 49.078247,
    "Longitude": 16.439327,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14353,
    "Zone": 437,
    "Name": "Nové Bránice, škola",
    "Latitude": 49.073370,
    "Longitude": 16.439374,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14354,
    "Zone": 437,
    "Name": "Pravlov",
    "Latitude": 49.054553,
    "Longitude": 16.486771,
    "IsPublic": true,
    "LineList": "154,513"
  },
  {
    "StopID": 14355,
    "Zone": 437,
    "Name": "Pravlov, kulturní dům",
    "Latitude": 49.054214,
    "Longitude": 16.480114,
    "IsPublic": true,
    "LineList": "154,513"
  },
  {
    "StopID": 14356,
    "Zone": 437,
    "Name": "Pravlov, rozc.",
    "Latitude": 49.053001,
    "Longitude": 16.479153,
    "IsPublic": true,
    "LineList": "512"
  },
  {
    "StopID": 14357,
    "Zone": 437,
    "Name": "Trboušany",
    "Latitude": 49.049142,
    "Longitude": 16.463980,
    "IsPublic": true,
    "LineList": "512"
  },
  {
    "StopID": 14358,
    "Zone": 437,
    "Name": "Trboušany, rozc.",
    "Latitude": 49.044838,
    "Longitude": 16.471218,
    "IsPublic": true,
    "LineList": "512,513"
  },
  {
    "StopID": 14359,
    "Zone": 435,
    "Name": "Zbraslav, u kostela",
    "Latitude": 49.222470,
    "Longitude": 16.293160,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14360,
    "Zone": 437,
    "Name": "Dolní Kounice, Nové Kounice",
    "Latitude": 49.078193,
    "Longitude": 16.442358,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14361,
    "Zone": 437,
    "Name": "Dolní Kounice, u Machových",
    "Latitude": 49.074762,
    "Longitude": 16.447513,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14362,
    "Zone": 437,
    "Name": "Dolní Kounice, Ivančická",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14363,
    "Zone": 437,
    "Name": "Dolní Kounice, lom",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14364,
    "Zone": 435,
    "Name": "Vysoké Popovice",
    "Latitude": 49.182835,
    "Longitude": 16.287004,
    "IsPublic": true,
    "LineList": "424"
  },
  {
    "StopID": 14401,
    "Zone": 440,
    "Name": "Křoví, pila",
    "Latitude": 49.314018,
    "Longitude": 16.248835,
    "IsPublic": true,
    "LineList": "163,411"
  },
  {
    "StopID": 14402,
    "Zone": 440,
    "Name": "Křoví, rozcestí",
    "Latitude": 49.316880,
    "Longitude": 16.260866,
    "IsPublic": true,
    "LineList": "163,411"
  },
  {
    "StopID": 14403,
    "Zone": 440,
    "Name": "Přibyslavice",
    "Latitude": 49.278604,
    "Longitude": 16.260052,
    "IsPublic": true,
    "LineList": "401,411"
  },
  {
    "StopID": 14404,
    "Zone": 440,
    "Name": "Přibyslavice, motorest 9 křížů",
    "Latitude": 49.271570,
    "Longitude": 16.281158,
    "IsPublic": true,
    "LineList": "401"
  },
  {
    "StopID": 14405,
    "Zone": 440,
    "Name": "Přibyslavice, obecní úřad",
    "Latitude": 49.279741,
    "Longitude": 16.262974,
    "IsPublic": true,
    "LineList": "411"
  },
  {
    "StopID": 14406,
    "Zone": 440,
    "Name": "Přibyslavice, Radoškov",
    "Latitude": 49.283997,
    "Longitude": 16.302503,
    "IsPublic": true,
    "LineList": "411"
  },
  {
    "StopID": 14407,
    "Zone": 440,
    "Name": "Přibyslavice, Radoškov, Spálený mlýn",
    "Latitude": 49.294797,
    "Longitude": 16.288857,
    "IsPublic": true,
    "LineList": "411"
  },
  {
    "StopID": 14408,
    "Zone": 440,
    "Name": "Velká Bíteš, PBS",
    "Latitude": 49.299826,
    "Longitude": 16.213894,
    "IsPublic": true,
    "LineList": "163,401,411,420"
  },
  {
    "StopID": 14409,
    "Zone": 440,
    "Name": "Velká Bíteš, BDS",
    "Latitude": 49.296472,
    "Longitude": 16.220656,
    "IsPublic": true,
    "LineList": "163,401,411,420"
  },
  {
    "StopID": 14410,
    "Zone": 440,
    "Name": "Velká Bíteš, cihelna",
    "Latitude": 49.284464,
    "Longitude": 16.241910,
    "IsPublic": true,
    "LineList": "401,411"
  },
  {
    "StopID": 14411,
    "Zone": 440,
    "Name": "Velká Bíteš, hřiště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14412,
    "Zone": 440,
    "Name": "Velká Bíteš, nám.",
    "Latitude": 49.288430,
    "Longitude": 16.226807,
    "IsPublic": true,
    "LineList": "163,401,411,420"
  },
  {
    "StopID": 14413,
    "Zone": 440,
    "Name": "Velká Bíteš, Pánov, rozcestí",
    "Latitude": 49.312502,
    "Longitude": 16.283914,
    "IsPublic": true,
    "LineList": "411"
  },
  {
    "StopID": 14414,
    "Zone": 440,
    "Name": "Velká Bíteš, samota",
    "Latitude": 49.303318,
    "Longitude": 16.232853,
    "IsPublic": true,
    "LineList": "163,411"
  },
  {
    "StopID": 14415,
    "Zone": 440,
    "Name": "Velká Bíteš, Vlkovská",
    "Latitude": 49.293684,
    "Longitude": 16.223810,
    "IsPublic": true,
    "LineList": "163,401,411,420"
  },
  {
    "StopID": 14416,
    "Zone": 440,
    "Name": "Velká Bíteš, škola",
    "Latitude": 49.290697,
    "Longitude": 16.227114,
    "IsPublic": true,
    "LineList": "163,401,411,420"
  },
  {
    "StopID": 14417,
    "Zone": 440,
    "Name": "Křoví, I",
    "Latitude": 49.310230,
    "Longitude": 16.263142,
    "IsPublic": true,
    "LineList": "163,411"
  },
  {
    "StopID": 14418,
    "Zone": 440,
    "Name": "Křoví, II",
    "Latitude": 49.305978,
    "Longitude": 16.264135,
    "IsPublic": true,
    "LineList": "163,411"
  },
  {
    "StopID": 14419,
    "Zone": 440,
    "Name": "Velká Bíteš, Hybešova",
    "Latitude": 49.283225,
    "Longitude": 16.230586,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14420,
    "Zone": 440,
    "Name": "Velká Bíteš, Košíkov",
    "Latitude": 49.268830,
    "Longitude": 16.238987,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14421,
    "Zone": 440,
    "Name": "Velká Bíteš, Ludvíkov",
    "Latitude": 49.254637,
    "Longitude": 16.257732,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14422,
    "Zone": 440,
    "Name": "Velká Bíteš, ropovod",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14423,
    "Zone": 445,
    "Name": "Hluboké",
    "Latitude": 49.225953,
    "Longitude": 16.226960,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14424,
    "Zone": 445,
    "Name": "Újezd u Rosic, samota",
    "Latitude": 49.222002,
    "Longitude": 16.238089,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14425,
    "Zone": 445,
    "Name": "Stanoviště",
    "Latitude": 49.237583,
    "Longitude": 16.255712,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14426,
    "Zone": 445,
    "Name": "Stanoviště, rozc. 1.0",
    "Latitude": 49.246529,
    "Longitude": 16.262730,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14427,
    "Zone": 445,
    "Name": "Újezd u Rosic",
    "Latitude": 49.222602,
    "Longitude": 16.253878,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14428,
    "Zone": 445,
    "Name": "Újezd u Rosic, u kovárny",
    "Latitude": 49.222334,
    "Longitude": 16.248350,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14429,
    "Zone": 445,
    "Name": "Zálesná Zhoř",
    "Latitude": 49.251147,
    "Longitude": 16.291372,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14430,
    "Zone": 445,
    "Name": "Zálesná Zhoř, hájenka",
    "Latitude": 49.251882,
    "Longitude": 16.278724,
    "IsPublic": true,
    "LineList": "420"
  },
  {
    "StopID": 14431,
    "Zone": 446,
    "Name": "Čučice",
    "Latitude": 49.140006,
    "Longitude": 16.277489,
    "IsPublic": true,
    "LineList": "430"
  },
  {
    "StopID": 14432,
    "Zone": 446,
    "Name": "Ketkovice",
    "Latitude": 49.159057,
    "Longitude": 16.264104,
    "IsPublic": true,
    "LineList": "430"
  },
  {
    "StopID": 14433,
    "Zone": 446,
    "Name": "Ketkovice, kovárna",
    "Latitude": 49.161018,
    "Longitude": 16.261440,
    "IsPublic": true,
    "LineList": "430"
  },
  {
    "StopID": 14434,
    "Zone": 446,
    "Name": "Rapotice, škola",
    "Latitude": 49.191060,
    "Longitude": 16.255348,
    "IsPublic": true,
    "LineList": "424,430"
  },
  {
    "StopID": 14435,
    "Zone": 446,
    "Name": "Rapotice, žel.st.",
    "Latitude": 49.184090,
    "Longitude": 16.256239,
    "IsPublic": true,
    "LineList": "140,430"
  },
  {
    "StopID": 14436,
    "Zone": 446,
    "Name": "Sudice, náves",
    "Latitude": 49.182238,
    "Longitude": 16.236392,
    "IsPublic": true,
    "LineList": "430"
  },
  {
    "StopID": 14437,
    "Zone": 446,
    "Name": "Sudice, rozcestí 1.0",
    "Latitude": 49.180877,
    "Longitude": 16.254778,
    "IsPublic": true,
    "LineList": "430"
  },
  {
    "StopID": 14438,
    "Zone": 447,
    "Name": "Biskoupky",
    "Latitude": 49.099688,
    "Longitude": 16.280147,
    "IsPublic": true,
    "LineList": "423"
  },
  {
    "StopID": 14439,
    "Zone": 447,
    "Name": "Biskoupky, rozc.",
    "Latitude": 49.110276,
    "Longitude": 16.285869,
    "IsPublic": true,
    "LineList": "423"
  },
  {
    "StopID": 14440,
    "Zone": 447,
    "Name": "Ivančice, Budkovice",
    "Latitude": 49.073074,
    "Longitude": 16.347399,
    "IsPublic": true,
    "LineList": "432"
  },
  {
    "StopID": 14441,
    "Zone": 447,
    "Name": "Ivančice, Alexovice",
    "Latitude": 49.090773,
    "Longitude": 16.355852,
    "IsPublic": true,
    "LineList": "431"
  },
  {
    "StopID": 14442,
    "Zone": 447,
    "Name": "Ivančice, Alexovice, točna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14443,
    "Zone": 447,
    "Name": "Ivančice, Alexovice, transformátor",
    "Latitude": 49.089753,
    "Longitude": 16.350857,
    "IsPublic": true,
    "LineList": "431"
  },
  {
    "StopID": 14444,
    "Zone": 447,
    "Name": "Ivančice, Horní Hlinky",
    "Latitude": 49.102017,
    "Longitude": 16.385553,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14445,
    "Zone": 447,
    "Name": "Hrubšice",
    "Latitude": 49.093120,
    "Longitude": 16.303917,
    "IsPublic": true,
    "LineList": "431"
  },
  {
    "StopID": 14446,
    "Zone": 447,
    "Name": "Ivančice, náměstí",
    "Latitude": 49.102273,
    "Longitude": 16.375233,
    "IsPublic": true,
    "LineList": "153,154,406,423,430,431,432"
  },
  {
    "StopID": 14447,
    "Zone": 447,
    "Name": "Ivančice, Němčice, sokolovna",
    "Latitude": 49.094084,
    "Longitude": 16.364314,
    "IsPublic": true,
    "LineList": "431"
  },
  {
    "StopID": 14448,
    "Zone": 447,
    "Name": "Ivančice, Oslavanská",
    "Latitude": 49.103814,
    "Longitude": 16.368589,
    "IsPublic": true,
    "LineList": "153,154,406,423,430"
  },
  {
    "StopID": 14449,
    "Zone": 447,
    "Name": "Ivančice, Řeznovice",
    "Latitude": 49.086045,
    "Longitude": 16.323792,
    "IsPublic": true,
    "LineList": "431"
  },
  {
    "StopID": 14450,
    "Zone": 447,
    "Name": "Ivančice, Řeznovice, škola",
    "Latitude": 49.084824,
    "Longitude": 16.319868,
    "IsPublic": true,
    "LineList": "431"
  },
  {
    "StopID": 14451,
    "Zone": 447,
    "Name": "Ivančice, silo",
    "Latitude": 49.108054,
    "Longitude": 16.355810,
    "IsPublic": true,
    "LineList": "153,406,423,430"
  },
  {
    "StopID": 14452,
    "Zone": 447,
    "Name": "Ivančice, Stříbský mlýn",
    "Latitude": 49.089538,
    "Longitude": 16.404542,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 14453,
    "Zone": 447,
    "Name": "Ivančice, škola",
    "Latitude": 49.104439,
    "Longitude": 16.371964,
    "IsPublic": true,
    "LineList": "406,423,431"
  },
  {
    "StopID": 14454,
    "Zone": 447,
    "Name": "Ivančice, žel.st.",
    "Latitude": 49.097938,
    "Longitude": 16.372202,
    "IsPublic": true,
    "LineList": "141,430,431,432"
  },
  {
    "StopID": 14455,
    "Zone": 447,
    "Name": "Nová Ves, host. U Slavíků",
    "Latitude": 49.106578,
    "Longitude": 16.314521,
    "IsPublic": true,
    "LineList": "423"
  },
  {
    "StopID": 14456,
    "Zone": 447,
    "Name": "Nová Ves, škola",
    "Latitude": 49.108679,
    "Longitude": 16.309762,
    "IsPublic": true,
    "LineList": "423"
  },
  {
    "StopID": 14457,
    "Zone": 447,
    "Name": "Oslavany, aut. st.",
    "Latitude": 49.120782,
    "Longitude": 16.336443,
    "IsPublic": true,
    "LineList": "153,406,423,430"
  },
  {
    "StopID": 14458,
    "Zone": 447,
    "Name": "Oslavany, Havířská",
    "Latitude": 49.131305,
    "Longitude": 16.326685,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14459,
    "Zone": 447,
    "Name": "Oslavany, Dolina",
    "Latitude": 49.116663,
    "Longitude": 16.324708,
    "IsPublic": true,
    "LineList": "423"
  },
  {
    "StopID": 14460,
    "Zone": 447,
    "Name": "Oslavany, náměstí",
    "Latitude": 49.126496,
    "Longitude": 16.330828,
    "IsPublic": true,
    "LineList": "153,430"
  },
  {
    "StopID": 14461,
    "Zone": 447,
    "Name": "Oslavany, Nová čtvrť",
    "Latitude": 49.128752,
    "Longitude": 16.323029,
    "IsPublic": true,
    "LineList": "430"
  },
  {
    "StopID": 14462,
    "Zone": 447,
    "Name": "Oslavany, Podlesí",
    "Latitude": 49.137920,
    "Longitude": 16.346302,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14463,
    "Zone": 447,
    "Name": "Oslavany, Permonium",
    "Latitude": 49.125765,
    "Longitude": 16.345658,
    "IsPublic": true,
    "LineList": "406"
  },
  {
    "StopID": 14464,
    "Zone": 447,
    "Name": "Oslavany, Tř. 1. máje",
    "Latitude": 49.133304,
    "Longitude": 16.334578,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14465,
    "Zone": 447,
    "Name": "Oslavany, U mlýnka",
    "Latitude": 49.136101,
    "Longitude": 16.344033,
    "IsPublic": true,
    "LineList": "153"
  },
  {
    "StopID": 14466,
    "Zone": 447,
    "Name": "Oslavany, železniční stanice",
    "Latitude": 49.119084,
    "Longitude": 16.345184,
    "IsPublic": true,
    "LineList": "153,406,423,430"
  },
  {
    "StopID": 14467,
    "Zone": 448,
    "Name": "Moravský Krumlov, Břízová",
    "Latitude": 49.041609,
    "Longitude": 16.306857,
    "IsPublic": true,
    "LineList": "164,440,443,444,445"
  },
  {
    "StopID": 14468,
    "Zone": 448,
    "Name": "Moravský Krumlov, Durdice",
    "Latitude": 49.038448,
    "Longitude": 16.321217,
    "IsPublic": true,
    "LineList": "164,440"
  },
  {
    "StopID": 14469,
    "Zone": 448,
    "Name": "Mor. Krumlov, prům. zóna",
    "Latitude": 49.048910,
    "Longitude": 16.339637,
    "IsPublic": true,
    "LineList": "440"
  },
  {
    "StopID": 14470,
    "Zone": 448,
    "Name": "Moravský Krumlov, Jatky",
    "Latitude": 49.037643,
    "Longitude": 16.310306,
    "IsPublic": true,
    "LineList": "164,432,440,443,444,445"
  },
  {
    "StopID": 14471,
    "Zone": 448,
    "Name": "Moravský Krumlov, Kavalírka",
    "Latitude": 49.045754,
    "Longitude": 16.310729,
    "IsPublic": true,
    "LineList": "164,432,440,441,442,443,445,446"
  },
  {
    "StopID": 14472,
    "Zone": 448,
    "Name": "Mor. Krumlov, nám.",
    "Latitude": 49.048724,
    "Longitude": 16.312711,
    "IsPublic": true,
    "LineList": "164,432,440,441,442,443,444,445"
  },
  {
    "StopID": 14473,
    "Zone": 448,
    "Name": "Mor. Krumlov, polik.",
    "Latitude": 49.043479,
    "Longitude": 16.305563,
    "IsPublic": true,
    "LineList": "164,440,443,444,445"
  },
  {
    "StopID": 14474,
    "Zone": 448,
    "Name": "Mor. Krumlov, Okružní",
    "Latitude": 49.038475,
    "Longitude": 16.316190,
    "IsPublic": true,
    "LineList": "164,432,440,445"
  },
  {
    "StopID": 14475,
    "Zone": 448,
    "Name": "Rakšice, rest.",
    "Latitude": 49.035612,
    "Longitude": 16.319658,
    "IsPublic": true,
    "LineList": "164,440"
  },
  {
    "StopID": 14476,
    "Zone": 448,
    "Name": "Moravský Krumlov, u přejezdu",
    "Latitude": 49.044994,
    "Longitude": 16.339475,
    "IsPublic": true,
    "LineList": "440,446"
  },
  {
    "StopID": 14477,
    "Zone": 448,
    "Name": "Moravský Krumlov, stezka",
    "Latitude": 49.044908,
    "Longitude": 16.321858,
    "IsPublic": true,
    "LineList": "432,440,441,442,443,446"
  },
  {
    "StopID": 14478,
    "Zone": 448,
    "Name": "Moravský Krumlov, Václavská",
    "Latitude": 49.044042,
    "Longitude": 16.315580,
    "IsPublic": true,
    "LineList": "432,440,441,442,443,446"
  },
  {
    "StopID": 14479,
    "Zone": 448,
    "Name": "Mor. Krumlov, ž.s.",
    "Latitude": 49.046240,
    "Longitude": 16.338136,
    "IsPublic": true,
    "LineList": "141,440,441,442,443"
  },
  {
    "StopID": 14480,
    "Zone": 447,
    "Name": "Ivančice, Budkovice, rozcestí",
    "Latitude": 49.081928,
    "Longitude": 16.349279,
    "IsPublic": true,
    "LineList": "432"
  },
  {
    "StopID": 14481,
    "Zone": 448,
    "Name": "Moravský Krumlov, Ivančická",
    "Latitude": 49.050612,
    "Longitude": 16.296662,
    "IsPublic": true,
    "LineList": "432,441"
  },
  {
    "StopID": 14482,
    "Zone": 448,
    "Name": "Moravský Krumlov, hájenka",
    "Latitude": 49.043838,
    "Longitude": 16.359682,
    "IsPublic": true,
    "LineList": "446"
  },
  {
    "StopID": 14483,
    "Zone": 448,
    "Name": "Moravský Krumlov, Na Kačence",
    "Latitude": 49.033103,
    "Longitude": 16.303278,
    "IsPublic": true,
    "LineList": "432,443,444"
  },
  {
    "StopID": 14484,
    "Zone": 448,
    "Name": "Moravský Krumlov, škola",
    "Latitude": 49.047595,
    "Longitude": 16.301727,
    "IsPublic": true,
    "LineList": "432,441,442"
  },
  {
    "StopID": 14485,
    "Zone": 448,
    "Name": "Moravský Krumlov, u parku",
    "Latitude": 49.045114,
    "Longitude": 16.304434,
    "IsPublic": true,
    "LineList": "164,432,440,441,442,443,444,445"
  },
  {
    "StopID": 14486,
    "Zone": 448,
    "Name": "Polánka",
    "Latitude": 49.068361,
    "Longitude": 16.304116,
    "IsPublic": true,
    "LineList": "432,441"
  },
  {
    "StopID": 14487,
    "Zone": 448,
    "Name": "Moravský Krumlov, Polánka, rozcestí",
    "Latitude": 49.066169,
    "Longitude": 16.308249,
    "IsPublic": true,
    "LineList": "432"
  },
  {
    "StopID": 14488,
    "Zone": 448,
    "Name": "Moravský Krumlov, Rakšice, lesovna",
    "Latitude": 49.013732,
    "Longitude": 16.355894,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 14489,
    "Zone": 448,
    "Name": "Moravský Krumlov, Rakšice, Silo",
    "Latitude": 49.019335,
    "Longitude": 16.341522,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 14490,
    "Zone": 448,
    "Name": "Rakšice, žel.st.",
    "Latitude": 49.014358,
    "Longitude": 16.345505,
    "IsPublic": true,
    "LineList": "141,164"
  },
  {
    "StopID": 14491,
    "Zone": 448,
    "Name": "Moravský Krumlov, Rokytná",
    "Latitude": 49.064780,
    "Longitude": 16.323144,
    "IsPublic": true,
    "LineList": "432"
  },
  {
    "StopID": 14492,
    "Zone": 448,
    "Name": "Moravský Krumlov, Rokytná, rozcestí",
    "Latitude": 49.074574,
    "Longitude": 16.326665,
    "IsPublic": true,
    "LineList": "432"
  },
  {
    "StopID": 14493,
    "Zone": 448,
    "Name": "Moravský Krumlov, Stavení",
    "Latitude": 49.055230,
    "Longitude": 16.389172,
    "IsPublic": true,
    "LineList": "446"
  },
  {
    "StopID": 14494,
    "Zone": 448,
    "Name": "Dobřínsko",
    "Latitude": 49.053529,
    "Longitude": 16.260958,
    "IsPublic": true,
    "LineList": "442"
  },
  {
    "StopID": 14495,
    "Zone": 448,
    "Name": "Rybníky",
    "Latitude": 49.025458,
    "Longitude": 16.281038,
    "IsPublic": true,
    "LineList": "432,443,444"
  },
  {
    "StopID": 14496,
    "Zone": 447,
    "Name": "Ivančice, Němčice",
    "Latitude": 49.093246,
    "Longitude": 16.368350,
    "IsPublic": true,
    "LineList": "432"
  },
  {
    "StopID": 14497,
    "Zone": 446,
    "Name": "Sudice, škola",
    "Latitude": 49.181074,
    "Longitude": 16.242053,
    "IsPublic": true,
    "LineList": "430"
  },
  {
    "StopID": 14498,
    "Zone": 446,
    "Name": "Sudice, Výhon",
    "Latitude": 49.180375,
    "Longitude": 16.250437,
    "IsPublic": true,
    "LineList": "430"
  },
  {
    "StopID": 14499,
    "Zone": 448,
    "Name": "Mor.Krumlov, a.n.",
    "Latitude": 49.048180,
    "Longitude": 16.309271,
    "IsPublic": true,
    "LineList": "164,432,440,441,442,443,444,445,446"
  },
  {
    "StopID": 14501,
    "Zone": 455,
    "Name": "Lhánice",
    "Latitude": 49.111815,
    "Longitude": 16.217583,
    "IsPublic": true,
    "LineList": "423"
  },
  {
    "StopID": 14502,
    "Zone": 455,
    "Name": "Mohelno",
    "Latitude": 49.114162,
    "Longitude": 16.190100,
    "IsPublic": true,
    "LineList": "423"
  },
  {
    "StopID": 14503,
    "Zone": 455,
    "Name": "Mohelno, sokolovna",
    "Latitude": 49.115265,
    "Longitude": 16.194616,
    "IsPublic": true,
    "LineList": "423"
  },
  {
    "StopID": 14504,
    "Zone": 455,
    "Name": "Senorady",
    "Latitude": 49.123982,
    "Longitude": 16.244818,
    "IsPublic": true,
    "LineList": "423"
  },
  {
    "StopID": 14505,
    "Zone": 455,
    "Name": "Senorady, u kovárny",
    "Latitude": 49.122438,
    "Longitude": 16.250935,
    "IsPublic": true,
    "LineList": "423"
  },
  {
    "StopID": 14506,
    "Zone": 455,
    "Name": "Mohelno, ZD",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14507,
    "Zone": 456,
    "Name": "Náměšť n/O, a.n.",
    "Latitude": 49.207007,
    "Longitude": 16.147660,
    "IsPublic": true,
    "LineList": "124,140,145"
  },
  {
    "StopID": 14508,
    "Zone": 456,
    "Name": "Náměšť nad Oslavou, Kamenný most",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14510,
    "Zone": 456,
    "Name": "Náměšť nad Oslavou, U obory",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14512,
    "Zone": 456,
    "Name": "Náměšť nad Oslavou, zámek",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14519,
    "Zone": 457,
    "Name": "Dolní Dubňany, u mostu",
    "Latitude": 49.055517,
    "Longitude": 16.224832,
    "IsPublic": true,
    "LineList": "442"
  },
  {
    "StopID": 14520,
    "Zone": 457,
    "Name": "Dukovany, obec",
    "Latitude": 49.079628,
    "Longitude": 16.190947,
    "IsPublic": true,
    "LineList": "441"
  },
  {
    "StopID": 14521,
    "Zone": 467,
    "Name": "Dukovany, rozcestí",
    "Latitude": 49.086423,
    "Longitude": 16.162144,
    "IsPublic": true,
    "LineList": "441,812"
  },
  {
    "StopID": 14522,
    "Zone": 457,
    "Name": "Horní Dubňany",
    "Latitude": 49.062948,
    "Longitude": 16.201328,
    "IsPublic": true,
    "LineList": "442"
  },
  {
    "StopID": 14523,
    "Zone": 457,
    "Name": "Horní Dubňany, obecní úřad",
    "Latitude": 49.065899,
    "Longitude": 16.203088,
    "IsPublic": true,
    "LineList": "442"
  },
  {
    "StopID": 14524,
    "Zone": 457,
    "Name": "Jamolice, lesovna",
    "Latitude": 49.079928,
    "Longitude": 16.239199,
    "IsPublic": true,
    "LineList": "441"
  },
  {
    "StopID": 14525,
    "Zone": 457,
    "Name": "Jamolice, MŠ",
    "Latitude": 49.072092,
    "Longitude": 16.258284,
    "IsPublic": true,
    "LineList": "441"
  },
  {
    "StopID": 14526,
    "Zone": 457,
    "Name": "Jamolice, rest.",
    "Latitude": 49.073338,
    "Longitude": 16.249429,
    "IsPublic": true,
    "LineList": "441"
  },
  {
    "StopID": 14527,
    "Zone": 458,
    "Name": "Dobelice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14528,
    "Zone": 458,
    "Name": "Dobelice, Krumlovská",
    "Latitude": 49.017208,
    "Longitude": 16.278590,
    "IsPublic": true,
    "LineList": "432,443,444"
  },
  {
    "StopID": 14529,
    "Zone": 458,
    "Name": "Dobelice, obecní úřad",
    "Latitude": 49.016771,
    "Longitude": 16.279006,
    "IsPublic": true,
    "LineList": "443,444"
  },
  {
    "StopID": 14530,
    "Zone": 458,
    "Name": "Dobelice, Vémyslická",
    "Latitude": 49.016693,
    "Longitude": 16.276102,
    "IsPublic": true,
    "LineList": "444"
  },
  {
    "StopID": 14531,
    "Zone": 458,
    "Name": "Džbánice",
    "Latitude": 49.001555,
    "Longitude": 16.208171,
    "IsPublic": true,
    "LineList": "444"
  },
  {
    "StopID": 14532,
    "Zone": 458,
    "Name": "Kadov",
    "Latitude": 48.982320,
    "Longitude": 16.287110,
    "IsPublic": true,
    "LineList": "432,445"
  },
  {
    "StopID": 14533,
    "Zone": 458,
    "Name": "Kadov, rozcestí",
    "Latitude": 48.991877,
    "Longitude": 16.277283,
    "IsPublic": true,
    "LineList": "432"
  },
  {
    "StopID": 14534,
    "Zone": 458,
    "Name": "Lesonice, křižovatka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14535,
    "Zone": 458,
    "Name": "Lesonice, požární zbrojnice",
    "Latitude": 49.003561,
    "Longitude": 16.310147,
    "IsPublic": true,
    "LineList": "445"
  },
  {
    "StopID": 14536,
    "Zone": 458,
    "Name": "Miroslavské Knínice",
    "Latitude": 48.978017,
    "Longitude": 16.322579,
    "IsPublic": true,
    "LineList": "445"
  },
  {
    "StopID": 14537,
    "Zone": 458,
    "Name": "Petrovice",
    "Latitude": 49.007495,
    "Longitude": 16.291470,
    "IsPublic": true,
    "LineList": "432,443,444,445"
  },
  {
    "StopID": 14538,
    "Zone": 458,
    "Name": "Vémyslice, nový hřbitov",
    "Latitude": 49.025676,
    "Longitude": 16.243410,
    "IsPublic": true,
    "LineList": "443"
  },
  {
    "StopID": 14539,
    "Zone": 458,
    "Name": "Vémyslice, u kostela",
    "Latitude": 49.022563,
    "Longitude": 16.253826,
    "IsPublic": true,
    "LineList": "443,444"
  },
  {
    "StopID": 14540,
    "Zone": 458,
    "Name": "Vémyslice, váha",
    "Latitude": 49.018635,
    "Longitude": 16.263301,
    "IsPublic": true,
    "LineList": "443,444"
  },
  {
    "StopID": 14541,
    "Zone": 459,
    "Name": "Bohutice",
    "Latitude": 48.989738,
    "Longitude": 16.360072,
    "IsPublic": true,
    "LineList": "450"
  },
  {
    "StopID": 14542,
    "Zone": 459,
    "Name": "Hostěradice, lom",
    "Latitude": 48.946936,
    "Longitude": 16.265202,
    "IsPublic": true,
    "LineList": "158,810"
  },
  {
    "StopID": 14543,
    "Zone": 459,
    "Name": "Hostěradice, nám.",
    "Latitude": 48.950582,
    "Longitude": 16.259558,
    "IsPublic": true,
    "LineList": "158,432,810"
  },
  {
    "StopID": 14544,
    "Zone": 459,
    "Name": "Hostěradice, Chlupice",
    "Latitude": 48.951205,
    "Longitude": 16.242968,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 14545,
    "Zone": 459,
    "Name": "Hostěradice, Míšovice",
    "Latitude": 48.962262,
    "Longitude": 16.262175,
    "IsPublic": true,
    "LineList": "432"
  },
  {
    "StopID": 14546,
    "Zone": 459,
    "Name": "Miroslav, aut.st.",
    "Latitude": 48.947007,
    "Longitude": 16.313000,
    "IsPublic": true,
    "LineList": "158,445,450,810"
  },
  {
    "StopID": 14548,
    "Zone": 459,
    "Name": "Miroslav, jesle",
    "Latitude": 48.945167,
    "Longitude": 16.307937,
    "IsPublic": true,
    "LineList": "158,810"
  },
  {
    "StopID": 14549,
    "Zone": 459,
    "Name": "Miroslav, kostel",
    "Latitude": 48.950164,
    "Longitude": 16.313692,
    "IsPublic": true,
    "LineList": "445"
  },
  {
    "StopID": 14550,
    "Zone": 459,
    "Name": "Miroslav, provozovna ČAS",
    "Latitude": 48.941965,
    "Longitude": 16.321182,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 14551,
    "Zone": 459,
    "Name": "Miroslav, Réna",
    "Latitude": 48.933508,
    "Longitude": 16.337322,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 14552,
    "Zone": 459,
    "Name": "Miroslav, rozc.",
    "Latitude": 48.933557,
    "Longitude": 16.362408,
    "IsPublic": true,
    "LineList": "108,158"
  },
  {
    "StopID": 14553,
    "Zone": 459,
    "Name": "Miroslav, sklárny",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14554,
    "Zone": 459,
    "Name": "Miroslav, statek",
    "Latitude": 48.945987,
    "Longitude": 16.317807,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 14555,
    "Zone": 459,
    "Name": "Miroslav, žel.st.",
    "Latitude": 48.935320,
    "Longitude": 16.362297,
    "IsPublic": true,
    "LineList": "141"
  },
  {
    "StopID": 14556,
    "Zone": 459,
    "Name": "Miroslav, rozc. k ž.s.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14557,
    "Zone": 459,
    "Name": "Miroslav, Kašenec, státní silnice",
    "Latitude": 48.918482,
    "Longitude": 16.333665,
    "IsPublic": true,
    "LineList": "108"
  },
  {
    "StopID": 14558,
    "Zone": 459,
    "Name": "Kašenec, točna",
    "Latitude": 48.919183,
    "Longitude": 16.327708,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 14559,
    "Zone": 459,
    "Name": "Našiměřice",
    "Latitude": 48.968258,
    "Longitude": 16.372205,
    "IsPublic": true,
    "LineList": "450"
  },
  {
    "StopID": 14560,
    "Zone": 459,
    "Name": "Našiměřice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14561,
    "Zone": 459,
    "Name": "Našiměřice, železniční stanice",
    "Latitude": 48.963144,
    "Longitude": 16.350726,
    "IsPublic": true,
    "LineList": "450"
  },
  {
    "StopID": 14562,
    "Zone": 459,
    "Name": "Skalice, dolní zastávka",
    "Latitude": 48.963511,
    "Longitude": 16.224311,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 14563,
    "Zone": 459,
    "Name": "Skalice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14564,
    "Zone": 459,
    "Name": "Skalice, sokolovna",
    "Latitude": 48.961453,
    "Longitude": 16.223723,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 14565,
    "Zone": 459,
    "Name": "Suchohrdly u Mir.",
    "Latitude": 48.943012,
    "Longitude": 16.363188,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 14601,
    "Zone": 467,
    "Name": "Dukovany, EDU",
    "Latitude": 49.090362,
    "Longitude": 16.144966,
    "IsPublic": true,
    "LineList": "441,812"
  },
  {
    "StopID": 14602,
    "Zone": 468,
    "Name": "Čermákovice",
    "Latitude": 49.032307,
    "Longitude": 16.193390,
    "IsPublic": true,
    "LineList": "443"
  },
  {
    "StopID": 14603,
    "Zone": 468,
    "Name": "Rešice, dvůr",
    "Latitude": 49.048586,
    "Longitude": 16.164028,
    "IsPublic": true,
    "LineList": "442"
  },
  {
    "StopID": 14604,
    "Zone": 468,
    "Name": "Rešice, restaurace",
    "Latitude": 49.053075,
    "Longitude": 16.172038,
    "IsPublic": true,
    "LineList": "442"
  },
  {
    "StopID": 14605,
    "Zone": 468,
    "Name": "Rešice, Kordula, rozcestí",
    "Latitude": 49.061292,
    "Longitude": 16.145902,
    "IsPublic": true,
    "LineList": "442"
  },
  {
    "StopID": 14606,
    "Zone": 468,
    "Name": "Tulešice, Jarolímův mlýn",
    "Latitude": 49.031170,
    "Longitude": 16.230490,
    "IsPublic": true,
    "LineList": "443"
  },
  {
    "StopID": 14607,
    "Zone": 468,
    "Name": "Tulešice, křižovatka",
    "Latitude": 49.040096,
    "Longitude": 16.204039,
    "IsPublic": true,
    "LineList": "442"
  },
  {
    "StopID": 14608,
    "Zone": 468,
    "Name": "Tulešice, zámek",
    "Latitude": 49.038922,
    "Longitude": 16.205912,
    "IsPublic": true,
    "LineList": "443"
  },
  {
    "StopID": 14609,
    "Zone": 465,
    "Name": "Kladeruby nad Oslavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14610,
    "Zone": 465,
    "Name": "Kladeruby nad Oslavou, Vlčí kopec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14611,
    "Zone": 465,
    "Name": "Popůvky, Sedlecký dvůr",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14612,
    "Zone": 465,
    "Name": "Popůvky, rozc. Sedlecký dvůr",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14613,
    "Zone": 465,
    "Name": "Kramolín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14701,
    "Zone": 477,
    "Name": "Hrotovice, a.n.",
    "Latitude": 49.107408,
    "Longitude": 16.060075,
    "IsPublic": true,
    "LineList": "441,442"
  },
  {
    "StopID": 14702,
    "Zone": 477,
    "Name": "Hrotovice, správa silnic",
    "Latitude": 49.103933,
    "Longitude": 16.072176,
    "IsPublic": true,
    "LineList": "441,442"
  },
  {
    "StopID": 14703,
    "Zone": 477,
    "Name": "Slavětice",
    "Latitude": 49.103547,
    "Longitude": 16.106792,
    "IsPublic": true,
    "LineList": "441"
  },
  {
    "StopID": 14704,
    "Zone": 477,
    "Name": "Slavětice, rozcestí",
    "Latitude": 49.101699,
    "Longitude": 16.083697,
    "IsPublic": true,
    "LineList": "441,442"
  },
  {
    "StopID": 14705,
    "Zone": 477,
    "Name": "Slavětice, rozvodna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14706,
    "Zone": 478,
    "Name": "Rouchovany",
    "Latitude": 49.069188,
    "Longitude": 16.109075,
    "IsPublic": true,
    "LineList": "441,442,812"
  },
  {
    "StopID": 14709,
    "Zone": 478,
    "Name": "Rouchovany, učiliště",
    "Latitude": 49.072072,
    "Longitude": 16.101738,
    "IsPublic": true,
    "LineList": "441,442"
  },
  {
    "StopID": 14710,
    "Zone": 478,
    "Name": "Rouchovany, Šemíkovice",
    "Latitude": 49.053162,
    "Longitude": 16.112698,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 14711,
    "Zone": 468,
    "Name": "Horní Kounice",
    "Latitude": 49.026293,
    "Longitude": 16.151487,
    "IsPublic": true,
    "LineList": "443"
  },
  {
    "StopID": 14712,
    "Zone": 468,
    "Name": "Horní Kounice, křižovatka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14713,
    "Zone": 479,
    "Name": "Medlice, křižovatka",
    "Latitude": 49.006268,
    "Longitude": 16.125894,
    "IsPublic": true,
    "LineList": "158,443"
  },
  {
    "StopID": 14714,
    "Zone": 479,
    "Name": "Medlice, u rybníka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14715,
    "Zone": 479,
    "Name": "Přeskače, obec",
    "Latitude": 49.015103,
    "Longitude": 16.107128,
    "IsPublic": true,
    "LineList": "158,443"
  },
  {
    "StopID": 14716,
    "Zone": 479,
    "Name": "Přeskače, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14717,
    "Zone": 479,
    "Name": "Tavíkovice, hájenka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14718,
    "Zone": 479,
    "Name": "Tavíkovice, host.",
    "Latitude": 49.032218,
    "Longitude": 16.106730,
    "IsPublic": true,
    "LineList": "158,443,812"
  },
  {
    "StopID": 14719,
    "Zone": 479,
    "Name": "Tavíkovice, škola",
    "Latitude": 49.033761,
    "Longitude": 16.103083,
    "IsPublic": true,
    "LineList": "158,812"
  },
  {
    "StopID": 14720,
    "Zone": 479,
    "Name": "Tavíkovice, Dobronice",
    "Latitude": 49.020443,
    "Longitude": 16.077052,
    "IsPublic": true,
    "LineList": "158,812"
  },
  {
    "StopID": 14721,
    "Zone": 479,
    "Name": "Tavíkovice, Dobronice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14723,
    "Zone": 479,
    "Name": "Újezd, zámeček",
    "Latitude": 49.023133,
    "Longitude": 16.053992,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 14724,
    "Zone": 477,
    "Name": "Dalešice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14725,
    "Zone": 479,
    "Name": "Tavíkovice, Oseva",
    "Latitude": 49.032868,
    "Longitude": 16.103444,
    "IsPublic": true,
    "LineList": "158,812"
  },
  {
    "StopID": 14726,
    "Zone": 475,
    "Name": "Popůvky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14727,
    "Zone": 475,
    "Name": "Hartvíkovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14801,
    "Zone": 487,
    "Name": "Račice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14802,
    "Zone": 487,
    "Name": "Myslibořice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14803,
    "Zone": 0,
    "Name": "Valeč",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14804,
    "Zone": 0,
    "Name": "Třebenice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14805,
    "Zone": 0,
    "Name": "Dolní Vilémovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14806,
    "Zone": 0,
    "Name": "Dolní Vilémovice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14807,
    "Zone": 0,
    "Name": "Slavičky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14808,
    "Zone": 0,
    "Name": "Slavičky, Okrašovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14809,
    "Zone": 0,
    "Name": "Slavičky, Okrašovice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14810,
    "Zone": 0,
    "Name": "Kožichovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14811,
    "Zone": 0,
    "Name": "Třebíč, správa silnic",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14812,
    "Zone": 0,
    "Name": "Třebíč, u lípy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14813,
    "Zone": 0,
    "Name": "Třebíč, Hrotovická",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14814,
    "Zone": 0,
    "Name": "Třebíč, žel.st.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 14815,
    "Zone": 0,
    "Name": "Třebíč, aut. nádr.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15001,
    "Zone": 571,
    "Name": "Mikulov, BOSCH",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15101,
    "Zone": 510,
    "Name": "Hajany",
    "Latitude": 49.111111,
    "Longitude": 16.553590,
    "IsPublic": true,
    "LineList": "501,510"
  },
  {
    "StopID": 15102,
    "Zone": 510,
    "Name": "Modřice, Agropodnik",
    "Latitude": 49.115717,
    "Longitude": 16.606647,
    "IsPublic": true,
    "LineList": "511"
  },
  {
    "StopID": 15103,
    "Zone": 510,
    "Name": "Modřice, CTP Inventec",
    "Latitude": 49.115424,
    "Longitude": 16.600605,
    "IsPublic": true,
    "LineList": "502"
  },
  {
    "StopID": 15104,
    "Zone": 510,
    "Name": "Modřice, CTP IFE",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15105,
    "Zone": 510,
    "Name": "Modřice, CTP DHL",
    "Latitude": 49.111496,
    "Longitude": 16.602914,
    "IsPublic": true,
    "LineList": "502"
  },
  {
    "StopID": 15110,
    "Zone": 510,
    "Name": "Modřice, Uhelné sklady",
    "Latitude": 49.118348,
    "Longitude": 16.606220,
    "IsPublic": true,
    "LineList": "511"
  },
  {
    "StopID": 15113,
    "Zone": 510,
    "Name": "Moravany, Bohunická cesta",
    "Latitude": 49.150948,
    "Longitude": 16.583640,
    "IsPublic": true,
    "LineList": "51,501"
  },
  {
    "StopID": 15114,
    "Zone": 510,
    "Name": "Moravany, Hlavní",
    "Latitude": 49.147162,
    "Longitude": 16.578724,
    "IsPublic": true,
    "LineList": "51,501"
  },
  {
    "StopID": 15115,
    "Zone": 510,
    "Name": "Moravany, Nebovidská",
    "Latitude": 49.147983,
    "Longitude": 16.569237,
    "IsPublic": true,
    "LineList": "51,501"
  },
  {
    "StopID": 15116,
    "Zone": 510,
    "Name": "Nebovidy, dolní konec",
    "Latitude": 49.142040,
    "Longitude": 16.549112,
    "IsPublic": true,
    "LineList": "501"
  },
  {
    "StopID": 15117,
    "Zone": 510,
    "Name": "Nebovidy, rozcestí Střelice",
    "Latitude": 49.145417,
    "Longitude": 16.531543,
    "IsPublic": true,
    "LineList": "501"
  },
  {
    "StopID": 15118,
    "Zone": 510,
    "Name": "Nebovidy, u kostela",
    "Latitude": 49.141710,
    "Longitude": 16.553836,
    "IsPublic": true,
    "LineList": "501"
  },
  {
    "StopID": 15119,
    "Zone": 510,
    "Name": "Nebovidy, Závist",
    "Latitude": 49.134425,
    "Longitude": 16.528867,
    "IsPublic": true,
    "LineList": "501"
  },
  {
    "StopID": 15120,
    "Zone": 510,
    "Name": "Želešice, hostinec",
    "Latitude": 49.116874,
    "Longitude": 16.581902,
    "IsPublic": true,
    "LineList": "510"
  },
  {
    "StopID": 15121,
    "Zone": 510,
    "Name": "Želešice, na kopci",
    "Latitude": 49.118344,
    "Longitude": 16.592052,
    "IsPublic": true,
    "LineList": "510"
  },
  {
    "StopID": 15122,
    "Zone": 510,
    "Name": "Modřice, Brněnská",
    "Latitude": 49.129762,
    "Longitude": 16.604962,
    "IsPublic": true,
    "LineList": "94,104,105,108,502,504,505,510,511,512,513"
  },
  {
    "StopID": 15123,
    "Zone": 510,
    "Name": "Modřice, čistička",
    "Latitude": 49.131992,
    "Longitude": 16.633462,
    "IsPublic": true,
    "LineList": "49"
  },
  {
    "StopID": 15124,
    "Zone": 510,
    "Name": "Modřice, Drůbežářské závody",
    "Latitude": 49.133704,
    "Longitude": 16.630941,
    "IsPublic": true,
    "LineList": "49,94,510"
  },
  {
    "StopID": 15125,
    "Zone": 510,
    "Name": "Měnín, Albrechtov",
    "Latitude": 49.068529,
    "Longitude": 16.682665,
    "IsPublic": true,
    "LineList": "151"
  },
  {
    "StopID": 15126,
    "Zone": 510,
    "Name": "Modřice, Husova",
    "Latitude": 49.132200,
    "Longitude": 16.612158,
    "IsPublic": true,
    "LineList": "94,510,519"
  },
  {
    "StopID": 15127,
    "Zone": 510,
    "Name": "Modřice, Masarykova",
    "Latitude": 49.131145,
    "Longitude": 16.614594,
    "IsPublic": true,
    "LineList": "49,94,510,519"
  },
  {
    "StopID": 15128,
    "Zone": 510,
    "Name": "Měnín, u mlýna",
    "Latitude": 49.084637,
    "Longitude": 16.694445,
    "IsPublic": true,
    "LineList": "151,509"
  },
  {
    "StopID": 15129,
    "Zone": 510,
    "Name": "Modřice, náměstí",
    "Latitude": 49.127714,
    "Longitude": 16.615961,
    "IsPublic": true,
    "LineList": "49,94,510,519"
  },
  {
    "StopID": 15130,
    "Zone": 510,
    "Name": "Modřice, Olympia",
    "Latitude": 49.139273,
    "Longitude": 16.634131,
    "IsPublic": true,
    "LineList": "49,78,94,503,510,519"
  },
  {
    "StopID": 15131,
    "Zone": 510,
    "Name": "Opatovice",
    "Latitude": 49.075972,
    "Longitude": 16.641074,
    "IsPublic": true,
    "LineList": "514"
  },
  {
    "StopID": 15132,
    "Zone": 510,
    "Name": "Modřice, Olympia jih",
    "Latitude": 49.135069,
    "Longitude": 16.633864,
    "IsPublic": true,
    "LineList": "49,78,94,503,510,519"
  },
  {
    "StopID": 15133,
    "Zone": 510,
    "Name": "Otmarov, chaloupka",
    "Latitude": 49.100458,
    "Longitude": 16.680497,
    "IsPublic": true,
    "LineList": "509"
  },
  {
    "StopID": 15134,
    "Zone": 510,
    "Name": "Modřice, smyčka",
    "Latitude": 49.126974,
    "Longitude": 16.604488,
    "IsPublic": true,
    "LineList": "2,94,502,504,505,510,511,512,513"
  },
  {
    "StopID": 15135,
    "Zone": 510,
    "Name": "Popovice, u tratě",
    "Latitude": 49.103857,
    "Longitude": 16.608063,
    "IsPublic": true,
    "LineList": "130,511"
  },
  {
    "StopID": 15136,
    "Zone": 510,
    "Name": "Rajhradice, Loučka",
    "Latitude": 49.092567,
    "Longitude": 16.621709,
    "IsPublic": true,
    "LineList": "514"
  },
  {
    "StopID": 15137,
    "Zone": 510,
    "Name": "Modřice, Tyršova",
    "Latitude": 49.129832,
    "Longitude": 16.603529,
    "IsPublic": true,
    "LineList": "2,104,105,108,502,504,505,510,511,512,513,519"
  },
  {
    "StopID": 15138,
    "Zone": 510,
    "Name": "Rajhrad, hospic",
    "Latitude": 49.086062,
    "Longitude": 16.598458,
    "IsPublic": true,
    "LineList": "511,514"
  },
  {
    "StopID": 15139,
    "Zone": 510,
    "Name": "Modřice, Za mlýnem",
    "Latitude": 49.130699,
    "Longitude": 16.624760,
    "IsPublic": true,
    "LineList": "49,94,510"
  },
  {
    "StopID": 15140,
    "Zone": 510,
    "Name": "Modřice, žel.st.",
    "Latitude": 49.133484,
    "Longitude": 16.606821,
    "IsPublic": true,
    "LineList": "94,130,135,510,511,512,513,519"
  },
  {
    "StopID": 15141,
    "Zone": 510,
    "Name": "Modřice, Žižkova",
    "Latitude": 49.134054,
    "Longitude": 16.615130,
    "IsPublic": true,
    "LineList": "49,94"
  },
  {
    "StopID": 15142,
    "Zone": 510,
    "Name": "Modřice, Evropská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15143,
    "Zone": 510,
    "Name": "Rajhradice, obecní úřad",
    "Latitude": 49.091666,
    "Longitude": 16.633934,
    "IsPublic": true,
    "LineList": "514"
  },
  {
    "StopID": 15144,
    "Zone": 510,
    "Name": "Rajhradice, váha",
    "Latitude": 49.093622,
    "Longitude": 16.635491,
    "IsPublic": true,
    "LineList": "509,514"
  },
  {
    "StopID": 15145,
    "Zone": 510,
    "Name": "Rebešovice",
    "Latitude": 49.104969,
    "Longitude": 16.638034,
    "IsPublic": true,
    "LineList": "509"
  },
  {
    "StopID": 15146,
    "Zone": 510,
    "Name": "Rebešovice, Horky",
    "Latitude": 49.108661,
    "Longitude": 16.641332,
    "IsPublic": true,
    "LineList": "509"
  },
  {
    "StopID": 15149,
    "Zone": 510,
    "Name": "Rajhrad, Městečko",
    "Latitude": 49.089174,
    "Longitude": 16.606040,
    "IsPublic": true,
    "LineList": "514"
  },
  {
    "StopID": 15153,
    "Zone": 510,
    "Name": "Popovice, železniční stanice",
    "Latitude": 49.103236,
    "Longitude": 16.607532,
    "IsPublic": true,
    "LineList": "511"
  },
  {
    "StopID": 15154,
    "Zone": 510,
    "Name": "Měnín, ZD",
    "Latitude": 49.091570,
    "Longitude": 16.689734,
    "IsPublic": true,
    "LineList": "509"
  },
  {
    "StopID": 15155,
    "Zone": 510,
    "Name": "Popovice",
    "Latitude": 49.106740,
    "Longitude": 16.615093,
    "IsPublic": true,
    "LineList": "511"
  },
  {
    "StopID": 15156,
    "Zone": 510,
    "Name": "Holasice",
    "Latitude": 49.078005,
    "Longitude": 16.603970,
    "IsPublic": true,
    "LineList": "505"
  },
  {
    "StopID": 15162,
    "Zone": 510,
    "Name": "Želešice, u dálnice",
    "Latitude": 49.115128,
    "Longitude": 16.569013,
    "IsPublic": true,
    "LineList": "510"
  },
  {
    "StopID": 15165,
    "Zone": 510,
    "Name": "Měnín, obch.stř.",
    "Latitude": 49.079732,
    "Longitude": 16.693543,
    "IsPublic": true,
    "LineList": "151,509"
  },
  {
    "StopID": 15166,
    "Zone": 510,
    "Name": "Rajhrad, stará pošta",
    "Latitude": 49.087692,
    "Longitude": 16.591767,
    "IsPublic": true,
    "LineList": "504,511,512,513"
  },
  {
    "StopID": 15167,
    "Zone": 610,
    "Name": "Měnín, rozcestí",
    "Latitude": 49.087222,
    "Longitude": 16.716474,
    "IsPublic": true,
    "LineList": "95,109,151,612"
  },
  {
    "StopID": 15168,
    "Zone": 510,
    "Name": "Rajhrad, městský úřad",
    "Latitude": 49.089813,
    "Longitude": 16.603978,
    "IsPublic": true,
    "LineList": "504,505,511"
  },
  {
    "StopID": 15171,
    "Zone": 510,
    "Name": "Měnín, u pomníku",
    "Latitude": 49.085690,
    "Longitude": 16.698812,
    "IsPublic": true,
    "LineList": "151"
  },
  {
    "StopID": 15175,
    "Zone": 510,
    "Name": "Otmarov",
    "Latitude": 49.100402,
    "Longitude": 16.672208,
    "IsPublic": true,
    "LineList": "509"
  },
  {
    "StopID": 15176,
    "Zone": 510,
    "Name": "Rajhradice, obalovna",
    "Latitude": 49.096397,
    "Longitude": 16.651628,
    "IsPublic": true,
    "LineList": "509"
  },
  {
    "StopID": 15179,
    "Zone": 510,
    "Name": "Rajhrad, klášter",
    "Latitude": 49.090886,
    "Longitude": 16.614919,
    "IsPublic": true,
    "LineList": "514"
  },
  {
    "StopID": 15180,
    "Zone": 510,
    "Name": "Želešice, u Sulzrů",
    "Latitude": 49.116802,
    "Longitude": 16.577849,
    "IsPublic": true,
    "LineList": "510"
  },
  {
    "StopID": 15181,
    "Zone": 510,
    "Name": "Rajhrad, žel.st.",
    "Latitude": 49.084353,
    "Longitude": 16.605137,
    "IsPublic": true,
    "LineList": "130,502,504,505,511,514"
  },
  {
    "StopID": 15182,
    "Zone": 510,
    "Name": "Rajhrad, GEIS",
    "Latitude": 49.085488,
    "Longitude": 16.582678,
    "IsPublic": true,
    "LineList": "504,511,512,513"
  },
  {
    "StopID": 15183,
    "Zone": 510,
    "Name": "Bobrava, motel",
    "Latitude": 49.106888,
    "Longitude": 16.601436,
    "IsPublic": true,
    "LineList": "511"
  },
  {
    "StopID": 15184,
    "Zone": 510,
    "Name": "Bobrava, střed",
    "Latitude": 49.105065,
    "Longitude": 16.601406,
    "IsPublic": true,
    "LineList": "511"
  },
  {
    "StopID": 15185,
    "Zone": 510,
    "Name": "Modřice, Decathlon",
    "Latitude": 49.137598,
    "Longitude": 16.637297,
    "IsPublic": true,
    "LineList": "78"
  },
  {
    "StopID": 15186,
    "Zone": 510,
    "Name": "Modřice, XXXLutz",
    "Latitude": 49.138934,
    "Longitude": 16.637262,
    "IsPublic": true,
    "LineList": "78"
  },
  {
    "StopID": 15201,
    "Zone": 520,
    "Name": "Bratčice",
    "Latitude": 49.065502,
    "Longitude": 16.522818,
    "IsPublic": true,
    "LineList": "154,512,513"
  },
  {
    "StopID": 15202,
    "Zone": 520,
    "Name": "Bratčice, pískovna",
    "Latitude": 49.059682,
    "Longitude": 16.517592,
    "IsPublic": true,
    "LineList": "154,513"
  },
  {
    "StopID": 15203,
    "Zone": 520,
    "Name": "Ledce, obecní úřad",
    "Latitude": 49.052175,
    "Longitude": 16.555735,
    "IsPublic": true,
    "LineList": "154,504"
  },
  {
    "StopID": 15204,
    "Zone": 520,
    "Name": "Ledce, rozcestí",
    "Latitude": 49.049795,
    "Longitude": 16.565591,
    "IsPublic": true,
    "LineList": "154,504"
  },
  {
    "StopID": 15205,
    "Zone": 520,
    "Name": "Medlov",
    "Latitude": 49.034707,
    "Longitude": 16.523155,
    "IsPublic": true,
    "LineList": "154,504,513"
  },
  {
    "StopID": 15206,
    "Zone": 520,
    "Name": "Mělčany",
    "Latitude": 49.075269,
    "Longitude": 16.493576,
    "IsPublic": true,
    "LineList": "512"
  },
  {
    "StopID": 15207,
    "Zone": 520,
    "Name": "Němčičky",
    "Latitude": 49.050620,
    "Longitude": 16.501284,
    "IsPublic": true,
    "LineList": "154,513"
  },
  {
    "StopID": 15208,
    "Zone": 520,
    "Name": "Sobotovice",
    "Latitude": 49.059106,
    "Longitude": 16.558127,
    "IsPublic": true,
    "LineList": "154,504"
  },
  {
    "StopID": 15209,
    "Zone": 520,
    "Name": "Sobotovice, transformátor",
    "Latitude": 49.061513,
    "Longitude": 16.552708,
    "IsPublic": true,
    "LineList": "154,504"
  },
  {
    "StopID": 15210,
    "Zone": 520,
    "Name": "Syrovice",
    "Latitude": 49.080309,
    "Longitude": 16.548539,
    "IsPublic": true,
    "LineList": "154,504,511,512,513"
  },
  {
    "StopID": 15211,
    "Zone": 520,
    "Name": "Syrovice, MŠ",
    "Latitude": 49.078921,
    "Longitude": 16.546658,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 15212,
    "Zone": 520,
    "Name": "Syrovice, Sobotovická",
    "Latitude": 49.077625,
    "Longitude": 16.545298,
    "IsPublic": true,
    "LineList": "154,504"
  },
  {
    "StopID": 15213,
    "Zone": 525,
    "Name": "Blučina, Komenského",
    "Latitude": 49.055334,
    "Longitude": 16.635080,
    "IsPublic": true,
    "LineList": "151,514"
  },
  {
    "StopID": 15214,
    "Zone": 525,
    "Name": "Blučina, náměstí",
    "Latitude": 49.054900,
    "Longitude": 16.646477,
    "IsPublic": true,
    "LineList": "151,514"
  },
  {
    "StopID": 15215,
    "Zone": 525,
    "Name": "Blučina, obch.stř.",
    "Latitude": 49.056137,
    "Longitude": 16.645115,
    "IsPublic": true,
    "LineList": "514"
  },
  {
    "StopID": 15216,
    "Zone": 525,
    "Name": "Blučina, hřbitov",
    "Latitude": 49.052408,
    "Longitude": 16.656917,
    "IsPublic": true,
    "LineList": "151"
  },
  {
    "StopID": 15217,
    "Zone": 525,
    "Name": "Blučina, ZD",
    "Latitude": 49.053467,
    "Longitude": 16.626852,
    "IsPublic": true,
    "LineList": "151,514"
  },
  {
    "StopID": 15218,
    "Zone": 525,
    "Name": "Hrušovany u Brna, aut. st.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15219,
    "Zone": 525,
    "Name": "Hrušovany u Brna, obecní úřad",
    "Latitude": 49.039091,
    "Longitude": 16.594531,
    "IsPublic": true,
    "LineList": "154,521"
  },
  {
    "StopID": 15220,
    "Zone": 525,
    "Name": "Hrušovany u Brna, sídliště",
    "Latitude": 49.039226,
    "Longitude": 16.584787,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 15221,
    "Zone": 525,
    "Name": "Hrušovany u Brna, VÚZA",
    "Latitude": 49.042062,
    "Longitude": 16.577123,
    "IsPublic": true,
    "LineList": "154"
  },
  {
    "StopID": 15222,
    "Zone": 525,
    "Name": "Hrušovany u B., ž.s.",
    "Latitude": 49.034256,
    "Longitude": 16.591743,
    "IsPublic": true,
    "LineList": "130,135,154,521"
  },
  {
    "StopID": 15223,
    "Zone": 525,
    "Name": "Moutnice, střed",
    "Latitude": 49.049062,
    "Longitude": 16.737068,
    "IsPublic": true,
    "LineList": "109,612"
  },
  {
    "StopID": 15224,
    "Zone": 525,
    "Name": "Moutnice, u fary",
    "Latitude": 49.050630,
    "Longitude": 16.738792,
    "IsPublic": true,
    "LineList": "612"
  },
  {
    "StopID": 15225,
    "Zone": 525,
    "Name": "Nesvačilka",
    "Latitude": 49.064001,
    "Longitude": 16.754377,
    "IsPublic": true,
    "LineList": "612"
  },
  {
    "StopID": 15226,
    "Zone": 525,
    "Name": "Těšany",
    "Latitude": 49.039401,
    "Longitude": 16.771127,
    "IsPublic": true,
    "LineList": "109,612"
  },
  {
    "StopID": 15227,
    "Zone": 525,
    "Name": "Těšany, u váhy",
    "Latitude": 49.041014,
    "Longitude": 16.765070,
    "IsPublic": true,
    "LineList": "109,612"
  },
  {
    "StopID": 15228,
    "Zone": 525,
    "Name": "Židlochovice, ADOSA",
    "Latitude": 49.028799,
    "Longitude": 16.617033,
    "IsPublic": true,
    "LineList": "520"
  },
  {
    "StopID": 15229,
    "Zone": 525,
    "Name": "Židlochovice, a.s.",
    "Latitude": 49.036032,
    "Longitude": 16.614758,
    "IsPublic": true,
    "LineList": "151,154,505,514,520,521,522"
  },
  {
    "StopID": 15230,
    "Zone": 525,
    "Name": "Židlochovice, škola",
    "Latitude": 49.037011,
    "Longitude": 16.610483,
    "IsPublic": true,
    "LineList": "154,521"
  },
  {
    "StopID": 15231,
    "Zone": 525,
    "Name": "Židlochovice, nábřeží",
    "Latitude": 49.032948,
    "Longitude": 16.620197,
    "IsPublic": true,
    "LineList": "521,522"
  },
  {
    "StopID": 15232,
    "Zone": 525,
    "Name": "Moutnice, Rozařín",
    "Latitude": 49.052795,
    "Longitude": 16.737614,
    "IsPublic": true,
    "LineList": "109,612"
  },
  {
    "StopID": 15233,
    "Zone": 525,
    "Name": "Měnín, Jalovisko",
    "Latitude": 49.055856,
    "Longitude": 16.707137,
    "IsPublic": true,
    "LineList": "612"
  },
  {
    "StopID": 15234,
    "Zone": 520,
    "Name": "Medlov, Kafilerie",
    "Latitude": 49.017782,
    "Longitude": 16.534938,
    "IsPublic": true,
    "LineList": "504"
  },
  {
    "StopID": 15235,
    "Zone": 520,
    "Name": "Medlov, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15236,
    "Zone": 520,
    "Name": "Sobotovice, rozcestí",
    "Latitude": 49.060587,
    "Longitude": 16.565757,
    "IsPublic": true,
    "LineList": "504"
  },
  {
    "StopID": 15237,
    "Zone": 525,
    "Name": "Hrušovany u Brna, parkoviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15238,
    "Zone": 525,
    "Name": "Těšany, u transformátoru",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15239,
    "Zone": 525,
    "Name": "Židlochovice, sídliště",
    "Latitude": 49.039600,
    "Longitude": 16.616325,
    "IsPublic": true,
    "LineList": "151,505,514"
  },
  {
    "StopID": 15240,
    "Zone": 525,
    "Name": "Židlochovice, Sportovní",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15241,
    "Zone": 525,
    "Name": "Židlochovice, žel.st.",
    "Latitude": 49.033551,
    "Longitude": 16.617002,
    "IsPublic": true,
    "LineList": "130,151,154,505,514,520,521,522"
  },
  {
    "StopID": 15242,
    "Zone": 520,
    "Name": "Syrovice, logistický areál",
    "Latitude": 49.075933,
    "Longitude": 16.556060,
    "IsPublic": true,
    "LineList": "504"
  },
  {
    "StopID": 15243,
    "Zone": 520,
    "Name": "Syrovice, Chocholáč",
    "Latitude": 49.075679,
    "Longitude": 16.541612,
    "IsPublic": true,
    "LineList": "154,512,513"
  },
  {
    "StopID": 15251,
    "Zone": 525,
    "Name": "Vojkovice",
    "Latitude": 49.052156,
    "Longitude": 16.607262,
    "IsPublic": true,
    "LineList": "505"
  },
  {
    "StopID": 15252,
    "Zone": 525,
    "Name": "Vojkovice, sídliště",
    "Latitude": 49.056811,
    "Longitude": 16.603809,
    "IsPublic": true,
    "LineList": "505"
  },
  {
    "StopID": 15253,
    "Zone": 525,
    "Name": "Vojkovice, stanoviště NAD",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15254,
    "Zone": 525,
    "Name": "Nesvačilka, knihovna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15255,
    "Zone": 520,
    "Name": "Medlov, seniorcentrum",
    "Latitude": 49.035711,
    "Longitude": 16.528611,
    "IsPublic": true,
    "LineList": "154,504"
  },
  {
    "StopID": 15256,
    "Zone": 525,
    "Name": "Moutnice, k Jalovisku",
    "Latitude": 49.048213,
    "Longitude": 16.736238,
    "IsPublic": true,
    "LineList": "612"
  },
  {
    "StopID": 15301,
    "Zone": 535,
    "Name": "Přísnotice",
    "Latitude": 49.003395,
    "Longitude": 16.613415,
    "IsPublic": true,
    "LineList": "520"
  },
  {
    "StopID": 15302,
    "Zone": 535,
    "Name": "Unkovice, rozc.",
    "Latitude": 49.015588,
    "Longitude": 16.604825,
    "IsPublic": true,
    "LineList": "520"
  },
  {
    "StopID": 15303,
    "Zone": 535,
    "Name": "Žabčice",
    "Latitude": 49.012531,
    "Longitude": 16.601671,
    "IsPublic": true,
    "LineList": "520"
  },
  {
    "StopID": 15304,
    "Zone": 535,
    "Name": "Žabčice, sokolovna",
    "Latitude": 49.012877,
    "Longitude": 16.600250,
    "IsPublic": true,
    "LineList": "520"
  },
  {
    "StopID": 15305,
    "Zone": 535,
    "Name": "Žabčice, u Mahovských",
    "Latitude": 49.004733,
    "Longitude": 16.609839,
    "IsPublic": true,
    "LineList": "520"
  },
  {
    "StopID": 15306,
    "Zone": 535,
    "Name": "Žabčice, žel. st.",
    "Latitude": 49.010961,
    "Longitude": 16.595014,
    "IsPublic": true,
    "LineList": "130,520"
  },
  {
    "StopID": 15307,
    "Zone": 535,
    "Name": "Vranovice, ž.s.",
    "Latitude": 48.963975,
    "Longitude": 16.605012,
    "IsPublic": true,
    "LineList": "130,135,165,520,530"
  },
  {
    "StopID": 15308,
    "Zone": 530,
    "Name": "Cvrčovice",
    "Latitude": 48.996648,
    "Longitude": 16.512870,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 15309,
    "Zone": 530,
    "Name": "Cvrčovice, učiliště",
    "Latitude": 48.990823,
    "Longitude": 16.516354,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 15310,
    "Zone": 540,
    "Name": "Ivaň",
    "Latitude": 48.929280,
    "Longitude": 16.575250,
    "IsPublic": true,
    "LineList": "530"
  },
  {
    "StopID": 15311,
    "Zone": 540,
    "Name": "Ivaň, hájenka Plaček",
    "Latitude": 48.946602,
    "Longitude": 16.589208,
    "IsPublic": true,
    "LineList": "530"
  },
  {
    "StopID": 15312,
    "Zone": 530,
    "Name": "Malešovice, ObÚ",
    "Latitude": 49.022869,
    "Longitude": 16.500382,
    "IsPublic": true,
    "LineList": "164,512"
  },
  {
    "StopID": 15313,
    "Zone": 530,
    "Name": "Odrovice",
    "Latitude": 49.007622,
    "Longitude": 16.511004,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 15314,
    "Zone": 530,
    "Name": "Odrovice, bytovky",
    "Latitude": 49.011565,
    "Longitude": 16.507116,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 15315,
    "Zone": 530,
    "Name": "Pohořelice, Brněnská",
    "Latitude": 48.984900,
    "Longitude": 16.530256,
    "IsPublic": true,
    "LineList": "104,105,108,504"
  },
  {
    "StopID": 15316,
    "Zone": 530,
    "Name": "Pohořelice, Mariánský dvůr",
    "Latitude": 48.956485,
    "Longitude": 16.530842,
    "IsPublic": true,
    "LineList": "105"
  },
  {
    "StopID": 15317,
    "Zone": 530,
    "Name": "Pohořelice, náměstí",
    "Latitude": 48.980757,
    "Longitude": 16.522231,
    "IsPublic": true,
    "LineList": "104,105,108,164,165,504"
  },
  {
    "StopID": 15318,
    "Zone": 540,
    "Name": "Pohořelice, Nová Ves",
    "Latitude": 48.937072,
    "Longitude": 16.528308,
    "IsPublic": true,
    "LineList": "105"
  },
  {
    "StopID": 15319,
    "Zone": 540,
    "Name": "Pohořelice, Nová Ves, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15320,
    "Zone": 530,
    "Name": "Pohořelice, obchodní akademie",
    "Latitude": 48.978607,
    "Longitude": 16.505342,
    "IsPublic": true,
    "LineList": "108"
  },
  {
    "StopID": 15321,
    "Zone": 530,
    "Name": "Pohořelice, Smolín",
    "Latitude": 49.007296,
    "Longitude": 16.540232,
    "IsPublic": true,
    "LineList": "504"
  },
  {
    "StopID": 15322,
    "Zone": 530,
    "Name": "Pohořelice, Smolín, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15323,
    "Zone": 530,
    "Name": "Pohořelice, Tyršova",
    "Latitude": 48.983575,
    "Longitude": 16.519512,
    "IsPublic": true,
    "LineList": "164"
  },
  {
    "StopID": 15324,
    "Zone": 530,
    "Name": "Pohořelice, Velký Dvůr",
    "Latitude": 48.962313,
    "Longitude": 16.533415,
    "IsPublic": true,
    "LineList": "105,165"
  },
  {
    "StopID": 15325,
    "Zone": 530,
    "Name": "Pohořelice, Velký Dvůr, rozcestí",
    "Latitude": 48.962035,
    "Longitude": 16.519420,
    "IsPublic": true,
    "LineList": "104,105"
  },
  {
    "StopID": 15326,
    "Zone": 530,
    "Name": "Pohořelice, Vilémov",
    "Latitude": 48.948333,
    "Longitude": 16.531333,
    "IsPublic": true,
    "LineList": "105"
  },
  {
    "StopID": 15327,
    "Zone": 530,
    "Name": "Pohořelice, Městský úřad",
    "Latitude": 48.976912,
    "Longitude": 16.515378,
    "IsPublic": true,
    "LineList": "104,105,164,165"
  },
  {
    "StopID": 15328,
    "Zone": 535,
    "Name": "Přibice, kostel",
    "Latitude": 48.961798,
    "Longitude": 16.573021,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15329,
    "Zone": 535,
    "Name": "Přibice, u kaple",
    "Latitude": 48.963595,
    "Longitude": 16.575845,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15330,
    "Zone": 535,
    "Name": "Nosislav, Kroužek",
    "Latitude": 49.014256,
    "Longitude": 16.652173,
    "IsPublic": true,
    "LineList": "521,522"
  },
  {
    "StopID": 15331,
    "Zone": 535,
    "Name": "Nosislav, Městečko",
    "Latitude": 49.010659,
    "Longitude": 16.658950,
    "IsPublic": true,
    "LineList": "521,522"
  },
  {
    "StopID": 15332,
    "Zone": 535,
    "Name": "Nosislav, Pod kopcem",
    "Latitude": 49.008640,
    "Longitude": 16.665974,
    "IsPublic": true,
    "LineList": "521,522"
  },
  {
    "StopID": 15333,
    "Zone": 535,
    "Name": "Uherčice, Na trávníku",
    "Latitude": 48.970176,
    "Longitude": 16.651922,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15334,
    "Zone": 535,
    "Name": "Uherčice, obecní úřad",
    "Latitude": 48.968026,
    "Longitude": 16.655063,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15335,
    "Zone": 535,
    "Name": "Uherčice, ZD",
    "Latitude": 48.965845,
    "Longitude": 16.663422,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15336,
    "Zone": 535,
    "Name": "Velké Němčice",
    "Latitude": 48.994930,
    "Longitude": 16.675518,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15337,
    "Zone": 535,
    "Name": "Velké Němčice, Boudky",
    "Latitude": 49.004601,
    "Longitude": 16.671142,
    "IsPublic": true,
    "LineList": "521,522"
  },
  {
    "StopID": 15338,
    "Zone": 535,
    "Name": "V. Němčice, Brněnská",
    "Latitude": 48.993811,
    "Longitude": 16.675252,
    "IsPublic": true,
    "LineList": "521"
  },
  {
    "StopID": 15339,
    "Zone": 535,
    "Name": "Velké Němčice, Nová Ves",
    "Latitude": 48.974189,
    "Longitude": 16.698810,
    "IsPublic": true,
    "LineList": "521"
  },
  {
    "StopID": 15340,
    "Zone": 535,
    "Name": "Vel.Němčice ObÚ",
    "Latitude": 48.991264,
    "Longitude": 16.670733,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15341,
    "Zone": 535,
    "Name": "Velké Němčice, rozcestí",
    "Latitude": 48.981235,
    "Longitude": 16.649300,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15342,
    "Zone": 535,
    "Name": "Velké Němčice, škola",
    "Latitude": 48.991905,
    "Longitude": 16.674080,
    "IsPublic": true,
    "LineList": "165,521,522"
  },
  {
    "StopID": 15343,
    "Zone": 535,
    "Name": "Velké Němčice, ZD",
    "Latitude": 48.988616,
    "Longitude": 16.679204,
    "IsPublic": true,
    "LineList": "521"
  },
  {
    "StopID": 15344,
    "Zone": 545,
    "Name": "Boleradice",
    "Latitude": 48.967437,
    "Longitude": 16.814206,
    "IsPublic": true,
    "LineList": "541,612"
  },
  {
    "StopID": 15345,
    "Zone": 545,
    "Name": "Boleradice, mlýn",
    "Latitude": 48.962670,
    "Longitude": 16.833974,
    "IsPublic": true,
    "LineList": "541"
  },
  {
    "StopID": 15346,
    "Zone": 545,
    "Name": "Boleradice, u kříže",
    "Latitude": 48.969532,
    "Longitude": 16.806925,
    "IsPublic": true,
    "LineList": "612"
  },
  {
    "StopID": 15347,
    "Zone": 545,
    "Name": "Boleradice, ZD",
    "Latitude": 48.963007,
    "Longitude": 16.825669,
    "IsPublic": true,
    "LineList": "541"
  },
  {
    "StopID": 15348,
    "Zone": 537,
    "Name": "Diváky, dílny",
    "Latitude": 48.993794,
    "Longitude": 16.784093,
    "IsPublic": true,
    "LineList": "522,612"
  },
  {
    "StopID": 15349,
    "Zone": 537,
    "Name": "Diváky, dolní konec",
    "Latitude": 48.991043,
    "Longitude": 16.798233,
    "IsPublic": true,
    "LineList": "612"
  },
  {
    "StopID": 15350,
    "Zone": 537,
    "Name": "Diváky, obecní úřad",
    "Latitude": 48.989140,
    "Longitude": 16.788904,
    "IsPublic": true,
    "LineList": "522,612"
  },
  {
    "StopID": 15351,
    "Zone": 537,
    "Name": "Diváky, samota",
    "Latitude": 48.987544,
    "Longitude": 16.803445,
    "IsPublic": true,
    "LineList": "612"
  },
  {
    "StopID": 15352,
    "Zone": 537,
    "Name": "Křepice, dolní",
    "Latitude": 49.000898,
    "Longitude": 16.723558,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15353,
    "Zone": 537,
    "Name": "Křepice, škola",
    "Latitude": 48.998483,
    "Longitude": 16.717538,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15354,
    "Zone": 545,
    "Name": "Kurdějov, most",
    "Latitude": 48.956475,
    "Longitude": 16.763122,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15355,
    "Zone": 545,
    "Name": "Kurdějov, na kopci",
    "Latitude": 48.954042,
    "Longitude": 16.759311,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15356,
    "Zone": 545,
    "Name": "Kurdějov, u penzionu",
    "Latitude": 48.961906,
    "Longitude": 16.760426,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15357,
    "Zone": 535,
    "Name": "Vranovice, vodárna",
    "Latitude": 48.975217,
    "Longitude": 16.633908,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15358,
    "Zone": 535,
    "Name": "Vranovice, Lipová",
    "Latitude": 48.970754,
    "Longitude": 16.606221,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15360,
    "Zone": 537,
    "Name": "Nikolčice, Jednota",
    "Latitude": 48.992387,
    "Longitude": 16.753876,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15361,
    "Zone": 537,
    "Name": "Nikolčice, obecní úřad",
    "Latitude": 48.995315,
    "Longitude": 16.753468,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15362,
    "Zone": 537,
    "Name": "Nikolčice, rozcestí",
    "Latitude": 48.983856,
    "Longitude": 16.762560,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15363,
    "Zone": 537,
    "Name": "Nikolčice, ZD",
    "Latitude": 48.999772,
    "Longitude": 16.742824,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15364,
    "Zone": 537,
    "Name": "Šitbořice, na kopci",
    "Latitude": 49.011477,
    "Longitude": 16.778066,
    "IsPublic": true,
    "LineList": "522,612"
  },
  {
    "StopID": 15365,
    "Zone": 537,
    "Name": "Šitbořice, Nikolčická",
    "Latitude": 49.016373,
    "Longitude": 16.775370,
    "IsPublic": true,
    "LineList": "522,612"
  },
  {
    "StopID": 15366,
    "Zone": 537,
    "Name": "Šitbořice, ObÚ",
    "Latitude": 49.015388,
    "Longitude": 16.776133,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15367,
    "Zone": 535,
    "Name": "Vranovice, škola",
    "Latitude": 48.966768,
    "Longitude": 16.606556,
    "IsPublic": true,
    "LineList": "165,520"
  },
  {
    "StopID": 15368,
    "Zone": 530,
    "Name": "Pohořelice, prům. zóna jih",
    "Latitude": 48.971631,
    "Longitude": 16.516888,
    "IsPublic": true,
    "LineList": "104,105,164,165"
  },
  {
    "StopID": 15369,
    "Zone": 530,
    "Name": "Pohořelice, Velký Dvůr, sádky",
    "Latitude": 48.963997,
    "Longitude": 16.537391,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15370,
    "Zone": 530,
    "Name": "Pohořelice, tiskárna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15371,
    "Zone": 535,
    "Name": "Vranovice, sokolovna",
    "Latitude": 48.971155,
    "Longitude": 16.603841,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15372,
    "Zone": 537,
    "Name": "Nikolčice, škola",
    "Latitude": 48.996048,
    "Longitude": 16.753804,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15379,
    "Zone": 530,
    "Name": "Pohořelice, průmyslová zóna východ",
    "Latitude": 48.990230,
    "Longitude": 16.540052,
    "IsPublic": true,
    "LineList": "104,105,108,504"
  },
  {
    "StopID": 15380,
    "Zone": 535,
    "Name": "Vranovice, u hřbitova",
    "Latitude": 48.967671,
    "Longitude": 16.588811,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15381,
    "Zone": 537,
    "Name": "Diváky, pošta",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15382,
    "Zone": 545,
    "Name": "Kurdějov, u hřiště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15400,
    "Zone": 545,
    "Name": "Horní Bojanovice",
    "Latitude": 48.949048,
    "Longitude": 16.800138,
    "IsPublic": true,
    "LineList": "541"
  },
  {
    "StopID": 15401,
    "Zone": 545,
    "Name": "Horní Bojanovice, rozcestí",
    "Latitude": 48.950262,
    "Longitude": 16.810931,
    "IsPublic": true,
    "LineList": "541"
  },
  {
    "StopID": 15402,
    "Zone": 545,
    "Name": "Horní Bojanovice, ZD",
    "Latitude": 48.940717,
    "Longitude": 16.797280,
    "IsPublic": true,
    "LineList": "541"
  },
  {
    "StopID": 15403,
    "Zone": 545,
    "Name": "Hustopeče, a.n.",
    "Latitude": 48.937990,
    "Longitude": 16.735368,
    "IsPublic": true,
    "LineList": "130,165,521,522,531,540,541,542,543,545,550"
  },
  {
    "StopID": 15404,
    "Zone": 545,
    "Name": "Hustopeče, cihelna",
    "Latitude": 48.946557,
    "Longitude": 16.742498,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15405,
    "Zone": 545,
    "Name": "Hustopeče, farma",
    "Latitude": 48.930205,
    "Longitude": 16.765343,
    "IsPublic": true,
    "LineList": "541"
  },
  {
    "StopID": 15406,
    "Zone": 545,
    "Name": "Hustopeče, Mostárna",
    "Latitude": 48.914237,
    "Longitude": 16.710214,
    "IsPublic": true,
    "LineList": "540,543"
  },
  {
    "StopID": 15407,
    "Zone": 545,
    "Name": "Hustopeče, Nádražní",
    "Latitude": 48.935361,
    "Longitude": 16.731025,
    "IsPublic": true,
    "LineList": "531,540,543"
  },
  {
    "StopID": 15408,
    "Zone": 545,
    "Name": "Hustopeče, plnírna",
    "Latitude": 48.917151,
    "Longitude": 16.703184,
    "IsPublic": true,
    "LineList": "531,540"
  },
  {
    "StopID": 15409,
    "Zone": 545,
    "Name": "Hustopeče, strojírny",
    "Latitude": 48.933399,
    "Longitude": 16.743905,
    "IsPublic": true,
    "LineList": "541,542,550"
  },
  {
    "StopID": 15410,
    "Zone": 545,
    "Name": "Hustopeče, u stadionu",
    "Latitude": 48.944199,
    "Longitude": 16.733041,
    "IsPublic": true,
    "LineList": "522"
  },
  {
    "StopID": 15411,
    "Zone": 545,
    "Name": "Hustopeče, nemocnice",
    "Latitude": 48.944552,
    "Longitude": 16.731520,
    "IsPublic": true,
    "LineList": "165,521,542"
  },
  {
    "StopID": 15412,
    "Zone": 545,
    "Name": "Popice",
    "Latitude": 48.928419,
    "Longitude": 16.664539,
    "IsPublic": true,
    "LineList": "531"
  },
  {
    "StopID": 15413,
    "Zone": 545,
    "Name": "Popice, rozcestí",
    "Latitude": 48.919540,
    "Longitude": 16.684411,
    "IsPublic": true,
    "LineList": "531,540"
  },
  {
    "StopID": 15414,
    "Zone": 545,
    "Name": "Pouzdřany, ObÚ",
    "Latitude": 48.935503,
    "Longitude": 16.625457,
    "IsPublic": true,
    "LineList": "531"
  },
  {
    "StopID": 15415,
    "Zone": 545,
    "Name": "Pouzdřany, škola",
    "Latitude": 48.941515,
    "Longitude": 16.632115,
    "IsPublic": true,
    "LineList": "531"
  },
  {
    "StopID": 15416,
    "Zone": 545,
    "Name": "Starovice",
    "Latitude": 48.955615,
    "Longitude": 16.708684,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15417,
    "Zone": 545,
    "Name": "Starovice, zemědělské družstvo",
    "Latitude": 48.957348,
    "Longitude": 16.698568,
    "IsPublic": true,
    "LineList": "165"
  },
  {
    "StopID": 15418,
    "Zone": 545,
    "Name": "Starovice, rozcestí",
    "Latitude": 48.960176,
    "Longitude": 16.717714,
    "IsPublic": true,
    "LineList": "521"
  },
  {
    "StopID": 15419,
    "Zone": 545,
    "Name": "Starovičky",
    "Latitude": 48.907554,
    "Longitude": 16.775805,
    "IsPublic": true,
    "LineList": "542,550"
  },
  {
    "StopID": 15420,
    "Zone": 545,
    "Name": "Starovičky, průmyslová zóna",
    "Latitude": 48.915072,
    "Longitude": 16.770392,
    "IsPublic": true,
    "LineList": "542"
  },
  {
    "StopID": 15421,
    "Zone": 545,
    "Name": "Starovičky, škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15422,
    "Zone": 545,
    "Name": "Strachotín",
    "Latitude": 48.905282,
    "Longitude": 16.652332,
    "IsPublic": true,
    "LineList": "540"
  },
  {
    "StopID": 15423,
    "Zone": 545,
    "Name": "Šakvice, horní konec",
    "Latitude": 48.899151,
    "Longitude": 16.712902,
    "IsPublic": true,
    "LineList": "531,543"
  },
  {
    "StopID": 15424,
    "Zone": 545,
    "Name": "Šakvice, ObÚ",
    "Latitude": 48.896840,
    "Longitude": 16.717438,
    "IsPublic": true,
    "LineList": "531,543"
  },
  {
    "StopID": 15425,
    "Zone": 545,
    "Name": "Šakvice, žel.st.",
    "Latitude": 48.912728,
    "Longitude": 16.706628,
    "IsPublic": true,
    "LineList": "130,132,135,540,543"
  },
  {
    "StopID": 15426,
    "Zone": 540,
    "Name": "Pasohlávky, přehrada",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15427,
    "Zone": 540,
    "Name": "Pasohlávky, rozcestí Ivaň",
    "Latitude": 48.918785,
    "Longitude": 16.557255,
    "IsPublic": true,
    "LineList": "105,530"
  },
  {
    "StopID": 15428,
    "Zone": 540,
    "Name": "Pasohlávky, u kostela",
    "Latitude": 48.903080,
    "Longitude": 16.541640,
    "IsPublic": true,
    "LineList": "105,530"
  },
  {
    "StopID": 15429,
    "Zone": 540,
    "Name": "Troskotovice, h.",
    "Latitude": 48.921942,
    "Longitude": 16.441028,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15430,
    "Zone": 540,
    "Name": "Troskotovice, prodejna",
    "Latitude": 48.918662,
    "Longitude": 16.432618,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15431,
    "Zone": 540,
    "Name": "Troskotovice, škola",
    "Latitude": 48.918863,
    "Longitude": 16.436743,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15433,
    "Zone": 540,
    "Name": "Vlasatice, obecní úřad",
    "Latitude": 48.933722,
    "Longitude": 16.484161,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15434,
    "Zone": 540,
    "Name": "Vlasatice, Troskotovická",
    "Latitude": 48.931098,
    "Longitude": 16.483465,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15435,
    "Zone": 540,
    "Name": "Aqualand M.",
    "Latitude": 48.904526,
    "Longitude": 16.576056,
    "IsPublic": true,
    "LineList": "105,530"
  },
  {
    "StopID": 15436,
    "Zone": 545,
    "Name": "Hustopeče, Svatopluka Čecha",
    "Latitude": 48.936060,
    "Longitude": 16.729670,
    "IsPublic": true,
    "LineList": "545"
  },
  {
    "StopID": 15437,
    "Zone": 545,
    "Name": "Hustopeče, Javorová",
    "Latitude": 48.938220,
    "Longitude": 16.728740,
    "IsPublic": true,
    "LineList": "545"
  },
  {
    "StopID": 15438,
    "Zone": 545,
    "Name": "Hustopeče, Dlouhá",
    "Latitude": 48.939650,
    "Longitude": 16.727760,
    "IsPublic": true,
    "LineList": "545"
  },
  {
    "StopID": 15439,
    "Zone": 545,
    "Name": "Hustopeče, U Větrolamu",
    "Latitude": 48.941570,
    "Longitude": 16.724540,
    "IsPublic": true,
    "LineList": "545"
  },
  {
    "StopID": 15440,
    "Zone": 545,
    "Name": "Hustopeče, Generála Peřiny",
    "Latitude": 48.941940,
    "Longitude": 16.722210,
    "IsPublic": true,
    "LineList": "545"
  },
  {
    "StopID": 15441,
    "Zone": 545,
    "Name": "Hustopeče, Starovická",
    "Latitude": 48.943380,
    "Longitude": 16.722670,
    "IsPublic": true,
    "LineList": "545"
  },
  {
    "StopID": 15442,
    "Zone": 545,
    "Name": "Hustopeče, Mírová",
    "Latitude": 48.945760,
    "Longitude": 16.725720,
    "IsPublic": true,
    "LineList": "545"
  },
  {
    "StopID": 15443,
    "Zone": 545,
    "Name": "Hustopeče, Žižkova",
    "Latitude": 48.943810,
    "Longitude": 16.730060,
    "IsPublic": true,
    "LineList": "545"
  },
  {
    "StopID": 15444,
    "Zone": 545,
    "Name": "Hustopeče, ZŠ Komenského",
    "Latitude": 48.939930,
    "Longitude": 16.733180,
    "IsPublic": true,
    "LineList": "545"
  },
  {
    "StopID": 15500,
    "Zone": 552,
    "Name": "Dolní Věstonice",
    "Latitude": 48.888252,
    "Longitude": 16.643496,
    "IsPublic": true,
    "LineList": "540,570"
  },
  {
    "StopID": 15501,
    "Zone": 552,
    "Name": "Horní Věstonice",
    "Latitude": 48.875874,
    "Longitude": 16.624679,
    "IsPublic": true,
    "LineList": "540,570"
  },
  {
    "StopID": 15502,
    "Zone": 552,
    "Name": "Klentnice",
    "Latitude": 48.846778,
    "Longitude": 16.644980,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15503,
    "Zone": 552,
    "Name": "Klentnice, rozcestí",
    "Latitude": 48.851233,
    "Longitude": 16.642915,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15504,
    "Zone": 552,
    "Name": "Klentnice, u rybníka",
    "Latitude": 48.840853,
    "Longitude": 16.642589,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15505,
    "Zone": 552,
    "Name": "Pavlov",
    "Latitude": 48.874271,
    "Longitude": 16.673680,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15506,
    "Zone": 552,
    "Name": "Pavlov, Rudolfa Gajdoše",
    "Latitude": 48.872358,
    "Longitude": 16.667379,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15507,
    "Zone": 552,
    "Name": "Pavlov, rozcestí",
    "Latitude": 48.878754,
    "Longitude": 16.676276,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15508,
    "Zone": 552,
    "Name": "Perná",
    "Latitude": 48.855156,
    "Longitude": 16.620798,
    "IsPublic": true,
    "LineList": "540,570"
  },
  {
    "StopID": 15509,
    "Zone": 552,
    "Name": "Perná, Spálená hospoda, hlavní silnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15510,
    "Zone": 552,
    "Name": "Perná, samota",
    "Latitude": 48.859635,
    "Longitude": 16.611095,
    "IsPublic": true,
    "LineList": "540,570"
  },
  {
    "StopID": 15511,
    "Zone": 555,
    "Name": "Bořetice",
    "Latitude": 48.911890,
    "Longitude": 16.854014,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15512,
    "Zone": 555,
    "Name": "Bořetice, u Floriánka",
    "Latitude": 48.910704,
    "Longitude": 16.858762,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15513,
    "Zone": 555,
    "Name": "Bořetice, železniční stanice",
    "Latitude": 48.916373,
    "Longitude": 16.851462,
    "IsPublic": true,
    "LineList": "133,551"
  },
  {
    "StopID": 15514,
    "Zone": 555,
    "Name": "Němčičky, rozcestí",
    "Latitude": 48.936497,
    "Longitude": 16.816053,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15515,
    "Zone": 555,
    "Name": "Němčičky, střed",
    "Latitude": 48.934891,
    "Longitude": 16.821860,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15516,
    "Zone": 555,
    "Name": "Němčičky, transformátor",
    "Latitude": 48.933393,
    "Longitude": 16.818822,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15517,
    "Zone": 555,
    "Name": "Němčičky, u mlýna",
    "Latitude": 48.933338,
    "Longitude": 16.834867,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15518,
    "Zone": 555,
    "Name": "Němčičky, ZD",
    "Latitude": 48.935774,
    "Longitude": 16.828871,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15519,
    "Zone": 555,
    "Name": "Přítluky, pod věží",
    "Latitude": 48.855272,
    "Longitude": 16.773561,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15522,
    "Zone": 555,
    "Name": "Přítluky, rozcestí",
    "Latitude": 48.863261,
    "Longitude": 16.755600,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15523,
    "Zone": 555,
    "Name": "Rakvice, kostel",
    "Latitude": 48.858800,
    "Longitude": 16.812417,
    "IsPublic": true,
    "LineList": "550,555"
  },
  {
    "StopID": 15524,
    "Zone": 555,
    "Name": "Rakvice, rozcestí",
    "Latitude": 48.865774,
    "Longitude": 16.821992,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15525,
    "Zone": 555,
    "Name": "Rakvice, škola",
    "Latitude": 48.858278,
    "Longitude": 16.806630,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15526,
    "Zone": 555,
    "Name": "Rakvice, Trkmanský dvůr",
    "Latitude": 48.867951,
    "Longitude": 16.842758,
    "IsPublic": true,
    "LineList": "542"
  },
  {
    "StopID": 15527,
    "Zone": 555,
    "Name": "Rakvice, Trkmanský dvůr, rozcestí",
    "Latitude": 48.869811,
    "Longitude": 16.831636,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15528,
    "Zone": 555,
    "Name": "Velké Pavlovice, a.n.",
    "Latitude": 48.897816,
    "Longitude": 16.816927,
    "IsPublic": true,
    "LineList": "542,550,551"
  },
  {
    "StopID": 15529,
    "Zone": 555,
    "Name": "Velké Pavlovice, drůběžářské závody",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15530,
    "Zone": 555,
    "Name": "Velké Pavlovice, gymnázium",
    "Latitude": 48.904204,
    "Longitude": 16.816476,
    "IsPublic": true,
    "LineList": "542,550,551"
  },
  {
    "StopID": 15531,
    "Zone": 555,
    "Name": "Velké Pavlovice, obchodní středisko",
    "Latitude": 48.902190,
    "Longitude": 16.818205,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15532,
    "Zone": 555,
    "Name": "Zaječí, za nádražím",
    "Latitude": 48.894263,
    "Longitude": 16.786972,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15533,
    "Zone": 555,
    "Name": "Zaječí, mateřská škola",
    "Latitude": 48.876472,
    "Longitude": 16.768873,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15534,
    "Zone": 555,
    "Name": "Zaječí, restaurace",
    "Latitude": 48.873192,
    "Longitude": 16.766611,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15535,
    "Zone": 555,
    "Name": "Zaječí, rozcestí",
    "Latitude": 48.897023,
    "Longitude": 16.792438,
    "IsPublic": true,
    "LineList": "542,550"
  },
  {
    "StopID": 15536,
    "Zone": 555,
    "Name": "Zaječí, škola",
    "Latitude": 48.871666,
    "Longitude": 16.773978,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15537,
    "Zone": 555,
    "Name": "Zaječí, žel.st.",
    "Latitude": 48.889529,
    "Longitude": 16.781664,
    "IsPublic": true,
    "LineList": "132,133,135,550"
  },
  {
    "StopID": 15538,
    "Zone": 650,
    "Name": "Kobylí",
    "Latitude": 48.932060,
    "Longitude": 16.884068,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15539,
    "Zone": 650,
    "Name": "Kobylí, statek",
    "Latitude": 48.942318,
    "Longitude": 16.897075,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15540,
    "Zone": 650,
    "Name": "Kobylí, škola",
    "Latitude": 48.928781,
    "Longitude": 16.886542,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15541,
    "Zone": 650,
    "Name": "Vrbice, Jednota",
    "Latitude": 48.916185,
    "Longitude": 16.896002,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15542,
    "Zone": 650,
    "Name": "Vrbice, obecní úřad",
    "Latitude": 48.912758,
    "Longitude": 16.891944,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15543,
    "Zone": 552,
    "Name": "Dolní Dunajovice, Hlavní",
    "Latitude": 48.857602,
    "Longitude": 16.586878,
    "IsPublic": true,
    "LineList": "105"
  },
  {
    "StopID": 15544,
    "Zone": 552,
    "Name": "Dolní Dunajovice, Jednota",
    "Latitude": 48.855128,
    "Longitude": 16.592166,
    "IsPublic": true,
    "LineList": "105,540"
  },
  {
    "StopID": 15545,
    "Zone": 552,
    "Name": "Dolní Dunajovice, rozcestí",
    "Latitude": 48.851255,
    "Longitude": 16.609777,
    "IsPublic": true,
    "LineList": "105,540"
  },
  {
    "StopID": 15546,
    "Zone": 550,
    "Name": "Břežany, u hostince",
    "Latitude": 48.867867,
    "Longitude": 16.344198,
    "IsPublic": true,
    "LineList": "158,822"
  },
  {
    "StopID": 15547,
    "Zone": 550,
    "Name": "Břežany, u pošty",
    "Latitude": 48.870178,
    "Longitude": 16.339708,
    "IsPublic": true,
    "LineList": "158,822"
  },
  {
    "StopID": 15548,
    "Zone": 550,
    "Name": "Břežany, u statku",
    "Latitude": 48.872427,
    "Longitude": 16.338143,
    "IsPublic": true,
    "LineList": "158,822"
  },
  {
    "StopID": 15549,
    "Zone": 550,
    "Name": "Břežany, rozcestí k železniční stanici",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15550,
    "Zone": 550,
    "Name": "Damnice",
    "Latitude": 48.920112,
    "Longitude": 16.373595,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 15551,
    "Zone": 550,
    "Name": "Dolenice",
    "Latitude": 48.909272,
    "Longitude": 16.364848,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 15552,
    "Zone": 550,
    "Name": "Jiřice u Miroslavi",
    "Latitude": 48.920697,
    "Longitude": 16.391380,
    "IsPublic": true,
    "LineList": "104,158,450"
  },
  {
    "StopID": 15553,
    "Zone": 550,
    "Name": "Litobratřice, u konírny",
    "Latitude": 48.883510,
    "Longitude": 16.400845,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15554,
    "Zone": 550,
    "Name": "Litobratřice, obecní úřad",
    "Latitude": 48.888136,
    "Longitude": 16.403221,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15555,
    "Zone": 550,
    "Name": "Mackovice, Břežanská",
    "Latitude": 48.881692,
    "Longitude": 16.316718,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 15556,
    "Zone": 550,
    "Name": "Mackovice, obecní úřad",
    "Latitude": 48.882990,
    "Longitude": 16.309570,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 15557,
    "Zone": 459,
    "Name": "Mackovice, rozcestí",
    "Latitude": 48.900845,
    "Longitude": 16.293373,
    "IsPublic": true,
    "LineList": "108"
  },
  {
    "StopID": 15558,
    "Zone": 551,
    "Name": "Drnholec",
    "Latitude": 48.857435,
    "Longitude": 16.487133,
    "IsPublic": true,
    "LineList": "174,530"
  },
  {
    "StopID": 15559,
    "Zone": 551,
    "Name": "Drnholec, škola",
    "Latitude": 48.859678,
    "Longitude": 16.486008,
    "IsPublic": true,
    "LineList": "174,530"
  },
  {
    "StopID": 15560,
    "Zone": 551,
    "Name": "Jevišovka",
    "Latitude": 48.828412,
    "Longitude": 16.465892,
    "IsPublic": true,
    "LineList": "114,174"
  },
  {
    "StopID": 15561,
    "Zone": 551,
    "Name": "Novosedly",
    "Latitude": 48.838139,
    "Longitude": 16.494123,
    "IsPublic": true,
    "LineList": "114,174"
  },
  {
    "StopID": 15562,
    "Zone": 551,
    "Name": "Novosedly, cihelna",
    "Latitude": 48.835651,
    "Longitude": 16.510978,
    "IsPublic": true,
    "LineList": "174"
  },
  {
    "StopID": 15563,
    "Zone": 551,
    "Name": "Novosedly, železniční stanice",
    "Latitude": 48.827217,
    "Longitude": 16.495593,
    "IsPublic": true,
    "LineList": "128,174"
  },
  {
    "StopID": 15564,
    "Zone": 551,
    "Name": "Nový Přerov",
    "Latitude": 48.810388,
    "Longitude": 16.493865,
    "IsPublic": true,
    "LineList": "174"
  },
  {
    "StopID": 15565,
    "Zone": 540,
    "Name": "Brod nad Dyjí, obecní úřad",
    "Latitude": 48.876293,
    "Longitude": 16.536768,
    "IsPublic": true,
    "LineList": "105,530"
  },
  {
    "StopID": 15566,
    "Zone": 550,
    "Name": "Břežany, osada Ležák",
    "Latitude": 48.887026,
    "Longitude": 16.347494,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 15567,
    "Zone": 555,
    "Name": "Velké Pavlovice, Hodonínská",
    "Latitude": 48.897909,
    "Longitude": 16.824946,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 15568,
    "Zone": 555,
    "Name": "Rakvice, U Šutráku",
    "Latitude": 48.852061,
    "Longitude": 16.821324,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15569,
    "Zone": 550,
    "Name": "Břežany, škola",
    "Latitude": 48.874348,
    "Longitude": 16.334747,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 15600,
    "Zone": 562,
    "Name": "Bulhary, cihelna",
    "Latitude": 48.816377,
    "Longitude": 16.761377,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15601,
    "Zone": 562,
    "Name": "Bulhary, střed",
    "Latitude": 48.833047,
    "Longitude": 16.745817,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15602,
    "Zone": 562,
    "Name": "Bulhary, školka",
    "Latitude": 48.828638,
    "Longitude": 16.750328,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15603,
    "Zone": 562,
    "Name": "Bulhary, u sadu",
    "Latitude": 48.836231,
    "Longitude": 16.741364,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15604,
    "Zone": 562,
    "Name": "Milovice, hájenka",
    "Latitude": 48.843073,
    "Longitude": 16.726725,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15605,
    "Zone": 562,
    "Name": "Milovice, restaurace",
    "Latitude": 48.852328,
    "Longitude": 16.698311,
    "IsPublic": true,
    "LineList": "550,570"
  },
  {
    "StopID": 15606,
    "Zone": 565,
    "Name": "Ladná, Mlýnská",
    "Latitude": 48.808210,
    "Longitude": 16.884937,
    "IsPublic": true,
    "LineList": "574"
  },
  {
    "StopID": 15607,
    "Zone": 565,
    "Name": "Ladná, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15608,
    "Zone": 565,
    "Name": "Ladná, škola",
    "Latitude": 48.805472,
    "Longitude": 16.872155,
    "IsPublic": true,
    "LineList": "574"
  },
  {
    "StopID": 15609,
    "Zone": 565,
    "Name": "Ladná, železniční stanice",
    "Latitude": 48.812202,
    "Longitude": 16.880570,
    "IsPublic": true,
    "LineList": "132,135,574"
  },
  {
    "StopID": 15610,
    "Zone": 565,
    "Name": "Moravský Žižkov, Benátky",
    "Latitude": 48.828256,
    "Longitude": 16.929070,
    "IsPublic": true,
    "LineList": "542"
  },
  {
    "StopID": 15611,
    "Zone": 565,
    "Name": "Moravský Žižkov, Bílovská",
    "Latitude": 48.835267,
    "Longitude": 16.922611,
    "IsPublic": true,
    "LineList": "542,556"
  },
  {
    "StopID": 15612,
    "Zone": 565,
    "Name": "Mor. Žižkov, křiž.",
    "Latitude": 48.833828,
    "Longitude": 16.932327,
    "IsPublic": true,
    "LineList": "542,556"
  },
  {
    "StopID": 15613,
    "Zone": 565,
    "Name": "Moravský Žižkov, Prechov dvůr",
    "Latitude": 48.820956,
    "Longitude": 16.924828,
    "IsPublic": true,
    "LineList": "542"
  },
  {
    "StopID": 15614,
    "Zone": 565,
    "Name": "Podivín, Besední dům",
    "Latitude": 48.829762,
    "Longitude": 16.847782,
    "IsPublic": true,
    "LineList": "159,555,556,574"
  },
  {
    "StopID": 15615,
    "Zone": 565,
    "Name": "Podivín, Fruta",
    "Latitude": 48.823680,
    "Longitude": 16.846774,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15618,
    "Zone": 565,
    "Name": "Podivín, Bratislavská",
    "Latitude": 48.829217,
    "Longitude": 16.852864,
    "IsPublic": true,
    "LineList": "159,556,574"
  },
  {
    "StopID": 15619,
    "Zone": 565,
    "Name": "Podivín, žel.st.",
    "Latitude": 48.837177,
    "Longitude": 16.853781,
    "IsPublic": true,
    "LineList": "132,135,159,555,556,574"
  },
  {
    "StopID": 15620,
    "Zone": 565,
    "Name": "Velké Bílovice, a.n.",
    "Latitude": 48.851538,
    "Longitude": 16.889208,
    "IsPublic": true,
    "LineList": "159,542,556"
  },
  {
    "StopID": 15621,
    "Zone": 565,
    "Name": "Velké Bílovice, kovárna",
    "Latitude": 48.847785,
    "Longitude": 16.895286,
    "IsPublic": true,
    "LineList": "159,542,556"
  },
  {
    "StopID": 15622,
    "Zone": 565,
    "Name": "Velké Bílovice, na konci",
    "Latitude": 48.843218,
    "Longitude": 16.901326,
    "IsPublic": true,
    "LineList": "542,556"
  },
  {
    "StopID": 15623,
    "Zone": 565,
    "Name": "Velké Bílovice, Svárov",
    "Latitude": 48.853710,
    "Longitude": 16.882253,
    "IsPublic": true,
    "LineList": "542"
  },
  {
    "StopID": 15624,
    "Zone": 565,
    "Name": "Velké Bílovice, ZD",
    "Latitude": 48.846285,
    "Longitude": 16.884087,
    "IsPublic": true,
    "LineList": "159,556"
  },
  {
    "StopID": 15625,
    "Zone": 562,
    "Name": "Přítluky, Nové Mlýny, Jednota",
    "Latitude": 48.857852,
    "Longitude": 16.731967,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15626,
    "Zone": 562,
    "Name": "Přítluky, Nové Mlýny, obalovna",
    "Latitude": 48.860686,
    "Longitude": 16.741718,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15627,
    "Zone": 560,
    "Name": "Hrabětice",
    "Latitude": 48.796862,
    "Longitude": 16.395168,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15628,
    "Zone": 560,
    "Name": "Hrabětice, rozcestí",
    "Latitude": 48.811255,
    "Longitude": 16.394060,
    "IsPublic": true,
    "LineList": "104,822"
  },
  {
    "StopID": 15629,
    "Zone": 560,
    "Name": "Hrušovany nad Jevišovkou, cukrovar",
    "Latitude": 48.812298,
    "Longitude": 16.402942,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 15630,
    "Zone": 560,
    "Name": "Hrušovany n/J., DAPO",
    "Latitude": 48.836855,
    "Longitude": 16.415297,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 15631,
    "Zone": 560,
    "Name": "Hrušovany n/J., lék.",
    "Latitude": 48.828749,
    "Longitude": 16.399520,
    "IsPublic": true,
    "LineList": "104,114,174,822"
  },
  {
    "StopID": 15632,
    "Zone": 560,
    "Name": "Hrušovany n/J., VÚPP",
    "Latitude": 48.831490,
    "Longitude": 16.401916,
    "IsPublic": true,
    "LineList": "104,158,174,822"
  },
  {
    "StopID": 15633,
    "Zone": 560,
    "Name": "Hrušovany nad Jevišovkou, Pastviny",
    "Latitude": 48.854153,
    "Longitude": 16.383250,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15634,
    "Zone": 560,
    "Name": "Hrušovany nad Jevišovkou, statek",
    "Latitude": 48.817498,
    "Longitude": 16.397738,
    "IsPublic": true,
    "LineList": "104,822"
  },
  {
    "StopID": 15635,
    "Zone": 560,
    "Name": "Hrušovany nad Jevišovkou, STS",
    "Latitude": 48.842893,
    "Longitude": 16.403782,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15636,
    "Zone": 560,
    "Name": "Hrušovany nad Jevišovkou, Znojemská",
    "Latitude": 48.829848,
    "Longitude": 16.394299,
    "IsPublic": true,
    "LineList": "158,822"
  },
  {
    "StopID": 15637,
    "Zone": 560,
    "Name": "Hrušovany n/J., ž.s.",
    "Latitude": 48.810247,
    "Longitude": 16.383262,
    "IsPublic": true,
    "LineList": "104,114,128,141,143,822"
  },
  {
    "StopID": 15638,
    "Zone": 560,
    "Name": "Pravice",
    "Latitude": 48.843889,
    "Longitude": 16.361861,
    "IsPublic": true,
    "LineList": "158,822"
  },
  {
    "StopID": 15639,
    "Zone": 560,
    "Name": "Šanov, požární zbrojnice",
    "Latitude": 48.802118,
    "Longitude": 16.373985,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15640,
    "Zone": 560,
    "Name": "Šanov, u mostu",
    "Latitude": 48.799233,
    "Longitude": 16.386784,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15641,
    "Zone": 561,
    "Name": "Březí",
    "Latitude": 48.821367,
    "Longitude": 16.563256,
    "IsPublic": true,
    "LineList": "114,174"
  },
  {
    "StopID": 15642,
    "Zone": 561,
    "Name": "Dobré Pole",
    "Latitude": 48.825967,
    "Longitude": 16.535573,
    "IsPublic": true,
    "LineList": "114,174"
  },
  {
    "StopID": 15643,
    "Zone": 565,
    "Name": "Podivín, mechanizační středisko",
    "Latitude": 48.819180,
    "Longitude": 16.874679,
    "IsPublic": true,
    "LineList": "574"
  },
  {
    "StopID": 15700,
    "Zone": 552,
    "Name": "Bavory",
    "Latitude": 48.835730,
    "Longitude": 16.622435,
    "IsPublic": true,
    "LineList": "540"
  },
  {
    "StopID": 15701,
    "Zone": 552,
    "Name": "Bavory, rozcestí",
    "Latitude": 48.830759,
    "Longitude": 16.612780,
    "IsPublic": true,
    "LineList": "105,540"
  },
  {
    "StopID": 15702,
    "Zone": 571,
    "Name": "Mikulov, Brněnská",
    "Latitude": 48.812173,
    "Longitude": 16.630506,
    "IsPublic": true,
    "LineList": "105,174,540"
  },
  {
    "StopID": 15703,
    "Zone": 571,
    "Name": "Mikulov, 22. dubna",
    "Latitude": 48.805487,
    "Longitude": 16.633496,
    "IsPublic": true,
    "LineList": "105,174,540,550,570,585"
  },
  {
    "StopID": 15704,
    "Zone": 571,
    "Name": "Mikulov, I. Brno",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15705,
    "Zone": 571,
    "Name": "Mikulov, kasárna",
    "Latitude": 48.816006,
    "Longitude": 16.650171,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15706,
    "Zone": 571,
    "Name": "Mikulov, Mušlov, rozcestí",
    "Latitude": 48.791034,
    "Longitude": 16.673810,
    "IsPublic": true,
    "LineList": "585"
  },
  {
    "StopID": 15707,
    "Zone": 571,
    "Name": "Mikulov, Pavlovská",
    "Latitude": 48.810804,
    "Longitude": 16.642496,
    "IsPublic": true,
    "LineList": "550,570,585"
  },
  {
    "StopID": 15708,
    "Zone": 571,
    "Name": "Mikulov, pneuservis",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15709,
    "Zone": 571,
    "Name": "Mikulov, u parku",
    "Latitude": 48.802437,
    "Longitude": 16.634063,
    "IsPublic": true,
    "LineList": "105,174,540,550,570,585"
  },
  {
    "StopID": 15710,
    "Zone": 571,
    "Name": "Mikulov, u pošty",
    "Latitude": 48.807667,
    "Longitude": 16.639627,
    "IsPublic": true,
    "LineList": "550,570,585"
  },
  {
    "StopID": 15711,
    "Zone": 571,
    "Name": "Mikulov, v lese",
    "Latitude": 48.832028,
    "Longitude": 16.679774,
    "IsPublic": true,
    "LineList": "550"
  },
  {
    "StopID": 15712,
    "Zone": 571,
    "Name": "Mikulov, Valtická",
    "Latitude": 48.801068,
    "Longitude": 16.644782,
    "IsPublic": true,
    "LineList": "585"
  },
  {
    "StopID": 15713,
    "Zone": 571,
    "Name": "Mikulov, Bezručova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15714,
    "Zone": 571,
    "Name": "Mikulov, žel.st.",
    "Latitude": 48.801869,
    "Longitude": 16.626232,
    "IsPublic": true,
    "LineList": "105,114,128,143,174,540,550,570,585"
  },
  {
    "StopID": 15715,
    "Zone": 582,
    "Name": "Sedlec, pošta",
    "Latitude": 48.779212,
    "Longitude": 16.691376,
    "IsPublic": true,
    "LineList": "114,585"
  },
  {
    "StopID": 15716,
    "Zone": 582,
    "Name": "Sedlec, sídliště",
    "Latitude": 48.773291,
    "Longitude": 16.703678,
    "IsPublic": true,
    "LineList": "114,585"
  },
  {
    "StopID": 15717,
    "Zone": 572,
    "Name": "Hlohovec, obecní úřad",
    "Latitude": 48.773973,
    "Longitude": 16.763082,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15718,
    "Zone": 572,
    "Name": "Hlohovec, rybárna",
    "Latitude": 48.775755,
    "Longitude": 16.771297,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15719,
    "Zone": 572,
    "Name": "Hlohovec, Tři Grácie",
    "Latitude": 48.776933,
    "Longitude": 16.783220,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15720,
    "Zone": 572,
    "Name": "Lednice, Apollo",
    "Latitude": 48.785548,
    "Longitude": 16.826424,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15721,
    "Zone": 572,
    "Name": "Lednice, hospodářské družstvo",
    "Latitude": 48.800000,
    "Longitude": 16.791312,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15722,
    "Zone": 572,
    "Name": "Lednice, náměstí",
    "Latitude": 48.800002,
    "Longitude": 16.804153,
    "IsPublic": true,
    "LineList": "555,570"
  },
  {
    "StopID": 15723,
    "Zone": 572,
    "Name": "Lednice, Nejdek",
    "Latitude": 48.812460,
    "Longitude": 16.775268,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15724,
    "Zone": 572,
    "Name": "Lednice, Nejdek, rozcestí",
    "Latitude": 48.808814,
    "Longitude": 16.771998,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15725,
    "Zone": 572,
    "Name": "Lednice, skleníky",
    "Latitude": 48.804268,
    "Longitude": 16.779102,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15726,
    "Zone": 572,
    "Name": "Lednice, škola",
    "Latitude": 48.797341,
    "Longitude": 16.806333,
    "IsPublic": true,
    "LineList": "570"
  },
  {
    "StopID": 15727,
    "Zone": 572,
    "Name": "Lednice, Valtická",
    "Latitude": 48.794975,
    "Longitude": 16.799449,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15728,
    "Zone": 575,
    "Name": "Břeclav, 1. máje",
    "Latitude": 48.758461,
    "Longitude": 16.878682,
    "IsPublic": true,
    "LineList": "570,571"
  },
  {
    "StopID": 15729,
    "Zone": 575,
    "Name": "Břeclav, a.n.",
    "Latitude": 48.754802,
    "Longitude": 16.893472,
    "IsPublic": true,
    "LineList": "114,128,132,135,136,139,143,542,561,562,563,564,565,566,567,568,570,571,572,573,574"
  },
  {
    "StopID": 15730,
    "Zone": 575,
    "Name": "Břeclav, BORS",
    "Latitude": 48.750250,
    "Longitude": 16.893111,
    "IsPublic": true,
    "LineList": "542,561,562,564,565,566,570,572,573,574"
  },
  {
    "StopID": 15731,
    "Zone": 575,
    "Name": "Břeclav, cukrovar",
    "Latitude": 48.763461,
    "Longitude": 16.885672,
    "IsPublic": true,
    "LineList": "542,564,573,574"
  },
  {
    "StopID": 15732,
    "Zone": 575,
    "Name": "Břeclav Gumotex",
    "Latitude": 48.751366,
    "Longitude": 16.894592,
    "IsPublic": true,
    "LineList": "542,561,562,564,565,566,570,572,573,574"
  },
  {
    "StopID": 15733,
    "Zone": 575,
    "Name": "Břeclav, Charvátská Nová Ves, Lednická",
    "Latitude": 48.766752,
    "Longitude": 16.846556,
    "IsPublic": true,
    "LineList": "561,562,569,570"
  },
  {
    "StopID": 15734,
    "Zone": 575,
    "Name": "Břeclav, Stará Břeclav, J. Moláka",
    "Latitude": 48.777407,
    "Longitude": 16.897259,
    "IsPublic": true,
    "LineList": "564,565,569"
  },
  {
    "StopID": 15735,
    "Zone": 575,
    "Name": "Křižovatka Ladná",
    "Latitude": 48.779601,
    "Longitude": 16.902587,
    "IsPublic": true,
    "LineList": "542,564,565,569,573,574"
  },
  {
    "StopID": 15736,
    "Zone": 575,
    "Name": "Břeclav, náměstí TGM, kostel",
    "Latitude": 48.759272,
    "Longitude": 16.880780,
    "IsPublic": true,
    "LineList": "561,562,563,566,567,568,569,570,571,572"
  },
  {
    "StopID": 15737,
    "Zone": 575,
    "Name": "Břeclav, náměstí TGM, městský úřad",
    "Latitude": 48.759683,
    "Longitude": 16.881319,
    "IsPublic": true,
    "LineList": "542,564,572,573,574"
  },
  {
    "StopID": 15738,
    "Zone": 575,
    "Name": "Břeclav, nemocnice",
    "Latitude": 48.753134,
    "Longitude": 16.881758,
    "IsPublic": true,
    "LineList": "562,568,569,572"
  },
  {
    "StopID": 15739,
    "Zone": 575,
    "Name": "Břeclav, Pohansko, rozcestí",
    "Latitude": 48.749449,
    "Longitude": 16.900406,
    "IsPublic": true,
    "LineList": "542,561,562,564,565,566,570,572,573,574"
  },
  {
    "StopID": 15740,
    "Zone": 575,
    "Name": "Břeclav, poliklinika",
    "Latitude": 48.752887,
    "Longitude": 16.883923,
    "IsPublic": true,
    "LineList": "542,564,569,574"
  },
  {
    "StopID": 15741,
    "Zone": 575,
    "Name": "Břeclav, Poštorná, Hlavní na konci",
    "Latitude": 48.758600,
    "Longitude": 16.859367,
    "IsPublic": true,
    "LineList": "561,562,569,570"
  },
  {
    "StopID": 15742,
    "Zone": 575,
    "Name": "Břeclav, Poštorná, kostel",
    "Latitude": 48.752832,
    "Longitude": 16.867198,
    "IsPublic": true,
    "LineList": "114,561,562,563,566,567,568,569,570,571"
  },
  {
    "StopID": 15743,
    "Zone": 575,
    "Name": "Břeclav, Poštorná, Lesní",
    "Latitude": 48.755743,
    "Longitude": 16.873957,
    "IsPublic": true,
    "LineList": "561,562,563,566,567,568,569,570,571"
  },
  {
    "StopID": 15744,
    "Zone": 575,
    "Name": "Břeclav, Poštorná, PKZ",
    "Latitude": 48.751964,
    "Longitude": 16.852040,
    "IsPublic": true,
    "LineList": "562,566,567,568,569,571"
  },
  {
    "StopID": 15745,
    "Zone": 575,
    "Name": "Břeclav, Poštorná, Valtická",
    "Latitude": 48.756558,
    "Longitude": 16.856742,
    "IsPublic": true,
    "LineList": "562,566,567,568,569,571"
  },
  {
    "StopID": 15746,
    "Zone": 575,
    "Name": "Břeclav, Stará Břeclav, Skopalíkova",
    "Latitude": 48.772893,
    "Longitude": 16.891364,
    "IsPublic": true,
    "LineList": "542,564,565,569,573,574"
  },
  {
    "StopID": 15747,
    "Zone": 575,
    "Name": "Břeclav, Stará Břeclav, kulturní dům",
    "Latitude": 48.774218,
    "Longitude": 16.886674,
    "IsPublic": true,
    "LineList": "564,565"
  },
  {
    "StopID": 15748,
    "Zone": 575,
    "Name": "Břeclav, Široký dvůr",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15749,
    "Zone": 575,
    "Name": "Břeclav, Alca PLAST",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15750,
    "Zone": 572,
    "Name": "Lednice, Komenského",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15751,
    "Zone": 575,
    "Name": "Břeclav, Jana Palacha",
    "Latitude": 48.756161,
    "Longitude": 16.888901,
    "IsPublic": true,
    "LineList": "561,562,563,564,565,566,567,568"
  },
  {
    "StopID": 15752,
    "Zone": 575,
    "Name": "Břeclav, Poštorná, Hlavní",
    "Latitude": 48.755267,
    "Longitude": 16.863343,
    "IsPublic": true,
    "LineList": "561,566,567,568,569"
  },
  {
    "StopID": 15753,
    "Zone": 575,
    "Name": "Břeclav, Charvátská Nová Ves, Palackého",
    "Latitude": 48.762625,
    "Longitude": 16.850728,
    "IsPublic": true,
    "LineList": "561,562,569"
  },
  {
    "StopID": 15754,
    "Zone": 575,
    "Name": "Charvátská N. Ves",
    "Latitude": 48.769287,
    "Longitude": 16.847620,
    "IsPublic": true,
    "LineList": "561,562,569"
  },
  {
    "StopID": 15755,
    "Zone": 575,
    "Name": "Břeclav, Městský h.",
    "Latitude": 48.750487,
    "Longitude": 16.906895,
    "IsPublic": true,
    "LineList": "562,564,565"
  },
  {
    "StopID": 15756,
    "Zone": 575,
    "Name": "Břeclav, Lanžhotská",
    "Latitude": 48.750778,
    "Longitude": 16.903667,
    "IsPublic": true,
    "LineList": "562,564,565"
  },
  {
    "StopID": 15757,
    "Zone": 575,
    "Name": "Břeclav, Dům kultury",
    "Latitude": 48.757100,
    "Longitude": 16.884827,
    "IsPublic": true,
    "LineList": "564,569"
  },
  {
    "StopID": 15758,
    "Zone": 575,
    "Name": "Břeclav, Poštorná, Nádražní",
    "Latitude": 48.752102,
    "Longitude": 16.858368,
    "IsPublic": true,
    "LineList": "562,566,567,568,569"
  },
  {
    "StopID": 15759,
    "Zone": 575,
    "Name": "Břeclav, Poštorná, Tovární čtvrť",
    "Latitude": 48.754712,
    "Longitude": 16.849599,
    "IsPublic": true,
    "LineList": "562,566,567,568,569"
  },
  {
    "StopID": 15760,
    "Zone": 575,
    "Name": "Poštorná, Valtická toč.",
    "Latitude": 48.758005,
    "Longitude": 16.849742,
    "IsPublic": true,
    "LineList": "562,566,567,568,569"
  },
  {
    "StopID": 15762,
    "Zone": 575,
    "Name": "Břeclav, Poštorná, Jana Skácela",
    "Latitude": 48.749910,
    "Longitude": 16.869345,
    "IsPublic": true,
    "LineList": "563,568"
  },
  {
    "StopID": 15763,
    "Zone": 575,
    "Name": "Břeclav, Poštorná, Hraniční",
    "Latitude": 48.745568,
    "Longitude": 16.871008,
    "IsPublic": true,
    "LineList": "563,568"
  },
  {
    "StopID": 15764,
    "Zone": 575,
    "Name": "Poštorná, FOSFA",
    "Latitude": 48.741130,
    "Longitude": 16.870569,
    "IsPublic": true,
    "LineList": "563,568"
  },
  {
    "StopID": 15765,
    "Zone": 575,
    "Name": "Břeclav, Průmyslová škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15766,
    "Zone": 575,
    "Name": "Břeclav, Stará Břeclav, Domov seniorů",
    "Latitude": 48.768072,
    "Longitude": 16.887118,
    "IsPublic": true,
    "LineList": "564"
  },
  {
    "StopID": 15767,
    "Zone": 575,
    "Name": "Břeclav, Stará Břeclav, u parku",
    "Latitude": 48.775273,
    "Longitude": 16.890122,
    "IsPublic": true,
    "LineList": "564,565"
  },
  {
    "StopID": 15768,
    "Zone": 575,
    "Name": "Břeclav, Stará Břeclav, Vinohradní",
    "Latitude": 48.775520,
    "Longitude": 16.893590,
    "IsPublic": true,
    "LineList": "564,565,569"
  },
  {
    "StopID": 15769,
    "Zone": 575,
    "Name": "Břeclav, Stará Břeclav, Lidická",
    "Latitude": 48.767780,
    "Longitude": 16.890053,
    "IsPublic": true,
    "LineList": "564,565,569"
  },
  {
    "StopID": 15770,
    "Zone": 575,
    "Name": "Břeclav, Slovácká",
    "Latitude": 48.759645,
    "Longitude": 16.887459,
    "IsPublic": true,
    "LineList": "565,569"
  },
  {
    "StopID": 15771,
    "Zone": 575,
    "Name": "Břeclav, Sovadinova",
    "Latitude": 48.763067,
    "Longitude": 16.889260,
    "IsPublic": true,
    "LineList": "565,569"
  },
  {
    "StopID": 15772,
    "Zone": 575,
    "Name": "Břeclav, Stará Břeclav, Mánesova",
    "Latitude": 48.772417,
    "Longitude": 16.887833,
    "IsPublic": true,
    "LineList": "565"
  },
  {
    "StopID": 15773,
    "Zone": 570,
    "Name": "Hevlín, cihelna",
    "Latitude": 48.761458,
    "Longitude": 16.383421,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15774,
    "Zone": 570,
    "Name": "Hevlín, státní hranice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15775,
    "Zone": 570,
    "Name": "Hevlín, škola",
    "Latitude": 48.751398,
    "Longitude": 16.380222,
    "IsPublic": true,
    "LineList": "104,820"
  },
  {
    "StopID": 15776,
    "Zone": 575,
    "Name": "Břeclav, ž.s.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15785,
    "Zone": 571,
    "Name": "Mikulov, čerpací stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15786,
    "Zone": 571,
    "Name": "Mikulov, Vídeňská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15788,
    "Zone": 571,
    "Name": "Mikulov, Poliklinika",
    "Latitude": 48.804996,
    "Longitude": 16.638546,
    "IsPublic": true,
    "LineList": "585"
  },
  {
    "StopID": 15790,
    "Zone": 571,
    "Name": "Mikulov, Průmyslová zóna, točna",
    "Latitude": 48.813677,
    "Longitude": 16.620333,
    "IsPublic": true,
    "LineList": "174"
  },
  {
    "StopID": 15791,
    "Zone": 571,
    "Name": "Mikulov, Bezručova",
    "Latitude": 48.812464,
    "Longitude": 16.651058,
    "IsPublic": true,
    "LineList": "550,585"
  },
  {
    "StopID": 15792,
    "Zone": 571,
    "Name": "Mikulov, Žižkova",
    "Latitude": 48.815875,
    "Longitude": 16.650639,
    "IsPublic": true,
    "LineList": "585"
  },
  {
    "StopID": 15793,
    "Zone": 571,
    "Name": "Mikulov, Dukelská",
    "Latitude": 48.813408,
    "Longitude": 16.646714,
    "IsPublic": true,
    "LineList": "585"
  },
  {
    "StopID": 15794,
    "Zone": 571,
    "Name": "Mikulov, Pod Kozím hrádkem",
    "Latitude": 48.808983,
    "Longitude": 16.636108,
    "IsPublic": true,
    "LineList": "585"
  },
  {
    "StopID": 15796,
    "Zone": 571,
    "Name": "Mikulov, Hliniště",
    "Latitude": 48.813528,
    "Longitude": 16.645689,
    "IsPublic": true,
    "LineList": "550,570,585"
  },
  {
    "StopID": 15797,
    "Zone": 571,
    "Name": "Mikulov, Gagarinova",
    "Latitude": 48.813095,
    "Longitude": 16.633689,
    "IsPublic": true,
    "LineList": "550,570,585"
  },
  {
    "StopID": 15798,
    "Zone": 571,
    "Name": "Mikulov, G-centrum",
    "Latitude": 48.797645,
    "Longitude": 16.627705,
    "IsPublic": true,
    "LineList": "585"
  },
  {
    "StopID": 15799,
    "Zone": 571,
    "Name": "Mikulov, Supermarket",
    "Latitude": 48.805171,
    "Longitude": 16.626893,
    "IsPublic": true,
    "LineList": "585"
  },
  {
    "StopID": 15800,
    "Zone": 582,
    "Name": "Valtice, bažantnice",
    "Latitude": 48.752930,
    "Longitude": 16.738860,
    "IsPublic": true,
    "LineList": "114,585"
  },
  {
    "StopID": 15801,
    "Zone": 582,
    "Name": "Valtice, aut. st.",
    "Latitude": 48.742739,
    "Longitude": 16.755541,
    "IsPublic": true,
    "LineList": "114,555,571,585"
  },
  {
    "StopID": 15802,
    "Zone": 582,
    "Name": "Valtice, Boří Dvůr",
    "Latitude": 48.721178,
    "Longitude": 16.800900,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15803,
    "Zone": 582,
    "Name": "Valtice, celnice",
    "Latitude": 48.738816,
    "Longitude": 16.733310,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15804,
    "Zone": 582,
    "Name": "Valtice, česká čtvrť",
    "Latitude": 48.744615,
    "Longitude": 16.770629,
    "IsPublic": true,
    "LineList": "571"
  },
  {
    "StopID": 15805,
    "Zone": 582,
    "Name": "Valtice, hájenka",
    "Latitude": 48.746276,
    "Longitude": 16.792044,
    "IsPublic": true,
    "LineList": "571"
  },
  {
    "StopID": 15806,
    "Zone": 582,
    "Name": "Valtice, hřbitov",
    "Latitude": 48.752179,
    "Longitude": 16.765439,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15807,
    "Zone": 582,
    "Name": "Valtice, kasárna",
    "Latitude": 48.729310,
    "Longitude": 16.774042,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15808,
    "Zone": 582,
    "Name": "Valtice, nemocnice",
    "Latitude": 48.742883,
    "Longitude": 16.760649,
    "IsPublic": true,
    "LineList": "571"
  },
  {
    "StopID": 15809,
    "Zone": 582,
    "Name": "Valtice, Úvaly",
    "Latitude": 48.741519,
    "Longitude": 16.705681,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15810,
    "Zone": 582,
    "Name": "Valtice, Úvaly",
    "Latitude": 48.742541,
    "Longitude": 16.699415,
    "IsPublic": true,
    "LineList": "555"
  },
  {
    "StopID": 15811,
    "Zone": 582,
    "Name": "Valtice, železniční stanice",
    "Latitude": 48.746830,
    "Longitude": 16.745117,
    "IsPublic": true,
    "LineList": "128"
  },
  {
    "StopID": 15812,
    "Zone": 585,
    "Name": "Kostice, Břeclavská",
    "Latitude": 48.748801,
    "Longitude": 16.976148,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15813,
    "Zone": 585,
    "Name": "Kostice, kaplička",
    "Latitude": 48.747439,
    "Longitude": 16.981179,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15814,
    "Zone": 585,
    "Name": "Kostice, Lanžhotská",
    "Latitude": 48.742492,
    "Longitude": 16.978942,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15815,
    "Zone": 585,
    "Name": "Kostice, obecní úřad",
    "Latitude": 48.746393,
    "Longitude": 16.981563,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15816,
    "Zone": 585,
    "Name": "Kostice, váha",
    "Latitude": 48.746172,
    "Longitude": 16.924543,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15817,
    "Zone": 585,
    "Name": "Lanžhot, a.n.",
    "Latitude": 48.725280,
    "Longitude": 16.967488,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15819,
    "Zone": 585,
    "Name": "Lanžhot, Jednota",
    "Latitude": 48.722797,
    "Longitude": 16.957856,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15820,
    "Zone": 585,
    "Name": "Lanžhot, obchodní středisko",
    "Latitude": 48.728958,
    "Longitude": 16.963511,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15821,
    "Zone": 585,
    "Name": "Lanžhot, u mostu",
    "Latitude": 48.729074,
    "Longitude": 16.973122,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15822,
    "Zone": 585,
    "Name": "Tvrdonice, náměstí",
    "Latitude": 48.760899,
    "Longitude": 16.992788,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15823,
    "Zone": 912,
    "Name": "Tvrdonice, Jižní Morava",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15824,
    "Zone": 585,
    "Name": "Tvrdonice, mateřská škola",
    "Latitude": 48.764263,
    "Longitude": 16.989576,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15825,
    "Zone": 585,
    "Name": "Tvrdonice, na konci",
    "Latitude": 48.754648,
    "Longitude": 16.987250,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15826,
    "Zone": 585,
    "Name": "Tvrdonice, Poza",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15827,
    "Zone": 585,
    "Name": "Týnec, váha",
    "Latitude": 48.779382,
    "Longitude": 17.009992,
    "IsPublic": true,
    "LineList": "572,573"
  },
  {
    "StopID": 15828,
    "Zone": 582,
    "Name": "Valtice, železniční zastávka",
    "Latitude": 48.748547,
    "Longitude": 16.762395,
    "IsPublic": true,
    "LineList": "128,143,555"
  },
  {
    "StopID": 15829,
    "Zone": 580,
    "Name": "Laa an der Thaya, Stadtplatz",
    "Latitude": 48.720393,
    "Longitude": 16.384622,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15831,
    "Zone": 581,
    "Name": "Drasenhofen, Hauptplatz",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15832,
    "Zone": 581,
    "Name": "Drasenhofen, Schloss",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15834,
    "Zone": 580,
    "Name": "Laa an der Thaya, Gymnasium",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15835,
    "Zone": 580,
    "Name": "Laa an der Thaya, Staatsbahnstraße",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15836,
    "Zone": 580,
    "Name": "Laa an der Thaya, Kirchenplatz",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15837,
    "Zone": 580,
    "Name": "Laa an der Thaya, Feuerwehr",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15838,
    "Zone": 580,
    "Name": "Laa an der Thaya, Bahnhof",
    "Latitude": 48.723106,
    "Longitude": 16.402444,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15839,
    "Zone": 580,
    "Name": "Laa/Thaya, Therme",
    "Latitude": 48.723047,
    "Longitude": 16.395582,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15840,
    "Zone": 580,
    "Name": "Laa an der Thaya, Friedhof",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15841,
    "Zone": 580,
    "Name": "Laa an der Thaya, Neustift",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15842,
    "Zone": 580,
    "Name": "Laa an der Thaya, Anton Brückner Strasse",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15843,
    "Zone": 570,
    "Name": "Hevlín, LAA BOMBA - SHOPPING CENTER",
    "Latitude": 48.732097,
    "Longitude": 16.382760,
    "IsPublic": true,
    "LineList": "104"
  },
  {
    "StopID": 15844,
    "Zone": 999,
    "Name": "Laa an der Thaya, ZOLL",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15845,
    "Zone": 585,
    "Name": "Tvrdonice, Týnecká",
    "Latitude": 48.764465,
    "Longitude": 16.995481,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 15901,
    "Zone": 592,
    "Name": "Falkenstein im Weinviertel, Marktplatz",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15902,
    "Zone": 592,
    "Name": "Poysbrunn, Hauptstraße 25",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15903,
    "Zone": 592,
    "Name": "Poysdorf, Dreifaltigkeitsplatz",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15905,
    "Zone": 581,
    "Name": "Stützenhofen, Ort",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15907,
    "Zone": 595,
    "Name": "Brodské, námestie",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15908,
    "Zone": 595,
    "Name": "Brodské, základná škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15909,
    "Zone": 595,
    "Name": "Brodské, železničná stanica",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15910,
    "Zone": 595,
    "Name": "Kúty, reštaurácia U Cugu",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15911,
    "Zone": 595,
    "Name": "Kúty, železničná stanica",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15912,
    "Zone": 595,
    "Name": "Brodské, Záhumnie",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15913,
    "Zone": 595,
    "Name": "Kúty, reštaurácia Kasíno",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15914,
    "Zone": 595,
    "Name": "Kúty, Dolina",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15915,
    "Zone": 595,
    "Name": "Kúty, kolónia",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15916,
    "Zone": 581,
    "Name": "Herrnbaumgarten, Ortsmitte",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15917,
    "Zone": 581,
    "Name": "Schrattenberg, Kirche",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 15918,
    "Zone": 581,
    "Name": "Herrnbaumgarten, Sportplatz",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16101,
    "Zone": 610,
    "Name": "Blažovice, hostinec",
    "Latitude": 49.166001,
    "Longitude": 16.786446,
    "IsPublic": true,
    "LineList": "710"
  },
  {
    "StopID": 16102,
    "Zone": 610,
    "Name": "Blažovice, pod kostelem",
    "Latitude": 49.162838,
    "Longitude": 16.782888,
    "IsPublic": true,
    "LineList": "710"
  },
  {
    "StopID": 16103,
    "Zone": 610,
    "Name": "Hostěrádky-Rešov",
    "Latitude": 49.117312,
    "Longitude": 16.785356,
    "IsPublic": true,
    "LineList": "611,630"
  },
  {
    "StopID": 16104,
    "Zone": 610,
    "Name": "Jiříkovice",
    "Latitude": 49.166322,
    "Longitude": 16.757848,
    "IsPublic": true,
    "LineList": "710"
  },
  {
    "StopID": 16105,
    "Zone": 610,
    "Name": "Jiříkovice, motorest Rohlenka",
    "Latitude": 49.183551,
    "Longitude": 16.760812,
    "IsPublic": true,
    "LineList": "601,602,702"
  },
  {
    "StopID": 16110,
    "Zone": 610,
    "Name": "Mokrá-Horákov, cementárna",
    "Latitude": 49.214097,
    "Longitude": 16.765264,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 16111,
    "Zone": 610,
    "Name": "Kobylnice",
    "Latitude": 49.140256,
    "Longitude": 16.731918,
    "IsPublic": true,
    "LineList": "48,89,151"
  },
  {
    "StopID": 16112,
    "Zone": 610,
    "Name": "Kobylnice, Na Rybníku",
    "Latitude": 49.142805,
    "Longitude": 16.726494,
    "IsPublic": true,
    "LineList": "48,89"
  },
  {
    "StopID": 16113,
    "Zone": 610,
    "Name": "Mokrá-Horákov, Mokrá",
    "Latitude": 49.223603,
    "Longitude": 16.751380,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 16114,
    "Zone": 610,
    "Name": "Mokrá-Horákov, sídliště",
    "Latitude": 49.221086,
    "Longitude": 16.751864,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 16115,
    "Zone": 610,
    "Name": "Kobylnice, obecní úřad",
    "Latitude": 49.137556,
    "Longitude": 16.732774,
    "IsPublic": true,
    "LineList": "48,89,151"
  },
  {
    "StopID": 16116,
    "Zone": 610,
    "Name": "Podolí",
    "Latitude": 49.189827,
    "Longitude": 16.726117,
    "IsPublic": true,
    "LineList": "96,151"
  },
  {
    "StopID": 16118,
    "Zone": 610,
    "Name": "Podolí, Líšeňská",
    "Latitude": 49.191825,
    "Longitude": 16.719802,
    "IsPublic": true,
    "LineList": "96,151"
  },
  {
    "StopID": 16120,
    "Zone": 610,
    "Name": "Ponětovice",
    "Latitude": 49.152329,
    "Longitude": 16.741466,
    "IsPublic": true,
    "LineList": "710"
  },
  {
    "StopID": 16121,
    "Zone": 610,
    "Name": "Ponětovice, železniční stanice",
    "Latitude": 49.154690,
    "Longitude": 16.748163,
    "IsPublic": true,
    "LineList": "146,710"
  },
  {
    "StopID": 16127,
    "Zone": 610,
    "Name": "Sokolnice, zámek",
    "Latitude": 49.117872,
    "Longitude": 16.725042,
    "IsPublic": true,
    "LineList": "151"
  },
  {
    "StopID": 16129,
    "Zone": 610,
    "Name": "Šlapanice, Bedřichovice",
    "Latitude": 49.179833,
    "Longitude": 16.721516,
    "IsPublic": true,
    "LineList": "96,151"
  },
  {
    "StopID": 16130,
    "Zone": 610,
    "Name": "Bedřichovice, rozc.",
    "Latitude": 49.183188,
    "Longitude": 16.722892,
    "IsPublic": true,
    "LineList": "96,151,601,602,701,702"
  },
  {
    "StopID": 16132,
    "Zone": 610,
    "Name": "Šlapanice, Hraničky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16134,
    "Zone": 610,
    "Name": "Šlapanice, Evropská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16135,
    "Zone": 610,
    "Name": "Prace, Mohyla míru",
    "Latitude": 49.127200,
    "Longitude": 16.761645,
    "IsPublic": true,
    "LineList": "48"
  },
  {
    "StopID": 16136,
    "Zone": 610,
    "Name": "Šlapanice, železniční zastávka",
    "Latitude": 49.163271,
    "Longitude": 16.718884,
    "IsPublic": true,
    "LineList": "126,146"
  },
  {
    "StopID": 16137,
    "Zone": 610,
    "Name": "Šlapanice, železniční stanice",
    "Latitude": 49.157783,
    "Longitude": 16.729240,
    "IsPublic": true,
    "LineList": "146,151"
  },
  {
    "StopID": 16138,
    "Zone": 610,
    "Name": "Telnice",
    "Latitude": 49.101749,
    "Longitude": 16.718377,
    "IsPublic": true,
    "LineList": "95,109,612"
  },
  {
    "StopID": 16139,
    "Zone": 610,
    "Name": "Prace, náves",
    "Latitude": 49.139466,
    "Longitude": 16.765108,
    "IsPublic": true,
    "LineList": "48,89"
  },
  {
    "StopID": 16140,
    "Zone": 610,
    "Name": "Tvarožná, sokolovna",
    "Latitude": 49.193060,
    "Longitude": 16.776086,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 16141,
    "Zone": 610,
    "Name": "Prace, škola",
    "Latitude": 49.138825,
    "Longitude": 16.762734,
    "IsPublic": true,
    "LineList": "48,89"
  },
  {
    "StopID": 16142,
    "Zone": 610,
    "Name": "Tvarožná, zemědělské družstvo",
    "Latitude": 49.185894,
    "Longitude": 16.764965,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 16143,
    "Zone": 610,
    "Name": "Prace, točna",
    "Latitude": 49.141058,
    "Longitude": 16.764044,
    "IsPublic": true,
    "LineList": "48,89"
  },
  {
    "StopID": 16144,
    "Zone": 610,
    "Name": "Újezd u Brna, penzion",
    "Latitude": 49.106569,
    "Longitude": 16.765047,
    "IsPublic": true,
    "LineList": "611"
  },
  {
    "StopID": 16145,
    "Zone": 610,
    "Name": "Sokolnice, ObÚ",
    "Latitude": 49.114044,
    "Longitude": 16.721628,
    "IsPublic": true,
    "LineList": "73,74,95,151"
  },
  {
    "StopID": 16146,
    "Zone": 610,
    "Name": "Újezd u Brna, Rychmanov",
    "Latitude": 49.103518,
    "Longitude": 16.765363,
    "IsPublic": true,
    "LineList": "610"
  },
  {
    "StopID": 16147,
    "Zone": 610,
    "Name": "Sokolnice, rozvodna",
    "Latitude": 49.114916,
    "Longitude": 16.704879,
    "IsPublic": true,
    "LineList": "73,74,95,109"
  },
  {
    "StopID": 16148,
    "Zone": 610,
    "Name": "Velatice",
    "Latitude": 49.197432,
    "Longitude": 16.753050,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 16149,
    "Zone": 610,
    "Name": "Sokolnice, žel.st.",
    "Latitude": 49.108310,
    "Longitude": 16.733091,
    "IsPublic": true,
    "LineList": "73,74,95,120,151,610,611,612"
  },
  {
    "StopID": 16150,
    "Zone": 610,
    "Name": "Žatčany, náves",
    "Latitude": 49.088578,
    "Longitude": 16.732552,
    "IsPublic": true,
    "LineList": "95,151,612"
  },
  {
    "StopID": 16151,
    "Zone": 610,
    "Name": "Žatčany, škola",
    "Latitude": 49.089367,
    "Longitude": 16.731432,
    "IsPublic": true,
    "LineList": "151,612"
  },
  {
    "StopID": 16152,
    "Zone": 610,
    "Name": "Žatčany, u mlýna",
    "Latitude": 49.086604,
    "Longitude": 16.725966,
    "IsPublic": true,
    "LineList": "95,151,612"
  },
  {
    "StopID": 16153,
    "Zone": 610,
    "Name": "Tvarožná",
    "Latitude": 49.190787,
    "Longitude": 16.770356,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 16154,
    "Zone": 610,
    "Name": "Tvarožná, kostel",
    "Latitude": 49.190188,
    "Longitude": 16.775817,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 16155,
    "Zone": 610,
    "Name": "Šlapanice, Čechova",
    "Latitude": 49.165914,
    "Longitude": 16.722044,
    "IsPublic": true,
    "LineList": "31,96"
  },
  {
    "StopID": 16156,
    "Zone": 610,
    "Name": "Újezd u Brna, MěÚ",
    "Latitude": 49.104377,
    "Longitude": 16.757401,
    "IsPublic": true,
    "LineList": "74,95,151,610,611"
  },
  {
    "StopID": 16157,
    "Zone": 610,
    "Name": "Újezd u B. Revoluční",
    "Latitude": 49.106487,
    "Longitude": 16.749336,
    "IsPublic": true,
    "LineList": "74,95,151,610,611"
  },
  {
    "StopID": 16158,
    "Zone": 610,
    "Name": "Újezd u Brna, škola",
    "Latitude": 49.103793,
    "Longitude": 16.754275,
    "IsPublic": true,
    "LineList": "151"
  },
  {
    "StopID": 16159,
    "Zone": 610,
    "Name": "Šlapanice, Kalvodova",
    "Latitude": 49.166430,
    "Longitude": 16.726286,
    "IsPublic": true,
    "LineList": "31,96,151,710"
  },
  {
    "StopID": 16160,
    "Zone": 610,
    "Name": "Velatice, Maxlůvka",
    "Latitude": 49.184151,
    "Longitude": 16.752488,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 16161,
    "Zone": 610,
    "Name": "Sokolnice, u hřbitova",
    "Latitude": 49.121450,
    "Longitude": 16.730669,
    "IsPublic": true,
    "LineList": "151"
  },
  {
    "StopID": 16163,
    "Zone": 610,
    "Name": "Šlap., Riegrova",
    "Latitude": 49.168445,
    "Longitude": 16.726032,
    "IsPublic": true,
    "LineList": "96,151,710"
  },
  {
    "StopID": 16165,
    "Zone": 610,
    "Name": "Šlapanice, sídliště",
    "Latitude": 49.167038,
    "Longitude": 16.718401,
    "IsPublic": true,
    "LineList": "31,96"
  },
  {
    "StopID": 16166,
    "Zone": 610,
    "Name": "Mokrá-Horákov, Horákov",
    "Latitude": 49.215676,
    "Longitude": 16.749652,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 16167,
    "Zone": 610,
    "Name": "Mokrá-Horákov, rozc.cementárna",
    "Latitude": 49.210068,
    "Longitude": 16.752697,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 16168,
    "Zone": 610,
    "Name": "Mokrá-Horákov, lom",
    "Latitude": 49.225969,
    "Longitude": 16.756802,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 16169,
    "Zone": 610,
    "Name": "AUSTERLITZ",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16170,
    "Zone": 610,
    "Name": "Sokolnice, ubytovna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16171,
    "Zone": 610,
    "Name": "Mokrá-Horákov, sídliště, točna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16172,
    "Zone": 610,
    "Name": "Kobylnice, hřbitov",
    "Latitude": 49.132330,
    "Longitude": 16.732992,
    "IsPublic": true,
    "LineList": "151"
  },
  {
    "StopID": 16173,
    "Zone": 610,
    "Name": "Sokolnice, Brněnská",
    "Latitude": 49.114309,
    "Longitude": 16.714602,
    "IsPublic": true,
    "LineList": "73,74,95"
  },
  {
    "StopID": 16201,
    "Zone": 620,
    "Name": "Bošovice, obecní úřad",
    "Latitude": 49.052853,
    "Longitude": 16.837358,
    "IsPublic": true,
    "LineList": "610"
  },
  {
    "StopID": 16202,
    "Zone": 620,
    "Name": "Bošovice, Plaňava",
    "Latitude": 49.047507,
    "Longitude": 16.840558,
    "IsPublic": true,
    "LineList": "610"
  },
  {
    "StopID": 16203,
    "Zone": 620,
    "Name": "Bošovice, u parku",
    "Latitude": 49.058323,
    "Longitude": 16.834908,
    "IsPublic": true,
    "LineList": "610"
  },
  {
    "StopID": 16204,
    "Zone": 620,
    "Name": "Holubice, Curdík",
    "Latitude": 49.174585,
    "Longitude": 16.822937,
    "IsPublic": true,
    "LineList": "601"
  },
  {
    "StopID": 16205,
    "Zone": 620,
    "Name": "Holubice, kruh",
    "Latitude": 49.184546,
    "Longitude": 16.799512,
    "IsPublic": true,
    "LineList": "601,602"
  },
  {
    "StopID": 16206,
    "Zone": 620,
    "Name": "Holubice, nadjezd",
    "Latitude": 49.178174,
    "Longitude": 16.819134,
    "IsPublic": true,
    "LineList": "106,602"
  },
  {
    "StopID": 16207,
    "Zone": 620,
    "Name": "Holubice, obecní úřad",
    "Latitude": 49.177278,
    "Longitude": 16.813581,
    "IsPublic": true,
    "LineList": "601"
  },
  {
    "StopID": 16208,
    "Zone": 620,
    "Name": "Holubice, u mostu",
    "Latitude": 49.179342,
    "Longitude": 16.806418,
    "IsPublic": true,
    "LineList": "601"
  },
  {
    "StopID": 16209,
    "Zone": 620,
    "Name": "Hrušky",
    "Latitude": 49.129183,
    "Longitude": 16.834174,
    "IsPublic": true,
    "LineList": "620"
  },
  {
    "StopID": 16210,
    "Zone": 620,
    "Name": "Kovalovice, Stará pošta",
    "Latitude": 49.184930,
    "Longitude": 16.825873,
    "IsPublic": true,
    "LineList": "602"
  },
  {
    "StopID": 16211,
    "Zone": 620,
    "Name": "Křenovice, dol. žel. st.",
    "Latitude": 49.143621,
    "Longitude": 16.832611,
    "IsPublic": true,
    "LineList": "146,630"
  },
  {
    "StopID": 16212,
    "Zone": 620,
    "Name": "Křenovice, hor.ž.s.",
    "Latitude": 49.143492,
    "Longitude": 16.824773,
    "IsPublic": true,
    "LineList": "120,144,620"
  },
  {
    "StopID": 16213,
    "Zone": 620,
    "Name": "Křenovice, u hřbitova",
    "Latitude": 49.140416,
    "Longitude": 16.827518,
    "IsPublic": true,
    "LineList": "620,630"
  },
  {
    "StopID": 16214,
    "Zone": 620,
    "Name": "Lovčičky",
    "Latitude": 49.068220,
    "Longitude": 16.849380,
    "IsPublic": true,
    "LineList": "610,611,630"
  },
  {
    "StopID": 16215,
    "Zone": 620,
    "Name": "Milešovice h.Laštůvka",
    "Latitude": 49.082413,
    "Longitude": 16.854648,
    "IsPublic": true,
    "LineList": "611"
  },
  {
    "StopID": 16216,
    "Zone": 620,
    "Name": "Milešovice, sídliště",
    "Latitude": 49.089704,
    "Longitude": 16.850036,
    "IsPublic": true,
    "LineList": "611"
  },
  {
    "StopID": 16217,
    "Zone": 620,
    "Name": "Milešovice, zast.",
    "Latitude": 49.086615,
    "Longitude": 16.850754,
    "IsPublic": true,
    "LineList": "611"
  },
  {
    "StopID": 16218,
    "Zone": 620,
    "Name": "Otnice, dělnický dům",
    "Latitude": 49.082798,
    "Longitude": 16.818934,
    "IsPublic": true,
    "LineList": "610,611,630"
  },
  {
    "StopID": 16219,
    "Zone": 620,
    "Name": "Otnice, host. U Marků",
    "Latitude": 49.087121,
    "Longitude": 16.812874,
    "IsPublic": true,
    "LineList": "610,611,630"
  },
  {
    "StopID": 16220,
    "Zone": 620,
    "Name": "Otnice, Milešovská",
    "Latitude": 49.088660,
    "Longitude": 16.821220,
    "IsPublic": true,
    "LineList": "611"
  },
  {
    "StopID": 16221,
    "Zone": 620,
    "Name": "Otnice, zdrav.stř.",
    "Latitude": 49.085983,
    "Longitude": 16.813928,
    "IsPublic": true,
    "LineList": "610,611,630"
  },
  {
    "StopID": 16222,
    "Zone": 620,
    "Name": "Šaratice",
    "Latitude": 49.116952,
    "Longitude": 16.802559,
    "IsPublic": true,
    "LineList": "611,630"
  },
  {
    "StopID": 16223,
    "Zone": 620,
    "Name": "Vážany nad Litavou",
    "Latitude": 49.130573,
    "Longitude": 16.855832,
    "IsPublic": true,
    "LineList": "620"
  },
  {
    "StopID": 16224,
    "Zone": 620,
    "Name": "Vážany nad Litavou, u mlýna",
    "Latitude": 49.128938,
    "Longitude": 16.851514,
    "IsPublic": true,
    "LineList": "620"
  },
  {
    "StopID": 16225,
    "Zone": 620,
    "Name": "Zbýšov",
    "Latitude": 49.129977,
    "Longitude": 16.809391,
    "IsPublic": true,
    "LineList": "630"
  },
  {
    "StopID": 16226,
    "Zone": 620,
    "Name": "Křenovice, Sokolská",
    "Latitude": 49.143182,
    "Longitude": 16.830647,
    "IsPublic": true,
    "LineList": "620"
  },
  {
    "StopID": 16227,
    "Zone": 720,
    "Name": "Holubice, GLP Park",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16301,
    "Zone": 630,
    "Name": "Dambořice",
    "Latitude": 49.040033,
    "Longitude": 16.917283,
    "IsPublic": true,
    "LineList": "610,660"
  },
  {
    "StopID": 16302,
    "Zone": 630,
    "Name": "Dambořice, u pomníku",
    "Latitude": 49.036424,
    "Longitude": 16.917627,
    "IsPublic": true,
    "LineList": "610,660"
  },
  {
    "StopID": 16303,
    "Zone": 630,
    "Name": "Klobouky u Brna, Bohumilice",
    "Latitude": 49.018727,
    "Longitude": 16.893512,
    "IsPublic": true,
    "LineList": "541,610"
  },
  {
    "StopID": 16304,
    "Zone": 630,
    "Name": "Klobouky u Brna, Bohumilice, rozc.",
    "Latitude": 49.032172,
    "Longitude": 16.884112,
    "IsPublic": true,
    "LineList": "541,610"
  },
  {
    "StopID": 16305,
    "Zone": 630,
    "Name": "Velké Hostěrádky, pohostinství",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16306,
    "Zone": 630,
    "Name": "Velké Hostěrádky, u bytovky",
    "Latitude": 49.035716,
    "Longitude": 16.868238,
    "IsPublic": true,
    "LineList": "610"
  },
  {
    "StopID": 16307,
    "Zone": 635,
    "Name": "Heršpice",
    "Latitude": 49.119348,
    "Longitude": 16.913260,
    "IsPublic": true,
    "LineList": "631"
  },
  {
    "StopID": 16308,
    "Zone": 635,
    "Name": "Heršpice, zelnice",
    "Latitude": 49.122422,
    "Longitude": 16.910233,
    "IsPublic": true,
    "LineList": "631"
  },
  {
    "StopID": 16309,
    "Zone": 635,
    "Name": "Hodějice, rozc.",
    "Latitude": 49.149573,
    "Longitude": 16.915679,
    "IsPublic": true,
    "LineList": "632"
  },
  {
    "StopID": 16310,
    "Zone": 635,
    "Name": "Hodějice, točna",
    "Latitude": 49.140250,
    "Longitude": 16.919782,
    "IsPublic": true,
    "LineList": "630"
  },
  {
    "StopID": 16311,
    "Zone": 635,
    "Name": "Hodějice, u mostu",
    "Latitude": 49.142563,
    "Longitude": 16.911732,
    "IsPublic": true,
    "LineList": "630"
  },
  {
    "StopID": 16312,
    "Zone": 635,
    "Name": "Kobeřice, na kopci",
    "Latitude": 49.097340,
    "Longitude": 16.888722,
    "IsPublic": true,
    "LineList": "631"
  },
  {
    "StopID": 16313,
    "Zone": 635,
    "Name": "Kobeřice, pohos.",
    "Latitude": 49.091723,
    "Longitude": 16.885880,
    "IsPublic": true,
    "LineList": "631"
  },
  {
    "StopID": 16314,
    "Zone": 635,
    "Name": "Křižanovice, pož. zbrojnice",
    "Latitude": 49.143667,
    "Longitude": 16.938486,
    "IsPublic": true,
    "LineList": "640"
  },
  {
    "StopID": 16315,
    "Zone": 635,
    "Name": "Křižanovice, rozc.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16316,
    "Zone": 635,
    "Name": "Křižanovice, u Mlejnku",
    "Latitude": 49.139108,
    "Longitude": 16.937908,
    "IsPublic": true,
    "LineList": "640"
  },
  {
    "StopID": 16317,
    "Zone": 635,
    "Name": "Křižanovice, u přejezdu",
    "Latitude": 49.145083,
    "Longitude": 16.940023,
    "IsPublic": true,
    "LineList": "632,640"
  },
  {
    "StopID": 16318,
    "Zone": 635,
    "Name": "Křižanovice, žel. st.",
    "Latitude": 49.144914,
    "Longitude": 16.934918,
    "IsPublic": true,
    "LineList": "146,632,640"
  },
  {
    "StopID": 16319,
    "Zone": 635,
    "Name": "Němčany, obecní úřad",
    "Latitude": 49.165137,
    "Longitude": 16.920447,
    "IsPublic": true,
    "LineList": "630"
  },
  {
    "StopID": 16320,
    "Zone": 635,
    "Name": "Němčany, točna",
    "Latitude": 49.168502,
    "Longitude": 16.919492,
    "IsPublic": true,
    "LineList": "630"
  },
  {
    "StopID": 16321,
    "Zone": 635,
    "Name": "Němčany, u kovárny",
    "Latitude": 49.161737,
    "Longitude": 16.918137,
    "IsPublic": true,
    "LineList": "630"
  },
  {
    "StopID": 16322,
    "Zone": 635,
    "Name": "Nížkovice",
    "Latitude": 49.109536,
    "Longitude": 16.901042,
    "IsPublic": true,
    "LineList": "631"
  },
  {
    "StopID": 16323,
    "Zone": 635,
    "Name": "Nížkovice, Na hraničkách",
    "Latitude": 49.111810,
    "Longitude": 16.906248,
    "IsPublic": true,
    "LineList": "631"
  },
  {
    "StopID": 16324,
    "Zone": 635,
    "Name": "Nížkovice, u hřiště",
    "Latitude": 49.107478,
    "Longitude": 16.898393,
    "IsPublic": true,
    "LineList": "631"
  },
  {
    "StopID": 16325,
    "Zone": 635,
    "Name": "Rašovice, škola",
    "Latitude": 49.121055,
    "Longitude": 16.948153,
    "IsPublic": true,
    "LineList": "640"
  },
  {
    "StopID": 16326,
    "Zone": 635,
    "Name": "Rašovice, u křížku",
    "Latitude": 49.124243,
    "Longitude": 16.942548,
    "IsPublic": true,
    "LineList": "640"
  },
  {
    "StopID": 16327,
    "Zone": 635,
    "Name": "Slavkov u Brna, Agrozávod",
    "Latitude": 49.149518,
    "Longitude": 16.853336,
    "IsPublic": true,
    "LineList": "630"
  },
  {
    "StopID": 16328,
    "Zone": 635,
    "Name": "Slavkov u Brna, a.s.",
    "Latitude": 49.148915,
    "Longitude": 16.876256,
    "IsPublic": true,
    "LineList": "106,601,620,630,631,632"
  },
  {
    "StopID": 16329,
    "Zone": 635,
    "Name": "Slavkov u Brna, Cutisín",
    "Latitude": 49.153318,
    "Longitude": 16.892032,
    "IsPublic": true,
    "LineList": "630,632"
  },
  {
    "StopID": 16330,
    "Zone": 635,
    "Name": "Slavkov u Brna, MEZ",
    "Latitude": 49.153263,
    "Longitude": 16.886033,
    "IsPublic": true,
    "LineList": "630,632"
  },
  {
    "StopID": 16331,
    "Zone": 635,
    "Name": "Slavkov u B., polik.",
    "Latitude": 49.156224,
    "Longitude": 16.879177,
    "IsPublic": true,
    "LineList": "601,620,630,631,632"
  },
  {
    "StopID": 16332,
    "Zone": 635,
    "Name": "Slavkov u Brna, rozc. k žel. st. 0.5",
    "Latitude": 49.144492,
    "Longitude": 16.878115,
    "IsPublic": true,
    "LineList": "106,620,631"
  },
  {
    "StopID": 16333,
    "Zone": 635,
    "Name": "Slavkov u B., ž.s.",
    "Latitude": 49.144848,
    "Longitude": 16.873652,
    "IsPublic": true,
    "LineList": "126,146,620,630,631,632"
  },
  {
    "StopID": 16334,
    "Zone": 635,
    "Name": "Velešovice, rozc.",
    "Latitude": 49.167227,
    "Longitude": 16.842336,
    "IsPublic": true,
    "LineList": "106,601"
  },
  {
    "StopID": 16335,
    "Zone": 630,
    "Name": "V. Hostěrádky, ObÚ",
    "Latitude": 49.031262,
    "Longitude": 16.871652,
    "IsPublic": true,
    "LineList": "541,610"
  },
  {
    "StopID": 16336,
    "Zone": 635,
    "Name": "Heršpice, Bílý Vlk",
    "Latitude": 49.095818,
    "Longitude": 16.909504,
    "IsPublic": true,
    "LineList": "106"
  },
  {
    "StopID": 16337,
    "Zone": 635,
    "Name": "Nížkovice, rozcestí",
    "Latitude": 49.111920,
    "Longitude": 16.895856,
    "IsPublic": true,
    "LineList": "106"
  },
  {
    "StopID": 16338,
    "Zone": 630,
    "Name": "Dambořice, Šerůčky",
    "Latitude": 49.028478,
    "Longitude": 16.936120,
    "IsPublic": true,
    "LineList": "660"
  },
  {
    "StopID": 16339,
    "Zone": 630,
    "Name": "Dambořice, Loučka",
    "Latitude": 49.034669,
    "Longitude": 16.924376,
    "IsPublic": true,
    "LineList": "660"
  },
  {
    "StopID": 16340,
    "Zone": 630,
    "Name": "Borkovany",
    "Latitude": 49.028593,
    "Longitude": 16.809794,
    "IsPublic": true,
    "LineList": "109,612"
  },
  {
    "StopID": 16341,
    "Zone": 630,
    "Name": "Borkovany, Tomášov",
    "Latitude": 49.029142,
    "Longitude": 16.804831,
    "IsPublic": true,
    "LineList": "109,612"
  },
  {
    "StopID": 16342,
    "Zone": 630,
    "Name": "Borkovany, Štoček",
    "Latitude": 49.024762,
    "Longitude": 16.812870,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16343,
    "Zone": 640,
    "Name": "Klobouky u B., Nádr.",
    "Latitude": 48.994491,
    "Longitude": 16.878969,
    "IsPublic": true,
    "LineList": "109,541"
  },
  {
    "StopID": 16344,
    "Zone": 640,
    "Name": "Klobouky u Brna, Martinice, rozcestí",
    "Latitude": 49.013554,
    "Longitude": 16.828332,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16345,
    "Zone": 640,
    "Name": "Klobouky u B., nám.",
    "Latitude": 48.995306,
    "Longitude": 16.857448,
    "IsPublic": true,
    "LineList": "109,541,551"
  },
  {
    "StopID": 16346,
    "Zone": 640,
    "Name": "Klobouky u Brna, ropovod",
    "Latitude": 48.983605,
    "Longitude": 16.862812,
    "IsPublic": true,
    "LineList": "541,551"
  },
  {
    "StopID": 16347,
    "Zone": 640,
    "Name": "Klobouky u Brna, rozcestí",
    "Latitude": 49.000580,
    "Longitude": 16.862422,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16348,
    "Zone": 640,
    "Name": "Klobouky u Brna, samoobsluha",
    "Latitude": 48.995116,
    "Longitude": 16.867176,
    "IsPublic": true,
    "LineList": "109,541"
  },
  {
    "StopID": 16349,
    "Zone": 640,
    "Name": "Klobouky u Brna, samota",
    "Latitude": 48.975570,
    "Longitude": 16.862043,
    "IsPublic": true,
    "LineList": "541,551"
  },
  {
    "StopID": 16350,
    "Zone": 640,
    "Name": "Klobouky u Brna, škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16351,
    "Zone": 640,
    "Name": "Klobouky u Brna, Wurmova",
    "Latitude": 48.993705,
    "Longitude": 16.863788,
    "IsPublic": true,
    "LineList": "541,551"
  },
  {
    "StopID": 16352,
    "Zone": 640,
    "Name": "Klobouky u Brna, železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16353,
    "Zone": 640,
    "Name": "Kašnice",
    "Latitude": 48.996550,
    "Longitude": 16.882844,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16354,
    "Zone": 650,
    "Name": "Morkůvky",
    "Latitude": 48.966000,
    "Longitude": 16.861158,
    "IsPublic": true,
    "LineList": "541"
  },
  {
    "StopID": 16355,
    "Zone": 650,
    "Name": "Morkůvky, obecní úřad",
    "Latitude": 48.966445,
    "Longitude": 16.862964,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 16356,
    "Zone": 640,
    "Name": "Klobouky u Brna, hřbitov",
    "Latitude": 48.998318,
    "Longitude": 16.862927,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16357,
    "Zone": 620,
    "Name": "Otnice, Na Konci",
    "Latitude": 49.089579,
    "Longitude": 16.806050,
    "IsPublic": true,
    "LineList": "610,630"
  },
  {
    "StopID": 16401,
    "Zone": 645,
    "Name": "Bučovice, aut. st.",
    "Latitude": 49.148057,
    "Longitude": 17.001665,
    "IsPublic": true,
    "LineList": "156,602,632,640,641,642,643,644"
  },
  {
    "StopID": 16402,
    "Zone": 645,
    "Name": "Bučovice, garáže ČSAD",
    "Latitude": 49.149067,
    "Longitude": 16.995883,
    "IsPublic": true,
    "LineList": "641"
  },
  {
    "StopID": 16403,
    "Zone": 645,
    "Name": "Bučovice, jatky",
    "Latitude": 49.153914,
    "Longitude": 16.987459,
    "IsPublic": true,
    "LineList": "602,632,640"
  },
  {
    "StopID": 16404,
    "Zone": 645,
    "Name": "Bučovice, Marefy, náves",
    "Latitude": 49.146454,
    "Longitude": 16.970496,
    "IsPublic": true,
    "LineList": "640"
  },
  {
    "StopID": 16405,
    "Zone": 645,
    "Name": "Bučovice, Marefy, rozc. Letonice",
    "Latitude": 49.151897,
    "Longitude": 16.970958,
    "IsPublic": true,
    "LineList": "632"
  },
  {
    "StopID": 16406,
    "Zone": 645,
    "Name": "Bučovice, Marefy, žel. st.",
    "Latitude": 49.149287,
    "Longitude": 16.973150,
    "IsPublic": true,
    "LineList": "146,602,640"
  },
  {
    "StopID": 16407,
    "Zone": 645,
    "Name": "Bučovice, u školy",
    "Latitude": 49.155432,
    "Longitude": 17.000171,
    "IsPublic": true,
    "LineList": "602,632,640,641,642,643,644"
  },
  {
    "StopID": 16408,
    "Zone": 645,
    "Name": "Letonice, obecní úřad",
    "Latitude": 49.177406,
    "Longitude": 16.959463,
    "IsPublic": true,
    "LineList": "602"
  },
  {
    "StopID": 16409,
    "Zone": 645,
    "Name": "Letonice, u kaple",
    "Latitude": 49.172073,
    "Longitude": 16.963862,
    "IsPublic": true,
    "LineList": "602"
  },
  {
    "StopID": 16410,
    "Zone": 645,
    "Name": "Mouřínov",
    "Latitude": 49.120978,
    "Longitude": 16.979238,
    "IsPublic": true,
    "LineList": "641"
  },
  {
    "StopID": 16411,
    "Zone": 645,
    "Name": "Mouřínov, statek",
    "Latitude": 49.125758,
    "Longitude": 16.977952,
    "IsPublic": true,
    "LineList": "641"
  },
  {
    "StopID": 16412,
    "Zone": 645,
    "Name": "Kojátky, Kaštanov",
    "Latitude": 49.169503,
    "Longitude": 17.023095,
    "IsPublic": true,
    "LineList": "644"
  },
  {
    "StopID": 16413,
    "Zone": 645,
    "Name": "Kojátky, Šardičky",
    "Latitude": 49.174402,
    "Longitude": 17.030752,
    "IsPublic": true,
    "LineList": "644"
  },
  {
    "StopID": 16414,
    "Zone": 645,
    "Name": "Kojátky, dědina",
    "Latitude": 49.171662,
    "Longitude": 17.028202,
    "IsPublic": true,
    "LineList": "644"
  },
  {
    "StopID": 16415,
    "Zone": 645,
    "Name": "Kojátky, rozcestí",
    "Latitude": 49.168142,
    "Longitude": 17.006374,
    "IsPublic": true,
    "LineList": "156,644"
  },
  {
    "StopID": 16416,
    "Zone": 647,
    "Name": "Bohaté Málkovice",
    "Latitude": 49.189408,
    "Longitude": 17.014262,
    "IsPublic": true,
    "LineList": "156"
  },
  {
    "StopID": 16417,
    "Zone": 647,
    "Name": "Bohdalice",
    "Latitude": 49.214011,
    "Longitude": 17.030398,
    "IsPublic": true,
    "LineList": "156,166,650"
  },
  {
    "StopID": 16418,
    "Zone": 647,
    "Name": "Bohdalice-Pavlovice, Hradčany",
    "Latitude": 49.209997,
    "Longitude": 17.032604,
    "IsPublic": true,
    "LineList": "156,166,650"
  },
  {
    "StopID": 16419,
    "Zone": 647,
    "Name": "Bohdalice-Pavlovice, Manerov",
    "Latitude": 49.231683,
    "Longitude": 17.024695,
    "IsPublic": true,
    "LineList": "166"
  },
  {
    "StopID": 16420,
    "Zone": 647,
    "Name": "Bohdalice-Pavlovice, Pavlovice, rozcestí",
    "Latitude": 49.219397,
    "Longitude": 17.035426,
    "IsPublic": true,
    "LineList": "166"
  },
  {
    "StopID": 16421,
    "Zone": 647,
    "Name": "Bohdalice-Pavlovice, Pavlovice",
    "Latitude": 49.211982,
    "Longitude": 17.059920,
    "IsPublic": true,
    "LineList": "166"
  },
  {
    "StopID": 16422,
    "Zone": 647,
    "Name": "Hlubočany, Terešov, rozcestí",
    "Latitude": 49.243572,
    "Longitude": 17.019876,
    "IsPublic": true,
    "LineList": "166"
  },
  {
    "StopID": 16423,
    "Zone": 647,
    "Name": "Hlubočany",
    "Latitude": 49.230539,
    "Longitude": 16.998032,
    "IsPublic": true,
    "LineList": "156"
  },
  {
    "StopID": 16424,
    "Zone": 647,
    "Name": "Kozlany",
    "Latitude": 49.203844,
    "Longitude": 17.035187,
    "IsPublic": true,
    "LineList": "156,166,650"
  },
  {
    "StopID": 16425,
    "Zone": 647,
    "Name": "Kučerov, dolní konec",
    "Latitude": 49.216831,
    "Longitude": 17.002950,
    "IsPublic": true,
    "LineList": "156"
  },
  {
    "StopID": 16426,
    "Zone": 647,
    "Name": "Kučerov",
    "Latitude": 49.220182,
    "Longitude": 17.006398,
    "IsPublic": true,
    "LineList": "156"
  },
  {
    "StopID": 16427,
    "Zone": 730,
    "Name": "Lysovice, kulturní dům",
    "Latitude": 49.218924,
    "Longitude": 16.973891,
    "IsPublic": true,
    "LineList": "751"
  },
  {
    "StopID": 16428,
    "Zone": 730,
    "Name": "Lysovice, ObÚ",
    "Latitude": 49.217650,
    "Longitude": 16.970492,
    "IsPublic": true,
    "LineList": "751"
  },
  {
    "StopID": 16429,
    "Zone": 645,
    "Name": "Bučovice, Černčín, rozcestí",
    "Latitude": 49.157273,
    "Longitude": 17.007965,
    "IsPublic": true,
    "LineList": "156,644"
  },
  {
    "StopID": 16430,
    "Zone": 645,
    "Name": "Bučovice, Černčín, ZD",
    "Latitude": 49.155320,
    "Longitude": 17.021122,
    "IsPublic": true,
    "LineList": "644"
  },
  {
    "StopID": 16431,
    "Zone": 645,
    "Name": "Bučovice, Černčín",
    "Latitude": 49.156218,
    "Longitude": 17.028398,
    "IsPublic": true,
    "LineList": "644"
  },
  {
    "StopID": 16432,
    "Zone": 645,
    "Name": "Bučovice, Kloboučky, škola",
    "Latitude": 49.133729,
    "Longitude": 17.006279,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16433,
    "Zone": 645,
    "Name": "Kloboučky, toč.",
    "Latitude": 49.131123,
    "Longitude": 17.011260,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16434,
    "Zone": 645,
    "Name": "Bučovice, Vícemilice",
    "Latitude": 49.140970,
    "Longitude": 17.018388,
    "IsPublic": true,
    "LineList": "643"
  },
  {
    "StopID": 16435,
    "Zone": 645,
    "Name": "Bučovice, dům mládeže",
    "Latitude": 49.152790,
    "Longitude": 17.009439,
    "IsPublic": true,
    "LineList": "156,602,632,640,641,643,644"
  },
  {
    "StopID": 16436,
    "Zone": 652,
    "Name": "Násedlovice, kostel",
    "Latitude": 49.014265,
    "Longitude": 16.961614,
    "IsPublic": true,
    "LineList": "655"
  },
  {
    "StopID": 16437,
    "Zone": 652,
    "Name": "Násedlovice, mlýn",
    "Latitude": 49.007289,
    "Longitude": 16.966862,
    "IsPublic": true,
    "LineList": "655,661"
  },
  {
    "StopID": 16438,
    "Zone": 652,
    "Name": "Násedlovice, u hřiště",
    "Latitude": 49.009198,
    "Longitude": 16.958218,
    "IsPublic": true,
    "LineList": "655,661"
  },
  {
    "StopID": 16439,
    "Zone": 652,
    "Name": "Násedlovice",
    "Latitude": 49.011567,
    "Longitude": 16.958012,
    "IsPublic": true,
    "LineList": "655,661"
  },
  {
    "StopID": 16440,
    "Zone": 652,
    "Name": "Uhřice, Janův Dvůr",
    "Latitude": 49.023762,
    "Longitude": 16.962080,
    "IsPublic": true,
    "LineList": "655,660"
  },
  {
    "StopID": 16441,
    "Zone": 652,
    "Name": "Uhřice, dolní zastávka",
    "Latitude": 49.047816,
    "Longitude": 16.949199,
    "IsPublic": true,
    "LineList": "660"
  },
  {
    "StopID": 16442,
    "Zone": 652,
    "Name": "Uhřice, horní zastávka",
    "Latitude": 49.051052,
    "Longitude": 16.945724,
    "IsPublic": true,
    "LineList": "660"
  },
  {
    "StopID": 16443,
    "Zone": 652,
    "Name": "Uhřice, železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16444,
    "Zone": 652,
    "Name": "Žarošice, Silničná, rozcestí Uhřice",
    "Latitude": 49.051823,
    "Longitude": 16.953043,
    "IsPublic": true,
    "LineList": "106,660"
  },
  {
    "StopID": 16445,
    "Zone": 643,
    "Name": "Žarošice, Těšanka",
    "Latitude": 49.079085,
    "Longitude": 16.936527,
    "IsPublic": true,
    "LineList": "106"
  },
  {
    "StopID": 16446,
    "Zone": 643,
    "Name": "Žarošice, Zdravá Voda",
    "Latitude": 49.065466,
    "Longitude": 16.945145,
    "IsPublic": true,
    "LineList": "106"
  },
  {
    "StopID": 16448,
    "Zone": 652,
    "Name": "Žarošice, škola",
    "Latitude": 49.039386,
    "Longitude": 16.961510,
    "IsPublic": true,
    "LineList": "106,655,660"
  },
  {
    "StopID": 16449,
    "Zone": 652,
    "Name": "Žarošice",
    "Latitude": 49.040544,
    "Longitude": 16.966948,
    "IsPublic": true,
    "LineList": "106,655,660"
  },
  {
    "StopID": 16450,
    "Zone": 652,
    "Name": "Žarošice, Zdravá Voda, osada",
    "Latitude": 49.068145,
    "Longitude": 16.951918,
    "IsPublic": true,
    "LineList": "660"
  },
  {
    "StopID": 16451,
    "Zone": 645,
    "Name": "Bučovice, zdravotní středisko",
    "Latitude": 49.148110,
    "Longitude": 17.005643,
    "IsPublic": true,
    "LineList": "156,602,640,641,643,644"
  },
  {
    "StopID": 16452,
    "Zone": 650,
    "Name": "Brumovice, obecní úřad",
    "Latitude": 48.959188,
    "Longitude": 16.896288,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 16453,
    "Zone": 650,
    "Name": "Brumovice, škola",
    "Latitude": 48.962954,
    "Longitude": 16.896326,
    "IsPublic": true,
    "LineList": "551"
  },
  {
    "StopID": 16454,
    "Zone": 650,
    "Name": "Brumovice, železniční stanice",
    "Latitude": 48.947197,
    "Longitude": 16.905822,
    "IsPublic": true,
    "LineList": "133,551"
  },
  {
    "StopID": 16455,
    "Zone": 650,
    "Name": "Karlín",
    "Latitude": 48.975593,
    "Longitude": 16.977302,
    "IsPublic": true,
    "LineList": "655"
  },
  {
    "StopID": 16456,
    "Zone": 650,
    "Name": "Karlín, farma",
    "Latitude": 48.983167,
    "Longitude": 16.974167,
    "IsPublic": true,
    "LineList": "655"
  },
  {
    "StopID": 16457,
    "Zone": 640,
    "Name": "Krumvíř, obecní úřad",
    "Latitude": 48.988929,
    "Longitude": 16.910556,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16458,
    "Zone": 640,
    "Name": "Krumvíř, samota Kumstát",
    "Latitude": 48.996122,
    "Longitude": 16.900578,
    "IsPublic": true,
    "LineList": "541"
  },
  {
    "StopID": 16459,
    "Zone": 640,
    "Name": "Krumvíř, sokolovna",
    "Latitude": 48.990167,
    "Longitude": 16.908806,
    "IsPublic": true,
    "LineList": "541"
  },
  {
    "StopID": 16460,
    "Zone": 640,
    "Name": "Krumvíř, statek",
    "Latitude": 48.981398,
    "Longitude": 16.923495,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16461,
    "Zone": 640,
    "Name": "Krumvíř, železniční stanice",
    "Latitude": 48.984981,
    "Longitude": 16.917200,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16462,
    "Zone": 650,
    "Name": "Terezín",
    "Latitude": 48.956758,
    "Longitude": 16.940812,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16463,
    "Zone": 645,
    "Name": "Bučovice, železniční stanice",
    "Latitude": 49.145868,
    "Longitude": 17.000022,
    "IsPublic": true,
    "LineList": "126,146,156,641,642,643,644"
  },
  {
    "StopID": 16464,
    "Zone": 645,
    "Name": "Kojátky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16465,
    "Zone": 652,
    "Name": "Žarošice, za školou",
    "Latitude": 49.037920,
    "Longitude": 16.961528,
    "IsPublic": true,
    "LineList": "655,660"
  },
  {
    "StopID": 16466,
    "Zone": 640,
    "Name": "Krumvíř, Penny",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16501,
    "Zone": 655,
    "Name": "Milonice, Roštoutky, statek",
    "Latitude": 49.178291,
    "Longitude": 17.056402,
    "IsPublic": true,
    "LineList": "650"
  },
  {
    "StopID": 16502,
    "Zone": 655,
    "Name": "Milonice",
    "Latitude": 49.158241,
    "Longitude": 17.072138,
    "IsPublic": true,
    "LineList": "643,650"
  },
  {
    "StopID": 16503,
    "Zone": 655,
    "Name": "Nemotice, žel.st.",
    "Latitude": 49.133592,
    "Longitude": 17.115927,
    "IsPublic": true,
    "LineList": "126,146,650"
  },
  {
    "StopID": 16504,
    "Zone": 655,
    "Name": "Nemotice",
    "Latitude": 49.129697,
    "Longitude": 17.124867,
    "IsPublic": true,
    "LineList": "650"
  },
  {
    "StopID": 16505,
    "Zone": 655,
    "Name": "Nesovice, Kotáry",
    "Latitude": 49.149135,
    "Longitude": 17.092392,
    "IsPublic": true,
    "LineList": "650"
  },
  {
    "StopID": 16506,
    "Zone": 655,
    "Name": "Nesovice, obecní úřad",
    "Latitude": 49.148645,
    "Longitude": 17.082892,
    "IsPublic": true,
    "LineList": "650"
  },
  {
    "StopID": 16508,
    "Zone": 655,
    "Name": "Nesovice, požární zbrojnice",
    "Latitude": 49.150539,
    "Longitude": 17.081624,
    "IsPublic": true,
    "LineList": "643,650"
  },
  {
    "StopID": 16509,
    "Zone": 655,
    "Name": "Nesovice, žel.st.",
    "Latitude": 49.149115,
    "Longitude": 17.079826,
    "IsPublic": true,
    "LineList": "126,146,643,650,651"
  },
  {
    "StopID": 16511,
    "Zone": 645,
    "Name": "Nevojice, točna",
    "Latitude": 49.137013,
    "Longitude": 17.047757,
    "IsPublic": true,
    "LineList": "643"
  },
  {
    "StopID": 16512,
    "Zone": 655,
    "Name": "Snovídky",
    "Latitude": 49.133077,
    "Longitude": 17.106192,
    "IsPublic": true,
    "LineList": "650"
  },
  {
    "StopID": 16513,
    "Zone": 655,
    "Name": "Uhřice, na návsi",
    "Latitude": 49.171422,
    "Longitude": 17.079021,
    "IsPublic": true,
    "LineList": "643,650"
  },
  {
    "StopID": 16514,
    "Zone": 655,
    "Name": "Uhřice, rozcestí",
    "Latitude": 49.163227,
    "Longitude": 17.067172,
    "IsPublic": true,
    "LineList": "643,650"
  },
  {
    "StopID": 16515,
    "Zone": 657,
    "Name": "Hvězdlice, Nové Hvězdlice, rozcestí",
    "Latitude": 49.191264,
    "Longitude": 17.094280,
    "IsPublic": true,
    "LineList": "643"
  },
  {
    "StopID": 16516,
    "Zone": 657,
    "Name": "Nové Hvězdlice",
    "Latitude": 49.193359,
    "Longitude": 17.083877,
    "IsPublic": true,
    "LineList": "166,643"
  },
  {
    "StopID": 16517,
    "Zone": 657,
    "Name": "Hvězdlice, Staré Hvězdlice",
    "Latitude": 49.202882,
    "Longitude": 17.073968,
    "IsPublic": true,
    "LineList": "166"
  },
  {
    "StopID": 16519,
    "Zone": 657,
    "Name": "Chvalkovice, Komorov, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16520,
    "Zone": 657,
    "Name": "Chvalkovice, u hřiště",
    "Latitude": 49.189783,
    "Longitude": 17.117720,
    "IsPublic": true,
    "LineList": "166,643"
  },
  {
    "StopID": 16521,
    "Zone": 657,
    "Name": "Chvalkovice",
    "Latitude": 49.187232,
    "Longitude": 17.110442,
    "IsPublic": true,
    "LineList": "166,643"
  },
  {
    "StopID": 16523,
    "Zone": 657,
    "Name": "Nemochovice, rozcestí Nítkovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16524,
    "Zone": 657,
    "Name": "Nemochovice",
    "Latitude": 49.179163,
    "Longitude": 17.137122,
    "IsPublic": true,
    "LineList": "166,643"
  },
  {
    "StopID": 16525,
    "Zone": 652,
    "Name": "Archlebov",
    "Latitude": 49.043153,
    "Longitude": 17.004003,
    "IsPublic": true,
    "LineList": "106,655,660"
  },
  {
    "StopID": 16526,
    "Zone": 652,
    "Name": "Dražůvky, rozcestí",
    "Latitude": 49.039883,
    "Longitude": 17.022766,
    "IsPublic": true,
    "LineList": "655,660"
  },
  {
    "StopID": 16527,
    "Zone": 652,
    "Name": "Dražůvky",
    "Latitude": 49.031967,
    "Longitude": 17.020073,
    "IsPublic": true,
    "LineList": "106,655,660"
  },
  {
    "StopID": 16528,
    "Zone": 662,
    "Name": "Nenkovice, obecní úřad",
    "Latitude": 49.004088,
    "Longitude": 17.011239,
    "IsPublic": true,
    "LineList": "106,661"
  },
  {
    "StopID": 16529,
    "Zone": 662,
    "Name": "Nenkovice, škola",
    "Latitude": 49.004645,
    "Longitude": 17.015652,
    "IsPublic": true,
    "LineList": "106,661"
  },
  {
    "StopID": 16530,
    "Zone": 662,
    "Name": "Nenkovice, u kašny",
    "Latitude": 49.001780,
    "Longitude": 17.008004,
    "IsPublic": true,
    "LineList": "106,661"
  },
  {
    "StopID": 16531,
    "Zone": 662,
    "Name": "Věteřov",
    "Latitude": 49.028514,
    "Longitude": 17.056009,
    "IsPublic": true,
    "LineList": "660"
  },
  {
    "StopID": 16532,
    "Zone": 662,
    "Name": "Želetice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16533,
    "Zone": 662,
    "Name": "Želetice, statek",
    "Latitude": 49.015213,
    "Longitude": 17.006876,
    "IsPublic": true,
    "LineList": "106,661"
  },
  {
    "StopID": 16534,
    "Zone": 662,
    "Name": "Želetice",
    "Latitude": 49.012587,
    "Longitude": 17.009244,
    "IsPublic": true,
    "LineList": "106,661"
  },
  {
    "StopID": 16535,
    "Zone": 662,
    "Name": "Lovčice, dolní zastávka",
    "Latitude": 49.063933,
    "Longitude": 17.054197,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16536,
    "Zone": 662,
    "Name": "Lovčice, horní zastávka",
    "Latitude": 49.067290,
    "Longitude": 17.062489,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16537,
    "Zone": 662,
    "Name": "Lovčice, na kopci",
    "Latitude": 49.068156,
    "Longitude": 17.070648,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16538,
    "Zone": 653,
    "Name": "Ždánice, Červený Kříž",
    "Latitude": 49.096775,
    "Longitude": 17.019329,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16539,
    "Zone": 653,
    "Name": "Ždánice, hvězdárna",
    "Latitude": 49.065595,
    "Longitude": 17.037682,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16540,
    "Zone": 662,
    "Name": "Ždánice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16541,
    "Zone": 653,
    "Name": "Ždánice, Suchý řádek",
    "Latitude": 49.071072,
    "Longitude": 17.023704,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16542,
    "Zone": 653,
    "Name": "Ždánice, šroubárna",
    "Latitude": 49.057420,
    "Longitude": 17.025468,
    "IsPublic": true,
    "LineList": "642,655"
  },
  {
    "StopID": 16543,
    "Zone": 653,
    "Name": "Ždánice, zdrav.stř.",
    "Latitude": 49.063885,
    "Longitude": 17.026308,
    "IsPublic": true,
    "LineList": "642,655"
  },
  {
    "StopID": 16544,
    "Zone": 653,
    "Name": "Ždánice",
    "Latitude": 49.064517,
    "Longitude": 17.029768,
    "IsPublic": true,
    "LineList": "642,655"
  },
  {
    "StopID": 16545,
    "Zone": 660,
    "Name": "Čejč, náměstí",
    "Latitude": 48.946044,
    "Longitude": 16.966680,
    "IsPublic": true,
    "LineList": "109,655,662,913"
  },
  {
    "StopID": 16546,
    "Zone": 660,
    "Name": "Čejč, žel.st.",
    "Latitude": 48.941915,
    "Longitude": 16.959049,
    "IsPublic": true,
    "LineList": "133,662,913"
  },
  {
    "StopID": 16547,
    "Zone": 660,
    "Name": "Čejkovice, Cigánov",
    "Latitude": 48.897101,
    "Longitude": 16.944014,
    "IsPublic": true,
    "LineList": "913"
  },
  {
    "StopID": 16548,
    "Zone": 660,
    "Name": "Čejkovice, kovárna",
    "Latitude": 48.900758,
    "Longitude": 16.939804,
    "IsPublic": true,
    "LineList": "159,913"
  },
  {
    "StopID": 16549,
    "Zone": 660,
    "Name": "Čejkovice, u kostela",
    "Latitude": 48.905000,
    "Longitude": 16.944042,
    "IsPublic": true,
    "LineList": "159,913"
  },
  {
    "StopID": 16550,
    "Zone": 660,
    "Name": "Čejkovice, V Kratinách",
    "Latitude": 48.909705,
    "Longitude": 16.940533,
    "IsPublic": true,
    "LineList": "913"
  },
  {
    "StopID": 16551,
    "Zone": 660,
    "Name": "Hovorany, čerpací stanice",
    "Latitude": 48.942265,
    "Longitude": 16.985834,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16552,
    "Zone": 660,
    "Name": "Hovorany, důl",
    "Latitude": 48.956704,
    "Longitude": 17.010415,
    "IsPublic": true,
    "LineList": "662"
  },
  {
    "StopID": 16553,
    "Zone": 660,
    "Name": "Hovorany, kostel",
    "Latitude": 48.954696,
    "Longitude": 16.998178,
    "IsPublic": true,
    "LineList": "662"
  },
  {
    "StopID": 16554,
    "Zone": 660,
    "Name": "Hovorany, rozcestí",
    "Latitude": 48.948592,
    "Longitude": 16.979728,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 16555,
    "Zone": 660,
    "Name": "Hovorany, škola",
    "Latitude": 48.953571,
    "Longitude": 16.984226,
    "IsPublic": true,
    "LineList": "662"
  },
  {
    "StopID": 16556,
    "Zone": 660,
    "Name": "Hovorany, zdravotní středisko",
    "Latitude": 48.949852,
    "Longitude": 16.981204,
    "IsPublic": true,
    "LineList": "662"
  },
  {
    "StopID": 16557,
    "Zone": 655,
    "Name": "Nesovice, čerpací stanice",
    "Latitude": 49.149576,
    "Longitude": 17.080193,
    "IsPublic": true,
    "LineList": "643"
  },
  {
    "StopID": 16558,
    "Zone": 653,
    "Name": "Ždánice, škola",
    "Latitude": 49.067194,
    "Longitude": 17.027832,
    "IsPublic": true,
    "LineList": "642,655"
  },
  {
    "StopID": 16601,
    "Zone": 662,
    "Name": "Bukovany",
    "Latitude": 49.041124,
    "Longitude": 17.101586,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16602,
    "Zone": 675,
    "Name": "Kyjov, Bohuslavice, rozcestí",
    "Latitude": 49.042666,
    "Longitude": 17.119128,
    "IsPublic": true,
    "LineList": "671,672"
  },
  {
    "StopID": 16604,
    "Zone": 675,
    "Name": "Bohuslavice, ž.s.",
    "Latitude": 49.055580,
    "Longitude": 17.119153,
    "IsPublic": true,
    "LineList": "126,146,671,672"
  },
  {
    "StopID": 16605,
    "Zone": 675,
    "Name": "Kyjov, Bohuslavice",
    "Latitude": 49.049703,
    "Longitude": 17.123475,
    "IsPublic": true,
    "LineList": "671,672"
  },
  {
    "StopID": 16606,
    "Zone": 675,
    "Name": "Boršov, hor.z.",
    "Latitude": 49.029744,
    "Longitude": 17.121487,
    "IsPublic": true,
    "LineList": "671,672"
  },
  {
    "StopID": 16607,
    "Zone": 675,
    "Name": "Kyjov, Boršov",
    "Latitude": 49.025162,
    "Longitude": 17.122555,
    "IsPublic": true,
    "LineList": "671,672"
  },
  {
    "StopID": 16608,
    "Zone": 675,
    "Name": "Kyjov, aut. st.",
    "Latitude": 49.006605,
    "Longitude": 17.124250,
    "IsPublic": true,
    "LineList": "106,642,660,661,662,663,664,665,666,667,668,671,672,673"
  },
  {
    "StopID": 16609,
    "Zone": 675,
    "Name": "Kyjov, Brandlova sídliště",
    "Latitude": 49.011923,
    "Longitude": 17.136618,
    "IsPublic": true,
    "LineList": "666,667,668"
  },
  {
    "StopID": 16610,
    "Zone": 675,
    "Name": "Kyjov, ČSAD",
    "Latitude": 49.019932,
    "Longitude": 17.124135,
    "IsPublic": true,
    "LineList": "671,672"
  },
  {
    "StopID": 16611,
    "Zone": 675,
    "Name": "Kyjov, letiště",
    "Latitude": 48.982633,
    "Longitude": 17.129503,
    "IsPublic": true,
    "LineList": "664"
  },
  {
    "StopID": 16612,
    "Zone": 675,
    "Name": "Kyjov, nem.",
    "Latitude": 49.006953,
    "Longitude": 17.110797,
    "IsPublic": true,
    "LineList": "106,660,661,671,672,673"
  },
  {
    "StopID": 16613,
    "Zone": 675,
    "Name": "Kyjov, pod nemocnicí",
    "Latitude": 49.007737,
    "Longitude": 17.114275,
    "IsPublic": true,
    "LineList": "642,663,664,666"
  },
  {
    "StopID": 16614,
    "Zone": 675,
    "Name": "Kyjov, sklárna",
    "Latitude": 49.003985,
    "Longitude": 17.129201,
    "IsPublic": true,
    "LineList": "664"
  },
  {
    "StopID": 16615,
    "Zone": 665,
    "Name": "Mouchnice, Haluzice, Stabila",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16616,
    "Zone": 662,
    "Name": "Nechvalín, dolní zastávka",
    "Latitude": 49.054017,
    "Longitude": 17.078154,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16617,
    "Zone": 662,
    "Name": "Nechvalín, horní zastávka",
    "Latitude": 49.049112,
    "Longitude": 17.083725,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16618,
    "Zone": 662,
    "Name": "Ostrovánky",
    "Latitude": 49.042801,
    "Longitude": 17.080223,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16619,
    "Zone": 662,
    "Name": "Sobůlky, ZD",
    "Latitude": 49.017737,
    "Longitude": 17.080648,
    "IsPublic": true,
    "LineList": "660"
  },
  {
    "StopID": 16620,
    "Zone": 662,
    "Name": "Sobůlky",
    "Latitude": 49.021339,
    "Longitude": 17.078569,
    "IsPublic": true,
    "LineList": "660"
  },
  {
    "StopID": 16622,
    "Zone": 662,
    "Name": "Strážovice",
    "Latitude": 49.009300,
    "Longitude": 17.047132,
    "IsPublic": true,
    "LineList": "106,661"
  },
  {
    "StopID": 16623,
    "Zone": 655,
    "Name": "Mouchnice, Na Požárech",
    "Latitude": 49.116337,
    "Longitude": 17.135163,
    "IsPublic": true,
    "LineList": "650"
  },
  {
    "StopID": 16624,
    "Zone": 655,
    "Name": "Mouchnice",
    "Latitude": 49.112097,
    "Longitude": 17.135128,
    "IsPublic": true,
    "LineList": "650"
  },
  {
    "StopID": 16625,
    "Zone": 655,
    "Name": "Brankovice, křižovatka",
    "Latitude": 49.153322,
    "Longitude": 17.136018,
    "IsPublic": true,
    "LineList": "651"
  },
  {
    "StopID": 16626,
    "Zone": 655,
    "Name": "Brankovice, obecní úřad",
    "Latitude": 49.156272,
    "Longitude": 17.134988,
    "IsPublic": true,
    "LineList": "166,643"
  },
  {
    "StopID": 16627,
    "Zone": 655,
    "Name": "Brankovice, škola",
    "Latitude": 49.156030,
    "Longitude": 17.129673,
    "IsPublic": true,
    "LineList": "166,643,651"
  },
  {
    "StopID": 16628,
    "Zone": 655,
    "Name": "Brankovice, žel. st.",
    "Latitude": 49.150569,
    "Longitude": 17.133699,
    "IsPublic": true,
    "LineList": "126,146,166,651"
  },
  {
    "StopID": 16629,
    "Zone": 655,
    "Name": "Brankovice, motorest",
    "Latitude": 49.153688,
    "Longitude": 17.136056,
    "IsPublic": true,
    "LineList": "166,643,651"
  },
  {
    "StopID": 16630,
    "Zone": 655,
    "Name": "Dobročkovice, rozcestí",
    "Latitude": 49.149818,
    "Longitude": 17.120426,
    "IsPublic": true,
    "LineList": "651"
  },
  {
    "StopID": 16631,
    "Zone": 655,
    "Name": "Dobročkovice",
    "Latitude": 49.162430,
    "Longitude": 17.108810,
    "IsPublic": true,
    "LineList": "651"
  },
  {
    "StopID": 16632,
    "Zone": 667,
    "Name": "Kožušice, točna",
    "Latitude": 49.156771,
    "Longitude": 17.187265,
    "IsPublic": true,
    "LineList": "651"
  },
  {
    "StopID": 16633,
    "Zone": 667,
    "Name": "Kožušice",
    "Latitude": 49.157666,
    "Longitude": 17.187137,
    "IsPublic": true,
    "LineList": "651"
  },
  {
    "StopID": 16634,
    "Zone": 667,
    "Name": "Malínky",
    "Latitude": 49.159153,
    "Longitude": 17.161180,
    "IsPublic": true,
    "LineList": "651"
  },
  {
    "StopID": 16635,
    "Zone": 662,
    "Name": "Stavěšice",
    "Latitude": 49.001938,
    "Longitude": 17.029823,
    "IsPublic": true,
    "LineList": "106,661"
  },
  {
    "StopID": 16636,
    "Zone": 675,
    "Name": "Kyjov, gymnázium",
    "Latitude": 49.011762,
    "Longitude": 17.126330,
    "IsPublic": true,
    "LineList": "672,673"
  },
  {
    "StopID": 16637,
    "Zone": 675,
    "Name": "Kyjov, nadjezd",
    "Latitude": 49.007620,
    "Longitude": 17.119030,
    "IsPublic": true,
    "LineList": "671,672,673"
  },
  {
    "StopID": 16638,
    "Zone": 675,
    "Name": "Kyjov, náměstí TGM",
    "Latitude": 49.009988,
    "Longitude": 17.122645,
    "IsPublic": true,
    "LineList": "671,673"
  },
  {
    "StopID": 16639,
    "Zone": 675,
    "Name": "Kyjov, nemocnice, křižovatka",
    "Latitude": 49.007193,
    "Longitude": 17.113402,
    "IsPublic": true,
    "LineList": "662,663,671,672,673"
  },
  {
    "StopID": 16640,
    "Zone": 675,
    "Name": "Kyjov, Nětčice, obecní dům",
    "Latitude": 49.019152,
    "Longitude": 17.128983,
    "IsPublic": true,
    "LineList": "671,673"
  },
  {
    "StopID": 16641,
    "Zone": 675,
    "Name": "Kyjov, Palackého",
    "Latitude": 49.008143,
    "Longitude": 17.130642,
    "IsPublic": true,
    "LineList": "671,672,673"
  },
  {
    "StopID": 16642,
    "Zone": 675,
    "Name": "Kyjov, poliklinika",
    "Latitude": 49.014672,
    "Longitude": 17.125657,
    "IsPublic": true,
    "LineList": "672,673"
  },
  {
    "StopID": 16643,
    "Zone": 675,
    "Name": "Kyjov, sídliště Karla Čapka",
    "Latitude": 49.018148,
    "Longitude": 17.134067,
    "IsPublic": true,
    "LineList": "671,673"
  },
  {
    "StopID": 16644,
    "Zone": 675,
    "Name": "Kyjov, smuteční síň",
    "Latitude": 49.015572,
    "Longitude": 17.134788,
    "IsPublic": true,
    "LineList": "671,673"
  },
  {
    "StopID": 16645,
    "Zone": 675,
    "Name": "Kyjov, traktorka",
    "Latitude": 49.003422,
    "Longitude": 17.115820,
    "IsPublic": true,
    "LineList": "671,673"
  },
  {
    "StopID": 16646,
    "Zone": 675,
    "Name": "Kyjov, Újezd, Dvořákova",
    "Latitude": 49.013240,
    "Longitude": 17.133735,
    "IsPublic": true,
    "LineList": "671,672,673"
  },
  {
    "StopID": 16647,
    "Zone": 675,
    "Name": "Kyjov, Újezd, Klvaňova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16648,
    "Zone": 675,
    "Name": "Kyjov, Újezd, škola",
    "Latitude": 49.010588,
    "Longitude": 17.131510,
    "IsPublic": true,
    "LineList": "671,672,673"
  },
  {
    "StopID": 16649,
    "Zone": 675,
    "Name": "Kyjov, Zahradní",
    "Latitude": 49.016012,
    "Longitude": 17.127543,
    "IsPublic": true,
    "LineList": "671,673"
  },
  {
    "StopID": 16650,
    "Zone": 675,
    "Name": "Kyjov, žel. st.",
    "Latitude": 49.015186,
    "Longitude": 17.122509,
    "IsPublic": true,
    "LineList": "126,146,663,664,666,672,673"
  },
  {
    "StopID": 16651,
    "Zone": 662,
    "Name": "Bukovany, Dědina",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16652,
    "Zone": 675,
    "Name": "Kyjov, Langobardská",
    "Latitude": 49.004284,
    "Longitude": 17.108918,
    "IsPublic": true,
    "LineList": "671,672,673"
  },
  {
    "StopID": 16653,
    "Zone": 675,
    "Name": "Kyjov, u fary",
    "Latitude": 49.008997,
    "Longitude": 17.128788,
    "IsPublic": true,
    "LineList": "671,672,673"
  },
  {
    "StopID": 16654,
    "Zone": 662,
    "Name": "Bukovany, Bukovanský mlýn",
    "Latitude": 49.040894,
    "Longitude": 17.091960,
    "IsPublic": true,
    "LineList": "642"
  },
  {
    "StopID": 16790,
    "Zone": 667,
    "Name": "Střílky, náměstí",
    "Latitude": 49.142495,
    "Longitude": 17.211307,
    "IsPublic": true,
    "LineList": "651"
  },
  {
    "StopID": 16791,
    "Zone": 666,
    "Name": "Koryčany, Lískovec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16792,
    "Zone": 666,
    "Name": "Koryčany, závod",
    "Latitude": 49.111701,
    "Longitude": 17.169482,
    "IsPublic": true,
    "LineList": "650"
  },
  {
    "StopID": 16793,
    "Zone": 666,
    "Name": "Koryčany, náměstí",
    "Latitude": 49.106162,
    "Longitude": 17.163439,
    "IsPublic": true,
    "LineList": "650"
  },
  {
    "StopID": 16800,
    "Zone": 685,
    "Name": "Milotice, drůbežárna",
    "Latitude": 48.972310,
    "Longitude": 17.133374,
    "IsPublic": true,
    "LineList": "664"
  },
  {
    "StopID": 16801,
    "Zone": 685,
    "Name": "Milotice, dvůr",
    "Latitude": 48.965406,
    "Longitude": 17.140633,
    "IsPublic": true,
    "LineList": "664"
  },
  {
    "StopID": 16802,
    "Zone": 685,
    "Name": "Milotice, náves",
    "Latitude": 48.954458,
    "Longitude": 17.142534,
    "IsPublic": true,
    "LineList": "664"
  },
  {
    "StopID": 16803,
    "Zone": 685,
    "Name": "Milotice, rozcestí",
    "Latitude": 48.948157,
    "Longitude": 17.093054,
    "IsPublic": true,
    "LineList": "663"
  },
  {
    "StopID": 16804,
    "Zone": 685,
    "Name": "Milotice, škola",
    "Latitude": 48.954294,
    "Longitude": 17.152061,
    "IsPublic": true,
    "LineList": "664"
  },
  {
    "StopID": 16805,
    "Zone": 685,
    "Name": "Skoronice",
    "Latitude": 48.981567,
    "Longitude": 17.153852,
    "IsPublic": true,
    "LineList": "664"
  },
  {
    "StopID": 16806,
    "Zone": 685,
    "Name": "Svatobořice-Mistřín, kulturní dům",
    "Latitude": 48.977845,
    "Longitude": 17.090226,
    "IsPublic": true,
    "LineList": "662,663"
  },
  {
    "StopID": 16807,
    "Zone": 685,
    "Name": "Svatobořice-Mistřín, Mistřín",
    "Latitude": 48.971576,
    "Longitude": 17.081159,
    "IsPublic": true,
    "LineList": "662,663"
  },
  {
    "StopID": 16808,
    "Zone": 685,
    "Name": "Svatobořice-Mistřín, mlýn",
    "Latitude": 48.962562,
    "Longitude": 17.089017,
    "IsPublic": true,
    "LineList": "663"
  },
  {
    "StopID": 16809,
    "Zone": 685,
    "Name": "Svatobořice-Mistřín, restaurace",
    "Latitude": 48.983344,
    "Longitude": 17.094526,
    "IsPublic": true,
    "LineList": "662,663"
  },
  {
    "StopID": 16810,
    "Zone": 685,
    "Name": "Svatobořice-Mistřín, škola",
    "Latitude": 48.974035,
    "Longitude": 17.085634,
    "IsPublic": true,
    "LineList": "662,663"
  },
  {
    "StopID": 16811,
    "Zone": 685,
    "Name": "Svatobořice-Mistřín, textilka",
    "Latitude": 48.991712,
    "Longitude": 17.101143,
    "IsPublic": true,
    "LineList": "662,663"
  },
  {
    "StopID": 16812,
    "Zone": 685,
    "Name": "Svatobořice-Mistřín, železniční stanice",
    "Latitude": 48.975296,
    "Longitude": 17.096785,
    "IsPublic": true,
    "LineList": "662"
  },
  {
    "StopID": 16813,
    "Zone": 685,
    "Name": "Šardice",
    "Latitude": 48.963994,
    "Longitude": 17.028502,
    "IsPublic": true,
    "LineList": "662"
  },
  {
    "StopID": 16814,
    "Zone": 685,
    "Name": "Šardice, u kapličky",
    "Latitude": 48.961917,
    "Longitude": 17.033473,
    "IsPublic": true,
    "LineList": "662"
  },
  {
    "StopID": 16815,
    "Zone": 685,
    "Name": "Šardice, Padělky",
    "Latitude": 48.963872,
    "Longitude": 17.050645,
    "IsPublic": true,
    "LineList": "662"
  },
  {
    "StopID": 16816,
    "Zone": 685,
    "Name": "Šardice, ZD",
    "Latitude": 48.962090,
    "Longitude": 17.043912,
    "IsPublic": true,
    "LineList": "662"
  },
  {
    "StopID": 16817,
    "Zone": 685,
    "Name": "Vlkoš",
    "Latitude": 48.990800,
    "Longitude": 17.161902,
    "IsPublic": true,
    "LineList": "664,665,666"
  },
  {
    "StopID": 16818,
    "Zone": 685,
    "Name": "Vlkoš, křižovatka",
    "Latitude": 48.990244,
    "Longitude": 17.164144,
    "IsPublic": true,
    "LineList": "666"
  },
  {
    "StopID": 16819,
    "Zone": 685,
    "Name": "Vlkoš, škola",
    "Latitude": 48.985418,
    "Longitude": 17.159185,
    "IsPublic": true,
    "LineList": "664"
  },
  {
    "StopID": 16820,
    "Zone": 685,
    "Name": "Vlkoš, Tesko",
    "Latitude": 48.987104,
    "Longitude": 17.172588,
    "IsPublic": true,
    "LineList": "665"
  },
  {
    "StopID": 16821,
    "Zone": 685,
    "Name": "Vracov, Drahy",
    "Latitude": 48.974785,
    "Longitude": 17.207127,
    "IsPublic": true,
    "LineList": "912"
  },
  {
    "StopID": 16822,
    "Zone": 685,
    "Name": "Vracov, obecní úřad",
    "Latitude": 48.979694,
    "Longitude": 17.219396,
    "IsPublic": true,
    "LineList": "665,912"
  },
  {
    "StopID": 16823,
    "Zone": 685,
    "Name": "Vracov, Slokov",
    "Latitude": 48.981767,
    "Longitude": 17.207748,
    "IsPublic": true,
    "LineList": "665"
  },
  {
    "StopID": 16824,
    "Zone": 685,
    "Name": "Vracov, škola",
    "Latitude": 48.980978,
    "Longitude": 17.209315,
    "IsPublic": true,
    "LineList": "912"
  },
  {
    "StopID": 16825,
    "Zone": 687,
    "Name": "Čeložnice",
    "Latitude": 49.051555,
    "Longitude": 17.154533,
    "IsPublic": true,
    "LineList": "668"
  },
  {
    "StopID": 16826,
    "Zone": 687,
    "Name": "Čeložnice, Domov důchodců",
    "Latitude": 49.048863,
    "Longitude": 17.154308,
    "IsPublic": true,
    "LineList": "668"
  },
  {
    "StopID": 16827,
    "Zone": 687,
    "Name": "Hýsly",
    "Latitude": 49.023880,
    "Longitude": 17.183072,
    "IsPublic": true,
    "LineList": "667"
  },
  {
    "StopID": 16828,
    "Zone": 687,
    "Name": "Hýsly, Moštěnice, dvůr",
    "Latitude": 49.030088,
    "Longitude": 17.180178,
    "IsPublic": true,
    "LineList": "667"
  },
  {
    "StopID": 16829,
    "Zone": 687,
    "Name": "Ježov, škola",
    "Latitude": 49.024393,
    "Longitude": 17.213237,
    "IsPublic": true,
    "LineList": "666,667"
  },
  {
    "StopID": 16830,
    "Zone": 687,
    "Name": "Ježov, u Šupalového",
    "Latitude": 49.024478,
    "Longitude": 17.206302,
    "IsPublic": true,
    "LineList": "666,667"
  },
  {
    "StopID": 16831,
    "Zone": 687,
    "Name": "Ježov, zdravotní středisko",
    "Latitude": 49.026442,
    "Longitude": 17.209735,
    "IsPublic": true,
    "LineList": "666,667"
  },
  {
    "StopID": 16832,
    "Zone": 687,
    "Name": "Kelčany, obecní úřad",
    "Latitude": 49.005392,
    "Longitude": 17.173913,
    "IsPublic": true,
    "LineList": "666"
  },
  {
    "StopID": 16833,
    "Zone": 687,
    "Name": "Kelčany, u sklepů",
    "Latitude": 49.012607,
    "Longitude": 17.176457,
    "IsPublic": true,
    "LineList": "666,667"
  },
  {
    "StopID": 16834,
    "Zone": 687,
    "Name": "Kelčany, ZSP",
    "Latitude": 49.012325,
    "Longitude": 17.184113,
    "IsPublic": true,
    "LineList": "666,667"
  },
  {
    "StopID": 16835,
    "Zone": 687,
    "Name": "Kostelec, horní zastávka",
    "Latitude": 49.032285,
    "Longitude": 17.149582,
    "IsPublic": true,
    "LineList": "668"
  },
  {
    "StopID": 16836,
    "Zone": 687,
    "Name": "Kostelec, točna",
    "Latitude": 49.026817,
    "Longitude": 17.152758,
    "IsPublic": true,
    "LineList": "667,668"
  },
  {
    "StopID": 16837,
    "Zone": 687,
    "Name": "Kostelec, u mostu",
    "Latitude": 49.026939,
    "Longitude": 17.152267,
    "IsPublic": true,
    "LineList": "668"
  },
  {
    "StopID": 16838,
    "Zone": 687,
    "Name": "Moravany",
    "Latitude": 49.039391,
    "Longitude": 17.168021,
    "IsPublic": true,
    "LineList": "667"
  },
  {
    "StopID": 16839,
    "Zone": 687,
    "Name": "Moravany, Kameňák",
    "Latitude": 49.058545,
    "Longitude": 17.175095,
    "IsPublic": true,
    "LineList": "667"
  },
  {
    "StopID": 16840,
    "Zone": 687,
    "Name": "Moravany, Moštěnská",
    "Latitude": 49.037051,
    "Longitude": 17.172474,
    "IsPublic": true,
    "LineList": "667"
  },
  {
    "StopID": 16841,
    "Zone": 687,
    "Name": "Žádovice",
    "Latitude": 49.015899,
    "Longitude": 17.195658,
    "IsPublic": true,
    "LineList": "666,667"
  },
  {
    "StopID": 16842,
    "Zone": 687,
    "Name": "Žeravice, Na šachtě",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16843,
    "Zone": 687,
    "Name": "Žeravice, obchod",
    "Latitude": 49.016810,
    "Longitude": 17.239150,
    "IsPublic": true,
    "LineList": "933,934"
  },
  {
    "StopID": 16844,
    "Zone": 687,
    "Name": "Žeravice, ObÚ",
    "Latitude": 49.023193,
    "Longitude": 17.236705,
    "IsPublic": true,
    "LineList": "666,667,933,934"
  },
  {
    "StopID": 16845,
    "Zone": 689,
    "Name": "Labuty",
    "Latitude": 49.046588,
    "Longitude": 17.212315,
    "IsPublic": true,
    "LineList": "666"
  },
  {
    "StopID": 16846,
    "Zone": 689,
    "Name": "Osvětimany",
    "Latitude": 49.055850,
    "Longitude": 17.249430,
    "IsPublic": true,
    "LineList": "666"
  },
  {
    "StopID": 16847,
    "Zone": 689,
    "Name": "Osvětimany, škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16848,
    "Zone": 689,
    "Name": "Osvětimany, ZD",
    "Latitude": 49.056377,
    "Longitude": 17.243733,
    "IsPublic": true,
    "LineList": "666"
  },
  {
    "StopID": 16849,
    "Zone": 687,
    "Name": "Skalka",
    "Latitude": 49.035232,
    "Longitude": 17.208618,
    "IsPublic": true,
    "LineList": "666"
  },
  {
    "StopID": 16850,
    "Zone": 687,
    "Name": "Skalka, ZD",
    "Latitude": 49.038236,
    "Longitude": 17.207324,
    "IsPublic": true,
    "LineList": "666"
  },
  {
    "StopID": 16851,
    "Zone": 689,
    "Name": "Vřesovice",
    "Latitude": 49.058796,
    "Longitude": 17.215078,
    "IsPublic": true,
    "LineList": "666"
  },
  {
    "StopID": 16852,
    "Zone": 689,
    "Name": "Vřesovice, Paseky",
    "Latitude": 49.059482,
    "Longitude": 17.219682,
    "IsPublic": true,
    "LineList": "666"
  },
  {
    "StopID": 16853,
    "Zone": 0,
    "Name": "Hostějov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16854,
    "Zone": 0,
    "Name": "Újezdec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16855,
    "Zone": 0,
    "Name": "Medlovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16856,
    "Zone": 0,
    "Name": "Stříbrnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16857,
    "Zone": 0,
    "Name": "Boršice, nová čtvrť",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16858,
    "Zone": 0,
    "Name": "Boršice, Obecní úřad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16859,
    "Zone": 0,
    "Name": "Boršice, Trávníky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16860,
    "Zone": 0,
    "Name": "Boršice, rozc. 2.0",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16861,
    "Zone": 0,
    "Name": "Zlechov, křiž.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16862,
    "Zone": 0,
    "Name": "Zlechov, Olší",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16863,
    "Zone": 0,
    "Name": "Staré Město, záv. Slezan",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16864,
    "Zone": 0,
    "Name": "Staré Město, Ferona",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16865,
    "Zone": 0,
    "Name": "Staré Město, žel. st.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16866,
    "Zone": 0,
    "Name": "Staré Město, Cukrovar",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16867,
    "Zone": 0,
    "Name": "Staré Město, Mayer",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16868,
    "Zone": 0,
    "Name": "Staré Město, sokolovna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16869,
    "Zone": 0,
    "Name": "Staré Město, Lidový dům",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16870,
    "Zone": 0,
    "Name": "Staré Město, hřbitov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16871,
    "Zone": 0,
    "Name": "Uherské Hradiště, aut. nádr.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 16900,
    "Zone": 695,
    "Name": "Bzenec, Doubrava",
    "Latitude": 48.961680,
    "Longitude": 17.287070,
    "IsPublic": true,
    "LineList": "665"
  },
  {
    "StopID": 16901,
    "Zone": 695,
    "Name": "Bzenec, náměstí",
    "Latitude": 48.972859,
    "Longitude": 17.266371,
    "IsPublic": true,
    "LineList": "665,912,934"
  },
  {
    "StopID": 16902,
    "Zone": 695,
    "Name": "Bzenec, Novosady",
    "Latitude": 48.976053,
    "Longitude": 17.264322,
    "IsPublic": true,
    "LineList": "934"
  },
  {
    "StopID": 16903,
    "Zone": 695,
    "Name": "Bzenec, Nový Svět",
    "Latitude": 48.972968,
    "Longitude": 17.251471,
    "IsPublic": true,
    "LineList": "665,912"
  },
  {
    "StopID": 16904,
    "Zone": 695,
    "Name": "Bzenec, Olšovec",
    "Latitude": 48.972697,
    "Longitude": 17.289385,
    "IsPublic": true,
    "LineList": "934"
  },
  {
    "StopID": 16905,
    "Zone": 695,
    "Name": "Bzenec, Přívoz, železniční stanice",
    "Latitude": 48.935821,
    "Longitude": 17.288241,
    "IsPublic": true,
    "LineList": "139,665"
  },
  {
    "StopID": 16906,
    "Zone": 695,
    "Name": "Bzenec, UNIKOV",
    "Latitude": 48.976552,
    "Longitude": 17.305532,
    "IsPublic": true,
    "LineList": "934"
  },
  {
    "StopID": 16907,
    "Zone": 695,
    "Name": "Bzenec, ZŠ",
    "Latitude": 48.970492,
    "Longitude": 17.279640,
    "IsPublic": true,
    "LineList": "665,934"
  },
  {
    "StopID": 16908,
    "Zone": 695,
    "Name": "Bzenec, žel.st.",
    "Latitude": 48.969180,
    "Longitude": 17.263452,
    "IsPublic": true,
    "LineList": "126,146,148,912,934"
  },
  {
    "StopID": 16909,
    "Zone": 695,
    "Name": "Domanín, horní zastávka",
    "Latitude": 48.999320,
    "Longitude": 17.290608,
    "IsPublic": true,
    "LineList": "933"
  },
  {
    "StopID": 16910,
    "Zone": 695,
    "Name": "Domanín, obecní úřad",
    "Latitude": 49.002052,
    "Longitude": 17.284917,
    "IsPublic": true,
    "LineList": "933,934"
  },
  {
    "StopID": 16911,
    "Zone": 695,
    "Name": "Domanín, ZD",
    "Latitude": 48.998968,
    "Longitude": 17.297130,
    "IsPublic": true,
    "LineList": "933"
  },
  {
    "StopID": 16912,
    "Zone": 695,
    "Name": "Syrovín",
    "Latitude": 49.025557,
    "Longitude": 17.263658,
    "IsPublic": true,
    "LineList": "933,934"
  },
  {
    "StopID": 16913,
    "Zone": 695,
    "Name": "Těmice, restaurace",
    "Latitude": 49.000376,
    "Longitude": 17.263782,
    "IsPublic": true,
    "LineList": "933,934"
  },
  {
    "StopID": 16914,
    "Zone": 695,
    "Name": "Těmice, u mlýna",
    "Latitude": 49.008845,
    "Longitude": 17.266090,
    "IsPublic": true,
    "LineList": "933,934"
  },
  {
    "StopID": 16915,
    "Zone": 695,
    "Name": "Těmice, ZD",
    "Latitude": 49.001483,
    "Longitude": 17.274727,
    "IsPublic": true,
    "LineList": "933,934"
  },
  {
    "StopID": 16916,
    "Zone": 695,
    "Name": "Ořechov",
    "Latitude": 49.030682,
    "Longitude": 17.300456,
    "IsPublic": true,
    "LineList": "934"
  },
  {
    "StopID": 16917,
    "Zone": 695,
    "Name": "Bzenec, Přívoz",
    "Latitude": 48.936406,
    "Longitude": 17.293926,
    "IsPublic": true,
    "LineList": "665"
  },
  {
    "StopID": 17202,
    "Zone": 720,
    "Name": "Hostěnice, chaty",
    "Latitude": 49.241828,
    "Longitude": 16.764938,
    "IsPublic": true,
    "LineList": "210,701"
  },
  {
    "StopID": 17203,
    "Zone": 720,
    "Name": "Hostěnice, kasárna",
    "Latitude": 49.233053,
    "Longitude": 16.778794,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 17204,
    "Zone": 720,
    "Name": "Hostěnice, ObÚ",
    "Latitude": 49.239232,
    "Longitude": 16.771882,
    "IsPublic": true,
    "LineList": "210,701"
  },
  {
    "StopID": 17205,
    "Zone": 720,
    "Name": "Hostěnice, rozc.Červený vrch",
    "Latitude": 49.232777,
    "Longitude": 16.795863,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 17206,
    "Zone": 720,
    "Name": "Kovalovice, Dražka",
    "Latitude": 49.206395,
    "Longitude": 16.824338,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 17207,
    "Zone": 720,
    "Name": "Kovalovice, na kopci",
    "Latitude": 49.206241,
    "Longitude": 16.807556,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 17208,
    "Zone": 720,
    "Name": "Kovalovice, obecní úřad",
    "Latitude": 49.204724,
    "Longitude": 16.818802,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 17209,
    "Zone": 720,
    "Name": "Pozořice, Jezera, vodojem",
    "Latitude": 49.221987,
    "Longitude": 16.797157,
    "IsPublic": true,
    "LineList": "701"
  },
  {
    "StopID": 17210,
    "Zone": 720,
    "Name": "Pozořice, Velké Lipky",
    "Latitude": 49.209448,
    "Longitude": 16.797716,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 17211,
    "Zone": 720,
    "Name": "Pozořice, Jezera",
    "Latitude": 49.215475,
    "Longitude": 16.795525,
    "IsPublic": true,
    "LineList": "701,702"
  },
  {
    "StopID": 17212,
    "Zone": 720,
    "Name": "Pozořice, náměstí",
    "Latitude": 49.209532,
    "Longitude": 16.790621,
    "IsPublic": true,
    "LineList": "701,702"
  },
  {
    "StopID": 17214,
    "Zone": 720,
    "Name": "Pozořice, škola",
    "Latitude": 49.206952,
    "Longitude": 16.797233,
    "IsPublic": true,
    "LineList": "701,702"
  },
  {
    "StopID": 17215,
    "Zone": 720,
    "Name": "Sivice",
    "Latitude": 49.201333,
    "Longitude": 16.783578,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 17216,
    "Zone": 720,
    "Name": "Viničné Šumice, Hradská",
    "Latitude": 49.214353,
    "Longitude": 16.821804,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 17217,
    "Zone": 720,
    "Name": "Viničné Šumice, obecní úřad",
    "Latitude": 49.212460,
    "Longitude": 16.825917,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 17218,
    "Zone": 720,
    "Name": "Viničné Šumice, Psénky",
    "Latitude": 49.213530,
    "Longitude": 16.816405,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 17220,
    "Zone": 720,
    "Name": "Viničné Šumice, točna",
    "Latitude": 49.212718,
    "Longitude": 16.810700,
    "IsPublic": true,
    "LineList": "702"
  },
  {
    "StopID": 17301,
    "Zone": 730,
    "Name": "Dražovice",
    "Latitude": 49.193337,
    "Longitude": 16.943692,
    "IsPublic": true,
    "LineList": "602"
  },
  {
    "StopID": 17302,
    "Zone": 730,
    "Name": "Dražovice, na kopci",
    "Latitude": 49.191844,
    "Longitude": 16.947005,
    "IsPublic": true,
    "LineList": "602"
  },
  {
    "StopID": 17303,
    "Zone": 730,
    "Name": "Drnovice, Na žlebě",
    "Latitude": 49.276158,
    "Longitude": 16.938854,
    "IsPublic": true,
    "LineList": "157,167"
  },
  {
    "StopID": 17304,
    "Zone": 730,
    "Name": "Drnovice",
    "Latitude": 49.276548,
    "Longitude": 16.952082,
    "IsPublic": true,
    "LineList": "157,167,730"
  },
  {
    "StopID": 17305,
    "Zone": 730,
    "Name": "Drnovice, Na vrchu",
    "Latitude": 49.270526,
    "Longitude": 16.949216,
    "IsPublic": true,
    "LineList": "730"
  },
  {
    "StopID": 17306,
    "Zone": 730,
    "Name": "Drnovice, škola",
    "Latitude": 49.276192,
    "Longitude": 16.950773,
    "IsPublic": true,
    "LineList": "157,167"
  },
  {
    "StopID": 17307,
    "Zone": 730,
    "Name": "Habrovany",
    "Latitude": 49.231398,
    "Longitude": 16.877497,
    "IsPublic": true,
    "LineList": "731"
  },
  {
    "StopID": 17308,
    "Zone": 730,
    "Name": "Ježkovice, točna",
    "Latitude": 49.298577,
    "Longitude": 16.893955,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 17309,
    "Zone": 730,
    "Name": "Ježkovice, u hřbitova",
    "Latitude": 49.295590,
    "Longitude": 16.901879,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 17310,
    "Zone": 730,
    "Name": "Komořany, obecní úřad",
    "Latitude": 49.216318,
    "Longitude": 16.907057,
    "IsPublic": true,
    "LineList": "602"
  },
  {
    "StopID": 17311,
    "Zone": 730,
    "Name": "Komořany, EDP",
    "Latitude": 49.219396,
    "Longitude": 16.904797,
    "IsPublic": true,
    "LineList": "107,602,631,730"
  },
  {
    "StopID": 17312,
    "Zone": 730,
    "Name": "Komořany, Tusculum",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 17314,
    "Zone": 730,
    "Name": "Luleč, kamenolom",
    "Latitude": 49.261887,
    "Longitude": 16.937008,
    "IsPublic": true,
    "LineList": "730"
  },
  {
    "StopID": 17315,
    "Zone": 730,
    "Name": "Luleč, obecní úřad",
    "Latitude": 49.253993,
    "Longitude": 16.929762,
    "IsPublic": true,
    "LineList": "730"
  },
  {
    "StopID": 17316,
    "Zone": 730,
    "Name": "Luleč, rozc. k žel. st.",
    "Latitude": 49.250775,
    "Longitude": 16.920894,
    "IsPublic": true,
    "LineList": "730"
  },
  {
    "StopID": 17317,
    "Zone": 730,
    "Name": "Nemojany",
    "Latitude": 49.246472,
    "Longitude": 16.915278,
    "IsPublic": true,
    "LineList": "730"
  },
  {
    "StopID": 17318,
    "Zone": 730,
    "Name": "Olšany",
    "Latitude": 49.248937,
    "Longitude": 16.863638,
    "IsPublic": true,
    "LineList": "731"
  },
  {
    "StopID": 17319,
    "Zone": 730,
    "Name": "Olšany, lom",
    "Latitude": 49.240408,
    "Longitude": 16.866624,
    "IsPublic": true,
    "LineList": "731"
  },
  {
    "StopID": 17320,
    "Zone": 730,
    "Name": "Podbřežice",
    "Latitude": 49.211937,
    "Longitude": 16.928283,
    "IsPublic": true,
    "LineList": "602"
  },
  {
    "StopID": 17321,
    "Zone": 730,
    "Name": "Podbřežice, rozc.",
    "Latitude": 49.208162,
    "Longitude": 16.920518,
    "IsPublic": true,
    "LineList": "602"
  },
  {
    "StopID": 17323,
    "Zone": 730,
    "Name": "Račice-Pístovice, Pístovice, na kopci",
    "Latitude": 49.275940,
    "Longitude": 16.909033,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 17324,
    "Zone": 730,
    "Name": "Račice-Pístovice, Pístovice",
    "Latitude": 49.273792,
    "Longitude": 16.895212,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 17325,
    "Zone": 730,
    "Name": "Račice-Pístovice, Račice",
    "Latitude": 49.276228,
    "Longitude": 16.872419,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 17326,
    "Zone": 730,
    "Name": "Račice, točna",
    "Latitude": 49.277937,
    "Longitude": 16.871397,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 17327,
    "Zone": 730,
    "Name": "Račice-Pístovice, Račice, ZD",
    "Latitude": 49.274641,
    "Longitude": 16.881229,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 17328,
    "Zone": 730,
    "Name": "Luleč, rozcestí",
    "Latitude": 49.247442,
    "Longitude": 16.943258,
    "IsPublic": true,
    "LineList": "107,631,751"
  },
  {
    "StopID": 17329,
    "Zone": 730,
    "Name": "Rousínov, betonárka",
    "Latitude": 49.207334,
    "Longitude": 16.871191,
    "IsPublic": true,
    "LineList": "731"
  },
  {
    "StopID": 17330,
    "Zone": 730,
    "Name": "Čechyně, náves",
    "Latitude": 49.208238,
    "Longitude": 16.897568,
    "IsPublic": true,
    "LineList": "732"
  },
  {
    "StopID": 17331,
    "Zone": 730,
    "Name": "Rousínov, Čechyně, rozcestí",
    "Latitude": 49.207318,
    "Longitude": 16.892172,
    "IsPublic": true,
    "LineList": "107,602,631,730"
  },
  {
    "StopID": 17332,
    "Zone": 730,
    "Name": "Rousínov, g.ČSAD",
    "Latitude": 49.205697,
    "Longitude": 16.882879,
    "IsPublic": true,
    "LineList": "731,732"
  },
  {
    "StopID": 17333,
    "Zone": 730,
    "Name": "Rousínov, Královopolské Vážany",
    "Latitude": 49.214122,
    "Longitude": 16.869162,
    "IsPublic": true,
    "LineList": "731"
  },
  {
    "StopID": 17334,
    "Zone": 730,
    "Name": "Rousínov, Kroužek",
    "Latitude": 49.194140,
    "Longitude": 16.895983,
    "IsPublic": true,
    "LineList": "732"
  },
  {
    "StopID": 17335,
    "Zone": 730,
    "Name": "Rousínov, aut.st.",
    "Latitude": 49.203009,
    "Longitude": 16.884976,
    "IsPublic": true,
    "LineList": "107,602,631,730,731,732"
  },
  {
    "StopID": 17336,
    "Zone": 730,
    "Name": "Rousínov, Rousínovec",
    "Latitude": 49.197206,
    "Longitude": 16.884508,
    "IsPublic": true,
    "LineList": "732"
  },
  {
    "StopID": 17337,
    "Zone": 730,
    "Name": "Rousínov, rozc. k žel. st.",
    "Latitude": 49.199494,
    "Longitude": 16.871687,
    "IsPublic": true,
    "LineList": "602,631,731"
  },
  {
    "StopID": 17338,
    "Zone": 730,
    "Name": "Slavíkovice",
    "Latitude": 49.192595,
    "Longitude": 16.869697,
    "IsPublic": true,
    "LineList": "731"
  },
  {
    "StopID": 17339,
    "Zone": 730,
    "Name": "Rousínov, škola",
    "Latitude": 49.207416,
    "Longitude": 16.883228,
    "IsPublic": true,
    "LineList": "731"
  },
  {
    "StopID": 17340,
    "Zone": 730,
    "Name": "Vítovice",
    "Latitude": 49.218105,
    "Longitude": 16.848654,
    "IsPublic": true,
    "LineList": "731"
  },
  {
    "StopID": 17341,
    "Zone": 730,
    "Name": "Rousínov, zdravotní středisko",
    "Latitude": 49.203652,
    "Longitude": 16.878177,
    "IsPublic": true,
    "LineList": "731"
  },
  {
    "StopID": 17342,
    "Zone": 730,
    "Name": "Rousínov, žel. st.",
    "Latitude": 49.197084,
    "Longitude": 16.867749,
    "IsPublic": true,
    "LineList": "144,631"
  },
  {
    "StopID": 17343,
    "Zone": 730,
    "Name": "Tučapy, obecní úřad",
    "Latitude": 49.232287,
    "Longitude": 16.917902,
    "IsPublic": true,
    "LineList": "730"
  },
  {
    "StopID": 17344,
    "Zone": 730,
    "Name": "Tučapy, rozcestí",
    "Latitude": 49.227181,
    "Longitude": 16.915589,
    "IsPublic": true,
    "LineList": "107,631,730"
  },
  {
    "StopID": 17345,
    "Zone": 730,
    "Name": "Velešovice",
    "Latitude": 49.180645,
    "Longitude": 16.848503,
    "IsPublic": true,
    "LineList": "602"
  },
  {
    "StopID": 17346,
    "Zone": 730,
    "Name": "Velešovice, obecní úřad",
    "Latitude": 49.179542,
    "Longitude": 16.847312,
    "IsPublic": true,
    "LineList": "631"
  },
  {
    "StopID": 17347,
    "Zone": 730,
    "Name": "Velešovice, u hřiště",
    "Latitude": 49.175584,
    "Longitude": 16.846508,
    "IsPublic": true,
    "LineList": "602,631"
  },
  {
    "StopID": 17348,
    "Zone": 730,
    "Name": "Velešovice, u mostu",
    "Latitude": 49.186499,
    "Longitude": 16.841094,
    "IsPublic": true,
    "LineList": "602,631"
  },
  {
    "StopID": 17349,
    "Zone": 730,
    "Name": "Velešovice, Za Mlýnem",
    "Latitude": 49.187849,
    "Longitude": 16.838848,
    "IsPublic": true,
    "LineList": "602"
  },
  {
    "StopID": 17350,
    "Zone": 735,
    "Name": "Bukovinka, Říčky, hájenka",
    "Latitude": 49.287862,
    "Longitude": 16.835012,
    "IsPublic": true,
    "LineList": "157"
  },
  {
    "StopID": 17351,
    "Zone": 735,
    "Name": "Podomí",
    "Latitude": 49.344970,
    "Longitude": 16.833106,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 17352,
    "Zone": 735,
    "Name": "Podomí, škola",
    "Latitude": 49.345823,
    "Longitude": 16.834662,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 17353,
    "Zone": 735,
    "Name": "Ruprechtov",
    "Latitude": 49.329259,
    "Longitude": 16.849153,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 17354,
    "Zone": 735,
    "Name": "Ruprechtov, hájenka",
    "Latitude": 49.321677,
    "Longitude": 16.861782,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 17355,
    "Zone": 735,
    "Name": "Ruprechtov, u hřbitova",
    "Latitude": 49.325647,
    "Longitude": 16.851405,
    "IsPublic": true,
    "LineList": "167"
  },
  {
    "StopID": 17356,
    "Zone": 730,
    "Name": "Rostěnice-Zvonovice, Zvonovice",
    "Latitude": 49.234173,
    "Longitude": 16.961098,
    "IsPublic": true,
    "LineList": "751"
  },
  {
    "StopID": 17358,
    "Zone": 730,
    "Name": "Rostěnice-Zvonovice, Rostěnice, náves",
    "Latitude": 49.237807,
    "Longitude": 16.965842,
    "IsPublic": true,
    "LineList": "751"
  },
  {
    "StopID": 17359,
    "Zone": 730,
    "Name": "Rostěnice-Zvonovice, Rostěnice",
    "Latitude": 49.240340,
    "Longitude": 16.961388,
    "IsPublic": true,
    "LineList": "751"
  },
  {
    "StopID": 17360,
    "Zone": 730,
    "Name": "Račice-Pístovice, Pístovice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 17361,
    "Zone": 730,
    "Name": "Rousínov, EDP",
    "Latitude": 49.197807,
    "Longitude": 16.877378,
    "IsPublic": true,
    "LineList": "730"
  },
  {
    "StopID": 17401,
    "Zone": 740,
    "Name": "Vyškov, Agrodům",
    "Latitude": 49.276382,
    "Longitude": 17.003338,
    "IsPublic": true,
    "LineList": "742"
  },
  {
    "StopID": 17402,
    "Zone": 740,
    "Name": "Vyškov, Brňany",
    "Latitude": 49.273757,
    "Longitude": 17.005077,
    "IsPublic": true,
    "LineList": "741,742"
  },
  {
    "StopID": 17403,
    "Zone": 740,
    "Name": "Vyškov, Dukelská, nákup. středisko",
    "Latitude": 49.281848,
    "Longitude": 17.001642,
    "IsPublic": true,
    "LineList": "741,744,755,756"
  },
  {
    "StopID": 17404,
    "Zone": 740,
    "Name": "Vyškov, Dvořákova",
    "Latitude": 49.279285,
    "Longitude": 17.000660,
    "IsPublic": true,
    "LineList": "742"
  },
  {
    "StopID": 17405,
    "Zone": 740,
    "Name": "Vyškov, Hraničky",
    "Latitude": 49.278726,
    "Longitude": 16.987375,
    "IsPublic": true,
    "LineList": "741,744"
  },
  {
    "StopID": 17406,
    "Zone": 740,
    "Name": "Vyškov, Hybešova",
    "Latitude": 49.281545,
    "Longitude": 17.006617,
    "IsPublic": true,
    "LineList": "742,744"
  },
  {
    "StopID": 17407,
    "Zone": 740,
    "Name": "Vyškov, Křečkovice",
    "Latitude": 49.275592,
    "Longitude": 17.009653,
    "IsPublic": true,
    "LineList": "156,166,741,742,743"
  },
  {
    "StopID": 17408,
    "Zone": 740,
    "Name": "Vyškov, Lapač",
    "Latitude": 49.273920,
    "Longitude": 16.981318,
    "IsPublic": true,
    "LineList": "742,743,744"
  },
  {
    "StopID": 17409,
    "Zone": 740,
    "Name": "Vyškov, Moravská",
    "Latitude": 49.272630,
    "Longitude": 17.007428,
    "IsPublic": true,
    "LineList": "741,742"
  },
  {
    "StopID": 17410,
    "Zone": 740,
    "Name": "Vyškov, Na Vyhlídce",
    "Latitude": 49.283378,
    "Longitude": 17.004392,
    "IsPublic": true,
    "LineList": "742,744"
  },
  {
    "StopID": 17411,
    "Zone": 740,
    "Name": "Vyškov, Palánek",
    "Latitude": 49.276107,
    "Longitude": 17.000973,
    "IsPublic": true,
    "LineList": "156,166,741,742,743,744,752,753,754"
  },
  {
    "StopID": 17412,
    "Zone": 740,
    "Name": "Vyškov, polik.",
    "Latitude": 49.276360,
    "Longitude": 16.981173,
    "IsPublic": true,
    "LineList": "741,742,743,744"
  },
  {
    "StopID": 17413,
    "Zone": 740,
    "Name": "Vyškov, Remagg",
    "Latitude": 49.290433,
    "Longitude": 17.010513,
    "IsPublic": true,
    "LineList": "741,742,744,755,756"
  },
  {
    "StopID": 17414,
    "Zone": 740,
    "Name": "Vyškov, sídl. Osvobození Dukla",
    "Latitude": 49.284137,
    "Longitude": 16.987182,
    "IsPublic": true,
    "LineList": "743"
  },
  {
    "StopID": 17415,
    "Zone": 740,
    "Name": "Vyškov, sídl. Osvobození, škola",
    "Latitude": 49.280617,
    "Longitude": 16.981683,
    "IsPublic": true,
    "LineList": "743"
  },
  {
    "StopID": 17416,
    "Zone": 740,
    "Name": "Vyškov, Sochorova",
    "Latitude": 49.285911,
    "Longitude": 17.006110,
    "IsPublic": true,
    "LineList": "741,742,744,755,756"
  },
  {
    "StopID": 17417,
    "Zone": 740,
    "Name": "Vyškov, Tovární",
    "Latitude": 49.294087,
    "Longitude": 17.013282,
    "IsPublic": true,
    "LineList": "741,742,744,756"
  },
  {
    "StopID": 17418,
    "Zone": 740,
    "Name": "Vyškov, Fritzmeier",
    "Latitude": 49.293988,
    "Longitude": 17.009770,
    "IsPublic": true,
    "LineList": "741,742,744,756"
  },
  {
    "StopID": 17419,
    "Zone": 740,
    "Name": "Vyškov, Tržiště",
    "Latitude": 49.280024,
    "Longitude": 17.007362,
    "IsPublic": true,
    "LineList": "741,752,753,754"
  },
  {
    "StopID": 17420,
    "Zone": 740,
    "Name": "Vyškov, Tyršova",
    "Latitude": 49.278596,
    "Longitude": 17.006772,
    "IsPublic": true,
    "LineList": "741,742,743,744,752,753,754"
  },
  {
    "StopID": 17421,
    "Zone": 740,
    "Name": "Vyškov, U podchodu",
    "Latitude": 49.279301,
    "Longitude": 16.997421,
    "IsPublic": true,
    "LineList": "742,743,744,752,753,754,755,756"
  },
  {
    "StopID": 17422,
    "Zone": 740,
    "Name": "Vyškov, U přejezdu",
    "Latitude": 49.269441,
    "Longitude": 16.978004,
    "IsPublic": true,
    "LineList": "741,742"
  },
  {
    "StopID": 17423,
    "Zone": 740,
    "Name": "Vyškov, a.n.",
    "Latitude": 49.275684,
    "Longitude": 16.991674,
    "IsPublic": true,
    "LineList": "107,156,157,166,167,631,730,741,742,743,744,750,751,752,753,754,755,756"
  },
  {
    "StopID": 17424,
    "Zone": 740,
    "Name": "Vyškov, Dědice, nám. Svobody",
    "Latitude": 49.293898,
    "Longitude": 16.979092,
    "IsPublic": true,
    "LineList": "744,750"
  },
  {
    "StopID": 17425,
    "Zone": 740,
    "Name": "Vyškov, Dědice, rozc. Opatovice",
    "Latitude": 49.298092,
    "Longitude": 16.973279,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17426,
    "Zone": 740,
    "Name": "Vyškov, Dědice, u hřbitova",
    "Latitude": 49.289258,
    "Longitude": 16.981678,
    "IsPublic": true,
    "LineList": "744,750"
  },
  {
    "StopID": 17427,
    "Zone": 740,
    "Name": "Vyškov, Dělnický dům",
    "Latitude": 49.280426,
    "Longitude": 16.995112,
    "IsPublic": true,
    "LineList": "741,743,744,750"
  },
  {
    "StopID": 17428,
    "Zone": 740,
    "Name": "Vyškov, Drnovská Bioveta",
    "Latitude": 49.254021,
    "Longitude": 16.956105,
    "IsPublic": true,
    "LineList": "107,631,751"
  },
  {
    "StopID": 17429,
    "Zone": 740,
    "Name": "Vyškov, garáže ČSAD",
    "Latitude": 49.271157,
    "Longitude": 16.988876,
    "IsPublic": true,
    "LineList": "107,631,741,742"
  },
  {
    "StopID": 17430,
    "Zone": 740,
    "Name": "Vyškov, Hamiltony",
    "Latitude": 49.305323,
    "Longitude": 16.969163,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17431,
    "Zone": 740,
    "Name": "Vyškov, hotel Dukla",
    "Latitude": 49.285238,
    "Longitude": 16.986957,
    "IsPublic": true,
    "LineList": "744,750"
  },
  {
    "StopID": 17432,
    "Zone": 740,
    "Name": "Vyškov, Lhota",
    "Latitude": 49.311541,
    "Longitude": 16.948617,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17433,
    "Zone": 740,
    "Name": "Vyškov, Lhota, u školy",
    "Latitude": 49.309661,
    "Longitude": 16.956262,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17434,
    "Zone": 740,
    "Name": "Vyškov, nemocnice",
    "Latitude": 49.276304,
    "Longitude": 16.982362,
    "IsPublic": true,
    "LineList": "157,167,631,730,741,744,751"
  },
  {
    "StopID": 17435,
    "Zone": 740,
    "Name": "Vyškov, Nouzka",
    "Latitude": 49.266525,
    "Longitude": 16.980388,
    "IsPublic": true,
    "LineList": "107,631,741,742"
  },
  {
    "StopID": 17436,
    "Zone": 740,
    "Name": "Vyškov, Opatovice, bytovky",
    "Latitude": 49.300683,
    "Longitude": 16.958572,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17437,
    "Zone": 740,
    "Name": "Opatovice, náves",
    "Latitude": 49.302252,
    "Longitude": 16.954362,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17438,
    "Zone": 740,
    "Name": "Vyškov, Opatovice, u mlýna",
    "Latitude": 49.300165,
    "Longitude": 16.957503,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17439,
    "Zone": 740,
    "Name": "Vyškov, Pařezovice, rozcestí",
    "Latitude": 49.320470,
    "Longitude": 16.935178,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17440,
    "Zone": 740,
    "Name": "Vyškov, Rostex",
    "Latitude": 49.283475,
    "Longitude": 16.990651,
    "IsPublic": true,
    "LineList": "743,744,750"
  },
  {
    "StopID": 17441,
    "Zone": 740,
    "Name": "Vyškov, Rychtářov",
    "Latitude": 49.327197,
    "Longitude": 16.919003,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17442,
    "Zone": 740,
    "Name": "Vyškov, Rychtářov, Rohlina",
    "Latitude": 49.331723,
    "Longitude": 16.910468,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17443,
    "Zone": 740,
    "Name": "Rychtářov, točna",
    "Latitude": 49.330324,
    "Longitude": 16.912508,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17444,
    "Zone": 740,
    "Name": "Vyškov, VTÚPV",
    "Latitude": 49.313290,
    "Longitude": 16.978358,
    "IsPublic": true,
    "LineList": "744,750"
  },
  {
    "StopID": 17445,
    "Zone": 740,
    "Name": "Dědice, kasárna",
    "Latitude": 49.300995,
    "Longitude": 16.981469,
    "IsPublic": true,
    "LineList": "744,750,756"
  },
  {
    "StopID": 17446,
    "Zone": 740,
    "Name": "Vyškov, železniční stanice",
    "Latitude": 49.277668,
    "Longitude": 16.991519,
    "IsPublic": true,
    "LineList": "127,144,147,156,166,741,742,743,744,750,752,753,754,755,756"
  },
  {
    "StopID": 17447,
    "Zone": 745,
    "Name": "Studnice, Doubrava",
    "Latitude": 49.359083,
    "Longitude": 16.887008,
    "IsPublic": true,
    "LineList": "750"
  },
  {
    "StopID": 17448,
    "Zone": 999,
    "Name": "garáže ČSAD Tišnov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 17449,
    "Zone": 740,
    "Name": "Vyškov, Joklova",
    "Latitude": 49.277148,
    "Longitude": 17.013010,
    "IsPublic": true,
    "LineList": "743"
  },
  {
    "StopID": 17450,
    "Zone": 740,
    "Name": "Vyškov, Pustiměřská",
    "Latitude": 49.297667,
    "Longitude": 17.008614,
    "IsPublic": true,
    "LineList": "741,742"
  },
  {
    "StopID": 17451,
    "Zone": 750,
    "Name": "Křižanovice u Vyškova, rozcestí",
    "Latitude": 49.283762,
    "Longitude": 17.036751,
    "IsPublic": true,
    "LineList": "752,753,754"
  },
  {
    "StopID": 17452,
    "Zone": 750,
    "Name": "Topolany",
    "Latitude": 49.277790,
    "Longitude": 17.040424,
    "IsPublic": true,
    "LineList": "752"
  },
  {
    "StopID": 17453,
    "Zone": 740,
    "Name": "Vyškov, Zouvalka",
    "Latitude": 49.247813,
    "Longitude": 17.021251,
    "IsPublic": true,
    "LineList": "166"
  },
  {
    "StopID": 17454,
    "Zone": 740,
    "Name": "Vyškov, Marchanice",
    "Latitude": 49.282706,
    "Longitude": 17.023561,
    "IsPublic": true,
    "LineList": "752,753,754"
  },
  {
    "StopID": 17455,
    "Zone": 740,
    "Name": "Vyškov, letiště",
    "Latitude": 49.302408,
    "Longitude": 17.022190,
    "IsPublic": true,
    "LineList": "755,756"
  },
  {
    "StopID": 17456,
    "Zone": 740,
    "Name": "Vyškov, sídliště Víta Nejedlého statek",
    "Latitude": 49.303283,
    "Longitude": 16.989897,
    "IsPublic": true,
    "LineList": "756"
  },
  {
    "StopID": 17457,
    "Zone": 740,
    "Name": "Vyškov, Dukelská, u čistírny",
    "Latitude": 49.280611,
    "Longitude": 17.000061,
    "IsPublic": true,
    "LineList": "753,754"
  },
  {
    "StopID": 17501,
    "Zone": 750,
    "Name": "Moravské Málkovice, u koupaliště",
    "Latitude": 49.252492,
    "Longitude": 17.092927,
    "IsPublic": true,
    "LineList": "754"
  },
  {
    "StopID": 17502,
    "Zone": 750,
    "Name": "Moravské Málkovice",
    "Latitude": 49.257758,
    "Longitude": 17.090605,
    "IsPublic": true,
    "LineList": "754"
  },
  {
    "StopID": 17503,
    "Zone": 760,
    "Name": "Orlovice",
    "Latitude": 49.240533,
    "Longitude": 17.094317,
    "IsPublic": true,
    "LineList": "754"
  },
  {
    "StopID": 17504,
    "Zone": 750,
    "Name": "Prusy-Boškůvky, Boškůvky",
    "Latitude": 49.259318,
    "Longitude": 17.073307,
    "IsPublic": true,
    "LineList": "752"
  },
  {
    "StopID": 17505,
    "Zone": 750,
    "Name": "Prusy-Boškůvky, Moravské Prusy, křiž.",
    "Latitude": 49.254884,
    "Longitude": 17.058397,
    "IsPublic": true,
    "LineList": "752"
  },
  {
    "StopID": 17506,
    "Zone": 750,
    "Name": "Prusy-Boškůvky, Moravské Prusy, pošta",
    "Latitude": 49.251922,
    "Longitude": 17.057426,
    "IsPublic": true,
    "LineList": "752"
  },
  {
    "StopID": 17507,
    "Zone": 750,
    "Name": "Prusy-Boškůvky, Moravské Prusy, ZD",
    "Latitude": 49.258568,
    "Longitude": 17.057638,
    "IsPublic": true,
    "LineList": "752"
  },
  {
    "StopID": 17508,
    "Zone": 750,
    "Name": "Vážany, Na Hraničkách",
    "Latitude": 49.247810,
    "Longitude": 17.051993,
    "IsPublic": true,
    "LineList": "752"
  },
  {
    "StopID": 17509,
    "Zone": 750,
    "Name": "Vážany",
    "Latitude": 49.244672,
    "Longitude": 17.050900,
    "IsPublic": true,
    "LineList": "752"
  },
  {
    "StopID": 17510,
    "Zone": 760,
    "Name": "Dětkovice",
    "Latitude": 49.272378,
    "Longitude": 17.144461,
    "IsPublic": true,
    "LineList": "753"
  },
  {
    "StopID": 17511,
    "Zone": 750,
    "Name": "Hoštice-Heroltice, Hoštice, kostel",
    "Latitude": 49.287354,
    "Longitude": 17.065618,
    "IsPublic": true,
    "LineList": "753,754"
  },
  {
    "StopID": 17512,
    "Zone": 750,
    "Name": "Rybníček, statek",
    "Latitude": 49.277858,
    "Longitude": 17.065532,
    "IsPublic": true,
    "LineList": "753"
  },
  {
    "StopID": 17513,
    "Zone": 750,
    "Name": "Chvalkovice na H.",
    "Latitude": 49.319143,
    "Longitude": 17.114828,
    "IsPublic": true,
    "LineList": "754"
  },
  {
    "StopID": 17514,
    "Zone": 750,
    "Name": "Ivanovice na H. a.s.",
    "Latitude": 49.305011,
    "Longitude": 17.088258,
    "IsPublic": true,
    "LineList": "127,144,753,754"
  },
  {
    "StopID": 17515,
    "Zone": 750,
    "Name": "Ivanovice na Hané, u Škrku",
    "Latitude": 49.301182,
    "Longitude": 17.093949,
    "IsPublic": true,
    "LineList": "753,754"
  },
  {
    "StopID": 17516,
    "Zone": 750,
    "Name": "Ivanovice na Hané, Žižkova",
    "Latitude": 49.306818,
    "Longitude": 17.095633,
    "IsPublic": true,
    "LineList": "753,754"
  },
  {
    "StopID": 17517,
    "Zone": 750,
    "Name": "Medlovice, rozcestí",
    "Latitude": 49.277711,
    "Longitude": 17.092523,
    "IsPublic": true,
    "LineList": "753,754"
  },
  {
    "StopID": 17518,
    "Zone": 750,
    "Name": "Medlovice",
    "Latitude": 49.273143,
    "Longitude": 17.093413,
    "IsPublic": true,
    "LineList": "753,754"
  },
  {
    "StopID": 17519,
    "Zone": 750,
    "Name": "Rybníček",
    "Latitude": 49.275875,
    "Longitude": 17.072653,
    "IsPublic": true,
    "LineList": "753"
  },
  {
    "StopID": 17520,
    "Zone": 750,
    "Name": "Švábenice",
    "Latitude": 49.278689,
    "Longitude": 17.122826,
    "IsPublic": true,
    "LineList": "753"
  },
  {
    "StopID": 17521,
    "Zone": 750,
    "Name": "Drysice",
    "Latitude": 49.334829,
    "Longitude": 17.057699,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 17523,
    "Zone": 750,
    "Name": "Radslavice, Radslavičky",
    "Latitude": 49.327155,
    "Longitude": 16.994960,
    "IsPublic": true,
    "LineList": "756"
  },
  {
    "StopID": 17524,
    "Zone": 750,
    "Name": "Radslavice",
    "Latitude": 49.323835,
    "Longitude": 17.001773,
    "IsPublic": true,
    "LineList": "756"
  },
  {
    "StopID": 17525,
    "Zone": 750,
    "Name": "Zelená Hora",
    "Latitude": 49.329099,
    "Longitude": 17.013701,
    "IsPublic": true,
    "LineList": "756"
  },
  {
    "StopID": 17526,
    "Zone": 750,
    "Name": "Hoštice-Heroltice, Heroltice, hl.silnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 17527,
    "Zone": 750,
    "Name": "Hoštice-Heroltice, Heroltice, rozcestí",
    "Latitude": 49.285086,
    "Longitude": 17.057322,
    "IsPublic": true,
    "LineList": "753"
  },
  {
    "StopID": 17528,
    "Zone": 750,
    "Name": "Hoštice-Heroltice, Heroltice, náves",
    "Latitude": 49.285750,
    "Longitude": 17.058213,
    "IsPublic": true,
    "LineList": "753,754"
  },
  {
    "StopID": 17529,
    "Zone": 750,
    "Name": "Pustiměř, u kříže",
    "Latitude": 49.314192,
    "Longitude": 17.029130,
    "IsPublic": true,
    "LineList": "755,756"
  },
  {
    "StopID": 17530,
    "Zone": 750,
    "Name": "Pustiměř, rozcestí",
    "Latitude": 49.319006,
    "Longitude": 17.026070,
    "IsPublic": true,
    "LineList": "755,756"
  },
  {
    "StopID": 17531,
    "Zone": 750,
    "Name": "Pustiměř, náves",
    "Latitude": 49.322992,
    "Longitude": 17.027558,
    "IsPublic": true,
    "LineList": "756"
  },
  {
    "StopID": 17532,
    "Zone": 750,
    "Name": "Pustiměř, ZŠ",
    "Latitude": 49.322360,
    "Longitude": 17.029728,
    "IsPublic": true,
    "LineList": "755,756"
  },
  {
    "StopID": 17533,
    "Zone": 750,
    "Name": "Pustiměř, kamenolom",
    "Latitude": 49.320556,
    "Longitude": 17.012417,
    "IsPublic": true,
    "LineList": "756"
  },
  {
    "StopID": 17534,
    "Zone": 750,
    "Name": "Ivanovice na Hané, Fischer",
    "Latitude": 49.295038,
    "Longitude": 17.095772,
    "IsPublic": true,
    "LineList": "753,754"
  },
  {
    "StopID": 17602,
    "Zone": 755,
    "Name": "Podivice, Terezička",
    "Latitude": 49.359022,
    "Longitude": 17.017645,
    "IsPublic": true,
    "LineList": "756"
  },
  {
    "StopID": 17603,
    "Zone": 755,
    "Name": "Podivice",
    "Latitude": 49.366493,
    "Longitude": 17.011902,
    "IsPublic": true,
    "LineList": "756"
  },
  {
    "StopID": 17604,
    "Zone": 760,
    "Name": "Pačlavice",
    "Latitude": 49.259808,
    "Longitude": 17.168328,
    "IsPublic": true,
    "LineList": "753"
  },
  {
    "StopID": 17605,
    "Zone": 760,
    "Name": "Pačlavice, Pornice",
    "Latitude": 49.249768,
    "Longitude": 17.182322,
    "IsPublic": true,
    "LineList": "753"
  },
  {
    "StopID": 17606,
    "Zone": 760,
    "Name": "Morkovice-Slížany, Morkovice, náměstí",
    "Latitude": 49.246847,
    "Longitude": 17.205695,
    "IsPublic": true,
    "LineList": "753"
  },
  {
    "StopID": 17607,
    "Zone": 750,
    "Name": "Želeč, křižovatka",
    "Latitude": 49.347891,
    "Longitude": 17.092896,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 17608,
    "Zone": 750,
    "Name": "Želeč",
    "Latitude": 49.345893,
    "Longitude": 17.096919,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 17609,
    "Zone": 765,
    "Name": "Nezamyslice, železniční stanice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 17610,
    "Zone": 765,
    "Name": "Dřevnovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 17900,
    "Zone": 999,
    "Name": "Garáž VYDOS Vyškov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18001,
    "Zone": 800,
    "Name": "Znojmo, Nemocnice",
    "Latitude": 48.869460,
    "Longitude": 16.049782,
    "IsPublic": true,
    "LineList": "801,802,803,804"
  },
  {
    "StopID": 18002,
    "Zone": 800,
    "Name": "Znojmo, Suchohrdelská, hřbitov",
    "Latitude": 48.857379,
    "Longitude": 16.066698,
    "IsPublic": true,
    "LineList": "432,810"
  },
  {
    "StopID": 18003,
    "Zone": 800,
    "Name": "Znojmo, Lužická",
    "Latitude": 48.856110,
    "Longitude": 16.058306,
    "IsPublic": true,
    "LineList": "801,806"
  },
  {
    "StopID": 18004,
    "Zone": 800,
    "Name": "Dobšická, nákupní zóna",
    "Latitude": 48.854340,
    "Longitude": 16.070623,
    "IsPublic": true,
    "LineList": "801,803"
  },
  {
    "StopID": 18005,
    "Zone": 800,
    "Name": "Znojmo, Průmyslová, u hřbitova",
    "Latitude": 48.855378,
    "Longitude": 16.064425,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18006,
    "Zone": 800,
    "Name": "Znojmo, Průmyslová, u lávky",
    "Latitude": 48.852443,
    "Longitude": 16.060748,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18007,
    "Zone": 800,
    "Name": "Znojmo, Průmyslová, KERAMIKA",
    "Latitude": 48.850103,
    "Longitude": 16.056776,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18008,
    "Zone": 800,
    "Name": "Znojmo, Vídeňská, Na Rejdišti",
    "Latitude": 48.849914,
    "Longitude": 16.054914,
    "IsPublic": true,
    "LineList": "801,802,803,804,809"
  },
  {
    "StopID": 18009,
    "Zone": 800,
    "Name": "Znojmo, a.n.",
    "Latitude": 48.852133,
    "Longitude": 16.057535,
    "IsPublic": true,
    "LineList": "108,128,137,138,143,432,801,802,803,804,806,807,808,809,810,811,812,813,814,815,816,817,818,819,820,821,822,825"
  },
  {
    "StopID": 18010,
    "Zone": 800,
    "Name": "Znojmo, nám.Komenského",
    "Latitude": 48.856483,
    "Longitude": 16.053275,
    "IsPublic": true,
    "LineList": "801,803,804,806,807,808,809,816,817,825"
  },
  {
    "StopID": 18011,
    "Zone": 800,
    "Name": "Znojmo, nám.Svobody, lázně",
    "Latitude": 48.860640,
    "Longitude": 16.049434,
    "IsPublic": true,
    "LineList": "801,803,804,806,808,811,812,813,814,815,816,817,825"
  },
  {
    "StopID": 18012,
    "Zone": 800,
    "Name": "Znojmo, Pražská, Kolonka",
    "Latitude": 48.863001,
    "Longitude": 16.042188,
    "IsPublic": true,
    "LineList": "801,803,806,807,815,816,817"
  },
  {
    "StopID": 18013,
    "Zone": 800,
    "Name": "Hradiště, sýpka",
    "Latitude": 48.859817,
    "Longitude": 16.033024,
    "IsPublic": true,
    "LineList": "801,808,817"
  },
  {
    "StopID": 18014,
    "Zone": 800,
    "Name": "Znojmo, Přímětická, rozc.k Měst.lesíku",
    "Latitude": 48.871452,
    "Longitude": 16.040599,
    "IsPublic": true,
    "LineList": "802,803,804,807,808,814,825"
  },
  {
    "StopID": 18015,
    "Zone": 800,
    "Name": "Znojmo, Přímětická, Resslova",
    "Latitude": 48.867764,
    "Longitude": 16.041432,
    "IsPublic": true,
    "LineList": "802,804,808,811,812,813"
  },
  {
    "StopID": 18016,
    "Zone": 800,
    "Name": "Znojmo, Jubilejní park",
    "Latitude": 48.863637,
    "Longitude": 16.044865,
    "IsPublic": true,
    "LineList": "802"
  },
  {
    "StopID": 18017,
    "Zone": 800,
    "Name": "Znojmo, Jarošova",
    "Latitude": 48.861254,
    "Longitude": 16.051083,
    "IsPublic": true,
    "LineList": "802,806"
  },
  {
    "StopID": 18018,
    "Zone": 800,
    "Name": "Znojmo, nám.Armády",
    "Latitude": 48.858960,
    "Longitude": 16.058556,
    "IsPublic": true,
    "LineList": "802,806"
  },
  {
    "StopID": 18019,
    "Zone": 800,
    "Name": "Znojmo, Palackého",
    "Latitude": 48.857842,
    "Longitude": 16.062522,
    "IsPublic": true,
    "LineList": "802,806"
  },
  {
    "StopID": 18020,
    "Zone": 800,
    "Name": "Znojmo, ul.28.října",
    "Latitude": 48.856280,
    "Longitude": 16.062814,
    "IsPublic": true,
    "LineList": "802"
  },
  {
    "StopID": 18021,
    "Zone": 800,
    "Name": "Znojmo, Vídeňská, Pražákova",
    "Latitude": 48.846957,
    "Longitude": 16.057269,
    "IsPublic": true,
    "LineList": "802,803,804,809"
  },
  {
    "StopID": 18022,
    "Zone": 800,
    "Name": "Znojmo, Vídeňská, u školy",
    "Latitude": 48.843488,
    "Longitude": 16.060714,
    "IsPublic": true,
    "LineList": "802,803,804,809,818,819,820,821"
  },
  {
    "StopID": 18023,
    "Zone": 800,
    "Name": "Znojmo, Dukelská, sídliště",
    "Latitude": 48.840628,
    "Longitude": 16.063796,
    "IsPublic": true,
    "LineList": "802,804,809"
  },
  {
    "StopID": 18024,
    "Zone": 800,
    "Name": "Znojmo, Melkusova, plavecký bazén",
    "Latitude": 48.839202,
    "Longitude": 16.061587,
    "IsPublic": true,
    "LineList": "802,809"
  },
  {
    "StopID": 18025,
    "Zone": 800,
    "Name": "Znojmo, Oblekovice, U Řeky",
    "Latitude": 48.836202,
    "Longitude": 16.069584,
    "IsPublic": true,
    "LineList": "802,804"
  },
  {
    "StopID": 18026,
    "Zone": 800,
    "Name": "Popice, u kostela",
    "Latitude": 48.821132,
    "Longitude": 16.016032,
    "IsPublic": true,
    "LineList": "809,818"
  },
  {
    "StopID": 18027,
    "Zone": 800,
    "Name": "Konice, hostinec",
    "Latitude": 48.832719,
    "Longitude": 16.021403,
    "IsPublic": true,
    "LineList": "809,818"
  },
  {
    "StopID": 18028,
    "Zone": 800,
    "Name": "Znojmo, Konice, pod kopcem",
    "Latitude": 48.829402,
    "Longitude": 16.027470,
    "IsPublic": true,
    "LineList": "809,818"
  },
  {
    "StopID": 18029,
    "Zone": 800,
    "Name": "Znojmo, Gagarinova",
    "Latitude": 48.868693,
    "Longitude": 16.039761,
    "IsPublic": true,
    "LineList": "803,807"
  },
  {
    "StopID": 18030,
    "Zone": 800,
    "Name": "Znojmo, Pražská",
    "Latitude": 48.868350,
    "Longitude": 16.034231,
    "IsPublic": true,
    "LineList": "803,807"
  },
  {
    "StopID": 18031,
    "Zone": 800,
    "Name": "Znojmo, Pražská, Legionářská",
    "Latitude": 48.865436,
    "Longitude": 16.037918,
    "IsPublic": true,
    "LineList": "803,806,807,808"
  },
  {
    "StopID": 18032,
    "Zone": 800,
    "Name": "Znojmo, Dobšická",
    "Latitude": 48.853496,
    "Longitude": 16.073367,
    "IsPublic": true,
    "LineList": "803"
  },
  {
    "StopID": 18033,
    "Zone": 800,
    "Name": "Legionářská",
    "Latitude": 48.867787,
    "Longitude": 16.040195,
    "IsPublic": true,
    "LineList": "803,807"
  },
  {
    "StopID": 18034,
    "Zone": 800,
    "Name": "Nesachleby",
    "Latitude": 48.838958,
    "Longitude": 16.087715,
    "IsPublic": true,
    "LineList": "802"
  },
  {
    "StopID": 18035,
    "Zone": 800,
    "Name": "Znojmo, Bohumilice, ves",
    "Latitude": 48.838380,
    "Longitude": 16.083812,
    "IsPublic": true,
    "LineList": "802"
  },
  {
    "StopID": 18036,
    "Zone": 800,
    "Name": "Znojmo, Bohumilice, mlýn",
    "Latitude": 48.837760,
    "Longitude": 16.080183,
    "IsPublic": true,
    "LineList": "802"
  },
  {
    "StopID": 18037,
    "Zone": 800,
    "Name": "Znojmo, Oblekovice, střed",
    "Latitude": 48.836946,
    "Longitude": 16.074808,
    "IsPublic": true,
    "LineList": "802"
  },
  {
    "StopID": 18038,
    "Zone": 800,
    "Name": "Znojmo, Oblekovice, točna",
    "Latitude": 48.831900,
    "Longitude": 16.070448,
    "IsPublic": true,
    "LineList": "804"
  },
  {
    "StopID": 18039,
    "Zone": 800,
    "Name": "Znojmo, Oblekovice, Evropská",
    "Latitude": 48.834997,
    "Longitude": 16.068716,
    "IsPublic": true,
    "LineList": "804"
  },
  {
    "StopID": 18040,
    "Zone": 800,
    "Name": "Znojmo, Dukelská, u mostu",
    "Latitude": 48.837680,
    "Longitude": 16.066564,
    "IsPublic": true,
    "LineList": "804,818,819,820"
  },
  {
    "StopID": 18041,
    "Zone": 800,
    "Name": "Znojmo, Brněnská hypermarket",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18042,
    "Zone": 800,
    "Name": "Znojmo, Přímětická, U Sirotčince",
    "Latitude": 48.863550,
    "Longitude": 16.044114,
    "IsPublic": true,
    "LineList": "804,808"
  },
  {
    "StopID": 18043,
    "Zone": 800,
    "Name": "Znojmo, Přímětice, Slunečná",
    "Latitude": 48.875345,
    "Longitude": 16.039585,
    "IsPublic": true,
    "LineList": "804,807,808"
  },
  {
    "StopID": 18044,
    "Zone": 800,
    "Name": "Znojmo, Přímětice, Sklářská",
    "Latitude": 48.878854,
    "Longitude": 16.037465,
    "IsPublic": true,
    "LineList": "807,808,814,825"
  },
  {
    "StopID": 18045,
    "Zone": 800,
    "Name": "Znojmo, Přímětice, Křížový sklep",
    "Latitude": 48.883705,
    "Longitude": 16.035332,
    "IsPublic": true,
    "LineList": "804,807,808,811,814,825"
  },
  {
    "StopID": 18046,
    "Zone": 800,
    "Name": "Přímětice, točna",
    "Latitude": 48.887593,
    "Longitude": 16.037652,
    "IsPublic": true,
    "LineList": "807"
  },
  {
    "StopID": 18047,
    "Zone": 800,
    "Name": "Znojmo, Přímětice, sídliště",
    "Latitude": 48.878568,
    "Longitude": 16.034456,
    "IsPublic": true,
    "LineList": "804"
  },
  {
    "StopID": 18048,
    "Zone": 800,
    "Name": "Přímětice, hřbitov",
    "Latitude": 48.883420,
    "Longitude": 16.033132,
    "IsPublic": true,
    "LineList": "804,808"
  },
  {
    "StopID": 18049,
    "Zone": 800,
    "Name": "Znojmo, Kasárna",
    "Latitude": 48.891532,
    "Longitude": 15.999891,
    "IsPublic": true,
    "LineList": "808,815,825"
  },
  {
    "StopID": 18051,
    "Zone": 800,
    "Name": "Znojmo, Brněnská, sídl.",
    "Latitude": 48.843587,
    "Longitude": 16.063000,
    "IsPublic": true,
    "LineList": "803,821"
  },
  {
    "StopID": 18052,
    "Zone": 800,
    "Name": "Znojmo, Družstevní, autoservis",
    "Latitude": 48.848026,
    "Longitude": 16.065413,
    "IsPublic": true,
    "LineList": "803"
  },
  {
    "StopID": 18053,
    "Zone": 800,
    "Name": "Znojmo, Družstevní, STK",
    "Latitude": 48.851108,
    "Longitude": 16.068207,
    "IsPublic": true,
    "LineList": "803"
  },
  {
    "StopID": 18054,
    "Zone": 800,
    "Name": "Znojmo, Derflice",
    "Latitude": 48.809690,
    "Longitude": 16.140512,
    "IsPublic": true,
    "LineList": "820"
  },
  {
    "StopID": 18055,
    "Zone": 800,
    "Name": "Znojmo, Načeratice, host.",
    "Latitude": 48.818489,
    "Longitude": 16.110617,
    "IsPublic": true,
    "LineList": "820"
  },
  {
    "StopID": 18056,
    "Zone": 800,
    "Name": "Znojmo, aut.st.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18058,
    "Zone": 800,
    "Name": "Znojmo, nám.Republiky",
    "Latitude": 48.853354,
    "Longitude": 16.053428,
    "IsPublic": true,
    "LineList": "806,807,818,819,820,821"
  },
  {
    "StopID": 18059,
    "Zone": 800,
    "Name": "Znojmo, Mariánské n.",
    "Latitude": 48.855961,
    "Longitude": 16.054083,
    "IsPublic": true,
    "LineList": "432,810,811,812,813,814"
  },
  {
    "StopID": 18060,
    "Zone": 800,
    "Name": "Horní nám.",
    "Latitude": 48.856643,
    "Longitude": 16.048660,
    "IsPublic": true,
    "LineList": "806,807"
  },
  {
    "StopID": 18061,
    "Zone": 800,
    "Name": "Znojmo, nám.Svobody, Horní brána",
    "Latitude": 48.859392,
    "Longitude": 16.047855,
    "IsPublic": true,
    "LineList": "806,807"
  },
  {
    "StopID": 18063,
    "Zone": 800,
    "Name": "Vančurova DPS",
    "Latitude": 48.866673,
    "Longitude": 16.045068,
    "IsPublic": true,
    "LineList": "802,806"
  },
  {
    "StopID": 18064,
    "Zone": 800,
    "Name": "Znojmo, Přímětická, učiliště",
    "Latitude": 48.865444,
    "Longitude": 16.043497,
    "IsPublic": true,
    "LineList": "802,804"
  },
  {
    "StopID": 18067,
    "Zone": 800,
    "Name": "Znojmo, Přímětice, K Suchopádu",
    "Latitude": 48.885523,
    "Longitude": 16.042683,
    "IsPublic": true,
    "LineList": "804"
  },
  {
    "StopID": 18068,
    "Zone": 800,
    "Name": "Znojmo, Městský lesík",
    "Latitude": 48.873077,
    "Longitude": 16.052195,
    "IsPublic": true,
    "LineList": "811,812,813"
  },
  {
    "StopID": 18069,
    "Zone": 800,
    "Name": "Znojmo, Kasárna, rozcestí",
    "Latitude": 48.886100,
    "Longitude": 16.002033,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18070,
    "Zone": 800,
    "Name": "Znojmo, Konice, rozcestí",
    "Latitude": 48.820387,
    "Longitude": 16.040442,
    "IsPublic": true,
    "LineList": "809,818"
  },
  {
    "StopID": 18071,
    "Zone": 800,
    "Name": "Znojmo, Mramotice, rozcestí",
    "Latitude": 48.897294,
    "Longitude": 15.993394,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 18072,
    "Zone": 800,
    "Name": "Mramotice, u ček.",
    "Latitude": 48.903048,
    "Longitude": 15.999154,
    "IsPublic": true,
    "LineList": "808,815,825"
  },
  {
    "StopID": 18073,
    "Zone": 800,
    "Name": "Znojmo, Mramotice, u školky",
    "Latitude": 48.903910,
    "Longitude": 16.001883,
    "IsPublic": true,
    "LineList": "815,825"
  },
  {
    "StopID": 18074,
    "Zone": 800,
    "Name": "Znojmo, Načeratice, křiž.",
    "Latitude": 48.817172,
    "Longitude": 16.116345,
    "IsPublic": true,
    "LineList": "820"
  },
  {
    "StopID": 18075,
    "Zone": 800,
    "Name": "Znojmo, Pražská, sídliště",
    "Latitude": 48.868425,
    "Longitude": 16.032814,
    "IsPublic": true,
    "LineList": "806,808,815,816"
  },
  {
    "StopID": 18076,
    "Zone": 800,
    "Name": "Hradiště, hájenka",
    "Latitude": 48.859785,
    "Longitude": 16.006150,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18077,
    "Zone": 800,
    "Name": "Znojmo, Přímětice, Plenkovická",
    "Latitude": 48.888126,
    "Longitude": 16.031637,
    "IsPublic": true,
    "LineList": "808,825"
  },
  {
    "StopID": 18078,
    "Zone": 800,
    "Name": "Znojmo, Dobšická, u hřbitova",
    "Latitude": 48.855596,
    "Longitude": 16.065935,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18079,
    "Zone": 800,
    "Name": "Popice, u hospody",
    "Latitude": 48.824720,
    "Longitude": 16.016198,
    "IsPublic": true,
    "LineList": "809,818"
  },
  {
    "StopID": 18080,
    "Zone": 800,
    "Name": "Znojmo, Křivánky, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18081,
    "Zone": 800,
    "Name": "Znojmo, Plovárna Louka",
    "Latitude": 48.838798,
    "Longitude": 16.058865,
    "IsPublic": true,
    "LineList": "802,809"
  },
  {
    "StopID": 18082,
    "Zone": 800,
    "Name": "Znojmo, Mramotice, u hřbitova",
    "Latitude": 48.902134,
    "Longitude": 16.005581,
    "IsPublic": true,
    "LineList": "808,825"
  },
  {
    "StopID": 18083,
    "Zone": 800,
    "Name": "Znojmo, Cínová hora, točna",
    "Latitude": 48.872178,
    "Longitude": 16.009036,
    "IsPublic": true,
    "LineList": "806"
  },
  {
    "StopID": 18084,
    "Zone": 800,
    "Name": "Znojmo, Cínová hora, střed",
    "Latitude": 48.870633,
    "Longitude": 16.021063,
    "IsPublic": true,
    "LineList": "806"
  },
  {
    "StopID": 18085,
    "Zone": 800,
    "Name": "Znojmo, Pasteurova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18086,
    "Zone": 800,
    "Name": "Znojmo, Koželužská, u lávky",
    "Latitude": 48.851109,
    "Longitude": 16.048310,
    "IsPublic": true,
    "LineList": "807"
  },
  {
    "StopID": 18087,
    "Zone": 800,
    "Name": "Znojmo, Koželužská, u mostu",
    "Latitude": 48.853900,
    "Longitude": 16.043644,
    "IsPublic": true,
    "LineList": "807"
  },
  {
    "StopID": 18088,
    "Zone": 800,
    "Name": "Znojmo, Přímětice, U Dubu",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18089,
    "Zone": 800,
    "Name": "Znojmo, Přímětice, u rybníka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18090,
    "Zone": 800,
    "Name": "Znojmo, Přímětice, Pod Svatým Janem",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18091,
    "Zone": 800,
    "Name": "Mansberk",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18092,
    "Zone": 800,
    "Name": "U Lesíka",
    "Latitude": 48.870830,
    "Longitude": 16.045820,
    "IsPublic": true,
    "LineList": "807"
  },
  {
    "StopID": 18093,
    "Zone": 800,
    "Name": "Znojmo, U Lesíka, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18094,
    "Zone": 800,
    "Name": "Znojmo, Pontassievská",
    "Latitude": 48.855514,
    "Longitude": 16.052096,
    "IsPublic": true,
    "LineList": "806,807"
  },
  {
    "StopID": 18095,
    "Zone": 800,
    "Name": "Znojmo, Horní Česká",
    "Latitude": 48.856608,
    "Longitude": 16.050422,
    "IsPublic": true,
    "LineList": "806,807"
  },
  {
    "StopID": 18096,
    "Zone": 800,
    "Name": "Znojmo, Loucká, škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18097,
    "Zone": 800,
    "Name": "Znojmo, Loucká, Klášterní",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18100,
    "Zone": 800,
    "Name": "Znojmo, Šatovská, u staré školy",
    "Latitude": 48.833178,
    "Longitude": 16.066634,
    "IsPublic": true,
    "LineList": "802,818"
  },
  {
    "StopID": 18101,
    "Zone": 800,
    "Name": "Nový Šaldorf-Sedlešovice, autosalon",
    "Latitude": 48.829415,
    "Longitude": 16.062523,
    "IsPublic": true,
    "LineList": "802,818"
  },
  {
    "StopID": 18102,
    "Zone": 800,
    "Name": "Nový Šaldorf-Sedlešovice, u bytovky",
    "Latitude": 48.831895,
    "Longitude": 16.059242,
    "IsPublic": true,
    "LineList": "802,809"
  },
  {
    "StopID": 18103,
    "Zone": 800,
    "Name": "Nový Šaldorf-Sedlešovice, Sedlešovice",
    "Latitude": 48.835743,
    "Longitude": 16.055682,
    "IsPublic": true,
    "LineList": "802,809"
  },
  {
    "StopID": 18104,
    "Zone": 800,
    "Name": "Dobšice, MŠ",
    "Latitude": 48.848375,
    "Longitude": 16.080418,
    "IsPublic": true,
    "LineList": "803"
  },
  {
    "StopID": 18105,
    "Zone": 800,
    "Name": "Dobšice, sídliště",
    "Latitude": 48.851538,
    "Longitude": 16.078315,
    "IsPublic": true,
    "LineList": "803"
  },
  {
    "StopID": 18106,
    "Zone": 800,
    "Name": "Dobšice, pož.z.",
    "Latitude": 48.850502,
    "Longitude": 16.087616,
    "IsPublic": true,
    "LineList": "803"
  },
  {
    "StopID": 18107,
    "Zone": 800,
    "Name": "Dobšice, rest.",
    "Latitude": 48.848648,
    "Longitude": 16.085550,
    "IsPublic": true,
    "LineList": "803,821"
  },
  {
    "StopID": 18108,
    "Zone": 800,
    "Name": "Suchohrdelská, zahrádky",
    "Latitude": 48.859794,
    "Longitude": 16.077622,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18109,
    "Zone": 800,
    "Name": "Suchohrdly, rozvodna",
    "Latitude": 48.861701,
    "Longitude": 16.081362,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18110,
    "Zone": 800,
    "Name": "Suchohrdly, prodejna",
    "Latitude": 48.866411,
    "Longitude": 16.089265,
    "IsPublic": true,
    "LineList": "432,801,810"
  },
  {
    "StopID": 18111,
    "Zone": 800,
    "Name": "Suchohrdly, škola",
    "Latitude": 48.868672,
    "Longitude": 16.094475,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18112,
    "Zone": 800,
    "Name": "Kuchařovice, obchod",
    "Latitude": 48.875607,
    "Longitude": 16.079357,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18113,
    "Zone": 800,
    "Name": "Kuchařovice, u kostela",
    "Latitude": 48.876162,
    "Longitude": 16.076394,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18114,
    "Zone": 800,
    "Name": "Kuchařovice, točna",
    "Latitude": 48.878156,
    "Longitude": 16.070183,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18115,
    "Zone": 800,
    "Name": "Suchohrdly, kurty",
    "Latitude": 48.868342,
    "Longitude": 16.096520,
    "IsPublic": true,
    "LineList": "432,810"
  },
  {
    "StopID": 18116,
    "Zone": 800,
    "Name": "Suchohrdly, Purkrábka",
    "Latitude": 48.868852,
    "Longitude": 16.106733,
    "IsPublic": true,
    "LineList": "432,810"
  },
  {
    "StopID": 18117,
    "Zone": 810,
    "Name": "Bantice",
    "Latitude": 48.883225,
    "Longitude": 16.184494,
    "IsPublic": true,
    "LineList": "810"
  },
  {
    "StopID": 18118,
    "Zone": 810,
    "Name": "Bantice, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18119,
    "Zone": 810,
    "Name": "Dyje, cihelna",
    "Latitude": 48.852634,
    "Longitude": 16.113313,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18120,
    "Zone": 810,
    "Name": "Dyje, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18121,
    "Zone": 810,
    "Name": "Dyje, u železničního přejezdu",
    "Latitude": 48.849592,
    "Longitude": 16.120014,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18122,
    "Zone": 810,
    "Name": "Hodonice, střed",
    "Latitude": 48.835904,
    "Longitude": 16.164724,
    "IsPublic": true,
    "LineList": "821,836"
  },
  {
    "StopID": 18123,
    "Zone": 810,
    "Name": "Krhovice",
    "Latitude": 48.817379,
    "Longitude": 16.174368,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18124,
    "Zone": 810,
    "Name": "Práče, Jednota",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18125,
    "Zone": 810,
    "Name": "Práče, obecní úřad",
    "Latitude": 48.877019,
    "Longitude": 16.202395,
    "IsPublic": true,
    "LineList": "835"
  },
  {
    "StopID": 18126,
    "Zone": 810,
    "Name": "Práče, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18127,
    "Zone": 810,
    "Name": "Práče, škola",
    "Latitude": 48.876649,
    "Longitude": 16.203350,
    "IsPublic": true,
    "LineList": "108,822,836"
  },
  {
    "StopID": 18128,
    "Zone": 810,
    "Name": "Strachotice, křižovatka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18129,
    "Zone": 810,
    "Name": "Strachotice, obecní úřad",
    "Latitude": 48.796434,
    "Longitude": 16.172633,
    "IsPublic": true,
    "LineList": "820"
  },
  {
    "StopID": 18130,
    "Zone": 810,
    "Name": "Strachotice, rozcestí",
    "Latitude": 48.806431,
    "Longitude": 16.201684,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18131,
    "Zone": 810,
    "Name": "Micmanice",
    "Latitude": 48.796005,
    "Longitude": 16.183948,
    "IsPublic": true,
    "LineList": "820"
  },
  {
    "StopID": 18132,
    "Zone": 810,
    "Name": "Tasovice, škola",
    "Latitude": 48.838650,
    "Longitude": 16.157345,
    "IsPublic": true,
    "LineList": "821,836"
  },
  {
    "StopID": 18133,
    "Zone": 810,
    "Name": "Tasovice, u prodejen",
    "Latitude": 48.836029,
    "Longitude": 16.156202,
    "IsPublic": true,
    "LineList": "821,836"
  },
  {
    "StopID": 18135,
    "Zone": 810,
    "Name": "Těšetice, na hlavní",
    "Latitude": 48.888025,
    "Longitude": 16.157732,
    "IsPublic": true,
    "LineList": "432,810"
  },
  {
    "StopID": 18136,
    "Zone": 812,
    "Name": "Plaveč",
    "Latitude": 48.929175,
    "Longitude": 16.079838,
    "IsPublic": true,
    "LineList": "812,813"
  },
  {
    "StopID": 18138,
    "Zone": 812,
    "Name": "Únanov, obecní úřad",
    "Latitude": 48.900650,
    "Longitude": 16.063477,
    "IsPublic": true,
    "LineList": "811,812,813"
  },
  {
    "StopID": 18139,
    "Zone": 812,
    "Name": "Únanov, závod",
    "Latitude": 48.888422,
    "Longitude": 16.064178,
    "IsPublic": true,
    "LineList": "811,812,813"
  },
  {
    "StopID": 18140,
    "Zone": 815,
    "Name": "Bezkov",
    "Latitude": 48.870567,
    "Longitude": 15.953068,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18141,
    "Zone": 815,
    "Name": "Citonice",
    "Latitude": 48.881157,
    "Longitude": 15.968258,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18142,
    "Zone": 812,
    "Name": "Hluboké Mašůvky, dolní zastávka",
    "Latitude": 48.927801,
    "Longitude": 16.026232,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18143,
    "Zone": 812,
    "Name": "Hluboké Mašůvky, hájenka",
    "Latitude": 48.937038,
    "Longitude": 16.007540,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18144,
    "Zone": 812,
    "Name": "H. Mašůvky, hos.",
    "Latitude": 48.923132,
    "Longitude": 16.025418,
    "IsPublic": true,
    "LineList": "814,825"
  },
  {
    "StopID": 18145,
    "Zone": 815,
    "Name": "Kravsko, u kovárny",
    "Latitude": 48.920392,
    "Longitude": 15.987062,
    "IsPublic": true,
    "LineList": "815,825"
  },
  {
    "StopID": 18146,
    "Zone": 815,
    "Name": "Kravsko, škola",
    "Latitude": 48.917631,
    "Longitude": 15.985649,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 18147,
    "Zone": 815,
    "Name": "Kravsko, u hřbitova",
    "Latitude": 48.917785,
    "Longitude": 15.991638,
    "IsPublic": true,
    "LineList": "815,825"
  },
  {
    "StopID": 18148,
    "Zone": 815,
    "Name": "Kravsko, rozcestí k závodu",
    "Latitude": 48.922678,
    "Longitude": 15.987302,
    "IsPublic": true,
    "LineList": "815,825"
  },
  {
    "StopID": 18149,
    "Zone": 815,
    "Name": "Mašovice, hostinec",
    "Latitude": 48.858426,
    "Longitude": 15.974687,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18150,
    "Zone": 815,
    "Name": "Mašovice, lom",
    "Latitude": 48.858162,
    "Longitude": 15.981399,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18151,
    "Zone": 815,
    "Name": "Mašovice, škola",
    "Latitude": 48.856497,
    "Longitude": 15.973942,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18152,
    "Zone": 815,
    "Name": "Mašovice, u hřbitova",
    "Latitude": 48.856368,
    "Longitude": 15.972148,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18154,
    "Zone": 815,
    "Name": "Milíčovice, obecní úřad",
    "Latitude": 48.891900,
    "Longitude": 15.930743,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18155,
    "Zone": 815,
    "Name": "Milíčovice, na st.",
    "Latitude": 48.888642,
    "Longitude": 15.933061,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18156,
    "Zone": 815,
    "Name": "Olbramkostel, restaurace",
    "Latitude": 48.922627,
    "Longitude": 15.950368,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 18157,
    "Zone": 815,
    "Name": "Olbramkostel, státní silnice",
    "Latitude": 48.922742,
    "Longitude": 15.952216,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 18158,
    "Zone": 815,
    "Name": "Olbramkostel, železniční stanice",
    "Latitude": 48.903362,
    "Longitude": 15.949113,
    "IsPublic": true,
    "LineList": "138,815"
  },
  {
    "StopID": 18159,
    "Zone": 815,
    "Name": "Plenkovice, Jednota",
    "Latitude": 48.920146,
    "Longitude": 16.000460,
    "IsPublic": true,
    "LineList": "815,825"
  },
  {
    "StopID": 18160,
    "Zone": 815,
    "Name": "Plenkovice, u ryb.",
    "Latitude": 48.918495,
    "Longitude": 16.002367,
    "IsPublic": true,
    "LineList": "815,825"
  },
  {
    "StopID": 18161,
    "Zone": 815,
    "Name": "Podmolí, náves",
    "Latitude": 48.851540,
    "Longitude": 15.939150,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18162,
    "Zone": 815,
    "Name": "Žerůtky",
    "Latitude": 48.905895,
    "Longitude": 15.962727,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 18163,
    "Zone": 815,
    "Name": "Žerůtky, rozcestí",
    "Latitude": 48.909396,
    "Longitude": 15.970141,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 18164,
    "Zone": 817,
    "Name": "Havraníky",
    "Latitude": 48.809052,
    "Longitude": 16.009077,
    "IsPublic": true,
    "LineList": "818"
  },
  {
    "StopID": 18165,
    "Zone": 817,
    "Name": "Hnanice",
    "Latitude": 48.796858,
    "Longitude": 15.987885,
    "IsPublic": true,
    "LineList": "818"
  },
  {
    "StopID": 18166,
    "Zone": 817,
    "Name": "Šatov, křižovatka",
    "Latitude": 48.795137,
    "Longitude": 16.005840,
    "IsPublic": true,
    "LineList": "818"
  },
  {
    "StopID": 18167,
    "Zone": 817,
    "Name": "Šatov, ObÚ",
    "Latitude": 48.792152,
    "Longitude": 16.014302,
    "IsPublic": true,
    "LineList": "818"
  },
  {
    "StopID": 18168,
    "Zone": 817,
    "Name": "Šatov, žel.st.",
    "Latitude": 48.780740,
    "Longitude": 16.025751,
    "IsPublic": true,
    "LineList": "137,818"
  },
  {
    "StopID": 18169,
    "Zone": 818,
    "Name": "Dyjákovičky, křižovatka",
    "Latitude": 48.784764,
    "Longitude": 16.094942,
    "IsPublic": true,
    "LineList": "819"
  },
  {
    "StopID": 18170,
    "Zone": 818,
    "Name": "Dyjákovičky, obecní úřad",
    "Latitude": 48.783703,
    "Longitude": 16.095659,
    "IsPublic": true,
    "LineList": "819"
  },
  {
    "StopID": 18171,
    "Zone": 818,
    "Name": "Chvalovice",
    "Latitude": 48.786098,
    "Longitude": 16.081894,
    "IsPublic": true,
    "LineList": "819"
  },
  {
    "StopID": 18172,
    "Zone": 818,
    "Name": "Hatě, FREEPORT",
    "Latitude": 48.763111,
    "Longitude": 16.060416,
    "IsPublic": true,
    "LineList": "819"
  },
  {
    "StopID": 18173,
    "Zone": 818,
    "Name": "Chvalovice, Hatě, státní hranice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18175,
    "Zone": 818,
    "Name": "Vrbovec, Jednota",
    "Latitude": 48.800106,
    "Longitude": 16.102177,
    "IsPublic": true,
    "LineList": "820"
  },
  {
    "StopID": 18176,
    "Zone": 818,
    "Name": "Vrbovec, sklepy",
    "Latitude": 48.805930,
    "Longitude": 16.080433,
    "IsPublic": true,
    "LineList": "819"
  },
  {
    "StopID": 18177,
    "Zone": 818,
    "Name": "Vrbovec, stará zastávka",
    "Latitude": 48.799121,
    "Longitude": 16.100635,
    "IsPublic": true,
    "LineList": "819"
  },
  {
    "StopID": 18178,
    "Zone": 818,
    "Name": "Vrbovec, Hnízdo",
    "Latitude": 48.773097,
    "Longitude": 16.131853,
    "IsPublic": true,
    "LineList": "819"
  },
  {
    "StopID": 18179,
    "Zone": 815,
    "Name": "Mašovice, dvůr",
    "Latitude": 48.857172,
    "Longitude": 15.987367,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18180,
    "Zone": 815,
    "Name": "Podmolí, u bytovky",
    "Latitude": 48.850950,
    "Longitude": 15.942112,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18181,
    "Zone": 812,
    "Name": "Hluboké Mašůvky, rozcestí Plenkovice",
    "Latitude": 48.919267,
    "Longitude": 16.025448,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18182,
    "Zone": 815,
    "Name": "Podmolí, u bunkru",
    "Latitude": 48.855708,
    "Longitude": 15.923823,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18183,
    "Zone": 800,
    "Name": "Kuchařovice, H&M",
    "Latitude": 48.875313,
    "Longitude": 16.081570,
    "IsPublic": true,
    "LineList": "801"
  },
  {
    "StopID": 18184,
    "Zone": 800,
    "Name": "Nový Šaldorf-Sedlešovice, Modré sklepy",
    "Latitude": 48.826472,
    "Longitude": 16.053773,
    "IsPublic": true,
    "LineList": "809"
  },
  {
    "StopID": 18185,
    "Zone": 815,
    "Name": "Plenkovice, u hřiště",
    "Latitude": 48.918335,
    "Longitude": 16.008898,
    "IsPublic": true,
    "LineList": "825"
  },
  {
    "StopID": 18186,
    "Zone": 810,
    "Name": "Tasovice, u hřbitova",
    "Latitude": 48.836055,
    "Longitude": 16.150800,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18187,
    "Zone": 818,
    "Name": "Dyjákovičky, Hnízdecká",
    "Latitude": 48.781669,
    "Longitude": 16.101137,
    "IsPublic": true,
    "LineList": "819"
  },
  {
    "StopID": 18201,
    "Zone": 820,
    "Name": "Borotice",
    "Latitude": 48.857314,
    "Longitude": 16.243855,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 18202,
    "Zone": 820,
    "Name": "Borotice, Filipovice",
    "Latitude": 48.852911,
    "Longitude": 16.249520,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 18203,
    "Zone": 820,
    "Name": "Božice, Jednota",
    "Latitude": 48.836647,
    "Longitude": 16.289013,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 18204,
    "Zone": 820,
    "Name": "Božice, Oseva",
    "Latitude": 48.844584,
    "Longitude": 16.289621,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 18205,
    "Zone": 820,
    "Name": "Božice, škola",
    "Latitude": 48.834420,
    "Longitude": 16.290619,
    "IsPublic": true,
    "LineList": "821,822"
  },
  {
    "StopID": 18206,
    "Zone": 820,
    "Name": "Božice, u pošty",
    "Latitude": 48.835212,
    "Longitude": 16.281316,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 18207,
    "Zone": 820,
    "Name": "Božice, u sklepů",
    "Latitude": 48.847860,
    "Longitude": 16.259136,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 18208,
    "Zone": 820,
    "Name": "Božice, železniční stanice",
    "Latitude": 48.823408,
    "Longitude": 16.287728,
    "IsPublic": true,
    "LineList": "128,821"
  },
  {
    "StopID": 18209,
    "Zone": 820,
    "Name": "Božice, České Křídlovice",
    "Latitude": 48.838532,
    "Longitude": 16.276092,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 18210,
    "Zone": 820,
    "Name": "Čejkovice",
    "Latitude": 48.877778,
    "Longitude": 16.286723,
    "IsPublic": true,
    "LineList": "822"
  },
  {
    "StopID": 18212,
    "Zone": 822,
    "Name": "Kyjovice",
    "Latitude": 48.915672,
    "Longitude": 16.166501,
    "IsPublic": true,
    "LineList": "811,835"
  },
  {
    "StopID": 18214,
    "Zone": 820,
    "Name": "Lechovice, ObÚ",
    "Latitude": 48.872539,
    "Longitude": 16.221671,
    "IsPublic": true,
    "LineList": "108,822,835,836"
  },
  {
    "StopID": 18215,
    "Zone": 820,
    "Name": "Lechovice, zámek",
    "Latitude": 48.875271,
    "Longitude": 16.236534,
    "IsPublic": true,
    "LineList": "108,835"
  },
  {
    "StopID": 18216,
    "Zone": 820,
    "Name": "Oleksovice, host.",
    "Latitude": 48.901760,
    "Longitude": 16.250358,
    "IsPublic": true,
    "LineList": "810"
  },
  {
    "StopID": 18217,
    "Zone": 820,
    "Name": "Oleksovice, rozcestí",
    "Latitude": 48.887528,
    "Longitude": 16.260346,
    "IsPublic": true,
    "LineList": "108"
  },
  {
    "StopID": 18218,
    "Zone": 820,
    "Name": "Oleksovice, u potoka",
    "Latitude": 48.904507,
    "Longitude": 16.243616,
    "IsPublic": true,
    "LineList": "810"
  },
  {
    "StopID": 18219,
    "Zone": 810,
    "Name": "Prosiměřice, hostinec",
    "Latitude": 48.902571,
    "Longitude": 16.192420,
    "IsPublic": true,
    "LineList": "810,835"
  },
  {
    "StopID": 18220,
    "Zone": 810,
    "Name": "Prosiměřice, Kyjovická",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18221,
    "Zone": 810,
    "Name": "Prosiměřice, u bufetu",
    "Latitude": 48.903646,
    "Longitude": 16.190474,
    "IsPublic": true,
    "LineList": "432,835"
  },
  {
    "StopID": 18222,
    "Zone": 820,
    "Name": "Stošíkovice na Louce",
    "Latitude": 48.895290,
    "Longitude": 16.214773,
    "IsPublic": true,
    "LineList": "810,835"
  },
  {
    "StopID": 18223,
    "Zone": 810,
    "Name": "Stošíkovice na Louce, rozcestí",
    "Latitude": 48.889842,
    "Longitude": 16.196684,
    "IsPublic": true,
    "LineList": "810,835"
  },
  {
    "StopID": 18224,
    "Zone": 820,
    "Name": "Vítonice",
    "Latitude": 48.916416,
    "Longitude": 16.201048,
    "IsPublic": true,
    "LineList": "432,810"
  },
  {
    "StopID": 18225,
    "Zone": 823,
    "Name": "Mikulovice, náměstí",
    "Latitude": 48.956531,
    "Longitude": 16.092162,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 18226,
    "Zone": 823,
    "Name": "Mikulovice, obecní úřad",
    "Latitude": 48.956318,
    "Longitude": 16.088968,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 18227,
    "Zone": 823,
    "Name": "Mikulovice, škola",
    "Latitude": 48.956275,
    "Longitude": 16.089503,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 18228,
    "Zone": 823,
    "Name": "Němčičky",
    "Latitude": 48.942055,
    "Longitude": 16.088462,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 18229,
    "Zone": 823,
    "Name": "Němčičky, rozcestí",
    "Latitude": 48.939468,
    "Longitude": 16.083075,
    "IsPublic": true,
    "LineList": "812,813"
  },
  {
    "StopID": 18230,
    "Zone": 823,
    "Name": "Rudlice, rozcestí",
    "Latitude": 48.945313,
    "Longitude": 16.077734,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 18231,
    "Zone": 823,
    "Name": "Rudlice, samota",
    "Latitude": 48.954214,
    "Longitude": 16.056107,
    "IsPublic": true,
    "LineList": "813"
  },
  {
    "StopID": 18232,
    "Zone": 823,
    "Name": "Rudlice, u pomníku",
    "Latitude": 48.948990,
    "Longitude": 16.067334,
    "IsPublic": true,
    "LineList": "812,813"
  },
  {
    "StopID": 18233,
    "Zone": 822,
    "Name": "Tvořihráz, na kopečku",
    "Latitude": 48.918555,
    "Longitude": 16.132145,
    "IsPublic": true,
    "LineList": "811"
  },
  {
    "StopID": 18234,
    "Zone": 822,
    "Name": "Tvořihráz, obecní úřad",
    "Latitude": 48.918973,
    "Longitude": 16.139169,
    "IsPublic": true,
    "LineList": "811"
  },
  {
    "StopID": 18235,
    "Zone": 822,
    "Name": "Tvořihráz, Žerotická",
    "Latitude": 48.920481,
    "Longitude": 16.140749,
    "IsPublic": true,
    "LineList": "811"
  },
  {
    "StopID": 18236,
    "Zone": 822,
    "Name": "Výrovice, hostinec",
    "Latitude": 48.928608,
    "Longitude": 16.120277,
    "IsPublic": true,
    "LineList": "811"
  },
  {
    "StopID": 18237,
    "Zone": 822,
    "Name": "Výrovice, rozcestí",
    "Latitude": 48.916818,
    "Longitude": 16.103823,
    "IsPublic": true,
    "LineList": "811"
  },
  {
    "StopID": 18238,
    "Zone": 822,
    "Name": "Žerotice, Kyjovická",
    "Latitude": 48.925525,
    "Longitude": 16.165198,
    "IsPublic": true,
    "LineList": "811,835"
  },
  {
    "StopID": 18239,
    "Zone": 822,
    "Name": "Žerotice, požární zbrojnice",
    "Latitude": 48.926906,
    "Longitude": 16.167706,
    "IsPublic": true,
    "LineList": "811,835"
  },
  {
    "StopID": 18240,
    "Zone": 823,
    "Name": "Bojanovice, hospodářství ZD",
    "Latitude": 48.964391,
    "Longitude": 15.992004,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18241,
    "Zone": 823,
    "Name": "Bojanovice, obecní úřad",
    "Latitude": 48.969058,
    "Longitude": 15.989056,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18242,
    "Zone": 823,
    "Name": "Bojanovice, odbočka k pile",
    "Latitude": 48.952163,
    "Longitude": 15.993046,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18243,
    "Zone": 823,
    "Name": "Černín, lávka",
    "Latitude": 48.980218,
    "Longitude": 16.015953,
    "IsPublic": true,
    "LineList": "813"
  },
  {
    "StopID": 18244,
    "Zone": 823,
    "Name": "Černín, Závoda",
    "Latitude": 48.981192,
    "Longitude": 16.026243,
    "IsPublic": true,
    "LineList": "813"
  },
  {
    "StopID": 18245,
    "Zone": 823,
    "Name": "Jevišovice, náměstí",
    "Latitude": 48.988044,
    "Longitude": 15.992583,
    "IsPublic": true,
    "LineList": "813,814"
  },
  {
    "StopID": 18246,
    "Zone": 823,
    "Name": "Jevišovice, policie",
    "Latitude": 48.983151,
    "Longitude": 15.986568,
    "IsPublic": true,
    "LineList": "813,814"
  },
  {
    "StopID": 18247,
    "Zone": 823,
    "Name": "Vevčice",
    "Latitude": 48.962036,
    "Longitude": 16.044386,
    "IsPublic": true,
    "LineList": "813"
  },
  {
    "StopID": 18249,
    "Zone": 825,
    "Name": "Horní Břečkov, Jed.",
    "Latitude": 48.889902,
    "Longitude": 15.898162,
    "IsPublic": true,
    "LineList": "816,817"
  },
  {
    "StopID": 18250,
    "Zone": 825,
    "Name": "Horní Břečkov, obecní úřad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18251,
    "Zone": 825,
    "Name": "Čížov",
    "Latitude": 48.878380,
    "Longitude": 15.872730,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18252,
    "Zone": 825,
    "Name": "Lesná, hájenka",
    "Latitude": 48.908375,
    "Longitude": 15.853714,
    "IsPublic": true,
    "LineList": "816,830"
  },
  {
    "StopID": 18253,
    "Zone": 825,
    "Name": "Lesná, penzion",
    "Latitude": 48.907529,
    "Longitude": 15.867332,
    "IsPublic": true,
    "LineList": "816,830"
  },
  {
    "StopID": 18254,
    "Zone": 825,
    "Name": "Lesná, statek",
    "Latitude": 48.914504,
    "Longitude": 15.865365,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18255,
    "Zone": 825,
    "Name": "Lesná, u vodní nádrže",
    "Latitude": 48.908680,
    "Longitude": 15.868103,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18256,
    "Zone": 825,
    "Name": "Lukov",
    "Latitude": 48.863618,
    "Longitude": 15.911365,
    "IsPublic": true,
    "LineList": "817"
  },
  {
    "StopID": 18257,
    "Zone": 825,
    "Name": "Šumná, kaplička",
    "Latitude": 48.921777,
    "Longitude": 15.867723,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18258,
    "Zone": 825,
    "Name": "Šumná, obecní úřad",
    "Latitude": 48.920485,
    "Longitude": 15.871943,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18259,
    "Zone": 825,
    "Name": "Šumná, žel.st.",
    "Latitude": 48.923097,
    "Longitude": 15.874306,
    "IsPublic": true,
    "LineList": "138"
  },
  {
    "StopID": 18260,
    "Zone": 825,
    "Name": "Vracovice",
    "Latitude": 48.899901,
    "Longitude": 15.899864,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18261,
    "Zone": 825,
    "Name": "Vranovská Ves, Hostěrádky",
    "Latitude": 48.941252,
    "Longitude": 15.926200,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 18262,
    "Zone": 825,
    "Name": "Vranovská Ves, u hřiště",
    "Latitude": 48.952003,
    "Longitude": 15.918136,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 18263,
    "Zone": 825,
    "Name": "Vranovská Ves, u lesa",
    "Latitude": 48.949022,
    "Longitude": 15.920432,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 18268,
    "Zone": 827,
    "Name": "Retz, Bahnhof",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18271,
    "Zone": 827,
    "Name": "Unterretzbach, Bahnstrasse",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18274,
    "Zone": 829,
    "Name": "Jaroslavice",
    "Latitude": 48.757258,
    "Longitude": 16.233215,
    "IsPublic": true,
    "LineList": "820"
  },
  {
    "StopID": 18275,
    "Zone": 829,
    "Name": "Křídlůvky",
    "Latitude": 48.781775,
    "Longitude": 16.239319,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18276,
    "Zone": 829,
    "Name": "Křídlůvky, rozcestí",
    "Latitude": 48.784948,
    "Longitude": 16.242421,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18277,
    "Zone": 829,
    "Name": "Slup",
    "Latitude": 48.781440,
    "Longitude": 16.199418,
    "IsPublic": true,
    "LineList": "820"
  },
  {
    "StopID": 18278,
    "Zone": 829,
    "Name": "Slup, Oleksovičky, rozcestí",
    "Latitude": 48.775334,
    "Longitude": 16.207216,
    "IsPublic": true,
    "LineList": "820"
  },
  {
    "StopID": 18279,
    "Zone": 829,
    "Name": "Slup, Oleksovičky, u mostu",
    "Latitude": 48.780555,
    "Longitude": 16.210340,
    "IsPublic": true,
    "LineList": "820"
  },
  {
    "StopID": 18280,
    "Zone": 829,
    "Name": "Valtrovice, Formosa",
    "Latitude": 48.817082,
    "Longitude": 16.233376,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18281,
    "Zone": 829,
    "Name": "Valtrovice, ObÚ",
    "Latitude": 48.794353,
    "Longitude": 16.222511,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18282,
    "Zone": 825,
    "Name": "Vracovice, u kostela",
    "Latitude": 48.903376,
    "Longitude": 15.899765,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18283,
    "Zone": 822,
    "Name": "Tvořihráz, Loucký mlýn",
    "Latitude": 48.924846,
    "Longitude": 16.154944,
    "IsPublic": true,
    "LineList": "811"
  },
  {
    "StopID": 18301,
    "Zone": 831,
    "Name": "H. Dunajovice, ObÚ",
    "Latitude": 48.950248,
    "Longitude": 16.159922,
    "IsPublic": true,
    "LineList": "158,811"
  },
  {
    "StopID": 18302,
    "Zone": 831,
    "Name": "Horní Dunajovice, Domčice",
    "Latitude": 48.946109,
    "Longitude": 16.167217,
    "IsPublic": true,
    "LineList": "158,811"
  },
  {
    "StopID": 18303,
    "Zone": 459,
    "Name": "Morašice",
    "Latitude": 48.957339,
    "Longitude": 16.209290,
    "IsPublic": true,
    "LineList": "158"
  },
  {
    "StopID": 18304,
    "Zone": 831,
    "Name": "Trstěnice",
    "Latitude": 48.986971,
    "Longitude": 16.194862,
    "IsPublic": true,
    "LineList": "444,811"
  },
  {
    "StopID": 18305,
    "Zone": 831,
    "Name": "Višňové, Mrazírny",
    "Latitude": 48.978549,
    "Longitude": 16.147778,
    "IsPublic": true,
    "LineList": "158,811"
  },
  {
    "StopID": 18306,
    "Zone": 831,
    "Name": "Višňové, náměstí",
    "Latitude": 48.982684,
    "Longitude": 16.150100,
    "IsPublic": true,
    "LineList": "158,444,811"
  },
  {
    "StopID": 18307,
    "Zone": 831,
    "Name": "Višňové, škola",
    "Latitude": 48.984007,
    "Longitude": 16.154390,
    "IsPublic": true,
    "LineList": "158,444"
  },
  {
    "StopID": 18308,
    "Zone": 831,
    "Name": "Želetice, Jednota",
    "Latitude": 48.935530,
    "Longitude": 16.182615,
    "IsPublic": true,
    "LineList": "158,811,835"
  },
  {
    "StopID": 18309,
    "Zone": 831,
    "Name": "Želetice, škola",
    "Latitude": 48.938901,
    "Longitude": 16.182020,
    "IsPublic": true,
    "LineList": "158,811,835"
  },
  {
    "StopID": 18310,
    "Zone": 832,
    "Name": "Běhařovice, obecní úřad",
    "Latitude": 49.003327,
    "Longitude": 16.079834,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 18311,
    "Zone": 832,
    "Name": "Běhařovice, Ratišovice",
    "Latitude": 48.995646,
    "Longitude": 16.054492,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 18312,
    "Zone": 832,
    "Name": "Běhařovice, Stupešice, prodejna",
    "Latitude": 48.984883,
    "Longitude": 16.075509,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 18314,
    "Zone": 832,
    "Name": "Křepice",
    "Latitude": 48.987182,
    "Longitude": 16.095533,
    "IsPublic": true,
    "LineList": "812"
  },
  {
    "StopID": 18316,
    "Zone": 833,
    "Name": "Rozkoš, myslivna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18317,
    "Zone": 833,
    "Name": "Rozkoš, u kapličky",
    "Latitude": 49.028416,
    "Longitude": 15.976725,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18318,
    "Zone": 833,
    "Name": "Rozkoš, Zátiší",
    "Latitude": 49.028421,
    "Longitude": 15.995144,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18319,
    "Zone": 833,
    "Name": "Slatina, horní zastávka",
    "Latitude": 49.021178,
    "Longitude": 16.024162,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18321,
    "Zone": 833,
    "Name": "Slatina, ObÚ",
    "Latitude": 49.020038,
    "Longitude": 16.017506,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18324,
    "Zone": 833,
    "Name": "Slatina, Kratochvilka",
    "Latitude": 49.029101,
    "Longitude": 16.031229,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18325,
    "Zone": 833,
    "Name": "Slatina, Kratochvilka, křižovatka",
    "Latitude": 49.029882,
    "Longitude": 16.027875,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18327,
    "Zone": 823,
    "Name": "Střelice, hájenka",
    "Latitude": 49.004965,
    "Longitude": 15.974225,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18328,
    "Zone": 823,
    "Name": "Střelice, Němčický dvůr",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18329,
    "Zone": 823,
    "Name": "Střelice, požární zbrojnice",
    "Latitude": 48.994166,
    "Longitude": 15.983194,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18330,
    "Zone": 835,
    "Name": "Blanné",
    "Latitude": 48.992495,
    "Longitude": 15.882532,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 18331,
    "Zone": 835,
    "Name": "Blanné, obecní úřad",
    "Latitude": 48.992656,
    "Longitude": 15.882569,
    "IsPublic": true,
    "LineList": "832"
  },
  {
    "StopID": 18332,
    "Zone": 835,
    "Name": "Blanné, rozcestí",
    "Latitude": 48.989711,
    "Longitude": 15.877900,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18333,
    "Zone": 835,
    "Name": "Boskovštejn, hájenka",
    "Latitude": 48.978287,
    "Longitude": 15.947785,
    "IsPublic": true,
    "LineList": "813"
  },
  {
    "StopID": 18334,
    "Zone": 835,
    "Name": "Boskovštejn, požární zbrojnice",
    "Latitude": 48.981859,
    "Longitude": 15.932263,
    "IsPublic": true,
    "LineList": "813"
  },
  {
    "StopID": 18335,
    "Zone": 835,
    "Name": "Boskovštejn, středisko ZD",
    "Latitude": 48.985371,
    "Longitude": 15.926545,
    "IsPublic": true,
    "LineList": "813"
  },
  {
    "StopID": 18336,
    "Zone": 835,
    "Name": "Ctidružice, u parku",
    "Latitude": 48.982255,
    "Longitude": 15.861658,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18337,
    "Zone": 835,
    "Name": "Grešlové Mýto, motorest",
    "Latitude": 48.981579,
    "Longitude": 15.885133,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18338,
    "Zone": 835,
    "Name": "Grešlové Mýto, u mostu",
    "Latitude": 48.983310,
    "Longitude": 15.882700,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18339,
    "Zone": 835,
    "Name": "Grešlové Mýto, železniční stanice",
    "Latitude": 48.984520,
    "Longitude": 15.874648,
    "IsPublic": true,
    "LineList": "138,815,832"
  },
  {
    "StopID": 18340,
    "Zone": 835,
    "Name": "Jiřice u Moravských Budějovic",
    "Latitude": 48.993784,
    "Longitude": 15.926209,
    "IsPublic": true,
    "LineList": "813"
  },
  {
    "StopID": 18341,
    "Zone": 835,
    "Name": "Pavlice, na kopci",
    "Latitude": 48.972680,
    "Longitude": 15.896000,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18342,
    "Zone": 835,
    "Name": "Pavlice, u vodní nádrže",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18343,
    "Zone": 835,
    "Name": "Prokopov",
    "Latitude": 48.998948,
    "Longitude": 15.894227,
    "IsPublic": true,
    "LineList": "813,832"
  },
  {
    "StopID": 18344,
    "Zone": 837,
    "Name": "Onšov, rozcestí",
    "Latitude": 48.902469,
    "Longitude": 15.837904,
    "IsPublic": true,
    "LineList": "816,830"
  },
  {
    "StopID": 18345,
    "Zone": 837,
    "Name": "Štítary, ObÚ",
    "Latitude": 48.935068,
    "Longitude": 15.844254,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18346,
    "Zone": 837,
    "Name": "Štítary, odbočka na pláž",
    "Latitude": 48.941433,
    "Longitude": 15.823362,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18347,
    "Zone": 837,
    "Name": "Štítary, škola",
    "Latitude": 48.932707,
    "Longitude": 15.852512,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18348,
    "Zone": 837,
    "Name": "Štítary, úpravna vody",
    "Latitude": 48.944303,
    "Longitude": 15.810812,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18350,
    "Zone": 837,
    "Name": "Vranov n/D., nám.",
    "Latitude": 48.894524,
    "Longitude": 15.813014,
    "IsPublic": true,
    "LineList": "816,830"
  },
  {
    "StopID": 18351,
    "Zone": 837,
    "Name": "Vranov n/D pláž",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18353,
    "Zone": 837,
    "Name": "Vranov n/D., před hr.",
    "Latitude": 48.899232,
    "Longitude": 15.815551,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18354,
    "Zone": 837,
    "Name": "Vranov nad Dyjí, statek",
    "Latitude": 48.893799,
    "Longitude": 15.800728,
    "IsPublic": true,
    "LineList": "831"
  },
  {
    "StopID": 18355,
    "Zone": 837,
    "Name": "Vranov n/D., Zám.h.",
    "Latitude": 48.896127,
    "Longitude": 15.812002,
    "IsPublic": true,
    "LineList": "816,830,831"
  },
  {
    "StopID": 18356,
    "Zone": 837,
    "Name": "Vranov nad Dyjí, zámek",
    "Latitude": 48.892935,
    "Longitude": 15.806904,
    "IsPublic": true,
    "LineList": "831"
  },
  {
    "StopID": 18357,
    "Zone": 839,
    "Name": "Dyjákovice, nad hostincem",
    "Latitude": 48.772662,
    "Longitude": 16.299196,
    "IsPublic": true,
    "LineList": "820,821"
  },
  {
    "StopID": 18358,
    "Zone": 839,
    "Name": "Dyjákovice, škola",
    "Latitude": 48.772805,
    "Longitude": 16.303553,
    "IsPublic": true,
    "LineList": "820,821"
  },
  {
    "StopID": 18359,
    "Zone": 839,
    "Name": "Hrádek, kult.dům",
    "Latitude": 48.775685,
    "Longitude": 16.269721,
    "IsPublic": true,
    "LineList": "820,821"
  },
  {
    "StopID": 18360,
    "Zone": 839,
    "Name": "Hrádek, škola",
    "Latitude": 48.772374,
    "Longitude": 16.268124,
    "IsPublic": true,
    "LineList": "820,821"
  },
  {
    "StopID": 18361,
    "Zone": 839,
    "Name": "Hrádek, zahradnictví",
    "Latitude": 48.782305,
    "Longitude": 16.255478,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18362,
    "Zone": 839,
    "Name": "Velký Karlov",
    "Latitude": 48.803731,
    "Longitude": 16.305717,
    "IsPublic": true,
    "LineList": "821"
  },
  {
    "StopID": 18363,
    "Zone": 839,
    "Name": "Hrádek, u mlýna",
    "Latitude": 48.773317,
    "Longitude": 16.277554,
    "IsPublic": true,
    "LineList": "820,821"
  },
  {
    "StopID": 18401,
    "Zone": 845,
    "Name": "Blížkovice, náměstí",
    "Latitude": 48.999513,
    "Longitude": 15.840092,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18402,
    "Zone": 845,
    "Name": "Blížkovice, zdravotní středisko",
    "Latitude": 48.997906,
    "Longitude": 15.839533,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18403,
    "Zone": 845,
    "Name": "Častohostice",
    "Latitude": 49.014105,
    "Longitude": 15.819027,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18404,
    "Zone": 845,
    "Name": "Hostim, kompresorová stanice, rozcestí",
    "Latitude": 49.003355,
    "Longitude": 15.883786,
    "IsPublic": true,
    "LineList": "832"
  },
  {
    "StopID": 18405,
    "Zone": 845,
    "Name": "Hostim, křižovatka",
    "Latitude": 49.009535,
    "Longitude": 15.896009,
    "IsPublic": true,
    "LineList": "813,832"
  },
  {
    "StopID": 18406,
    "Zone": 845,
    "Name": "Hostim, náměstí",
    "Latitude": 49.016895,
    "Longitude": 15.898068,
    "IsPublic": true,
    "LineList": "813,832"
  },
  {
    "StopID": 18407,
    "Zone": 845,
    "Name": "Zvěrkovice",
    "Latitude": 49.025940,
    "Longitude": 15.864300,
    "IsPublic": true,
    "LineList": "832"
  },
  {
    "StopID": 18408,
    "Zone": 847,
    "Name": "Chvalatice",
    "Latitude": 48.948788,
    "Longitude": 15.749398,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18409,
    "Zone": 847,
    "Name": "Zálesí, požární zbrojnice",
    "Latitude": 48.953756,
    "Longitude": 15.783340,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18410,
    "Zone": 847,
    "Name": "Zálesí, rozcestí",
    "Latitude": 48.965765,
    "Longitude": 15.756607,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18411,
    "Zone": 847,
    "Name": "Lančov, hostinec",
    "Latitude": 48.906838,
    "Longitude": 15.766860,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18412,
    "Zone": 847,
    "Name": "Lančov, kaplička",
    "Latitude": 48.906464,
    "Longitude": 15.798889,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18413,
    "Zone": 847,
    "Name": "Lančov, křižovatka k Podmyčím",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18415,
    "Zone": 847,
    "Name": "Podmyče, odd. Hájenka",
    "Latitude": 48.884022,
    "Longitude": 15.784155,
    "IsPublic": true,
    "LineList": "831"
  },
  {
    "StopID": 18416,
    "Zone": 847,
    "Name": "Podmyče, panelový dům",
    "Latitude": 48.887370,
    "Longitude": 15.783139,
    "IsPublic": true,
    "LineList": "831"
  },
  {
    "StopID": 18417,
    "Zone": 847,
    "Name": "Starý Petřín",
    "Latitude": 48.889967,
    "Longitude": 15.734681,
    "IsPublic": true,
    "LineList": "816,831"
  },
  {
    "StopID": 18418,
    "Zone": 847,
    "Name": "Starý Petřín, Jazovice",
    "Latitude": 48.897967,
    "Longitude": 15.743681,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18419,
    "Zone": 847,
    "Name": "Starý Petřín, Nový Petřín",
    "Latitude": 48.883555,
    "Longitude": 15.757468,
    "IsPublic": true,
    "LineList": "831"
  },
  {
    "StopID": 18420,
    "Zone": 847,
    "Name": "Starý Petřín, Nový Petřín, rozcestí",
    "Latitude": 48.882357,
    "Longitude": 15.754371,
    "IsPublic": true,
    "LineList": "831"
  },
  {
    "StopID": 18421,
    "Zone": 847,
    "Name": "Šafov",
    "Latitude": 48.866904,
    "Longitude": 15.734847,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18422,
    "Zone": 843,
    "Name": "Biskupice",
    "Latitude": 49.036053,
    "Longitude": 16.011173,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18423,
    "Zone": 843,
    "Name": "Pulkov",
    "Latitude": 49.038955,
    "Longitude": 15.987838,
    "IsPublic": true,
    "LineList": "814"
  },
  {
    "StopID": 18424,
    "Zone": 843,
    "Name": "Biskupice-Pulkov, Pulkov, rozcestí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18425,
    "Zone": 855,
    "Name": "Láz",
    "Latitude": 49.012467,
    "Longitude": 15.786832,
    "IsPublic": true,
    "LineList": "832"
  },
  {
    "StopID": 18426,
    "Zone": 847,
    "Name": "Zálesí, U Zvoničky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18427,
    "Zone": 845,
    "Name": "Blížkovice, škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18501,
    "Zone": 855,
    "Name": "Moravské Budějovice, 1. máje",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18502,
    "Zone": 855,
    "Name": "Moravské Budějovice, autobusové nádraží",
    "Latitude": 49.056355,
    "Longitude": 15.808013,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18504,
    "Zone": 855,
    "Name": "Moravské Budějovice, Tyršova",
    "Latitude": 49.049120,
    "Longitude": 15.815073,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18505,
    "Zone": 855,
    "Name": "Moravské Budějovice, Urbánkova",
    "Latitude": 49.048671,
    "Longitude": 15.811571,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18508,
    "Zone": 855,
    "Name": "Moravské Budějovice, Lažínky",
    "Latitude": 49.035189,
    "Longitude": 15.833194,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18509,
    "Zone": 845,
    "Name": "Moravské Budějovice, Vesce",
    "Latitude": 49.022804,
    "Longitude": 15.833289,
    "IsPublic": true,
    "LineList": "815,832"
  },
  {
    "StopID": 18511,
    "Zone": 857,
    "Name": "Bítov, hrad Cornštejn",
    "Latitude": 48.935688,
    "Longitude": 15.711545,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18512,
    "Zone": 857,
    "Name": "Bítov, most",
    "Latitude": 48.933778,
    "Longitude": 15.722213,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18513,
    "Zone": 857,
    "Name": "Bítov, náměstí",
    "Latitude": 48.937333,
    "Longitude": 15.729102,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18514,
    "Zone": 857,
    "Name": "Bítov, rozcestí",
    "Latitude": 48.944795,
    "Longitude": 15.725847,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18516,
    "Zone": 857,
    "Name": "Oslnovice, váha",
    "Latitude": 48.932803,
    "Longitude": 15.684336,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18517,
    "Zone": 857,
    "Name": "Podhradí nad Dyjí",
    "Latitude": 48.900451,
    "Longitude": 15.685492,
    "IsPublic": true,
    "LineList": "831"
  },
  {
    "StopID": 18518,
    "Zone": 857,
    "Name": "Podhradí nad Dyjí, rozcestí",
    "Latitude": 48.890783,
    "Longitude": 15.661967,
    "IsPublic": true,
    "LineList": "816,831"
  },
  {
    "StopID": 18519,
    "Zone": 857,
    "Name": "Stálky",
    "Latitude": 48.870660,
    "Longitude": 15.684244,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18520,
    "Zone": 857,
    "Name": "Vysočany, most",
    "Latitude": 48.937318,
    "Longitude": 15.703987,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18521,
    "Zone": 857,
    "Name": "Vysočany, prodejna",
    "Latitude": 48.940378,
    "Longitude": 15.689100,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18523,
    "Zone": 857,
    "Name": "Zblovice",
    "Latitude": 48.957733,
    "Longitude": 15.705153,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18524,
    "Zone": 855,
    "Name": "Nové Syrovice",
    "Latitude": 49.017942,
    "Longitude": 15.773550,
    "IsPublic": true,
    "LineList": "832"
  },
  {
    "StopID": 18525,
    "Zone": 855,
    "Name": "Nové Syrovice, Krnčice",
    "Latitude": 49.026532,
    "Longitude": 15.788656,
    "IsPublic": true,
    "LineList": "832"
  },
  {
    "StopID": 18526,
    "Zone": 855,
    "Name": "Nové Syrovice, Krnčice, VÚ",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18601,
    "Zone": 867,
    "Name": "Korolupy",
    "Latitude": 48.929959,
    "Longitude": 15.645503,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18602,
    "Zone": 867,
    "Name": "Korolupy, rozcestí",
    "Latitude": 48.927010,
    "Longitude": 15.621778,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18603,
    "Zone": 867,
    "Name": "Lubnice, škola",
    "Latitude": 48.941718,
    "Longitude": 15.611095,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18604,
    "Zone": 867,
    "Name": "Lubnice, u kostela",
    "Latitude": 48.938914,
    "Longitude": 15.613959,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18605,
    "Zone": 867,
    "Name": "Uherčice, křižovatka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18606,
    "Zone": 867,
    "Name": "Uherčice, u parku",
    "Latitude": 48.914381,
    "Longitude": 15.631452,
    "IsPublic": true,
    "LineList": "816,830,831"
  },
  {
    "StopID": 18607,
    "Zone": 867,
    "Name": "Uherčice, statek Mitrov",
    "Latitude": 48.902808,
    "Longitude": 15.646580,
    "IsPublic": true,
    "LineList": "816,831"
  },
  {
    "StopID": 18608,
    "Zone": 867,
    "Name": "Uherčice, u pomníku",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 18609,
    "Zone": 867,
    "Name": "Uherčice, Mešovice",
    "Latitude": 48.924265,
    "Longitude": 15.593314,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18610,
    "Zone": 867,
    "Name": "Vratěnín",
    "Latitude": 48.903727,
    "Longitude": 15.597175,
    "IsPublic": true,
    "LineList": "816,830"
  },
  {
    "StopID": 18701,
    "Zone": 877,
    "Name": "Dešná",
    "Latitude": 48.958371,
    "Longitude": 15.546522,
    "IsPublic": true,
    "LineList": "830"
  },
  {
    "StopID": 18709,
    "Zone": 877,
    "Name": "Drosendorf, Altstadt",
    "Latitude": 48.868018,
    "Longitude": 15.627482,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 18710,
    "Zone": 877,
    "Name": "Drosendorf, Schulen",
    "Latitude": 48.864879,
    "Longitude": 15.622532,
    "IsPublic": true,
    "LineList": "816"
  },
  {
    "StopID": 19000,
    "Zone": 900,
    "Name": "Annenská",
    "Latitude": 48.848079,
    "Longitude": 17.126722,
    "IsPublic": true,
    "LineList": "902,910"
  },
  {
    "StopID": 19001,
    "Zone": 900,
    "Name": "Hodonín, a.n.",
    "Latitude": 48.854536,
    "Longitude": 17.121489,
    "IsPublic": true,
    "LineList": "109,133,135,139,149,556,572,663,664,901,904,910,911,912,913"
  },
  {
    "StopID": 19002,
    "Zone": 900,
    "Name": "Hodonín, Brněnská",
    "Latitude": 48.862542,
    "Longitude": 17.118805,
    "IsPublic": true,
    "LineList": "109,663,901,904"
  },
  {
    "StopID": 19003,
    "Zone": 900,
    "Name": "Hodonín, cihelna",
    "Latitude": 48.872107,
    "Longitude": 17.146554,
    "IsPublic": true,
    "LineList": "664,912"
  },
  {
    "StopID": 19004,
    "Zone": 900,
    "Name": "Hodonín, Černý most",
    "Latitude": 48.866437,
    "Longitude": 17.142114,
    "IsPublic": true,
    "LineList": "664,912"
  },
  {
    "StopID": 19005,
    "Zone": 900,
    "Name": "Hodonín, Kapřiska",
    "Latitude": 48.852412,
    "Longitude": 17.106143,
    "IsPublic": true,
    "LineList": "556,572,904,913"
  },
  {
    "StopID": 19006,
    "Zone": 900,
    "Name": "Kapřiska, ryb.",
    "Latitude": 48.847976,
    "Longitude": 17.092638,
    "IsPublic": true,
    "LineList": "556,572,904,913"
  },
  {
    "StopID": 19007,
    "Zone": 900,
    "Name": "Hodonín, lázně",
    "Latitude": 48.862782,
    "Longitude": 17.140622,
    "IsPublic": true,
    "LineList": "664,912"
  },
  {
    "StopID": 19008,
    "Zone": 900,
    "Name": "Hodonín, nem.láz.",
    "Latitude": 48.862896,
    "Longitude": 17.146339,
    "IsPublic": true,
    "LineList": "901,904,911"
  },
  {
    "StopID": 19009,
    "Zone": 900,
    "Name": "Hodonín, Pánov",
    "Latitude": 48.882663,
    "Longitude": 17.147456,
    "IsPublic": true,
    "LineList": "664,912"
  },
  {
    "StopID": 19010,
    "Zone": 912,
    "Name": "Hodonín, Písečný, farma",
    "Latitude": 48.850152,
    "Longitude": 17.067132,
    "IsPublic": true,
    "LineList": "556,913"
  },
  {
    "StopID": 19011,
    "Zone": 900,
    "Name": "Hodonín, restaurace Morava",
    "Latitude": 48.855484,
    "Longitude": 17.133591,
    "IsPublic": true,
    "LineList": "664,901,904,911,912"
  },
  {
    "StopID": 19012,
    "Zone": 900,
    "Name": "Hodonín, STS",
    "Latitude": 48.871168,
    "Longitude": 17.116543,
    "IsPublic": true,
    "LineList": "109,663"
  },
  {
    "StopID": 19013,
    "Zone": 900,
    "Name": "Hodonín, u podjezdu",
    "Latitude": 48.851049,
    "Longitude": 17.113790,
    "IsPublic": true,
    "LineList": "556,572,901,904,913"
  },
  {
    "StopID": 19014,
    "Zone": 900,
    "Name": "Hodonín, vodárna",
    "Latitude": 48.867785,
    "Longitude": 17.164752,
    "IsPublic": true,
    "LineList": "911"
  },
  {
    "StopID": 19015,
    "Zone": 900,
    "Name": "Hodonín, Zbrod",
    "Latitude": 48.887740,
    "Longitude": 17.064662,
    "IsPublic": true,
    "LineList": "109"
  },
  {
    "StopID": 19016,
    "Zone": 900,
    "Name": "Hodonín, Bažantnice I",
    "Latitude": 48.856263,
    "Longitude": 17.111192,
    "IsPublic": true,
    "LineList": "901,902,903,904"
  },
  {
    "StopID": 19017,
    "Zone": 900,
    "Name": "Hodonín, Bažantnice II",
    "Latitude": 48.858487,
    "Longitude": 17.109885,
    "IsPublic": true,
    "LineList": "901,902,903,904"
  },
  {
    "StopID": 19018,
    "Zone": 900,
    "Name": "Bažantnice III",
    "Latitude": 48.860257,
    "Longitude": 17.114120,
    "IsPublic": true,
    "LineList": "901,902,903,904"
  },
  {
    "StopID": 19019,
    "Zone": 900,
    "Name": "Hodonín, Bažantnice, penzion",
    "Latitude": 48.853255,
    "Longitude": 17.109568,
    "IsPublic": true,
    "LineList": "901,902,903,904"
  },
  {
    "StopID": 19020,
    "Zone": 900,
    "Name": "Hodonín, Bezručova",
    "Latitude": 48.858547,
    "Longitude": 17.121800,
    "IsPublic": true,
    "LineList": "901,902,903,904"
  },
  {
    "StopID": 19021,
    "Zone": 900,
    "Name": "Hodonín, Brandlova",
    "Latitude": 48.862857,
    "Longitude": 17.140240,
    "IsPublic": true,
    "LineList": "903"
  },
  {
    "StopID": 19022,
    "Zone": 900,
    "Name": "Hodonín, Bažantnice, cihelna",
    "Latitude": 48.861242,
    "Longitude": 17.117698,
    "IsPublic": true,
    "LineList": "901,902,903,904"
  },
  {
    "StopID": 19023,
    "Zone": 900,
    "Name": "Hodonín, EHO",
    "Latitude": 48.845498,
    "Longitude": 17.122375,
    "IsPublic": true,
    "LineList": "902"
  },
  {
    "StopID": 19024,
    "Zone": 900,
    "Name": "Hodonín, hřbitov",
    "Latitude": 48.863108,
    "Longitude": 17.153057,
    "IsPublic": true,
    "LineList": "901,904"
  },
  {
    "StopID": 19025,
    "Zone": 900,
    "Name": "Hodonín, Albert",
    "Latitude": 48.852425,
    "Longitude": 17.117172,
    "IsPublic": true,
    "LineList": "901,904"
  },
  {
    "StopID": 19026,
    "Zone": 900,
    "Name": "Hodonín, Janáčkova",
    "Latitude": 48.858077,
    "Longitude": 17.129610,
    "IsPublic": true,
    "LineList": "903"
  },
  {
    "StopID": 19027,
    "Zone": 900,
    "Name": "Hodonín, k zahradám",
    "Latitude": 48.843735,
    "Longitude": 17.112900,
    "IsPublic": true,
    "LineList": "902"
  },
  {
    "StopID": 19028,
    "Zone": 900,
    "Name": "Hodonín, Kapřiska",
    "Latitude": 48.845175,
    "Longitude": 17.092877,
    "IsPublic": true,
    "LineList": "904"
  },
  {
    "StopID": 19029,
    "Zone": 900,
    "Name": "Hodonín, kulturní dům",
    "Latitude": 48.846128,
    "Longitude": 17.125783,
    "IsPublic": true,
    "LineList": "902"
  },
  {
    "StopID": 19030,
    "Zone": 900,
    "Name": "Hodonín, Luční",
    "Latitude": 48.856085,
    "Longitude": 17.137400,
    "IsPublic": true,
    "LineList": "903"
  },
  {
    "StopID": 19031,
    "Zone": 900,
    "Name": "Masaryk. n. OD IRO",
    "Latitude": 48.849582,
    "Longitude": 17.128513,
    "IsPublic": true,
    "LineList": "901,904"
  },
  {
    "StopID": 19032,
    "Zone": 900,
    "Name": "Hodonín, Masarykovo náměstí, pojišťovna",
    "Latitude": 48.848782,
    "Longitude": 17.128967,
    "IsPublic": true,
    "LineList": "901,902,903,904"
  },
  {
    "StopID": 19033,
    "Zone": 900,
    "Name": "Hodonín, MDO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19034,
    "Zone": 900,
    "Name": "Hodonín, Měšťanská",
    "Latitude": 48.851863,
    "Longitude": 17.130710,
    "IsPublic": true,
    "LineList": "901,904"
  },
  {
    "StopID": 19035,
    "Zone": 900,
    "Name": "Hodonín, Na Pískách",
    "Latitude": 48.868492,
    "Longitude": 17.120748,
    "IsPublic": true,
    "LineList": "901,904"
  },
  {
    "StopID": 19036,
    "Zone": 900,
    "Name": "Hodonín, Nesyt, farma",
    "Latitude": 48.839363,
    "Longitude": 17.104382,
    "IsPublic": true,
    "LineList": "902"
  },
  {
    "StopID": 19037,
    "Zone": 900,
    "Name": "Hodonín, obchodní centrum u cukrovaru",
    "Latitude": 48.854022,
    "Longitude": 17.118650,
    "IsPublic": true,
    "LineList": "901,904"
  },
  {
    "StopID": 19038,
    "Zone": 900,
    "Name": "Hodonín, Očovská, KD",
    "Latitude": 48.850752,
    "Longitude": 17.134757,
    "IsPublic": true,
    "LineList": "903"
  },
  {
    "StopID": 19039,
    "Zone": 900,
    "Name": "Hodonín, Rudolfa Filipa, sídliště",
    "Latitude": 48.859417,
    "Longitude": 17.137738,
    "IsPublic": true,
    "LineList": "901,903,904,911"
  },
  {
    "StopID": 19040,
    "Zone": 900,
    "Name": "Hodonín, Rodinova",
    "Latitude": 48.853053,
    "Longitude": 17.125915,
    "IsPublic": true,
    "LineList": "901,902,904"
  },
  {
    "StopID": 19041,
    "Zone": 900,
    "Name": "Hodonín, Rozmarýn",
    "Latitude": 48.859875,
    "Longitude": 17.135512,
    "IsPublic": true,
    "LineList": "903"
  },
  {
    "StopID": 19042,
    "Zone": 900,
    "Name": "Hodonín, Šumná",
    "Latitude": 48.851783,
    "Longitude": 17.137283,
    "IsPublic": true,
    "LineList": "903"
  },
  {
    "StopID": 19043,
    "Zone": 900,
    "Name": "Hodonín, Ústřední dílny",
    "Latitude": 48.845670,
    "Longitude": 17.118408,
    "IsPublic": true,
    "LineList": "902"
  },
  {
    "StopID": 19044,
    "Zone": 900,
    "Name": "Hodonín, žel.st.",
    "Latitude": 48.855748,
    "Longitude": 17.121715,
    "IsPublic": true,
    "LineList": "901,902,903,904"
  },
  {
    "StopID": 19100,
    "Zone": 912,
    "Name": "Dolní Bojanovice, dolní zastávka",
    "Latitude": 48.856074,
    "Longitude": 17.030055,
    "IsPublic": true,
    "LineList": "556,913"
  },
  {
    "StopID": 19101,
    "Zone": 912,
    "Name": "D. Bojanovice, h.z.",
    "Latitude": 48.861975,
    "Longitude": 17.026182,
    "IsPublic": true,
    "LineList": "913"
  },
  {
    "StopID": 19102,
    "Zone": 910,
    "Name": "Mutěnice, drůbežárna",
    "Latitude": 48.915561,
    "Longitude": 17.048500,
    "IsPublic": true,
    "LineList": "159"
  },
  {
    "StopID": 19103,
    "Zone": 910,
    "Name": "Mutěnice, křižovatka",
    "Latitude": 48.904577,
    "Longitude": 17.028731,
    "IsPublic": true,
    "LineList": "109,159"
  },
  {
    "StopID": 19104,
    "Zone": 910,
    "Name": "Mutěnice, škola",
    "Latitude": 48.907585,
    "Longitude": 17.019059,
    "IsPublic": true,
    "LineList": "109,159"
  },
  {
    "StopID": 19105,
    "Zone": 910,
    "Name": "Mutěnice, u mlýna",
    "Latitude": 48.907723,
    "Longitude": 17.033962,
    "IsPublic": true,
    "LineList": "159"
  },
  {
    "StopID": 19106,
    "Zone": 912,
    "Name": "Nový Poddvorov, obecní úřad",
    "Latitude": 48.870108,
    "Longitude": 16.964092,
    "IsPublic": true,
    "LineList": "913"
  },
  {
    "StopID": 19107,
    "Zone": 912,
    "Name": "Nový Poddvorov, rozcestí",
    "Latitude": 48.875901,
    "Longitude": 16.975028,
    "IsPublic": true,
    "LineList": "913"
  },
  {
    "StopID": 19108,
    "Zone": 912,
    "Name": "Starý Poddvorov, Čekačka",
    "Latitude": 48.875976,
    "Longitude": 16.998020,
    "IsPublic": true,
    "LineList": "913"
  },
  {
    "StopID": 19109,
    "Zone": 912,
    "Name": "Starý Poddvorov, hřiště",
    "Latitude": 48.881437,
    "Longitude": 16.988943,
    "IsPublic": true,
    "LineList": "913"
  },
  {
    "StopID": 19110,
    "Zone": 912,
    "Name": "Starý Poddvorov, obec",
    "Latitude": 48.878469,
    "Longitude": 16.981495,
    "IsPublic": true,
    "LineList": "913"
  },
  {
    "StopID": 19111,
    "Zone": 912,
    "Name": "Hrušky",
    "Latitude": 48.794166,
    "Longitude": 16.970586,
    "IsPublic": true,
    "LineList": "573"
  },
  {
    "StopID": 19113,
    "Zone": 912,
    "Name": "Hrušky, motorest",
    "Latitude": 48.786870,
    "Longitude": 16.950378,
    "IsPublic": true,
    "LineList": "573"
  },
  {
    "StopID": 19114,
    "Zone": 912,
    "Name": "Josefov, u kostela",
    "Latitude": 48.839180,
    "Longitude": 17.009504,
    "IsPublic": true,
    "LineList": "556"
  },
  {
    "StopID": 19115,
    "Zone": 912,
    "Name": "Lužice, zdravotní středisko",
    "Latitude": 48.841712,
    "Longitude": 17.073183,
    "IsPublic": true,
    "LineList": "556,572"
  },
  {
    "StopID": 19116,
    "Zone": 912,
    "Name": "Lužice, rozcestí",
    "Latitude": 48.844704,
    "Longitude": 17.082710,
    "IsPublic": true,
    "LineList": "556,572,913"
  },
  {
    "StopID": 19117,
    "Zone": 912,
    "Name": "Lužice, u školy",
    "Latitude": 48.837399,
    "Longitude": 17.069540,
    "IsPublic": true,
    "LineList": "556,572"
  },
  {
    "StopID": 19118,
    "Zone": 912,
    "Name": "Lužice, pošta",
    "Latitude": 48.831782,
    "Longitude": 17.067122,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 19119,
    "Zone": 912,
    "Name": "Lužice, železniční stanice",
    "Latitude": 48.828193,
    "Longitude": 17.062245,
    "IsPublic": true,
    "LineList": "139,572"
  },
  {
    "StopID": 19120,
    "Zone": 912,
    "Name": "Mikulčice, cihelna",
    "Latitude": 48.816452,
    "Longitude": 17.047072,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 19121,
    "Zone": 912,
    "Name": "Mikulčice, důl Mír",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19122,
    "Zone": 912,
    "Name": "Mikulčice, hřbitov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19123,
    "Zone": 912,
    "Name": "Mikulčice, obecní úřad",
    "Latitude": 48.817186,
    "Longitude": 17.051169,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 19124,
    "Zone": 912,
    "Name": "Mikulčice, Těšice",
    "Latitude": 48.821502,
    "Longitude": 17.059038,
    "IsPublic": true,
    "LineList": "572"
  },
  {
    "StopID": 19125,
    "Zone": 912,
    "Name": "Moravská Nová Ves, Jednota",
    "Latitude": 48.807628,
    "Longitude": 17.008481,
    "IsPublic": true,
    "LineList": "573"
  },
  {
    "StopID": 19126,
    "Zone": 912,
    "Name": "Moravská Nová Ves, křižovatka",
    "Latitude": 48.802639,
    "Longitude": 17.014648,
    "IsPublic": true,
    "LineList": "572,573"
  },
  {
    "StopID": 19127,
    "Zone": 912,
    "Name": "Moravská Nová Ves, obecní úřad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19128,
    "Zone": 912,
    "Name": "Moravská Nová Ves, ZD",
    "Latitude": 48.799726,
    "Longitude": 17.008258,
    "IsPublic": true,
    "LineList": "573"
  },
  {
    "StopID": 19129,
    "Zone": 912,
    "Name": "Mor. Nová Ves, ž.s.",
    "Latitude": 48.799988,
    "Longitude": 17.021595,
    "IsPublic": true,
    "LineList": "135,139,572,573"
  },
  {
    "StopID": 19130,
    "Zone": 912,
    "Name": "Prušánky, na konci",
    "Latitude": 48.830442,
    "Longitude": 16.986932,
    "IsPublic": true,
    "LineList": "556"
  },
  {
    "StopID": 19131,
    "Zone": 912,
    "Name": "Prušánky, obecní úřad",
    "Latitude": 48.829005,
    "Longitude": 16.981547,
    "IsPublic": true,
    "LineList": "556,573"
  },
  {
    "StopID": 19132,
    "Zone": 912,
    "Name": "Prušánky, u mlýna",
    "Latitude": 48.831712,
    "Longitude": 16.971945,
    "IsPublic": true,
    "LineList": "556"
  },
  {
    "StopID": 19133,
    "Zone": 915,
    "Name": "Rohatec, Kolonie, Maryša",
    "Latitude": 48.888626,
    "Longitude": 17.208227,
    "IsPublic": true,
    "LineList": "159,911"
  },
  {
    "StopID": 19134,
    "Zone": 915,
    "Name": "Rohatec, Kolonie, rozc. k žel. stanici",
    "Latitude": 48.893762,
    "Longitude": 17.202142,
    "IsPublic": true,
    "LineList": "159"
  },
  {
    "StopID": 19135,
    "Zone": 915,
    "Name": "Rohatec, na kopci",
    "Latitude": 48.887503,
    "Longitude": 17.189532,
    "IsPublic": true,
    "LineList": "911"
  },
  {
    "StopID": 19136,
    "Zone": 915,
    "Name": "Rohatec, náměstí",
    "Latitude": 48.880260,
    "Longitude": 17.181564,
    "IsPublic": true,
    "LineList": "911"
  },
  {
    "StopID": 19137,
    "Zone": 915,
    "Name": "Rohatec, Smíchov",
    "Latitude": 48.875119,
    "Longitude": 17.178045,
    "IsPublic": true,
    "LineList": "911"
  },
  {
    "StopID": 19138,
    "Zone": 915,
    "Name": "Rohatec, Soboňky",
    "Latitude": 48.895421,
    "Longitude": 17.218332,
    "IsPublic": true,
    "LineList": "159,911"
  },
  {
    "StopID": 19139,
    "Zone": 915,
    "Name": "Rohatec, u školy",
    "Latitude": 48.876334,
    "Longitude": 17.181989,
    "IsPublic": true,
    "LineList": "911"
  },
  {
    "StopID": 19140,
    "Zone": 917,
    "Name": "Dubňany, kemp Josef",
    "Latitude": 48.930337,
    "Longitude": 17.098069,
    "IsPublic": true,
    "LineList": "663"
  },
  {
    "StopID": 19141,
    "Zone": 917,
    "Name": "Dubňany, Horní Huť",
    "Latitude": 48.926363,
    "Longitude": 17.088070,
    "IsPublic": true,
    "LineList": "663"
  },
  {
    "StopID": 19142,
    "Zone": 917,
    "Name": "Dubňany, Jarohněvice",
    "Latitude": 48.924738,
    "Longitude": 17.075872,
    "IsPublic": true,
    "LineList": "159,663"
  },
  {
    "StopID": 19143,
    "Zone": 917,
    "Name": "Dubňany, kaplička",
    "Latitude": 48.916177,
    "Longitude": 17.089454,
    "IsPublic": true,
    "LineList": "159,663"
  },
  {
    "StopID": 19144,
    "Zone": 917,
    "Name": "Dubňany, kostel",
    "Latitude": 48.922912,
    "Longitude": 17.107818,
    "IsPublic": true,
    "LineList": "159,663"
  },
  {
    "StopID": 19145,
    "Zone": 917,
    "Name": "Dubňany, náměstí",
    "Latitude": 48.920184,
    "Longitude": 17.102718,
    "IsPublic": true,
    "LineList": "159,663"
  },
  {
    "StopID": 19146,
    "Zone": 917,
    "Name": "Dubňany, obchodní dům",
    "Latitude": 48.918587,
    "Longitude": 17.099904,
    "IsPublic": true,
    "LineList": "159,663"
  },
  {
    "StopID": 19147,
    "Zone": 917,
    "Name": "Dubňany, pivnice",
    "Latitude": 48.916404,
    "Longitude": 17.096321,
    "IsPublic": true,
    "LineList": "159,663"
  },
  {
    "StopID": 19148,
    "Zone": 917,
    "Name": "Dubňany, rozcestí k železniční stanici",
    "Latitude": 48.920718,
    "Longitude": 17.073278,
    "IsPublic": true,
    "LineList": "159,663"
  },
  {
    "StopID": 19149,
    "Zone": 917,
    "Name": "Dubňany, škola",
    "Latitude": 48.911026,
    "Longitude": 17.100696,
    "IsPublic": true,
    "LineList": "663"
  },
  {
    "StopID": 19150,
    "Zone": 917,
    "Name": "Dubňany, školka",
    "Latitude": 48.917089,
    "Longitude": 17.093408,
    "IsPublic": true,
    "LineList": "663"
  },
  {
    "StopID": 19151,
    "Zone": 917,
    "Name": "Dubňany, u mlýna",
    "Latitude": 48.915063,
    "Longitude": 17.098965,
    "IsPublic": true,
    "LineList": "663"
  },
  {
    "StopID": 19152,
    "Zone": 917,
    "Name": "Dubňany, u vodárny",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19153,
    "Zone": 917,
    "Name": "Dubňany, učiliště",
    "Latitude": 48.917788,
    "Longitude": 17.084938,
    "IsPublic": true,
    "LineList": "159,663"
  },
  {
    "StopID": 19154,
    "Zone": 917,
    "Name": "Ratíškovice",
    "Latitude": 48.920918,
    "Longitude": 17.161616,
    "IsPublic": true,
    "LineList": "159,664,912"
  },
  {
    "StopID": 19155,
    "Zone": 917,
    "Name": "Ratíškovice, drůbežárna",
    "Latitude": 48.931656,
    "Longitude": 17.168898,
    "IsPublic": true,
    "LineList": "664,912"
  },
  {
    "StopID": 19156,
    "Zone": 917,
    "Name": "Ratíškovice, rozcestí Tomáš",
    "Latitude": 48.927789,
    "Longitude": 17.158334,
    "IsPublic": true,
    "LineList": "664"
  },
  {
    "StopID": 19157,
    "Zone": 917,
    "Name": "Ratíškovice, důl Vlasta",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19158,
    "Zone": 917,
    "Name": "Ratíškovice, Hradčany",
    "Latitude": 48.917524,
    "Longitude": 17.170129,
    "IsPublic": true,
    "LineList": "159"
  },
  {
    "StopID": 19159,
    "Zone": 917,
    "Name": "Ratíškovice, U Hájenky",
    "Latitude": 48.915320,
    "Longitude": 17.160521,
    "IsPublic": true,
    "LineList": "664,912"
  },
  {
    "StopID": 19160,
    "Zone": 917,
    "Name": "Ratíškovice, u Svatého Jána",
    "Latitude": 48.923634,
    "Longitude": 17.168248,
    "IsPublic": true,
    "LineList": "664,912"
  },
  {
    "StopID": 19161,
    "Zone": 917,
    "Name": "Vacenovice",
    "Latitude": 48.945309,
    "Longitude": 17.174035,
    "IsPublic": true,
    "LineList": "664,912"
  },
  {
    "StopID": 19162,
    "Zone": 917,
    "Name": "Vacenovice, stadion",
    "Latitude": 48.939542,
    "Longitude": 17.170668,
    "IsPublic": true,
    "LineList": "664,912"
  },
  {
    "StopID": 19163,
    "Zone": 917,
    "Name": "Vacenovice, dolní konec",
    "Latitude": 48.953116,
    "Longitude": 17.175728,
    "IsPublic": true,
    "LineList": "912"
  },
  {
    "StopID": 19164,
    "Zone": 917,
    "Name": "Ratíškovice, farma",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19165,
    "Zone": 915,
    "Name": "Holíč, Sasinkova ulica",
    "Latitude": 48.814305,
    "Longitude": 17.157929,
    "IsPublic": true,
    "LineList": "910"
  },
  {
    "StopID": 19166,
    "Zone": 915,
    "Name": "Holíč, kníhkupectvo Bystrický",
    "Latitude": 48.819640,
    "Longitude": 17.163558,
    "IsPublic": true,
    "LineList": "910"
  },
  {
    "StopID": 19167,
    "Zone": 915,
    "Name": "Vrádište, rázcestie",
    "Latitude": 48.828336,
    "Longitude": 17.189512,
    "IsPublic": true,
    "LineList": "910"
  },
  {
    "StopID": 19168,
    "Zone": 915,
    "Name": "Skalica, rázcestie k železničnej stanici",
    "Latitude": 48.846274,
    "Longitude": 17.223137,
    "IsPublic": true,
    "LineList": "910"
  },
  {
    "StopID": 19169,
    "Zone": 915,
    "Name": "Skalica, železničná stanica",
    "Latitude": 48.850250,
    "Longitude": 17.219242,
    "IsPublic": true,
    "LineList": "910"
  },
  {
    "StopID": 19170,
    "Zone": 915,
    "Name": "Kátov, materská škôlka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19171,
    "Zone": 915,
    "Name": "Skalica, Daňový úrad",
    "Latitude": 48.840196,
    "Longitude": 17.216378,
    "IsPublic": true,
    "LineList": "910"
  },
  {
    "StopID": 19172,
    "Zone": 917,
    "Name": "Dubňany, ORFUS",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19173,
    "Zone": 915,
    "Name": "Skalica, Mallého ulica",
    "Latitude": 48.843244,
    "Longitude": 17.222585,
    "IsPublic": true,
    "LineList": "910"
  },
  {
    "StopID": 19174,
    "Zone": 915,
    "Name": "Skalica, čerpacia stanica",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19175,
    "Zone": 912,
    "Name": "Mikulčice, hradiště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19200,
    "Zone": 925,
    "Name": "Petrov",
    "Latitude": 48.881746,
    "Longitude": 17.277334,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19201,
    "Zone": 925,
    "Name": "Radějov",
    "Latitude": 48.857631,
    "Longitude": 17.346749,
    "IsPublic": true,
    "LineList": "920"
  },
  {
    "StopID": 19202,
    "Zone": 925,
    "Name": "Radějov, chaty",
    "Latitude": 48.853651,
    "Longitude": 17.359611,
    "IsPublic": true,
    "LineList": "920"
  },
  {
    "StopID": 19203,
    "Zone": 925,
    "Name": "Radějov, škola",
    "Latitude": 48.861993,
    "Longitude": 17.340142,
    "IsPublic": true,
    "LineList": "920"
  },
  {
    "StopID": 19204,
    "Zone": 925,
    "Name": "Strážnice, ATC",
    "Latitude": 48.909397,
    "Longitude": 17.310663,
    "IsPublic": true,
    "LineList": "665"
  },
  {
    "StopID": 19205,
    "Zone": 925,
    "Name": "Strážnice, aut. st.",
    "Latitude": 48.898014,
    "Longitude": 17.316355,
    "IsPublic": true,
    "LineList": "149,665,910,911,920,931"
  },
  {
    "StopID": 19206,
    "Zone": 925,
    "Name": "Strážnice, kulturní dům",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19207,
    "Zone": 925,
    "Name": "Strážnice, náměstí 17. listopadu",
    "Latitude": 48.902428,
    "Longitude": 17.318189,
    "IsPublic": true,
    "LineList": "665"
  },
  {
    "StopID": 19208,
    "Zone": 925,
    "Name": "Strážnice, Radějovská",
    "Latitude": 48.893522,
    "Longitude": 17.312648,
    "IsPublic": true,
    "LineList": "920"
  },
  {
    "StopID": 19209,
    "Zone": 925,
    "Name": "Strážnice, Úprkova",
    "Latitude": 48.903017,
    "Longitude": 17.319510,
    "IsPublic": true,
    "LineList": "911,931"
  },
  {
    "StopID": 19210,
    "Zone": 925,
    "Name": "Strážnice, Skalická brána",
    "Latitude": 48.896062,
    "Longitude": 17.304558,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19211,
    "Zone": 925,
    "Name": "Strážnice, škola",
    "Latitude": 48.898541,
    "Longitude": 17.306316,
    "IsPublic": true,
    "LineList": "911,920,931"
  },
  {
    "StopID": 19212,
    "Zone": 925,
    "Name": "Strážnice, Vinohrady",
    "Latitude": 48.883081,
    "Longitude": 17.320048,
    "IsPublic": true,
    "LineList": "920"
  },
  {
    "StopID": 19213,
    "Zone": 925,
    "Name": "Sudoměřice, křižovatka",
    "Latitude": 48.867644,
    "Longitude": 17.257454,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19214,
    "Zone": 925,
    "Name": "Sudoměřice, obecní úřad",
    "Latitude": 48.870862,
    "Longitude": 17.249534,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19215,
    "Zone": 925,
    "Name": "Tvarožná Lhota",
    "Latitude": 48.877349,
    "Longitude": 17.359450,
    "IsPublic": true,
    "LineList": "931"
  },
  {
    "StopID": 19216,
    "Zone": 925,
    "Name": "Tvarožná Lhota, Čertův mlýn",
    "Latitude": 48.859993,
    "Longitude": 17.379440,
    "IsPublic": true,
    "LineList": "920"
  },
  {
    "StopID": 19217,
    "Zone": 925,
    "Name": "Tvarožná Lhota, hájenka",
    "Latitude": 48.854042,
    "Longitude": 17.373078,
    "IsPublic": true,
    "LineList": "920"
  },
  {
    "StopID": 19218,
    "Zone": 925,
    "Name": "Tvar. Lhota, Lučina",
    "Latitude": 48.861960,
    "Longitude": 17.390067,
    "IsPublic": true,
    "LineList": "920"
  },
  {
    "StopID": 19219,
    "Zone": 925,
    "Name": "Strážnice, ZŠ Marie Kudeříkové",
    "Latitude": 48.900821,
    "Longitude": 17.312421,
    "IsPublic": true,
    "LineList": "920,931"
  },
  {
    "StopID": 19220,
    "Zone": 912,
    "Name": "Moravská Nová Ves, parkoviště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19221,
    "Zone": 912,
    "Name": "Mikulčice, Slovanské hradiště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19300,
    "Zone": 935,
    "Name": "Kozojídky",
    "Latitude": 48.919005,
    "Longitude": 17.398390,
    "IsPublic": true,
    "LineList": "930,931"
  },
  {
    "StopID": 19301,
    "Zone": 695,
    "Name": "Moravský Písek, Kolonie, rozcestí",
    "Latitude": 48.979605,
    "Longitude": 17.318146,
    "IsPublic": true,
    "LineList": "933,934"
  },
  {
    "StopID": 19302,
    "Zone": 695,
    "Name": "M. Písek, Kolonie, ž.s.",
    "Latitude": 48.977317,
    "Longitude": 17.314196,
    "IsPublic": true,
    "LineList": "135,139,148,933,934"
  },
  {
    "StopID": 19303,
    "Zone": 695,
    "Name": "Moravský Písek, mateřská škola",
    "Latitude": 48.985440,
    "Longitude": 17.331529,
    "IsPublic": true,
    "LineList": "933"
  },
  {
    "StopID": 19304,
    "Zone": 695,
    "Name": "Moravský Písek, obecní úřad",
    "Latitude": 48.990135,
    "Longitude": 17.331535,
    "IsPublic": true,
    "LineList": "933"
  },
  {
    "StopID": 19305,
    "Zone": 935,
    "Name": "Veselí nad Moravou, Bartolomějské nám.",
    "Latitude": 48.953692,
    "Longitude": 17.378590,
    "IsPublic": true,
    "LineList": "933,934"
  },
  {
    "StopID": 19306,
    "Zone": 935,
    "Name": "Veselí nad Moravou, Břestek",
    "Latitude": 48.961608,
    "Longitude": 17.392118,
    "IsPublic": true,
    "LineList": "933"
  },
  {
    "StopID": 19307,
    "Zone": 935,
    "Name": "Veselí nad Moravou, Hutník, u školy",
    "Latitude": 48.952326,
    "Longitude": 17.393376,
    "IsPublic": true,
    "LineList": "933"
  },
  {
    "StopID": 19308,
    "Zone": 935,
    "Name": "Veselí nad Moravou, Chaloupky",
    "Latitude": 48.955742,
    "Longitude": 17.385220,
    "IsPublic": true,
    "LineList": "933"
  },
  {
    "StopID": 19309,
    "Zone": 935,
    "Name": "Veselí nad Moravou, Lány, sídliště",
    "Latitude": 48.947606,
    "Longitude": 17.374718,
    "IsPublic": true,
    "LineList": "910,911,931"
  },
  {
    "StopID": 19310,
    "Zone": 935,
    "Name": "Veselí n/M., Milokošť",
    "Latitude": 48.966323,
    "Longitude": 17.397452,
    "IsPublic": true,
    "LineList": "146,933"
  },
  {
    "StopID": 19311,
    "Zone": 935,
    "Name": "Veselí nad Moravou, Purkyňova",
    "Latitude": 48.949856,
    "Longitude": 17.386874,
    "IsPublic": true,
    "LineList": "930,931"
  },
  {
    "StopID": 19312,
    "Zone": 935,
    "Name": "Veselí n/M., u polik.",
    "Latitude": 48.949597,
    "Longitude": 17.390094,
    "IsPublic": true,
    "LineList": "911,932,933,934"
  },
  {
    "StopID": 19313,
    "Zone": 935,
    "Name": "Veselí n/M., Náklí",
    "Latitude": 48.945255,
    "Longitude": 17.371014,
    "IsPublic": true,
    "LineList": "910,911,931"
  },
  {
    "StopID": 19314,
    "Zone": 935,
    "Name": "Veselí nad Moravou, Zarazice, restaurace",
    "Latitude": 48.941274,
    "Longitude": 17.365618,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19315,
    "Zone": 935,
    "Name": "Veselí nad Moravou, Zarazice, Crhounkova",
    "Latitude": 48.938283,
    "Longitude": 17.361322,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19316,
    "Zone": 935,
    "Name": "Veselí n/M., ž.s.",
    "Latitude": 48.949044,
    "Longitude": 17.382190,
    "IsPublic": true,
    "LineList": "126,146,149,285,910,911,930,931,932,933,934"
  },
  {
    "StopID": 19317,
    "Zone": 935,
    "Name": "Veselí nad Moravou, železárny",
    "Latitude": 48.946391,
    "Longitude": 17.387641,
    "IsPublic": true,
    "LineList": "930,931"
  },
  {
    "StopID": 19318,
    "Zone": 935,
    "Name": "Vnorovy, kopec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19319,
    "Zone": 935,
    "Name": "Vnorovy, Lidéřovice",
    "Latitude": 48.923309,
    "Longitude": 17.339484,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19320,
    "Zone": 935,
    "Name": "Vnorovy, lidový dům",
    "Latitude": 48.933415,
    "Longitude": 17.352495,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19321,
    "Zone": 935,
    "Name": "Vnorovy, přejezd",
    "Latitude": 48.936437,
    "Longitude": 17.356001,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19322,
    "Zone": 935,
    "Name": "Vnorovy, škola",
    "Latitude": 48.927054,
    "Longitude": 17.345296,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19323,
    "Zone": 935,
    "Name": "Žeraviny",
    "Latitude": 48.908663,
    "Longitude": 17.394697,
    "IsPublic": true,
    "LineList": "931"
  },
  {
    "StopID": 19324,
    "Zone": 935,
    "Name": "Kozojídky, ZD",
    "Latitude": 48.913690,
    "Longitude": 17.397294,
    "IsPublic": true,
    "LineList": "931"
  },
  {
    "StopID": 19325,
    "Zone": 935,
    "Name": "Vnorovy, obecní úřad",
    "Latitude": 48.931537,
    "Longitude": 17.351093,
    "IsPublic": true,
    "LineList": "910,911"
  },
  {
    "StopID": 19400,
    "Zone": 945,
    "Name": "Blatnice pod Sv. Antonínkem, křižovatka",
    "Latitude": 48.946098,
    "Longitude": 17.462502,
    "IsPublic": true,
    "LineList": "932"
  },
  {
    "StopID": 19401,
    "Zone": 945,
    "Name": "Blatnice pod Sv. Antonínkem, Vrbové",
    "Latitude": 48.946128,
    "Longitude": 17.470711,
    "IsPublic": true,
    "LineList": "932"
  },
  {
    "StopID": 19402,
    "Zone": 945,
    "Name": "Blatnička",
    "Latitude": 48.934524,
    "Longitude": 17.528391,
    "IsPublic": true,
    "LineList": "932"
  },
  {
    "StopID": 19403,
    "Zone": 945,
    "Name": "Hroznová Lhota, dolní konec",
    "Latitude": 48.901384,
    "Longitude": 17.419052,
    "IsPublic": true,
    "LineList": "931"
  },
  {
    "StopID": 19404,
    "Zone": 945,
    "Name": "Hroz. Lhota, kostel",
    "Latitude": 48.910888,
    "Longitude": 17.416282,
    "IsPublic": true,
    "LineList": "930,940"
  },
  {
    "StopID": 19405,
    "Zone": 945,
    "Name": "Hroznová Lhota, obecní úřad",
    "Latitude": 48.907058,
    "Longitude": 17.417175,
    "IsPublic": true,
    "LineList": "931"
  },
  {
    "StopID": 19406,
    "Zone": 945,
    "Name": "Hroznová Lhota, zdravotní středisko",
    "Latitude": 48.910180,
    "Longitude": 17.416182,
    "IsPublic": true,
    "LineList": "931"
  },
  {
    "StopID": 19407,
    "Zone": 945,
    "Name": "Kněždub",
    "Latitude": 48.885756,
    "Longitude": 17.387649,
    "IsPublic": true,
    "LineList": "931"
  },
  {
    "StopID": 19408,
    "Zone": 945,
    "Name": "Kněždub, obecní úřad",
    "Latitude": 48.886856,
    "Longitude": 17.396004,
    "IsPublic": true,
    "LineList": "931"
  },
  {
    "StopID": 19409,
    "Zone": 945,
    "Name": "Lipov",
    "Latitude": 48.907512,
    "Longitude": 17.456616,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19410,
    "Zone": 945,
    "Name": "Lipov, škola",
    "Latitude": 48.905000,
    "Longitude": 17.461045,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19411,
    "Zone": 945,
    "Name": "Lipov, Újezdy",
    "Latitude": 48.900817,
    "Longitude": 17.444352,
    "IsPublic": true,
    "LineList": "940"
  },
  {
    "StopID": 19412,
    "Zone": 945,
    "Name": "Lipov, závod",
    "Latitude": 48.908362,
    "Longitude": 17.470036,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19413,
    "Zone": 945,
    "Name": "Lipov, ZD",
    "Latitude": 48.905514,
    "Longitude": 17.447156,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19414,
    "Zone": 945,
    "Name": "Louka, obecní úřad",
    "Latitude": 48.915698,
    "Longitude": 17.486482,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19415,
    "Zone": 945,
    "Name": "Louka, u mostu",
    "Latitude": 48.912148,
    "Longitude": 17.496441,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19416,
    "Zone": 945,
    "Name": "Louka, ZD",
    "Latitude": 48.915639,
    "Longitude": 17.480564,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19417,
    "Zone": 945,
    "Name": "Tasov",
    "Latitude": 48.907059,
    "Longitude": 17.430081,
    "IsPublic": true,
    "LineList": "930,940"
  },
  {
    "StopID": 19418,
    "Zone": 935,
    "Name": "Uherský Ostroh, Dyas",
    "Latitude": 48.982076,
    "Longitude": 17.401028,
    "IsPublic": true,
    "LineList": "933"
  },
  {
    "StopID": 19420,
    "Zone": 935,
    "Name": "Uherský Ostroh, most",
    "Latitude": 48.986788,
    "Longitude": 17.393685,
    "IsPublic": true,
    "LineList": "933"
  },
  {
    "StopID": 19421,
    "Zone": 935,
    "Name": "Uherský Ostroh, náměstí",
    "Latitude": 48.985070,
    "Longitude": 17.388800,
    "IsPublic": true,
    "LineList": "933"
  },
  {
    "StopID": 19426,
    "Zone": 955,
    "Name": "Boršice u Blatnice",
    "Latitude": 48.934743,
    "Longitude": 17.571500,
    "IsPublic": true,
    "LineList": "932"
  },
  {
    "StopID": 19427,
    "Zone": 955,
    "Name": "Boršice u Blatnice, pošta",
    "Latitude": 48.932417,
    "Longitude": 17.574873,
    "IsPublic": true,
    "LineList": "932"
  },
  {
    "StopID": 19428,
    "Zone": 947,
    "Name": "Ostrožská Nová Ves, Novoveské lázně",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 19500,
    "Zone": 955,
    "Name": "Hrubá Vrbka",
    "Latitude": 48.871418,
    "Longitude": 17.477884,
    "IsPublic": true,
    "LineList": "940"
  },
  {
    "StopID": 19501,
    "Zone": 955,
    "Name": "Hrubá Vrbka, Bařiny",
    "Latitude": 48.871574,
    "Longitude": 17.485425,
    "IsPublic": true,
    "LineList": "935"
  },
  {
    "StopID": 19502,
    "Zone": 955,
    "Name": "Hrubá Vrbka, kostel",
    "Latitude": 48.869848,
    "Longitude": 17.479986,
    "IsPublic": true,
    "LineList": "935"
  },
  {
    "StopID": 19503,
    "Zone": 955,
    "Name": "Hrubá Vrbka, školka",
    "Latitude": 48.866392,
    "Longitude": 17.477453,
    "IsPublic": true,
    "LineList": "935,940"
  },
  {
    "StopID": 19504,
    "Zone": 955,
    "Name": "Hrubá Vrbka, ZD",
    "Latitude": 48.868061,
    "Longitude": 17.473469,
    "IsPublic": true,
    "LineList": "935,940"
  },
  {
    "StopID": 19505,
    "Zone": 955,
    "Name": "Javorník",
    "Latitude": 48.864170,
    "Longitude": 17.532550,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19506,
    "Zone": 955,
    "Name": "Javorník, Petruchovy mlýny",
    "Latitude": 48.869748,
    "Longitude": 17.546245,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19507,
    "Zone": 955,
    "Name": "Kuželov",
    "Latitude": 48.861393,
    "Longitude": 17.484533,
    "IsPublic": true,
    "LineList": "935,940"
  },
  {
    "StopID": 19508,
    "Zone": 955,
    "Name": "Kuželov, točna",
    "Latitude": 48.859785,
    "Longitude": 17.488888,
    "IsPublic": true,
    "LineList": "935,940"
  },
  {
    "StopID": 19509,
    "Zone": 955,
    "Name": "Malá Vrbka",
    "Latitude": 48.869208,
    "Longitude": 17.459224,
    "IsPublic": true,
    "LineList": "935,940"
  },
  {
    "StopID": 19510,
    "Zone": 955,
    "Name": "Malá Vrbka, zastávka",
    "Latitude": 48.867188,
    "Longitude": 17.461744,
    "IsPublic": true,
    "LineList": "935,940"
  },
  {
    "StopID": 19511,
    "Zone": 955,
    "Name": "Nová Lhota, Čerešníkovy mlýny",
    "Latitude": 48.878645,
    "Longitude": 17.600692,
    "IsPublic": true,
    "LineList": "930,932"
  },
  {
    "StopID": 19512,
    "Zone": 955,
    "Name": "Nová Lhota, dolní zastávka",
    "Latitude": 48.863308,
    "Longitude": 17.591053,
    "IsPublic": true,
    "LineList": "930,932"
  },
  {
    "StopID": 19513,
    "Zone": 955,
    "Name": "Nová Lhota, Fojtíkovy mlýny",
    "Latitude": 48.874877,
    "Longitude": 17.611700,
    "IsPublic": true,
    "LineList": "930,932"
  },
  {
    "StopID": 19514,
    "Zone": 955,
    "Name": "Nová Lhota, h.z.",
    "Latitude": 48.860783,
    "Longitude": 17.594056,
    "IsPublic": true,
    "LineList": "930,932"
  },
  {
    "StopID": 19515,
    "Zone": 955,
    "Name": "Nová Lhota, Mlýny, u kříže",
    "Latitude": 48.881335,
    "Longitude": 17.592835,
    "IsPublic": true,
    "LineList": "930,932"
  },
  {
    "StopID": 19516,
    "Zone": 955,
    "Name": "Nová Lhota, Vápenky",
    "Latitude": 48.874513,
    "Longitude": 17.629813,
    "IsPublic": true,
    "LineList": "930,932"
  },
  {
    "StopID": 19517,
    "Zone": 955,
    "Name": "Nová Lhota, Vápenky, hájenka",
    "Latitude": 48.872419,
    "Longitude": 17.622012,
    "IsPublic": true,
    "LineList": "930,932"
  },
  {
    "StopID": 19518,
    "Zone": 955,
    "Name": "Suchov",
    "Latitude": 48.911776,
    "Longitude": 17.561990,
    "IsPublic": true,
    "LineList": "932"
  },
  {
    "StopID": 19519,
    "Zone": 955,
    "Name": "Suchov, Podhajské mlýny",
    "Latitude": 48.874910,
    "Longitude": 17.568487,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19520,
    "Zone": 955,
    "Name": "Suchov, rozcestí",
    "Latitude": 48.927648,
    "Longitude": 17.554514,
    "IsPublic": true,
    "LineList": "932"
  },
  {
    "StopID": 19521,
    "Zone": 955,
    "Name": "Suchov, Suchovské mlýny",
    "Latitude": 48.884130,
    "Longitude": 17.578701,
    "IsPublic": true,
    "LineList": "930,932"
  },
  {
    "StopID": 19522,
    "Zone": 955,
    "Name": "Suchov, točna",
    "Latitude": 48.904775,
    "Longitude": 17.563885,
    "IsPublic": true,
    "LineList": "932"
  },
  {
    "StopID": 19523,
    "Zone": 955,
    "Name": "Suchov, Trnová",
    "Latitude": 48.894258,
    "Longitude": 17.575535,
    "IsPublic": true,
    "LineList": "932"
  },
  {
    "StopID": 19524,
    "Zone": 955,
    "Name": "Suchov, Zámečníkovy mlýny",
    "Latitude": 48.881958,
    "Longitude": 17.585640,
    "IsPublic": true,
    "LineList": "930,932"
  },
  {
    "StopID": 19525,
    "Zone": 955,
    "Name": "Velká nad Veličkou",
    "Latitude": 48.879410,
    "Longitude": 17.518443,
    "IsPublic": true,
    "LineList": "930,935"
  },
  {
    "StopID": 19526,
    "Zone": 955,
    "Name": "Velká nad Veličkou, pila",
    "Latitude": 48.868981,
    "Longitude": 17.522525,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19527,
    "Zone": 955,
    "Name": "Velká nad Veličkou, rozcestí Myjava",
    "Latitude": 48.874632,
    "Longitude": 17.519088,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19528,
    "Zone": 955,
    "Name": "Velká nad Veličkou, škola",
    "Latitude": 48.880480,
    "Longitude": 17.515289,
    "IsPublic": true,
    "LineList": "930,935"
  },
  {
    "StopID": 19529,
    "Zone": 955,
    "Name": "Velká n/V., záv.",
    "Latitude": 48.889841,
    "Longitude": 17.512837,
    "IsPublic": true,
    "LineList": "930,935"
  },
  {
    "StopID": 19530,
    "Zone": 955,
    "Name": "Velká n/V., ž.s.",
    "Latitude": 48.878849,
    "Longitude": 17.511073,
    "IsPublic": true,
    "LineList": "149,930,935"
  },
  {
    "StopID": 19531,
    "Zone": 955,
    "Name": "Velká nad Veličkou, Žilkův mlýn",
    "Latitude": 48.904389,
    "Longitude": 17.505433,
    "IsPublic": true,
    "LineList": "930"
  },
  {
    "StopID": 19532,
    "Zone": 957,
    "Name": "Kunovice, škola",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20001,
    "Zone": 818,
    "Name": "Hatě, CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20002,
    "Zone": 570,
    "Name": "Hevlín, CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20003,
    "Zone": 571,
    "Name": "Mikulov, CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20004,
    "Zone": 867,
    "Name": "Vratěnín, CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20005,
    "Zone": 900,
    "Name": "Hodonín, CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20006,
    "Zone": 585,
    "Name": "Lanžhot, CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20007,
    "Zone": 915,
    "Name": "Sudoměřice, CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20008,
    "Zone": 955,
    "Name": "Velká nad Veličkou, CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20009,
    "Zone": 582,
    "Name": "Valtice, Úvaly, CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20101,
    "Zone": 827,
    "Name": "Kleinhaugsdorf, ZOLL",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20102,
    "Zone": 580,
    "Name": "Laa an der Thaya, ZOLL",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20103,
    "Zone": 581,
    "Name": "Drasenhofen, ZOLL",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20104,
    "Zone": 877,
    "Name": "Oberthürnau, ZOLL",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20105,
    "Zone": 915,
    "Name": "Holíč, št.hr.CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20106,
    "Zone": 595,
    "Name": "Brodské, št.hr.CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20107,
    "Zone": 915,
    "Name": "Skalica, št. hr. CLO",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20108,
    "Zone": 965,
    "Name": "Vrbovce, št. hr. ZOLL",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20109,
    "Zone": 581,
    "Name": "Schrattenberg, ZOLL",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20201,
    "Zone": 0,
    "Name": "Malé Hradisko",
    "Latitude": 49.493145,
    "Longitude": 16.876292,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20202,
    "Zone": 0,
    "Name": "Malé Hradisko, Okluky",
    "Latitude": 49.498493,
    "Longitude": 16.907412,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20203,
    "Zone": 0,
    "Name": "Stínava",
    "Latitude": 49.495957,
    "Longitude": 16.930854,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20204,
    "Zone": 0,
    "Name": "Vícov",
    "Latitude": 49.487985,
    "Longitude": 16.961462,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20205,
    "Zone": 999,
    "Name": "Vícov, rozcestí k hájence",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20206,
    "Zone": 0,
    "Name": "Plumlov, Hamry",
    "Latitude": 49.470750,
    "Longitude": 16.968803,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20207,
    "Zone": 0,
    "Name": "Plumlov, Žárovice",
    "Latitude": 49.462260,
    "Longitude": 16.984820,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20208,
    "Zone": 0,
    "Name": "Plumlov, Soběsuky",
    "Latitude": 49.462524,
    "Longitude": 16.996119,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20209,
    "Zone": 0,
    "Name": "Plumlov",
    "Latitude": 49.465794,
    "Longitude": 17.015287,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20210,
    "Zone": 0,
    "Name": "Plumlov, přehrada",
    "Latitude": 49.470946,
    "Longitude": 17.026770,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20211,
    "Zone": 0,
    "Name": "Mostkovice, kino",
    "Latitude": 49.472392,
    "Longitude": 17.039886,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20212,
    "Zone": 0,
    "Name": "Mostkovice, pomník",
    "Latitude": 49.473076,
    "Longitude": 17.054156,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20213,
    "Zone": 0,
    "Name": "Prostějov, Krasice, rozcestí",
    "Latitude": 49.472260,
    "Longitude": 17.087386,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20214,
    "Zone": 0,
    "Name": "Prostějov, nemocnice",
    "Latitude": 49.475170,
    "Longitude": 17.089465,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20215,
    "Zone": 0,
    "Name": "Prostějov, Floriánské náměstí",
    "Latitude": 49.473215,
    "Longitude": 17.106459,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20216,
    "Zone": 0,
    "Name": "Prostějov, Hliníky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20217,
    "Zone": 0,
    "Name": "Prostějov, Svatoplukova DONA",
    "Latitude": 49.472640,
    "Longitude": 17.121691,
    "IsPublic": true,
    "LineList": "261"
  },
  {
    "StopID": 20218,
    "Zone": 0,
    "Name": "Prostějov, Žeranovská",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20219,
    "Zone": 0,
    "Name": "Prostějov, Plumlovská, sídliště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20220,
    "Zone": 0,
    "Name": "Brodek u Prostějova",
    "Latitude": 49.370408,
    "Longitude": 17.091042,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 20221,
    "Zone": 0,
    "Name": "Hradčany-Kobeřice, Kobeřice",
    "Latitude": 49.371833,
    "Longitude": 17.113586,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 20222,
    "Zone": 0,
    "Name": "Dobrochov",
    "Latitude": 49.387060,
    "Longitude": 17.099102,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 20223,
    "Zone": 0,
    "Name": "Dobrochov, pohostinství",
    "Latitude": 49.385576,
    "Longitude": 17.106075,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 20224,
    "Zone": 0,
    "Name": "Vranovice-Kelčice, Kelčice, pod mostem",
    "Latitude": 49.403115,
    "Longitude": 17.104593,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 20225,
    "Zone": 0,
    "Name": "Vranovice-Kelčice, Kelčice, motorest",
    "Latitude": 49.404252,
    "Longitude": 17.106657,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 20226,
    "Zone": 0,
    "Name": "Prostějov, Brněnská",
    "Latitude": 49.465154,
    "Longitude": 17.111538,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 20227,
    "Zone": 0,
    "Name": "Prostějov, Újezd",
    "Latitude": 49.471603,
    "Longitude": 17.117589,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 20228,
    "Zone": 0,
    "Name": "Prostějov, Lidická",
    "Latitude": 49.468033,
    "Longitude": 17.117021,
    "IsPublic": true,
    "LineList": "755"
  },
  {
    "StopID": 20229,
    "Zone": 0,
    "Name": "Prostějov, Okružní",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20230,
    "Zone": 0,
    "Name": "Litohoř",
    "Latitude": 49.066090,
    "Longitude": 15.769107,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20231,
    "Zone": 0,
    "Name": "Jakubov u Moravských Budějovic",
    "Latitude": 49.080677,
    "Longitude": 15.761564,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20232,
    "Zone": 0,
    "Name": "Martínkov, rozcestí",
    "Latitude": 49.100071,
    "Longitude": 15.730916,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20233,
    "Zone": 0,
    "Name": "Želetava, Horky",
    "Latitude": 49.126743,
    "Longitude": 15.696134,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20234,
    "Zone": 0,
    "Name": "Želetava, Šašovice, rozcestí",
    "Latitude": 49.133732,
    "Longitude": 15.685700,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20235,
    "Zone": 0,
    "Name": "Želetava",
    "Latitude": 49.142214,
    "Longitude": 15.672906,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20236,
    "Zone": 0,
    "Name": "Svojkovice, U anděla",
    "Latitude": 49.169895,
    "Longitude": 15.640387,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20237,
    "Zone": 0,
    "Name": "Markvartice, Kasárna",
    "Latitude": 49.181433,
    "Longitude": 15.631975,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20238,
    "Zone": 0,
    "Name": "Sedlatice, rozcestí",
    "Latitude": 49.197168,
    "Longitude": 15.621783,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20239,
    "Zone": 0,
    "Name": "Hladov",
    "Latitude": 49.216339,
    "Longitude": 15.611097,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20240,
    "Zone": 0,
    "Name": "Dlouhá Brtnice",
    "Latitude": 49.237730,
    "Longitude": 15.604424,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20241,
    "Zone": 0,
    "Name": "Stonařov",
    "Latitude": 49.281784,
    "Longitude": 15.586721,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20242,
    "Zone": 0,
    "Name": "Suchá, Prostředkovice",
    "Latitude": 49.293907,
    "Longitude": 15.580391,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20243,
    "Zone": 0,
    "Name": "Suchá",
    "Latitude": 49.301019,
    "Longitude": 15.578191,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20244,
    "Zone": 0,
    "Name": "Suchá, Beranovec",
    "Latitude": 49.317936,
    "Longitude": 15.575477,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20245,
    "Zone": 0,
    "Name": "Vílanec",
    "Latitude": 49.333865,
    "Longitude": 15.576633,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20246,
    "Zone": 0,
    "Name": "Jihlava, Znojemská",
    "Latitude": 49.389048,
    "Longitude": 15.593487,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20247,
    "Zone": 0,
    "Name": "Jihlava, aut.nádr.",
    "Latitude": 49.399603,
    "Longitude": 15.581149,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20248,
    "Zone": 0,
    "Name": "Markvartice",
    "Latitude": 49.176888,
    "Longitude": 15.617051,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20249,
    "Zone": 0,
    "Name": "Stará Říše",
    "Latitude": 49.177253,
    "Longitude": 15.595395,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20250,
    "Zone": 0,
    "Name": "Stará Říše, rozcestí Sedlatice",
    "Latitude": 49.194836,
    "Longitude": 15.605085,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20251,
    "Zone": 0,
    "Name": "Čížov",
    "Latitude": 49.352272,
    "Longitude": 15.583985,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20252,
    "Zone": 0,
    "Name": "Rančířov",
    "Latitude": 49.361325,
    "Longitude": 15.584339,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20253,
    "Zone": 0,
    "Name": "Jihlava, Ráj",
    "Latitude": 49.374104,
    "Longitude": 15.586048,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20254,
    "Zone": 0,
    "Name": "Jihlava, Hradební",
    "Latitude": 49.394395,
    "Longitude": 15.586505,
    "IsPublic": true,
    "LineList": "815"
  },
  {
    "StopID": 20374,
    "Zone": 0,
    "Name": "Prostějov, Svatoplukova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 20375,
    "Zone": 0,
    "Name": "Plumlov, Hamry, točna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 21001,
    "Zone": 999,
    "Name": "Náhradní doprava ČD",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 22101,
    "Zone": 215,
    "Name": "Babice nad Svitavou",
    "Latitude": 49.276693,
    "Longitude": 16.672920,
    "IsPublic": true,
    "LineList": "120"
  },
  {
    "StopID": 22301,
    "Zone": 235,
    "Name": "Dolní Lhota",
    "Latitude": 49.386917,
    "Longitude": 16.633978,
    "IsPublic": true,
    "LineList": "120"
  },
  {
    "StopID": 22302,
    "Zone": 235,
    "Name": "Blansko město",
    "Latitude": 49.361389,
    "Longitude": 16.638889,
    "IsPublic": true,
    "LineList": "120,125"
  },
  {
    "StopID": 22602,
    "Zone": 265,
    "Name": "Svitávka",
    "Latitude": 49.500067,
    "Longitude": 16.597500,
    "IsPublic": true,
    "LineList": "120"
  },
  {
    "StopID": 22701,
    "Zone": 275,
    "Name": "Zboněk",
    "Latitude": 49.520556,
    "Longitude": 16.584194,
    "IsPublic": true,
    "LineList": "120"
  },
  {
    "StopID": 22702,
    "Zone": 275,
    "Name": "Letovice zastávka",
    "Latitude": 49.534833,
    "Longitude": 16.577500,
    "IsPublic": true,
    "LineList": "120"
  },
  {
    "StopID": 22704,
    "Zone": 275,
    "Name": "Knínice u Boskovic",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 22802,
    "Zone": 285,
    "Name": "Moravská Chrastová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 22803,
    "Zone": 280,
    "Name": "Světlá u Boskovic",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 22901,
    "Zone": 295,
    "Name": "Březová nad Svitavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 22902,
    "Zone": 290,
    "Name": "Velké Opatovice",
    "Latitude": 49.611111,
    "Longitude": 16.690833,
    "IsPublic": true,
    "LineList": "121"
  },
  {
    "StopID": 22903,
    "Zone": 290,
    "Name": "Jevíčko",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 23601,
    "Zone": 360,
    "Name": "Věžná",
    "Latitude": 49.451547,
    "Longitude": 16.270316,
    "IsPublic": true,
    "LineList": "131"
  },
  {
    "StopID": 23801,
    "Zone": 380,
    "Name": "Rovné-Divišov",
    "Latitude": 49.547632,
    "Longitude": 16.172826,
    "IsPublic": true,
    "LineList": "131"
  },
  {
    "StopID": 24101,
    "Zone": 410,
    "Name": "Střelice",
    "Latitude": 49.153889,
    "Longitude": 16.483056,
    "IsPublic": true,
    "LineList": "140,141"
  },
  {
    "StopID": 24102,
    "Zone": 410,
    "Name": "Omice",
    "Latitude": 49.160556,
    "Longitude": 16.446944,
    "IsPublic": true,
    "LineList": "140"
  },
  {
    "StopID": 24103,
    "Zone": 410,
    "Name": "Ostopovice",
    "Latitude": 49.164803,
    "Longitude": 16.544451,
    "IsPublic": true,
    "LineList": "140"
  },
  {
    "StopID": 24201,
    "Zone": 425,
    "Name": "Rosice u Brna",
    "Latitude": 49.178455,
    "Longitude": 16.384590,
    "IsPublic": true,
    "LineList": "140"
  },
  {
    "StopID": 24202,
    "Zone": 427,
    "Name": "Radostice",
    "Latitude": 49.133611,
    "Longitude": 16.461944,
    "IsPublic": true,
    "LineList": "141"
  },
  {
    "StopID": 24203,
    "Zone": 427,
    "Name": "Silůvky",
    "Latitude": 49.108611,
    "Longitude": 16.462778,
    "IsPublic": true,
    "LineList": "141"
  },
  {
    "StopID": 24301,
    "Zone": 435,
    "Name": "Vysoké Popovice",
    "Latitude": 49.178333,
    "Longitude": 16.291111,
    "IsPublic": true,
    "LineList": "140"
  },
  {
    "StopID": 24302,
    "Zone": 437,
    "Name": "Budkovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 24401,
    "Zone": 446,
    "Name": "Kralice nad Oslavou",
    "Latitude": 49.193333,
    "Longitude": 16.204722,
    "IsPublic": true,
    "LineList": "140"
  },
  {
    "StopID": 24402,
    "Zone": 447,
    "Name": "Ivančice letovisko",
    "Latitude": 49.094167,
    "Longitude": 16.402250,
    "IsPublic": true,
    "LineList": "141"
  },
  {
    "StopID": 24403,
    "Zone": 447,
    "Name": "Ivančice město",
    "Latitude": 49.099167,
    "Longitude": 16.383722,
    "IsPublic": true,
    "LineList": "141"
  },
  {
    "StopID": 24501,
    "Zone": 459,
    "Name": "Bohutice",
    "Latitude": 48.987956,
    "Longitude": 16.356025,
    "IsPublic": true,
    "LineList": "141"
  },
  {
    "StopID": 25201,
    "Zone": 525,
    "Name": "Vojkovice nad Svratkou, žel. st.",
    "Latitude": 49.056208,
    "Longitude": 16.597445,
    "IsPublic": true,
    "LineList": "130"
  },
  {
    "StopID": 25401,
    "Zone": 545,
    "Name": "Pouzdřany",
    "Latitude": 48.942025,
    "Longitude": 16.630527,
    "IsPublic": true,
    "LineList": "130"
  },
  {
    "StopID": 25402,
    "Zone": 545,
    "Name": "Popice",
    "Latitude": 48.924332,
    "Longitude": 16.668084,
    "IsPublic": true,
    "LineList": "130"
  },
  {
    "StopID": 25501,
    "Zone": 555,
    "Name": "Rakvice",
    "Latitude": 48.866892,
    "Longitude": 16.821444,
    "IsPublic": true,
    "LineList": "132,135"
  },
  {
    "StopID": 25502,
    "Zone": 555,
    "Name": "Velké Pavlovice",
    "Latitude": 48.889850,
    "Longitude": 16.823672,
    "IsPublic": true,
    "LineList": "133"
  },
  {
    "StopID": 25503,
    "Zone": 555,
    "Name": "Velké Pavlovice zastávka",
    "Latitude": 48.901672,
    "Longitude": 16.822400,
    "IsPublic": true,
    "LineList": "133"
  },
  {
    "StopID": 25504,
    "Zone": 650,
    "Name": "Kobylí na Moravě",
    "Latitude": 48.934022,
    "Longitude": 16.881272,
    "IsPublic": true,
    "LineList": "133"
  },
  {
    "StopID": 25505,
    "Zone": 551,
    "Name": "Jevišovka",
    "Latitude": 48.820272,
    "Longitude": 16.467125,
    "IsPublic": true,
    "LineList": "128"
  },
  {
    "StopID": 25506,
    "Zone": 550,
    "Name": "Dolenice",
    "Latitude": 48.912200,
    "Longitude": 16.367822,
    "IsPublic": true,
    "LineList": "141"
  },
  {
    "StopID": 25507,
    "Zone": 550,
    "Name": "Břežany",
    "Latitude": 48.873106,
    "Longitude": 16.367539,
    "IsPublic": true,
    "LineList": "141"
  },
  {
    "StopID": 25601,
    "Zone": 561,
    "Name": "Březí",
    "Latitude": 48.812925,
    "Longitude": 16.554169,
    "IsPublic": true,
    "LineList": "128"
  },
  {
    "StopID": 25602,
    "Zone": 561,
    "Name": "Dobré Pole",
    "Latitude": 48.820008,
    "Longitude": 16.533833,
    "IsPublic": true,
    "LineList": "128"
  },
  {
    "StopID": 25603,
    "Zone": 560,
    "Name": "Pravice",
    "Latitude": 48.848689,
    "Longitude": 16.370211,
    "IsPublic": true,
    "LineList": "141"
  },
  {
    "StopID": 25604,
    "Zone": 560,
    "Name": "Hrabětice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 25701,
    "Zone": 582,
    "Name": "Sedlec u Mikulova",
    "Latitude": 48.774564,
    "Longitude": 16.699006,
    "IsPublic": true,
    "LineList": "128"
  },
  {
    "StopID": 25702,
    "Zone": 575,
    "Name": "Boří les",
    "Latitude": 48.738078,
    "Longitude": 16.866374,
    "IsPublic": true,
    "LineList": "128"
  },
  {
    "StopID": 25703,
    "Zone": 575,
    "Name": "Břeclav-přednádraží",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 25704,
    "Zone": 570,
    "Name": "Hevlín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 25801,
    "Zone": 582,
    "Name": "Valtice, žel. zast.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 25802,
    "Zone": 585,
    "Name": "Lanžhot",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 25901,
    "Zone": 595,
    "Name": "Brodské",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 25902,
    "Zone": 595,
    "Name": "Kúty",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 26101,
    "Zone": 610,
    "Name": "Újezd u Brna",
    "Latitude": 49.107297,
    "Longitude": 16.745564,
    "IsPublic": true,
    "LineList": "120,144"
  },
  {
    "StopID": 26102,
    "Zone": 610,
    "Name": "Hostěrádky-Rešov",
    "Latitude": 49.119722,
    "Longitude": 16.782500,
    "IsPublic": true,
    "LineList": "120"
  },
  {
    "StopID": 26103,
    "Zone": 610,
    "Name": "Blažovice",
    "Latitude": 49.163735,
    "Longitude": 16.798179,
    "IsPublic": true,
    "LineList": "146"
  },
  {
    "StopID": 26201,
    "Zone": 620,
    "Name": "Zbýšov",
    "Latitude": 49.132222,
    "Longitude": 16.806111,
    "IsPublic": true,
    "LineList": "120"
  },
  {
    "StopID": 26202,
    "Zone": 620,
    "Name": "Holubice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 26301,
    "Zone": 635,
    "Name": "Křižanovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 26401,
    "Zone": 645,
    "Name": "Bučovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 26501,
    "Zone": 645,
    "Name": "Nevojice",
    "Latitude": 49.136847,
    "Longitude": 17.047750,
    "IsPublic": true,
    "LineList": "146"
  },
  {
    "StopID": 26601,
    "Zone": 665,
    "Name": "Jestřabice",
    "Latitude": 49.088889,
    "Longitude": 17.113333,
    "IsPublic": true,
    "LineList": "126,146"
  },
  {
    "StopID": 26602,
    "Zone": 675,
    "Name": "Kyjov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 26603,
    "Zone": 675,
    "Name": "Kyjov zastávka",
    "Latitude": 49.003117,
    "Longitude": 17.124022,
    "IsPublic": true,
    "LineList": "126,146"
  },
  {
    "StopID": 26801,
    "Zone": 685,
    "Name": "Vlkoš",
    "Latitude": 48.987806,
    "Longitude": 17.163569,
    "IsPublic": true,
    "LineList": "126,146"
  },
  {
    "StopID": 26802,
    "Zone": 685,
    "Name": "Vracov",
    "Latitude": 48.976457,
    "Longitude": 17.221155,
    "IsPublic": true,
    "LineList": "126,146"
  },
  {
    "StopID": 26901,
    "Zone": 695,
    "Name": "Bzenec-Olšovec",
    "Latitude": 48.970217,
    "Longitude": 17.293339,
    "IsPublic": true,
    "LineList": "148"
  },
  {
    "StopID": 27301,
    "Zone": 730,
    "Name": "Luleč",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 27501,
    "Zone": 750,
    "Name": "Hoštice-Heroltice",
    "Latitude": 49.291389,
    "Longitude": 17.057778,
    "IsPublic": true,
    "LineList": "127"
  },
  {
    "StopID": 27502,
    "Zone": 750,
    "Name": "Chvalkovice na Hané",
    "Latitude": 49.321667,
    "Longitude": 17.111389,
    "IsPublic": true,
    "LineList": "127"
  },
  {
    "StopID": 27503,
    "Zone": 765,
    "Name": "Nezamyslice",
    "Latitude": 49.336000,
    "Longitude": 17.162500,
    "IsPublic": true,
    "LineList": "127,144,147"
  },
  {
    "StopID": 28001,
    "Zone": 800,
    "Name": "Znojmo-Nový Šaldorf",
    "Latitude": 48.820061,
    "Longitude": 16.044266,
    "IsPublic": true,
    "LineList": "137"
  },
  {
    "StopID": 28002,
    "Zone": 800,
    "Name": "Znojmo nemocnice",
    "Latitude": 48.865504,
    "Longitude": 16.048394,
    "IsPublic": true,
    "LineList": "138"
  },
  {
    "StopID": 28101,
    "Zone": 810,
    "Name": "Hodonice",
    "Latitude": 48.841514,
    "Longitude": 16.164403,
    "IsPublic": true,
    "LineList": "128"
  },
  {
    "StopID": 28102,
    "Zone": 810,
    "Name": "Dyje",
    "Latitude": 48.850047,
    "Longitude": 16.120500,
    "IsPublic": true,
    "LineList": "128"
  },
  {
    "StopID": 28103,
    "Zone": 815,
    "Name": "Citonice",
    "Latitude": 48.878906,
    "Longitude": 15.977467,
    "IsPublic": true,
    "LineList": "138"
  },
  {
    "StopID": 28401,
    "Zone": 845,
    "Name": "Blížkovice",
    "Latitude": 49.004292,
    "Longitude": 15.854364,
    "IsPublic": true,
    "LineList": "138"
  },
  {
    "StopID": 28501,
    "Zone": 845,
    "Name": "Vesce",
    "Latitude": 49.019071,
    "Longitude": 15.831277,
    "IsPublic": true,
    "LineList": "138"
  },
  {
    "StopID": 28502,
    "Zone": 855,
    "Name": "Moravské Budějovice",
    "Latitude": 49.057522,
    "Longitude": 15.809326,
    "IsPublic": true,
    "LineList": "138"
  },
  {
    "StopID": 29001,
    "Zone": 900,
    "Name": "Hodonín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 29002,
    "Zone": 755,
    "Name": "Ivanovice na Hané",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 29004,
    "Zone": 900,
    "Name": "Hodonín zastávka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 29101,
    "Zone": 912,
    "Name": "Hrušky zastávka",
    "Latitude": 48.787124,
    "Longitude": 16.981570,
    "IsPublic": true,
    "LineList": "139"
  },
  {
    "StopID": 29102,
    "Zone": 915,
    "Name": "Rohatec zastávka",
    "Latitude": 48.883090,
    "Longitude": 17.178111,
    "IsPublic": true,
    "LineList": "139,149"
  },
  {
    "StopID": 29103,
    "Zone": 915,
    "Name": "Rohatec",
    "Latitude": 48.892515,
    "Longitude": 17.197852,
    "IsPublic": true,
    "LineList": "139,149"
  },
  {
    "StopID": 29104,
    "Zone": 915,
    "Name": "Rohatec kolonie",
    "Latitude": 48.892642,
    "Longitude": 17.212111,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29105,
    "Zone": 910,
    "Name": "Mutěnice zastávka",
    "Latitude": 48.911986,
    "Longitude": 17.027008,
    "IsPublic": true,
    "LineList": "133"
  },
  {
    "StopID": 29106,
    "Zone": 910,
    "Name": "Mutěnice",
    "Latitude": 48.904678,
    "Longitude": 17.039875,
    "IsPublic": true,
    "LineList": "133"
  },
  {
    "StopID": 29201,
    "Zone": 925,
    "Name": "Petrov",
    "Latitude": 48.878911,
    "Longitude": 17.273703,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29202,
    "Zone": 925,
    "Name": "Sudoměřice nad Moravou",
    "Latitude": 48.871653,
    "Longitude": 17.243039,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29301,
    "Zone": 695,
    "Name": "Moravský Písek zastávka",
    "Latitude": 48.991257,
    "Longitude": 17.330117,
    "IsPublic": true,
    "LineList": "139"
  },
  {
    "StopID": 29302,
    "Zone": 935,
    "Name": "Veselí nad Moravou-Zarazice",
    "Latitude": 48.937236,
    "Longitude": 17.361306,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29303,
    "Zone": 935,
    "Name": "Vnorovy",
    "Latitude": 48.931508,
    "Longitude": 17.348464,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29304,
    "Zone": 935,
    "Name": "Veselí nad Moravou - Milokošť",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 29401,
    "Zone": 945,
    "Name": "Louka u Ostrohu",
    "Latitude": 48.912234,
    "Longitude": 17.484226,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29402,
    "Zone": 945,
    "Name": "Lipov",
    "Latitude": 48.909806,
    "Longitude": 17.457953,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29403,
    "Zone": 945,
    "Name": "Blatnice pod Sv. Antonínkem",
    "Latitude": 48.941163,
    "Longitude": 17.437706,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29404,
    "Zone": 935,
    "Name": "Uherský Ostroh",
    "Latitude": 48.982007,
    "Longitude": 17.403489,
    "IsPublic": true,
    "LineList": "126,146"
  },
  {
    "StopID": 29501,
    "Zone": 965,
    "Name": "Vrbovce",
    "Latitude": 48.824439,
    "Longitude": 17.516352,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29502,
    "Zone": 955,
    "Name": "Javorník nad Veličkou zastávka",
    "Latitude": 48.860000,
    "Longitude": 17.520833,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29503,
    "Zone": 955,
    "Name": "Vrbovce Gr.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 29504,
    "Zone": 965,
    "Name": "Vrbovce zastávka",
    "Latitude": 48.804784,
    "Longitude": 17.528690,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29601,
    "Zone": 965,
    "Name": "Brestovec",
    "Latitude": 48.786012,
    "Longitude": 17.557593,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 29602,
    "Zone": 975,
    "Name": "Myjava",
    "Latitude": 48.763641,
    "Longitude": 17.570897,
    "IsPublic": true,
    "LineList": "149"
  },
  {
    "StopID": 30001,
    "Zone": 360,
    "Name": "Rožná",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30002,
    "Zone": 370,
    "Name": "Bystřice nad Pernštejnem",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30003,
    "Zone": 999,
    "Name": "Nové Město na Moravě",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30004,
    "Zone": 999,
    "Name": "Žďár nad Sázavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30005,
    "Zone": 999,
    "Name": "Svitavy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30006,
    "Zone": 999,
    "Name": "Česká Třebová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30007,
    "Zone": 999,
    "Name": "Chornice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30008,
    "Zone": 355,
    "Name": "Vlkov u Tišnova",
    "Latitude": 49.323611,
    "Longitude": 16.211111,
    "IsPublic": true,
    "LineList": "130"
  },
  {
    "StopID": 30009,
    "Zone": 367,
    "Name": "Křižanov",
    "Latitude": 49.388889,
    "Longitude": 16.079444,
    "IsPublic": true,
    "LineList": "130"
  },
  {
    "StopID": 30011,
    "Zone": 999,
    "Name": "Kojetín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30012,
    "Zone": 999,
    "Name": "Přerov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30013,
    "Zone": 0,
    "Name": "Prostějov, aut.st.",
    "Latitude": 49.472821,
    "Longitude": 17.128622,
    "IsPublic": true,
    "LineList": "261,755"
  },
  {
    "StopID": 30023,
    "Zone": 456,
    "Name": "Náměšť nad Oslavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30027,
    "Zone": 999,
    "Name": "Třebovice v Čechách",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30028,
    "Zone": 999,
    "Name": "Hulín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30029,
    "Zone": 999,
    "Name": "Spytihněv",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30106,
    "Zone": 999,
    "Name": "Česká Třebová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30206,
    "Zone": 999,
    "Name": "Česká Třebová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30301,
    "Zone": 999,
    "Name": "Opatov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30302,
    "Zone": 367,
    "Name": "Ořechov",
    "Latitude": 49.350641,
    "Longitude": 16.136462,
    "IsPublic": true,
    "LineList": "130"
  },
  {
    "StopID": 30303,
    "Zone": 999,
    "Name": "Ostrov nad Oslavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30304,
    "Zone": 999,
    "Name": "Sklené nad Oslavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30305,
    "Zone": 355,
    "Name": "Osová Bítýška",
    "Latitude": 49.329893,
    "Longitude": 16.168305,
    "IsPublic": true,
    "LineList": "130"
  },
  {
    "StopID": 30307,
    "Zone": 999,
    "Name": "Velké Meziříčí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30308,
    "Zone": 999,
    "Name": "Budišov u Třebíče",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30309,
    "Zone": 999,
    "Name": "Chropyně",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30310,
    "Zone": 999,
    "Name": "Věžky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30311,
    "Zone": 999,
    "Name": "Němčice nad Hanou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30312,
    "Zone": 999,
    "Name": "Bedihošť",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30313,
    "Zone": 999,
    "Name": "Čelčice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30314,
    "Zone": 947,
    "Name": "Ostrožská Nová Ves",
    "Latitude": 49.009784,
    "Longitude": 17.436582,
    "IsPublic": true,
    "LineList": "126,146"
  },
  {
    "StopID": 30315,
    "Zone": 999,
    "Name": "Krahulov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30316,
    "Zone": 999,
    "Name": "Vladislav",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30317,
    "Zone": 999,
    "Name": "Bransouze",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30318,
    "Zone": 999,
    "Name": "Luka nad Jihlavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30319,
    "Zone": 947,
    "Name": "Nedakonice",
    "Latitude": 49.032515,
    "Longitude": 17.374985,
    "IsPublic": true,
    "LineList": "139"
  },
  {
    "StopID": 30320,
    "Zone": 999,
    "Name": "Huštěnovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30321,
    "Zone": 999,
    "Name": "Napajedla",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30322,
    "Zone": 999,
    "Name": "Kojetice na Moravě",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30323,
    "Zone": 999,
    "Name": "Stareč",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30324,
    "Zone": 999,
    "Name": "Březová nad Svitavou-Dlouhá",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30325,
    "Zone": 999,
    "Name": "Hradec nad Svitavou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30326,
    "Zone": 999,
    "Name": "Svitavy-Lány",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30327,
    "Zone": 999,
    "Name": "Laštovičky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30330,
    "Zone": 999,
    "Name": "Nové Město na Moravě zastávka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30331,
    "Zone": 999,
    "Name": "Olešná na Moravě",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30332,
    "Zone": 999,
    "Name": "Rudíkov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30333,
    "Zone": 999,
    "Name": "Velké Meziříčí zastávka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30334,
    "Zone": 999,
    "Name": "Měrovice nad Hanou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30335,
    "Zone": 999,
    "Name": "Doloplazy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30336,
    "Zone": 999,
    "Name": "Pivín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30337,
    "Zone": 999,
    "Name": "Blatec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30338,
    "Zone": 999,
    "Name": "Vrbátky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30339,
    "Zone": 999,
    "Name": "Vladislav zastávka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30340,
    "Zone": 999,
    "Name": "Třebíč-Borovina",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30341,
    "Zone": 999,
    "Name": "km 113,760",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30342,
    "Zone": 947,
    "Name": "Kostelany nad Moravou",
    "Latitude": 49.052678,
    "Longitude": 17.396915,
    "IsPublic": true,
    "LineList": "139"
  },
  {
    "StopID": 30343,
    "Zone": 999,
    "Name": "Jaroměřice nad Rokytnou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30344,
    "Zone": 999,
    "Name": "Šebkovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30345,
    "Zone": 999,
    "Name": "Hvězdoňovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30346,
    "Zone": 999,
    "Name": "Jemnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30347,
    "Zone": 999,
    "Name": "Bratislava hlavná stanica",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30348,
    "Zone": 999,
    "Name": "Bratislava-Lamač",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30349,
    "Zone": 999,
    "Name": "Devínska Nová Ves",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30350,
    "Zone": 999,
    "Name": "Zohor",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30351,
    "Zone": 999,
    "Name": "Malacky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30352,
    "Zone": 999,
    "Name": "Veľké Leváre",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30353,
    "Zone": 999,
    "Name": "Sekule",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30354,
    "Zone": 999,
    "Name": "Šaštín-Stráže",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30355,
    "Zone": 999,
    "Name": "Senica",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30356,
    "Zone": 999,
    "Name": "Jablonica",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30357,
    "Zone": 999,
    "Name": "Smolenice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30358,
    "Zone": 999,
    "Name": "Trnava",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30359,
    "Zone": 915,
    "Name": "Holíč nad Moravou",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30360,
    "Zone": 999,
    "Name": "Skalica na Slovensku",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30362,
    "Zone": 999,
    "Name": "Vésky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30363,
    "Zone": 999,
    "Name": "Popovice u Uherského Hradiště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30364,
    "Zone": 999,
    "Name": "Hradčovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30365,
    "Zone": 999,
    "Name": "Havřice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30366,
    "Zone": 999,
    "Name": "Újezdec u Luhačovic",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30367,
    "Zone": 999,
    "Name": "Šumice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30368,
    "Zone": 999,
    "Name": "Nezdenice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30369,
    "Zone": 999,
    "Name": "Záhorovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30371,
    "Zone": 999,
    "Name": "Bojkovice město",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30372,
    "Zone": 999,
    "Name": "Pitín zastávka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30373,
    "Zone": 999,
    "Name": "Hostětín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30374,
    "Zone": 999,
    "Name": "Slavičín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30375,
    "Zone": 999,
    "Name": "Divnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30376,
    "Zone": 999,
    "Name": "Bohuslavice nad Vláří",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30377,
    "Zone": 999,
    "Name": "Popov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30378,
    "Zone": 999,
    "Name": "Svatý Štěpán",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30379,
    "Zone": 999,
    "Name": "Vlárský průsmyk",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30380,
    "Zone": 999,
    "Name": "Polichno",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30381,
    "Zone": 999,
    "Name": "Biskupice u Luhačovic",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30382,
    "Zone": 999,
    "Name": "Luhačovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30383,
    "Zone": 912,
    "Name": "Hrušky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30384,
    "Zone": 999,
    "Name": "Gänserndorf",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30385,
    "Zone": 999,
    "Name": "Hohenau",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30386,
    "Zone": 999,
    "Name": "Gbely",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30387,
    "Zone": 999,
    "Name": "Šajdíkove Humence",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30388,
    "Zone": 999,
    "Name": "Biskupice u Jevíčka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30389,
    "Zone": 999,
    "Name": "Bítovčice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30390,
    "Zone": 999,
    "Name": "Charvátská Nová Ves",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30391,
    "Zone": 999,
    "Name": "Číchov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30392,
    "Zone": 999,
    "Name": "Dambořice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30393,
    "Zone": 999,
    "Name": "Dědice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30394,
    "Zone": 999,
    "Name": "Dolní Smrčné",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30395,
    "Zone": 999,
    "Name": "Jackov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30396,
    "Zone": 999,
    "Name": "Kraličky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30397,
    "Zone": 999,
    "Name": "Lednice, rybníky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30398,
    "Zone": 999,
    "Name": "Lhotice u Jemnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30399,
    "Zone": 999,
    "Name": "Martinice u Velkého Meziříčí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30400,
    "Zone": 999,
    "Name": "Oslavice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30401,
    "Zone": 999,
    "Name": "Oslavička",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30403,
    "Zone": 999,
    "Name": "Poštorná",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30404,
    "Zone": 999,
    "Name": "Pozďatín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30405,
    "Zone": 999,
    "Name": "Prudká nákladiště",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30406,
    "Zone": 999,
    "Name": "Přibice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30407,
    "Zone": 999,
    "Name": "Přímělkov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30408,
    "Zone": 999,
    "Name": "Rácovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30409,
    "Zone": 999,
    "Name": "Stařeč",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30410,
    "Zone": 999,
    "Name": "Svitavy-Lány",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30411,
    "Zone": 999,
    "Name": "Terezín u Čejče",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30412,
    "Zone": 999,
    "Name": "Třebelovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30413,
    "Zone": 652,
    "Name": "Uhřice u Kyjova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30414,
    "Zone": 530,
    "Name": "Velký Dvůr",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30415,
    "Zone": 999,
    "Name": "Vlčatín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30416,
    "Zone": 999,
    "Name": "Vrahovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30417,
    "Zone": 999,
    "Name": "Kojatín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30418,
    "Zone": 999,
    "Name": "Bohušice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30419,
    "Zone": 999,
    "Name": "Brodek u Přerova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30420,
    "Zone": 999,
    "Name": "Břest",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30421,
    "Zone": 999,
    "Name": "Dluhonice výhybna",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30422,
    "Zone": 999,
    "Name": "Grygov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30423,
    "Zone": 999,
    "Name": "Horní Moštěnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30424,
    "Zone": 999,
    "Name": "Kožušany",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30425,
    "Zone": 999,
    "Name": "Malý Beranov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30426,
    "Zone": 999,
    "Name": "Olomouc - Nové Sady",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30427,
    "Zone": 999,
    "Name": "Rokytnice u Přerova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30428,
    "Zone": 999,
    "Name": "Říkovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30429,
    "Zone": 999,
    "Name": "Tlumačov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30430,
    "Zone": 999,
    "Name": "Záhlinice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30431,
    "Zone": 999,
    "Name": "Choceň",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30432,
    "Zone": 999,
    "Name": "Praha - Smíchov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30433,
    "Zone": 999,
    "Name": "Petrovice u Karviné, st. hr.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30434,
    "Zone": 999,
    "Name": "Šumperk",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30435,
    "Zone": 999,
    "Name": "Velká nad Veličkou, st. hr.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 30436,
    "Zone": 999,
    "Name": "Lesůňky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31001,
    "Zone": 999,
    "Name": "Holubice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31002,
    "Zone": 999,
    "Name": "Velešovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31003,
    "Zone": 999,
    "Name": "Komořany u Vyškova",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31004,
    "Zone": 999,
    "Name": "Brno-Černovice odbočka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31005,
    "Zone": 999,
    "Name": "Brno-Černovice zhl. Táborská odbočka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31006,
    "Zone": 999,
    "Name": "Hradec Králové",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31007,
    "Zone": 999,
    "Name": "Brno-Maloměřice St. 3",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31008,
    "Zone": 999,
    "Name": "Brno-Maloměřice St. 6",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31009,
    "Zone": 999,
    "Name": "Praha hl.n.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31010,
    "Zone": 999,
    "Name": "Studenec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31011,
    "Zone": 999,
    "Name": "Bratislava hl.st.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31012,
    "Zone": 999,
    "Name": "Třebíč",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31013,
    "Zone": 999,
    "Name": "Havlíčkův Brod",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31014,
    "Zone": 999,
    "Name": "Okříšky",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31015,
    "Zone": 999,
    "Name": "Jihlava",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31016,
    "Zone": 999,
    "Name": "Plzeň hl.n.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31017,
    "Zone": 999,
    "Name": "České Budějovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31020,
    "Zone": 999,
    "Name": "Praha hl.n.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31021,
    "Zone": 999,
    "Name": "Bohumín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31023,
    "Zone": 999,
    "Name": "Olomouc hl.n.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31024,
    "Zone": 999,
    "Name": "Jeseník",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31025,
    "Zone": 957,
    "Name": "Kunovice zastávka",
    "Latitude": 49.038246,
    "Longitude": 17.461076,
    "IsPublic": true,
    "LineList": "126,146"
  },
  {
    "StopID": 31026,
    "Zone": 957,
    "Name": "Kunovice",
    "Latitude": 49.051956,
    "Longitude": 17.470389,
    "IsPublic": true,
    "LineList": "110,126,146"
  },
  {
    "StopID": 31027,
    "Zone": 957,
    "Name": "Uherské Hradiště",
    "Latitude": 49.066853,
    "Longitude": 17.457128,
    "IsPublic": true,
    "LineList": "110,126,146,285"
  },
  {
    "StopID": 31028,
    "Zone": 957,
    "Name": "Staré Město u Uherského Hradiště",
    "Latitude": 49.076127,
    "Longitude": 17.422756,
    "IsPublic": true,
    "LineList": "110,126,135,139,146,285"
  },
  {
    "StopID": 31029,
    "Zone": 999,
    "Name": "Uherský Brod",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31030,
    "Zone": 999,
    "Name": "Bojkovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31031,
    "Zone": 999,
    "Name": "Bylnice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31032,
    "Zone": 999,
    "Name": "Otrokovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31033,
    "Zone": 827,
    "Name": "Unterretzbach",
    "Latitude": 48.764701,
    "Longitude": 16.007784,
    "IsPublic": true,
    "LineList": "137"
  },
  {
    "StopID": 31034,
    "Zone": 838,
    "Name": "Retz",
    "Latitude": 48.753724,
    "Longitude": 15.957444,
    "IsPublic": true,
    "LineList": "137"
  },
  {
    "StopID": 31035,
    "Zone": 999,
    "Name": "Kolín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31036,
    "Zone": 999,
    "Name": "Pardubice hl.n.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31037,
    "Zone": 999,
    "Name": "Přibyslav",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31038,
    "Zone": 999,
    "Name": "Ústí nad Orlicí",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31039,
    "Zone": 999,
    "Name": "Choceň",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31040,
    "Zone": 999,
    "Name": "Praha-Libeň",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31041,
    "Zone": 999,
    "Name": "Břeclav státní hranice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31042,
    "Zone": 999,
    "Name": "Hodonín státní hranice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31043,
    "Zone": 999,
    "Name": "Kunovice výh. č. 19",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31044,
    "Zone": 999,
    "Name": "Kunovice výh. č. 20",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31045,
    "Zone": 999,
    "Name": "Lanžhot státní hranice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31046,
    "Zone": 999,
    "Name": "Sudoměřice st.hr.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31047,
    "Zone": 999,
    "Name": "Znojmo st.hr.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31048,
    "Zone": 999,
    "Name": "Odb. Svitava",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31101,
    "Zone": 999,
    "Name": "Opatovec",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31102,
    "Zone": 999,
    "Name": "Semanín",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31103,
    "Zone": 947,
    "Name": "Ostrožská Nová Ves lázně",
    "Latitude": 49.018181,
    "Longitude": 17.446255,
    "IsPublic": true,
    "LineList": "146"
  },
  {
    "StopID": 31104,
    "Zone": 999,
    "Name": "Radňovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31105,
    "Zone": 999,
    "Name": "Veselíčko",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31200,
    "Zone": 410,
    "Name": "D1 Exit 190 Brno-západ",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31201,
    "Zone": 410,
    "Name": "D1 Exit 182 Kývalka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31202,
    "Zone": 510,
    "Name": "R52 Exit 10 Rajhrad",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31203,
    "Zone": 520,
    "Name": "R52 Exit 23 Pohořelice-sever",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31204,
    "Zone": 101,
    "Name": "Ostravská Exit Brno-Slatina",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31205,
    "Zone": 610,
    "Name": "D1 Exit 203 Brno-Slatina",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31206,
    "Zone": 610,
    "Name": "D1 Exit 210 Holubice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31207,
    "Zone": 620,
    "Name": "D1 Exit 217 Rousínov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31208,
    "Zone": 730,
    "Name": "II/430 Rousínov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31209,
    "Zone": 530,
    "Name": "R52 Exit 26 Pohořelice-jih",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31210,
    "Zone": 530,
    "Name": "I/53 Pohořelice-západ",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31211,
    "Zone": 800,
    "Name": "I/53 Dobšice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31212,
    "Zone": 810,
    "Name": "I/53 Hodonice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31213,
    "Zone": 540,
    "Name": "I/52 Ivaň",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31214,
    "Zone": 552,
    "Name": "I/52 Perná",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31215,
    "Zone": 552,
    "Name": "I/52 Dolní Dunajovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31216,
    "Zone": 571,
    "Name": "I/52 Bavory",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31217,
    "Zone": 435,
    "Name": "hr.kr. JMK x VYS",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31218,
    "Zone": 425,
    "Name": "I/23 Rosice, křiž. s II/394 u Tetčic",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31219,
    "Zone": 510,
    "Name": "R52 Exit Popovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31220,
    "Zone": 510,
    "Name": "R52 Exit Modřice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31221,
    "Zone": 800,
    "Name": "Znojmo, Suchohrdelská x Družstevní (KO)",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31222,
    "Zone": 0,
    "Name": "II/150 Protivanov - Malé Hradisko",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31223,
    "Zone": 0,
    "Name": "III/43311 Želeč - Brodek",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31224,
    "Zone": 0,
    "Name": "II/150 Ždárná - Protivanov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31225,
    "Zone": 0,
    "Name": "III/43311 Želeč - Želeč",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31226,
    "Zone": 455,
    "Name": "III/3935 Senorady - Lhánice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31227,
    "Zone": 445,
    "Name": "III/395 Stanoviště - Ludvíkov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31228,
    "Zone": 820,
    "Name": "I/53 Lechovice, křiž. Borotice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31229,
    "Zone": 285,
    "Name": "I/43 Rozhraní",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31230,
    "Zone": 286,
    "Name": "II/365 Bohuňov",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31231,
    "Zone": 0,
    "Name": "II/362 Bystré - Nyklovice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31232,
    "Zone": 0,
    "Name": "II/368 Roubanská - Slatina",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31233,
    "Zone": 0,
    "Name": "III/36829 Roubanina - Slatina",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31234,
    "Zone": 0,
    "Name": "III/3725 Slatina - Korbelova Lhota",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31235,
    "Zone": 0,
    "Name": "II/372 Velké Opatovice - Jevíčko",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31236,
    "Zone": 0,
    "Name": "II/374 Jevíčko - Uhřice",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31237,
    "Zone": 0,
    "Name": "III/36616 Jaroměřice - Úsobrno",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31238,
    "Zone": 310,
    "Name": "I/43 Česká",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31239,
    "Zone": 226,
    "Name": "I/43 x II/379 Lipůvka",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31300,
    "Zone": 999,
    "Name": "Wien Meidling",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31301,
    "Zone": 999,
    "Name": "Wiener Neustadt Hbf.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31302,
    "Zone": 999,
    "Name": "Graz Hbf.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31303,
    "Zone": 999,
    "Name": "Villach Hbf.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31304,
    "Zone": 999,
    "Name": "Wien Stadlau Fbf.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31305,
    "Zone": 999,
    "Name": "Süssenbrunn",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31306,
    "Zone": 999,
    "Name": "Wien Hbf.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31307,
    "Zone": 999,
    "Name": "Wien Westbahnhof",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31311,
    "Zone": 999,
    "Name": "Budapest Keleti pu.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31312,
    "Zone": 999,
    "Name": "Beograd",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31320,
    "Zone": 999,
    "Name": "Berlin Hbf.",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31321,
    "Zone": 999,
    "Name": "Hamburg Altona",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31322,
    "Zone": 999,
    "Name": "Ostseebad Binz",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31323,
    "Zone": 999,
    "Name": "Bernhardsthal",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31324,
    "Zone": 999,
    "Name": "Drösing",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31325,
    "Zone": 999,
    "Name": "Hollabrunn",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31326,
    "Zone": 999,
    "Name": "Zellerndorf",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31901,
    "Zone": 999,
    "Name": "Polička",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31902,
    "Zone": 999,
    "Name": "Moravská Třebová",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  },
  {
    "StopID": 31903,
    "Zone": 999,
    "Name": "Svitavy",
    "Latitude": 0.000000,
    "Longitude": 0.000000,
    "IsPublic": false,
    "LineList": ""
  }
]
*/

const lat1 = homeLat;
const lon1 = homeLong;

function toRadians(degrees) {
  return degrees * Math.PI / 180;
}


// Helper function to calculate the distance between two points in meters - HAVERSINE FORMULA 

function getDistance(lat1, lon1, lat2, lon2) {
  const R = 6371e3; // Earth's radius in meters
  const phi1 = toRadians(lat1);
  const phi2 = toRadians(lat2); 
  const deltaPhi = toRadians(lat2 - lat1); //delta = change
  const deltaLambda = toRadians(lon2 - lon1);
  const a = Math.sin(deltaPhi / 2) * Math.sin(deltaPhi / 2) +
            Math.cos(phi1) * Math.cos(phi2) *
            Math.sin(deltaLambda / 2) * Math.sin(deltaLambda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return Math.round(R * c); //in meters 
}


function getNearestStop(homeLat, homeLong, stops) {
  let nearestStop = null; 
  let nearestDistance = Infinity; 

  stops.forEach(stop => {

    const stopLat = stop.Latitude;
    const stopLong = stop.Longitude; 

    const distance = getDistance(homeLat, homeLong, stopLat, stopLong); 

    if (distance < nearestDistance) {
      nearestStop = stop;
      nearestDistance = distance;
    }

  }); 

  return nearestStop; 

}


// Send the request to the API endpoint

const apiEndpoint = 'https://mapa.idsjmk.cz/api/stops.json'
//let fetchPromise = fetch(apiEndpoint); 
//console.log(fetchPromise); 

const apiKey = 'AIzaSyDsfgP_P8RwqHPJTrk4EVRrVPYcbPx-Qqk'

const headers = { Authorization: `apikey ${apiKey}` };


//fetch promise

fetch(apiEndpoint, {headers})
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Get the nearest bus stop from the response
    const nearestStop = getNearestStop(homeLat, homeLong, data);
    const dist = getDistance(homeLat, homeLong, nearestStop.Latitude, nearestStop.Longitude);  
    console.log(`The nearest tram/bus stop is ${dist} meters away: ${nearestStop.Name} (${nearestStop.Latitude}, ${nearestStop.Longitude})`); 
  })
  .catch(error => console.error(`Could not obtain data from the source: ${error}`));


