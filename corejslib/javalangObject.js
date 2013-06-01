/* ------------------
 * java.lang.Object
 * ------------------ */

(function ($env) {
  $env.registerClass("java.lang.Object", function($env) {
    function ObjectClass() {
    }
    ObjectClass.prototype.constructor = ObjectClass;

    ObjectClass.prototype.new\u0393 = function() {
      return this;
    }

    ObjectClass.prototype.getClass\u0393 = function() {
      return this.$classData.cls;
    }

    // Bridge for getClass()
    ObjectClass.prototype.getClass = function() {
      return this.getClass\u0393();
    }

    ObjectClass.prototype.hashCode\u0393 = function() {
      // TODO
      return 42;
    }

    // Bridge for hashCode()
    ObjectClass.prototype.hashCode = function() {
      return this.hashCode\u0393();
    }

    ObjectClass.prototype.equals\u0393O = function(rhs) {
      return this === rhs;
    }

    // Bridge for equals(Object)
    ObjectClass.prototype.equals = function(that) {
      return this.equals\u0393O(that);
    }

    ObjectClass.prototype.clone\u0393 = function() {
      if ($env.isInstance(this, "java.lang.Cloneable")) {
        throw new this.classes["scala.NotImplementedError"].jsconstructor();
      } else {
        throw new this.classes["java.lang.CloneNotSupportedException"].jsconstructor();
      }
    }

    // Bridge for clone()
    ObjectClass.prototype.clone = function() {
      return this.clone\u0393();
    }

    ObjectClass.prototype.toString\u0393 = function() {
      // getClass().getName() + "@" + Integer.toHexString(hashCode())
      var className = this.getClass\u0393().getName\u0393();
      var hashCode = this.hashCode\u0393();
      return className + '@' + hashCode.toString(16);
    }

    // Bridge for toString()
    ObjectClass.prototype.toString = function() {
      return this.toString\u0393();
    }

    ObjectClass.prototype.notify\u0393 = function() {}
    ObjectClass.prototype.notifyAll\u0393 = function() {}
    ObjectClass.prototype.wait\u0393J = function() {}
    ObjectClass.prototype.wait\u0393JI = function() {}
    ObjectClass.prototype.wait\u0393 = function() {}

    ObjectClass.prototype.finalize\u0393 = function() {}

    // Constructor bridge
    function JSObjectClass() {
      ObjectClass.call(this);
      return this.new\u0393();
    }
    JSObjectClass.prototype = ObjectClass.prototype;

    $env.createClass("java.lang.Object", ObjectClass, JSObjectClass, null, {
      "java.lang.Object": true
    });
  });
})($ScalaJSEnvironment);
