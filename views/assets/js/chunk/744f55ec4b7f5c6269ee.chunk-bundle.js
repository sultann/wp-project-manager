wedevsPmWebpack([7],{

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_discussions_vue__ = __webpack_require__(503);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b574071e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_discussions_vue__ = __webpack_require__(568);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_discussions_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_b574071e_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_discussions_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/assets/src/discussions/discussions.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b574071e", Component.options)
  } else {
    hotAPI.reload("data-v-b574071e", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive_js__ = __webpack_require__(429);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__directive_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__directive_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_new_user_form_vue__ = __webpack_require__(431);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




var new_project_form = {

	props: ['is_update'],

	data() {

		return {
			'project_name': '',
			'project_cat': 0,
			'project_description': '',
			'project_notify': false,
			'assignees': [],
			show_spinner: false
		};
	},
	components: {
		'project-new-user-form': __WEBPACK_IMPORTED_MODULE_1__project_new_user_form_vue__["a" /* default */]
	},
	created() {
		this.setProjectUser();
	},
	computed: {
		roles() {
			return this.$root.$store.state.roles;
		},

		categories() {
			return this.$root.$store.state.categories;
		},

		project() {
			var projects = this.$root.$store.state.projects;
			var index = this.getIndex(projects, this.project_id, 'id');

			if (index !== false) {
				return projects[index];
			}
			return {};
		},

		selectedUsers() {
			return this.$root.$store.state.assignees;
		},

		// project_users () {
		// 	var projects = this.$root.$store.state.projects;
		//              var index = this.getIndex(projects, this.project_id, 'id');

		//              if ( index !== false ) {
		//              	return projects[index].assignees.data;
		//              } 
		// 	return [];
		// },


		project_category: {
			get() {
				if (this.is_update) {
					var projects = this.$root.$store.state.projects;
					var index = this.getIndex(projects, this.project_id, 'id');
					var project = projects[index];

					if (typeof project.categories !== 'undefined' && project.categories.data.length) {

						this.project_cat = project.categories.data[0].id;

						return project.categories.data[0].id;
					}
				}

				return this.project_cat;
			},

			set(cat) {
				this.project_cat = cat;
			}
		}

	},

	methods: {

		deleteUser(del_user) {
			this.$root.$store.commit('afterDeleteUserFromProject', {
				project_id: this.project_id,
				user_id: del_user.id
			});
		},

		selfNewProject() {
			this.show_spinner = true;
			var self = this;
			if (this.is_update) {
				this.updateSelfProject();
			} else {
				this.newProject(function () {
					self.show_spinner = false;
				});
			}
		},

		updateSelfProject() {
			var data = {
				'id': this.project.id,
				'title': this.project.title,
				'categories': [this.project_cat],
				'description': this.project.description,
				'notify_users': this.project_notify,
				'assignees': this.formatUsers(this.selectedUsers),
				'status': typeof this.project.status === 'undefined' ? 'incomplete' : this.project.status
			},
			    self = this;

			self.updateProject(data, function (res) {
				self.show_spinner = false;
			});
		},
		setProjectUser() {
			var projects = this.$root.$store.state.projects;
			var index = this.getIndex(projects, this.project_id, 'id');

			if (index !== false && this.is_update) {
				this.$root.$store.commit('setSeletedUser', projects[index].assignees.data);
			}
		}
	}
};

/* harmony default export */ __webpack_exports__["a"] = (new_project_form);

/***/ }),

/***/ 428:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {
            username: '',
            first_name: '',
            last_name: '',
            email: '',
            show_spinner: false
        };
    },

    methods: {
        createUser() {
            var self = this;
            this.show_spinner = true;

            self.httpRequest({
                url: self.base_url + '/pm/v2/users',
                method: 'POST',
                data: {
                    username: this.username,
                    first_name: this.first_name,
                    last_name: this.last_name,
                    email: this.email
                },

                success: function (res) {
                    self.addUserMeta(res.data);
                    self.show_spinner = false;

                    // self.$root.$store.commit(
                    //     'setNewUser',
                    //     {
                    //         project_id: self.project_id,
                    //         user: res.data
                    //     }
                    // );

                    self.$root.$store.commit('updateSeletedUser', res.data);
                    jQuery("#pm-create-user-wrap").dialog("close");
                }
            });
        }
    }
});

/***/ }),

/***/ 429:
/***/ (function(module, exports) {



var Project = {
    coWorkerSearch: function (el, binding, vnode) {

        var $ = jQuery;
        var pm_abort;
        var context = vnode.context;

        $(".pm-project-coworker").autocomplete({
            minLength: 3,

            source: function (request, response) {
                var data = {},
                    url = context.base_url + '/pm/v2/users/search?query=' + request.term;

                if (pm_abort) {
                    pm_abort.abort();
                }

                pm_abort = $.get(url, data, function (resp) {

                    if (resp.data.length) {
                        response(resp.data);
                    } else {
                        response({
                            value: '0'
                        });
                    }
                });
            },

            search: function () {
                $(this).addClass('pm-spinner');
            },

            open: function () {
                var self = $(this);
                self.autocomplete('widget').css('z-index', 999999);
                self.removeClass('pm-spinner');
                return false;
            },

            select: function (event, ui) {
                if (ui.item.value === '0') {
                    $("form.pm-user-create-form").find('input[type=text]').val('');
                    $("#pm-create-user-wrap").dialog("open");
                } else {

                    var has_user = context.selectedUsers.find(function (user) {
                        return ui.item.id === user.id ? true : false;
                    });

                    if (!has_user) {
                        context.addUserMeta(ui.item);
                        // context.$root.$store.commit(
                        //     'setNewUser',
                        //     {
                        //         project_id: context.project_id,
                        //         user: ui.item
                        //     }
                        // );
                        context.$root.$store.commit('updateSeletedUser', ui.item);
                    }

                    $('.pm-project-role>table').append(ui.item._user_meta);
                    $("input.pm-project-coworker").val('');
                }
                return false;
            }

        }).data("ui-autocomplete")._renderItem = function (ul, item) {
            var no_user = context.text.no_user_found,
                create_new_user = context.text.create_new_user;
            if (item.email) {
                return $("<li>").append('<a>' + item.display_name + '</a>').appendTo(ul);
            } else {
                return $("<li>").append('<a><div class="no-user-wrap"><p>' + no_user + '</p> <span class="button-primary">' + create_new_user + '</span></div></a>').appendTo(ul);
            }
        };
    }

    // Register a global custom directive called v-pm-popup-box
};pm.Vue.directive('pm-users', {
    inserted: function (el, binding, vnode) {
        Project.coWorkerSearch(el, binding, vnode);
    }
});

// Register a global custom directive called v-pm-popup-box
pm.Vue.directive('pm-popup-box', {
    inserted: function (el) {
        jQuery(el).dialog({
            autoOpen: false,
            modal: true,
            dialogClass: 'pm-ui-dialog',
            width: 485,
            height: 'auto',
            position: ['middle', 100]
        });
    }
});

// Register a global custom directive called v-pm-popup-box
pm.Vue.directive('pm-user-create-popup-box', {

    inserted: function (el) {
        jQuery(function ($) {
            $(el).dialog({
                autoOpen: false,
                modal: true,
                dialogClass: 'pm-ui-dialog pm-user-ui-dialog',
                width: 400,
                height: 'auto',
                position: ['middle', 100]
            });
        });
    }
});

/***/ }),

