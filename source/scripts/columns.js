;(function($){
    $.prototype.width = function () {
        return parseInt(this.css('width'), 10)
    }
    $.prototype.height = function () {
        return parseInt(this.css('height'), 10)
    }


    function Column () {
        this.html   = $.create('<div class="column"></div>')
        this.height = 0
    }
    Column.prototype.appendTo = function (container) {
        container.append(this.html)
    }
    Column.prototype.push = function (element) {
        this.html.append(element)
        this.updateHeight()
    }
    Column.prototype.updateHeight = function () {
        this.height = this.html.height()
    }
    Column.prototype.valueOf = function () {
        return this.height
    }


    function Architect (number) {
        this.cols = []
        while (number--) {
            this.cols.push(new Column())
        }
    }
    Architect.prototype.appendTo = function (container) {
        this.cols.forEach(function(col){
            col.appendTo(container)
        })
    }
    Architect.prototype.construct = function (elements) {
        elements.forEach(this.push.bind(this))
    }
    Architect.prototype.push = function (element) {
        this.cols[0].push(element)
        this.sort()
    }
    Architect.prototype.sort = function () {
        this.cols.sort(function(a, b){
            return a - b
        })
    }


    var content    = $('#content')
      , elements   = content.children('.gift')
      , colsnumber = Math.round(content.width() / elements.width())
      , architect  = new Architect(colsnumber)

    elements.remove()

    architect.appendTo(content)
    architect.construct(elements)
    
})(Rye)