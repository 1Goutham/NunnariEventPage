/* Nunnari globe animation. Requires three.js r128 (window.THREE). Usage: NunnariGlobe(document.querySelector('#globe'), {accent:'#e9c860', inbound:'#8f5cf7'}) */
const LAND=[-1376,-840,-1164,-840,-952,-840,-741,-840,-529,-840,-317,-840,-105,-840,105,-840,317,-840,529,-840,741,-840,952,-840,1164,-840,1376,-840,1588,-840,-1475,-818,-1319,-818,-1162,-818,-1006,-818,-849,-818,-693,-818,-380,-818,-223,-818,-67,-818,89,-818,245,-818,402,-818,558,-818,715,-818,871,-818,1028,-818,1184,-818,1341,-818,1497,-818,-1440,-796,-1320,-796,-1200,-796,-1080,-796,-960,-796,-840,-796,-480,-796,-240,-796,-120,-796,0,-796,120,-796,240,-796,360,-796,480,-796,600,-796,720,-796,840,-796,960,-796,1080,-796,1200,-796,1320,-796,1440,-796,1560,-796,-1489,-773,-1389,-773,-1289,-773,-1189,-773,-1089,-773,-989,-773,-889,-773,-789,-773,-289,-773,-189,-773,-89,-773,11,-773,111,-773,211,-773,311,-773,411,-773,511,-773,611,-773,711,-773,811,-773,911,-773,1011,-773,1111,-773,1211,-773,1311,-773,1411,-773,1511,-773,1611,-773,-1371,-751,-1285,-751,-1200,-751,-1114,-751,-1028,-751,-942,-751,-857,-751,-771,-751,-685,-751,-171,-751,-85,-751,0,-751,85,-751,171,-751,257,-751,342,-751,428,-751,514,-751,600,-751,685,-751,771,-751,857,-751,942,-751,1028,-751,1114,-751,1200,-751,1285,-751,1371,-751,1457,-751,1542,-751,1628,-751,-889,-729,-664,-729,-139,-729,-64,-729,11,-729,86,-729,161,-729,236,-729,311,-729,386,-729,461,-729,536,-729,611,-729,686,-729,761,-729,836,-729,911,-729,986,-729,1061,-729,1136,-729,1211,-729,1286,-729,1361,-729,1436,-729,1511,-729,1586,-729,1661,-729,-666,-707,66,-707,133,-707,200,-707,266,-707,333,-707,400,-707,466,-707,533,-707,600,-707,666,-707,733,-707,800,-707,866,-707,933,-707,1000,-707,1066,-707,1133,-707,1200,-707,1266,-707,1333,-707,1400,-707,1466,-707,1533,-707,1600,-707,1666,-707,431,-685,491,-685,551,-685,611,-685,671,-685,791,-685,851,-685,911,-685,971,-685,1031,-685,1091,-685,1151,-685,1211,-685,1271,-685,1331,-685,1391,-685,1451,-685,-654,-663,545,-663,1036,-663,1145,-663,-697,-531,-740,-509,-705,-509,-733,-487,-700,-487,-728,-465,-696,-465,-723,-443,-692,-443,-661,-443,1707,-443,-717,-421,-688,-421,-658,-421,1453,-421,1721,-421,-734,-399,-705,-399,-676,-399,-648,-399,-728,-377,-700,-377,-672,-377,-644,-377,-616,-377,-589,-377,1420,-377,1448,-377,1476,-377,1755,-377,1783,-377,-717,-355,-690,-355,-663,-355,-636,-355,-609,-355,-581,-355,1393,-355,1421,-355,1448,-355,1475,-355,1502,-355,-711,-333,-685,-333,-659,-333,-632,-333,-606,-333,-580,-333,-553,-333,208,-333,234,-333,260,-333,1180,-333,1206,-333,1232,-333,1364,-333,1390,-333,1416,-333,1443,-333,1469,-333,1495,-333,-694,-311,-668,-311,-642,-311,-617,-311,-591,-311,-565,-311,-540,-311,-514,-311,180,-311,205,-311,231,-311,257,-311,282,-311,1157,-311,1182,-311,1208,-311,1234,-311,1260,-311,1285,-311,1311,-311,1337,-311,1362,-311,1388,-311,1414,-311,1440,-311,1465,-311,1491,-311,1517,-311,-706,-289,-681,-289,-656,-289,-630,-289,-605,-289,-580,-289,-555,-289,-530,-289,-505,-289,174,-289,199,-289,224,-289,250,-289,275,-289,300,-289,1156,-289,1181,-289,1206,-289,1231,-289,1257,-289,1282,-289,1307,-289,1332,-289,1357,-289,1383,-289,1408,-289,1433,-289,1458,-289,1483,-289,1508,-289,1534,-289,-690,-267,-665,-267,-641,-267,-616,-267,-591,-267,-567,-267,-542,-267,-517,-267,-493,-267,172,-267,197,-267,221,-267,246,-267,271,-267,295,-267,320,-267,1158,-267,1183,-267,1208,-267,1232,-267,1257,-267,1282,-267,1306,-267,1331,-267,1356,-267,1380,-267,1405,-267,1430,-267,1454,-267,1479,-267,1504,-267,1528,-267,-701,-245,-677,-245,-653,-245,-629,-245,-605,-245,-580,-245,-556,-245,-532,-245,-508,-245,-484,-245,168,-245,192,-245,216,-245,240,-245,264,-245,288,-245,313,-245,337,-245,457,-245,1158,-245,1182,-245,1206,-245,1231,-245,1255,-245,1279,-245,1303,-245,1327,-245,1351,-245,1376,-245,1400,-245,1424,-245,1448,-245,1472,-245,1496,-245,1521,-245,-679,-223,-655,-223,-631,-223,-607,-223,-584,-223,-560,-223,-536,-223,-512,-223,-488,-223,-464,-223,-441,-223,154,-223,178,-223,202,-223,226,-223,250,-223,274,-223,298,-223,321,-223,345,-223,441,-223,464,-223,1156,-223,1180,-223,1203,-223,1227,-223,1251,-223,1275,-223,1299,-223,1323,-223,1347,-223,1370,-223,1394,-223,1418,-223,1442,-223,1466,-223,1490,-223,-690,-201,-666,-201,-643,-201,-620,-201,-596,-201,-573,-201,-550,-201,-526,-201,-503,-201,-479,-201,-456,-201,-433,-201,-409,-201,151,-201,174,-201,198,-201,221,-201,244,-201,268,-201,291,-201,314,-201,338,-201,455,-201,478,-201,1203,-201,1226,-201,1249,-201,1273,-201,1296,-201,1320,-201,1343,-201,1366,-201,1390,-201,1413,-201,1436,-201,1460,-201,1483,-201,-692,-179,-669,-179,-646,-179,-623,-179,-600,-179,-576,-179,-553,-179,-530,-179,-507,-179,-484,-179,-461,-179,-438,-179,-415,-179,138,-179,161,-179,184,-179,207,-179,230,-179,253,-179,276,-179,300,-179,323,-179,346,-179,369,-179,461,-179,484,-179,1223,-179,1246,-179,1269,-179,1292,-179,1315,-179,1338,-179,1361,-179,1384,-179,1407,-179,1430,-179,1453,-179,1776,-179,-734,-157,-711,-157,-688,-157,-665,-157,-642,-157,-619,-157,-596,-157,-573,-157,-550,-157,-527,-157,-504,-157,-481,-157,-459,-157,-436,-157,-413,-157,-390,-157,137,-157,160,-157,182,-157,205,-157,228,-157,251,-157,274,-157,297,-157,320,-157,343,-157,366,-157,389,-157,481,-157,1260,-157,1283,-157,1306,-157,1329,-157,1352,-157,1421,-157,1444,-157,-758,-135,-735,-135,-713,-135,-690,-135,-667,-135,-645,-135,-622,-135,-600,-135,-577,-135,-554,-135,-532,-135,-509,-135,-486,-135,-464,-135,-441,-135,-418,-135,-396,-135,147,-135,169,-135,192,-135,215,-135,237,-135,260,-135,283,-135,305,-135,328,-135,350,-135,373,-135,396,-135,486,-135,1301,-135,1324,-135,1347,-135,-754,-113,-731,-113,-709,-113,-686,-113,-664,-113,-641,-113,-619,-113,-596,-113,-574,-113,-551,-113,-529,-113,-506,-113,-484,-113,-461,-113,-439,-113,-416,-113,-394,-113,146,-113,168,-113,191,-113,213,-113,236,-113,258,-113,281,-113,303,-113,326,-113,348,-113,371,-113,393,-113,-777,-91,-755,-91,-733,-91,-711,-91,-688,-91,-666,-91,-644,-91,-622,-91,-600,-91,-577,-91,-555,-91,-533,-91,-511,-91,-488,-91,-466,-91,-444,-91,-422,-91,-400,-91,-377,-91,-355,-91,133,-91,155,-91,177,-91,200,-91,222,-91,244,-91,266,-91,288,-91,311,-91,333,-91,355,-91,377,-91,1244,-91,1422,-91,1488,-91,-789,-69,-766,-69,-744,-69,-722,-69,-700,-69,-677,-69,-655,-69,-633,-69,-611,-69,-589,-69,-566,-69,-544,-69,-522,-69,-500,-69,-477,-69,-455,-69,-433,-69,-411,-69,-389,-69,-366,-69,144,-69,166,-69,188,-69,211,-69,233,-69,255,-69,277,-69,299,-69,322,-69,344,-69,366,-69,388,-69,1077,-69,1099,-69,1122,-69,1388,-69,1411,-69,1433,-69,1455,-69,-806,-47,-784,-47,-761,-47,-739,-47,-717,-47,-695,-47,-673,-47,-651,-47,-629,-47,-607,-47,-585,-47,-563,-47,-541,-47,-519,-47,-496,-47,-474,-47,-452,-47,-430,-47,-408,-47,-386,-47,121,-47,143,-47,165,-47,187,-47,209,-47,231,-47,253,-47,276,-47,298,-47,320,-47,342,-47,364,-47,386,-47,1049,-47,1203,-47,1225,-47,1380,-47,1402,-47,1424,-47,1446,-47,-795,-25,-773,-25,-750,-25,-728,-25,-706,-25,-684,-25,-662,-25,-640,-25,-618,-25,-596,-25,-574,-25,-552,-25,-530,-25,-508,-25,-485,-25,-463,-25,-441,-25,110,-25,132,-25,154,-25,176,-25,198,-25,220,-25,242,-25,264,-25,287,-25,309,-25,331,-25,353,-25,375,-25,397,-25,1015,-25,1037,-25,1104,-25,1126,-25,1148,-25,1192,-25,1214,-25,1369,-25,1391,-25,-790,-3,-768,-3,-746,-3,-724,-3,-702,-3,-680,-3,-658,-3,-636,-3,-614,-3,-592,-3,-570,-3,-548,-3,-526,-3,-504,-3,109,-3,131,-3,153,-3,175,-3,197,-3,219,-3,241,-3,263,-3,285,-3,307,-3,329,-3,351,-3,373,-3,395,-3,417,-3,1009,-3,1031,-3,1097,-3,1119,-3,1141,-3,1163,-3,-779,18,-757,18,-735,18,-713,18,-691,18,-669,18,-647,18,-625,18,-603,18,-581,18,-559,18,-537,18,-515,18,98,18,120,18,142,18,164,18,186,18,208,18,230,18,252,18,274,18,296,18,318,18,340,18,362,18,384,18,406,18,428,18,450,18,998,18,1130,18,1152,18,1174,18,-761,40,-739,40,-717,40,-695,40,-673,40,-651,40,-629,40,-607,40,-585,40,-563,40,-541,40,-519,40,99,40,121,40,143,40,165,40,187,40,209,40,231,40,253,40,276,40,298,40,320,40,342,40,364,40,386,40,408,40,430,40,452,40,474,40,982,40,1026,40,1159,40,-773,62,-750,62,-728,62,-706,62,-684,62,-662,62,-640,62,-618,62,-596,62,-574,62,-88,62,-66,62,-44,62,-22,62,0,62,22,62,44,62,66,62,88,62,110,62,132,62,154,62,176,62,198,62,220,62,242,62,264,62,287,62,309,62,331,62,353,62,375,62,397,62,419,62,441,62,463,62,485,62,1015,62,1170,62,-822,84,-777,84,-755,84,-733,84,-711,84,-688,84,-666,84,-644,84,-622,84,-600,84,-111,84,-88,84,-66,84,-44,84,-22,84,0,84,22,84,44,84,66,84,88,84,111,84,133,84,155,84,177,84,200,84,222,84,244,84,266,84,288,84,311,84,333,84,355,84,377,84,400,84,422,84,444,84,466,84,488,84,777,84,800,84,1000,84,1244,84,-849,106,-738,106,-693,106,-626,106,-134,106,-111,106,-89,106,-67,106,-44,106,-22,106,0,106,22,106,44,106,66,106,89,106,111,106,133,106,156,106,178,106,201,106,223,106,245,106,268,106,290,106,312,106,335,106,357,106,379,106,402,106,424,106,469,106,491,106,782,106,1050,106,1073,106,1229,106,-855,128,-157,128,-135,128,-112,128,-90,128,-67,128,-45,128,-22,128,0,128,22,128,45,128,67,128,90,128,112,128,135,128,157,128,180,128,202,128,225,128,247,128,270,128,292,128,315,128,337,128,360,128,382,128,405,128,427,128,450,128,765,128,787,128,990,128,1012,128,1035,128,1057,128,1080,128,1237,128,-923,150,-900,150,-877,150,-854,150,-832,150,-171,150,-148,150,-125,150,-102,150,-80,150,-57,150,-34,150,-11,150,11,150,33,150,56,150,79,150,102,150,124,150,147,150,170,150,193,150,216,150,238,150,261,150,284,150,307,150,329,150,352,150,375,150,398,150,443,150,466,150,489,150,762,150,785,150,990,150,1013,150,1036,150,1059,150,1081,150,-992,172,-969,172,-946,172,-923,172,-900,172,-161,172,-138,172,-115,172,-92,172,-69,172,-46,172,-23,172,0,172,23,172,46,172,69,172,92,172,115,172,138,172,161,172,184,172,207,172,230,172,253,172,276,172,300,172,323,172,346,172,369,172,438,172,461,172,484,172,507,172,530,172,738,172,761,172,784,172,807,172,946,172,969,172,992,172,1015,172,1038,172,1061,172,1223,172,-1555,194,-1040,194,-1017,194,-994,194,-970,194,-900,194,-877,194,-713,194,-152,194,-129,194,-105,194,-82,194,-59,194,-35,194,-12,194,11,194,34,194,57,194,81,194,104,194,127,194,151,194,174,194,198,194,221,194,244,194,268,194,291,194,314,194,338,194,361,194,431,194,455,194,478,194,501,194,525,194,548,194,572,194,735,194,759,194,782,194,805,194,829,194,946,194,969,194,992,194,1016,194,1039,194,-1042,216,-1018,216,-994,216,-781,216,-165,216,-142,216,-118,216,-94,216,-71,216,-47,216,-23,216,0,216,23,216,47,216,71,216,94,216,118,216,142,216,165,216,189,216,213,216,236,216,260,216,284,216,307,216,331,216,355,216,402,216,426,216,450,216,473,216,497,216,521,216,544,216,568,216,592,216,710,216,734,216,757,216,781,216,805,216,828,216,852,216,923,216,947,216,971,216,994,216,1018,216,1042,216,1065,216,1113,216,-1069,238,-1045,238,-1021,238,-997,238,-157,238,-133,238,-109,238,-84,238,-60,238,-37,238,-13,238,11,238,35,238,59,238,82,238,106,238,131,238,155,238,179,238,202,238,226,238,251,238,275,238,299,238,322,238,346,238,395,238,419,238,442,238,466,238,491,238,515,238,539,238,562,238,682,238,706,238,731,238,755,238,779,238,802,238,827,238,851,238,874,238,899,238,922,238,947,238,971,238,994,238,1019,238,1042,238,1067,238,1091,238,1114,238,1139,238,1162,238,1211,238,-1114,260,-1089,260,-1065,260,-1040,260,-1016,260,-991,260,-134,260,-110,260,-85,260,-61,260,-36,260,-12,260,12,260,36,260,61,260,85,260,110,260,134,260,159,260,183,260,208,260,232,260,257,260,281,260,306,260,330,260,379,260,404,260,428,260,453,260,477,260,575,260,600,260,624,260,648,260,673,260,697,260,722,260,746,260,771,260,795,260,820,260,844,260,869,260,893,260,918,260,942,260,967,260,991,260,1016,260,1040,260,1065,260,1089,260,1114,260,1138,260,1163,260,1187,260,-1139,282,-1114,282,-1089,282,-1064,282,-1039,282,-1014,282,-989,282,-814,282,-114,282,-89,282,-64,282,-39,282,-14,282,11,282,36,282,61,282,86,282,111,282,136,282,161,282,186,282,211,282,236,282,261,282,286,282,311,282,336,282,361,282,386,282,411,282,436,282,461,282,536,282,561,282,586,282,611,282,636,282,661,282,686,282,711,282,736,282,761,282,786,282,811,282,836,282,861,282,886,282,911,282,936,282,961,282,986,282,1011,282,1036,282,1061,282,1086,282,1111,282,1136,282,1161,282,1186,282,1211,282,-1110,304,-1085,304,-1059,304,-1034,304,-1008,304,-982,304,-957,304,-931,304,-906,304,-880,304,-855,304,-829,304,-89,304,-63,304,-38,304,-12,304,12,304,38,304,63,304,89,304,114,304,140,304,165,304,217,304,242,304,268,304,293,304,319,304,344,304,370,304,395,304,421,304,446,304,472,304,497,304,523,304,548,304,574,304,600,304,625,304,651,304,676,304,702,304,727,304,753,304,778,304,804,304,829,304,855,304,880,304,906,304,931,304,957,304,982,304,1008,304,1034,304,1059,304,1085,304,1110,304,1136,304,1161,304,1187,304,1212,304,-1162,326,-1136,326,-1110,326,-1084,326,-1058,326,-1032,326,-1006,326,-980,326,-954,326,-928,326,-902,326,-875,326,-849,326,-823,326,-67,326,-41,326,-15,326,11,326,37,326,63,326,89,326,115,326,141,326,219,326,350,326,376,326,402,326,428,326,454,326,480,326,506,326,532,326,558,326,584,326,611,326,637,326,663,326,689,326,715,326,741,326,767,326,793,326,819,326,845,326,871,326,897,326,924,326,950,326,976,326,1002,326,1028,326,1054,326,1080,326,1106,326,1132,326,1158,326,1184,326,1211,326,1315,326,-1182,348,-1155,348,-1128,348,-1101,348,-1074,348,-1047,348,-1020,348,-994,348,-967,348,-940,348,-913,348,-886,348,-859,348,-832,348,-805,348,-779,348,-53,348,-26,348,0,348,26,348,53,348,80,348,107,348,376,348,402,348,429,348,456,348,483,348,510,348,537,348,564,348,591,348,617,348,644,348,671,348,698,348,725,348,752,348,779,348,805,348,832,348,859,348,886,348,913,348,940,348,967,348,994,348,1020,348,1047,348,1074,348,1101,348,1128,348,1155,348,1182,348,1343,348,1370,348,-1211,370,-1184,370,-1156,370,-1129,370,-1101,370,-1074,370,-1047,370,-1019,370,-992,370,-964,370,-937,370,-909,370,-882,370,-854,370,-827,370,-799,370,-772,370,-85,370,-57,370,-30,370,217,370,299,370,327,370,354,370,381,370,409,370,436,370,464,370,491,370,546,370,574,370,601,370,629,370,656,370,684,370,711,370,739,370,766,370,794,370,821,370,849,370,876,370,904,370,931,370,959,370,986,370,1014,370,1041,370,1069,370,1096,370,1123,370,1151,370,1178,370,1206,370,1288,370,1371,370,1398,370,-1233,392,-1204,392,-1176,392,-1148,392,-1119,392,-1091,392,-1062,392,-1034,392,-1006,392,-977,392,-949,392,-921,392,-892,392,-864,392,-836,392,-807,392,-779,392,-70,392,-42,392,-14,392,212,392,269,392,297,392,325,392,354,392,382,392,411,392,439,392,467,392,552,392,581,392,609,392,637,392,666,392,694,392,722,392,751,392,779,392,807,392,836,392,864,392,892,392,921,392,949,392,977,392,1006,392,1034,392,1062,392,1091,392,1119,392,1148,392,1176,392,1261,392,1403,392,-1232,414,-1203,414,-1174,414,-1145,414,-1115,414,-1086,414,-1057,414,-1028,414,-998,414,-969,414,-940,414,-910,414,-881,414,-852,414,-823,414,-793,414,-764,414,-735,414,-62,414,-32,414,-3,414,142,414,201,414,230,414,259,414,318,414,347,414,435,414,464,414,552,414,581,414,611,414,640,414,669,414,698,414,728,414,757,414,786,414,815,414,845,414,874,414,903,414,932,414,962,414,991,414,1020,414,1050,414,1079,414,1108,414,1137,414,1167,414,1196,414,1225,414,1254,414,1284,414,-1225,436,-1194,436,-1164,436,-1134,436,-1104,436,-1073,436,-1043,436,-1013,436,-983,436,-952,436,-922,436,-892,436,-862,436,-831,436,-801,436,-771,436,-741,436,-710,436,-75,436,-15,436,15,436,45,436,105,436,166,436,196,436,226,436,257,436,408,436,438,436,468,436,529,436,559,436,589,436,620,436,650,436,680,436,710,436,741,436,771,436,801,436,831,436,862,436,892,436,922,436,952,436,983,436,1013,436,1043,436,1073,436,1104,436,1134,436,1164,436,1194,436,1225,436,1255,436,1285,436,1315,436,1346,436,1436,436,-1220,458,-1189,458,-1157,458,-1125,458,-1094,458,-1062,458,-1031,458,-999,458,-967,458,-936,458,-904,458,-873,458,-841,458,-810,458,-778,458,-746,458,-715,458,-683,458,-652,458,-620,458,11,458,42,458,74,458,105,458,137,458,168,458,200,458,232,458,263,458,295,458,389,458,421,458,453,458,484,458,547,458,579,458,611,458,642,458,674,458,705,458,737,458,768,458,800,458,832,458,863,458,895,458,926,458,958,458,989,458,1021,458,1053,458,1084,458,1116,458,1147,458,1179,458,1211,458,1242,458,1274,458,1305,458,1337,458,1368,458,-1238,480,-1205,480,-1172,480,-1139,480,-1106,480,-1073,480,-1040,480,-1007,480,-974,480,-941,480,-908,480,-875,480,-842,480,-809,480,-776,480,-743,480,-710,480,-677,480,-577,480,-544,480,-16,480,16,480,49,480,82,480,115,480,148,480,181,480,214,480,247,480,280,480,313,480,346,480,379,480,412,480,445,480,478,480,511,480,544,480,577,480,611,480,644,480,677,480,710,480,743,480,776,480,809,480,842,480,875,480,908,480,941,480,974,480,1007,480,1040,480,1073,480,1106,480,1139,480,1172,480,1205,480,1238,480,1271,480,1304,480,1337,480,1370,480,-1274,502,-1240,502,-1206,502,-1171,502,-1137,502,-1103,502,-1069,502,-1034,502,-1000,502,-966,502,-931,502,-897,502,-863,502,-829,502,-794,502,-760,502,-726,502,-691,502,-623,502,28,502,62,502,96,502,131,502,165,502,199,502,233,502,268,502,302,502,336,502,371,502,405,502,439,502,473,502,508,502,542,502,576,502,611,502,645,502,679,502,713,502,748,502,782,502,816,502,851,502,885,502,919,502,953,502,988,502,1022,502,1056,502,1091,502,1125,502,1159,502,1193,502,1228,502,1262,502,1296,502,1331,502,1365,502,1399,502,1433,502,-1260,524,-1224,524,-1188,524,-1152,524,-1116,524,-1080,524,-1044,524,-1008,524,-972,524,-936,524,-900,524,-864,524,-828,524,-756,524,-720,524,-684,524,-648,524,-612,524,-576,524,-71,524,-35,524,0,524,71,524,108,524,144,524,180,524,215,524,251,524,288,524,324,524,360,524,395,524,431,524,468,524,504,524,540,524,576,524,611,524,648,524,684,524,720,524,756,524,791,524,828,524,863,524,900,524,936,524,971,524,1008,524,1043,524,1080,524,1116,524,1152,524,1188,524,1223,524,1260,524,1296,524,1332,524,1368,524,1403,524,-1637,546,-1296,546,-1258,546,-1220,546,-1182,546,-1144,546,-1106,546,-1069,546,-1031,546,-993,546,-955,546,-917,546,-879,546,-841,546,-765,546,-727,546,-690,546,-652,546,-614,546,-576,546,-83,546,181,546,219,546,257,546,295,546,333,546,371,546,408,546,446,546,484,546,522,546,560,546,598,546,636,546,674,546,712,546,749,546,787,546,825,546,863,546,901,546,939,546,977,546,1015,546,1053,546,1091,546,1128,546,1166,546,1204,546,1242,546,1280,546,1318,546,1356,546,1583,546,-1320,568,-1280,568,-1240,568,-1200,568,-1160,568,-1120,568,-1080,568,-1040,568,-1000,568,-960,568,-920,568,-760,568,-720,568,-680,568,-640,568,-40,568,160,568,240,568,280,568,320,568,360,568,400,568,440,568,480,568,520,568,560,568,600,568,640,568,680,568,720,568,760,568,800,568,840,568,880,568,920,568,960,568,1000,568,1040,568,1080,568,1120,568,1160,568,1200,568,1240,568,1280,568,1320,568,1360,568,1560,568,1600,568,-1617,590,-1574,590,-1360,590,-1317,590,-1274,590,-1231,590,-1189,590,-1146,590,-1103,590,-1060,590,-1017,590,-974,590,-760,590,-717,590,139,590,268,590,311,590,353,590,396,590,439,590,482,590,525,590,568,590,611,590,653,590,696,590,739,590,782,590,825,590,868,590,911,590,953,590,996,590,1039,590,1082,590,1125,590,1168,590,1211,590,1253,590,1296,590,1339,590,1382,590,-1617,612,-1572,612,-1526,612,-1481,612,-1435,612,-1389,612,-1344,612,-1298,612,-1253,612,-1207,612,-1162,612,-1116,612,-1070,612,-1025,612,-979,612,-751,612,-478,612,-432,612,68,612,113,612,159,612,250,612,296,612,341,612,387,612,432,612,478,612,524,612,569,612,615,612,660,612,706,612,751,612,797,612,843,612,888,612,934,612,979,612,1025,612,1070,612,1116,612,1162,612,1207,612,1253,612,1298,612,1344,612,1389,612,1435,612,1481,612,1526,612,1663,612,1708,612,-1591,634,-1542,634,-1493,634,-1443,634,-1394,634,-1345,634,-1295,634,-1246,634,-1197,634,-1147,634,-1098,634,-1049,634,-999,634,-950,634,-852,634,-704,634,-654,634,-506,634,-457,634,84,634,134,634,183,634,232,634,282,634,331,634,380,634,430,634,479,634,528,634,578,634,627,634,676,634,726,634,775,634,824,634,874,634,923,634,972,634,1021,634,1071,634,1120,634,1169,634,1219,634,1268,634,1317,634,1367,634,1416,634,1465,634,1515,634,1564,634,1613,634,1663,634,1712,634,1761,634,-1800,656,-1747,656,-1641,656,-1588,656,-1535,656,-1482,656,-1429,656,-1376,656,-1323,656,-1270,656,-1217,656,-1164,656,-1111,656,-1058,656,-1005,656,-952,656,-900,656,-688,656,-635,656,-476,656,-423,656,-211,656,-158,656,158,656,211,656,264,656,317,656,423,656,476,656,529,656,582,656,635,656,688,656,741,656,794,656,847,656,900,656,952,656,1005,656,1058,656,1111,656,1164,656,1217,656,1270,656,1323,656,1376,656,1429,656,1482,656,1535,656,1588,656,1641,656,1694,656,1747,656,-1789,678,-1614,678,-1556,678,-1498,678,-1440,678,-1382,678,-1324,678,-1266,678,-1208,678,-1150,678,-1034,678,-976,678,-918,678,-859,678,-685,678,-511,678,-453,678,-395,678,-337,678,185,678,243,678,301,678,359,678,533,678,591,678,649,678,707,678,765,678,823,678,881,678,940,678,998,678,1056,678,1114,678,1172,678,1230,678,1288,678,1346,678,1404,678,1462,678,1520,678,1578,678,1636,678,1694,678,1752,678,-1607,700,-1542,700,-1478,700,-1157,700,-1092,700,-1028,700,-835,700,-771,700,-707,700,-514,700,-450,700,-385,700,-321,700,-257,700,257,700,707,700,771,700,835,700,900,700,964,700,1028,700,1092,700,1157,700,1221,700,1285,700,1350,700,1414,700,1478,700,1542,700,-1213,722,-1141,722,-1069,722,-997,722,-853,722,-781,722,-493,722,-420,722,-349,722,-277,722,874,722,947,722,1019,722,1091,722,1162,722,1234,722,1451,722,-490,744,-409,744,-327,744,-245,744,572,744,900,744,981,744,1063,744,-936,766,-841,766,-652,766,-557,766,-462,766,-367,766,-273,766,674,766,1053,766,-1012,788,-900,788,-787,788,-675,788,-562,788,-450,788,-337,788,-225,788,1012,788,-819,810,-681,810,-542,810,-404,810,-265,810,-284,832];
window.NunnariGlobe=function(container,opts){
  opts=opts||{};
  container.classList.add('nl-globe');
  container.innerHTML='<canvas aria-hidden="true"></canvas><div class="nl-globe-labels" aria-hidden="true"></div>';
  const canvas=container.querySelector('canvas'), chipsEl=container.querySelector('.nl-globe-labels');
  const hero=container;
  const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile=(container.clientWidth||innerWidth)<600;
  const VIOLET=new THREE.Color(opts.inbound||'#8f5cf7');
  const GOLD=new THREE.Color(opts.accent||'#e9c860');

  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,alpha:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(devicePixelRatio,isMobile?1:2));
  const scene=new THREE.Scene();
  const camera=new THREE.PerspectiveCamera(36,1,0.1,60);

  // soft round sprite for every particle in the scene
  const dotTex=(()=>{const c=document.createElement('canvas');c.width=c.height=64;const g=c.getContext('2d');
    const r=g.createRadialGradient(32,32,0,32,32,32);r.addColorStop(0,'rgba(255,255,255,1)');r.addColorStop(.35,'rgba(255,255,255,.85)');r.addColorStop(1,'rgba(255,255,255,0)');
    g.fillStyle=r;g.fillRect(0,0,64,64);const t=new THREE.CanvasTexture(c);return t;})();

  // ---------- the world ----------
  const GR=1.6, gcenter=new THREE.Vector3(0,0,0);
  const globe=new THREE.Group(); globe.position.copy(gcenter); scene.add(globe);
  const spin=new THREE.Group(); spin.rotation.x=0.18; globe.add(spin);

  const D2R=Math.PI/180, landV=[];
  const gpos=new Float32Array(LAND.length/2*3);
  for(let i=0,j=0;i<LAND.length;i+=2){
    const lon=LAND[i]/10*D2R, lat=LAND[i+1]/10*D2R;
    const v=new THREE.Vector3(Math.cos(lat)*Math.sin(lon),Math.sin(lat),Math.cos(lat)*Math.cos(lon));
    landV.push(v); gpos[j++]=v.x*GR; gpos[j++]=v.y*GR; gpos[j++]=v.z*GR;
  }
  const ggeo=new THREE.BufferGeometry(); ggeo.setAttribute('position',new THREE.BufferAttribute(gpos,3));
  const gmat=new THREE.ShaderMaterial({transparent:true,depthWrite:false,
    uniforms:{uPR:{value:renderer.getPixelRatio()},uK:{value:1},uCam:{value:new THREE.Vector3()},uC:{value:gcenter},uTex:{value:dotTex}},
    vertexShader:`uniform float uPR,uK; uniform vec3 uCam,uC; varying float vF;
      void main(){ vec4 wp=modelMatrix*vec4(position,1.0);
        vec3 n=normalize(wp.xyz-uC); vec3 v=normalize(uCam-wp.xyz); vF=dot(n,v);
        vec4 mv=viewMatrix*wp; gl_Position=projectionMatrix*mv;
        // back-facing dots get no size at all, so they never rely on the depth buffer to stay hidden
        gl_PointSize=vF<=0.02?0.0:(2.3+3.0*vF)*uPR*uK*(9.0/-mv.z); }`,
    fragmentShader:`varying float vF; uniform sampler2D uTex;
      void main(){ if(vF<=0.02) discard; float f=max(vF,0.0);
        float a=texture2D(uTex,gl_PointCoord).a*(0.5+0.5*pow(f,0.6));
        gl_FragColor=vec4(mix(vec3(0.78,0.74,0.98),vec3(1.0,1.0,1.0),f),a); }`});
  spin.add(new THREE.Points(ggeo,gmat));
  // body: translucent deep violet with a lavender rim, so it sits in the hero gradient instead of on it
  const bodyMat=new THREE.ShaderMaterial({transparent:false,depthWrite:true,depthTest:true,
    uniforms:{uCam:{value:new THREE.Vector3()},uC:{value:gcenter},uBase:{value:new THREE.Color(opts.body||'#130d33')},uRim:{value:new THREE.Color(opts.rim||'#a48cff')}},
    vertexShader:`uniform vec3 uCam,uC; varying float vF; void main(){ vec4 wp=modelMatrix*vec4(position,1.0);
      vec3 n=normalize(wp.xyz-uC); vec3 v=normalize(uCam-wp.xyz); vF=max(dot(n,v),0.0); gl_Position=projectionMatrix*viewMatrix*wp; }`,
    fragmentShader:`uniform vec3 uBase,uRim; varying float vF; void main(){ float rim=pow(1.0-vF,3.2);
      vec3 col=mix(uBase,uRim,rim*0.7); gl_FragColor=vec4(col,1.0); }`});
  const body=new THREE.Mesh(new THREE.SphereGeometry(GR*0.985,64,40),bodyMat);
  globe.add(body);
  // (no atmosphere sprite: it read as a blur layer over the globe)

  // ---------- the factory brain ----------
  const coreMat=new THREE.MeshBasicMaterial({color:GOLD,transparent:true,opacity:0.55,blending:THREE.AdditiveBlending,depthWrite:false});
  const core=new THREE.Mesh(new THREE.SphereGeometry(GR*0.36,32,24),coreMat); core.renderOrder=1; globe.add(core);
  const haloMat=new THREE.SpriteMaterial({map:dotTex,color:GOLD,transparent:true,opacity:0.5,blending:THREE.AdditiveBlending,depthWrite:false});
  haloMat.depthTest=false; const halo=new THREE.Sprite(haloMat); halo.scale.setScalar(GR*1.5); halo.position.z=GR*0.6; halo.renderOrder=5; globe.add(halo);
  // brain pulses: thin rings that expand from the core, through the crust, and out
  const pulseGeo=new THREE.RingGeometry(0.988,1,96);
  const pulses=[];
  function spawnPulse(){ return; // pulse rings disabled: they read as ripples around the globe
    const m=new THREE.Mesh(pulseGeo,new THREE.MeshBasicMaterial({color:GOLD,transparent:true,opacity:0.2,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,depthWrite:false}));
    m.position.copy(gcenter); m.lookAt(camera.position); m.scale.setScalar(0.1); scene.add(m); pulses.push({m,born:clock});
  }

  // ---------- governance and security: the perimeter ----------
  const SR=GR*1.8;
  const shell=new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(SR,1)),new THREE.LineBasicMaterial({color:0xd9ccff,transparent:true,opacity:0.14}));
  shell.position.copy(gcenter); scene.add(shell);
  const gateGeo=new THREE.RingGeometry(0.85,1,48);
  const gates=[];
  function spawnGate(dir,col){ // a checkpoint flash where a flow crosses the perimeter
    const m=new THREE.Mesh(gateGeo,new THREE.MeshBasicMaterial({color:col,transparent:true,opacity:0.32,side:THREE.DoubleSide,blending:THREE.AdditiveBlending,depthWrite:false}));
    m.position.copy(gcenter).addScaledVector(dir,SR); m.lookAt(gcenter); m.scale.setScalar(0.08); scene.add(m); gates.push({m,born:clock});
  }

  // ---------- information flows: in, through the brain, back out ----------
  const STREAMS=isMobile?14:22, PER=7;
  const fpos=new Float32Array(STREAMS*PER*3), fcol=new Float32Array(STREAMS*PER*3);
  const fgeo=new THREE.BufferGeometry();
  fgeo.setAttribute('position',new THREE.BufferAttribute(fpos,3)); fgeo.setAttribute('color',new THREE.BufferAttribute(fcol,3));
  const flowPts=new THREE.Points(fgeo,new THREE.PointsMaterial({size:0.2,map:dotTex,vertexColors:true,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending,sizeAttenuation:true}));
  scene.add(flowPts);
  const streams=[];
  function rnd(){ const u=Math.random()*2-1, ph=Math.random()*Math.PI*2, r=Math.sqrt(1-u*u); return new THREE.Vector3(r*Math.cos(ph),u,r*Math.sin(ph)); }
  function randDir(){ const v=rnd(); if(v.z<-0.2) v.z=-v.z*0.4; return v.normalize(); }
  // sources and sinks are resolved after the labels exist (see below)
  let sources=[], sinks=[];
  function pickWeighted(list){ const tot=list.reduce((a,c)=>a+c.w,0); let r=Math.random()*tot; for(const c of list){ r-=c.w; if(r<=0) return c; } return list[list.length-1]; }
  function newStream(s,first){
    s.inbound=Math.random()<0.5;
    const end=pickWeighted(s.inbound?sources:sinks);
    s.chip=end.chip; s.crosses=end.outer;
    s.tangent=rnd().multiplyScalar(SR*0.35);
    s.curve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(),new THREE.Vector3(),new THREE.Vector3());
    s.t=first?Math.random():-0.25; s.speed=0.16+Math.random()*0.12; s.gated=false;
    s.col=s.inbound?VIOLET.clone().lerp(new THREE.Color(0xffffff),0.5):GOLD.clone().lerp(new THREE.Color(0xffffff),0.2);
  }
  function syncStream(s){ // endpoints follow the moving label
    const p=s.chip.pos, ctrl=gcenter.clone().lerp(p,0.55).add(s.tangent);
    if(s.inbound){ s.curve.v0.copy(p); s.curve.v2.copy(gcenter); } else { s.curve.v0.copy(gcenter); s.curve.v2.copy(p); }
    s.curve.v1.copy(ctrl); s.dir=p.clone().sub(gcenter).normalize();
  }
  const tmp=new THREE.Vector3();
  function updateFlows(dt){
    for(let i=0;i<STREAMS;i++){
      const s=streams[i]; s.t+=s.speed*dt; syncStream(s);
      // perimeter crossing: inbound at t~0.32, outbound at t~0.68
      const cross=s.inbound?0.32:0.68;
      if(!s.gated && s.t>cross){ s.gated=true; if(!reduce && s.crosses) spawnGate(s.dir,s.col); if(!s.inbound && pulses.length<1 && Math.random()<0.6) spawnPulse(); }
      if(s.t>1.25) newStream(s,false);
      for(let k=0;k<PER;k++){
        const u=THREE.MathUtils.clamp(s.t-k*0.035,0,1);
        s.curve.getPoint(u,tmp);
        const idx=(i*PER+k)*3;
        fpos[idx]=tmp.x; fpos[idx+1]=tmp.y; fpos[idx+2]=tmp.z;
        const inside=tmp.distanceTo(gcenter)<GR*1.02;
        const fade=(k===0?1:1-k/PER)*(u<=0||u>=1||inside?0:1);
        fcol[idx]=s.col.r*fade; fcol[idx+1]=s.col.g*fade; fcol[idx+2]=s.col.b*fade;
      }
    }
    fgeo.attributes.position.needsUpdate=true; fgeo.attributes.color.needsUpdate=true;
  }

  // ---------- agents: moving across the surface, place to place ----------
  const AGENTS=isMobile?5:8;
  const apos=new Float32Array(AGENTS*3);
  const ageo=new THREE.BufferGeometry(); ageo.setAttribute('position',new THREE.BufferAttribute(apos,3));
  spin.add(new THREE.Points(ageo,new THREE.PointsMaterial({size:0.16,map:dotTex,color:GOLD,transparent:true,depthWrite:false,blending:THREE.AdditiveBlending})));
  const trailGeo=new THREE.BufferGeometry(); const TR=14;
  const tpos=new Float32Array(AGENTS*TR*3); trailGeo.setAttribute('position',new THREE.BufferAttribute(tpos,3));
  spin.add(new THREE.Points(trailGeo,new THREE.PointsMaterial({size:0.055,map:dotTex,color:GOLD,transparent:true,opacity:0.55,depthWrite:false,blending:THREE.AdditiveBlending})));
  const agents=[];
  const pick=()=>landV[Math.floor(Math.random()*landV.length)];
  for(let i=0;i<AGENTS;i++){ const a=pick(); const seed=a.clone().multiplyScalar(GR*1.01); const hist=[]; for(let k=0;k<TR;k++) hist.push(seed.clone());
    agents.push({a,b:pick(),t:Math.random(),dur:1.4+Math.random()*1.6,hist}); }
  for(let i=0;i<AGENTS;i++){ const h=agents[i].hist[0]; for(let k=0;k<TR;k++){ const o=(i*TR+k)*3; tpos[o]=h.x; tpos[o+1]=h.y; tpos[o+2]=h.z; } apos[i*3]=h.x; apos[i*3+1]=h.y; apos[i*3+2]=h.z; }
  const qa=new THREE.Quaternion(), qb=new THREE.Quaternion(), qm=new THREE.Quaternion(), up=new THREE.Vector3(0,0,1);
  function surf(a,b,u,out){ // arc over the surface between two land dots, slightly lifted
    qa.setFromUnitVectors(up,a); qb.setFromUnitVectors(up,b); qm.copy(qa).slerp(qb,u);
    out.copy(up).applyQuaternion(qm).multiplyScalar(GR*(1.01+0.09*Math.sin(u*Math.PI))); return out;
  }
  function updateAgents(dt){
    for(let i=0;i<AGENTS;i++){
      const g=agents[i]; g.t+=dt/g.dur;
      if(g.t>=1){ g.a=g.b; let nb=pick(); let tries=0; while(nb.dot(g.a)<0.2&&tries++<20) nb=pick(); g.b=nb; g.t=0; g.dur=1.4+Math.random()*1.6; }
      const e=g.t<0.5?2*g.t*g.t:1-Math.pow(-2*g.t+2,2)/2;
      surf(g.a,g.b,e,tmp); apos[i*3]=tmp.x; apos[i*3+1]=tmp.y; apos[i*3+2]=tmp.z;
      g.hist.unshift(tmp.clone()); if(g.hist.length>TR) g.hist.length=TR;
      for(let k=0;k<TR;k++){ const p=g.hist[Math.min(k,g.hist.length-1)]; const o=(i*TR+k)*3; tpos[o]=p.x; tpos[o+1]=p.y; tpos[o+2]=p.z; }
    }
    ageo.attributes.position.needsUpdate=true; trailGeo.attributes.position.needsUpdate=true;
  }

  // ---------- labels ----------
  const icons={
    agents:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3"/></svg>',
    people:'<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.2"/><path d="M5 20a7 7 0 0 1 14 0"/></svg>',
    brain:'<svg viewBox="0 0 24 24"><path d="M3 20V9l5 3V9l5 3V6l8 4v10z"/></svg>',
    security:'<svg viewBox="0 0 24 24"><path d="M12 3l7 3v6c0 4-3 7-7 9-4-2-7-5-7-9V6z"/><path d="M9 12l2 2 4-4"/></svg>',
    governance:'<svg viewBox="0 0 24 24"><path d="M12 3l8 4H4zM5 10v7M12 10v7M19 10v7M3 20h18"/></svg>',
    connectors:'<svg viewBox="0 0 24 24"><path d="M9 15l-2 2a3 3 0 1 1-4-4l2-2M15 9l2-2a3 3 0 1 1 4 4l-2 2M8 16l8-8"/></svg>',
    hitl:'<svg viewBox="0 0 24 24"><circle cx="9" cy="8" r="3"/><path d="M3 20a6 6 0 0 1 12 0"/><path d="M16 9l2 2 4-4"/></svg>',
    edge:'<svg viewBox="0 0 24 24"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3"/></svg>',
    observe:'<svg viewBox="0 0 24 24"><path d="M3 12c3-5 15-5 18 0-3 5-15 5-18 0z"/><circle cx="12" cy="12" r="2.5"/></svg>',
    memory:'<svg viewBox="0 0 24 24"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3"/></svg>',
    voice:'<svg viewBox="0 0 24 24"><path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 10v4"/></svg>',
    vision:'<svg viewBox="0 0 24 24"><rect x="3" y="7" width="14" height="11" rx="2"/><path d="M17 11l4-2v7l-4-2"/></svg>',
    evals:'<svg viewBox="0 0 24 24"><path d="M4 20V4M4 20h16"/><path d="M8 15l3-4 3 2 4-6"/></svg>'
  };
  function chip(label,icon,cls){ const el=document.createElement('div'); el.className='chip'+(cls?' '+cls:''); el.innerHTML='<b>'+icons[icon]+'</b>'+label; chipsEl.appendChild(el); return el; }
  const coreChip=chip((opts.coreLines||['Reasons across the enterprise'])[0],'brain','core');
  // what the core does, one capability per line. Alternative set: 'Intelligence for the enterprise','Intelligence for the plant floor','Intelligence for physical systems','Intelligence for the workforce'
  const coreUses=opts.coreLines||['Reasons across the enterprise','Runs the factory floor','Moves with humanoids and robots','Works alongside people','Governs itself'];
  let useIdx=0, nextUse=3.5;
  const coreText=coreChip.childNodes[1];
  // the stack and know-how, floating loosely around the world
  const KEYWORDS=opts.keywords||[['Vision','vision'],['HITL','hitl'],['Agents','agents'],['Memory','memory'],['Voice','voice'],['Edge devices','edge'],
                  ['Connectors','connectors'],['Governance','governance'],['Security','security'],['Observability','observe'],['Evals','evals']];
  const chips=[]; const Y=new THREE.Vector3(0,1,0);
  KEYWORDS.forEach(([label,icon],i)=>{
    // spread evenly with a golden-angle spiral, then jitter, so labels never bunch up
    const y=1-(i+0.5)/KEYWORDS.length*2, rr=Math.sqrt(1-y*y), ph=i*2.399963+0.7;
    const dir=new THREE.Vector3(rr*Math.cos(ph),y*0.8,rr*Math.sin(ph)).normalize();
    const r=GR*(isMobile?(1.15+0.28*Math.random()):(1.22+0.42*Math.random()));
    chips.push({el:chip(label,icon),label,dir,r,speed:(0.02+0.025*Math.random())*(i%2?1:-1),ph:Math.random()*6.28,pos:new THREE.Vector3(),outer:r>SR*0.95});
  });
  function chipPos(c,t,out){
    out.copy(c.dir).applyAxisAngle(Y,t*c.speed).multiplyScalar(c.r);
    out.y+=Math.sin(t*0.5+c.ph)*0.12; out.x+=Math.cos(t*0.37+c.ph)*0.08;
    return out.add(gcenter);
  }
  // information comes in from the stack and goes back out to it; every keyword can be a source or a destination
  sources=chips.map(c=>({chip:c,outer:c.outer,w:1}));
  sinks=chips.map(c=>({chip:c,outer:c.outer,w:c.label==='HITL'?3:1}));
  for(const c of chips) chipPos(c,0,c.pos);
  for(let i=0;i<STREAMS;i++){ const st={}; newStream(st,true); streams.push(st); }

  // ---------- camera, resize, loop ----------
  function resize(){
    const w=hero.clientWidth,h=hero.clientHeight;
    renderer.setSize(w,h,false); camera.aspect=w/h;
    gmat.uniforms.uK.value=Math.max(0.42,Math.min(1,Math.min(w,h)/560));
    // frame the perimeter so it fits whatever box the host page gives us
    const need=SR*0.92, fov=36; camera.fov=fov;
    const vAspect=Math.min(1,camera.aspect);
    const dist=need/Math.tan(fov/2*Math.PI/180)/vAspect;
    camera.position.set(0,dist*0.09,dist); camera.lookAt(0,0,0);
    camera.updateProjectionMatrix();
  }
  resize(); addEventListener('resize',()=>{resize(); if(reduce) render(0.016);});

  let clock=0, last=0; const proj=new THREE.Vector3();
  function place(el,p,depth,hidden){
    const w=hero.clientWidth,h=hero.clientHeight;
    proj.copy(p).project(camera);
    const sx=(proj.x+1)/2*w, sy=(1-proj.y)/2*h;
    el.style.transform=`translate(-50%,-50%) translate(${sx.toFixed(1)}px,${sy.toFixed(1)}px) scale(${(0.8+0.2*depth).toFixed(3)})`;
    el.style.opacity=hidden?0:(0.5+0.5*depth).toFixed(2); el.style.zIndex=Math.round(depth*100);
  }
  function render(t){
    const dt=Math.min(0.05,t-last); last=t; clock=t;
    gmat.uniforms.uCam.value.copy(camera.position); bodyMat.uniforms.uCam.value.copy(camera.position);
    spin.rotation.y=t*0.06; shell.rotation.y=-t*0.02; shell.rotation.z=t*0.01;
    const beat=0.5+0.5*Math.sin(t*1.8);
    coreMat.opacity=0.42+0.18*beat; haloMat.opacity=0.28+0.14*beat; halo.scale.setScalar(GR*(1.35+0.15*beat));
    updateFlows(dt); updateAgents(dt);
    for(let i=pulses.length-1;i>=0;i--){ const p=pulses[i], age=t-p.born, life=2.4; const k=age/life;
      p.m.scale.setScalar(GR*(1.02+0.7*k)); p.m.material.opacity=0.22*(1-k)*(1-k); p.m.lookAt(camera.position);
      if(age>life){ scene.remove(p.m); p.m.material.dispose(); pulses.splice(i,1);} }
    for(let i=gates.length-1;i>=0;i--){ const g=gates[i], age=t-g.born, life=1.1; const k=age/life;
      g.m.scale.setScalar(0.06+0.3*k); g.m.material.opacity=0.32*(1-k);
      if(age>life){ scene.remove(g.m); g.m.material.dispose(); gates.splice(i,1);} }

    // labels follow their 3D anchors
    const gDist=camera.position.distanceTo(gcenter);
    const w=hero.clientWidth,h=hero.clientHeight;
    proj.copy(gcenter).project(camera); const gsx=(proj.x+1)/2*w, gsy=(1-proj.y)/2*h;
    proj.copy(gcenter).add(new THREE.Vector3(GR,0,0)).project(camera); const gsr=Math.abs((proj.x+1)/2*w-gsx);
    for(const c of chips){
      chipPos(c,t,c.pos);
      const d=camera.position.distanceTo(c.pos);
      proj.copy(c.pos).project(camera); const sx=(proj.x+1)/2*w, sy=(1-proj.y)/2*h;
      const behind=d>gDist && Math.hypot(sx-gsx,sy-gsy)<gsr*0.98;
      place(c.el,c.pos,THREE.MathUtils.clamp((gDist+2.8-d)/5.6,0,1),behind);
    }
    tmp.copy(gcenter); tmp.y-=GR*0.02; tmp.z+=GR*0.36; place(coreChip,tmp,1,false);
    if(!reduce){ // label crossfades through what the intelligence serves
      const ph=t-nextUse; // negative while holding
      if(ph>0.35 && !coreChip.swapped){ useIdx=(useIdx+1)%coreUses.length; coreText.textContent=coreUses[useIdx]; coreChip.swapped=true; }
      if(ph>0.7){ nextUse=t+3.5; coreChip.swapped=false; }
      const o= ph<0?1 : ph<0.35?1-ph/0.35 : ph<0.7?(ph-0.35)/0.35 : 1;
      coreChip.style.opacity=o.toFixed(2);
    }
    renderer.render(scene,camera);
  }

  if(reduce){ for(let i=0;i<6;i++){ render(i*0.5); } return {destroy(){ renderer.dispose(); container.innerHTML=''; }}; }
  let running=true, raf=0, t0=performance.now();
  let lastFrame=0; const MIN_DT=isMobile?1000/30:0;
  function frame(now){ if(!running) return; if(now-lastFrame>=MIN_DT){ lastFrame=now; render((now-t0)/1000); } raf=requestAnimationFrame(frame); }
  if('IntersectionObserver' in window){
    new IntersectionObserver(([e])=>{
      if(e.isIntersecting && !running){ running=true; t0=performance.now()-clock*1000; last=clock; raf=requestAnimationFrame(frame); }
      if(!e.isIntersecting && running){ running=false; cancelAnimationFrame(raf); }
    }).observe(canvas);
  }
  raf=requestAnimationFrame(frame);
  return {destroy(){ running=false; cancelAnimationFrame(raf); renderer.dispose(); container.innerHTML=''; }};
};