/***/ 430:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_project_create_form_vue__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d30d07d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_project_create_form_vue__ = __webpack_require__(432);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_project_create_form_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_3d30d07d_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_project_create_form_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/assets/src/project-lists/project-create-form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3d30d07d", Component.options)
  } else {
    hotAPI.reload("data-v-3d30d07d", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_project_new_user_form_vue__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c3a6521_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_project_new_user_form_vue__ = __webpack_require__(433);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_project_new_user_form_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_4c3a6521_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_project_new_user_form_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/assets/src/project-lists/project-new-user-form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4c3a6521", Component.options)
  } else {
    hotAPI.reload("data-v-4c3a6521", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 432:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        staticClass: "pm-project-form",
        attrs: { action: "", method: "post" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.selfNewProject()
          }
        }
      },
      [
        _c("div", { staticClass: "pm-form-item project-name" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.project.title,
                expression: "project.title"
              }
            ],
            attrs: {
              type: "text",
              name: "project_name",
              id: "project_name",
              placeholder: _vm.text.name_of_the_project,
              value: "",
              size: "45"
            },
            domProps: { value: _vm.project.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.project, "title", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pm-form-item project-category" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.project_category,
                  expression: "project_category"
                }
              ],
              staticClass: "chosen-select",
              staticStyle: { height: "35px" },
              attrs: { name: "project_cat", id: "project_cat" },
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.project_category = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "0" } }, [
                _vm._v(_vm._s(_vm.text.project_category))
              ]),
              _vm._v(" "),
              _vm._l(_vm.categories, function(category) {
                return _c("option", { domProps: { value: category.id } }, [
                  _vm._v(_vm._s(category.title))
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pm-form-item project-detail" }, [
          _c("textarea", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.project.description,
                expression: "project.description"
              }
            ],
            staticClass: "pm-project-description",
            attrs: {
              name: "project_description",
              id: "",
              cols: "50",
              rows: "3",
              placeholder: _vm.text.project_dsc_input
            },
            domProps: { value: _vm.project.description },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.project, "description", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pm-form-item pm-project-role" }, [
          _c(
            "table",
            _vm._l(_vm.selectedUsers, function(projectUser) {
              return _c("tr", { key: "projectUser.id" }, [
                _c("td", [_vm._v(_vm._s(projectUser.display_name))]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: projectUser.roles.data[0].id,
                          expression: "projectUser.roles.data[0].id"
                        }
                      ],
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            projectUser.roles.data[0],
                            "id",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    _vm._l(_vm.roles, function(role) {
                      return _c("option", { domProps: { value: role.id } }, [
                        _vm._v(_vm._s(role.title))
                      ])
                    })
                  )
                ]),
                _vm._v(" "),
                _c("td", [
                  _c(
                    "a",
                    {
                      staticClass: "pm-del-proj-role pm-assign-del-user",
                      attrs: { hraf: "#" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.deleteUser(projectUser)
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "dashicons dashicons-trash" }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title" }, [
                        _vm._v(_vm._s(_vm.text.delete))
                      ])
                    ]
                  )
                ])
              ])
            })
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pm-form-item project-users" }, [
          _c("input", {
            directives: [{ name: "pm-users", rawName: "v-pm-users" }],
            staticClass: "pm-project-coworker",
            attrs: {
              type: "text",
              name: "user",
              placeholder: _vm.text.project_user_input,
              size: "45"
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pm-form-item project-notify" }, [
          _c("label", [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.project_notify,
                  expression: "project_notify"
                }
              ],
              attrs: {
                type: "checkbox",
                name: "project_notify",
                id: "project-notify",
                value: "yes"
              },
              domProps: {
                checked: Array.isArray(_vm.project_notify)
                  ? _vm._i(_vm.project_notify, "yes") > -1
                  : _vm.project_notify
              },
              on: {
                change: function($event) {
                  var $$a = _vm.project_notify,
                    $$el = $event.target,
                    $$c = $$el.checked ? true : false
                  if (Array.isArray($$a)) {
                    var $$v = "yes",
                      $$i = _vm._i($$a, $$v)
                    if ($$el.checked) {
                      $$i < 0 && (_vm.project_notify = $$a.concat([$$v]))
                    } else {
                      $$i > -1 &&
                        (_vm.project_notify = $$a
                          .slice(0, $$i)
                          .concat($$a.slice($$i + 1)))
                    }
                  } else {
                    _vm.project_notify = $$c
                  }
                }
              }
            }),
            _vm._v(
              "\n\t\t\t\t" +
                _vm._s(_vm.text.notify_co_workers) +
                "            \n\t\t\t"
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "submit" }, [
          _vm.is_update
            ? _c("input", {
                staticClass: "button-primary",
                attrs: {
                  type: "submit",
                  name: "update_project",
                  id: "update_project"
                },
                domProps: { value: _vm.text.update_project }
              })
            : _vm._e(),
          _vm._v(" "),
          !_vm.is_update
            ? _c("input", {
                staticClass: "button-primary",
                attrs: {
                  type: "submit",
                  name: "add_project",
                  id: "add_project"
                },
                domProps: { value: _vm.text.create_a_project }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "button project-cancel",
              attrs: { href: "#" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.showHideProjectForm(false)
                }
              }
            },
            [_vm._v(_vm._s(_vm.text.cancel))]
          ),
          _vm._v(" "),
          _c("span", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show_spinner,
                expression: "show_spinner"
              }
            ],
            staticClass: "pm-loading"
          })
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "pm-user-create-popup-box",
            rawName: "v-pm-user-create-popup-box"
          }
        ],
        attrs: { id: "pm-create-user-wrap", title: _vm.text.create_a_new_user }
      },
      [_c("project-new-user-form")],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3d30d07d", esExports)
  }
}

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "pm-create-user-form-wrap" }, [
    _c("div", { staticClass: "pm-error" }),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "pm-user-create-form",
        attrs: { action: "" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.createUser()
          }
        }
      },
      [
        _c("div", { staticClass: "pm-field-wrap" }, [
          _c("label", [_vm._v(_vm._s(_vm.text.username))]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.username,
                expression: "username"
              }
            ],
            attrs: { type: "text", required: "", name: "user_name" },
            domProps: { value: _vm.username },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.username = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pm-field-wrap" }, [
          _c("label", [_vm._v(_vm._s(_vm.text.first_name))]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.first_name,
                expression: "first_name"
              }
            ],
            attrs: { type: "text", name: "first_name" },
            domProps: { value: _vm.first_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.first_name = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pm-field-wrap" }, [
          _c("label", [_vm._v(_vm._s(_vm.text.last_name))]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.last_name,
                expression: "last_name"
              }
            ],
            attrs: { type: "text", name: "last_name" },
            domProps: { value: _vm.last_name },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.last_name = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "pm-field-wrap" }, [
          _c("label", [_vm._v(_vm._s(_vm.text.email))]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.email,
                expression: "email"
              }
            ],
            attrs: { type: "email", required: "", name: "email" },
            domProps: { value: _vm.email },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.email = $event.target.value
              }
            }
          })
        ]),
        _vm._v(" "),
        _c("div", [
          _c("input", {
            staticClass: "button-primary",
            attrs: { type: "submit", name: "create_user" },
            domProps: { value: _vm.text.create_user }
          }),
          _vm._v(" "),
          _c("span", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show_spinner,
                expression: "show_spinner"
              }
            ],
            staticClass: "pm-spinner"
          })
        ])
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4c3a6521", esExports)
  }
}

