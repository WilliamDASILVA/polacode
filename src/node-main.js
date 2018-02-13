var fs = require('fs');

var arr = "137,80,78,71,13,10,26,10,0,0,0,13,73,72,68,82,0,0,2,98,0,0,0,97,8,6,0,0,0,117,93,205,97,0,0,29,4,73,68,65,84,120,94,237,157,9,152,85,197,149,199,207,235,133,102,81,160,89,66,20,84,16,26,144,85,84,118,87,20,116,50,142,43,42,202,46,38,140,153,140,198,140,49,25,163,137,26,53,26,151,184,204,36,19,147,9,209,4,247,5,151,153,9,221,200,34,116,35,32,17,186,89,20,122,103,107,16,16,17,108,160,151,55,95,93,173,103,189,243,170,110,213,237,190,141,239,61,254,239,251,252,124,239,222,186,117,235,254,1`10,181,254,190,115,206,173,27,33,162,200,238,221,187,47,139,68,34,119,16,209,64,34,234,64,14,159,104,52,234,208,202,222,36,172,126,236,103,66,11,16,0,1,16,0,1,16,0,1,16,136,39,16,137,68,66,65,18,160,159,207,136,104,125,99,99,227,131,93,187,118,253,223,200,39,159,124,114,105,70,70,198,219,46,163,104,174,52,53,247,120,57,198,176,250,113,185,102,180,1,1,16,0,1,16,0,1,16,72,13,2,1,100,200,247,130,154,219,143,235,241,13,13,13,223,137,236,217,179,167,144,136,198,248,141,168,169,226,211,148,227,154,114,76,106,76,15,140,18,4,64,0,4,64,0,4,64,224,155,38,224,42,73,234,56,155,114,140,56,222,225,184,34,33,98,123,136,168,147,14,76,80,41,106,233,246,124,140,65,207,231,114,243,91,162,79,151,243,162,13,8,128,0,8,128,0,8,28,11,4,28,228,36,48,134,230,246,25,244,248,16,219,239,21,34,150,80,236,21,68,70,92,219,186,182,147,244,109,237,109,251,3,223,69,28,0,2,32,0,2,32,0,2,32,144,178,4,108,114,100,219,207,47,220,181,189,107,59,83,132,44,78,196,92,229,38,204,118,166,190,92,207,97,155,49,97,245,99,59,15,246,131,0,8,128,0,8,128,0,8,132,79,32,136,232,248,157,221,212,143,75,255,46,109,76,162,165,27,147,218,95,76,196,92,132,37,140,54,188,15,151,62,93,163,100,225,223,126,244,8,2,32,0,2,32,0,2,32,144,106,4,92,197,73,39,79,182,99,109,251,93,133,76,246,35,150,174,176,174,67,97,147,37,191,253,65,197,203,118,46,62,25,130,182,79,181,201,132,241,130,0,8,128,0,8,128,0,8,152,9,184,136,145,122,180,173,61,223,239,215,62,104,95,218,232,152,77,196,130,72,150,41,114,213,156,244,99,80,209,10,218,30,147,27,4,64,0,4,64,0,4,64,32,117,8,216,228,135,95,137,75,123,215,180,165,107,187,64,226,103,18,177,230,10,88,80,249,178,9,148,109,191,105,10,53,245,184,212,153,146,24,41,8,128,0,8,128,0,8,164,47,1,23,145,210,70,154,44,11,181,6,149,170,184,186,46,67,223,77,137,158,37,164,38,131,10,152,218,62,136,124,5,105,171,2,110,170,88,53,245,184,244,157,218,184,50,16,0,1,16,0,1,16,72,94,2,201,32,96,46,178,166,107,19,68,200,226,68,44,136,28,217,4,76,215,151,235,54,49,45,108,226,20,164,175,228,157,102,24,25,8,128,0,8,128,0,8,128,64,80,2,65,229,71,244,239,34,85,114,28,174,253,219,162,100,46,231,140,137,152,171,216,248,9,152,75,31,46,109,36,8,155,236,233,110,156,77,224,130,222,108,180,7,1,16,0,1,16,0,1,16,72,30,2,174,145,50,155,36,153,228,204,165,88,223,175,77,80,137,19,239,154,212,62,53,233,39,76,182,39,33,109,251,117,17,47,23,233,114,145,44,151,54,201,51,157,48,18,16,0,1,16,0,1,16,0,129,32,4,92,68,204,41,18,197,234,188,92,4,202,38,105,177,37,41,52,53,100,198,49,113,17,107,73,1,51,9,154,139,184,233,228,45,200,141,115,109,11,145,115,37,133,118,32,0,2,32,0,2,32,16,156,128,139,72,5,239,53,254,8,23,17,83,35,98,174,130,37,207,226,218,222,73,238,84,17,51,73,152,77,148,92,211,149,178,93,144,254,92,110,70,83,228,169,41,199,184,140,5,109,64,0,4,64,0,4,64,0,4,130,19,104,138,160,5,61,166,41,2,21,36,13,169,107,107,147,177,88,106,210,37,90,229,39,80,54,25,115,61,214,116,235,76,226,100,147,186,160,83,1,130,22,148,24,218,131,0,8,128,0,8,128,128,59,129,160,242,196,123,182,201,148,41,106,165,27,161,95,29,153,216,231,42,97,46,237,76,109,60,17,11,42,97,38,233,210,109,119,105,203,225,4,149,182,32,242,20,164,173,251,180,66,75,16,0,1,16,0,1,16,0,129,48,8,4,17,53,107,180,201,161,14,76,39,110,58,65,51,73,91,144,237,218,136,217,174,93,187,226,138,245,133,168,184,136,144,77,176,116,105,200,32,81,45,215,72,151,77,172,108,251,195,152,52,232,3,4,64,0,4,64,0,4,64,160,101,8,216,196,44,72,61,88,83,162,105,188,0,223,38,94,129,163,108,170,136,113,9,179,201,150,64,174,10,151,75,123,121,155,120,91,23,249,83,111,177,171,212,153,166,5,4,173,101,254,96,208,43,8,128,0,8,128,0,8,52,133,128,77,184,116,145,43,245,60,77,137,142,249,73,147,232,219,79,186,184,160,217,218,171,227,143,235,87,138,152,139,132,249,165,30,229,190,147,79,62,185,253,87,39,107,32,162,195,68,212,40,124,173,41,55,5,199,128,0,8,128,0,8,128,0,8,128,192,55,72,32,66,68,25,68,148,67,68,153,98,28,213,213,213,251,85,233,242,19,50,39,145,219,185,115,167,39,73,182,104,150,73,194,120,10,242,148,83,78,233,240,149,128,9,9,195,7,4,64,0,4,64,0,4,64,0,4,210,129,128,144,177,156,170,170,170,207,184,136,53,85,198,188,126,132,136,185,22,217,219,210,144,98,127,207,158,61,219,17,209,23,233,64,28,215,0,2,32,0,2,32,0,2,32,0,2,10,129,182,149,149,149,7,77,226,229,82,79,198,163,100,145,154,154,154,88,218,208,175,192,94,39,97,186,246,61,123,246,204,38,162,122,220,54,16,0,1,16,0,1,16,0,1,16,72,51,2,89,149,149,149,117,242,154,116,226,21,88,198,164,136,185,72,88,99,163,40,247,250,242,99,122,186,178,87,175,94,34,135,250,117,195,52,187,3,184,28,16,0,1,16,0,1,16,0,129,99,150,64,70,69,69,69,131,118,25,10,101,169,140,140,12,81,86,246,117,177,191,223,114,24,94,68,204,38,97,170,116,217,218,158,122,234,169,162,176,13,31,16,0,1,16,0,1,16,0,1,16,72,59,2,229,229,229,81,151,154,48,209,70,254,163,74,25,23,180,200,142,29,59,226,138,245,117,203,74,112,249,210,213,148,201,104,89,239,222,189,33,98,105,55,237,112,65,32,0,2,32,0,2,32,0,2,130,64,89,89,153,231,77,60,234,165,139,128,113,25,211,182,49,137,152,140,130,153,10,244,69,103,186,54,125,250,244,129,136,97,174,130,0,8,128,0,8,128,0,8,164,37,129,210,210,210,184,136,152,26,245,146,23,204,35,97,186,200,88,44,170,38,68,76,23,241,114,73,71,234,68,44,47,47,15,34,150,150,83,15,23,5,2,32,0,2,32,0,2,32,176,121,243,102,173,136,249,214,129,25,210,148,158,160,109,223,190,93,155,154,148,169,70,211,66,175,186,253,162,109,223,190,125,33,98,152,167,32,0,2,32,0,2,32,0,2,105,73,96,211,166,77,9,34,230,151,170,148,130,102,42,224,247,68,204,47,34,230,87,15,166,70,196,100,187,126,253,250,65,196,210,114,234,225,162,64,0,4,64,0,4,64,0,4,62,254,248,99,47,128,165,214,127,153,100,203,212,78,45,246,143,108,219,182,45,33,34,102,74,75,242,237,92,196,196,239,211,78,59,13,34,134,121,10,2,32,0,2,32,0,2,32,144,150,4,54,110,220,232,69,196,116,255,112,241,146,191,125,183,171,34,166,171,249,18,7,203,104,151,72,71,242,226,125,46,99,3,6,12,128,136,165,229,212,195,69,129,0,8,128,0,8,128,0,8,108,216,176,193,42,98,198,52,36,19,56,79,208,132,136,233,82,140,60,93,233,34,97,226,152,129,3,7,66,196,48,79,65,0,4,64,0,4,64,0,4,210,146,192,250,245,235,141,34,166,166,28,93,101,44,178,117,235,214,88,106,146,71,196,100,52,140,23,230,235,82,146,114,219,160,65,131,32,98,105,57,245,112,81,32,0,2,32,0,2,32,0,2,235,214,173,243,21,49,117,169,10,33,99,9,239,150,228,79,80,10,17,211,69,196,164,132,249,73,151,110,223,224,193,131,33,98,152,167,32,0,2,32,0,2,32,0,2,105,73,160,164,164,196,73,196,116,197,252,94,42,146,215,151,109,217,178,37,238,169,73,91,13,152,77,204,134,12,25,2,17,75,203,169,135,139,2,1,16,0,1,16,0,1,16,40,46,46,110,146,136,197,61,41,249,213,123,41,61,41,171,174,174,142,75,77,74,196,66,184,100,93,152,77,190,212,253,67,135,14,133,136,97,158,130,0,8,128,0,8,128,0,8,164,37,129,181,107,215,6,22,49,83,138,210,139,144,9,17,179,173,35,38,69,203,69,204,78,63,253,244,80,68,108,240,128,33,158,32,226,3,2,32,0,2,32,0,2,32,0,2,205,37,80,178,161,56,20,63,89,179,102,141,85,196,164,120,249,45,113,17,75,83,74,17,115,73,73,186,136,216,176,97,195,66,185,80,136,88,115,167,28,142,7,1,16,0,1,16,0,1,16,144,4,194,18,177,15,63,252,176,89,34,198,83,148,145,170,170,170,132,5,93,77,194,101,19,49,177,255,204,51,207,132,136,97,222,131,0,8,128,0,8,128,0,8,36,21,129,176,68,108,245,234,213,81,191,136,151,16,45,211,126,53,69,25,19,50,33,98,126,209,48,46,95,234,122,98,234,62,249,253,172,179,206,130,136,37,213,212,195,96,64,0,4,64,0,4,64,0,4,194,18,177,15,62,248,192,139,136,169,178,165,174,25,198,37,204,36,101,177,212,100,101,101,101,172,22,203,84,160,111,139,144,169,251,135,15,31,14,17,107,198,124,111,221,185,11,245,157,58,147,246,22,175,161,173,11,11,156,123,234,52,96,48,157,112,238,249,84,249,214,27,116,112,251,86,231,227,208,16,4,64,0,4,64,0,4,142,5,2,97,137,216,170,85,171,98,169,73,41,89,182,8,152,90,43,150,80,184,47,69,76,247,100,164,20,172,32,34,54,98,196,8,136,88,51,102,116,255,25,55,81,239,171,174,165,131,53,53,180,248,123,211,156,123,146,199,173,126,248,126,170,41,124,207,120,156,16,189,222,19,39,81,229,219,243,32,108,206,116,209,16,4,64,0,4,64,32,213,9,132,37,98,43,87,174,12,44,98,190,81,49,85,196,116,194,165,75,63,242,167,40,213,54,35,71,142,132,136,53,99,182,118,191,96,60,245,159,126,35,237,46,94,75,107,31,127,200,185,167,188,201,211,41,239,218,27,232,239,66,196,138,150,26,143,235,52,120,40,141,126,224,17,250,251,35,15,210,142,165,139,157,251,71,67,16,0,1,16,0,1,16,72,101,2,97,137,216,138,21,43,172,34,198,211,150,252,233,201,184,90,49,33,98,65,163,97,60,82,166,254,30,61,122,52,68,204,97,166,30,223,235,84,58,80,93,69,209,134,6,135,214,241,77,58,13,26,66,123,215,21,199,109,148,34,182,234,190,187,232,147,213,171,40,247,180,129,180,111,211,71,9,253,183,61,225,68,58,239,183,255,77,31,220,255,115,175,157,238,211,42,167,21,157,49,108,24,173,93,91,76,181,181,181,129,199,135,3,64,0,4,64,0,4,64,32,217,8,132,37,98,203,151,47,143,21,235,243,212,164,46,242,101,75,95,70,164,136,249,69,195,76,251,84,1,147,223,199,140,25,19,138,136,157,119,246,249,209,87,223,120,137,234,235,235,105,234,13,211,105,231,206,93,244,195,31,221,74,83,167,77,166,55,231,189,69,247,221,115,191,245,30,183,201,200,164,135,122,143,165,70,106,140,107,219,42,146,73,247,86,172,164,93,117,118,201,184,251,23,119,209,21,87,94,70,243,222,120,139,126,121,239,253,212,182,109,91,122,249,181,23,232,184,227,142,163,233,83,110,164,170,170,42,235,56,68,131,97,119,220,69,57,157,114,169,102,121,17,245,159,58,147,50,91,181,162,104,99,35,173,250,229,221,116,112,251,54,58,231,201,223,81,70,86,54,209,151,207,176,82,213,252,255,161,13,207,252,54,174,239,161,183,220,78,221,199,93,68,145,140,12,106,56,114,132,26,235,234,40,171,77,27,170,250,191,119,232,200,129,207,189,136,152,168,43,235,126,238,56,202,200,206,242,250,223,52,247,89,42,125,229,5,18,226,55,250,193,199,40,146,149,73,89,57,173,169,177,190,222,235,59,146,153,73,251,203,75,105,217,109,255,18,59,215,229,87,94,78,221,186,125,139,118,236,216,65,111,191,249,142,211,245,161,17,8,128,0,8,128,0,8,36,51,129,176,68,172,168,168,40,86,172,175,74,86,80,9,139,181,175,168,168,240,254,215,111,122,58,210,148,154,20,219,185,136,137,126,194,18,49,177,142,216,79,239,252,9,93,55,233,26,90,87,178,158,254,253,39,119,210,27,111,189,70,251,247,239,167,27,174,155,226,137,153,237,211,62,171,21,61,220,123,12,69,217,210,176,217,145,12,250,113,105,33,237,107,56,108,235,130,58,117,234,68,175,188,254,34,117,236,216,145,190,119,211,205,244,221,217,179,104,228,200,17,244,210,139,175,208,67,15,62,108,61,94,54,24,243,235,39,41,183,255,105,222,207,253,213,149,180,167,120,13,181,59,225,68,42,249,143,39,188,109,253,166,221,72,20,201,160,104,67,189,39,82,219,22,47,160,226,167,31,143,245,223,243,242,171,105,224,172,217,94,148,107,75,193,223,168,207,117,83,168,77,151,46,180,163,104,41,237,124,191,144,218,157,216,131,242,38,77,241,218,239,90,189,138,106,119,213,80,143,11,39,80,180,33,74,11,111,154,226,137,95,191,105,51,169,221,9,61,188,113,124,242,225,106,58,180,119,143,39,127,7,107,182,211,230,185,207,198,206,117,229,196,43,168,107,151,174,180,239,211,125,244,242,75,175,56,95,35,26,130,0,8,128,0,8,128,64,178,18,8,83,196,196,53,10,145,50,137,152,46,53,169,123,154,82,244,19,17,34,166,91,57,223,84,168,175,139,130,169,178,54,118,236,216,80,34,98,114,65,215,223,255,225,119,52,98,228,112,58,114,228,8,101,101,101,209,45,63,248,33,21,46,43,58,170,247,121,244,152,209,244,212,211,191,161,40,69,41,59,59,155,62,88,181,154,190,59,107,118,160,49,140,122,240,81,234,60,104,8,109,121,55,159,138,159,124,212,120,172,136,80,141,159,251,154,87,112,175,138,216,240,95,60,64,93,135,157,73,139,102,207,160,218,157,53,212,243,178,43,105,192,172,127,38,153,138,148,169,201,141,115,254,64,21,243,94,245,250,31,245,192,35,148,219,127,0,189,123,227,100,58,242,217,62,111,155,40,212,239,55,117,38,173,188,231,78,218,253,225,106,237,56,218,181,109,71,221,79,234,78,213,213,213,116,168,246,80,160,235,68,99,16,0,1,16,0,1,16,72,70,2,97,137,88,97,97,161,182,70,204,148,130,212,109,143,147,50,33,98,46,209,48,117,105,11,25,13,211,201,218,217,103,159,29,170,136,245,232,209,221,139,132,9,9,155,255,183,124,250,233,29,119,58,223,223,142,153,57,52,111,232,119,40,66,17,79,162,228,167,77,70,22,77,90,55,159,42,14,237,119,238,235,191,158,249,79,26,57,106,36,213,126,81,75,215,95,55,197,57,37,41,79,48,234,87,143,81,199,188,126,244,238,204,27,168,238,115,243,121,77,34,118,242,37,151,210,224,239,223,66,123,74,214,210,206,21,203,169,215,21,19,41,39,55,151,10,127,244,175,180,191,162,148,116,197,250,226,73,202,94,151,93,69,11,166,79,138,157,211,181,168,223,25,12,26,130,0,8,128,0,8,128,64,10,16,8,75,196,150,45,91,102,20,177,32,50,22,91,139,172,188,188,220,57,34,198,211,145,92,206,196,239,115,206,57,39,84,17,123,241,229,231,169,111,191,60,175,104,188,117,235,214,129,34,98,173,51,50,233,242,46,189,40,35,146,145,48,69,94,217,181,153,234,121,206,210,48,145,46,187,252,82,250,249,61,119,211,193,3,7,169,125,135,246,198,136,88,175,83,123,81,110,167,92,218,176,126,67,66,36,169,185,34,246,237,177,231,208,25,63,254,25,213,125,241,5,101,183,107,71,181,187,119,209,71,115,254,72,59,150,45,241,70,173,19,44,177,173,207,213,215,197,137,88,239,137,215,83,255,105,51,105,195,159,158,137,69,206,248,101,139,107,28,52,104,32,149,151,85,80,77,77,77,10,252,121,97,136,32,0,2,32,0,2,32,224,79,32,44,17,91,186,116,105,220,130,174,186,130,125,91,106,50,46,34,38,68,204,37,34,166,75,73,54,52,52,144,250,196,165,104,115,238,185,231,134,38,98,191,122,248,1,186,228,31,46,166,130,252,2,122,126,238,139,244,199,63,61,227,201,208,181,19,39,57,213,136,133,49,41,69,141,216,155,239,188,238,69,228,38,93,51,153,238,185,239,231,116,250,176,161,244,250,107,243,188,226,253,88,148,173,77,27,154,60,229,6,202,200,204,160,141,235,55,210,210,165,203,226,78,223,92,17,235,55,253,38,234,125,229,68,218,252,210,92,58,176,117,139,87,172,31,137,54,210,238,146,53,212,80,123,232,107,17,251,245,3,177,117,196,116,34,214,190,87,31,26,251,248,211,116,120,239,94,218,52,247,207,212,170,67,7,202,108,219,78,91,35,86,87,87,71,207,206,121,206,171,5,196,7,4,64,0,4,64,0,4,82,153,64,88,34,246,222,123,239,37,188,226,40,51,51,147,100,132,203,47,21,169,93,117,191,172,172,44,110,249,10,93,186,81,110,83,197,75,87,172,47,164,236,188,243,206,11,69,196,110,158,253,253,232,19,79,61,70,91,183,110,165,43,254,233,106,239,222,223,246,111,183,210,180,233,83,169,184,120,29,77,159,50,227,168,204,135,103,255,50,135,6,15,25,68,79,61,241,52,253,121,206,115,222,83,147,243,222,126,141,58,119,238,76,183,221,122,59,189,183,228,203,197,83,5,220,169,211,166,80,78,235,28,42,42,44,242,30,48,80,63,162,70,172,67,159,60,90,56,107,106,147,82,147,162,38,108,224,77,55,39,92,179,120,50,114,229,189,63,163,14,189,251,82,191,169,51,226,214,17,243,68,236,170,107,105,193,140,235,227,206,121,214,93,247,81,183,17,163,98,125,29,222,247,41,45,154,61,221,19,58,241,25,62,226,44,26,118,198,48,58,116,232,48,253,245,185,191,66,196,142,202,76,195,73,64,0,4,64,0,4,90,146,64,88,34,182,100,201,18,235,83,147,170,152,201,53,196,140,203,88,168,34,166,202,21,127,221,145,174,46,76,141,164,73,73,59,255,252,243,67,17,49,89,172,223,146,55,37,236,190,5,228,54,109,219,120,81,187,48,63,162,110,236,194,57,207,83,99,93,61,45,249,193,44,106,251,237,19,169,238,192,1,58,249,146,127,164,188,107,174,167,173,139,10,104,237,111,30,9,116,202,118,61,78,162,156,220,78,84,183,255,51,250,188,170,50,225,216,11,47,26,71,221,123,244,128,136,5,162,138,198,32,0,2,32,0,2,201,74,32,44,17,91,188,120,177,39,98,82,182,116,145,48,245,137,74,221,123,41,227,34,99,66,196,116,75,84,232,182,73,217,226,194,166,110,191,224,130,11,142,89,17,107,169,201,39,11,248,169,161,129,214,207,249,61,237,47,43,165,206,3,6,121,5,251,109,190,213,141,214,62,253,24,109,91,144,31,218,233,197,83,162,34,10,88,82,82,66,203,11,223,15,173,95,116,4,2,32,0,2,32,0,2,223,20,129,176,68,108,209,162,69,177,212,164,73,198,92,35,98,158,144,149,150,150,38,164,38,77,98,166,10,152,46,77,41,246,143,27,55,14,34,214,2,179,76,20,217,231,77,154,236,173,7,38,63,245,181,181,84,62,239,85,218,252,194,95,66,59,99,118,86,54,77,157,49,133,214,21,175,163,149,43,245,43,239,135,118,50,116,4,2,32,0,2,32,0,2,71,137,64,88,34,182,112,225,66,79,196,120,212,139,215,137,153,106,197,18,22,126,85,69,140,215,125,9,54,106,74,210,180,134,152,122,28,68,172,101,103,148,88,33,63,251,184,227,141,41,197,150,61,59,122,7,1,16,0,1,16,0,129,212,36,16,166,136,169,233,72,221,162,174,170,168,137,239,226,99,92,133,95,138,152,169,62,140,203,151,174,72,95,149,181,139,46,186,8,17,177,212,156,163,24,53,8,128,0,8,128,0,8,164,45,129,176,68,108,193,130,5,113,17,49,221,10,251,124,155,111,157,152,16,49,254,164,36,79,77,154,22,112,229,209,50,241,27,34,150,182,115,24,23,6,2,32,0,2,32,0,2,41,75,224,104,137,24,143,150,249,173,41,230,237,219,188,121,115,220,130,174,46,69,250,166,40,153,216,62,126,252,248,80,34,98,41,123,167,49,112,16,0,1,16,0,1,16,0,129,180,37,80,80,80,224,20,17,83,159,172,228,50,22,87,39,102,19,49,158,138,84,139,244,213,167,37,229,119,136,88,218,206,61,92,24,8,128,0,8,128,0,8,28,243,4,132,136,73,201,146,66,165,62,61,41,190,243,122,48,103,17,227,79,66,202,181,196,252,10,246,249,190,9,19,38,32,34,118,204,79,83,0,0,1,16,0,1,16,0,129,244,36,144,159,159,175,141,136,233,228,75,87,43,198,215,32,139,165,38,121,228,75,190,186,72,87,7,166,19,52,41,113,16,177,244,156,120,184,42,16,0,1,16,0,1,16,0,1,34,33,98,106,68,140,47,101,193,159,152,52,213,136,197,182,139,212,164,110,89,10,46,91,234,111,249,93,151,154,132,136,97,154,130,0,8,128,0,8,128,0,8,164,43,1,46,98,60,77,105,122,138,82,125,213,81,220,26,99,65,69,76,200,151,248,8,121,19,223,121,196,236,226,139,47,70,106,50,93,103,31,174,11,4,64,0,4,64,0,4,142,113,2,243,231,207,79,72,77,202,186,48,129,38,72,141,88,236,169,73,151,136,152,42,92,226,68,58,9,19,109,32,98,199,248,12,197,229,131,0,8,128,0,8,128,64,26,19,176,137,152,46,53,105,42,214,247,182,111,218,180,201,91,190,130,175,37,102,42,212,247,91,186,2,34,150,198,51,15,151,6,2,32,0,2,32,0,2,32,64,58,17,243,91,212,149,191,10,41,225,213,71,97,137,152,172,23,67,68,12,179,20,4,64,0,4,64,0,4,64,32,93,9,8,17,11,90,172,239,183,168,107,104,17,49,136,88,186,78,57,92,23,8,128,0,8,128,0,8,128,128,36,0,17,195,92,0,1,16,0,1,16,0,1,16,0,129,111,136,64,210,138,152,44,230,71,106,242,27,154,25,56,45,8,128,0,8,128,0,8,128,64,139,19,8,189,70,204,117,249,10,60,53,217,226,247,22,39,0,1,16,0,1,16,0,1,16,72,114,2,161,63,53,233,42,98,234,34,174,130,145,207,58,98,57,68,116,36,201,57,98,120,32,0,2,32,0,2,32,0,2,32,16,148,64,171,249,243,231,31,150,79,66,202,119,76,30,149,117,196,2,172,172,159,75,68,251,130,94,25,218,131,0,8,128,0,8,128,0,8,128,64,146,19,232,152,159,159,255,169,238,165,223,252,93,147,162,13,127,253,145,186,77,126,111,137,119,77,14,36,162,13,73,14,18,195,3,1,16,0,1,16,0,1,16,0,129,32,4,196,155,131,6,228,231,231,175,11,186,124,133,250,122,35,46,99,49,17,19,17,47,185,4,5,95,224,149,191,198,200,111,177,215,9,19,38,140,33,162,42,34,218,30,228,234,208,22,4,64,0,4,64,0,4,64,0,4,146,152,192,73,68,212,35,63,63,191,200,111,245,124,211,75,191,213,181,196,100,74,211,19,52,81,35,38,196,138,167,30,77,47,253,86,101,77,247,210,239,241,227,199,143,38,162,12,34,58,244,149,140,137,52,165,248,142,15,8,128,0,8,128,0,8,128,0,8,164,18,129,214,68,212,145,136,78,36,34,241,189,177,160,160,96,185,46,53,41,163,94,65,222,53,233,36,98,106,164,76,141,140,249,69,197,4,97,249,46,74,121,188,60,150,75,31,239,83,141,198,241,239,242,88,245,223,226,92,242,183,250,93,108,227,251,228,157,151,251,228,126,191,25,161,182,77,165,153,131,177,130,0,8,128,0,8,128,64,50,16,16,178,225,247,81,247,243,182,82,110,196,241,242,187,108,99,218,167,182,139,213,97,137,200,211,87,53,91,106,154,144,71,175,248,62,25,185,18,237,196,119,241,113,141,134,73,89,51,157,55,54,206,210,210,210,40,127,207,164,252,173,147,45,91,218,210,246,46,74,151,190,197,133,234,222,125,169,19,49,85,184,76,82,198,133,139,203,149,159,108,65,196,146,225,207,24,99,0,1,16,0,1,16,72,85,2,126,34,166,19,47,121,157,126,194,37,197,140,11,26,151,48,85,130,132,64,73,145,226,133,244,186,151,114,251,165,24,109,233,71,63,193,227,99,138,8,17,51,165,37,253,164,203,229,165,224,166,54,186,168,24,31,131,148,49,85,220,76,34,198,35,92,186,223,54,249,130,112,165,234,159,56,198,13,2,32,0,2,32,144,138,4,252,36,76,23,1,83,183,169,178,166,147,47,117,155,148,34,121,188,233,5,221,126,145,50,23,81,51,201,93,194,75,190,149,167,41,189,115,74,17,227,34,36,4,72,149,33,53,181,168,251,46,133,201,84,67,166,30,35,218,240,190,117,50,200,101,76,141,148,233,210,145,106,228,75,23,41,147,55,206,47,53,9,33,75,197,63,103,140,25,4,64,0,4,64,32,85,8,184,68,193,120,196,203,244,155,71,205,164,12,113,233,82,127,243,136,148,42,106,106,42,82,21,54,181,184,222,212,198,36,120,166,72,92,92,106,82,141,52,233,106,185,120,100,75,252,214,201,148,174,134,76,30,171,19,52,83,36,206,37,10,38,69,81,29,187,78,196,76,219,116,82,166,182,77,149,9,141,113,130,0,8,128,0,8,128,64,42,17,176,69,194,116,210,229,39,98,178,63,53,106,101,138,146,169,178,164,70,176,100,123,46,92,60,154,101,170,15,19,227,243,19,52,30,109,139,27,95,89,89,89,172,70,140,167,34,213,20,162,148,47,157,60,169,79,79,242,87,33,249,45,125,225,42,98,186,72,152,140,92,113,33,243,139,138,65,190,82,233,79,21,99,5,1,16,0,1,16,72,119,2,54,41,83,35,94,92,198,84,1,147,251,120,74,146,111,247,19,49,151,136,22,95,160,85,21,55,93,4,141,167,52,117,133,251,17,33,98,188,102,139,11,152,46,34,198,35,103,58,25,211,245,203,197,76,74,22,47,226,231,99,144,130,165,171,19,147,125,248,73,152,173,70,204,52,217,145,170,76,247,255,12,224,250,64,0,4,64,0,4,90,146,128,95,177,190,122,94,147,148,153,100,76,166,252,76,209,47,41,97,58,25,82,163,97,162,157,174,184,222,36,109,178,63,147,132,113,89,211,201,87,92,244,78,21,49,91,68,204,86,39,166,30,207,23,135,229,79,83,154,162,97,60,77,170,246,41,111,152,236,139,203,153,250,91,39,101,205,137,136,65,200,90,242,207,20,125,131,0,8,128,0,8,164,27,1,23,1,107,74,68,76,87,23,166,74,151,228,200,107,193,120,180,76,151,46,212,69,197,120,218,82,77,87,186,124,87,207,195,165,204,219,87,94,94,30,151,154,12,34,99,170,108,113,177,82,35,100,188,79,157,148,233,162,112,166,109,58,225,146,162,36,143,81,165,75,221,199,39,186,77,176,108,251,211,237,15,7,215,3,2,32,0,2,32,0,2,97,18,176,9,153,110,63,151,45,85,174,116,251,164,236,72,33,227,242,99,146,48,94,39,198,69,76,21,39,94,3,166,246,169,219,103,75,75,198,250,22,34,102,74,69,170,2,197,69,203,180,246,152,110,29,49,91,63,106,132,203,148,162,52,165,36,253,164,204,20,21,83,229,202,38,90,182,253,97,78,86,244,5,2,32,0,2,32,0,2,233,70,32,136,136,169,109,121,74,82,149,44,254,157,11,24,79,87,114,41,82,35,104,186,168,22,143,166,249,9,154,169,160,223,47,18,22,151,154,172,168,168,72,136,136,233,210,134,186,168,150,110,209,85,147,136,233,34,109,60,213,201,163,90,46,79,79,170,178,165,147,50,190,223,229,119,186,253,17,224,122,64,0,4,64,0,4,64,32,25,9,52,39,53,41,101,202,38,97,60,29,168,74,152,46,34,102,170,233,50,173,7,166,246,161,107,195,207,145,16,157,19,34,230,26,17,243,75,49,242,62,116,245,100,226,226,109,145,52,30,249,50,213,131,169,237,76,145,47,57,233,228,147,149,242,55,143,114,33,234,149,140,127,158,24,19,8,128,0,8,128,64,186,19,176,137,152,44,200,87,57,240,72,25,143,126,241,52,165,105,89,11,93,36,75,74,147,56,159,169,94,204,148,114,244,147,48,157,220,197,198,45,68,76,21,36,157,80,153,68,141,71,191,76,162,165,182,227,231,226,79,95,170,178,167,70,184,116,235,134,233,234,194,116,245,96,126,162,197,107,202,210,125,210,227,250,64,0,4,64,0,4,64,32,89,8,168,210,164,27,147,95,170,210,84,23,38,143,81,133,137,71,193,212,180,161,46,109,105,42,194,119,17,53,147,116,113,33,140,61,245,89,89,89,25,123,197,145,41,26,165,75,17,154,158,160,148,162,229,23,249,210,9,27,175,35,211,69,188,76,117,98,92,166,116,191,213,168,153,122,179,17,13,75,150,63,71,140,3,4,64,0,4,64,224,88,36,160,171,33,179,213,135,73,177,82,219,233,34,99,106,187,132,148,32,123,17,184,20,35,191,72,153,186,100,134,223,19,150,126,245,97,124,95,68,138,88,80,9,51,213,124,169,253,216,100,76,39,95,92,250,212,212,164,26,33,83,101,139,71,193,76,81,49,157,116,65,196,142,197,63,123,92,51,8,128,0,8,128,64,178,16,48,137,152,45,26,38,37,75,39,91,242,218,120,116,202,239,183,56,198,79,194,116,34,103,106,239,215,54,65,24,133,136,73,193,49,69,190,212,212,164,46,154,229,247,164,163,73,198,116,194,166,139,120,241,115,251,73,151,95,90,178,169,117,97,16,181,100,249,83,197,56,64,0,4,64,0,4,82,145,128,78,180,116,215,97,170,23,51,9,153,174,86,76,149,51,83,109,152,41,50,102,138,98,233,82,138,126,109,85,161,211,137,159,186,205,27,111,69,69,197,222,72,36,146,171,147,32,221,83,145,126,17,47,83,122,209,38,99,170,220,249,201,24,223,167,222,72,91,84,204,36,84,174,162,229,218,46,21,255,72,48,102,16,0,1,16,0,1,16,8,155,64,83,5,76,141,102,241,168,151,238,183,218,94,151,158,52,109,83,211,140,174,18,230,90,255,229,146,154,20,109,162,209,232,167,145,210,210,210,229,89,89,89,163,92,163,98,54,17,179,201,24,223,239,242,84,164,78,192,212,109,114,236,124,18,169,242,228,23,17,131,100,133,253,231,135,254,64,0,4,64,0,4,64,192,78,64,23,237,226,34,166,202,151,218,163,174,62,76,182,117,17,50,217,86,247,20,164,45,146,229,42,90,186,168,156,220,38,206,95,95,95,255,126,100,197,138,21,215,116,235,214,237,101,41,51,92,122,252,106,182,92,82,146,182,20,36,239,223,52,14,41,75,234,211,147,106,91,121,115,228,249,212,223,126,83,1,18,102,255,67,65,11,16,0,1,16,0,1,16,104,41,2,182,200,25,151,53,211,111,185,93,23,233,82,197,140,203,154,159,44,249,165,49,253,22,137,181,165,63,229,88,183,111,223,126,85,132,136,142,95,177,98,197,37,93,186,116,185,61,18,137,244,143,68,34,237,77,11,169,218,22,88,53,73,155,77,238,116,233,72,157,144,113,241,82,165,203,175,62,76,39,108,234,132,130,140,181,212,159,23,250,5,1,16,0,1,16,0,1,51,1,147,132,73,145,145,71,154,234,196,84,169,50,125,87,251,178,69,202,108,107,142,241,72,152,95,218,83,183,79,244,31,141,70,247,53,54,54,126,180,123,247,238,71,71,141,26,149,255,255,218,117,224,240,96,70,192,49,0,0,0,0,73,69,78,68,174,66,96,130".split(',');

var byteArray = new Uint8Array(arr);
console.log(byteArray.length);
fs.writeFile('testfile.png',new Buffer(byteArray));