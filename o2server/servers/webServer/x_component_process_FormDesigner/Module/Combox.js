MWF.xApplication.process.FormDesigner.Module = MWF.xApplication.process.FormDesigner.Module || {};
MWF.xDesktop.requireApp("process.FormDesigner", "Module.$Element", null, false);
MWF.xApplication.process.FormDesigner.Module.Combox = MWF.FCCombox = new Class({
	Extends: MWF.FC$Element,
	Implements: [Options, Events],
	options: {
		"style": "default",
		"propertyPath": "/x_component_process_FormDesigner/Module/Combox/combox.html"
	},
	
	initialize: function(form, options){
		this.setOptions(options);
		
		this.path = "/x_component_process_FormDesigner/Module/Combox/";
		this.cssPath = "/x_component_process_FormDesigner/Module/Combox/"+this.options.style+"/css.wcss";

		this._loadCss();
		this.moduleType = "element";
		this.moduleName = "combox";
		
		this.form = form;
		this.container = null;
		this.containerNode = null;
	},
	
	_createMoveNode: function(){
		this.moveNode = new Element("div", {
			"MWFType": "combox",
			"styles": this.css.moduleNodeMove,
			"id": this.json.id,
			"events": {
				"selectstart": function(){
					return false;
				}
			}
		}).inject(this.form.container);
		var icon = new Element("div", {
			"styles": this.css.selectIcon
		}).inject(this.moveNode);
		var text = new Element("div", {
			"styles": this.css.moduleText,
			"text": this.json.id
		}).inject(this.moveNode);
	},
	_loadNodeStyles: function(){
		var icon = this.node.getFirst("div");
		var text = this.node.getLast("div");
		icon.setStyles(this.css.selectIcon);
		text.setStyles(this.css.moduleText);
	},
	
	_getCopyNode: function(){
		if (!this.copyNode) this._createCopyNode();
		this.copyNode.setStyle("display", "inline-block");
		return this.copyNode;
	},

    clearTemplateStyles: function(styles){
        if (styles){
            if (styles.styles) this.removeStyles(styles.styles, "styles");
            if (styles.inputStyles) this.removeStyles(styles.inputStyles, "inputStyles");
            if (styles.properties) this.removeStyles(styles.properties, "properties");
        }
    },
    setTemplateStyles: function(styles){
        if (styles.styles) this.copyStyles(styles.styles, "styles");
        if (styles.inputStyles) this.copyStyles(styles.inputStyles, "inputStyles");
        if (styles.properties) this.copyStyles(styles.properties, "properties");
    },

    setPropertiesOrStyles: function(name){
        if (name=="styles"){
            if (this.parentContainer){
                if (this.parentContainer.moduleName == "datagrid$Data"){
                    if (!this.json.styles.width) this.json.styles.width = "90%";
                }
            }
            try{
                this.setCustomStyles();
            }catch(e){}
        }
        if (name=="inputStyles"){
            var text = this.node.getLast("div");
            text.clearStyles();
            text.setStyles(this.css.moduleText);

            Object.each(this.json.inputStyles, function(value, key){
                var reg = /^border\w*/ig;
                if (!key.test(reg)){
                    text.setStyle(key, value);
                }
            }.bind(this));
        }
        if (name=="properties"){
            this.node.setProperties(this.json.properties);
        }
    },

    _setEditStyle_custom: function(name){
        if (name=="id"){
            this.node.getLast().set("text", this.json.id);
        }
    },
    setPropertiesOrStyles: function(name){
        if (name=="styles"){
            if (this.parentContainer){
                if (this.parentContainer.moduleName == "datagrid$Data"){
                    if (!this.json.styles.width) this.json.styles.width = "90%";
                }
            }
            try{
                this.setCustomStyles();
            }catch(e){}
        }
        if (name=="inputStyles"){
            var text = this.node.getLast("div");
            text.clearStyles();
            text.setStyles(this.css.moduleText);

            Object.each(this.json.inputStyles, function(value, key){
                var reg = /^border\w*/ig;
                if (!key.test(reg)){
                    text.setStyle(key, value);
                }
            }.bind(this));
        }
        if (name=="properties"){
            this.node.setProperties(this.json.properties);
        }
    }
	
});