/***/ }),

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__router__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__do_action_vue__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project_lists_project_create_form_vue__ = __webpack_require__(430);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    data() {
        return {};
    },

    computed: {
        is_project_edit_mode() {
            return this.$root.$store.state.is_project_form_active;
        },

        project() {
            var projects = this.$root.$store.state.projects;

            var index = this.getIndex(projects, this.project_id, 'id');

            if (index !== false) {
                return projects[index];
            }

            return {};
        },

        menu() {
            var projects = this.$root.$store.state.projects;
            var index = this.getIndex(projects, this.project_id, 'id');
            var project = {};

            if (index !== false) {
                project = projects[index];
            } else {
                return [];
            }

            return [{
                route: {
                    name: 'pm_overview',
                    project_id: this.project_id
                },

                name: this.text.overview,
                count: '',
                class: 'overview pm-sm-col-12'
            }, {
                route: {
                    name: 'activities',
                    project_id: this.project_id
                },

                name: this.text.activities,
                count: project.meta.total_activities,
                class: 'activity pm-sm-col-12'
            }, {
                route: {
                    name: 'discussions',
                    project_id: this.project_id
                },

                name: this.text.discussions,
                count: project.meta.total_discussion_boards,
                class: 'message pm-sm-col-12'
            }, {
                route: {
                    name: 'task_lists',
                    project_id: this.project_id
                },

                name: this.text.task_lists,
                count: project.meta.total_task_lists,
                class: 'to-do-list pm-sm-col-12'
            }, {
                route: {
                    name: 'milestones',
                    project_id: this.project_id
                },

                name: this.text.milestones,
                count: project.meta.total_milestones,
                class: 'milestone pm-sm-col-12'
            }, {
                route: {
                    name: 'pm_files',
                    project_id: this.project_id
                },

                name: this.text.files,
                count: project.meta.total_files,
                class: 'files pm-sm-col-12'
            }];
        }
    },

    created() {
        this.getProject();
        this.getProjectCategories();
        this.getRoles();
    },

    components: {
        'do-action': __WEBPACK_IMPORTED_MODULE_1__do_action_vue__["a" /* default */],
        'edit-project': __WEBPACK_IMPORTED_MODULE_2__project_lists_project_create_form_vue__["a" /* default */]
    },

    methods: {
        showProjectAction() {
            this.$root.$store.commit('showHideProjectDropDownAction', {
                status: 'toggle',
                project_id: this.project_id
            });
        },

        selfProjectMarkDone(project) {
            var project = {
                id: project.id,
                status: project.status === 'complete' ? 'incomplete' : 'complete'
            },
                self = this;

            this.updateProject(project, function (project) {
                self.$root.$store.commit('showHideProjectDropDownAction', {
                    status: false,
                    project_id: self.project_id
                });
            });
        }
    }
});

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(265)(undefined);
// imports


// module
exports.push([module.i, "\n.pm-project-header .router-link-active {\n    border-bottom: solid 2px #019dd6 !important;\n    color: #000000 !important;\n}\n", ""]);

// exports


/***/ }),

