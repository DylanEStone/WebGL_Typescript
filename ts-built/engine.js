var TSE;
(function (TSE) {
    var Engine = (function () {
        function Engine() {
        }
        Engine.prototype.start = function () {
            this._canvas = TSE.GLUtilities.initialize();
            TSE.gl.clearColor(0, 0, 0, 1);
            this.loadShader();
            this._shader.use();
            this.loop();
        };
        Engine.prototype.resize = function () {
            if (this._canvas !== undefined) {
                this._canvas.width = window.innerWidth;
                this._canvas.height = window.innerHeight;
            }
        };
        Engine.prototype.loop = function () {
            TSE.gl.clear(TSE.gl.COLOR_BUFFER_BIT);
            requestAnimationFrame(this.loop.bind(this));
        };
        Engine.prototype.loadShader = function () {
            var vertexShaderSource = "\nattribute vec3 a_position;\n\nvoid main() {\n    gl_Position = vec4(a_position, 1.0);\n}";
            var fragmentShaderSource = "\nprecision midiump float;\n\nvoid main() {\n    gl_FragColor = vec4(1.0);\n}";
            this._shader = new TSE.Shader("basic", vertexShaderSource, fragmentShaderSource);
        };
        return Engine;
    }());
    TSE.Engine = Engine;
})(TSE || (TSE = {}));
//# sourceMappingURL=engine.js.map