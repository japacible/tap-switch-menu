Polymer({
  is: 'tap-switch-menu',

  properties: {
    itemListOne_: {
      type: Array,
      value: function() {
        return [
          {'name': 'foo'},
          {'name': 'bar'},
          {'name': 'baz'},
          {'name': 'qux'},
        ];
      }
    },

    itemListTwo_: {
      type: Array,
      value: function() {
        return [
          {'name': 'foofoo'},
          {'name': 'barbar'},
          {'name': 'bazbaz'},
          {'name': 'quxqux'},
        ];
      }
    },

    showFirstMenu_: {
      type: Boolean,
      value: true,
    },
  },

  onTap_: function() {
    this.showFirstMenu_ = !this.showFirstMenu_;
  },
});