/***/ 436:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_header_vue__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_267ee29b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_header_vue__ = __webpack_require__(437);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(438)
}
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_267ee29b_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_header_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/assets/src/common/header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-267ee29b", Component.options)
  } else {
    hotAPI.reload("data-v-267ee29b", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 437:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "pm-top-bar pm-no-padding pm-project-header pm-project-head"
    },
    [
      _c(
        "div",
        { staticClass: "pm-row pm-no-padding pm-border-bottom" },
        [
          _c("div", { staticClass: "pm-col-6 pm-project-detail" }, [
            _c("h3", [
              _c("span", { staticClass: "pm-project-title" }, [
                _vm._v(_vm._s(_vm.project.title))
              ]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "pm-icon-edit pm-project-edit-link small-text",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.showHideProjectForm("toggle")
                    }
                  }
                },
                [
                  _c("span", { staticClass: "dashicons dashicons-edit" }),
                  _vm._v(" "),
                  _c("span", { staticClass: "text" }, [
                    _vm._v(_vm._s(_vm.text.edit))
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "detail" }, [
              _vm._v(_vm._s(_vm.project.description))
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "pm-completed-wrap" }, [
            _vm.project.status === "complete"
              ? _c("div", { staticClass: "ribbon-green" }, [
                  _vm._v(_vm._s(_vm.text.completed))
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.project.status === "incomplete"
              ? _c("div", { staticClass: "ribbon-green incomplete" }, [
                  _vm._v(_vm._s(_vm.text.incomplete))
                ])
              : _vm._e()
          ]),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass:
                "pm-col-6 pm-last-col pm-top-right-btn pm-text-right show_desktop_only"
            },
            [
              _c("div", { staticClass: "pm-project-action" }, [
                _c("span", {
                  staticClass:
                    "dashicons dashicons-admin-generic pm-settings-bind",
                  attrs: { title: _vm.text.Project_Actions },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.showProjectAction()
                    }
                  }
                }),
                _vm._v(" "),
                _vm.project.settings_hide
                  ? _c("ul", { staticClass: "pm-settings" }, [
                      _c("li", [
                        _c("span", { staticClass: "pm-spinner" }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            attrs: {
                              href: "#",
                              title: _vm.text.delete_project
                            },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.deleteProject(_vm.project.id)
                              }
                            }
                          },
                          [
                            _c("span", {
                              staticClass: "dashicons dashicons-trash"
                            }),
                            _vm._v(" "),
                            _c("span", [_vm._v(_vm._s(_vm.text.delete))])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c("span", { staticClass: "pm-spinner" }),
                        _vm._v(" "),
                        _c(
                          "a",
                          {
                            attrs: { href: "#" },
                            on: {
                              click: function($event) {
                                $event.preventDefault()
                                _vm.selfProjectMarkDone(_vm.project)
                              }
                            }
                          },
                          [
                            _vm.project.status === "incomplete"
                              ? _c("span", {
                                  staticClass: "dashicons dashicons-yes"
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.project.status === "incomplete"
                              ? _c("span", [_vm._v(_vm._s(_vm.text.complete))])
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.project.status === "complete"
                              ? _c("span", {
                                  staticClass: "dashicons dashicons-undo"
                                })
                              : _vm._e(),
                            _vm._v(" "),
                            _vm.project.status === "complete"
                              ? _c("span", [_vm._v(_vm._s(_vm.text.restore))])
                              : _vm._e()
                          ]
                        )
                      ])
                    ])
                  : _vm._e()
              ])
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "clearfix" }),
          _vm._v(" "),
          _c("transition", { attrs: { name: "slide" } }, [
            _vm.is_project_edit_mode
              ? _c(
                  "div",
                  { staticClass: "pm-edit-project" },
                  [_c("edit-project", { attrs: { is_update: true } })],
                  1
                )
              : _vm._e()
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("div", { staticClass: "pm-row pm-project-group" }, [
        _c(
          "ul",
          [
            _vm._l(_vm.menu, function(item) {
              return _c(
                "li",
                [
                  _c(
                    "router-link",
                    { class: item.class, attrs: { to: item.route } },
                    [
                      _c("span", [_vm._v(_vm._s(item.name))]),
                      _vm._v(" "),
                      _c("div", [_vm._v(_vm._s(item.count))])
                    ]
                  )
                ],
                1
              )
            }),
            _vm._v(" "),
            _c("do-action", { attrs: { hook: "pm-header" } })
          ],
          2
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-267ee29b", esExports)
  }
}

/***/ }),

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(435);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(266)("98fb6740", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-267ee29b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./header.vue", function() {
     var newContent = require("!!../../../../node_modules/css-loader/index.js!../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-267ee29b\",\"scoped\":false,\"hasInlineConfig\":false}!../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0&bustCache!./header.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 439:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['total_pages', 'current_page_number', 'component_name'],

	data() {
		return {
			route_query: this.$route.query
		};
	},

	watch: {
		'$route'(url) {
			this.route_query = url.query;
		}
	},

	methods: {
		pageClass: function (page) {
			if (page == this.current_page_number) {
				return 'page-numbers current';
			}

			return 'page-numbers';
		}
	}
});

/***/ }),

/***/ 440:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_pagination_vue__ = __webpack_require__(439);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_088cfe28_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_pagination_vue__ = __webpack_require__(441);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_pagination_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_088cfe28_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_pagination_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/assets/src/common/pagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-088cfe28", Component.options)
  } else {
    hotAPI.reload("data-v-088cfe28", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 441:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.total_pages > 1
    ? _c("div", [
        _c(
          "div",
          { staticClass: "pm-pagination-wrap" },
          [
            parseInt(_vm.current_page_number) > 1
              ? _c(
                  "router-link",
                  {
                    staticClass: "pm-pagination-btn prev page-numbers",
                    attrs: {
                      to: {
                        name: _vm.component_name,
                        params: {
                          current_page_number: _vm.current_page_number - 1
                        },
                        query: _vm.route_query
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t«\n\t\t")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.total_pages, function(page) {
              return _c(
                "router-link",
                {
                  key: "page",
                  class: _vm.pageClass(page) + " pm-pagination-btn",
                  attrs: {
                    to: {
                      name: _vm.component_name,
                      params: {
                        current_page_number: page
                      },
                      query: _vm.route_query
                    }
                  }
                },
                [_vm._v("\n\t\t\t" + _vm._s(page) + "\n\t\t")]
              )
            }),
            _vm._v(" "),
            parseInt(_vm.current_page_number) < parseInt(_vm.total_pages)
              ? _c(
                  "router-link",
                  {
                    staticClass: "pm-pagination-btn next page-numbers",
                    attrs: {
                      to: {
                        name: _vm.component_name,
                        params: {
                          current_page_number: _vm.current_page_number + 1
                        },
                        query: _vm.route_query
                      }
                    }
                  },
                  [_vm._v("\n\t\t\t»\n\t\t")]
                )
              : _vm._e()
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "pm-clearfix" })
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-088cfe28", esExports)
  }
}

/***/ }),

/***/ 442:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_text_editor_vue__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2027c822_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_text_editor_vue__ = __webpack_require__(444);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_text_editor_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_2027c822_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_text_editor_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/assets/src/common/text-editor.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2027c822", Component.options)
  } else {
    hotAPI.reload("data-v-2027c822", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({

    //mixins: pm_todo_list_mixins( PM_Todo_List.todo_list_text_editor ),    

    // Get passing data for this component.
    props: ['editor_id', 'content'],

    // Initial action for this component
    created: function () {
        var self = this;
        this.$root.$on('after_comment', this.afterComment);
        // After ready dom
        pm.Vue.nextTick(function () {
            // Remove the editor
            tinymce.execCommand('mceRemoveEditor', true, self.editor_id);

            // Instantiate the editor
            var settings = {
                selector: 'textarea#' + self.editor_id,
                menubar: false,
                placeholder: self.text.write_a_comments,
                branding: false,

                setup: function (editor) {
                    editor.on('change', function () {
                        self.content.html = editor.getContent();
                    });
                    editor.on('keyup', function (event) {
                        self.content.html = editor.getContent();
                    });
                    editor.on('NodeChange', function () {
                        self.content.html = editor.getContent();
                    });
                },

                external_plugins: {
                    'placeholder': PM_Vars.assets_url + 'js/tinymce/plugins/placeholder/plugin.min.js'
                },

                fontsize_formats: '10px 11px 13px 14px 16px 18px 22px 25px 30px 36px 40px 45px 50px 60px 65px 70px 75px 80px',
                font_formats: 'Arial=arial,helvetica,sans-serif;' + 'Comic Sans MS=comic sans ms,sans-serif;' + 'Courier New=courier new,courier;' + 'Georgia=georgia,palatino;' + 'Lucida=Lucida Sans Unicode, Lucida Grande, sans-serif;' + 'Tahoma=tahoma,arial,helvetica,sans-serif;' + 'Times New Roman=times new roman,times;' + 'Trebuchet MS=trebuchet ms,geneva;' + 'Verdana=verdana,geneva;',
                plugins: 'placeholder textcolor colorpicker wplink wordpress',
                toolbar1: 'shortcodes bold italic strikethrough bullist numlist alignleft aligncenter alignjustify alignright link',
                toolbar2: 'formatselect forecolor backcolor underline blockquote hr code',
                toolbar3: 'fontselect fontsizeselect removeformat undo redo'
            };

            if (self.tinyMCE_settings) {
                settings = jQuery.extend(settings, self.tinyMCE_settings);
            }

            tinymce.init(settings);
        });

        //tinymce.execCommand( 'mceRemoveEditor', true, id );
        //tinymce.execCommand( 'mceAddEditor', true, id );
        //tinymce.execCommand( 'mceAddControl', true, id );
    },

    methods: {
        afterComment: function () {
            tinyMCE.get(this.editor_id).setContent('');
        }
    }
});

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("textarea", {
      directives: [
        {
          name: "model",
          rawName: "v-model",
          value: _vm.content.html,
          expression: "content.html"
        }
      ],
      attrs: { id: _vm.editor_id },
      domProps: { value: _vm.content.html },
      on: {
        input: function($event) {
          if ($event.target.composing) {
            return
          }
          _vm.$set(_vm.content, "html", $event.target.value)
        }
      }
    })
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2027c822", esExports)
  }
}

/***/ }),

/***/ 445:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_file_uploader_vue__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f00473fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_file_uploader_vue__ = __webpack_require__(448);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_file_uploader_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_f00473fe_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_file_uploader_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/assets/src/common/file-uploader.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f00473fe", Component.options)
  } else {
    hotAPI.reload("data-v-f00473fe", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 446:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['files', 'delete'],

	// Initial action for this component
	created: function () {
		//this.files = typeof files.data ===

		var self = this;

		// Instantiate file upload, After dom ready
		pm.Vue.nextTick(function () {
			new PM_Uploader('pm-upload-pickfiles', 'pm-upload-container', self);
		});
	},

	methods: {
		/**
   * Set the uploaded file
   *
   * @param  object file_res
   *
   * @return void
   */
		fileUploaded: function (file_res) {

			if (typeof this.files == 'undefined') {
				this.files = [];
			}

			this.files.push(file_res.res.file);
		},

		/**
   * Delete file
   *
   * @param  object file_id
   *
   * @return void
   */
		deletefile: function (file_id) {
			if (!confirm(this.text.are_you_sure)) {
				return;
			}
			var self = this;
			var index = self.getIndex(self.files, file_id, 'id');

			if (index !== false) {
				self.files.splice(index, 1);
				this.delete.push(file_id);
			}
		}
	}
});

/***/ }),

