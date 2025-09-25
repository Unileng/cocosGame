window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  AnimalChoose: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "98cacqDxx1Cn5UNUVkSVhq6", "AnimalChoose");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AnimalChoose = function(_super) {
      __extends(AnimalChoose, _super);
      function AnimalChoose() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.target = null;
        return _this;
      }
      AnimalChoose.prototype.setTarget = function(target) {
        this.target = target;
      };
      AnimalChoose.prototype.update = function(dt) {
        if (cc.isValid(this.target) && cc.isValid(this.target.parent)) {
          var pos = this.target.parent.convertToWorldSpaceAR(this.target.position);
          pos = this.node.parent.convertToNodeSpaceAR(pos);
          this.node.position = pos;
        }
      };
      AnimalChoose = __decorate([ ccclass ], AnimalChoose);
      return AnimalChoose;
    }(cc.Component);
    exports.default = AnimalChoose;
    cc._RF.pop();
  }, {} ],
  AnimalCube: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8dee9WqOmxE8pESL+BCs6FX", "AnimalCube");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../../Data/Enum");
    var AudioManager_1 = require("../../Manager/AudioManager");
    var EventManager_1 = require("../../Manager/EventManager");
    var PoolManager_1 = require("../../Manager/PoolManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AnimalCube = function(_super) {
      __extends(AnimalCube, _super);
      function AnimalCube() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.animalIcon = null;
        _this.boomAni = null;
        _this.rigiBody = null;
        _this.collider = null;
        _this.animType = null;
        _this.isChoose = false;
        _this.showSpriteFrame = null;
        _this.lightSpriteFrame = null;
        _this.outLineSpriteFrame = null;
        _this.tipSpriteFrame = null;
        return _this;
      }
      AnimalCube.prototype.onLoad = function() {
        this.rigiBody = this.node.getComponent(cc.RigidBody);
      };
      AnimalCube.prototype.init = function(nodeScale, animType) {
        var _this = this;
        this.node.scale = nodeScale;
        this.animType = animType;
        this.boomAni.node.active = false;
        cc.resources.load(Enum_1.ANIMAL_TYPE_TEXTUREURL[animType], cc.SpriteFrame, function(err, spriteFrame) {
          if (!err) {
            _this.animalIcon.spriteFrame = spriteFrame;
            _this.showSpriteFrame = spriteFrame;
          }
        });
        cc.resources.load(Enum_1.ANIMAL_TYPE_TEXTUREURL[animType] + "_outline", cc.SpriteFrame, function(err, spriteFrame) {
          err || (_this.outLineSpriteFrame = spriteFrame);
        });
        cc.resources.load(Enum_1.ANIMAL_TYPE_TEXTUREURL[animType] + "_light", cc.SpriteFrame, function(err, spriteFrame) {
          err || (_this.lightSpriteFrame = spriteFrame);
        });
        cc.resources.load(Enum_1.ANIMAL_TYPE_TEXTUREURL[animType] + "_tip", cc.SpriteFrame, function(err, spriteFrame) {
          err || (_this.tipSpriteFrame = spriteFrame);
        });
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_BTN_JUMP_ITEM, this.jump, this);
        this.setChoose(false);
      };
      AnimalCube.prototype.showLight = function() {
        if (this.isChoose) return;
        this.switchMaterial(false);
        this.animalIcon.spriteFrame = this.lightSpriteFrame;
      };
      AnimalCube.prototype.showTip = function() {
        if (this.isChoose) return;
        this.animalIcon.spriteFrame = this.tipSpriteFrame;
        this.animalIcon.node.stopAllActions();
        this.animalIcon.node.opacity = 255;
        cc.tween(this.animalIcon.node).repeatForever(cc.tween(this.animalIcon.node).to(1, {
          opacity: 180
        }).to(1, {
          opacity: 255
        }).start()).start();
      };
      AnimalCube.prototype.clearLight = function() {
        this.switchMaterial(false);
        this.animalIcon.spriteFrame = this.showSpriteFrame;
      };
      AnimalCube.prototype.clearTip = function() {
        this.switchMaterial(false);
        this.animalIcon.spriteFrame = this.showSpriteFrame;
        this.animalIcon.node.stopAllActions();
        this.animalIcon.node.opacity = 255;
      };
      AnimalCube.prototype.setChoose = function(isChoose, type) {
        void 0 === type && (type = 0);
        return __awaiter(this, void 0, void 0, function() {
          return __generator(this, function(_a) {
            this.isChoose = isChoose;
            return [ 2 ];
          });
        });
      };
      AnimalCube.prototype.chooseAni = function() {
        this.switchMaterial();
        this.animalIcon.node.stopAllActions();
        this.animalIcon.node.scale = 1;
        cc.tween(this.animalIcon.node).to(.12, {
          scale: 1.2
        }, {
          easing: "cubicOut"
        }).to(.1, {
          scale: .9
        }, {
          easing: "cubicInOut"
        }).to(.1, {
          scale: 1
        }, {
          easing: "bounceOut"
        }).start();
      };
      AnimalCube.prototype.switchMaterial = function(isOutLine) {
        void 0 === isOutLine && (isOutLine = true);
        if (isOutLine) {
          this.animalIcon.spriteFrame = this.outLineSpriteFrame;
          this.animalIcon.node.group = "gameUI";
        } else {
          this.animalIcon.spriteFrame = this.showSpriteFrame;
          this.animalIcon.node.group = "animal";
        }
      };
      AnimalCube.prototype.getChooseType = function() {
        return this.isChoose;
      };
      AnimalCube.prototype.jump = function() {
        if (cc.isValid(this.rigiBody)) {
          var x = Math.floor(1e6 * (2 * Math.random() - 1));
          this.rigiBody.applyForce(cc.v2(x, 1e6), this.rigiBody.getWorldCenter(), true);
        }
      };
      AnimalCube.prototype.remove = function(index, flyEndPos) {
        var _this = this;
        this.scheduleOnce(function() {
          _this.boomAni.node.active = true;
          _this.boomAni.play("animBoom");
          AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.COMBO);
          _this.animalIcon.node.stopAllActions();
          _this.animalIcon.node.group = "gameUI";
          _this.animalIcon.node.scale = _this.animalIcon.node.scale * (.8 / _this.node.scale);
          flyEndPos = _this.animalIcon.node.parent.convertToNodeSpaceAR(flyEndPos);
          cc.tween(_this.animalIcon.node).to(.2, {
            position: flyEndPos
          }).call(function() {
            _this.animalIcon.spriteFrame = null;
            _this.animalIcon.node.group = "animal";
            _this.animalIcon.node.setPosition(cc.Vec3.ZERO);
            _this.animalIcon.node.scale = 1;
            PoolManager_1.default.instance.putNode(_this.node, Enum_1.GAME_POOL.ANIMAL_POOL);
            _this.animType = null;
            _this.isChoose = false;
            EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_BTN_JUMP_ITEM, _this.jump, _this);
          }).start();
        }, .1 * index);
      };
      __decorate([ property(cc.Sprite) ], AnimalCube.prototype, "animalIcon", void 0);
      __decorate([ property(cc.Animation) ], AnimalCube.prototype, "boomAni", void 0);
      AnimalCube = __decorate([ ccclass ], AnimalCube);
      return AnimalCube;
    }(cc.Component);
    exports.default = AnimalCube;
    cc._RF.pop();
  }, {
    "../../Data/Enum": "Enum",
    "../../Manager/AudioManager": "AudioManager",
    "../../Manager/EventManager": "EventManager",
    "../../Manager/PoolManager": "PoolManager"
  } ],
  AnimalLevelItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c590ei8I8hLyKekQ9nB5s8W", "AnimalLevelItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../../../Data/Enum");
    var GameData_1 = require("../../../Data/GameData");
    var DataManager_1 = require("../../DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var AnimalLevelItem = function(_super) {
      __extends(AnimalLevelItem, _super);
      function AnimalLevelItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.currentLevel = null;
        _this.addScoreLevel = null;
        _this.levelMaxValue = null;
        _this.lockTip = null;
        _this.icon = null;
        _this.levelProgress = null;
        return _this;
      }
      AnimalLevelItem.prototype.initUI = function(id, deleteCount) {
        var useData = DataManager_1.default.instance.getAnimalDataById(id);
        this.icon.setSprite(Enum_1.ANIMAL_TYPE_TEXTUREURL[id]);
        if (useData.isLock && 0 != useData.lockMoney) {
          this.currentLevel.node.parent.active = false;
          this.lockTip.active = true;
        } else {
          this.currentLevel.node.parent.active = true;
          this.lockTip.active = false;
          this.addScoreLevel.string = "+" + deleteCount;
          var oldCount = useData.expValue * (GameData_1.FactorLevelTsum[useData.level - 1] - (useData.level > 1 ? GameData_1.FactorLevelTsum[useData.level - 2] : 0)) + (useData.level > 1 ? GameData_1.FactorLevelTsum[useData.level - 2] : 0);
          var newCount = oldCount + deleteCount;
          var newlevel = 1;
          for (var i = 0; i < GameData_1.FactorLevelTsum.length; i++) {
            var element = GameData_1.FactorLevelTsum[i];
            element <= newCount && (newlevel = i + 1);
          }
          newlevel = newlevel > 6 ? 6 : newlevel;
          var newExp = (newCount - (newlevel > 1 ? GameData_1.FactorLevelTsum[newlevel - 2] : 0)) / (GameData_1.FactorLevelTsum[useData.level - 1] - (newlevel > 1 ? GameData_1.FactorLevelTsum[newlevel - 2] : 0));
          this.levelProgress.fillRange = newExp;
          this.levelMaxValue.string = "\u9700\u8981\u6d88\u9664\u6570\u91cf " + GameData_1.FactorLevelTsum[newlevel - 1] + " \u5347\u7ea7";
          this.currentLevel.string = "lv." + newlevel;
          useData.expValue = newExp;
          useData.level = newlevel;
        }
      };
      __decorate([ property(cc.Label) ], AnimalLevelItem.prototype, "currentLevel", void 0);
      __decorate([ property(cc.Label) ], AnimalLevelItem.prototype, "addScoreLevel", void 0);
      __decorate([ property(cc.Label) ], AnimalLevelItem.prototype, "levelMaxValue", void 0);
      __decorate([ property(cc.Node) ], AnimalLevelItem.prototype, "lockTip", void 0);
      __decorate([ property(cc.Sprite) ], AnimalLevelItem.prototype, "icon", void 0);
      __decorate([ property(cc.Sprite) ], AnimalLevelItem.prototype, "levelProgress", void 0);
      AnimalLevelItem = __decorate([ ccclass ], AnimalLevelItem);
      return AnimalLevelItem;
    }(cc.Component);
    exports.default = AnimalLevelItem;
    cc._RF.pop();
  }, {
    "../../../Data/Enum": "Enum",
    "../../../Data/GameData": "GameData",
    "../../DataManager": "DataManager"
  } ],
  AnimalManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c1901OG/hJAdJmWEqegNHiq", "AnimalManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var AnimalManager = function() {
      function AnimalManager() {}
      AnimalManager.getInstance = function() {
        null === this._instance && (this._instance = new this());
        return this._instance;
      };
      Object.defineProperty(AnimalManager, "instance", {
        get: function() {
          return this.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      AnimalManager._instance = null;
      return AnimalManager;
    }();
    exports.default = AnimalManager;
    cc._RF.pop();
  }, {} ],
  AudioManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "499a20sm3RNqab2fGw/3Y8i", "AudioManager");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../Data/Enum");
    var DataManager_1 = require("../Game/DataManager");
    var ResManager_1 = require("./ResManager");
    var AudioManager = function() {
      function AudioManager() {
        this.audioSource = null;
      }
      AudioManager.getInstance = function() {
        if (null === this._instance) {
          this._instance = new this();
          this._instance.init();
        }
        return this._instance;
      };
      Object.defineProperty(AudioManager, "instance", {
        get: function() {
          return this.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      AudioManager.prototype.init = function() {
        this.audioSource = new cc.AudioSource();
        this.audioSource.loop = true;
      };
      AudioManager.prototype.playMusic = function() {
        return __awaiter(this, void 0, void 0, function() {
          var clip, _a;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              this.stopMusic();
              if (0 == DataManager_1.default.instance.musicValue) return [ 2 ];
              clip = null;
              _a = DataManager_1.default.instance.gameState;
              switch (_a) {
               case 1:
                return [ 3, 1 ];

               case 2:
                return [ 3, 3 ];

               case 3:
                return [ 3, 5 ];
              }
              return [ 3, 7 ];

             case 1:
              return [ 4, ResManager_1.default.instance.loadRes(Enum_1.ENUM_AUDIO_CLIP.INTRO_BGM) ];

             case 2:
              clip = _b.sent();
              return [ 3, 8 ];

             case 3:
              return [ 4, ResManager_1.default.instance.loadRes(Enum_1.ENUM_AUDIO_CLIP.GMAE_BGM) ];

             case 4:
              clip = _b.sent();
              return [ 3, 8 ];

             case 5:
              return [ 4, ResManager_1.default.instance.loadRes(Enum_1.ENUM_AUDIO_CLIP.CRAZY_BGM) ];

             case 6:
              clip = _b.sent();
              return [ 3, 8 ];

             case 7:
              return [ 3, 8 ];

             case 8:
              if (cc.isValid(clip)) {
                this.audioSource.clip = clip;
                this.audioSource.play();
              }
              return [ 2 ];
            }
          });
        });
      };
      AudioManager.prototype.stopMusic = function() {
        this.audioSource.clip && this.audioSource.stop();
      };
      AudioManager.prototype.playBtn = function() {
        this.playSound(Enum_1.ENUM_AUDIO_CLIP.BUTTON);
      };
      AudioManager.prototype.playSound = function(name, isLoop) {
        void 0 === isLoop && (isLoop = false);
        return __awaiter(this, void 0, void 0, function() {
          var clip;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              if (0 == DataManager_1.default.instance.effectValue) return [ 2 ];
              return [ 4, ResManager_1.default.instance.loadRes(name) ];

             case 1:
              clip = _a.sent();
              return [ 2, cc.audioEngine.playEffect(clip, isLoop) ];
            }
          });
        });
      };
      AudioManager.prototype.stopSound = function() {
        cc.audioEngine.stopAllEffects();
      };
      AudioManager._instance = null;
      return AudioManager;
    }();
    exports.default = AudioManager;
    cc._RF.pop();
  }, {
    "../Data/Enum": "Enum",
    "../Game/DataManager": "DataManager",
    "./ResManager": "ResManager"
  } ],
  DataManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fa4a9Ec1utAiJ+aaPeIEK5b", "DataManager");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.ToolData = exports.AnimalData = void 0;
    var Enum_1 = require("../Data/Enum");
    var GameData_1 = require("../Data/GameData");
    var EventManager_1 = require("../Manager/EventManager");
    var ResManager_1 = require("../Manager/ResManager");
    var STORAGE_KEY = "STORAGE_KEY_GAME_ANIMAL";
    var ANIMAL_LEVELDATA = "ANIMAL_LEVELDATA_GAME_ANIMAL_";
    var TOOL_COUNTDATA = "TOOL_COUNTDATA_GAME_ANIMAL";
    var AUDIODATA = "AUDIODATA_GAME_ANIMAL";
    var AnimalData = function() {
      function AnimalData(id) {
        GameData_1.useFirstData && true && cc.sys.localStorage.setItem(ANIMAL_LEVELDATA + id, "");
        var levelData = cc.sys.localStorage.getItem(ANIMAL_LEVELDATA + id);
        if (levelData && "" != levelData) {
          levelData = JSON.parse(levelData);
          this._level = levelData.level;
          this._isLock = levelData.isLock;
          this._expValue = levelData.expValue;
          this._score = levelData.score;
        } else {
          this._level = 1;
          this._isLock = true;
          this._expValue = 0;
          this._score = 0;
        }
      }
      Object.defineProperty(AnimalData.prototype, "level", {
        get: function() {
          return this._level;
        },
        set: function(data) {
          this._level = data;
          this.save();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AnimalData.prototype, "isLock", {
        get: function() {
          return this._isLock;
        },
        set: function(data) {
          this._isLock = data;
          this.save();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AnimalData.prototype, "expValue", {
        get: function() {
          return this._expValue;
        },
        set: function(data) {
          this._expValue = data;
          this.save();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(AnimalData.prototype, "score", {
        get: function() {
          return this._score;
        },
        set: function(data) {
          this._score = data;
          this.save();
        },
        enumerable: false,
        configurable: true
      });
      AnimalData.prototype.save = function() {
        cc.sys.localStorage.setItem(ANIMAL_LEVELDATA + this.id, JSON.stringify({
          level: this.level,
          isLock: this.isLock,
          expValue: this.expValue,
          score: this.score
        }));
      };
      return AnimalData;
    }();
    exports.AnimalData = AnimalData;
    var ToolData = function() {
      function ToolData(id) {
        GameData_1.useFirstData && true && cc.sys.localStorage.setItem(TOOL_COUNTDATA + id, "");
        var toolData = cc.sys.localStorage.getItem(TOOL_COUNTDATA + id);
        if (toolData && "" != toolData) {
          toolData = JSON.parse(toolData);
          this.countNumber = toolData.countNumber;
        } else this.countNumber = 0;
      }
      Object.defineProperty(ToolData.prototype, "countNumber", {
        get: function() {
          return this._countNumber;
        },
        set: function(data) {
          this._countNumber = data;
          this.save();
        },
        enumerable: false,
        configurable: true
      });
      ToolData.prototype.save = function() {
        cc.sys.localStorage.setItem(TOOL_COUNTDATA + this.id, JSON.stringify({
          countNumber: this.countNumber
        }));
      };
      return ToolData;
    }();
    exports.ToolData = ToolData;
    var DataManager = function() {
      function DataManager() {
        this._diamond = 0;
        this._maxScore = 0;
        this._useAnimId = 0;
        this.gameState = 0;
        this.currentScore = 0;
        this.currentDeleteAnimal = 0;
        this._effectValue = 0;
        this._musicValue = 0;
        this.animalData = [];
        this.toolData = [];
        this.currentUseToolID = -1;
      }
      DataManager.getInstance = function() {
        null === this._instance && (this._instance = new this());
        return this._instance;
      };
      Object.defineProperty(DataManager, "instance", {
        get: function() {
          return this.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(DataManager.prototype, "diamond", {
        get: function() {
          return this._diamond;
        },
        set: function(data) {
          this._diamond = data;
          this.save();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(DataManager.prototype, "maxScore", {
        get: function() {
          return this._maxScore;
        },
        set: function(data) {
          this._maxScore = data;
          this.save();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(DataManager.prototype, "useAnimId", {
        get: function() {
          return this._useAnimId;
        },
        set: function(data) {
          this._useAnimId = data;
          this.save();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(DataManager.prototype, "effectValue", {
        get: function() {
          return this._effectValue;
        },
        set: function(data) {
          this._effectValue = data;
          this.saveAudioData();
        },
        enumerable: false,
        configurable: true
      });
      Object.defineProperty(DataManager.prototype, "musicValue", {
        get: function() {
          return this._musicValue;
        },
        set: function(data) {
          this._musicValue = data;
          this.saveAudioData();
        },
        enumerable: false,
        configurable: true
      });
      DataManager.prototype.save = function() {
        cc.sys.localStorage.setItem(STORAGE_KEY, JSON.stringify({
          diamond: this.diamond,
          maxScore: this.maxScore,
          useAnimId: this.useAnimId
        }));
      };
      DataManager.prototype.saveAudioData = function() {
        cc.sys.localStorage.setItem(AUDIODATA, JSON.stringify({
          effectValue: this.effectValue,
          musicValue: this.musicValue
        }));
      };
      DataManager.prototype.init = function(endCB) {
        return __awaiter(this, void 0, void 0, function() {
          var _a, localData, localAudioData;
          return __generator(this, function(_b) {
            switch (_b.label) {
             case 0:
              if (GameData_1.useFirstData && true) {
                cc.sys.localStorage.setItem(STORAGE_KEY, "");
                cc.sys.localStorage.setItem(AUDIODATA, "");
              }
              _a = this;
              return [ 4, this.loadLocalAnimalData() ];

             case 1:
              _a.animalData = _b.sent();
              localData = cc.sys.localStorage.getItem(STORAGE_KEY);
              localAudioData = cc.sys.localStorage.getItem(AUDIODATA);
              if (localData && "" != localData) try {
                localData = JSON.parse(localData);
                this._diamond = localData.diamond;
                this._maxScore = localData.maxScore;
                this._useAnimId = localData.useAnimId;
              } catch (error) {
                console.error("cc.sys.localStorage.getItem(STORAGE_KEY) error", error);
              } else {
                this._diamond = GameData_1.InitDiamondCount;
                this._maxScore = 0;
                this.useAnimId = 1;
              }
              if (localAudioData && "" != localAudioData) try {
                localAudioData = JSON.parse(localAudioData);
                this._effectValue = localAudioData.effectValue;
                this._musicValue = localAudioData.musicValue;
              } catch (error) {
                console.error("cc.sys.localStorage.getItem(STORAGE_KEY) error", error);
              } else {
                this._effectValue = 1;
                this._musicValue = 1;
              }
              this.loadLocalToolData();
              this.currentUseToolID = -1;
              endCB && endCB();
              return [ 2 ];
            }
          });
        });
      };
      DataManager.prototype.getAnimalDataById = function(id) {
        for (var i = 0; i < this.animalData.length; i++) if (id == this.animalData[i].id) return this.animalData[i];
      };
      DataManager.prototype.getToolDataById = function(id) {
        for (var i = 0; i < this.toolData.length; i++) if (id == this.toolData[i].id) return this.toolData[i];
      };
      DataManager.prototype.loadLocalAnimalData = function() {
        return __awaiter(this, void 0, Promise, function() {
          var animalJson, animalData, i, element, data;
          return __generator(this, function(_a) {
            switch (_a.label) {
             case 0:
              return [ 4, ResManager_1.default.instance.loadRes(Enum_1.JsonUrl.animalJson) ];

             case 1:
              animalJson = _a.sent();
              animalData = [];
              for (i = 0; i < animalJson.json.length; i++) {
                element = animalJson.json[i];
                data = new AnimalData(element.id);
                data.id = element.id;
                data.desc = element.desc;
                data.lockMoney = element.lockMoney;
                data.name = element.name;
                data.skillNeedCube = element.skillNeedCube;
                animalData.push(data);
              }
              return [ 2, animalData ];
            }
          });
        });
      };
      DataManager.prototype.loadLocalToolData = function() {
        this.toolData = [];
        for (var i = 0; i < GameData_1.ToolDataLocal.length; i++) {
          var element = GameData_1.ToolDataLocal[i];
          var data = new ToolData(element[0]);
          data.id = element[0];
          data.name = element[1];
          data.desc = element[2];
          data.diamondCost = element[3];
          this.toolData.push(data);
        }
      };
      DataManager.prototype.buyAnimal = function(id) {
        var animalData = this.getAnimalDataById(id);
        if (animalData.lockMoney > this.diamond) return false;
        this.diamond -= animalData.lockMoney;
        animalData.isLock = false;
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.UPDATE_DIAMOND_COUNT);
        return true;
      };
      DataManager.prototype.buyTool = function(id) {
        var toolData = this.getToolDataById(id);
        if (toolData.diamondCost > this.diamond) return false;
        this.diamond -= toolData.diamondCost;
        toolData.countNumber++;
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.UPDATE_DIAMOND_COUNT);
        return true;
      };
      DataManager.prototype.addDiamond = function(addCount) {
        this.diamond += addCount;
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.UPDATE_DIAMOND_COUNT);
      };
      DataManager._instance = null;
      return DataManager;
    }();
    exports.default = DataManager;
    cc._RF.pop();
  }, {
    "../Data/Enum": "Enum",
    "../Data/GameData": "GameData",
    "../Manager/EventManager": "EventManager",
    "../Manager/ResManager": "ResManager"
  } ],
  Enum: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4a8b3BwkFpMBroR58wZ+RBe", "Enum");
    "use strict";
    var _a, _b;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BaseScore = exports.ENUM_AUDIO_CLIP = exports.JsonUrl = exports.GAME_Prefab = exports.TOOL_TYPE_TEXTUREURL = exports.TOOL_TYPE = exports.ANIMAL_TYPE_TEXTUREURL = exports.ANIMAL_TYPE = exports.GAME_POOL = exports.ENUM_GAME_EVENT = void 0;
    var ENUM_GAME_EVENT;
    (function(ENUM_GAME_EVENT) {
      ENUM_GAME_EVENT["GAME_BTN_JUMP_ITEM"] = "GAME_BTN_JUMP_ITEM";
      ENUM_GAME_EVENT["READYUI_CHOOSE_ITEM"] = "READYUI_CHOOSE_ITEM";
      ENUM_GAME_EVENT["READYUI_CHOOSE_TOOLITEM"] = "READYUI_CHOOSE_TOOLITEM";
      ENUM_GAME_EVENT["READYUI_REFRESH_ITEM"] = "READYUI_REFRESH_ITEM";
      ENUM_GAME_EVENT["READYUI_REFRESH_TOOLITEM"] = "READYUI_REFRESH_TOOLITEM";
      ENUM_GAME_EVENT["GAME_START"] = "GAME_START";
      ENUM_GAME_EVENT["UPDATE_DIAMOND_COUNT"] = "UPDATE_DIAMOND_COUNT";
      ENUM_GAME_EVENT["GAME_PLAYSTART"] = "GAME_PLAYSTART";
      ENUM_GAME_EVENT["QUIT_GAME"] = "QUIT_GAME";
      ENUM_GAME_EVENT["QUIT_SETTING"] = "QUIT_SETTING";
      ENUM_GAME_EVENT["SHOW_GAMESCORE"] = "SHOW_GAMESCORE";
    })(ENUM_GAME_EVENT = exports.ENUM_GAME_EVENT || (exports.ENUM_GAME_EVENT = {}));
    var GAME_POOL;
    (function(GAME_POOL) {
      GAME_POOL["ANIMAL_POOL"] = "ANIMAL_POOL";
      GAME_POOL["ANIMAL_CHOOSE"] = "ANIMAL_CHOOSE";
      GAME_POOL["ANIMAL_LINE"] = "ANIMAL_LINE";
      GAME_POOL["UI_SCORE_FLY"] = "UI_SCORE_FLY";
    })(GAME_POOL = exports.GAME_POOL || (exports.GAME_POOL = {}));
    var ANIMAL_TYPE;
    (function(ANIMAL_TYPE) {
      ANIMAL_TYPE[ANIMAL_TYPE["Bear"] = 1] = "Bear";
      ANIMAL_TYPE[ANIMAL_TYPE["Kitty"] = 2] = "Kitty";
      ANIMAL_TYPE[ANIMAL_TYPE["Frog"] = 3] = "Frog";
      ANIMAL_TYPE[ANIMAL_TYPE["Pengu"] = 4] = "Pengu";
      ANIMAL_TYPE[ANIMAL_TYPE["Fox"] = 5] = "Fox";
      ANIMAL_TYPE[ANIMAL_TYPE["Owl"] = 6] = "Owl";
      ANIMAL_TYPE[ANIMAL_TYPE["Rabbit"] = 7] = "Rabbit";
      ANIMAL_TYPE[ANIMAL_TYPE["Hippo"] = 8] = "Hippo";
      ANIMAL_TYPE[ANIMAL_TYPE["Piggy"] = 9] = "Piggy";
      ANIMAL_TYPE[ANIMAL_TYPE["Koala"] = 10] = "Koala";
      ANIMAL_TYPE[ANIMAL_TYPE["Duck"] = 11] = "Duck";
      ANIMAL_TYPE[ANIMAL_TYPE["Snake"] = 12] = "Snake";
    })(ANIMAL_TYPE = exports.ANIMAL_TYPE || (exports.ANIMAL_TYPE = {}));
    exports.ANIMAL_TYPE_TEXTUREURL = (_a = {}, _a[ANIMAL_TYPE.Bear] = "pic/animal/1", 
    _a[ANIMAL_TYPE.Kitty] = "pic/animal/2", _a[ANIMAL_TYPE.Frog] = "pic/animal/3", _a[ANIMAL_TYPE.Pengu] = "pic/animal/4", 
    _a[ANIMAL_TYPE.Fox] = "pic/animal/5", _a[ANIMAL_TYPE.Owl] = "pic/animal/6", _a[ANIMAL_TYPE.Rabbit] = "pic/animal/7", 
    _a[ANIMAL_TYPE.Hippo] = "pic/animal/8", _a[ANIMAL_TYPE.Piggy] = "pic/animal/9", 
    _a[ANIMAL_TYPE.Koala] = "pic/animal/10", _a[ANIMAL_TYPE.Duck] = "pic/animal/11", 
    _a[ANIMAL_TYPE.Snake] = "pic/animal/12", _a);
    var TOOL_TYPE;
    (function(TOOL_TYPE) {
      TOOL_TYPE[TOOL_TYPE["SCORE"] = 1] = "SCORE";
      TOOL_TYPE[TOOL_TYPE["GEM"] = 2] = "GEM";
      TOOL_TYPE[TOOL_TYPE["BUBBLE"] = 3] = "BUBBLE";
      TOOL_TYPE[TOOL_TYPE["TIME"] = 4] = "TIME";
      TOOL_TYPE[TOOL_TYPE["FIVETOFOUR"] = 5] = "FIVETOFOUR";
    })(TOOL_TYPE = exports.TOOL_TYPE || (exports.TOOL_TYPE = {}));
    exports.TOOL_TYPE_TEXTUREURL = (_b = {}, _b[TOOL_TYPE.SCORE] = "pic/tools/1", _b[TOOL_TYPE.GEM] = "pic/tools/2", 
    _b[TOOL_TYPE.BUBBLE] = "pic/tools/3", _b[TOOL_TYPE.TIME] = "pic/tools/4", _b[TOOL_TYPE.FIVETOFOUR] = "pic/tools/5", 
    _b);
    exports.GAME_Prefab = {
      mainBg: {
        zIndex: 1,
        url: "prefab/UI/mainBgUI"
      },
      startUI: {
        zIndex: 2,
        url: "prefab/UI/startUI"
      },
      readyUI: {
        zIndex: 2,
        url: "prefab/UI/readyUI"
      },
      settingUI: {
        zIndex: 2,
        url: "prefab/UI/settingUI"
      },
      loadSceneUI: {
        zIndex: 3,
        url: "prefab/UI/loadSceneUI"
      },
      gameUI: {
        zIndex: 1,
        url: "prefab/game/game"
      },
      gameSettingUI: {
        zIndex: 2,
        url: "prefab/UI/gameSettingUI"
      },
      levelshowUI: {
        zIndex: 3,
        url: "prefab/UI/levelShowUI"
      },
      scoreUI: {
        zIndex: 3,
        url: "prefab/UI/scoreUI"
      },
      loadUI: {
        zIndex: 4,
        url: "prefab/UI/loadUI"
      },
      animLine: "prefab/AnimalLine",
      animChoose: "prefab/AnimalChoose"
    };
    exports.JsonUrl = {
      animalJson: "jsons/animal"
    };
    var ENUM_AUDIO_CLIP;
    (function(ENUM_AUDIO_CLIP) {
      ENUM_AUDIO_CLIP["INTRO_BGM"] = "audio/bgm/introMusic";
      ENUM_AUDIO_CLIP["GMAE_BGM"] = "audio/bgm/inGameMusic";
      ENUM_AUDIO_CLIP["CRAZY_BGM"] = "audio/bgm/crazyGameMusic";
      ENUM_AUDIO_CLIP["BUTTON"] = "audio/effect/button";
      ENUM_AUDIO_CLIP["PLAY"] = "audio/effect/Play";
      ENUM_AUDIO_CLIP["NOMONEY"] = "audio/effect/NoMoney";
      ENUM_AUDIO_CLIP["GETNEW"] = "audio/effect/GetNew";
      ENUM_AUDIO_CLIP["COMBO"] = "audio/effect/combo1";
      ENUM_AUDIO_CLIP["READY"] = "audio/effect/ready";
      ENUM_AUDIO_CLIP["GO"] = "audio/effect/go";
    })(ENUM_AUDIO_CLIP = exports.ENUM_AUDIO_CLIP || (exports.ENUM_AUDIO_CLIP = {}));
    exports.BaseScore = 10;
    cc._RF.pop();
  }, {} ],
  EventManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a65afuRIFJN0aWClIJ1OR72", "EventManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var EventManager = function() {
      function EventManager() {
        this.eventMap = new Map();
      }
      EventManager.getInstance = function() {
        null === this._instance && (this._instance = new this());
        return this._instance;
      };
      Object.defineProperty(EventManager, "instance", {
        get: function() {
          return this.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      EventManager.prototype.on = function(name, event, context) {
        if (this.eventMap.has(name)) {
          var eventArr = this.eventMap.get(name);
          eventArr.push({
            event: event,
            context: context
          });
        } else this.eventMap.set(name, [ {
          event: event,
          context: context
        } ]);
      };
      EventManager.prototype.off = function(name, event, target) {
        if (this.eventMap.has(name)) {
          var eventArr = this.eventMap.get(name);
          var index = eventArr.findIndex(function(item) {
            return item.event == event && item.context == target;
          });
          index > -1 && eventArr.splice(index, 1);
        }
      };
      EventManager.prototype.emit = function(name) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) params[_i - 1] = arguments[_i];
        if (this.eventMap.has(name)) {
          var eventArr = this.eventMap.get(name);
          eventArr.forEach(function(_a) {
            var event = _a.event, context = _a.context;
            context ? event.apply(context, params) : event(params);
          });
        }
      };
      EventManager.prototype.clear = function() {
        this.eventMap.clear();
      };
      EventManager._instance = null;
      return EventManager;
    }();
    exports.default = EventManager;
    cc._RF.pop();
  }, {} ],
  GameData: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "99616FD9LhHv76FPC2M4L7R", "GameData");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.BaseTime = exports.MaxShowCount = exports.InitDiamondCount = exports.useFirstData = exports.ToolDataLocal = exports.ToolTip = exports.ScoreBase = exports.ScoreCoefficientByLevel = exports.FactorLevelTsum = exports.AnimalMaxLevel = exports.BaseLevelScore = void 0;
    exports.BaseLevelScore = 5e3;
    exports.AnimalMaxLevel = 6;
    exports.FactorLevelTsum = [ 400, 600, 700, 800, 900, 1100 ];
    exports.ScoreCoefficientByLevel = [ 1, 1.1, 1.2, 1.4, 1.5, 1.6 ];
    exports.ScoreBase = 10;
    exports.ToolTip = "\u82b1\u8d39\u5b9d\u77f3\u83b7\u5f97\u6e38\u620f\u4e2d\u5956\u52b1";
    exports.ToolDataLocal = [ [ 1, "+\u5206\u6570", "\u5c06\u603b\u5206\u63d0\u9ad810%", 200 ] ];
    exports.useFirstData = true;
    exports.InitDiamondCount = 1e3;
    exports.MaxShowCount = 40;
    exports.BaseTime = 5;
    cc._RF.pop();
  }, {} ],
  GameSettingUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "23564gPxs1GE4mZp/JJbL0W", "GameSettingUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../../Data/Enum");
    var AudioManager_1 = require("../../Manager/AudioManager");
    var EventManager_1 = require("../../Manager/EventManager");
    var GameUtils_1 = require("../GameUtils");
    var SettingUI_1 = require("./SettingUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var GameSettingUI = function(_super) {
      __extends(GameSettingUI, _super);
      function GameSettingUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      GameSettingUI.prototype.onBtnBackMenu = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        AudioManager_1.default.instance.playBtn();
        this.node.destroy();
        cc.resources.release(Enum_1.GAME_Prefab.settingUI.url);
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.QUIT_GAME);
      };
      GameSettingUI.prototype.onDestroy = function() {
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.QUIT_SETTING);
      };
      GameSettingUI = __decorate([ ccclass ], GameSettingUI);
      return GameSettingUI;
    }(SettingUI_1.default);
    exports.default = GameSettingUI;
    cc._RF.pop();
  }, {
    "../../Data/Enum": "Enum",
    "../../Manager/AudioManager": "AudioManager",
    "../../Manager/EventManager": "EventManager",
    "../GameUtils": "GameUtils",
    "./SettingUI": "SettingUI"
  } ],
  GameUtils: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "0826aHaRedL6IfAbOAfD5PH", "GameUtils");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var GameUtils = function() {
      function GameUtils() {}
      GameUtils.formatNumber = function(coin) {
        if ("number" != typeof coin) return "0";
        if (coin < Math.pow(10, 4)) return String(coin);
        var coinStr = String(coin / Math.pow(10, 4));
        return coinStr.substring(0, coinStr.includes(".") ? 4 : 3).replace(/\.$/g, "") + "\u4e07";
      };
      GameUtils.blockBtnQC = function(node, delay) {
        var blockFun = function(button) {
          delay = delay || .5;
          button.interactable = false;
          button.scheduleOnce(function() {
            button.interactable = true;
          }, delay);
        };
        node && node.getComponent(cc.Button) && blockFun(node.getComponent(cc.Button));
      };
      return GameUtils;
    }();
    exports.default = GameUtils;
    cc.Sprite.prototype.setSprite = function(path, bundle, finishCallBack) {
      var _this = this;
      void 0 === bundle && (bundle = cc.resources);
      if (!path) return;
      var spriteFrame = bundle.get(path, cc.SpriteFrame);
      if (cc.isValid(spriteFrame)) {
        if (this.notDefaultSF) this.onReleaseSF(); else {
          var oldDestroy_1 = this.onDestroy;
          this.onDestroy = function() {
            _this.onReleaseSF();
            oldDestroy_1 && oldDestroy_1.call(_this);
          };
        }
        this.spriteFrame = spriteFrame;
        this.spriteFrame.addRef();
        this.notDefaultSF = true;
        finishCallBack && finishCallBack();
        return;
      }
      bundle.load(path, cc.SpriteFrame, function(err, spriteFrame) {
        if (err || !cc.isValid(_this.node)) return;
        if (_this.notDefaultSF) _this.onReleaseSF(); else {
          var oldDestroy_2 = _this.onDestroy;
          _this.onDestroy = function() {
            _this.onReleaseSF();
            oldDestroy_2 && oldDestroy_2.call(_this);
          };
        }
        _this.spriteFrame = spriteFrame;
        _this.spriteFrame.addRef();
        _this.notDefaultSF = true;
        finishCallBack && finishCallBack();
      });
    };
    cc.Sprite.prototype.onReleaseSF = function() {
      this.spriteFrame && this.spriteFrame.refCount > 0 && this.spriteFrame.decRef();
      this.spriteFrame = null;
    };
    cc._RF.pop();
  }, {} ],
  Game: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "fb6d5Ze2YRPQY5gm5h//Lns", "Game");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../Data/Enum");
    var GameData_1 = require("../Data/GameData");
    var AudioManager_1 = require("../Manager/AudioManager");
    var EventManager_1 = require("../Manager/EventManager");
    var PoolManager_1 = require("../Manager/PoolManager");
    var ResManager_1 = require("../Manager/ResManager");
    var AnimalChoose_1 = require("./AnimalCube/AnimalChoose");
    var AnimalCube_1 = require("./AnimalCube/AnimalCube");
    var DataManager_1 = require("./DataManager");
    var GameUtils_1 = require("./GameUtils");
    var LevelShowUI_1 = require("./UI/LevelShowUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Game = function(_super) {
      __extends(Game, _super);
      function Game() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.bornAnimContainer = null;
        _this.animChooseParent = null;
        _this.animLineParent = null;
        _this.animCube = null;
        _this.touchNode = null;
        _this.diamonLabel = null;
        _this.scoreLabel = null;
        _this.useAnimalIcon = null;
        _this.timeProgress = null;
        _this.energyProgress = null;
        _this.energyProgressInBtn = null;
        _this.readyNode = null;
        _this.go = null;
        _this.flyScoreLabel = null;
        _this.flyScoreRoot = null;
        _this.canUseTip = null;
        _this.levelAnimal = [];
        _this.animalDeleteCount = null;
        _this.anims = [];
        _this.animLength = 0;
        _this.selectedNodes = [];
        _this.curTipNodes = [];
        _this.tipNodes = [];
        _this.minLinkCount = 3;
        _this.animLine = null;
        _this.animChoose = null;
        _this.tipDeleteTimeOut = null;
        _this.isGaming = false;
        _this.gameMaxTime = 0;
        _this.gameTime = 0;
        return _this;
      }
      Game.prototype.onLoad = function() {
        this.preLoadRes();
        this.readyNode.active = false;
        this.go.active = false;
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_PLAYSTART, this.onGameStart, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.UPDATE_DIAMOND_COUNT, this.initDiamond, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.QUIT_GAME, this.onEventQuitGame, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.QUIT_SETTING, this.continueGame, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_START, this.onEventQuitGame, this);
      };
      Game.prototype.continueGame = function() {
        this.isGaming = true;
      };
      Game.prototype.update = function(dt) {
        if (!this.isGaming) return;
        this.gameTime += dt;
        var timeprogress = this.gameTime / this.gameMaxTime;
        if (timeprogress <= 1) {
          timeprogress = Math.floor(timeprogress *= 1e4);
          this.timeProgress.fillRange != 1 - timeprogress / 1e4 && (this.timeProgress.fillRange = 1 - timeprogress / 1e4);
        } else {
          this.isGaming = false;
          this.onShowAnimLevel();
        }
      };
      Game.prototype.preLoadRes = function() {
        cc.resources.preload(Enum_1.GAME_Prefab.animChoose, cc.Prefab);
        cc.resources.preload(Enum_1.GAME_Prefab.animLine, cc.Prefab);
      };
      Game.prototype.onGameStart = function() {
        var _this = this;
        this.initData();
        this.initDiamond();
        this.initCurrentScore();
        this.initUseAnimalIcon();
        this.initAnimalSkillProgress();
        this.playStartAnimation(1);
        this.schedule(function() {
          _this.spawnGroup();
        }, .5);
      };
      Game.prototype.initDiamond = function() {
        this.diamonLabel.string = "" + DataManager_1.default.instance.diamond;
      };
      Game.prototype.initCurrentScore = function() {
        this.scoreLabel.string = "" + GameUtils_1.default.formatNumber(DataManager_1.default.instance.currentScore);
      };
      Game.prototype.initUseAnimalIcon = function() {
        var icon = Enum_1.ANIMAL_TYPE_TEXTUREURL[DataManager_1.default.instance.useAnimId];
        this.useAnimalIcon.setSprite(icon);
      };
      Game.prototype.initAnimalSkillProgress = function() {
        var useAnimalData = DataManager_1.default.instance.getAnimalDataById(DataManager_1.default.instance.useAnimId);
        var progress = DataManager_1.default.instance.currentDeleteAnimal / useAnimalData.skillNeedCube;
        this.energyProgress.fillRange = progress > 1 ? 1 : progress;
        this.energyProgressInBtn.fillRange = progress > 1 ? 1 : progress;
        this.canUseTip.active = progress >= 1;
      };
      Game.prototype.initData = function() {
        this.isGaming = false;
        this.animLine = new Map();
        this.animChoose = new Map();
        this.anims = [];
        this.animLength = 0;
        this.selectedNodes = [];
        this.curTipNodes = [];
        this.tipNodes = [];
        this.gameMaxTime = GameData_1.BaseTime;
        DataManager_1.default.instance.currentScore = 0;
        DataManager_1.default.instance.currentDeleteAnimal = 0;
        this.bornAnimContainer.removeAllChildren();
        this.animLineParent.removeAllChildren();
        this.animChooseParent.removeAllChildren();
        this.levelAnimal = [];
        this.animalDeleteCount = new Map();
        this.levelAnimal.push(DataManager_1.default.instance.useAnimId);
        this.animalDeleteCount.set(DataManager_1.default.instance.useAnimId, 0);
        var animalCount = 5;
        var randomAnims = [];
        for (var i = 1; i <= 12; i++) DataManager_1.default.instance.useAnimId != i && randomAnims.push(i);
        do {
          var random = Math.floor(Math.random() * randomAnims.length);
          this.levelAnimal.push(randomAnims[random]);
          this.animalDeleteCount.set(randomAnims[random], 0);
          randomAnims.splice(random, 1);
        } while (this.levelAnimal.length < animalCount);
      };
      Game.prototype.onBtnJump = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        AudioManager_1.default.instance.playBtn();
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_BTN_JUMP_ITEM);
        if (this.tipDeleteTimeOut) {
          clearTimeout(this.tipDeleteTimeOut);
          this.tipDeleteTimeOut = null;
          for (var i = 0; i < this.tipNodes.length; i++) {
            var element = this.tipNodes[i];
            element.getComponent(AnimalCube_1.default).clearTip();
          }
          this.tipNodes = [];
        }
      };
      Game.prototype.onBtnSetting = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        AudioManager_1.default.instance.playBtn();
        this.isGaming = false;
        ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.gameSettingUI.url).then(function(prefab) {
          if (cc.isValid(prefab)) {
            var node = cc.instantiate(prefab);
            node.parent = cc.find("Canvas");
            node.zIndex = Enum_1.GAME_Prefab.gameSettingUI.zIndex;
          }
        });
      };
      Game.prototype.onBtnUseSkill = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        var useAnimalData = DataManager_1.default.instance.getAnimalDataById(DataManager_1.default.instance.useAnimId);
        if (DataManager_1.default.instance.currentDeleteAnimal >= useAnimalData.skillNeedCube) {
          AudioManager_1.default.instance.playBtn();
          DataManager_1.default.instance.currentDeleteAnimal -= useAnimalData.skillNeedCube;
          this.initAnimalSkillProgress();
          switch (Number(useAnimalData.id)) {
           case Enum_1.ANIMAL_TYPE.Bear:
            this.gameMaxTime = GameData_1.BaseTime + 3;
            break;

           case Enum_1.ANIMAL_TYPE.Kitty:
            this.gameMaxTime = GameData_1.BaseTime + 5;
            break;

           case Enum_1.ANIMAL_TYPE.Frog:
            this.gameMaxTime = GameData_1.BaseTime + 8;
            break;

           case 4:
            this.gameMaxTime = GameData_1.BaseTime + 10;
            break;

           case 5:
            this.gameMaxTime = GameData_1.BaseTime + 12;
            break;

           case 6:
            this.gameMaxTime = GameData_1.BaseTime + 15;
            break;

           case 7:
            this.gameMaxTime = GameData_1.BaseTime + 20;
            break;

           case 8:
            this.gameMaxTime = GameData_1.BaseTime + 15;
            break;

           case 9:
            this.gameMaxTime = GameData_1.BaseTime + 30;
            break;

           case 10:
           case 11:
           case 12:
            this.gameMaxTime = GameData_1.BaseTime + 3;
          }
        }
      };
      Game.prototype.spawnGroup = function() {
        var _this = this;
        for (var i = 0; i < 4; i++) {
          if (this.animLength > GameData_1.MaxShowCount) {
            this.unscheduleAllCallbacks();
            if (!this.isGaming) {
              this.isGaming = true;
              this.playStartAnimation(2);
            }
            return;
          }
          var scale = Math.random() < .05 ? 1.6 : .8;
          var node = this.spawnAnimal(this.levelAnimal, scale);
          node.name = this.anims.length + "";
          node.setPosition(cc.v2((Math.random() - .5) * (this.bornAnimContainer.width - 60), 0));
          this.anims.push(node);
          1.6 == scale ? this.animLength += 2 : this.animLength++;
        }
        this.anims.length < GameData_1.MaxShowCount && this.scheduleOnce(function() {
          _this.spawnGroup();
        }, .5);
      };
      Game.prototype.spawnAnimal = function(animalRandomType, scale) {
        var type = animalRandomType[Math.floor(Math.random() * animalRandomType.length)];
        var animal = PoolManager_1.default.instance.getNode(this.animCube, this.bornAnimContainer, Enum_1.GAME_POOL.ANIMAL_POOL);
        animal.angle = 360 * Math.random();
        animal.getComponent(AnimalCube_1.default).init(scale, type);
        return animal;
      };
      Game.prototype.onTouchStart = function(event) {
        if (!this.isGaming) return;
        if (this.tipDeleteTimeOut) {
          clearTimeout(this.tipDeleteTimeOut);
          this.tipDeleteTimeOut = null;
          for (var i = 0; i < this.tipNodes.length; i++) {
            var element = this.tipNodes[i];
            element.getComponent(AnimalCube_1.default).clearTip();
          }
          this.tipNodes = [];
        }
        this.tipDeleteTimeOut = null;
        var node = this.getNodeUnderTouch(event);
        node && this.addToSelection(node);
      };
      Game.prototype.onTouchMove = function(event) {
        var node = this.getNodeUnderTouch(event);
        if (!node) return;
        var lastNode = this.selectedNodes[this.selectedNodes.length - 1];
        if (this.selectedNodes.length > 1 && node.uuid === this.selectedNodes[this.selectedNodes.length - 2].uuid) {
          this.removeFromSelection(lastNode);
          this.selectedNodes.length > 1 && node.getComponent(AnimalCube_1.default).chooseAni();
          return;
        }
        if (this.curTipNodes.includes(node) && this.checkLineClear(node, lastNode) && !this.selectedNodes.includes(node)) {
          this.addToSelection(node);
          node.getComponent(AnimalCube_1.default).chooseAni();
        }
      };
      Game.prototype.onTouchEnd = function(event) {
        var _this = this;
        this.clearLine();
        this.selectedNodes.length >= this.minLinkCount ? this.eliminateSelection() : this.clearSelection();
        this.clearTipsAnimCube();
        if (this.tipDeleteTimeOut) {
          clearTimeout(this.tipDeleteTimeOut);
          this.tipDeleteTimeOut = null;
        }
        this.tipDeleteTimeOut = setTimeout(function() {
          _this.findCanClear();
        }, 5e3);
      };
      Game.prototype.getNodeUnderTouch = function(event) {
        var touchLoc = event.getLocation();
        var node = null;
        for (var _i = 0, _a = this.anims; _i < _a.length; _i++) {
          var cell = _a[_i];
          if (cell) {
            var localPos = cell.convertToNodeSpaceAR(touchLoc);
            var center = cell.getComponent(cc.PhysicsCircleCollider).offset;
            var radius = cell.getComponent(cc.PhysicsCircleCollider).radius;
            if (localPos.sub(center).mag() <= radius) {
              node = cell;
              break;
            }
          }
        }
        return node;
      };
      Game.prototype.clearSelection = function() {
        for (var _i = 0, _a = this.selectedNodes; _i < _a.length; _i++) {
          var node = _a[_i];
          if (this.animChoose.has(node.uuid)) {
            this.animChoose.get(node.uuid).getComponent(AnimalChoose_1.default).setTarget(null);
            PoolManager_1.default.instance.putNode(this.animChoose.get(node.uuid), Enum_1.GAME_POOL.ANIMAL_CHOOSE);
            this.animChoose.delete(node.uuid);
          }
          node.getComponent(AnimalCube_1.default).setChoose(false);
        }
        this.selectedNodes = [];
      };
      Game.prototype.clearTipsAnimCube = function() {
        for (var i = 0; i < this.curTipNodes.length; i++) {
          var element = this.curTipNodes[i];
          cc.isValid(element) && element.getComponent(AnimalCube_1.default).clearLight();
        }
        this.curTipNodes = [];
      };
      Game.prototype.addTipsAnimCube = function(checkNode) {
        this.curTipNodes = this.getGraphGroup(checkNode, this.anims);
        for (var i = 0; i < this.curTipNodes.length; i++) {
          var element = this.curTipNodes[i];
          cc.isValid(element) && element.getComponent(AnimalCube_1.default).showLight();
        }
      };
      Game.prototype.eliminateSelection = function() {
        var _this = this;
        var _a;
        if (this.selectedNodes.length <= 0) return;
        var count = 0;
        for (var index = 0; index < this.selectedNodes.length; index++) {
          var element = this.selectedNodes[index];
          var id = element.getComponent(AnimalCube_1.default).animType;
          1.6 == element.scale ? count += 2 : count++;
          if (this.animalDeleteCount.has(id)) {
            var newCount = this.animalDeleteCount.get(id) + count;
            this.animalDeleteCount.set(id, newCount);
          }
        }
        DataManager_1.default.instance.currentDeleteAnimal += count;
        this.initAnimalSkillProgress();
        var deleteType = null === (_a = this.selectedNodes[0]) || void 0 === _a ? void 0 : _a.getComponent(AnimalCube_1.default).animType;
        var addScore = this.getScore(count, deleteType);
        var endNode = this.selectedNodes[this.selectedNodes.length - 1];
        var endPos = endNode.parent.convertToWorldSpaceAR(endNode.position);
        this.flyScore(addScore, endPos, function() {
          DataManager_1.default.instance.currentScore += addScore;
          _this.initCurrentScore();
        });
        var _loop_1 = function(i) {
          var node = this_1.selectedNodes[i];
          if (this_1.animChoose.has(node.uuid)) if (this_1.animChoose.get(node.uuid).getChildByName("diamond").active) this_1.flyDiamond(i, this_1.animChoose.get(node.uuid).getChildByName("diamond"), function() {
            _this.animChoose.get(node.uuid).getComponent(AnimalChoose_1.default).setTarget(null);
            PoolManager_1.default.instance.putNode(_this.animChoose.get(node.uuid), Enum_1.GAME_POOL.ANIMAL_CHOOSE);
            _this.animChoose.delete(node.uuid);
            DataManager_1.default.instance.addDiamond(1);
          }); else {
            this_1.animChoose.get(node.uuid).getComponent(AnimalChoose_1.default).setTarget(null);
            PoolManager_1.default.instance.putNode(this_1.animChoose.get(node.uuid), Enum_1.GAME_POOL.ANIMAL_CHOOSE);
            this_1.animChoose.delete(node.uuid);
          }
          this_1.anims = this_1.anims.filter(function(item) {
            return item.uuid != node.uuid;
          });
          var end = this_1.energyProgressInBtn.node.parent.convertToWorldSpaceAR(this_1.energyProgressInBtn.node.position);
          node.getComponent(AnimalCube_1.default).remove(i, end);
          1.6 == node.scale ? this_1.animLength -= 2 : this_1.animLength--;
        };
        var this_1 = this;
        for (var i = 0; i < this.selectedNodes.length; i++) _loop_1(i);
        this.selectedNodes = [];
        this.spawnGroup();
      };
      Game.prototype.addToSelection = function(node) {
        var _this = this;
        AudioManager_1.default.instance.playBtn();
        if (this.selectedNodes.length > 1) {
          var lastNode = this.selectedNodes[this.selectedNodes.length - 1];
          lastNode.getComponent(AnimalCube_1.default).switchMaterial(false);
        }
        this.selectedNodes.push(node);
        var selectCount = 0;
        for (var i = 0; i < this.selectedNodes.length; i++) {
          var element = this.selectedNodes[i];
          1.6 == element.scale ? selectCount += 2 : selectCount++;
        }
        this.drawLine();
        node.getComponent(AnimalCube_1.default).setChoose(true);
        if (this.animChoose.has(node.uuid)) {
          this.animChoose.get(node.uuid).active = true;
          this.animChoose.get(node.uuid).setPosition(node.position);
        } else cc.resources.load(Enum_1.GAME_Prefab.animChoose, cc.Prefab, function(err, prefab) {
          if (!err) {
            var chooseNode = PoolManager_1.default.instance.getNode(prefab, _this.animChooseParent, Enum_1.GAME_POOL.ANIMAL_CHOOSE);
            _this.animChoose.set(node.uuid, chooseNode);
            chooseNode.getChildByName("diamond").active = selectCount > 2;
            chooseNode.getChildByName("light").active = selectCount <= 2;
            chooseNode.getComponent(AnimalChoose_1.default).setTarget(node);
          }
        });
        this.clearTipsAnimCube();
        this.addTipsAnimCube(node);
      };
      Game.prototype.removeFromSelection = function(node) {
        AudioManager_1.default.instance.playBtn();
        this.selectedNodes.pop();
        node.getComponent(AnimalCube_1.default).setChoose(false);
        if (this.animChoose.has(node.uuid)) {
          this.animChoose.get(node.uuid).getComponent(AnimalChoose_1.default).setTarget(null);
          PoolManager_1.default.instance.putNode(this.animChoose.get(node.uuid), Enum_1.GAME_POOL.ANIMAL_CHOOSE);
          this.animChoose.delete(node.uuid);
        }
        this.clearTipsAnimCube();
        this.selectedNodes.length > 0 && this.addTipsAnimCube(this.selectedNodes[this.selectedNodes.length - 1]);
        this.drawLine();
      };
      Game.prototype.findCanClear = function() {
        var _a;
        if (this.selectedNodes.length > 0 || this.tipNodes.length > 0) return;
        var allAvatars = this.anims;
        var maxGroup = this.findConnectedSameType(allAvatars, 3);
        if (maxGroup.length < 2) return;
        (_a = this.tipNodes).push.apply(_a, maxGroup);
        for (var index = 0; index < maxGroup.length; index++) {
          var element = maxGroup[index];
          element.getComponent(AnimalCube_1.default).showTip();
        }
      };
      Game.prototype.findConnectedSameType = function(allAvatars, clearCount) {
        var groups = {};
        for (var _i = 0, allAvatars_1 = allAvatars; _i < allAvatars_1.length; _i++) {
          var node = allAvatars_1[_i];
          var type = node.getComponent(AnimalCube_1.default).animType;
          groups[type] || (groups[type] = []);
          groups[type].push(node);
        }
        var maxGroup = [];
        for (var type in groups) {
          var nodes = groups[type];
          var graph = {};
          for (var i = 0; i < nodes.length; i++) {
            graph[nodes[i].uuid] = [];
            for (var j = 0; j < nodes.length; j++) i !== j && this.checkLineClear(nodes[i], nodes[j]) && !nodes[j].getComponent(AnimalCube_1.default).getChooseType() && graph[nodes[i].uuid].push(nodes[j]);
          }
          var visited = new Set();
          for (var _a = 0, nodes_1 = nodes; _a < nodes_1.length; _a++) {
            var node = nodes_1[_a];
            if (!visited.has(node.uuid)) {
              var connected = [];
              this.dfs(node, graph, visited, connected);
              if (connected.length > clearCount) {
                maxGroup = connected;
                return maxGroup;
              }
            }
          }
        }
        return maxGroup;
      };
      Game.prototype.getGraphGroup = function(searchNode, allAvatars) {
        var groups = {};
        for (var _i = 0, allAvatars_2 = allAvatars; _i < allAvatars_2.length; _i++) {
          var node = allAvatars_2[_i];
          var type_1 = node.getComponent(AnimalCube_1.default).animType;
          groups[type_1] || (groups[type_1] = []);
          groups[type_1].push(node);
        }
        var graphGroup = [];
        var type = searchNode.getComponent(AnimalCube_1.default).animType;
        var nodes = groups[type];
        var graph = {};
        for (var i = 0; i < nodes.length; i++) {
          graph[nodes[i].uuid] = [];
          for (var j = 0; j < nodes.length; j++) i !== j && this.checkLineClear(nodes[i], nodes[j]) && !nodes[j].getComponent(AnimalCube_1.default).getChooseType() && graph[nodes[i].uuid].push(nodes[j]);
        }
        var visited = new Set();
        var connected = [];
        this.dfs(searchNode, graph, visited, connected);
        graphGroup = connected;
        return graphGroup;
      };
      Game.prototype.dfs = function(node, graph, visited, connected) {
        visited.add(node.uuid);
        connected.push(node);
        for (var _i = 0, _a = graph[node.uuid]; _i < _a.length; _i++) {
          var neighbor = _a[_i];
          visited.has(neighbor.uuid) || this.dfs(neighbor, graph, visited, connected);
        }
      };
      Game.prototype.checkLineClear = function(nodeA, nodeB) {
        var physicsManager = cc.director.getPhysicsManager();
        var start = nodeA.convertToWorldSpaceAR(cc.v2(0, 0));
        var end = nodeB.convertToWorldSpaceAR(cc.v2(0, 0));
        var results = physicsManager.rayCast(start, end, cc.RayCastType.All);
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
          var r = results_1[_i];
          var hitNode = r.collider.node;
          if (hitNode !== nodeA && hitNode !== nodeB) return false;
        }
        return true;
      };
      Game.prototype.drawLine = function(color) {
        var _this = this;
        void 0 === color && (color = cc.Color.WHITE);
        if (this.selectedNodes.length < 2) {
          this.clearLine();
          return;
        }
        this.clearLine();
        var _loop_2 = function(i) {
          var startNode = this_2.selectedNodes[i];
          var endNode = this_2.selectedNodes[i + 1];
          var startPos = cc.v2(startNode.position);
          var endPos = cc.v2(endNode.position);
          var dir = startPos.sub(endPos);
          var angleRad = Math.atan2(dir.y, dir.x);
          var angle = cc.misc.radiansToDegrees(angleRad);
          var distance = dir.mag();
          if (this_2.animLine.has(endNode.uuid)) {
            var line = this_2.animLine.get(endNode.uuid);
            var pos = startNode.parent.convertToWorldSpaceAR(startNode.position);
            pos = this_2.animLineParent.convertToNodeSpaceAR(pos);
            line.setPosition(pos);
            line.angle = 0;
            line.angle = angle;
            line.width = distance;
            line.color = color;
            line.active = true;
            this_2.animLine.set(endNode.uuid, line);
          } else cc.resources.load(Enum_1.GAME_Prefab.animLine, cc.Prefab, function(err, prefab) {
            if (!err) {
              var line = PoolManager_1.default.instance.getNode(prefab, _this.animLineParent, Enum_1.GAME_POOL.ANIMAL_LINE);
              line.angle = 0;
              var pos = startNode.parent.convertToWorldSpaceAR(startNode.position);
              pos = _this.animLineParent.convertToNodeSpaceAR(pos);
              line.setPosition(pos);
              line.angle = angle;
              line.width = distance;
              line.color = color;
              line.active = true;
              _this.animLine.set(endNode.uuid, line);
            }
          });
        };
        var this_2 = this;
        for (var i = 0; i < this.selectedNodes.length - 1; i++) _loop_2(i);
      };
      Game.prototype.clearLine = function() {
        var _a;
        if ((null === (_a = this.animLine) || void 0 === _a ? void 0 : _a.size) > 0) {
          this.animLine.forEach(function(value, key) {
            PoolManager_1.default.instance.putNode(value, Enum_1.GAME_POOL.ANIMAL_LINE);
          });
          this.animLine.clear();
        }
      };
      Game.prototype.flyDiamond = function(index, diamonNode, endCB) {
        var endPos = diamonNode.parent.convertToNodeSpaceAR(this.diamonLabel.node.parent.convertToWorldSpaceAR(this.diamonLabel.node.position));
        cc.tween(diamonNode).delay(.1 * index).call(function() {
          diamonNode.setScale(1.5);
        }).to(.4, {
          position: endPos
        }).call(function() {
          diamonNode.setPosition(cc.Vec3.ZERO);
          diamonNode.setScale(1);
          endCB && endCB();
        }).start();
      };
      Game.prototype.flyScore = function(score, startPos, endCB) {
        var scoreNode = PoolManager_1.default.instance.getNode(this.flyScoreLabel, this.flyScoreRoot, Enum_1.GAME_POOL.UI_SCORE_FLY);
        scoreNode.setPosition(this.flyScoreRoot.convertToNodeSpaceAR(startPos));
        scoreNode.scale = 1;
        scoreNode.opacity = 0;
        scoreNode.getComponent(cc.Label).string = "" + score;
        var endPos = this.flyScoreRoot.convertToNodeSpaceAR(this.scoreLabel.node.parent.convertToWorldSpaceAR(this.scoreLabel.node.position));
        cc.tween(scoreNode).to(.2, {
          opacity: 255
        }).delay(.5).to(.18, {
          position: endPos,
          scale: .2
        }).call(function() {
          PoolManager_1.default.instance.putNode(scoreNode, Enum_1.GAME_POOL.UI_SCORE_FLY);
          endCB && endCB();
        }).start();
      };
      Game.prototype.getScore = function(deleteCount, deleteAnimalType) {
        if (DataManager_1.default.instance.getAnimalDataById(deleteAnimalType)) {
          var animalLevel = DataManager_1.default.instance.getAnimalDataById(deleteAnimalType).level;
          return deleteCount * Enum_1.BaseScore * GameData_1.ScoreCoefficientByLevel[animalLevel - 1];
        }
        return 0;
      };
      Game.prototype.playStartAnimation = function(animType) {
        var _this = this;
        this.readyNode.stopAllActions();
        this.go.stopAllActions();
        if (1 == animType) {
          var targetY = 0;
          var bounceHeight = 40;
          this.readyNode.active = true;
          this.readyNode.y = .5 * cc.winSize.height;
          AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.READY);
          cc.tween(this.readyNode).to(.3, {
            y: targetY
          }, {
            easing: "quadIn"
          }).to(.2, {
            y: targetY + bounceHeight
          }, {
            easing: "quadOut"
          }).to(.15, {
            y: targetY
          }, {
            easing: "quadIn"
          }).to(.1, {
            y: targetY + bounceHeight / 3
          }, {
            easing: "quadOut"
          }).to(.08, {
            y: targetY
          }, {
            easing: "quadIn"
          }).start();
        } else if (2 == animType) {
          this.go.active = true;
          this.go.opacity = 0;
          cc.tween(this.readyNode).to(.08, {
            opacity: 0,
            scale: 0
          }).call(function() {
            _this.readyNode.active = false;
          }).start();
          cc.tween(this.go).delay(.08).call(function() {
            AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GO);
          }).to(.2, {
            opacity: 255,
            scale: 1.2
          }).to(.2, {
            scale: 1
          }).delay(.5).to(.3, {
            opacity: 0
          }).call(function() {
            _this.go.active = false;
          }).start();
        }
      };
      Game.prototype.onDestroy = function() {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_PLAYSTART, this.onGameStart, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.UPDATE_DIAMOND_COUNT, this.initDiamond, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.QUIT_GAME, this.onEventQuitGame, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.QUIT_SETTING, this.continueGame, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_START, this.onEventQuitGame, this);
        if (this.tipDeleteTimeOut) {
          clearTimeout(this.tipDeleteTimeOut);
          this.tipDeleteTimeOut = null;
        }
      };
      Game.prototype.onEventQuitGame = function() {
        this.node.destroy();
      };
      Game.prototype.onShowAnimLevel = function() {
        var _this = this;
        ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.levelshowUI.url).then(function(prefab) {
          if (cc.isValid(prefab)) {
            var node = cc.instantiate(prefab);
            node.parent = _this.node;
            node.zIndex = Enum_1.GAME_Prefab.levelshowUI.zIndex;
            node.getComponent(LevelShowUI_1.default).initUI(_this.animalDeleteCount);
          }
        });
      };
      __decorate([ property(cc.Node) ], Game.prototype, "bornAnimContainer", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "animChooseParent", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "animLineParent", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "animCube", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "touchNode", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "diamonLabel", void 0);
      __decorate([ property(cc.Label) ], Game.prototype, "scoreLabel", void 0);
      __decorate([ property(cc.Sprite) ], Game.prototype, "useAnimalIcon", void 0);
      __decorate([ property(cc.Sprite) ], Game.prototype, "timeProgress", void 0);
      __decorate([ property(cc.Sprite) ], Game.prototype, "energyProgress", void 0);
      __decorate([ property(cc.Sprite) ], Game.prototype, "energyProgressInBtn", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "readyNode", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "go", void 0);
      __decorate([ property(cc.Prefab) ], Game.prototype, "flyScoreLabel", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "flyScoreRoot", void 0);
      __decorate([ property(cc.Node) ], Game.prototype, "canUseTip", void 0);
      Game = __decorate([ ccclass ], Game);
      return Game;
    }(cc.Component);
    exports.default = Game;
    cc._RF.pop();
  }, {
    "../Data/Enum": "Enum",
    "../Data/GameData": "GameData",
    "../Manager/AudioManager": "AudioManager",
    "../Manager/EventManager": "EventManager",
    "../Manager/PoolManager": "PoolManager",
    "../Manager/ResManager": "ResManager",
    "./AnimalCube/AnimalChoose": "AnimalChoose",
    "./AnimalCube/AnimalCube": "AnimalCube",
    "./DataManager": "DataManager",
    "./GameUtils": "GameUtils",
    "./UI/LevelShowUI": "LevelShowUI"
  } ],
  LevelShowUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "4e3fbpCmu5GLZexg/tyMJgu", "LevelShowUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../../Data/Enum");
    var AudioManager_1 = require("../../Manager/AudioManager");
    var EventManager_1 = require("../../Manager/EventManager");
    var GameUtils_1 = require("../GameUtils");
    var AnimalLevelItem_1 = require("./Item/AnimalLevelItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LevelShowUI = function(_super) {
      __extends(LevelShowUI, _super);
      function LevelShowUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.showRoot = null;
        _this.showLevelItem = null;
        return _this;
      }
      LevelShowUI.prototype.initUI = function(data) {
        var _this = this;
        this.showRoot.removeAllChildren();
        data.forEach(function(value, key) {
          var node = cc.instantiate(_this.showLevelItem);
          node.parent = _this.showRoot;
          node.getComponent(AnimalLevelItem_1.default).initUI(key, value);
          _this.showRoot.childrenCount % 2 == 1 ? node.x = -500 : node.x = 500;
          cc.tween(node).to(.15, {
            x: 0
          }).start();
        });
      };
      LevelShowUI.prototype.onBtnClose = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        AudioManager_1.default.instance.playBtn();
        this.quitAni();
      };
      LevelShowUI.prototype.quitAni = function() {
        var _this = this;
        for (var i = 0; i < this.showRoot.childrenCount; i++) {
          var element = this.showRoot.children[i];
          element.stopAllActions();
          var endX = 0;
          endX = i % 2 == 0 ? -500 : 500;
          cc.tween(element).to(.15, {
            x: endX
          }).start();
        }
        this.scheduleOnce(function() {
          _this.node.destroy();
          EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.SHOW_GAMESCORE);
        }, .15);
      };
      __decorate([ property(cc.Node) ], LevelShowUI.prototype, "showRoot", void 0);
      __decorate([ property(cc.Prefab) ], LevelShowUI.prototype, "showLevelItem", void 0);
      LevelShowUI = __decorate([ ccclass ], LevelShowUI);
      return LevelShowUI;
    }(cc.Component);
    exports.default = LevelShowUI;
    cc._RF.pop();
  }, {
    "../../Data/Enum": "Enum",
    "../../Manager/AudioManager": "AudioManager",
    "../../Manager/EventManager": "EventManager",
    "../GameUtils": "GameUtils",
    "./Item/AnimalLevelItem": "AnimalLevelItem"
  } ],
  LoadSceneUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "8de70Kr0zRIqIQNzKg0X8eI", "LoadSceneUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoadSceneUI = function(_super) {
      __extends(LoadSceneUI, _super);
      function LoadSceneUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.logo = null;
        _this.catchNode = null;
        _this.endCB = null;
        return _this;
      }
      LoadSceneUI.prototype.onLoad = function() {
        this.loadAni();
        cc.game.addPersistRootNode(this.node);
      };
      LoadSceneUI.prototype.loadAni = function() {
        var _this = this;
        this.logo.stopAllActions();
        this.catchNode.stopAllActions();
        var startY = .5 * cc.winSize.height + 300;
        this.logo.setPosition(cc.v3(0, startY));
        this.catchNode.setPosition(cc.v3(0, startY + 370));
        var logoTargetY = 200;
        cc.tween(this.logo).to(.5, {
          y: logoTargetY
        }, {
          easing: "quadIn"
        }).delay(1.2).to(.5, {
          y: startY
        }).start();
        cc.tween(this.catchNode).delay(.7).to(.5, {
          y: logoTargetY + 370
        }, {
          easing: "quadIn"
        }).call(function() {
          cc.isValid(_this.catchNode) && cc.isValid(_this.catchNode.getComponent(cc.Animation)) && _this.catchNode.getComponent(cc.Animation).play("catch");
        }).delay(.5).to(.5, {
          y: startY + 370
        }).call(function() {
          _this.endCB && _this.endCB();
          _this.node.destroy();
        }).start();
      };
      __decorate([ property(cc.Node) ], LoadSceneUI.prototype, "logo", void 0);
      __decorate([ property(cc.Node) ], LoadSceneUI.prototype, "catchNode", void 0);
      LoadSceneUI = __decorate([ ccclass ], LoadSceneUI);
      return LoadSceneUI;
    }(cc.Component);
    exports.default = LoadSceneUI;
    cc._RF.pop();
  }, {} ],
  LoadUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "078c5LhouxOgbbVIoGZmvAh", "LoadUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var LoadUI = function(_super) {
      __extends(LoadUI, _super);
      function LoadUI() {
        return null !== _super && _super.apply(this, arguments) || this;
      }
      LoadUI.prototype.onLoad = function() {
        this.loadingAni();
      };
      LoadUI.prototype.loadingAni = function() {
        var circul1 = this.node.getChildByName("1");
        var circul2 = this.node.getChildByName("2");
        circul1.stopAllActions;
        circul2.stopAllActions;
        cc.tween(circul1).repeatForever(cc.tween().to(2, {
          angle: 180
        }).to(2, {
          angle: 360
        }).to(0, {
          angle: 0
        })).start();
        cc.tween(circul2).repeatForever(cc.tween().to(2, {
          angle: -180
        }).to(2, {
          angle: -360
        }).to(0, {
          angle: 0
        })).start();
      };
      LoadUI = __decorate([ ccclass ], LoadUI);
      return LoadUI;
    }(cc.Component);
    exports.default = LoadUI;
    cc._RF.pop();
  }, {} ],
  MainBgUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "2f1bc0V1QNLLaL8heMVfmeY", "MainBgUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var MainBgUI = function(_super) {
      __extends(MainBgUI, _super);
      function MainBgUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.yunLeft = null;
        _this.yunRight = null;
        return _this;
      }
      MainBgUI.prototype.onLoad = function() {
        this.yunAni();
      };
      MainBgUI.prototype.yunAni = function() {
        this.yunLeft.stopAllActions();
        this.yunRight.stopAllActions();
        var startY = .5 * cc.winSize.height - 100;
        var targetY = .5 * cc.winSize.height - 200;
        this.yunLeft.y = startY;
        this.yunRight.y = startY;
        cc.tween(this.yunLeft).repeatForever(cc.tween().to(10, {
          y: targetY
        }).to(10, {
          y: startY
        })).start();
        cc.tween(this.yunRight).repeatForever(cc.tween().to(10, {
          y: targetY
        }).to(10, {
          y: startY
        })).start();
      };
      __decorate([ property(cc.Node) ], MainBgUI.prototype, "yunLeft", void 0);
      __decorate([ property(cc.Node) ], MainBgUI.prototype, "yunRight", void 0);
      MainBgUI = __decorate([ ccclass ], MainBgUI);
      return MainBgUI;
    }(cc.Component);
    exports.default = MainBgUI;
    cc._RF.pop();
  }, {} ],
  Main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "66a689LYaRFJKskQx/Xo19r", "Main");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../Data/Enum");
    var AudioManager_1 = require("../Manager/AudioManager");
    var EventManager_1 = require("../Manager/EventManager");
    var ResManager_1 = require("../Manager/ResManager");
    var DataManager_1 = require("./DataManager");
    var LoadSceneUI_1 = require("./UI/LoadSceneUI");
    var ReadyUI_1 = require("./UI/ReadyUI");
    var ScoreUI_1 = require("./UI/ScoreUI");
    var StartUI_1 = require("./UI/StartUI");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var Main = function(_super) {
      __extends(Main, _super);
      function Main() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.loadUI = null;
        _this.mainBgUI = null;
        return _this;
      }
      Main.prototype.onLoad = function() {
        this.reloadRes();
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.GAME_START, this.toGame, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.QUIT_GAME, this.gameToMain, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.SHOW_GAMESCORE, this.showScoreUI, this);
      };
      Main.prototype.reloadRes = function() {
        var _this = this;
        this.loadingAni();
        var loadPrefabCompete = false;
        var loadResCompete = false;
        var loadDataCompete = false;
        cc.loader.loadResDir("pic", function(err) {
          if (err) {
            cc.error("\u52a0\u8f7d\u5931\u8d25:", err);
            return;
          }
          loadResCompete = true;
          _this.checkLogin(loadPrefabCompete, loadResCompete, loadDataCompete);
        });
        cc.loader.loadResDir("prefab/ui", function(err) {
          if (err) {
            cc.error("\u52a0\u8f7d\u5931\u8d25:", err);
            return;
          }
          loadPrefabCompete = true;
          _this.checkLogin(loadPrefabCompete, loadResCompete, loadDataCompete);
        });
        DataManager_1.default.instance.init(function() {
          loadDataCompete = true;
          _this.checkLogin(loadPrefabCompete, loadResCompete, loadDataCompete);
        });
        DataManager_1.default.instance.gameState = 0;
      };
      Main.prototype.checkLogin = function(loadPrefabCompete, loadResCompete, loadDataCompete) {
        if (loadPrefabCompete && loadResCompete && loadDataCompete) {
          this.stopLoading();
          this.startMain();
        }
      };
      Main.prototype.startMain = function() {
        var _this = this;
        ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.mainBg.url).then(function(prefab) {
          if (2 != DataManager_1.default.instance.gameState && cc.isValid(prefab)) {
            var node = cc.instantiate(prefab);
            node.parent = _this.node;
            node.zIndex = Enum_1.GAME_Prefab.mainBg.zIndex;
            _this.mainBgUI = node;
          }
        });
        ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.startUI.url).then(function(prefab) {
          if (cc.isValid(prefab)) {
            var node = cc.instantiate(prefab);
            node.parent = _this.node;
            node.zIndex = Enum_1.GAME_Prefab.startUI.zIndex;
            node.getComponent(StartUI_1.default).onAwake();
            node.getComponent(StartUI_1.default).quitCB = _this.toReadyUI.bind(_this);
          }
        });
        DataManager_1.default.instance.gameState = 1;
        AudioManager_1.default.instance.playMusic();
      };
      Main.prototype.toReadyUI = function() {
        var _this = this;
        ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.readyUI.url).then(function(prefab) {
          if (cc.isValid(prefab)) {
            var node = cc.instantiate(prefab);
            node.parent = _this.node;
            node.zIndex = Enum_1.GAME_Prefab.readyUI.zIndex;
            node.getComponent(ReadyUI_1.default).onAwake();
          }
        });
      };
      Main.prototype.toGame = function() {
        var _this = this;
        DataManager_1.default.instance.gameState = 0;
        AudioManager_1.default.instance.playMusic();
        cc.resources.preload([ Enum_1.GAME_Prefab.gameUI.url ]);
        ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.loadSceneUI.url).then(function(prefab) {
          if (cc.isValid(prefab)) {
            var node = cc.instantiate(prefab);
            node.parent = _this.node;
            node.zIndex = Enum_1.GAME_Prefab.loadSceneUI.zIndex;
            _this.releaseMainRes();
            ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.gameUI.url).then(function(gameprefab) {
              if (cc.isValid(gameprefab)) {
                var gameui = cc.instantiate(gameprefab);
                gameui.parent = _this.node;
                gameui.zIndex = Enum_1.GAME_Prefab.gameUI.zIndex;
              }
            });
            node.getComponent(LoadSceneUI_1.default).endCB = function() {
              EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_PLAYSTART);
              DataManager_1.default.instance.gameState = 2;
              AudioManager_1.default.instance.playMusic();
            };
          }
        });
      };
      Main.prototype.gameToMain = function() {
        var _this = this;
        DataManager_1.default.instance.gameState = 0;
        AudioManager_1.default.instance.playMusic();
        cc.resources.preload([ Enum_1.GAME_Prefab.mainBg.url, Enum_1.GAME_Prefab.readyUI.url ]);
        ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.loadSceneUI.url).then(function(prefab) {
          if (cc.isValid(prefab)) {
            var node = cc.instantiate(prefab);
            node.parent = _this.node;
            node.zIndex = Enum_1.GAME_Prefab.loadSceneUI.zIndex;
            node.getComponent(LoadSceneUI_1.default).endCB = function() {
              _this.toReadyUI();
              DataManager_1.default.instance.gameState = 1;
              AudioManager_1.default.instance.playMusic();
              ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.mainBg.url).then(function(prefab) {
                if (2 != DataManager_1.default.instance.gameState && cc.isValid(prefab)) {
                  var node_1 = cc.instantiate(prefab);
                  node_1.parent = _this.node;
                  node_1.zIndex = Enum_1.GAME_Prefab.mainBg.zIndex;
                  _this.mainBgUI = node_1;
                }
              });
            };
          }
        });
      };
      Main.prototype.showScoreUI = function() {
        var _this = this;
        ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.scoreUI.url).then(function(prefab) {
          if (cc.isValid(prefab)) {
            var node = cc.instantiate(prefab);
            node.parent = _this.node;
            node.zIndex = Enum_1.GAME_Prefab.scoreUI.zIndex;
            node.getComponent(ScoreUI_1.default).initUI();
          }
        });
      };
      Main.prototype.releaseMainRes = function() {
        cc.isValid(this.mainBgUI) && this.mainBgUI.destroy();
        cc.resources.release(Enum_1.GAME_Prefab.mainBg.url);
      };
      Main.prototype.loadingAni = function() {
        this.loadUI.active = true;
        var circul1 = this.loadUI.getChildByName("1");
        var circul2 = this.loadUI.getChildByName("2");
        circul1.stopAllActions;
        circul2.stopAllActions;
        cc.tween(circul1).repeatForever(cc.tween().to(2, {
          angle: 180
        }).to(2, {
          angle: 360
        }).to(0, {
          angle: 0
        })).start();
        cc.tween(circul2).repeatForever(cc.tween().to(2, {
          angle: -180
        }).to(2, {
          angle: -360
        }).to(0, {
          angle: 0
        })).start();
      };
      Main.prototype.stopLoading = function() {
        this.loadUI.active = false;
        var circul1 = this.loadUI.getChildByName("1");
        var circul2 = this.loadUI.getChildByName("2");
        circul1.stopAllActions;
        circul2.stopAllActions;
      };
      Main.prototype.onDestroy = function() {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.QUIT_GAME, this.gameToMain, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.GAME_START, this.toGame, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.SHOW_GAMESCORE, this.showScoreUI, this);
      };
      __decorate([ property(cc.Node) ], Main.prototype, "loadUI", void 0);
      Main = __decorate([ ccclass ], Main);
      return Main;
    }(cc.Component);
    exports.default = Main;
    cc._RF.pop();
  }, {
    "../Data/Enum": "Enum",
    "../Manager/AudioManager": "AudioManager",
    "../Manager/EventManager": "EventManager",
    "../Manager/ResManager": "ResManager",
    "./DataManager": "DataManager",
    "./UI/LoadSceneUI": "LoadSceneUI",
    "./UI/ReadyUI": "ReadyUI",
    "./UI/ScoreUI": "ScoreUI",
    "./UI/StartUI": "StartUI"
  } ],
  PoolManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "63c79rdzlpPLK5nZD81cOq2", "PoolManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var PoolManager = function() {
      function PoolManager() {
        this.dictPool = new Map();
      }
      PoolManager.getInstance = function() {
        null === this._instance && (this._instance = new this());
        return this._instance;
      };
      Object.defineProperty(PoolManager, "instance", {
        get: function() {
          return this.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      PoolManager.prototype.getNode = function(prefab, parent, name) {
        void 0 === name && (name = "default");
        var node = null;
        if (this.dictPool.has(name)) {
          var pool = this.dictPool.get(name);
          node = pool.size() > 0 ? pool.get() : cc.instantiate(prefab);
        } else {
          var pool = new cc.NodePool();
          this.dictPool.set(name, pool);
          node = cc.instantiate(prefab);
        }
        null == node;
        node.parent = parent;
        return node;
      };
      PoolManager.prototype.putNode = function(node, name) {
        void 0 === name && (name = "default");
        var pool = null;
        if (this.dictPool.has(name)) pool = this.dictPool.get(name); else {
          pool = new cc.NodePool();
          this.dictPool.set(name, pool);
        }
        pool.put(node);
      };
      PoolManager.prototype.clearPool = function(name) {
        if (!name) {
          cc.warn("PoolManager.clearPool: name is null");
          return;
        }
        var pool = this.dictPool.get(name);
        pool && pool.clear();
        this.dictPool.delete(name);
      };
      PoolManager.prototype.clearAll = function() {
        this.dictPool.forEach(function(pool, key) {
          pool.clear();
        });
        this.dictPool.clear();
      };
      PoolManager._instance = null;
      return PoolManager;
    }();
    exports.default = PoolManager;
    cc._RF.pop();
  }, {} ],
  ReadyAnimalItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "26f66lc8cVIto3S93XIK1Wx", "ReadyAnimalItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../../../Data/Enum");
    var EventManager_1 = require("../../../Manager/EventManager");
    var DataManager_1 = require("../../DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReadyAnimalItem = function(_super) {
      __extends(ReadyAnimalItem, _super);
      function ReadyAnimalItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.progressSpr = null;
        _this.chooseNode = null;
        _this.lock = null;
        _this.cost = null;
        _this.lvLabel = null;
        _this.id = 0;
        return _this;
      }
      ReadyAnimalItem.prototype.onLoad = function() {
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_ITEM, this.chooseItem, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.READYUI_REFRESH_ITEM, this.refeshItem, this);
      };
      ReadyAnimalItem.prototype.refeshItem = function(id) {
        this.id == id && this.init(DataManager_1.default.instance.getAnimalDataById(id));
      };
      ReadyAnimalItem.prototype.init = function(data) {
        var isLock = data.lockMoney > 0 && data.isLock;
        var icon = Enum_1.ANIMAL_TYPE_TEXTUREURL[data.id] + (isLock ? "_lock" : "");
        this.lock.active = isLock;
        this.icon.setSprite(icon);
        this.progressSpr.fillRange = data.expValue;
        this.id = data.id;
        this.cost.node.active = isLock;
        this.lvLabel.node.active = !isLock;
        this.cost.string = "" + data.lockMoney;
        this.lvLabel.string = "\u7b49\u7ea7 " + data.level;
      };
      ReadyAnimalItem.prototype.chooseItem = function(id) {
        this.chooseNode.active = id == this.id;
      };
      ReadyAnimalItem.prototype.onBtnChoose = function() {
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_ITEM, this.id);
      };
      ReadyAnimalItem.prototype.onDestroy = function() {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_ITEM, this.chooseItem, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.READYUI_REFRESH_ITEM, this.refeshItem, this);
      };
      __decorate([ property(cc.Sprite) ], ReadyAnimalItem.prototype, "icon", void 0);
      __decorate([ property(cc.Sprite) ], ReadyAnimalItem.prototype, "progressSpr", void 0);
      __decorate([ property(cc.Node) ], ReadyAnimalItem.prototype, "chooseNode", void 0);
      __decorate([ property(cc.Node) ], ReadyAnimalItem.prototype, "lock", void 0);
      __decorate([ property(cc.Label) ], ReadyAnimalItem.prototype, "cost", void 0);
      __decorate([ property(cc.Label) ], ReadyAnimalItem.prototype, "lvLabel", void 0);
      ReadyAnimalItem = __decorate([ ccclass ], ReadyAnimalItem);
      return ReadyAnimalItem;
    }(cc.Component);
    exports.default = ReadyAnimalItem;
    cc._RF.pop();
  }, {
    "../../../Data/Enum": "Enum",
    "../../../Manager/EventManager": "EventManager",
    "../../DataManager": "DataManager"
  } ],
  ReadyToolItem: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c5c93fVYz9MDLt1Eiyp4unw", "ReadyToolItem");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../../../Data/Enum");
    var EventManager_1 = require("../../../Manager/EventManager");
    var DataManager_1 = require("../../DataManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReadyToolItem = function(_super) {
      __extends(ReadyToolItem, _super);
      function ReadyToolItem() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.chooseNode = null;
        _this.haveToolBg1 = null;
        _this.haveToolBg2 = null;
        _this.noToolBg1 = null;
        _this.noToolBg2 = null;
        _this.nameLabel = null;
        _this.diamondCost = null;
        _this.id = 0;
        return _this;
      }
      ReadyToolItem.prototype.onLoad = function() {
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_TOOLITEM, this.chooseItem, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.READYUI_REFRESH_TOOLITEM, this.refeshItem, this);
      };
      ReadyToolItem.prototype.refeshItem = function(id) {
        this.id == id && this.init(DataManager_1.default.instance.getToolDataById(id));
      };
      ReadyToolItem.prototype.init = function(data) {
        this.id = data.id;
        this.nameLabel.string = data.name;
        this.diamondCost.string = data.diamondCost + "";
        var url = Enum_1.TOOL_TYPE_TEXTUREURL[data.id];
        this.noToolBg1.active = data.countNumber <= 0;
        this.noToolBg2.active = data.countNumber <= 0;
        this.haveToolBg1.active = data.countNumber > 0;
        this.haveToolBg2.active = data.countNumber > 0;
        this.icon.setSprite(url);
      };
      ReadyToolItem.prototype.chooseItem = function(id) {
        this.chooseNode.active = id == this.id;
      };
      ReadyToolItem.prototype.onBtnChoose = function() {
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_TOOLITEM, this.id);
      };
      ReadyToolItem.prototype.onDestroy = function() {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_TOOLITEM, this.chooseItem, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.READYUI_REFRESH_TOOLITEM, this.refeshItem, this);
      };
      __decorate([ property(cc.Sprite) ], ReadyToolItem.prototype, "icon", void 0);
      __decorate([ property(cc.Node) ], ReadyToolItem.prototype, "chooseNode", void 0);
      __decorate([ property(cc.Node) ], ReadyToolItem.prototype, "haveToolBg1", void 0);
      __decorate([ property(cc.Node) ], ReadyToolItem.prototype, "haveToolBg2", void 0);
      __decorate([ property(cc.Node) ], ReadyToolItem.prototype, "noToolBg1", void 0);
      __decorate([ property(cc.Node) ], ReadyToolItem.prototype, "noToolBg2", void 0);
      __decorate([ property(cc.Label) ], ReadyToolItem.prototype, "nameLabel", void 0);
      __decorate([ property(cc.Label) ], ReadyToolItem.prototype, "diamondCost", void 0);
      ReadyToolItem = __decorate([ ccclass ], ReadyToolItem);
      return ReadyToolItem;
    }(cc.Component);
    exports.default = ReadyToolItem;
    cc._RF.pop();
  }, {
    "../../../Data/Enum": "Enum",
    "../../../Manager/EventManager": "EventManager",
    "../../DataManager": "DataManager"
  } ],
  ReadyUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "28d476iNIRGR6CDkbq17X0A", "ReadyUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../../Data/Enum");
    var GameData_1 = require("../../Data/GameData");
    var AudioManager_1 = require("../../Manager/AudioManager");
    var EventManager_1 = require("../../Manager/EventManager");
    var ResManager_1 = require("../../Manager/ResManager");
    var DataManager_1 = require("../DataManager");
    var GameUtils_1 = require("../GameUtils");
    var ToastManager_1 = require("../ToastManager");
    var ReadyAnimalItem_1 = require("./Item/ReadyAnimalItem");
    var ReadyToolItem_1 = require("./Item/ReadyToolItem");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ReadyUI = function(_super) {
      __extends(ReadyUI, _super);
      function ReadyUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.isPlayAni = false;
        _this.centerUI = null;
        _this.uiRoot = null;
        _this.diamond = null;
        _this.animalPosRoot = null;
        _this.animalRoot = null;
        _this.animalPrefab = null;
        _this.lastPageBtn = null;
        _this.nextPageBtn = null;
        _this.useAniIcon = null;
        _this.chooseAniIcon = null;
        _this.animName = null;
        _this.animDesc = null;
        _this.animScore = null;
        _this.animLevel = null;
        _this.animExpProgress = null;
        _this.buyAnimRoot = null;
        _this.animBuyCost = null;
        _this.unLockInfoRoot = null;
        _this.pagePointArr = [];
        _this.toolsPosRoot = null;
        _this.toolsRoot = null;
        _this.toolPrefab = null;
        _this.buyToolBtn = null;
        _this.chooseToolIcon = null;
        _this.toolDesc = null;
        _this.animUIRoot = null;
        _this.toolsUIRoot = null;
        _this.btnStart = null;
        _this.btnReady = null;
        _this.showType = 1;
        _this.animalData = [];
        _this.currentAnimalPage = 0;
        _this.chooseAnimID = -1;
        return _this;
      }
      ReadyUI.prototype.onAwake = function() {
        this.isPlayAni = false;
        this.chooseAnimID = DataManager_1.default.instance.useAnimId;
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.UPDATE_DIAMOND_COUNT, this.initDiamond, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_ITEM, this.initUseAnim, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.READYUI_REFRESH_ITEM, this.initUseAnim, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_TOOLITEM, this.initUseTool, this);
        EventManager_1.default.instance.on(Enum_1.ENUM_GAME_EVENT.READYUI_REFRESH_TOOLITEM, this.initUseTool, this);
        this.startAnim();
        this.initAnimalUI();
        this.initDiamond();
      };
      ReadyUI.prototype.initDiamond = function() {
        this.diamond.string = GameUtils_1.default.formatNumber(DataManager_1.default.instance.diamond);
      };
      ReadyUI.prototype.initAnimalUI = function() {
        var _this = this;
        this.showType = 1;
        this.animUIRoot.active = true;
        this.toolsUIRoot.active = false;
        this.btnReady.active = true;
        this.btnStart.active = false;
        this.animalData = [];
        this.currentAnimalPage = 0;
        DataManager_1.default.instance.animalData.forEach(function(value, index) {
          var page = Math.floor(index / _this.animalPosRoot.childrenCount);
          if (_this.animalData[page]) _this.animalData[page].push(value); else {
            _this.animalData[page] = [];
            _this.animalData[page].push(value);
          }
          page = null;
        });
        this.showPage(this.currentAnimalPage);
      };
      ReadyUI.prototype.showPage = function(page) {
        this.animalRoot.removeAllChildren();
        this.pagePointArr.forEach(function(value, index) {
          value.active = index == page;
        });
        this.nextPageBtn.active = page < this.animalData.length - 1;
        this.lastPageBtn.active = page > 0;
        for (var i = 0; i < this.animalData[page].length; i++) if (cc.isValid(this.animalPosRoot.children[i])) {
          var element = this.animalData[page][i];
          var node = cc.instantiate(this.animalPrefab);
          node.parent = this.animalRoot;
          node.position = this.animalPosRoot.children[i].position;
          node.getComponent(ReadyAnimalItem_1.default).init(element);
        }
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_ITEM, this.chooseAnimID);
      };
      ReadyUI.prototype.initToolUI = function() {
        this.showType = 2;
        this.animUIRoot.active = false;
        this.toolsUIRoot.active = true;
        this.btnReady.active = false;
        this.btnStart.active = true;
        this.toolsRoot.removeAllChildren();
        for (var i = 0; i < DataManager_1.default.instance.toolData.length; i++) {
          var element = DataManager_1.default.instance.toolData[i];
          var node = cc.instantiate(this.toolPrefab);
          node.parent = this.toolsRoot;
          node.position = this.toolsPosRoot.children[i].position;
          node.getComponent(ReadyToolItem_1.default).init(element);
        }
        EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_TOOLITEM, -1);
      };
      ReadyUI.prototype.initUseAnim = function(id) {
        var useData = DataManager_1.default.instance.getAnimalDataById(id);
        if (!useData) return;
        this.chooseAnimID = id;
        var icon = Enum_1.ANIMAL_TYPE_TEXTUREURL[id];
        this.chooseAniIcon.setSprite(icon);
        this.animName.string = useData.name;
        this.animDesc.string = useData.desc;
        var canUse = !useData.isLock || 0 == useData.lockMoney;
        this.buyAnimRoot.active = !canUse;
        this.unLockInfoRoot.active = canUse;
        if (!canUse) {
          this.animBuyCost.string = "" + useData.lockMoney;
          return;
        }
        this.animExpProgress.fillRange = useData.expValue;
        this.animLevel.string = "\u7b49\u7ea7 " + useData.level + "/" + GameData_1.AnimalMaxLevel;
        this.animScore.string = useData.score + "";
        DataManager_1.default.instance.useAnimId = id;
        this.useAniIcon.setSprite(icon);
      };
      ReadyUI.prototype.initUseTool = function(id) {
        var useData = DataManager_1.default.instance.getToolDataById(id);
        if (!useData) {
          this.buyToolBtn.active = false;
          this.toolDesc.string = GameData_1.ToolTip;
          return;
        }
        this.buyToolBtn.active = useData.countNumber <= 0;
        var icon = Enum_1.TOOL_TYPE_TEXTUREURL[id];
        this.chooseToolIcon.setSprite(icon);
        this.toolDesc.string = useData.desc;
        DataManager_1.default.instance.currentUseToolID = id;
      };
      ReadyUI.prototype.onBtnBuyAnimals = function() {
        if (this.isPlayAni) return;
        var useData = DataManager_1.default.instance.getAnimalDataById(this.chooseAnimID);
        if (useData && useData.isLock) if (DataManager_1.default.instance.buyAnimal(this.chooseAnimID)) {
          AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GETNEW);
          EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.READYUI_REFRESH_ITEM, this.chooseAnimID);
          ToastManager_1.default.instance.show("\u8d2d\u4e70\u6210\u529f");
        } else {
          AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.NOMONEY);
          ToastManager_1.default.instance.show("\u5b9d\u77f3\u6570\u91cf\u4e0d\u8db3");
        }
      };
      ReadyUI.prototype.onBtnBuyTools = function() {
        if (this.isPlayAni) return;
        var useData = DataManager_1.default.instance.getToolDataById(DataManager_1.default.instance.currentUseToolID);
        if (useData && useData.countNumber <= 0) if (DataManager_1.default.instance.buyTool(DataManager_1.default.instance.currentUseToolID)) {
          AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.GETNEW);
          EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.READYUI_REFRESH_TOOLITEM, DataManager_1.default.instance.currentUseToolID);
          ToastManager_1.default.instance.show("\u8d2d\u4e70\u6210\u529f");
        } else {
          AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.NOMONEY);
          ToastManager_1.default.instance.show("\u5b9d\u77f3\u6570\u91cf\u4e0d\u8db3");
        }
      };
      ReadyUI.prototype.onBtnNextPage = function() {
        if (this.isPlayAni) return;
        if (this.currentAnimalPage >= this.animalData.length - 1) return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.PLAY);
        this.currentAnimalPage++;
        this.showPage(this.currentAnimalPage);
      };
      ReadyUI.prototype.onBtnLastNextPage = function() {
        if (this.isPlayAni) return;
        if (this.currentAnimalPage <= 0) return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.PLAY);
        this.currentAnimalPage--;
        this.showPage(this.currentAnimalPage);
      };
      ReadyUI.prototype.onBtnStartGame = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        if (this.isPlayAni) return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.PLAY);
        this.quitAnim();
      };
      ReadyUI.prototype.onBtnSwitchToAnimal = function(event) {
        var _this = this;
        GameUtils_1.default.blockBtnQC(event.target, 1);
        if (this.isPlayAni) return;
        if (1 == this.showType) return;
        AudioManager_1.default.instance.playBtn();
        this.btnReady.active = true;
        this.btnStart.active = false;
        this.switchAni(function() {
          _this.initAnimalUI();
        });
      };
      ReadyUI.prototype.onBtnSwitchToTools = function(event) {
        var _this = this;
        GameUtils_1.default.blockBtnQC(event.target, 1);
        if (this.isPlayAni) return;
        if (2 == this.showType) return;
        AudioManager_1.default.instance.playSound(Enum_1.ENUM_AUDIO_CLIP.PLAY);
        this.showType = 2;
        this.btnReady.active = false;
        this.btnStart.active = true;
        this.switchAni(function() {
          _this.initToolUI();
        });
      };
      ReadyUI.prototype.onBtnSetting = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        if (this.isPlayAni) return;
        AudioManager_1.default.instance.playBtn();
        ResManager_1.default.instance.loadRes(Enum_1.GAME_Prefab.settingUI.url).then(function(prefab) {
          if (cc.isValid(prefab)) {
            var node = cc.instantiate(prefab);
            node.parent = cc.find("Canvas");
            node.zIndex = Enum_1.GAME_Prefab.settingUI.zIndex;
          }
        });
      };
      ReadyUI.prototype.startAnim = function() {
        var _this = this;
        this.uiRoot.stopAllActions();
        this.isPlayAni = true;
        var startY = .5 * cc.winSize.height + 700;
        this.uiRoot.setPosition(cc.v3(0, startY));
        var bounceHeight = 100;
        var targetY = 0;
        cc.tween(this.uiRoot).to(.3, {
          y: targetY
        }, {
          easing: "quadIn"
        }).call(function() {
          _this.isPlayAni = false;
        }).start();
      };
      ReadyUI.prototype.switchAni = function(endCB, toLeft) {
        var _this = this;
        void 0 === toLeft && (toLeft = true);
        this.centerUI.stopAllActions();
        this.isPlayAni = true;
        var targetLeftX = -cc.winSize.width - 300;
        var targetRightX = cc.winSize.width + 300;
        cc.tween(this.centerUI).to(.3, {
          x: toLeft ? targetLeftX : targetRightX
        }).to(0, {
          x: toLeft ? targetRightX : targetLeftX
        }).call(function() {
          endCB && endCB();
        }).to(.3, {
          x: 0
        }).call(function() {
          _this.isPlayAni = false;
        }).start();
      };
      ReadyUI.prototype.quitAnim = function() {
        var _this = this;
        this.node.stopAllActions();
        this.isPlayAni = true;
        var targetY = .5 * cc.winSize.height + 700;
        cc.tween(this.node).to(.5, {
          y: targetY
        }, {
          easing: "quadOut"
        }).call(function() {
          cc.resources.release(Enum_1.GAME_Prefab.readyUI.url);
          _this.node.destroy();
          EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_START);
        }).start();
      };
      ReadyUI.prototype.onDestroy = function() {
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_ITEM, this.initUseAnim, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.READYUI_REFRESH_ITEM, this.initUseAnim, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.READYUI_CHOOSE_TOOLITEM, this.initUseTool, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.READYUI_REFRESH_TOOLITEM, this.initUseTool, this);
        EventManager_1.default.instance.off(Enum_1.ENUM_GAME_EVENT.UPDATE_DIAMOND_COUNT, this.initDiamond, this);
      };
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "centerUI", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "uiRoot", void 0);
      __decorate([ property(cc.Label) ], ReadyUI.prototype, "diamond", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "animalPosRoot", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "animalRoot", void 0);
      __decorate([ property(cc.Prefab) ], ReadyUI.prototype, "animalPrefab", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "lastPageBtn", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "nextPageBtn", void 0);
      __decorate([ property(cc.Sprite) ], ReadyUI.prototype, "useAniIcon", void 0);
      __decorate([ property(cc.Sprite) ], ReadyUI.prototype, "chooseAniIcon", void 0);
      __decorate([ property(cc.Label) ], ReadyUI.prototype, "animName", void 0);
      __decorate([ property(cc.Label) ], ReadyUI.prototype, "animDesc", void 0);
      __decorate([ property(cc.Label) ], ReadyUI.prototype, "animScore", void 0);
      __decorate([ property(cc.Label) ], ReadyUI.prototype, "animLevel", void 0);
      __decorate([ property(cc.Sprite) ], ReadyUI.prototype, "animExpProgress", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "buyAnimRoot", void 0);
      __decorate([ property(cc.Label) ], ReadyUI.prototype, "animBuyCost", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "unLockInfoRoot", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "pagePointArr", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "toolsPosRoot", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "toolsRoot", void 0);
      __decorate([ property(cc.Prefab) ], ReadyUI.prototype, "toolPrefab", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "buyToolBtn", void 0);
      __decorate([ property(cc.Sprite) ], ReadyUI.prototype, "chooseToolIcon", void 0);
      __decorate([ property(cc.Label) ], ReadyUI.prototype, "toolDesc", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "animUIRoot", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "toolsUIRoot", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "btnStart", void 0);
      __decorate([ property(cc.Node) ], ReadyUI.prototype, "btnReady", void 0);
      ReadyUI = __decorate([ ccclass ], ReadyUI);
      return ReadyUI;
    }(cc.Component);
    exports.default = ReadyUI;
    cc._RF.pop();
  }, {
    "../../Data/Enum": "Enum",
    "../../Data/GameData": "GameData",
    "../../Manager/AudioManager": "AudioManager",
    "../../Manager/EventManager": "EventManager",
    "../../Manager/ResManager": "ResManager",
    "../DataManager": "DataManager",
    "../GameUtils": "GameUtils",
    "../ToastManager": "ToastManager",
    "./Item/ReadyAnimalItem": "ReadyAnimalItem",
    "./Item/ReadyToolItem": "ReadyToolItem"
  } ],
  ResManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a7c84pJVFdH27jEvFPPottt", "ResManager");
    "use strict";
    var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = this && this.__generator || function(thisArg, body) {
      var _ = {
        label: 0,
        sent: function() {
          if (1 & t[0]) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      }, f, y, t, g;
      return g = {
        next: verb(0),
        throw: verb(1),
        return: verb(2)
      }, "function" === typeof Symbol && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([ n, v ]);
        };
      }
      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
          if (f = 1, y && (t = 2 & op[0] ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 
          0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          (y = 0, t) && (op = [ 2 & op[0], t.value ]);
          switch (op[0]) {
           case 0:
           case 1:
            t = op;
            break;

           case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };

           case 5:
            _.label++;
            y = op[1];
            op = [ 0 ];
            continue;

           case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;

           default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (6 === op[0] || 2 === op[0])) {
              _ = 0;
              continue;
            }
            if (3 === op[0] && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (6 === op[0] && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            t[2] && _.ops.pop();
            _.trys.pop();
            continue;
          }
          op = body.call(thisArg, _);
        } catch (e) {
          op = [ 6, e ];
          y = 0;
        } finally {
          f = t = 0;
        }
        if (5 & op[0]) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ResManager = function() {
      function ResManager() {
        this.loadMap = new Map();
      }
      ResManager.getInstance = function() {
        null === this._instance && (this._instance = new this());
        return this._instance;
      };
      Object.defineProperty(ResManager, "instance", {
        get: function() {
          return this.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      ResManager.prototype.loadRes = function(url) {
        return __awaiter(this, void 0, Promise, function() {
          var _this = this;
          return __generator(this, function(_a) {
            if (this.loadMap.has(url)) return [ 2 ];
            return [ 2, new Promise(function(resolve, reject) {
              _this.loadMap.set(url, 1);
              var data = cc.resources.get(url);
              if (data) {
                _this.loadMap.delete(url);
                return resolve(data);
              }
              cc.resources.load(url, function(err, object) {
                if (err) {
                  reject("loadRes fail" + err);
                  _this.loadMap.delete(url);
                  return;
                }
                _this.loadMap.delete(url);
                resolve(object);
              });
            }) ];
          });
        });
      };
      ResManager._instance = null;
      return ResManager;
    }();
    exports.default = ResManager;
    cc._RF.pop();
  }, {} ],
  ScoreUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "e0135nRhnlOy4m5GeORRnrw", "ScoreUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../../Data/Enum");
    var AudioManager_1 = require("../../Manager/AudioManager");
    var EventManager_1 = require("../../Manager/EventManager");
    var DataManager_1 = require("../DataManager");
    var GameUtils_1 = require("../GameUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var ScoreUI = function(_super) {
      __extends(ScoreUI, _super);
      function ScoreUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.baseScore = null;
        _this.addScore = null;
        _this.totalScore = null;
        _this.historyMaxScore = null;
        _this.diamond = null;
        _this.animRoot1 = null;
        _this.animRoot2 = null;
        _this.animRoot3 = null;
        _this.isPlayAni = false;
        return _this;
      }
      ScoreUI.prototype.initUI = function() {
        this.addScore.node.parent.active = false;
        this.baseScore.string = "\u57fa\u7840\u5206\uff1a" + DataManager_1.default.instance.currentScore;
        var addBase = 0;
        this.addScore.string = "\u52a0\u6210\u5206\uff1a" + addBase;
        this.diamond.string = "" + DataManager_1.default.instance.diamond;
        var totalScore = DataManager_1.default.instance.currentScore + addBase;
        this.totalScore.string = "\u603b\u5206\uff1a" + totalScore;
        totalScore > DataManager_1.default.instance.maxScore && (DataManager_1.default.instance.maxScore = totalScore);
        this.historyMaxScore.string = "\u5386\u53f2\u6700\u9ad8\u5206\uff1a" + DataManager_1.default.instance.maxScore;
        this.startAni();
      };
      ScoreUI.prototype.onBtnPlayAgain = function(event) {
        var _this = this;
        GameUtils_1.default.blockBtnQC(event.target, 1);
        if (this.isPlayAni) return;
        AudioManager_1.default.instance.playBtn();
        this.quitAni(function() {
          EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.GAME_START);
          _this.node.destroy();
        });
      };
      ScoreUI.prototype.onBtnHome = function(event) {
        var _this = this;
        GameUtils_1.default.blockBtnQC(event.target, 1);
        if (this.isPlayAni) return;
        AudioManager_1.default.instance.playBtn();
        this.quitAni(function() {
          EventManager_1.default.instance.emit(Enum_1.ENUM_GAME_EVENT.QUIT_GAME);
          _this.node.destroy();
        });
      };
      ScoreUI.prototype.onBtnShare = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        if (this.isPlayAni) return;
        AudioManager_1.default.instance.playBtn();
      };
      ScoreUI.prototype.startAni = function() {
        var _this = this;
        this.animRoot1.x = -750;
        this.animRoot2.x = -750;
        this.animRoot3.y = -cc.winSize.height / 2 - 100;
        this.isPlayAni = true;
        cc.tween(this.animRoot1).to(.2, {
          x: 0
        }).start();
        cc.tween(this.animRoot2).delay(.2).to(.2, {
          x: 0
        }).start();
        cc.tween(this.animRoot3).delay(.2).to(.2, {
          y: -450
        }).call(function() {
          _this.isPlayAni = false;
          _this.addScore.node.parent.active = true;
        }).start();
      };
      ScoreUI.prototype.quitAni = function(endCB) {
        var _this = this;
        this.isPlayAni = true;
        cc.tween(this.animRoot1).delay(.2).call(function() {
          _this.addScore.node.parent.active = false;
        }).to(.2, {
          y: cc.winSize.height / 2 + 300
        }).call(function() {
          _this.isPlayAni = false;
          endCB && endCB();
        }).start();
        cc.tween(this.animRoot2).to(.2, {
          x: -750
        }).start();
        cc.tween(this.animRoot3).to(.2, {
          y: -cc.winSize.height / 2 - 100
        }).start();
      };
      ScoreUI.prototype.onDestroy = function() {
        cc.resources.release(Enum_1.GAME_Prefab.scoreUI.url);
      };
      __decorate([ property(cc.Label) ], ScoreUI.prototype, "baseScore", void 0);
      __decorate([ property(cc.Label) ], ScoreUI.prototype, "addScore", void 0);
      __decorate([ property(cc.Label) ], ScoreUI.prototype, "totalScore", void 0);
      __decorate([ property(cc.Label) ], ScoreUI.prototype, "historyMaxScore", void 0);
      __decorate([ property(cc.Label) ], ScoreUI.prototype, "diamond", void 0);
      __decorate([ property(cc.Node) ], ScoreUI.prototype, "animRoot1", void 0);
      __decorate([ property(cc.Node) ], ScoreUI.prototype, "animRoot2", void 0);
      __decorate([ property(cc.Node) ], ScoreUI.prototype, "animRoot3", void 0);
      ScoreUI = __decorate([ ccclass ], ScoreUI);
      return ScoreUI;
    }(cc.Component);
    exports.default = ScoreUI;
    cc._RF.pop();
  }, {
    "../../Data/Enum": "Enum",
    "../../Manager/AudioManager": "AudioManager",
    "../../Manager/EventManager": "EventManager",
    "../DataManager": "DataManager",
    "../GameUtils": "GameUtils"
  } ],
  SettingUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "c6fb4VnAytAgZWDIji7vaVh", "SettingUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../../Data/Enum");
    var AudioManager_1 = require("../../Manager/AudioManager");
    var DataManager_1 = require("../DataManager");
    var GameUtils_1 = require("../GameUtils");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var SettingUI = function(_super) {
      __extends(SettingUI, _super);
      function SettingUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.effectCheck = null;
        _this.musicCheck = null;
        return _this;
      }
      SettingUI.prototype.onLoad = function() {
        this.initUI();
      };
      SettingUI.prototype.initUI = function() {
        this.effectCheck.getChildByName("open").active = 1 == DataManager_1.default.instance.effectValue;
        this.effectCheck.getChildByName("close").active = 0 == DataManager_1.default.instance.effectValue;
        this.musicCheck.getChildByName("open").active = 1 == DataManager_1.default.instance.musicValue;
        this.musicCheck.getChildByName("close").active = 0 == DataManager_1.default.instance.musicValue;
      };
      SettingUI.prototype.onBtnSettingEffect = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        AudioManager_1.default.instance.playBtn();
        DataManager_1.default.instance.effectValue = 1 == DataManager_1.default.instance.effectValue ? 0 : 1;
        this.initUI();
      };
      SettingUI.prototype.onBtnSettingMusic = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        AudioManager_1.default.instance.playBtn();
        DataManager_1.default.instance.musicValue = 1 == DataManager_1.default.instance.musicValue ? 0 : 1;
        this.initUI();
        AudioManager_1.default.instance.playMusic();
      };
      SettingUI.prototype.onBtnClose = function(event) {
        GameUtils_1.default.blockBtnQC(event.target, 1);
        AudioManager_1.default.instance.playBtn();
        this.node.destroy();
        cc.resources.release(Enum_1.GAME_Prefab.settingUI.url);
      };
      __decorate([ property(cc.Node) ], SettingUI.prototype, "effectCheck", void 0);
      __decorate([ property(cc.Node) ], SettingUI.prototype, "musicCheck", void 0);
      SettingUI = __decorate([ ccclass ], SettingUI);
      return SettingUI;
    }(cc.Component);
    exports.default = SettingUI;
    cc._RF.pop();
  }, {
    "../../Data/Enum": "Enum",
    "../../Manager/AudioManager": "AudioManager",
    "../DataManager": "DataManager",
    "../GameUtils": "GameUtils"
  } ],
  SkeletonExt: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "3b00e2Jeo5LrJlz8AFLe+FT", "SkeletonExt");
    "use strict";
    false;
    cc._RF.pop();
  }, {} ],
  StartUI: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f14a3L4JpRBsbqJqH+rfB9P", "StartUI");
    "use strict";
    var __extends = this && this.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || {
          __proto__: []
        } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b) Object.prototype.hasOwnProperty.call(b, p) && (d[p] = b[p]);
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = null === b ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __decorate = this && this.__decorate || function(decorators, target, key, desc) {
      var c = arguments.length, r = c < 3 ? target : null === desc ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
      if ("object" === typeof Reflect && "function" === typeof Reflect.decorate) r = Reflect.decorate(decorators, target, key, desc); else for (var i = decorators.length - 1; i >= 0; i--) (d = decorators[i]) && (r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r);
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var Enum_1 = require("../../Data/Enum");
    var AudioManager_1 = require("../../Manager/AudioManager");
    var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
    var StartUI = function(_super) {
      __extends(StartUI, _super);
      function StartUI() {
        var _this = null !== _super && _super.apply(this, arguments) || this;
        _this.topUI = null;
        _this.grassLeft = null;
        _this.grassRight = null;
        _this.startBtn = null;
        _this.bottomUI = null;
        _this.quitCB = null;
        return _this;
      }
      StartUI.prototype.onLoad = function() {};
      StartUI.prototype.onAwake = function() {
        this.dropAndBounce(this.topUI);
        this.grassAni();
        this.startBtnAni();
        AudioManager_1.default.instance.playMusic();
      };
      StartUI.prototype.onQuit = function() {
        var _this = this;
        this.topQuitAni(function() {
          cc.resources.release(Enum_1.GAME_Prefab.startUI.url);
          _this.quitCB && _this.quitCB();
          _this.node.destroy();
        });
        this.bottomQuitAni();
      };
      StartUI.prototype.topQuitAni = function(cb) {
        this.topUI.stopAllActions();
        var targetY = .5 * cc.winSize.height;
        cc.tween(this.topUI).to(.5, {
          y: targetY
        }, {
          easing: "quadOut"
        }).call(function() {
          cb && cb();
        }).start();
      };
      StartUI.prototype.bottomQuitAni = function() {
        this.bottomUI.stopAllActions();
        var targetY = -.5 * cc.winSize.height - 200;
        cc.tween(this.bottomUI).to(.5, {
          y: targetY
        }, {
          easing: "quadOut"
        }).start();
      };
      StartUI.prototype.dropAndBounce = function(node) {
        var startY = .5 * cc.winSize.height + 200;
        node.setPosition(cc.v3(0, startY));
        var targetY = 200;
        var bounceHeight = 50;
        node.stopAllActions();
        cc.tween(node).to(.3, {
          y: targetY
        }, {
          easing: "quadIn"
        }).to(.2, {
          y: targetY + bounceHeight
        }, {
          easing: "quadOut"
        }).to(.15, {
          y: targetY
        }, {
          easing: "quadIn"
        }).to(.1, {
          y: targetY + bounceHeight / 3
        }, {
          easing: "quadOut"
        }).to(.08, {
          y: targetY
        }, {
          easing: "quadIn"
        }).start();
      };
      StartUI.prototype.grassAni = function() {
        this.grassLeft.stopAllActions();
        this.grassRight.stopAllActions();
        cc.tween(this.grassLeft).repeatForever(cc.tween().to(1, {
          angle: 2
        }).to(2, {
          angle: -2
        }).to(1, {
          angle: 0
        })).start();
        cc.tween(this.grassRight).repeatForever(cc.tween().to(1, {
          angle: 2
        }).to(2, {
          angle: -2
        }).to(1, {
          angle: 0
        })).start();
      };
      StartUI.prototype.startBtnAni = function() {
        this.startBtn.active = true;
        this.startBtn.y = -450;
        this.startBtn.opacity = 255;
        this.startBtn.stopAllActions();
        cc.tween(this.startBtn).repeatForever(cc.tween(this.startBtn).to(2, {
          opacity: 0
        }, {
          easing: "quadOut"
        }).to(2, {
          opacity: 255
        }, {
          easing: "quadIn"
        })).start();
      };
      StartUI.prototype.onBtnStart = function() {
        AudioManager_1.default.instance.playBtn();
        this.onQuit();
      };
      __decorate([ property(cc.Node) ], StartUI.prototype, "topUI", void 0);
      __decorate([ property(cc.Node) ], StartUI.prototype, "grassLeft", void 0);
      __decorate([ property(cc.Node) ], StartUI.prototype, "grassRight", void 0);
      __decorate([ property(cc.Node) ], StartUI.prototype, "startBtn", void 0);
      __decorate([ property(cc.Node) ], StartUI.prototype, "bottomUI", void 0);
      StartUI = __decorate([ ccclass ], StartUI);
      return StartUI;
    }(cc.Component);
    exports.default = StartUI;
    cc._RF.pop();
  }, {
    "../../Data/Enum": "Enum",
    "../../Manager/AudioManager": "AudioManager"
  } ],
  ToastManager: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "f206dFcwyRMv50Nnu3Ei0vO", "ToastManager");
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    var ToastManager = function() {
      function ToastManager() {}
      ToastManager.getInstance = function() {
        null === this._instance && (this._instance = new this());
        return this._instance;
      };
      Object.defineProperty(ToastManager, "instance", {
        get: function() {
          return this.getInstance();
        },
        enumerable: false,
        configurable: true
      });
      ToastManager.prototype.show = function(text, _a) {
        void 0 === text && (text = "");
        var _b = void 0 === _a ? {} : _a, _c = _b.gravity, gravity = void 0 === _c ? "CENTER" : _c, _d = _b.duration, duration = void 0 === _d ? 1 : _d, _e = _b.bg_color, bg_color = void 0 === _e ? cc.color(102, 102, 102, 200) : _e;
        var canvas = cc.director.getScene().getComponentInChildren(cc.Canvas);
        var width = canvas.node.width;
        var height = canvas.node.height;
        var bgNode = new cc.Node();
        var textNode = new cc.Node();
        var textLabel = textNode.addComponent(cc.Label);
        textLabel.horizontalAlign = cc.Label.HorizontalAlign.CENTER;
        textLabel.verticalAlign = cc.Label.VerticalAlign.CENTER;
        textLabel.fontSize = 30;
        textLabel.string = text;
        if (text.length * textLabel.fontSize > 3 * width / 5) {
          textNode.width = 3 * width / 5;
          textLabel.overflow = cc.Label.Overflow.RESIZE_HEIGHT;
        } else textNode.width = text.length * textLabel.fontSize;
        var lineCount = 1 + ~~(text.length * textLabel.fontSize / (3 * width / 5));
        textNode.height = textLabel.fontSize * lineCount;
        var ctx = bgNode.addComponent(cc.Graphics);
        ctx.arc(-textNode.width / 2, 0, textNode.height / 2 + 20, .5 * Math.PI, 1.5 * Math.PI, true);
        ctx.lineTo(textNode.width / 2, -(textNode.height / 2 + 20));
        ctx.arc(textNode.width / 2, 0, textNode.height / 2 + 20, 1.5 * Math.PI, .5 * Math.PI, true);
        ctx.lineTo(-textNode.width / 2, textNode.height / 2 + 20);
        ctx.fillColor = bg_color;
        ctx.fill();
        bgNode.addChild(textNode);
        if ("CENTER" === gravity) {
          bgNode.y = 0;
          bgNode.x = 0;
        } else "TOP" === gravity ? bgNode.y = bgNode.y + height / 5 * 2 : "BOTTOM" === gravity && (bgNode.y = bgNode.y - height / 5 * 2);
        bgNode.group = "gameUI";
        bgNode.zIndex = 999;
        canvas.node.addChild(bgNode);
        var finished = cc.callFunc(function() {
          bgNode.destroy();
        });
        var action = cc.sequence(cc.moveBy(duration, cc.v2(0, 0)), cc.fadeOut(.3), finished);
        cc.tween(bgNode).then(action).start();
      };
      ToastManager._instance = null;
      return ToastManager;
    }();
    exports.default = ToastManager;
    cc._RF.pop();
  }, {} ]
}, {}, [ "SkeletonExt", "Enum", "GameData", "AnimalChoose", "AnimalCube", "AnimalManager", "DataManager", "Game", "GameUtils", "Main", "ToastManager", "GameSettingUI", "AnimalLevelItem", "ReadyAnimalItem", "ReadyToolItem", "LevelShowUI", "LoadSceneUI", "LoadUI", "MainBgUI", "ReadyUI", "ScoreUI", "SettingUI", "StartUI", "AudioManager", "EventManager", "PoolManager", "ResManager" ]);