var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.push(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.push(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define("config/config", ["require", "exports", "dotenv"], function (require, exports, dotenv) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.config = void 0;
    dotenv.config();
    exports.config = {
        username: "".concat(process.env.POSTGRES_USERNAME),
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_DB,
        host: process.env.POSTGRES_HOST,
        port: process.env.POSTGRES_PORT,
        aws_region: process.env.AWS_REGION,
        aws_profile: process.env.AWS_PROFILE,
        aws_media_bucket: process.env.AWS_BUCKET,
        url: process.env.URL,
        jwt: {
            secret: process.env.JWT_SECRET,
        },
    };
});
define("aws", ["require", "exports", "aws-sdk", "config/config"], function (require, exports, AWS, config_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getPutSignedUrl = exports.getGetSignedUrl = exports.s3 = void 0;
    exports.s3 = new AWS.S3({
        signatureVersion: "v4",
        region: config_1.config.aws_region,
        params: { Bucket: config_1.config.aws_media_bucket },
    });
    function getGetSignedUrl(key) {
        var signedUrlExpireSeconds = 60 * 5;
        return exports.s3.getSignedUrl("getObject", {
            Bucket: config_1.config.aws_media_bucket,
            Key: key,
            Expires: signedUrlExpireSeconds,
        });
    }
    exports.getGetSignedUrl = getGetSignedUrl;
    function getPutSignedUrl(key) {
        var signedUrlExpireSeconds = 60 * 5;
        return exports.s3.getSignedUrl("putObject", {
            Bucket: config_1.config.aws_media_bucket,
            Key: key,
            Expires: signedUrlExpireSeconds,
        });
    }
    exports.getPutSignedUrl = getPutSignedUrl;
});
define("sequelize", ["require", "exports", "sequelize-typescript", "config/config"], function (require, exports, sequelize_typescript_1, config_2) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sequelize = void 0;
    exports.sequelize = new sequelize_typescript_1.Sequelize({
        username: config_2.config.username,
        password: config_2.config.password,
        database: config_2.config.database,
        host: config_2.config.host,
        dialect: "postgres",
        storage: ":memory:",
    });
});
define("controllers/v0/feed/models/FeedItem", ["require", "exports", "sequelize-typescript"], function (require, exports, sequelize_typescript_2) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeedItem = void 0;
    var FeedItem = exports.FeedItem = function () {
        var _classDecorators = [sequelize_typescript_2.Table];
        var _classDescriptor;
        var _classExtraInitializers = [];
        var _classThis;
        var _instanceExtraInitializers = [];
        var _caption_decorators;
        var _caption_initializers = [];
        var _url_decorators;
        var _url_initializers = [];
        var _createdAt_decorators;
        var _createdAt_initializers = [];
        var _updatedAt_decorators;
        var _updatedAt_initializers = [];
        var FeedItem = _classThis = (function (_super) {
            __extends(FeedItem_1, _super);
            function FeedItem_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.caption = (__runInitializers(_this, _instanceExtraInitializers), __runInitializers(_this, _caption_initializers, void 0));
                _this.url = __runInitializers(_this, _url_initializers, void 0);
                _this.createdAt = __runInitializers(_this, _createdAt_initializers, new Date());
                _this.updatedAt = __runInitializers(_this, _updatedAt_initializers, new Date());
                return _this;
            }
            return FeedItem_1;
        }(sequelize_typescript_2.Model));
        __setFunctionName(_classThis, "FeedItem");
        (function () {
            _caption_decorators = [sequelize_typescript_2.Column];
            _url_decorators = [sequelize_typescript_2.Column];
            _createdAt_decorators = [sequelize_typescript_2.Column, sequelize_typescript_2.CreatedAt];
            _updatedAt_decorators = [sequelize_typescript_2.Column, sequelize_typescript_2.UpdatedAt];
            __esDecorate(null, null, _caption_decorators, { kind: "field", name: "caption", static: false, private: false, access: { has: function (obj) { return "caption" in obj; }, get: function (obj) { return obj.caption; }, set: function (obj, value) { obj.caption = value; } } }, _caption_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _url_decorators, { kind: "field", name: "url", static: false, private: false, access: { has: function (obj) { return "url" in obj; }, get: function (obj) { return obj.url; }, set: function (obj, value) { obj.url = value; } } }, _url_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } } }, _createdAt_initializers, _instanceExtraInitializers);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } } }, _updatedAt_initializers, _instanceExtraInitializers);
            __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
            FeedItem = _classThis = _classDescriptor.value;
            __runInitializers(_classThis, _classExtraInitializers);
        })();
        return FeedItem = _classThis;
    }();
});
define("controllers/v0/feed/routes/feed.router", ["require", "exports", "express", "controllers/v0/feed/models/FeedItem", "jsonwebtoken", "aws", "config/config"], function (require, exports, express_1, FeedItem_2, jwt, AWS, c) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FeedRouter = exports.requireAuth = void 0;
    var router = (0, express_1.Router)();
    function requireAuth(req, res, next) {
        if (!req.headers || !req.headers.authorization) {
            return res.status(401).send({ message: 'No authorization headers.' });
        }
        var tokenBearer = req.headers.authorization.split(' ');
        if (tokenBearer.length != 2) {
            return res.status(401).send({ message: 'Malformed token.' });
        }
        var token = tokenBearer[1];
        return jwt.verify(token, c.config.jwt.secret, function (err, decoded) {
            if (err) {
                return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
            }
            return next();
        });
    }
    exports.requireAuth = requireAuth;
    router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var items;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, FeedItem_2.FeedItem.findAndCountAll({ order: [['id', 'DESC']] })];
                case 1:
                    items = _a.sent();
                    items.rows.map(function (item) {
                        if (item.url) {
                            item.url = AWS.getGetSignedUrl(item.url);
                        }
                    });
                    res.send(items);
                    return [2];
            }
        });
    }); });
    router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4, FeedItem_2.FeedItem.findByPk(id)];
                case 1:
                    item = _a.sent();
                    res.send(item);
                    return [2];
            }
        });
    }); });
    router.get('/signed-url/:fileName', requireAuth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var fileName, url;
        return __generator(this, function (_a) {
            fileName = req.params.fileName;
            url = AWS.getPutSignedUrl(fileName);
            res.status(201).send({ url: url });
            return [2];
        });
    }); });
    router.post('/', requireAuth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var caption, fileName, item, savedItem;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    caption = req.body.caption;
                    fileName = req.body.url;
                    if (!caption) {
                        return [2, res.status(400).send({ message: 'Caption is required or malformed.' })];
                    }
                    if (!fileName) {
                        return [2, res.status(400).send({ message: 'File url is required.' })];
                    }
                    return [4, new FeedItem_2.FeedItem({
                            caption: caption,
                            url: fileName,
                        })];
                case 1:
                    item = _a.sent();
                    return [4, item.save()];
                case 2:
                    savedItem = _a.sent();
                    savedItem.url = AWS.getGetSignedUrl(savedItem.url);
                    res.status(201).send(savedItem);
                    return [2];
            }
        });
    }); });
    exports.FeedRouter = router;
});
define("controllers/v0/users/models/User", ["require", "exports", "sequelize-typescript"], function (require, exports, sequelize_typescript_3) {
    "use strict";
    var _this = this;
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.User = void 0;
    var User = exports.User = function () {
        var _classDecorators_1 = [sequelize_typescript_3.Table];
        var _classDescriptor_1;
        var _classExtraInitializers_1 = [];
        var _classThis_1;
        var _instanceExtraInitializers_1 = [];
        var _email_decorators;
        var _email_initializers = [];
        var _passwordHash_decorators;
        var _passwordHash_initializers = [];
        var _createdAt_decorators;
        var _createdAt_initializers = [];
        var _updatedAt_decorators;
        var _updatedAt_initializers = [];
        var User = _classThis_1 = (function (_super) {
            __extends(User_1, _super);
            function User_1() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.email = (__runInitializers(_this, _instanceExtraInitializers_1), __runInitializers(_this, _email_initializers, void 0));
                _this.passwordHash = __runInitializers(_this, _passwordHash_initializers, void 0);
                _this.createdAt = __runInitializers(_this, _createdAt_initializers, new Date());
                _this.updatedAt = __runInitializers(_this, _updatedAt_initializers, new Date());
                return _this;
            }
            User_1.prototype.short = function () {
                return {
                    email: this.email,
                };
            };
            return User_1;
        }(sequelize_typescript_3.Model));
        __setFunctionName(_classThis_1, "User");
        (function () {
            _email_decorators = [sequelize_typescript_3.PrimaryKey, sequelize_typescript_3.Column];
            _passwordHash_decorators = [sequelize_typescript_3.Column];
            _createdAt_decorators = [sequelize_typescript_3.Column, sequelize_typescript_3.CreatedAt];
            _updatedAt_decorators = [sequelize_typescript_3.Column, sequelize_typescript_3.UpdatedAt];
            __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } } }, _email_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _passwordHash_decorators, { kind: "field", name: "passwordHash", static: false, private: false, access: { has: function (obj) { return "passwordHash" in obj; }, get: function (obj) { return obj.passwordHash; }, set: function (obj, value) { obj.passwordHash = value; } } }, _passwordHash_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _createdAt_decorators, { kind: "field", name: "createdAt", static: false, private: false, access: { has: function (obj) { return "createdAt" in obj; }, get: function (obj) { return obj.createdAt; }, set: function (obj, value) { obj.createdAt = value; } } }, _createdAt_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, null, _updatedAt_decorators, { kind: "field", name: "updatedAt", static: false, private: false, access: { has: function (obj) { return "updatedAt" in obj; }, get: function (obj) { return obj.updatedAt; }, set: function (obj, value) { obj.updatedAt = value; } } }, _updatedAt_initializers, _instanceExtraInitializers_1);
            __esDecorate(null, _classDescriptor_1 = { value: _classThis_1 }, _classDecorators_1, { kind: "class", name: _classThis_1.name }, null, _classExtraInitializers_1);
            User = _classThis_1 = _classDescriptor_1.value;
            __runInitializers(_classThis_1, _classExtraInitializers_1);
        })();
        return User = _classThis_1;
    }();
});
define("controllers/v0/users/routes/auth.router", ["require", "exports", "express", "controllers/v0/users/models/User", "config/config", "jsonwebtoken", "email-validator"], function (require, exports, express_2, User_2, c, jwt, EmailValidator) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AuthRouter = exports.requireAuth = void 0;
    var router = (0, express_2.Router)();
    var bcrypt = require('bcryptjs');
    function generatePassword(plainTextPassword) {
        return __awaiter(this, void 0, void 0, function () {
            var saltRounds, salt;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        saltRounds = 10;
                        return [4, bcrypt.genSalt(saltRounds)];
                    case 1:
                        salt = _a.sent();
                        return [4, bcrypt.hash(plainTextPassword, salt)];
                    case 2: return [2, _a.sent()];
                }
            });
        });
    }
    function comparePasswords(plainTextPassword, hash) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, bcrypt.compare(plainTextPassword, hash)];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    }
    function generateJWT(user) {
        return jwt.sign(user.short(), c.config.jwt.secret);
    }
    function requireAuth(req, res, next) {
        if (!req.headers || !req.headers.authorization) {
            return res.status(401).send({ message: 'No authorization headers.' });
        }
        var tokenBearer = req.headers.authorization.split(' ');
        if (tokenBearer.length != 2) {
            return res.status(401).send({ message: 'Malformed token.' });
        }
        var token = tokenBearer[1];
        return jwt.verify(token, c.config.jwt.secret, function (err, decoded) {
            if (err) {
                return res.status(500).send({ auth: false, message: 'Failed to authenticate.' });
            }
            return next();
        });
    }
    exports.requireAuth = requireAuth;
    router.get('/verification', requireAuth, function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2, res.status(200).send({ auth: true, message: 'Authenticated.' })];
        });
    }); });
    router.post('/login', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var email, password, user, authValid, jwt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    password = req.body.password;
                    if (!email || !EmailValidator.validate(email)) {
                        return [2, res.status(400).send({ auth: false, message: 'Email is required or malformed.' })];
                    }
                    if (!password) {
                        return [2, res.status(400).send({ auth: false, message: 'Password is required.' })];
                    }
                    return [4, User_2.User.findByPk(email)];
                case 1:
                    user = _a.sent();
                    if (!user) {
                        return [2, res.status(401).send({ auth: false, message: 'User was not found..' })];
                    }
                    return [4, comparePasswords(password, user.passwordHash)];
                case 2:
                    authValid = _a.sent();
                    if (!authValid) {
                        return [2, res.status(401).send({ auth: false, message: 'Password was invalid.' })];
                    }
                    jwt = generateJWT(user);
                    res.status(200).send({ auth: true, token: jwt, user: user.short() });
                    return [2];
            }
        });
    }); });
    router.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var email, plainTextPassword, user, generatedHash, newUser, savedUser, jwt;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    email = req.body.email;
                    plainTextPassword = req.body.password;
                    if (!email || !EmailValidator.validate(email)) {
                        return [2, res.status(400).send({ auth: false, message: 'Email is missing or malformed.' })];
                    }
                    if (!plainTextPassword) {
                        return [2, res.status(400).send({ auth: false, message: 'Password is required.' })];
                    }
                    return [4, User_2.User.findByPk(email)];
                case 1:
                    user = _a.sent();
                    if (user) {
                        return [2, res.status(422).send({ auth: false, message: 'User already exists.' })];
                    }
                    return [4, generatePassword(plainTextPassword)];
                case 2:
                    generatedHash = _a.sent();
                    return [4, new User_2.User({
                            email: email,
                            passwordHash: generatedHash,
                        })];
                case 3:
                    newUser = _a.sent();
                    return [4, newUser.save()];
                case 4:
                    savedUser = _a.sent();
                    jwt = generateJWT(savedUser);
                    res.status(201).send({ token: jwt, user: savedUser.short() });
                    return [2];
            }
        });
    }); });
    router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            res.send('auth');
            return [2];
        });
    }); });
    exports.AuthRouter = router;
});
define("controllers/v0/users/routes/user.router", ["require", "exports", "express", "controllers/v0/users/models/User", "controllers/v0/users/routes/auth.router"], function (require, exports, express_3, User_3, auth_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UserRouter = void 0;
    var router = (0, express_3.Router)();
    router.use('/auth', auth_router_1.AuthRouter);
    router.get('/');
    router.get('/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, item;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    id = req.params.id;
                    return [4, User_3.User.findByPk(id)];
                case 1:
                    item = _a.sent();
                    res.send(item);
                    return [2];
            }
        });
    }); });
    exports.UserRouter = router;
});
define("controllers/v0/index.router", ["require", "exports", "express", "controllers/v0/feed/routes/feed.router", "controllers/v0/users/routes/user.router"], function (require, exports, express_4, feed_router_1, user_router_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.IndexRouter = void 0;
    var router = (0, express_4.Router)();
    router.use('/feed', feed_router_1.FeedRouter);
    router.use('/users', user_router_1.UserRouter);
    router.get('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            res.send("V0");
            return [2];
        });
    }); });
    exports.IndexRouter = router;
});
define("controllers/v0/model.index", ["require", "exports", "controllers/v0/feed/models/FeedItem", "controllers/v0/users/models/User"], function (require, exports, FeedItem_3, User_4) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.V0_FEED_MODELS = exports.V0_USER_MODELS = void 0;
    exports.V0_USER_MODELS = [User_4.User];
    exports.V0_FEED_MODELS = [FeedItem_3.FeedItem];
});
define("server", ["require", "exports", "dotenv", "cors", "express", "sequelize", "controllers/v0/index.router", "body-parser", "controllers/v0/model.index"], function (require, exports, dotenv, cors_1, express_5, sequelize_1, index_router_1, body_parser_1, model_index_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        var error_1, app, port;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    dotenv.config();
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, sequelize_1.sequelize.authenticate()];
                case 2:
                    _a.sent();
                    console.log("Connection has been established successfully.");
                    return [3, 4];
                case 3:
                    error_1 = _a.sent();
                    console.error("Unable to connect to the database:", error_1);
                    return [3, 4];
                case 4: return [4, sequelize_1.sequelize.addModels(model_index_1.V0_FEED_MODELS)];
                case 5:
                    _a.sent();
                    return [4, sequelize_1.sequelize.addModels(model_index_1.V0_USER_MODELS)];
                case 6:
                    _a.sent();
                    return [4, sequelize_1.sequelize.sync()];
                case 7:
                    _a.sent();
                    console.log("Database Connected");
                    app = (0, express_5.default)();
                    port = 8080;
                    app.use(body_parser_1.default.json());
                    app.use((0, cors_1.default)({
                        "allowedHeaders": [
                            'Origin', 'X-Requested-With',
                            'Content-Type', 'Accept',
                            'X-Access-Token', 'Authorization', 'Access-Control-Allow-Origin',
                            'Access-Control-Allow-Headers',
                            'Access-Control-Allow-Methods'
                        ],
                        "methods": 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
                        "preflightContinue": true,
                        "origin": '*',
                    }));
                    app.use("/api/v0/", index_router_1.IndexRouter);
                    app.get("/", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            res.send("/api/v0/");
                            return [2];
                        });
                    }); });
                    app.listen(port, function () {
                        console.log("Backend server is listening on port ".concat(port, "...."));
                        console.log("Frontent server running ".concat(process.env.URL));
                        console.log("press CTRL+C to stop server");
                    });
                    return [2];
            }
        });
    }); })();
});
//# sourceMappingURL=ts.js.map