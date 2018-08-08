
require('./config$');
require('./importScripts$');
function success() {
require('../..//app');
require('../../page/component/index');
require('../../page/component/action-sheet/action-sheet');
require('../../page/component/button/button');
require('../../page/component/canvas/canvas');
require('../../page/component/checkbox/checkbox');
require('../../page/component/form/form');
require('../../page/component/icon/icon');
require('../../page/component/image/image');
require('../../page/component/input/input');
require('../../page/component/label/label');
require('../../page/component/loading/loading');
require('../../page/component/map/map');
require('../../page/component/modal/modal');
require('../../page/component/navigator/navigate');
require('../../page/component/navigator/redirect');
require('../../page/component/navigator/reLaunch');
require('../../page/component/navigator/navigator');
require('../../page/component/picker/picker');
require('../../page/component/picker-view/picker-view');
require('../../page/component/progress/progress');
require('../../page/component/radio/radio');
require('../../page/component/scroll-view/scroll-view');
require('../../page/component/slide-tab/slide-tab');
require('../../page/component/slider/slider');
require('../../page/component/swiper/swiper');
require('../../page/component/switch/switch');
require('../../page/component/text/text');
require('../../page/component/textarea/textarea');
require('../../page/component/toast/toast');
require('../../page/component/view/view');
require('../../page/component/lifestyle/lifestyle');
require('../../page/component/contact-button/contact-button');
require('../../page/API/index/index');
require('../../page/API/share/share');
require('../../page/API/action-sheet/action-sheet');
require('../../page/API/alert/alert');
require('../../page/API/animation/animation');
require('../../page/API/canvas/canvas');
require('../../page/API/card-pack/card-pack');
require('../../page/API/choose-city/choose-city');
require('../../page/API/choose-location/choose-location');
require('../../page/API/confirm/confirm');
require('../../page/API/contact/contact');
require('../../page/API/date-picker/date-picker');
require('../../page/API/option-menu/option-menu');
require('../../page/API/download-file/download-file');
require('../../page/API/file/file');
require('../../page/API/get-auth-code/get-auth-code');
require('../../page/API/get-location/get-location');
require('../../page/API/get-network-type/get-network-type');
require('../../page/API/get-system-info/get-system-info');
require('../../page/API/get-server-time/get-server-time');
require('../../page/API/get-user-info/get-user-info');
require('../../page/API/get-image-info/get-image-info');
require('../../page/API/image/image');
require('../../page/API/keyboard/keyboard');
require('../../page/API/loading/loading');
require('../../page/API/make-phone-call/make-phone-call');
require('../../page/API/multi-level-select/multi-level-select');
require('../../page/API/navigation-bar-loading/navigation-bar-loading');
require('../../page/API/navigator/navigator');
require('../../page/API/open-location/open-location');
require('../../page/API/pull-down-refresh/pull-down-refresh');
require('../../page/API/pay-sign-center/pay-sign-center');
require('../../page/API/request/request');
require('../../page/API/request-payment/request-payment');
require('../../page/API/scan-code/scan-code');
require('../../page/API/set-navigation-bar/set-navigation-bar');
require('../../page/API/show-auth-guide/show-auth-guide');
require('../../page/API/storage/storage');
require('../../page/API/toast/toast');
require('../../page/API/upload-file/upload-file');
require('../../page/API/vibrate/vibrate');
require('../../page/API/watch-shake/watch-shake');
require('../../page/API/clipboard/clipboard');
require('../../page/API/bluetooth/bluetooth');
require('../../page/API/rsa/rsa');
require('../../page/API/page-scroll-to/page-scroll-to');
require('../../page/API/websocket/websocket');
require('../../page/API/zm-credit-borrow/zm-credit-borrow');
require('../../page/API/create-selector-query/create-selector-query');
require('../../page/API/sdk-version/sdk-version');
require('../../page/API/user-capture-screen/user-capture-screen');
require('../../page/API/screen/screen');
require('../../page/API/compress-image/compress-image');
require('../../page/API/report-analytics/report-analytics');
require('../../page/API/text-risk-identification/text-risk-identification');
require('../../page/biz/index');
require('../../page/biz/pages/collapse/index');
require('../../page/biz/pages/dropdown/index');
require('../../page/biz/pages/error-view/index');
require('../../page/biz/pages/grid/index');
require('../../page/biz/pages/list/index');
require('../../page/biz/pages/tag/index');
require('../../page/test/test');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