/***/ 448:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "pm-attachment-area" }, [
    _c("div", { attrs: { id: "pm-upload-container" } }, [
      _c(
        "div",
        { staticClass: "pm-upload-filelist" },
        _vm._l(_vm.files, function(file) {
          return _c("div", { key: file.id, staticClass: "pm-uploaded-item" }, [
            _c("a", { attrs: { href: file.url, target: "_blank" } }, [
              _c("img", { attrs: { src: file.thumb, alt: file.name } })
            ]),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "button",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    _vm.deletefile(file.id)
                  }
                }
              },
              [_vm._v(_vm._s(_vm.text.delete_file))]
            )
          ])
        })
      ),
      _vm._v(" "),
      _c("span", {
        domProps: { innerHTML: _vm._s(_vm.text.attach_from_computer) }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f00473fe", esExports)
  }
}

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_text_editor_vue__ = __webpack_require__(442);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__common_file_uploader_vue__ = __webpack_require__(445);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["a"] = ({
	props: ['discuss'],

	data() {
		return {
			submit_disabled: false,
			show_spinner: false,
			content: {
				html: typeof this.discuss.description == 'undefined' ? '' : this.discuss.description
			},
			milestone_id: typeof this.discuss.milestone === 'undefined' ? '-1' : this.discuss.milestone.data.id,
			files: typeof this.discuss.files === 'undefined' ? [] : this.discuss.files.data,
			deleted_files: [],
			pfiles: []
		};
	},

	watch: {
		milestone_id(milestone_id) {
			this.discuss.milestone_id = milestone_id;
		},
		/**
         * Observe onchange comment message
         *
         * @param string new_content 
         * 
         * @type void
         */
		content: {
			handler: function (new_content) {
				this.discuss.description = new_content.html;
			},

			deep: true
		}
	},

	components: {
		'text-editor': __WEBPACK_IMPORTED_MODULE_0__common_text_editor_vue__["a" /* default */],
		'file-uploader': __WEBPACK_IMPORTED_MODULE_1__common_file_uploader_vue__["a" /* default */]
	},
	computed: {
		milestones() {
			return this.$root.$store.state.milestones;
		},
		/**
         * Editor ID
         * 
         * @return string
         */
		editor_id: function () {
			var discuss_id = typeof this.discuss.id === 'undefined' ? '' : '-' + this.discuss.id;
			return 'pm-discuss-editor' + discuss_id;
		}
	},
	methods: {
		filesChange($event, $files) {
			this.pfiles = $files;
		},

		formAction() {
			var self = this;
			var discuss_id = typeof self.discuss.id === 'undefined' ? false : this.discuss.id;

			var args = {
				title: this.discuss.title,
				description: typeof this.discuss.description === 'undefined' ? '' : this.discuss.description,
				milestone_id: this.discuss.milestone_id,
				order: 0,
				deleted_files: this.deleted_files,
				files: this.files
			};

			if (discuss_id) {
				args.discuss_id = discuss_id;
				self.updateDiscuss(args);
			} else {
				args.callback = function (res) {
					self.lazyAction();
				};
				self.newDiscuss(args);
			}
		}
	}

});

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_new_discuss_form_vue__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56dd17e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_new_discuss_form_vue__ = __webpack_require__(495);
var disposed = false
var normalizeComponent = __webpack_require__(4)
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_bustCache_new_discuss_form_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_56dd17e8_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_bustCache_new_discuss_form_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "views/assets/src/discussions/new-discuss-form.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {  return key !== "default" && key.substr(0, 2) !== "__"})) {  console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-56dd17e8", Component.options)
  } else {
    hotAPI.reload("data-v-56dd17e8", Component.options)
' + '  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "form",
      {
        staticClass: "pm-message-form",
        attrs: { id: "myForm", enctype: "multipart/form-data" },
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.formAction()
          }
        }
      },
      [
        _c("div", { staticClass: "item title" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.discuss.title,
                expression: "discuss.title"
              }
            ],
            attrs: {
              name: "title",
              required: "required",
              type: "text",
              id: "message_title",
              value: "",
              placeholder: _vm.text.enter_message_title
            },
            domProps: { value: _vm.discuss.title },
            on: {
              input: function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.$set(_vm.discuss, "title", $event.target.value)
              }
            }
          })
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "item detail" },
          [
            _c("text-editor", {
              attrs: { editor_id: _vm.editor_id, content: _vm.content }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "item milestone" }, [
          _c(
            "select",
            {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.milestone_id,
                  expression: "milestone_id"
                }
              ],
              on: {
                change: function($event) {
                  var $$selectedVal = Array.prototype.filter
                    .call($event.target.options, function(o) {
                      return o.selected
                    })
                    .map(function(o) {
                      var val = "_value" in o ? o._value : o.value
                      return val
                    })
                  _vm.milestone_id = $event.target.multiple
                    ? $$selectedVal
                    : $$selectedVal[0]
                }
              }
            },
            [
              _c("option", { attrs: { value: "-1" } }, [
                _vm._v(
                  "\n\t\t\t           " +
                    _vm._s(_vm.text.milestones_select) +
                    "\n\t\t\t        "
                )
              ]),
              _vm._v(" "),
              _vm._l(_vm.milestones, function(milestone) {
                return _c("option", { domProps: { value: milestone.id } }, [
                  _vm._v(
                    "\n\t\t\t            " +
                      _vm._s(milestone.title) +
                      "\n\t\t\t        "
                  )
                ])
              })
            ],
            2
          )
        ]),
        _vm._v(" "),
        _c("file-uploader", {
          attrs: { files: _vm.files, delete: _vm.deleted_files }
        }),
        _vm._v(" "),
        _c("div", { staticClass: "notify-users" }, [
          _c("h2", { staticClass: "pm-box-title" }, [
            _vm._v(
              " \n\t        \t\t" +
                _vm._s(_vm.text.notify_user) +
                "               \n\t        \t\t"
            ),
            _c(
              "label",
              { staticClass: "pm-small-title", attrs: { for: "select-all" } },
              [
                _c("input", {
                  staticClass: "pm-toggle-checkbox",
                  attrs: {
                    type: "checkbox",
                    name: "select-all",
                    id: "select-all"
                  }
                }),
                _vm._v(
                  " \n\t        \t\t\t" +
                    _vm._s(_vm.text.select_all) +
                    "\n\t        \t\t"
                )
              ]
            )
          ]),
          _vm._v(" "),
          _vm._m(0)
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "submit" }, [
          !_vm.discuss.id
            ? _c("input", {
                staticClass: "button-primary",
                attrs: {
                  type: "submit",
                  name: "create_message",
                  id: "create_message"
                },
                domProps: { value: _vm.text.add_message }
              })
            : _vm._e(),
          _vm._v(" "),
          _vm.discuss.id
            ? _c("input", {
                staticClass: "button-primary",
                attrs: {
                  type: "submit",
                  name: "update_message",
                  id: "update_message"
                },
                domProps: { value: _vm.text.update_message }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "a",
            {
              staticClass: "message-cancel button-secondary",
              attrs: { href: "" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.showHideDiscussForm(false, _vm.discuss)
                }
              }
            },
            [_vm._v(_vm._s(_vm.text.cancel))]
          ),
          _vm._v(" "),
          _c("span", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.show_spinner,
                expression: "show_spinner"
              }
            ],
            staticClass: "pm-spinner"
          })
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "pm-user-list" }, [
      _c("li", [
        _c("label", { attrs: { for: "pm_notify_1" } }, [
          _c("input", {
            attrs: {
              type: "checkbox",
              name: "notify_user[]",
              id: "pm_notify_1",
              value: "1"
            }
          }),
          _vm._v(" \n\t\t            \t\tAdmin\n\t\t            \t")
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "clearfix" })
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-56dd17e8", esExports)
  }
}

/***/ }),

