var stage       = new PIXI.Container();
var loader      = PIXI.loader;
loader.baseUrl  = "assets";
loader.add('test', 'config.json');

loader.load(setup);

function setup() {
    var config                  = (loader.resources.test.data);
    var gameStateZERO           = 0;
    var gameStateINIT           = 1;
    var gameStateMOVING         = 2;
    var gameStateCHECK_WIN      = 3;
    var slotNumber              = 5;
    var initalX                 = 395;
    var tileHEIGHT              = 100;
    var tileWIDTH               = 100;
    var nCycly                  = 5;
    var tTiles                  = 7;
    var selectCandidateInitalY  = 535;
    var selectCandidateInitalX  = 380;
    var selectCandidateHight    = 70;
    var selectCandidateWidth    = 70;
    var volume                  = 1;
    var creditValue             = config.creditValue;
    var result                  = [];
    var gameStatus              = 0;
    var finalTileY1             = [];
    var finalTileY2             = [];
    var finalTileY3             = [];
    var slotSprite1             = [];
    var slotSprite2             = [];
    var slotSprite3             = [];
    var preChoosedPosition1     = [];
    var preChoosedPosition2     = [];
    var preChoosedPosition3     = [];
    var yourCandidate           = 0;
    var finalCandidate          = '';
    var invested                = 0;
    var isAnimated              = true;
    var width                   = 1300;
    var height                  = 650;
    var amount                  = 40;
    var dolar                   = [];
    var gravity                 = 0.5
    var maxX                    = width;
    var minX                    = 0;
    var maxY                    = height;
    var minY                    = 0;
    var startDolarCount         = 0;
    var count                   = 0;
    var contain;

    var renderer = PIXI.autoDetectRenderer(1300, 650, {
        backgroundColor: 0xFFFFFF
    });

    document.getElementById("pixi-div").appendChild(renderer.view);

    var imgSlot             = imgSlot2 = imgSlot3 = config.imgSlot;
    var texture1            = PIXI.Texture.fromImage(config.imgBody);
    var texture2            = PIXI.Texture.fromImage(config.imgButton);
    var texture4            = PIXI.Texture.fromImage(config.imgButtonDown);
    var texture5            = PIXI.Texture.fromImage(config.imgButtonHover);
    var textureVucic        = PIXI.Texture.fromImage(config.selectVucic);
    var textureDacic        = PIXI.Texture.fromImage(config.selectDacic);
    var textureToma         = PIXI.Texture.fromImage(config.selectToma);
    var textureTadic        = PIXI.Texture.fromImage(config.selectTadic);
    var textureCeda         = PIXI.Texture.fromImage(config.selectCeda);
    var textureCanak        = PIXI.Texture.fromImage(config.selectCanak);
    var textureSeselj       = PIXI.Texture.fromImage(config.selectSeselj);
    var textureVucicFrame   = PIXI.Texture.fromImage(config.selectVucicFrame);
    var textureDacicFrame   = PIXI.Texture.fromImage(config.selectDacicFrame);
    var textureTomaFrame    = PIXI.Texture.fromImage(config.selectTomaFrame);
    var textureTadicFrame   = PIXI.Texture.fromImage(config.selectTadicFrame);
    var textureCedaFrame    = PIXI.Texture.fromImage(config.selectCedaFrame);
    var textureCanakFrame   = PIXI.Texture.fromImage(config.selectCanakFrame);
    var textureSeseljFrame  = PIXI.Texture.fromImage(config.selectSeseljFrame);

    var selectVucic     = new PIXI.Sprite(textureVucicFrame);
    selectVucic.height  = selectCandidateHight;
    selectVucic.width   = selectCandidateWidth;
    selectVucic.y       = selectCandidateInitalY;
    selectVucic.x       = selectCandidateInitalX;

    stage.addChild(selectVucic);
    selectVucic.interactive = true;
    selectVucic
        .on('mouseover', onVucicDown)
        .on('touchstart', addVucic)
        .on('click', addVucic)
        .on('mouseout', onVucicUp)
        .on('touchend', onVucicUp)

    var selectDacic     = new PIXI.Sprite(textureDacicFrame);
    selectDacic.height  = selectCandidateHight;
    selectDacic.width   = selectCandidateWidth;
    selectDacic.y       = selectCandidateInitalY;
    selectDacic.x       = selectCandidateInitalX + 80;

    stage.addChild(selectDacic);
    selectDacic.interactive = true;
    selectDacic
        .on('mouseover', onDacicDown)
        .on('touchstart', addDacic)
        .on('click', addDacic)
        .on('mouseout', onDacicUp)
        .on('touchend', onDacicUp)

    var selectToma      = new PIXI.Sprite(textureTomaFrame);
    selectToma.height   = selectCandidateHight;
    selectToma.width    = selectCandidateWidth;
    selectToma.y        = selectCandidateInitalY;
    selectToma.x        = selectCandidateInitalX + 160;

    stage.addChild(selectToma);
    selectToma.interactive = true;
    selectToma
        .on('mouseover', onTomaDown)
        .on('touchstart', addToma)
        .on('click', addToma)
        .on('mouseout', onTomaUp)
        .on('touchend', onTomaUp)

    var selectTadic     = new PIXI.Sprite(textureTadicFrame);
    selectTadic.height  = selectCandidateHight;
    selectTadic.width   = selectCandidateWidth;
    selectTadic.y       = selectCandidateInitalY;
    selectTadic.x       = selectCandidateInitalX + 240;

    stage.addChild(selectTadic);
    selectTadic.interactive = true;
    selectTadic
        .on('mouseover', onTadicDown)
        .on('touchstart', addTadic)
        .on('click', addTadic)
        .on('mouseout', onTadicUp)
        .on('touchend', onTadicUp)

    var selectCeda      = new PIXI.Sprite(textureCedaFrame);
    selectCeda.height   = selectCandidateHight;
    selectCeda.width    = selectCandidateWidth;
    selectCeda.y        = selectCandidateInitalY;
    selectCeda.x        = selectCandidateInitalX + 320;

    stage.addChild(selectCeda);
    selectCeda.interactive = true;
    selectCeda
        .on('mouseover', onCedaDown)
        .on('touchstart', addCeda)
        .on('click', addCeda)
        .on('mouseout', onCedaUp)
        .on('touchend', onCedaUp)

    var selectCanak     = new PIXI.Sprite(textureCanakFrame);
    selectCanak.height  = selectCandidateHight;
    selectCanak.width   = selectCandidateWidth;
    selectCanak.y       = selectCandidateInitalY;
    selectCanak.x       = selectCandidateInitalX + 400;

    stage.addChild(selectCanak);
    selectCanak.interactive = true;
    selectCanak
        .on('mouseover', onCanakDown)
        .on('touchstart', addCanak)
        .on('click', addCanak)
        .on('mouseout', onCanakUp)
        .on('touchend', onCanakUp)

    var selectSeselj    = new PIXI.Sprite(textureSeseljFrame);
    selectSeselj.height = selectCandidateHight;
    selectSeselj.width  = selectCandidateWidth;
    selectSeselj.y      = selectCandidateInitalY;
    selectSeselj.x      = selectCandidateInitalX + 480;

    stage.addChild(selectSeselj);
    selectSeselj.interactive = true;
    selectSeselj
        .on('mouseover', onSeseljDown)
        .on('touchstart', addSeselj)
        .on('click', addSeselj)
        .on('mouseout', onSeseljUp)
        .on('touchend', onSeseljUp)

    yourCandidateImg        = new PIXI.Sprite(textureVucicFrame);
    yourCandidateImg.height = 250;
    yourCandidateImg.width  = yourCandidateImg.height;
    yourCandidateImg.y      = 150;
    yourCandidateImg.x      = 50;

    stage.addChild(yourCandidateImg);

    winnerCandidateImg          = new PIXI.Sprite(textureVucicFrame);
    winnerCandidateImg.height   = 250;
    winnerCandidateImg.width    = winnerCandidateImg.height;
    winnerCandidateImg.y        = 150;
    winnerCandidateImg.x        = 1000;

    stage.addChild(winnerCandidateImg);

    var volumeStyle = {
        font: '20px Arial',
        fill: '#ff0000',
        align: 'center'

    }

    var volumeOnOF          = new PIXI.Text('Isključi zvuk', volumeStyle);
    volumeOnOF.x            = 1170;
    volumeOnOF.y            = 10;
    volumeOnOF.interactive  = true;

    stage.addChild(volumeOnOF);

    volumeOnOF
        .on('touchstart', volumeClick)
        .on('click', volumeClick)
        .on('mouseover', mHover)
        .on('mouseout', mHoverOut)

    var messageStyle = {font: 'bold 15px Arial',fill: '#ff0000',align: 'center'};

    var message = new PIXI.Text(config.welcomeMessage, messageStyle);
    message.x   = 613;
    message.y   = 45;
    stage.addChild(message);

    var creditStyle = {font: 'bold 18px Arial'}

    var credit  = new PIXI.Text('CREDIT:', creditStyle);
    credit.x    = 595;
    credit.y    = 10;
    stage.addChild(credit);

    var creditValueShow = new PIXI.Text(creditValue, creditStyle);
    creditValueShow.x   = 670;
    creditValueShow.y   = 10;
    stage.addChild(creditValueShow);

    var candidatePresent    = new PIXI.Text("Tvoj kandidat", creditStyle);
    candidatePresent.x      = 120;
    candidatePresent.y      = 120;
    stage.addChild(candidatePresent);

    var winnerPresent   = new PIXI.Text("Pobednik", creditStyle);
    winnerPresent.x     = 1090;
    winnerPresent.y     = 120;
    stage.addChild(winnerPresent);

    var select  = new PIXI.Text("Izaberi svog kandidata i uloži kintu", creditStyle);
    select.x    = 509;
    select.y    = 500;
    stage.addChild(select);

    var imgButton           = new PIXI.Sprite(texture2);
    imgButton.x             = 606;
    imgButton.y             = 450;
    imgButton.height        = 40;
    imgButton.width         = 100;
    imgButton.interactive   = true;
    imgButton.click = function(e) {
        startAnimation();
        finalCandidate = yourCandidate;
    }
    imgButton.touchstart = function(e) {
        startAnimation();
        finalCandidate = yourCandidate;
    }

    imgButton
        .on('mousedown', onButtonDown)
        .on('touchstart', onButtonDown)
        .on('mouseup', onButtonUp)
        .on('touchend', onButtonUp)
        .on('mouseover', onButtonOver)
        .on('mouseout', onButtonUp)

    var imgBody     = new PIXI.Sprite(texture1);
    imgBody.x       = 353;
    imgBody.y       = 70;
    imgBody.width   = 608;
    imgBody.height  = 378;

    var texture3        = PIXI.Texture.fromImage(imgSlot);
      preChoosedPosition1 = [0, 2, 4, 6, 1];

    for (var i = 0; i < slotNumber; i++) {
        slotSprite1[i]                  = new PIXI.extras.TilingSprite(texture3, tileWIDTH, tileHEIGHT);
        slotSprite1[i].tilePosition.x   = 0;
        slotSprite1[i].tilePosition.y   = (-preChoosedPosition1[i] * tileHEIGHT);
        slotSprite1[i].x                = initalX + (i * 105);
        slotSprite1[i].y                = 105;
        stage.addChild(slotSprite1[i]);
    }
    preChoosedPosition2 = [2, 0, 6, 3, 4];
    for (var i = 0; i < slotNumber; i++) {
        slotSprite2[i]                  = new PIXI.extras.TilingSprite(texture3, tileWIDTH, tileHEIGHT);
        slotSprite2[i].tilePosition.x   = 0;
        slotSprite2[i].tilePosition.y   = (-preChoosedPosition2[i] * tileHEIGHT);
        slotSprite2[i].x                = initalX + (i * 105);
        slotSprite2[i].y                = 210;
        stage.addChild(slotSprite2[i]);
    }
    preChoosedPosition3 = [6, 1, 2, 4, 0];
    for (var i = 0; i < slotNumber; i++) {
        slotSprite3[i]                  = new PIXI.extras.TilingSprite(texture3, tileWIDTH, tileHEIGHT);
        slotSprite3[i].tilePosition.x   = 0;
        slotSprite3[i].tilePosition.y   = (-preChoosedPosition3[i] * tileHEIGHT);
        slotSprite3[i].x                = initalX + (i * 105);
        slotSprite3[i].y                = 315;
        stage.addChild(slotSprite3[i]);
    }
    stage.addChild(imgBody);
    stage.addChild(imgButton);

    var line1           = new PIXI.Graphics();
    var line2           = new PIXI.Graphics();
    var winnerCheck     = new PIXI.Graphics();
    var winnerCheck2    = new PIXI.Graphics();
    var arrowRight      = new PIXI.Graphics();
    var arrowLeft       = new PIXI.Graphics();

    arrowLeft.beginFill(0xA4CC00);

    arrowLeft.moveTo(545, 635);
    arrowLeft.lineTo(565, 620);
    arrowLeft.lineTo(565, 630);
    arrowLeft.lineTo(605, 630);
    arrowLeft.lineTo(605, 640);
    arrowLeft.lineTo(565, 640);
    arrowLeft.lineTo(565, 650);

    arrowRight.beginFill(0xA4CC00);

    arrowRight.moveTo(763, 635);
    arrowRight.lineTo(743, 620);
    arrowRight.lineTo(743, 630);
    arrowRight.lineTo(703, 630);
    arrowRight.lineTo(703, 640);
    arrowRight.lineTo(743, 640);
    arrowRight.lineTo(743, 650);

    var stakeValue  = 100;
    var stake       = new PIXI.Text(stakeValue, creditStyle);

    stake.y = 625;
    stake.x = 640;

    stage.addChild(arrowLeft)
    stage.addChild(arrowRight);
    stage.addChild(line1);
    stage.addChild(line2);
    stage.addChild(winnerCheck);
    stage.addChild(stake);

    arrowLeft.interactive   = true;
    arrowRight.interactive  = true;

    arrowLeft
        .on('mousedown', arrowDown)
        .on('mouseup', arrowUp)
        .on('mouseover', arrowOver)
        .on('mouseout', arrowUp)
        .on('touchstart', arrowLeftClick)
        .on('click', arrowLeftClick)

    arrowRight
        .on('mousedown', arrowDown)
        .on('mouseup', arrowUp)
        .on('mouseover', arrowOver)
        .on('mouseout', arrowUp)
        .on('touchstart', arrowRightClick)
        .on('click', arrowRightClick)

    var minButton           = new PIXI.Text('MIN', volumeStyle);
    minButton.x             = 470;
    minButton.y             = 624;
    minButton.interactive   = true;
    stage.addChild(minButton);

    minButton
        .on('touchstart', min)
        .on('click', min)
        .on('mouseover', mHover)
        .on('mouseout', mHoverOut)

    var maxButton           = new PIXI.Text('MAX', volumeStyle);
    maxButton.x             = 797;
    maxButton.y             = minButton.y;
    maxButton.interactive   = true;
    stage.addChild(maxButton);

    maxButton
        .on('touchstart', max)
        .on('click', max)
        .on('mouseover', mHover)
        .on('mouseout', mHoverOut)

    var tv = new PIXI.Graphics();

    tv.beginFill(0xff66cc);
    tv.lineStyle(17, 0x00000, 1);
    tv.moveTo(390, 100);
    tv.lineTo(390, 420);
    tv.lineTo(923, 420);
    tv.lineTo(923, 100);
    tv.lineTo(390, 100);

    var tvAntena1 = new PIXI.Graphics();

    tvAntena1.lineStyle(10, 0x00000, 1);
    tvAntena1.moveTo(600, 100);
    tvAntena1.quadraticCurveTo(480, 20, 430, 20);

    var tvAntena2 = new PIXI.Graphics();

    tvAntena2.lineStyle(10, 0x00000, 1);
    tvAntena2.moveTo(700, 100);
    tvAntena2.quadraticCurveTo(820, 20, 850, 20);

    var tvAntenaEnd1 = new PIXI.Graphics();

    tvAntenaEnd1.lineStyle(0);
    tvAntenaEnd1.beginFill(0x000000);
    tvAntenaEnd1.drawCircle(850, 18, 13);
    tvAntenaEnd1.endFill();

    var tvAntenaEnd2 = new PIXI.Graphics();

    tvAntenaEnd2.lineStyle(0);
    tvAntenaEnd2.beginFill(0x000000);
    tvAntenaEnd2.drawCircle(430, 18, 13);
    tvAntenaEnd2.endFill();

    var congrStyle = {font: 'bold 30px Arial',align: 'center',fill: '#A4CC00'};

    var congr = new PIXI.Text('Prekidamo politički program\n zbog ekskluzivnih  vesti!\n Nepoznati kladioničar\n osvojio brdo keša!', congrStyle);
    congr.x   = 450;
    congr.y   = 170;

    var winnStyle = {font: 'bold 12px Arial',align: 'center',fill: '#A4CC00'};

    var showWinn    = new PIXI.Text(0, winnStyle);
    showWinn.x      = 740;
    showWinn.y      = 13;

    stage.addChild(winnerCheck2);

    var INC = [25, 35, 50, 70, 100];

    function draw() {
        if (gameStatus == gameStateZERO) {
            gameStatus = gameStateINIT;

        } else if (gameStatus == gameStateINIT) {
                    gameStatus = gameStateCHECK_WIN;
        } else if (gameStatus == gameStateMOVING) {

            for (var i = 0; i < slotNumber; i++) {
                if (finalTileY1[i] > 0) {
                    slotSprite1[i].tilePosition.y   = slotSprite1[i].tilePosition.y + INC[i];
                    finalTileY1[i]                  = finalTileY1[i] - INC[i];
                }
                if (finalTileY2[i] > 0) {
                    slotSprite2[i].tilePosition.y   = slotSprite2[i].tilePosition.y + INC[i];
                    finalTileY2[i]                  = finalTileY2[i] - INC[i];
                }
                if (finalTileY3[i] > 0) {
                    slotSprite3[i].tilePosition.y   = slotSprite3[i].tilePosition.y + INC[i];
                    finalTileY3[i]                  = finalTileY3[i] - INC[i];
                }
            }
            if (finalTileY1[0] - 5 <= 0) {
                gameStatus = gameStateCHECK_WIN;
            }
            if (finalTileY2[0] - 5 <= 0) {
                gameStatus = gameStateCHECK_WIN;
            }
            if (finalTileY3[0] - 5 <= 0) {
                gameStatus = gameStateCHECK_WIN;
            }
        } else if (gameStatus == gameStateCHECK_WIN) {

            return;
        }

        renderer.render(stage);
        requestAnimationFrame(draw);
    }

    function startAnimation() {
        interactive(false);
        invested = parseInt(stake.text);

        var can0 = can1 = can2 = can3 = can4 = can5 = can6 = 0;

        if (gameStatus == gameStateINIT || gameStatus == gameStateCHECK_WIN) {
            preChoosedPosition1 = getRandomPositions();
            preChoosedPosition2 = getRandomPositions();
            preChoosedPosition3 = getRandomPositions();

            for (var i = 0; i < slotNumber; i++) {
                preChoosedPosition1[i] = getRandomInt(0, 6);
                preChoosedPosition2[i] = getRandomInt(0, 6);
                preChoosedPosition3[i] = getRandomInt(0, 6);

                slotSprite1[i].tilePosition.y   = (-preChoosedPosition1[i] * tileHEIGHT);
                 slotSprite1[i].tint             = 16777215;
                finalTileY1[i]                  = (nCycly * tileHEIGHT * tTiles);
                slotSprite2[i].tilePosition.y   = (-preChoosedPosition2[i] * tileHEIGHT);
                 slotSprite2[i].tint             = 16777215;
                
                finalTileY2[i]                  = (nCycly * tileHEIGHT * tTiles);
                slotSprite3[i].tilePosition.y   = (-preChoosedPosition3[i] * tileHEIGHT);
                 slotSprite3[i].tint             = 16777215;
                
                finalTileY3[i]                  = (nCycly * tileHEIGHT * tTiles);
            }
            gameStatus = gameStateMOVING;

            if (preChoosedPosition3[i] != preChoosedPosition3[i - 1]) {
                var union = preChoosedPosition1.concat(preChoosedPosition2);
                var store = union.concat(preChoosedPosition3);

                for (x = 0; x < 15; x++) {
                    switch (store[x]) {
                        case 0:
                            can0++
                            break;
                        case 1:
                            can1++
                            break;
                        case 2:
                            can2++
                            break;
                        case 3:
                            can3++
                            break;
                        case 4:
                            can4++
                            break;
                        case 5:
                            can5++
                            break;
                        case 6:
                            can6++
                            break;
                    }
                }
                result  = [can0, can1, can2, can3, can4, can5, can6];
                result2 = [can0, can1, can2, can3, can4, can5, can6];
            }
            draw();

            setTimeout(
                function() {

                    if (sortThisBaby(result2)) {
                        switch (indexOfMax(result)) {
                            case 0:
                                winnerCandidateImg.texture = textureVucicFrame;
                                interactive(true);
                                if (finalCandidate == 0) {

                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                    onWinAmin()

                                } else {
                                    hightlight(0);
                                    textUpadete(config.vucicMessage, 443, 45);
                                    playSound('assets/sounds/vucic/tisina.mp3');
                                    canvasLine();
                                    calcDefeat();

                                }
                                break;
                            case 1:
                                winnerCandidateImg.texture = textureDacicFrame;
                                interactive(true);

                                if (finalCandidate == 1) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                    onWinAmin()

                                } else {
                                    hightlight(1);
                                    textUpadete(config.dacicMessage, 483, 45);
                                    playSound('assets/sounds/dacic/miljacka2.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                            case 2:
                                winnerCandidateImg.texture = textureTomaFrame;
                                interactive(true);

                                if (finalCandidate == 2) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                    onWinAmin()
                                } else {
                                    hightlight(2);
                                    textUpadete(config.tomaMessage, 432, 45);
                                    playSound('assets/sounds/toma/engleski.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                            case 3:
                                winnerCandidateImg.texture = textureTadicFrame;
                                interactive(true);

                                if (finalCandidate == 3) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                    onWinAmin()
                                } else {
                                    hightlight(3);
                                    textUpadete(config.tadicMessage, 470, 45);
                                    playSound('assets/sounds/tadic/mac.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                            case 4:
                                winnerCandidateImg.texture = textureCedaFrame;
                                interactive(true);

                                if (finalCandidate == 4) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                    onWinAmin()
                                } else {
                                    hightlight(4);
                                    textUpadete(config.cedaMessage, 469, 45);
                                    playSound('assets/sounds/ceda/gospodjo2.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }

                                break;
                            case 5:
                                winnerCandidateImg.texture = textureCanakFrame;
                                interactive(true);

                                if (finalCandidate == 5) {
                                    textUpadete(config.winnerMessage, 635, 45, config.winnerColor);
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                    onWinAmin()
                                } else {
                                    hightlight(5);
                                    textUpadete(config.canakMessage, 363, 45);
                                    playSound('assets/sounds/canak/sat.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                            case 6:
                                winnerCandidateImg.texture = textureSeseljFrame;
                                interactive(true);

                                if (finalCandidate == 6) {
                                    textUpadete(config.winnerMessage, 625, 45, config.winnerColor);
                                    canvasWinerLine();
                                    playSound('assets/sounds/win.mp3');
                                    canvasWinerLine();
                                    calcWin();
                                    onWinAmin()
                                } else {
                                    hightlight(6);
                                    textUpadete(config.seseljMessage, 388, 45);
                                    playSound('assets/sounds/seselj/olja.mp3');
                                    canvasLine();
                                    calcDefeat();
                                }
                                break;
                        }
                    } else {
                        startAnimation()
                        textUpadete(config.equalMessage, 500, 45);
                        interactive(false);
                    }
                }, 2800);
        }
    }

    draw();

    function max() {
        stake.text = creditValue
    }

    function mHover() {
        this.scale.x    = 1.1;
        this.scale.y    = 1.1;
        this.position.x = this.position.x - 1;
        this.position.y = this.position.y - 1;
    }

    function mHoverOut() {
        this.scale.x    = 1.0;
        this.scale.y    = 1.0;
        this.position.x = this.position.x + 1;
        this.position.y = this.position.y + 1;
    }

    function min() {
        stake.text = 100;
    }

    function arrowRightClick() {
        if (parseInt(stake.text) < creditValue) {
            stake.text = parseInt(stake.text) + 100;
            renderer.render(stage);
        }

    }

    function arrowLeftClick() {
        if (parseInt(stake.text) > 100) {
            stake.text = parseInt(stake.text) - 100;
            renderer.render(stage);
        }

    }

    function arrowDown() {
        this.isdown = true;
        this.tint   = 0xFF0000;

    }

    function arrowUp() {
        this.isdown = false;
        this.tint   = 0xA4CC00;
    }

    function arrowOver() {
        this.tint = 0x5D8700
    }

    function onButtonDown() {
        this.isdown     = true;
        this.texture    = texture4;
        this.alpha      = 1;

        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
        stage.removeChild(tv);
        stage.removeChild(tvAntena1);
        stage.removeChild(tvAntena2);
        stage.removeChild(tvAntenaEnd1);
        stage.removeChild(tvAntenaEnd2);
        stage.removeChild(congr);
        stage.removeChild(showWinn);
        stage.addChild(imgBody);
        renderer.render(stage);
    }

    function onButtonUp() {
        this.isdown     = false;
        this.texture    = texture2;
    }

    function onButtonOver() {
        this.texture = texture5;
    }

    function volumeClick() {
        if (volume) {
            volumeOnOF.text = 'Uključi zvuk';
            volume          = 0;
        } else {
            volumeOnOF.text = 'Isključi zvuk';
            volume          = 1;
        }
    }

    function onSeseljDown() {
        this.isdown     = true;
        this.texture    = textureSeselj;
    }

    function onSeseljUp() {
        this.isdown     = false;
        this.texture    = textureSeseljFrame;
    }

    function addSeselj() {
        yourCandidateImg.texture    = textureSeseljFrame;
        yourCandidate               = 6;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

    function onCanakDown() {
        this.isdown     = true;
        this.texture    = textureCanak;
    }

    function onCanakUp() {
        this.isdown     = false;
        this.texture    = textureCanakFrame;
    }

    function addCanak() {
        yourCandidateImg.texture    = textureCanakFrame;
        yourCandidate               = 5;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

    function onCedaDown() {
        this.isdown     = true;
        this.texture    = textureCeda;
    }

    function onCedaUp() {
        this.isdown     = false;
        this.texture    = textureCedaFrame;
    }

    function addCeda() {
        yourCandidateImg.texture    = textureCedaFrame;
        yourCandidate               = 4;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

    function onTadicDown() {
        this.isdown     = true;
        this.texture    = textureTadic;
    }

    function onTadicUp() {
        this.isdown     = false;
        this.texture    = textureTadicFrame;
    }

    function addTadic() {
        yourCandidateImg.texture    = textureTadicFrame;
        yourCandidate               = 3;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

    function onTomaDown() {
        this.isdown     = true;
        this.texture    = textureToma;
    }

    function onTomaUp() {
        this.isdown     = false;
        this.texture    = textureTomaFrame;
    }

    function addToma() {
        yourCandidateImg.texture    = textureTomaFrame;
        yourCandidate               = 2;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

    function onDacicDown() {
        this.isdown     = true;
        this.texture    = textureDacic;
    }

    function onDacicUp() {
        this.isdown     = false;
        this.texture    = textureDacicFrame;
    }

    function addDacic() {
        yourCandidateImg.texture    = textureDacicFrame;
        yourCandidate               = 1;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

    function onVucicDown() {
        this.isdown     = true;
        this.texture    = textureVucic;

    }

    function onVucicUp() {
        this.isdown     = false;
        this.texture    = textureVucicFrame;
    }

    function addVucic() {
        yourCandidateImg.texture    = textureVucicFrame;
        yourCandidate               = 0;
        stage.removeChild(line1);
        stage.removeChild(line2);
        stage.removeChild(winnerCheck);
        stage.removeChild(winnerCheck2);
    }

    function hightlight(value) {
        console.log(slotSprite1[0]);
        for (x = 0; x < 6; x++) {
            if (preChoosedPosition1[x] == value) {
                slotSprite1[x].tint = 99964444;
            }

            if (preChoosedPosition2[x] == value) {
                slotSprite2[x].tint = 99964444;
            }

            if (preChoosedPosition3[x] == value) {
                slotSprite3[x].tint = 99964444;
            }

        }
    }

    function interactive(x) {

        selectVucic.interactive     = x;
        selectDacic.interactive     = x;
        selectToma.interactive      = x;
        selectTadic.interactive     = x;
        selectCeda.interactive      = x;
        selectCanak.interactive     = x;
        selectSeselj.interactive    = x;
        imgButton.interactive       = x;
        arrowLeft.interactive       = x;
        arrowRight.interactive      = x;
        maxButton.interactive       = x;
        minButton.interactive       = x;
    }

    function calcWin() {

        if (invested > creditValue) {
            stake.text  = creditValue;
            invested    = creditValue;
        }
        creditValue             = creditValue + invested * config.winMultiplication;
        creditValueShow.text    = creditValue;
        showWinn.text           = "+" + invested * config.winMultiplication;
        showWinn.style.fill     = '#A4CC00';
        stage.addChild(showWinn);
        renderer.render(stage);
    }

    function calcDefeat() {

        creditValue             = creditValue - invested;
        creditValueShow.text    = creditValue;

        if (invested > creditValue) {
            stake.text = creditValue;
        }

        if (creditValue == 0 || creditValue < 0) {
            if (confirm('Potrošio si sve pare i nisi više zanimljiv političarima, nova igra ?')) {

                window.location.href = "index.html";

            } else {
                window.location.href = "assets/zeljko.stojakovic.cv.pdf";
            }

        }
        showWinn.text       = "-" + invested;
        showWinn.style.fill = '#ff0000';
        stage.addChild(showWinn);
        renderer.render(stage)
    }

    function canvasLine() {
        line1.lineStyle(20, 0xff0000);
        line1.moveTo(50, 150);
        line1.lineTo(300, 400);
        stage.addChild(line1);
        line2.lineStyle(20, 0xff0000);
        line2.moveTo(300, 150);
        line2.lineTo(50, 400);
        stage.addChild(line2);
        renderer.render(stage);

    }

    function canvasWinerLine() {
        winnerCheck.lineStyle(17, 0xA4CC00, 1);
        winnerCheck.moveTo(250, 180);
        winnerCheck.lineTo(170, 350);
        winnerCheck.lineTo(110, 290);
        stage.addChild(winnerCheck);
        winnerCheck2.lineStyle(17, 0xA4CC00, 1);
        winnerCheck2.moveTo(1200, 180);
        winnerCheck2.lineTo(1120, 350);
        winnerCheck2.lineTo(1070, 290);
        stage.addChild(winnerCheck2);
        stage.addChild(tvAntena1);
        stage.addChild(tvAntena2);
        stage.addChild(tvAntenaEnd1);
        stage.addChild(tvAntenaEnd2);
        stage.addChild(tv);
        stage.addChild(congr);
        stage.removeChild(imgBody);
        renderer.render(stage);

    }

    function playSound(x) {

        var audio       = new Audio(x);
        audio.volume    = volume;
        audio.play();

    }

    function textUpadete(value, x, y, color = " #ff0000") {
        message.text        = value;
        message.x           = x;
        message.y           = y;
        message.style.fill  = color;
    }

    function creditUpadete(value) {
        creditValue.text = value;
    }

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function getRandomPositions() {
        var x = getRandomInt(0, 100);
        if (x > 50) {
            x = getRandomInt(0, 6);
            return [x, x, x, x, x];
        }
        return [getRandomInt(0, 6), getRandomInt(0, 6), getRandomInt(0, 6)];
    }

    function sortThisBaby(arr) {
        arr = arr.sort(function(a, b) {
            return b - a
        });
        if (arr[0] != arr[1]) return true;
    }

    function indexOfMax(arr) {
        if (arr.length === 0) return -1;

        var max = arr[0];
        var maxIndex = 0;

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] > max) {
                maxIndex = i;
                max = arr[i];
            }
        }
        return maxIndex;
    }

    function onWinAmin() {
        isAnimated = true;

        requestAnimationFrame(update);

            wabbitTexture     = new PIXI.Texture.fromImage("assets/images/dolar2.png")
        

        count       = startDolarCount;

        container   = new PIXI.DisplayObjectContainer();
        stage.addChild(container);

        money1 = new PIXI.Texture(wabbitTexture.baseTexture);
        money2 = new PIXI.Texture(wabbitTexture.baseTexture);
        money3 = new PIXI.Texture(wabbitTexture.baseTexture);
        money4 = new PIXI.Texture(wabbitTexture.baseTexture);
        money5 = new PIXI.Texture(wabbitTexture.baseTexture);

        moneyTextures   = [money1, money2, money3, money4, money5];
        moneyType       = 3;
        currentTexture  = moneyTextures[moneyType];

        for (var i = 0; i < startDolarCount; i++) {
            var money       = new PIXI.Sprite(currentTexture);
            money.speedX    = Math.random() * 10;
            money.speedY    = (Math.random() * 10) - 5;
            console.log (money);

            money.anchor.x  = 0.5;
            money.anchor.y  = 1;

            dolar.push(money);

            container.addChild(money);
        }

        setTimeout(function() {
            container.removeChild(money);
            stage.removeChild(container);
            isAnimated = false;

        }, 3000);

    }

    function update() {
        if (count < 3) {
            for (var i = 0; i < amount; i++) {
                var money       = new PIXI.Sprite(currentTexture);
                money.speedX    = Math.random() * 10;
                money.speedY    = (Math.random() * 10) - 5;
                money.anchor.y  = 1;
                dolar.push(money);
                money.scale.set(0.5 + Math.random() * 0.5);
                money.rotation  = (Math.random() - 0.5)
                var random      = Math.floor(Math.random() * container.children.length - 2);
                container.addChild(money);
                count++;
            }
        }

        for (var i = 0; i < dolar.length; i++) {
            var money           = dolar[i];
            money.position.x    += money.speedX;
            money.position.y    += money.speedY;
            money.speedY        += gravity;

            if (money.position.x > maxX) {
                money.speedX    *= -1;
                money.position.x = maxX;
            } else if (money.position.x < minX) {
                money.speedX    *= -1;
                money.position.x = minX;
            }

            if (money.position.y > maxY) {
                money.speedY        *= -0.85;
                money.position.y    = maxY;
                money.spin          = (Math.random() - 0.5) * 0.2

                if (Math.random() > 0.5) {
                    money.speedY -= Math.random() * 6;
                }
            } else if (money.position.y < minY) {
                money.speedY        = 0;
                money.position.y    = minY;
            }
        }

        if (isAnimated) {
            renderer.render(stage);
            requestAnimationFrame(update);
        }
    }
    animate();
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(stage);
    }
}