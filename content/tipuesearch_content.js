var tipuesearch = {"pages": [{'title': 'About', 'text': ' https://github.com/mdecycu/cmsite \n', 'tags': '', 'url': 'About.html'}, {'title': 'ANSIC', 'text': '#include <stdio.h> int main() { int i, j, flag, ip = 0; \n // Print a message indicating the purpose of the program printf("The prime numbers between 1 and 199 are:\\n"); \n // Loop to check prime numbers from 2 to 198 for (i = 2; i < 199; i++) { flag = 1; \n // Loop to check if i is divisible by any number other than 1 and itself for (j = 2; j <= i / 2 && flag == 1; j++) { if (i % j == 0) { flag = 0; } } \n // If i is prime, print it if (flag == 1) { printf("%5d ", i); ip++; \n // Print a newline character after every 10 prime numbers if (ip % 10 == 0) { printf("\\n"); } } } \n printf("\\n"); \n return 0; } \n', 'tags': '', 'url': 'ANSIC.html'}, {'title': '倉儲維護', 'text': '', 'tags': '', 'url': '倉儲維護.html'}, {'title': 'replit', 'text': '以電子郵箱註冊作為 Replit 登入帳號後, 登入自己的 Github 帳號 \n 登入 Replit 後, 選擇 account 下方的 Connected services, 點選 Github 右邊的 Connect, 以便連結與 Github 的權限 \n 利用 Replit 的 create Repl 建立專案, 且是利用 Import 的方式選擇 Python 作為 Template, 將 Github 倉儲輸入 Repl \n 首先輸入 python3 main.py 作為 .replit 的內容, 之後只要按下 Run 就是執行 python3 main.py \n 利用 密碼產生程式 , 建立 secrets 頁面中的 config 管理者登入密碼變數 \n 利用 Shell 指令:\xa0git submodule update --init\xa0取下子模組, 並以\xa0pip install flask flask_cors bs4 lxml pelican markdown gevent\xa0安裝 Run 執行所需的 Python 模組 \n 最後按下 Run 就可以啟動編輯網站, 編輯結束利用 Convert 轉為靜態網站, 最後利用 Git 頁面新增提交並 push即可完成 \n', 'tags': '', 'url': 'replit.html'}, {'title': '課堂作業', 'text': '', 'tags': '', 'url': '課堂作業.html'}, {'title': 'w5', 'text': '// 包含標準輸出入程式庫的標頭文件\n// https://blog.csdn.net/weixin_38468077/article/details/101069365\n// http://www.gnuplot.info/demo/\n// https://github.com/sysprog21/rv32emu\n// https://github.com/sysprog21/semu \n// https://docs.google.com/presentation/d/14N0cWG2SnBSqhc2cLF0_2VerB9FF8JN3\n// https://cs61c.org/fa23/\n// https://greenteapress.com/wp/think-python-2e/\n// https://github.com/ecalvadi/c99-examples\n// https://github.com/gouravthakur39/beginners-C-program-examples\n// https://github.com/ergenekonyigit/Numerical-Analysis-Examples\n// https://www.che.ncku.edu.tw/facultyweb/changct/html/teaching/CPPandMATLAB/Past/pdf%20Files/Chap02-Ling.pdf\n// https://gteceducation.com.sg/Brochures/PROGRAMMING/C%20PROGRAMMING%20FULL.pdf\n// https://jsommers.github.io/cbook/cbook.pdf\n// https://jsommers.github.io/cbook/index.html\n// http://student.itee.uq.edu.au/courses/csse2310/CProgrammingNotes.pdf\n// http://cslibrary.stanford.edu/101/EssentialC.pdf\n// https://publications.gbdirect.co.uk/c_book/\n// https://www.fossil-scm.org/fossil-book/doc/2ndEdition/fossilbook.pdf\n// ***** execute on replit \n// cd downloads\n// cc gnuplot_ex1.c -o gnuplot_ex1\n// ./gnuplot_ex1\n#include <stdio.h>\n \n// 主函式\nint main() {\n    // Start a Gnuplot process using popen\n    FILE *gnuplotPipe = popen("gnuplot -persistent", "w");\n    if (!gnuplotPipe) {\n        fprintf(stderr, "Failed to start Gnuplot.\\n");\n        return 1;\n    }\n \n    // Use Gnuplot plotting commands, specify font and output as PNG\n    fprintf(gnuplotPipe, "set terminal png font \'default,10\' size 800,400\\n");\n    fprintf(gnuplotPipe, "set output \'./../images/gnuplot_ex1.png\'\\n");\n    fprintf(gnuplotPipe, "plot sin(x)");\n    // Close popen\n    pclose(gnuplotPipe);\n \n    return 0;\n} \n \n \n \n', 'tags': '', 'url': 'w5.html'}, {'title': 'w6', 'text': '// https://en.wikipedia.org/wiki/Flag_of_the_Republic_of_China\n// 內政部國旗參考資料: https://www.moi.gov.tw/cp.aspx?n=10621\n// cc roc_flag_in_gd.c -lgd -lm to link with gd and math library\n// https://www.rapidtables.com/web/color/RGB_Color.html\n// 幾何形狀著色與繪圖練習\n// 以下 gd 繪圖程式嘗試畫出 ROC 國旗, 請根據下列程式內容完成後續的國旗繪圖\n#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_roc_flag(gdImagePtr img);\nvoid draw_white_sun(gdImagePtr img, int x, int y, int size, int color);\n \nint main() {\n    // width 3: height 2\n    int width = 1200;\n    // 國旗長寬比為 3:2\n    int height = (int)(width*2.0 / 3.0);\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    draw_roc_flag(img);\n \n    FILE *outputFile = fopen("./../images/roc_flag_in_gd.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \nvoid draw_roc_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 白日位於青天面積正中央, 因此中心點座標為長寬各 1/4 處\n    int center_x = (int)(width/4);\n    int center_y = (int)(height/4);\n    // gdImageFilledEllipse 需以長寬方向的 diameter 作圖\n    // 由於中央白日圓形的半徑為青天寬度的 1/8\n    // 因此中央白日圓形的直徑為青天寬度的 1/4, 也就是國旗寬度的 1/8\n    // 而且白日十二道光芒的外圍圓形其半徑也是國旗寬度的1/8\n    int sun_radius = (int)(width/8);\n    // 中央白日圓形的直徑等於十二道光芒外圍圓形的半徑\n    int white_circle_dia = sun_radius;\n    // 中央藍色圓形半徑為中央白日的 1又 2/15\n    int blue_circle_dia = white_circle_dia +  white_circle_dia*2/15;\n    // 根據 https://www.moi.gov.tw/cp.aspx?n=10621 訂定國旗三種顏色值\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 149); // 藍色\n    // 根據畫布大小塗上紅色長方形區域\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n    // 青天面積為整面國旗的 1/4, 也是採用長方形塗色\n    gdImageFilledRectangle(img, 0, 0, (int)(width/2.0), (int)(height/2.0), blue);\n    // 先設法以填色畫出六個白色堆疊菱形\n    draw_white_sun(img, center_x, center_y, sun_radius, white);\n    // 利用一個藍色大圓與白色小圓畫出藍色環狀\n    gdImageFilledEllipse(img, center_x, center_y, blue_circle_dia, blue_circle_dia, blue);\n    gdImageFilledEllipse(img, center_x, center_y, white_circle_dia, white_circle_dia, white);\n \n}\n \nvoid draw_white_sun(gdImagePtr img, int center_x, int center_y, int sun_radius, int color) {\n    // M_PI 大小定義於 math.h 標頭檔中, 因為三角函數中採用徑度為角度單位\n    // 因此定義將角度轉為徑度的轉換變數為 deg, 角度值乘上 deg 就可轉為徑度\n    float deg = M_PI/180;\n    // 根據十二道光芒的每一尖角的角度為 15 度, 求出其對應直角三角形的另一角度為 75 度\n    // 求出十二道光芒中任一菱形的 small radius, 也就是菱形的另一個對應小圓的半徑大小\n    float sr = sun_radius/tan(75*deg);\n    int ax, ay, bx, by, dx, dy, ex, ey;\n    gdPoint points[4];\n    /* 在塗上十二道光芒中的單一菱形區域之前, 先以座標點畫線測試是否正確\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // AB\n    gdImageLine(img, ax, ay, bx, by, color);\n    // BE\n    gdImageLine(img, bx, by, ex, ey, color);\n    // ED\n    gdImageLine(img, ex, ey, dx, dy, color);\n    // DA\n    gdImageLine(img, dx, dy, ax, ay, color);\n    */\n    ax = center_x;\n    ay = center_y - sun_radius;\n    bx = center_x - sun_radius*tan(15*deg);\n    by = center_y;\n    ex = center_x;\n    ey = center_y + sun_radius;\n    dx = center_x + sun_radius*tan(15*deg);\n    dy = center_y;\n    // 確定單一菱形區域的塗色正確後, 利用迴圈每次轉動 30 度, 總共轉六次即可塗上十二道光芒區域\n    for (int i=1;i<=6;i++){\n    // A\n    points[0].x = ax+sun_radius*sin(30*deg*i);\n    points[0].y = ay+sun_radius-sun_radius*cos(30*deg*i);\n    // B\n    points[1].x = bx+sr-sr*cos(30*deg*i);\n    points[1].y = by-sr*sin(30*deg*i);\n    // E\n    points[2].x = ex-sun_radius*sin(30*deg*i);\n    points[2].y = ey-(sun_radius-sun_radius*cos(30*deg*i));\n    // D\n    points[3].x = dx-(sr-sr*cos(30*deg*i));\n    points[3].y = dy+sr*sin(30*deg*i);\n    // 對菱形區域範圍塗色\n    gdImageFilledPolygon(img, points, 4, color);\n    // 在菱形區域外圍畫線, 明確界定菱形範圍\n    gdImagePolygon(img, points, 4, color);\n    }\n}\n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_usa_flag(gdImagePtr img);\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n \nint main() {\n    int width = 800;\n    int height = (int)(width / 1.9);\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    draw_usa_flag(img);\n \n    FILE *outputFile = fopen("./../images/usa_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n \n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n \n    return 0;\n}\n \nvoid draw_usa_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, white, blue;\n    // 国旗颜色\n    red = gdImageColorAllocate(img, 178, 34, 52); // 红色条纹\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色条纹\n    blue = gdImageColorAllocate(img, 60, 59, 110); // 蓝色矩形\n \n    int stripe_height = height / 13;\n    int stripe_width = width;\n    int star_size = (int)(0.0308 * height); // 星星大小\n \n    for (int y = 0; y < height; y += stripe_height) {\n        if (y / stripe_height % 2 == 0) {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, red);\n        } else {\n            gdImageFilledRectangle(img, 0, y, stripe_width, y + stripe_height, white);\n        }\n    }\n \n    gdImageFilledRectangle(img, 0, 0, width * 2 / 5, stripe_height * 7, blue);\n \n    int star_spacing_x = (int)(0.129 * height); // 横向星星之间的间距\n    int star_spacing_y = (int)(0.054 * height); // 纵向星星之间的间距\n    int star_start_x = (int)(0.125 * height); // 星星的起始X位置\n    int star_start_y = (int)(0.0485 * height); // 星星的起始Y位置\n \n    for (int row = 0; row < 9; row++) {\n        int starsPerRow = (row % 2 == 0) ? 6 : 5;\n \n        // 计算2、4、6和8排星星的偏移量\n        int offset_x = (row % 2 == 0) ? star_spacing_x / -2 : 0;\n \n        for (int star = 0; star < starsPerRow; star++) {\n            int x = star_start_x + star * star_spacing_x + offset_x;\n \n            // 旋转角度（以弧度为单位）\n            double rotation_angle = M_PI / 5; // 忘記多少度的旋转\n \n            int y = star_start_y + row * star_spacing_y;\n            draw_star(img, x, y, star_size, white, rotation_angle);\n        }\n    }\n}\n \nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n \n    for (int i = 0; i < 10; i++) {\n        double angle = M_PI / 2 + i * 2 * M_PI / 10 + rotation_angle;\n        int radius = (i % 2 == 0) ? size : size / 2;\n        points[i].x = x + radius * cos(angle);\n        points[i].y = y + radius * sin(angle);\n    }\n \n    // 用指定的颜色填充星星\n    gdImageFilledPolygon(img, points, 10, color);\n}\n \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_japan_flag(gdImagePtr img);\nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color);\n \nint main() {\n    int originalWidth = 1200;\n    int originalHeight = (int)(originalWidth * 2.0 / 3.0);\n    gdImagePtr img = gdImageCreateTrueColor(originalWidth, originalHeight);\n    gdImageAlphaBlending(img, 0);\n \n    draw_japan_flag(img);\n \n    // 新的宽度和高度以适应 "images" 文件夹\n    int newWidth = 600;\n    int newHeight = (int)(newWidth * 2.0 / 3.0);\n \n    // 创建新图像并进行缩放\n    gdImagePtr resizedImage = gdImageCreateTrueColor(newWidth, newHeight);\n    gdImageAlphaBlending(resizedImage, 0);\n    gdImageCopyResampled(resizedImage, img, 0, 0, 0, 0, newWidth, newHeight, originalWidth, originalHeight);\n \n  FILE *outputFile = fopen("./../images/japan_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n    gdImagePng(resizedImage, outputFile);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    gdImageDestroy(resizedImage);\n \n    return 0;\n}\n \nvoid draw_japan_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n \n    // 创建一个白色背景\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n    gdImageFilledRectangle(img, 0, 0, width - 1, height - 1, white);\n \n    // 绘制红色圆圈（太阳）\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int center_x = width / 2;\n    int center_y = height / 2;\n    int radius = (int)((width * 2) / 3);\n    draw_red_sun(img, center_x, center_y, radius, red);\n}\n \nvoid draw_red_sun(gdImagePtr img, int x, int y, int size, int color) {\n  // 減小 size 的值,例如將他的值減半\n  size = size / 2;\n    gdImageArc(img, x, y, size, size, 0, 360, color);\n    gdImageFillToBorder(img, x, y, color, color);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_chinese_flag(gdImagePtr img);\n \nint main() {\n    int width = 300; // 國旗寬度\n    int height = 200; // 國旗高度\n \n    gdImagePtr im = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(im, 0);\n \n    draw_chinese_flag(im);\n \n    FILE *outputFile = fopen("./../images/proc_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时出错。\\n");\n        return 1;\n    }\n \n    gdImagePngEx(im, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(im);\n \n    return 0;\n}\n \n// 声明 draw_star 函数\nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle);\n \nvoid draw_chinese_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n    int red, yellow;\n \n    // 國旗顏色\n    red = gdImageColorAllocate(img, 255, 0, 0); // 紅色背景\n    yellow = gdImageColorAllocate(img, 255, 255, 0); // 黃色星星\n \n    // 畫紅色背景\n    gdImageFilledRectangle(img, 0, 0, width, height, red);\n \n    // 設置星星的大小和位置\n    int star_size = (int)(0.28 * height);\n    int star_x = (int)(0.165 * width);\n    int star_y = (int)(0.265 * height);\n \n    // 畫大星星\n    draw_star(img, star_x, star_y, star_size, yellow, 11.0);\n \n    // 繪製小星星，位置根據實際國旗比例計算\n    double radius = 0.15 * height;\n    double angle = 360 / 7 * M_PI / 179.0;\n    double rotation = -M_PI / 7.5;\n    int cx = (int)(0.32 * width);\n    int cy = (int)(0.27 * height);\n \n    for (int i = -1; i < 3; i++) {\n        int x = (int)(cx + radius * cos(i * angle + rotation));\n        int y = (int)(cy + radius * sin(i * angle + rotation));\n        draw_star(img, x, y, 19, yellow, M_PI / 5.0);\n    }\n}\n \nvoid draw_star(gdImagePtr img, int x, int y, int size, int color, double rotation_angle) {\n    gdPoint points[10];\n \n    // 计算星形的五个外点和五个内点\n    double outer_radius = size / 2;\n    double inner_radius = size / 6;\n    double angle = M_PI / 5.0;\n \n    for (int i = 0; i < 10; i++) {\n        double radius = (i % 2 == 0) ? outer_radius : inner_radius;\n        double theta = rotation_angle + i * angle;\n        points[i].x = x + radius * cos(theta);\n        points[i].y = y + radius * sin(theta);\n    }\n \n    // 使用 gdImageFilledPolygon 绘制星形\n    gdImageFilledPolygon(img, points, 10, color);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \nvoid draw_uk_flag(gdImagePtr img);\nvoid fillTriangle(gdImagePtr img, int x1, int y1, int x2, int y2, int x3, int y3, int color);\n \nint main() {\n    // 设置国旗的宽和高\n    int width = 1200;\n    int height = width / 2;\n \n    // 创建图像\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    // 绘制英国国旗\n    draw_uk_flag(img);\n \n    // 将图像保存到文件\n    FILE *outputFile = fopen("./../images/uk_flag.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "打开输出文件时发生错误。\\n");\n        return 1;\n    }\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n    return 0;\n}\n \n \n \nvoid draw_uk_flag(gdImagePtr img) {\n    int width = gdImageSX(img);\n    int height = gdImageSY(img);\n \n    int red, white, blue;\n    red = gdImageColorAllocate(img, 204, 0, 0);       // 红色\n    white = gdImageColorAllocate(img, 255, 255, 255); // 白色\n    blue = gdImageColorAllocate(img, 0, 0, 153);      // 蓝色\n \n    gdImageFilledRectangle(img, 0, 0, width, height, blue);\n \n \n  int x1, y1, x2, y2, x3, y3;\n  {\n    int line_thickness = 100;\n    gdImageSetThickness(img, line_thickness);\n \n    int x1, y1, x2, y2, x3, y3;\n \n    // 绘制白色斜线\n    x1 = 0;\n    y1 = 600;\n    x2 = 1200;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n    x1 = 0;\n    y1 = 0;\n    x2 = 1200;\n    y2 = 600;\n    gdImageLine(img, x1, y1, x2, y2, white);\n}\n  {\n    int line_thickness = 33;\n    gdImageSetThickness(img, line_thickness);\n \n \n    // 绘制红色斜线\n    x1 = 566;\n    y1 = 300;\n    x2 = 1166;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 1233;\n    y1 = 600;\n    x2 = 633;\n    y2 = 300;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 566;\n    y1 = 300;\n    x2 = -33;\n    y2 = 0;\n    gdImageLine(img, x1, y1, x2, y2, red);\n \n    x1 = 600;\n    y1 = 316.5;\n    x2 = 0;\n    y2 = 616.5;\n    gdImageLine(img, x1, y1, x2, y2, red);\n  }\n  {\n  int line_thickness = 33;\n  gdImageSetThickness(img, line_thickness);\n \n  int x1, y1, x2, y2, x3, y3;\n \n  // 绘制  斜线\n  x1 = 0;\n  y1 = 600;\n  x2 = 1200;\n  y2 = 0;\n  gdImageLine(img, x1, y1, x2, y2, red );\n \n \n  x1 = 1200;\n    y1 = 16.5;\n    x2 = 600;\n    y2 = 316.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n \n  x1 = 0;\n    y1 = 583.5;\n    x2 = 600;\n    y2 = 283.5;\n    gdImageLine(img, x1, y1, x2, y2, white);\n \n \n  }\n \n    // 绘制白色十字\n    int cross_width = width / 32;\n    int cross_arm_width = width / 32;\n    int center_x = width / 2;\n    int center_y = height / 2;\n \n    gdImageFilledRectangle(img, center_x + 2.7 * cross_width, 0, center_x - 2.7 * cross_width, height, white);\n    gdImageFilledRectangle(img, 0, center_y + 2.7 * cross_arm_width, width, center_y - 2.7 * cross_arm_width, white);\n \n    // 绘制红色十字\n    gdImageFilledRectangle(img, center_x + 1.5 * cross_width, 0, center_x - 1.5 * cross_width, height, red);\n    gdImageFilledRectangle(img, 0, center_y + 1.5 * cross_arm_width, width, center_y - 1.5 * cross_arm_width, red);\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n#define WIDTH 600\n#define HEIGHT 400\n#define GREEN 0x138808  // Green color\n#define RED 0xE30A17     // Red color\n\nvoid drawBangladeshFlag() {\n    gdImagePtr im;\n    FILE *output;\n\n    im = gdImageCreateTrueColor(WIDTH, HEIGHT);\n    output = fopen("bangladesh_flag.png", "wb");\n\n    // Draw green background\n    gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, GREEN);\n\n    // Draw red circle\n    int centerX = WIDTH / 2;\n    int centerY = HEIGHT / 2;\n    int circleRadius = 100;\n\n    gdImageFilledEllipse(im, centerX, centerY, circleRadius * 2, circleRadius * 2, RED);\n\n    gdImagePng(im, output);\n    fclose(output);\n    gdImageDestroy(im);\n}\n\nint main() {\n    drawBangladeshFlag();\n    return 0;\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n#define WIDTH 600\n#define HEIGHT 400\n#define WHITE 0xFFFFFF  // White color\n#define BLUE 0x0033A0   // Blue color\n#define RED 0xD52B1E    // Red color\n\nvoid drawRussiaFlag() {\n    gdImagePtr im;\n    FILE *output;\n\n    im = gdImageCreateTrueColor(WIDTH, HEIGHT);\n    output = fopen("russia_flag.png", "wb");\n\n    // Draw white rectangle (top part)\n    int whiteRectWidth = WIDTH;\n    int whiteRectHeight = HEIGHT / 3;\n    int whiteRectX = 0;\n    int whiteRectY = 0;\n\n    gdImageFilledRectangle(im, whiteRectX, whiteRectY, whiteRectX + whiteRectWidth, whiteRectY + whiteRectHeight, WHITE);\n\n    // Draw blue rectangle (middle part)\n    int blueRectWidth = WIDTH;\n    int blueRectHeight = HEIGHT / 3;\n    int blueRectX = 0;\n    int blueRectY = HEIGHT / 3;\n\n    gdImageFilledRectangle(im, blueRectX, blueRectY, blueRectX + blueRectWidth, blueRectY + blueRectHeight, BLUE);\n\n    // Draw red rectangle (bottom part)\n    int redRectWidth = WIDTH;\n    int redRectHeight = HEIGHT / 3;\n    int redRectX = 0;\n    int redRectY = 2 * HEIGHT / 3;\n\n    gdImageFilledRectangle(im, redRectX, redRectY, redRectX + redRectWidth, redRectY + redRectHeight, RED);\n\n    gdImagePng(im, output);\n    fclose(output);\n    gdImageDestroy(im);\n}\n\nint main() {\n    drawRussiaFlag();\n    return 0;\n} \n \n \n \n \n \n \n \n \n #include <stdio.h> \n #include <gd.h> \n \xa0 \n #define WIDTH 600 \n #define HEIGHT 400 \n #define RED 0xD21C1C\xa0\xa0 // Red color \n #define WHITE 0xFFFFFF // White color \n #define GREEN 0x318B41\xa0 // Corrected Green color \n \xa0 \n void   drawHungaryFlag() { \n \xa0\xa0\xa0\xa0 gdImagePtr im; \n \xa0\xa0\xa0\xa0 FILE   *output; \n \xa0 \n \xa0\xa0\xa0\xa0 im = gdImageCreateTrueColor(WIDTH, HEIGHT); \n \xa0\xa0\xa0\xa0 output =  fopen ( "hungary_flag.png" ,  "wb" ); \n \xa0 \n \xa0\xa0\xa0\xa0 // Allocate red, white, and green colors \n \xa0\xa0\xa0\xa0 int   redIndex = gdImageColorAllocate(im, (RED >> 16) & 0xFF, (RED >> 8) & 0xFF, RED & 0xFF); \n \xa0\xa0\xa0\xa0 int   whiteIndex = gdImageColorAllocate(im, (WHITE >> 16) & 0xFF, (WHITE >> 8) & 0xFF, WHITE & 0xFF); \n \xa0\xa0\xa0\xa0 int   greenIndex = gdImageColorAllocate(im, (GREEN >> 16) & 0xFF, (GREEN >> 8) & 0xFF, GREEN & 0xFF); \n \xa0 \n \xa0\xa0\xa0\xa0 // Draw red upper third \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT / 3 - 1, redIndex); \n \xa0 \n \xa0\xa0\xa0\xa0 // Draw white middle third \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(im, 0, HEIGHT / 3, WIDTH - 1, 2 * HEIGHT / 3 - 1, whiteIndex); \n \xa0 \n \xa0\xa0\xa0\xa0 // Draw green lower third \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(im, 0, 2 * HEIGHT / 3, WIDTH - 1, HEIGHT - 1, greenIndex); \n \xa0 \n \xa0\xa0\xa0\xa0 // Save the image \n \xa0\xa0\xa0\xa0 gdImagePng(im, output); \n \xa0\xa0\xa0\xa0 fclose (output); \n \xa0\xa0\xa0\xa0 gdImageDestroy(im); \n } \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 drawHungaryFlag(); \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n \n #include <stdio.h> \n #include <gd.h> \n #include <math.h> \n \xa0 \n #define WIDTH 600 \n #define HEIGHT 400 \n #define RED 0xCE1126\xa0\xa0\xa0 // Red color \n #define WHITE 0xFFFFFF\xa0 // White color \n #define BLUE 0x0033A0\xa0\xa0 // Blue color \n \xa0 \n void   drawLaosFlag() { \n \xa0\xa0\xa0\xa0 gdImagePtr im; \n \xa0\xa0\xa0\xa0 FILE   *output; \n \xa0 \n \xa0\xa0\xa0\xa0 im = gdImageCreateTrueColor(WIDTH, HEIGHT); \n \xa0\xa0\xa0\xa0 output =  fopen ( "laos_flag.png" ,  "wb" ); \n \xa0 \n \xa0\xa0\xa0\xa0 // Draw red background \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(im, 0, 0, WIDTH - 1, HEIGHT - 1, RED); \n \xa0 \n \xa0\xa0\xa0\xa0 // Draw blue rectangle (symbolizing the Mekong River) \n \xa0\xa0\xa0\xa0 int   blueRectWidth = WIDTH; \n \xa0\xa0\xa0\xa0 int   blueRectHeight = HEIGHT / 2;\xa0  // Increase the height \n \xa0\xa0\xa0\xa0 int   blueRectX = 0; \n \xa0\xa0\xa0\xa0 int   blueRectY = HEIGHT / 2 - blueRectHeight / 2; \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageFilledRectangle(im, blueRectX, blueRectY, blueRectX + blueRectWidth, blueRectY + blueRectHeight, BLUE); \n \xa0 \n \xa0\xa0\xa0\xa0 // Draw white circle \n \xa0\xa0\xa0\xa0 int   centerX = WIDTH / 2; \n \xa0\xa0\xa0\xa0 int   centerY = HEIGHT / 2; \n \xa0\xa0\xa0\xa0 int   circleRadius = HEIGHT / 8;\xa0  // Adjusted radius \n \xa0 \n \xa0\xa0\xa0\xa0 gdImageFilledEllipse(im, centerX, centerY, circleRadius * 2, circleRadius * 2, WHITE); \n \xa0 \n \xa0\xa0\xa0\xa0 gdImagePng(im, output); \n \xa0\xa0\xa0\xa0 fclose (output); \n \xa0\xa0\xa0\xa0 gdImageDestroy(im); \n } \n \xa0 \n int   main() { \n \xa0\xa0\xa0\xa0 drawLaosFlag(); \n \xa0\xa0\xa0\xa0 return   0; \n } \n \n \n \n \n \n \n \n \n \n', 'tags': '', 'url': 'w6.html'}, {'title': 'w12', 'text': '#include <stdio.h>\n#include <gd.h>\n#include <math.h>\n\n// Declare the rotation function\nvoid rotateFilledPolygon(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {\n    int i;\n    double angle_rad = rotation_ang * M_PI / 180.0;\n\n    for (i = 0; i < num_points; i++) {\n        int x = points[i].x - x_orig;\n        int y = points[i].y - y_orig;\n\n        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));\n        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));\n    }\n}\n\nint main() {\n    int width = 800;\n    int height = 600;\n\n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n\n    FILE *outputFile = fopen("./../images/hellogd1.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n\n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n\n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width / 4, (int)height / 4, blue);\n\n    gdImageFilledEllipse(img, (int)width * 3 / 4, (int)height / 4, (int)width / 4, (int)width / 4, red);\n    gdImageEllipse(img, (int)width * 3 / 4, (int)height * 3 / 4, (int)width / 4, (int)width / 4, red);\n    gdImageLine(img, (int)width / 2, (int)height / 2, (int)width / 2, (int)height / 2 + 100, blue);\n\n    gdPoint points[4];\n    points[0].x = (int)width / 4;\n    points[0].y = (int)height * 3 / 4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n\n    // Call the rotation function\n    rotateFilledPolygon((int)width / 4 + 50, (int)height * 3 / 4 + 50, 45.0, points, 4);\n    gdImagePolygon(img, points, 4, black);\n\n    gdPoint points2[4];\n    points2[0].x = (int)width / 3;\n    points2[0].y = (int)height / 2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n\n    // Call the rotation function\n    rotateFilledPolygon((int)width / 3 + 50, (int)height / 2 + 50, 30.0, points2, 4);\n    gdImageFilledPolygon(img, points2, 4, red);\n\n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n\n    return 0;\n} \n \n #include <stdio.h>\n#include <gd.h>\n#include <math.h>\n \n// Declare the rotation function\nvoid rotateFilledPolygon(int x_orig, int y_orig, double rotation_ang, gdPoint *points, int num_points) {\n    int i;\n    double angle_rad = rotation_ang * M_PI / 180.0;\n \n    for (i = 0; i < num_points; i++) {\n        int x = points[i].x - x_orig;\n        int y = points[i].y - y_orig;\n \n        points[i].x = x_orig + (int)(x * cos(angle_rad) - y * sin(angle_rad));\n        points[i].y = y_orig + (int)(x * sin(angle_rad) + y * cos(angle_rad));\n    }\n}\n \nint main() {\n    int width = 800;\n    int height = 600;\n \n    gdImagePtr img = gdImageCreateTrueColor(width, height);\n    gdImageAlphaBlending(img, 0);\n \n    FILE *outputFile = fopen("./../images/hellogd2.png", "wb");\n    if (outputFile == NULL) {\n        fprintf(stderr, "Error opening the output file.\\n");\n        return 1;\n    }\n \n    int red = gdImageColorAllocate(img, 255, 0, 0);\n    int blue = gdImageColorAllocate(img, 0, 0, 255);\n    int black = gdImageColorAllocate(img, 0, 0, 0);\n    int white = gdImageColorAllocate(img, 255, 255, 255);\n \n    gdImageFilledRectangle(img, 0, 0, width, height, white);\n    gdImageFilledRectangle(img, 0, 0, (int)width / 4, (int)height / 4, blue);\n \n    gdImageFilledEllipse(img, (int)width * 3 / 4, (int)height / 4, (int)width / 4, (int)width / 4, red);\n    gdImageEllipse(img, (int)width * 3 / 4, (int)height * 3 / 4, (int)width / 4, (int)width / 4, red);\n    gdImageLine(img, (int)width / 2, (int)height / 2, (int)width / 2, (int)height / 2 + 100, blue);\n \n    gdPoint points[4];\n    points[0].x = (int)width / 4;\n    points[0].y = (int)height * 3 / 4;\n    points[1].x = points[0].x + 100;\n    points[1].y = points[0].y;\n    points[2].x = points[1].x;\n    points[2].y = points[1].y + 100;\n    points[3].x = points[2].x - 100;\n    points[3].y = points[2].y;\n \n    // Call the rotation function multiple times\n    for (int i = 0; i < 4; i++) {\n        rotateFilledPolygon((int)width / 4 + 50, (int)height * 3 / 4 + 50, 30.0, points, 4);\n        gdImagePolygon(img, points, 4, black);\n    }\n \n    gdPoint points2[4];\n    points2[0].x = (int)width / 3;\n    points2[0].y = (int)height / 2;\n    points2[1].x = points2[0].x + 100;\n    points2[1].y = points2[0].y;\n    points2[2].x = points2[1].x;\n    points2[2].y = points2[1].y + 100;\n    points2[3].x = points2[2].x - 150;\n    points2[3].y = points2[2].y;\n \n    // Call the rotation function multiple times\n    for (int i = 0; i < 12; i++) {\n        //rotateFilledPolygon((int)width / 3 + 50, (int)height / 2 + 50, 30.0, points2, 4);\n        rotateFilledPolygon(500, 200, 30.0, points2, 4);\n        gdImageFilledPolygon(img, points2, 4, red);\n    }\n \n    gdImagePngEx(img, outputFile, 9);\n    fclose(outputFile);\n    gdImageDestroy(img);\n \n    return 0;\n} \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13', 'text': '計算機概論課讓我接觸到了以往都不會去接觸到的新知識 原本只會使用電腦基本的上網查詢資料 娛樂 但自從上了課之後 開始知道什麼是可攜環境 開始自己設定proxy 知道怎麼去用IPV6 /IPV4簡單的設定 還發現隨身碟是個很方便的東西 也發現自己的英文能力有待加強 程式全是英文 想要看的懂 要慢慢提升自己 最讓我驚艷的是圖設多點 可以運用程式畫出圖案 而課堂上我們畫出了國旗 希望剩下的時間能學習到更多的技巧知識。 \n', 'tags': '', 'url': 'w13.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};