/***/ 503:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common_header_vue__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__new_discuss_form_vue__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_pagination_vue__ = __webpack_require__(440);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["a"] = ({
    beforeRouteEnter(to, from, next) {
        next(vm => {
            vm.getGlobalMilestones();
            vm.discussQuery();
        });
    },
    data() {
        return {
            current_page_number: 1,
            loading: true
        };
    },
    watch: {
        '$route'(route) {
            this.discussQuery();
        }
    },
    components: {
        'pm-header': __WEBPACK_IMPORTED_MODULE_0__common_header_vue__["a" /* default */],
        'new-discuss-form': __WEBPACK_IMPORTED_MODULE_1__new_discuss_form_vue__["a" /* default */],
        'pm-pagination': __WEBPACK_IMPORTED_MODULE_2__common_pagination_vue__["a" /* default */]
    },
    computed: {
        discussTemplate() {
            return this.$store.state.discuss_template;
        },
        blankTemplate() {
            return this.$store.state.blank_template;
        },
        is_discuss_form_active() {
            return this.$store.state.is_discuss_form_active;
        },

        discussion() {
            return this.$store.state.discussion;
        },

        total_discussion_page() {
            return this.$store.state.meta.total_pages;
        }
    },
    methods: {
        discussQuery() {
            var self = this;

            var conditions = {
                with: 'comments',
                per_page: 2,
                page: this.setCurrentPageNumber()
            };

            var args = {
                conditions: conditions,
                callback: function () {
                    self.loading = false;
                    self.lazyAction();
                    pm.NProgress.done();
                }
            };

            this.getDiscussion(args);
        },

        deleteSelfDiscuss(id) {
            var self = this;
            var args = {
                discuss_id: id,
                callback: function () {
                    self.lazyAction();
                }
            };

            self.deleteDiscuss(args);
        }
    }
});

