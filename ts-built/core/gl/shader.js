var TSE;
(function (TSE) {
    var Shader = (function () {
        function Shader(name, vertexSource, fragmentSource) {
            this._name = name;
            var vertexShader = this.loadShader(vertexSource, TSE.gl.VERTEX_SHADER);
            var fragmentShader = this.loadShader(fragmentSource, TSE.gl.FRAGMENT_SHADER);
            this.createProgram(vertexShader, fragmentShader);
        }
        Object.defineProperty(Shader.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Shader.prototype.use = function () {
            TSE.gl.useProgram(this._program);
        };
        Shader.prototype.loadShader = function (source, shaderType) {
            var shader = TSE.gl.createShader(shaderType);
            TSE.gl.shaderSource(shader, source);
            TSE.gl.compileShader(shader);
            var error = TSE.gl.getShaderInfoLog(shader);
            if (error !== "") {
                throw new Error("Error compiling shader: " + this._name + error);
            }
            return shader;
        };
        Shader.prototype.createProgram = function (vertexShader, fragmentShader) {
            this._program = TSE.gl.createProgram();
            TSE.gl.attachShader(this._program, vertexShader);
            TSE.gl.attachShader(this._program, fragmentShader);
            TSE.gl.linkProgram(this._program);
            var error = TSE.gl.getProgramInfoLog(this._program);
            if (error !== "") {
                throw new Error("Error linking shader " + this.name + ": " + error);
            }
        };
        return Shader;
    }());
    TSE.Shader = Shader;
})(TSE || (TSE = {}));
//# sourceMappingURL=shader.js.map