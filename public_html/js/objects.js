function TextBox(type, level, priority, group, text, last) {
    this.type = type;
    this.level = level;
    this.priority = priority;
    this.group = group;
    this.text = text;
    this.last = last;

    this.replaceText = function (newText) {
        this.text = newText;
    };
}