/***/ }),

/***/ 568:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "wrap pm pm-front-end" },
    [
      _c("pm-header"),
      _vm._v(" "),
      _vm.loading
        ? _c("div", { staticClass: "pm-data-load-before" }, [_vm._m(0)])
        : _vm._e(),
      _vm._v(" "),
      _vm.blankTemplate
        ? _c("div", { staticClass: "pm-blank-template discussion" }, [
            _c(
              "div",
              { staticClass: "pm-content" },
              [
                _c("h3", { staticClass: "pm-page-title" }, [
                  _vm._v(_vm._s(_vm.text.discussions))
                ]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.text.discuss_define) +
                      "\n            "
                  )
                ]),
                _vm._v(" "),
                _c("div", [
                  _c(
                    "a",
                    {
                      staticClass:
                        "pm-btn pm-plus-white pm-new-message-btn pm-btn-uppercase",
                      attrs: { href: "", id: "pm-add-message" },
                      on: {
                        click: function($event) {
                          $event.preventDefault()
                          _vm.showHideDiscussForm("toggle")
                        }
                      }
                    },
                    [
                      _vm._v(
                        " \n                        " +
                          _vm._s(_vm.text.add_new_discussion) +
                          " \n                    "
                      )
                    ]
                  )
                ]),
                _vm._v(" "),
                _c("transition", { attrs: { name: "slide" } }, [
                  _vm.is_discuss_form_active
                    ? _c(
                        "div",
                        { staticClass: "pm-new-message-form" },
                        [
                          _c("h3", [
                            _vm._v(_vm._s(_vm.text.create_a_new_message))
                          ]),
                          _vm._v(" "),
                          _c("new-discuss-form", { attrs: { discuss: {} } })
                        ],
                        1
                      )
                    : _vm._e()
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "pm-list-content" }, [
                  _c("h3", { staticClass: "pm-why-for pm-page-title" }, [
                    _vm._v(" " + _vm._s(_vm.text.when_use_discuss) + " ")
                  ]),
                  _vm._v(" "),
                  _c("ul", { staticClass: "pm-list" }, [
                    _c("li", [
                      _vm._v(
                        " " + _vm._s(_vm.text.to_discuss_work_matter) + " "
                      )
                    ]),
                    _vm._v(" "),
                    _c("li", [_vm._v(" " + _vm._s(_vm.text.to_exchange_file))]),
                    _vm._v(" "),
                    _c("li", [_vm._v(" " + _vm._s(_vm.text.to_discuss_group))]),
                    _vm._v(" "),
                    _c("li", [
                      _vm._v(" " + _vm._s(_vm.text.to_open_discuss) + " ")
                    ])
                  ])
                ])
              ],
              1
            )
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.discussTemplate
        ? _c(
            "div",
            [
              _c(
                "div",
                { staticClass: "pm-row discussion" },
                [
                  _c("div", [
                    _c(
                      "a",
                      {
                        staticClass:
                          "pm-btn pm-plus-white pm-new-message-btn pm-btn-uppercase",
                        attrs: { href: "", id: "pm-add-message" },
                        on: {
                          click: function($event) {
                            $event.preventDefault()
                            _vm.showHideDiscussForm("toggle")
                          }
                        }
                      },
                      [
                        _vm._v(
                          " \n                    " +
                            _vm._s(_vm.text.add_new_discussion) +
                            " \n                "
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("transition", { attrs: { name: "slide" } }, [
                    _vm.is_discuss_form_active
                      ? _c(
                          "div",
                          {
                            staticClass:
                              "pm-form pm-new-message-form pm-col-6 pm-sm-col-12"
                          },
                          [
                            _c("h3", [
                              _vm._v(_vm._s(_vm.text.create_a_new_message))
                            ]),
                            _vm._v(" "),
                            _c("new-discuss-form", { attrs: { discuss: {} } })
                          ],
                          1
                        )
                      : _vm._e()
                  ])
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "pm-row pm-message-page" }, [
                _c(
                  "div",
                  { staticClass: "pm-message-list pm-col-12 pm-sm-col-12" },
                  [
                    _c("div", { staticClass: "pm-box-title" }, [
                      _vm._v(_vm._s(_vm.text.discussion_list))
                    ]),
                    _vm._v(" "),
                    _c(
                      "ul",
                      { staticClass: "dicussion-list" },
                      _vm._l(_vm.discussion, function(discuss) {
                        return _c(
                          "li",
                          { key: "discuss.id", staticClass: "pm-col-12" },
                          [
                            _c(
                              "div",
                              { staticClass: "pm-col-9" },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "pm-pagination-btn prev page-numbers",
                                    attrs: {
                                      to: {
                                        name: "individual_discussions",
                                        params: { discussion_id: discuss.id }
                                      }
                                    }
                                  },
                                  [
                                    _c("img", {
                                      staticClass: "avatar avatar-48 photo",
                                      attrs: {
                                        alt: discuss.creator.data.display_name,
                                        src: discuss.creator.data.avatar_url,
                                        height: "48",
                                        width: "48"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c("div", [
                                      _vm._v(
                                        "\n                                   " +
                                          _vm._s(discuss.title) +
                                          "                    \n                                "
                                      )
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "dicussion-meta" }, [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(_vm.text.by) +
                                      " \n                                "
                                  ),
                                  _c(
                                    "a",
                                    {
                                      attrs: {
                                        href: "#",
                                        title: discuss.creator.data.display_name
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(
                                            discuss.creator.data.display_name
                                          ) +
                                          "\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(
                                    " \n                                 " +
                                      _vm._s(_vm.text.on) +
                                      "\n                                " +
                                      _vm._s(discuss.created_at.date) +
                                      "                  \n                            "
                                  )
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "pm-col-1" }, [
                              _c(
                                "span",
                                { staticClass: "pm-message-action pm-right" },
                                [
                                  _c("a", {
                                    staticClass:
                                      "pm-msg-edit dashicons dashicons-edit",
                                    attrs: { href: "#" },
                                    on: {
                                      click: function($event) {
                                        $event.preventDefault()
                                        _vm.showHideDiscussForm(
                                          "toggle",
                                          discuss
                                        )
                                      }
                                    }
                                  }),
                                  _vm._v(" "),
                                  _c(
                                    "a",
                                    {
                                      staticClass: "delete-message",
                                      attrs: {
                                        href: "",
                                        title: "Delete this message",
                                        "data-msg_id": "97",
                                        "data-project_id": "60",
                                        "data-confirm":
                                          "Are you sure to delete this message?"
                                      },
                                      on: {
                                        click: function($event) {
                                          $event.preventDefault()
                                          _vm.deleteSelfDiscuss(discuss.id)
                                        }
                                      }
                                    },
                                    [
                                      _c("span", {
                                        staticClass: "dashicons dashicons-trash"
                                      })
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "pm-unlock" })
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              {
                                staticClass:
                                  "pm-col-2 pm-last-col pm-right comment-count"
                              },
                              [
                                _c(
                                  "router-link",
                                  {
                                    staticClass:
                                      "pm-pagination-btn prev page-numbers",
                                    attrs: {
                                      to: {
                                        name: "individual_discussions",
                                        params: { discussion_id: discuss.id }
                                      }
                                    }
                                  },
                                  [
                                    _vm._v(
                                      "\n                                " +
                                        _vm._s(discuss.meta.total_comments) +
                                        " " +
                                        _vm._s(_vm.text.comments) +
                                        " \n                            "
                                    )
                                  ]
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "clear" }),
                            _vm._v(" "),
                            discuss.edit_mode
                              ? _c("new-discuss-form", {
                                  attrs: { discuss: discuss }
                                })
                              : _vm._e()
                          ],
                          1
                        )
                      })
                    )
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "clear" })
              ]),
              _vm._v(" "),
              _c("pm-pagination", {
                attrs: {
                  total_pages: _vm.total_discussion_page,
                  current_page_number: _vm.current_page_number,
                  component_name: "discussion_pagination"
                }
              })
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "loadmoreanimation" }, [
      _c("div", { staticClass: "load-spinner" }, [
        _c("div", { staticClass: "rect1" }),
        _vm._v(" "),
        _c("div", { staticClass: "rect2" }),
        _vm._v(" "),
        _c("div", { staticClass: "rect3" }),
        _vm._v(" "),
        _c("div", { staticClass: "rect4" }),
        _vm._v(" "),
        _c("div", { staticClass: "rect5" })
      ])
    ])
  }
]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b574071e", esExports)
  }
}

/***/ })

});