NG_DOCS={
  "sections": {
    "api": "API Reference",
    "guide": "Guide"
  },
  "pages": [
    {
      "section": "api",
      "id": "index",
      "shortName": "API Reference",
      "type": "overview",
      "moduleName": "API Reference",
      "shortDescription": "angular-translate - API Reference",
      "keywords": "angular-translate api checkout guide overview reference works"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate",
      "shortName": "pascalprecht.translate",
      "type": "overview",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "The main module which holds everything together.",
      "keywords": "api holds main module overview pascalprecht translate"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translate",
      "shortName": "pascalprecht.translate.$translate",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "The $translate service is the actual core of angular-translate. It expects a translation id",
      "keywords": "$interpolate $log $q $rootscope $scope $translate $translaterefreshend $translaterefreshstart actual angular-translate api app array asynchronous asynchronously background broadcast care case change choosed class cloakclassname compiling configured contents core current currently data directive drop dynamic en_us enabled error events existent expects fallback fallbacklanguage false file finished function handling hash headline_text hello instant instantly internal interpolate interpolateparams invoked isn ispostcompilingenabled iteration key langkey language languages load loaded loaders loading method module object optional parameters params pascalprecht pointed post preferred preferredlanguage process promise proposedlanguage refresh refreshed refreshes refreshing registered reject reload remember represents resolved returns rules runtime service set sets skipped stack start storage storagekey store storing string table tables takes target tells text throw token translate translate-cloak translatedtext translation translationid usefallbacklanguage values version"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateCookieStorage",
      "shortName": "pascalprecht.translate.$translateCookieStorage",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Abstraction layer for cookieStore. This service is used when telling angular-translate",
      "keywords": "$cookiestore $translatecookiestorage abstraction angular-translate api cookiestorage cookiestore function item layer object pascalprecht returns service set sets storage telling translate"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateDefaultInterpolation",
      "shortName": "pascalprecht.translate.$translateDefaultInterpolation",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses angular&#39;s $interpolate services to interpolate strings against some values.",
      "keywords": "$identifier $interpolate $translatedefaultinterpolation $translateinterpolator agains angular angulars api current currently function getinterpolationidentifier identifier interpolate interpolated interpolates interpolation interpolator key language locale object params pascalprecht returns service services setlocale sets string strings translate values"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateLocalStorage",
      "shortName": "pascalprecht.translate.$translateLocalStorage",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Abstraction layer for localStorage. This service is used when telling angular-translate",
      "keywords": "$translatelocalstorage $window abstraction angular-translate api function item layer localstorage object pascalprecht returns service set sets storage telling translate"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateMessageFormatInterpolation",
      "shortName": "pascalprecht.translate.$translateMessageFormatInterpolation",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses MessageFormat.js to interpolate strings against some values.",
      "keywords": "$identifier $translateinterpolator $translatemessageformatinterpolation agains api current currently function getinterpolationidentifier identifier interpolate interpolated interpolates interpolation interpolator js key language locale messageformat object params pascalprecht returns service setlocale sets string strings translate translate_mf_interpolation_cache values"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateMissingTranslationHandlerLog",
      "shortName": "pascalprecht.translate.$translateMissingTranslationHandlerLog",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses angular&#39;s $log service to give a warning when trying to translate a",
      "keywords": "$log $translatemissingtranslationhandlerlog angular api doesn exist function handler object pascalprecht service translate translation warning"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translatePartialLoader",
      "shortName": "pascalprecht.translate.$translatePartialLoader",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "",
      "keywords": "$http $injector $q $rootscope $translatepartialloader $translatepartialloaderstructurechanged active add additional addpart angular-translate api asks availability browser called case chainable checks completely data delete deleted deletepart deletes deletion deprecated event fired function future indicator ispartavailable loaded loader loaders loading logically marks method non-empty note object options param parts pascalprecht pass perform physically prevent prevents process recompiled recycling registers remaining remove removedata requests returns reused server set table target throw time translate translation translations type wrong xhr"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translatePartialLoaderProvider",
      "shortName": "pascalprecht.translate.$translatePartialLoaderProvider",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "By using a $translatePartialLoaderProvider you can configure a list of a needed",
      "keywords": "$translatepartialloaderprovider add addpart angular-translate api application asks avoids chainable check checks configuration configure data delete deletepart directly function future ispartavailable lang language lifetime list load loaded loader loading method needed non-empty note object param params parts pascalprecht pass phase provider registers removes returns runtime server set setpart sets specific startup table target throw translate translation type wrong"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateProvider",
      "shortName": "pascalprecht.translate.$translateProvider",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "$translateProvider allows developers to register translation-tables, asynchronous loaders",
      "keywords": "$compile $injector $translatecookiestorage $translatelocalstorage $translateprovider $translatestaticfilesloader $translateurlloader actual add addinterpolation adds alias aliases allows angular-translate angularjs api app application-wide argument arguments array asynchronous automatically behavior best browser browsers build built-in called change choosed class cloakclassname combination compiling config configuration configure considering convention correct custom customhandler de_de default define defined dep1 dep2 depending determine determinepreferredlanguage developers directive directly doesn don en_us enabled error example exist expects extended extension factory fallbacklanguage find fitting fn format function functionality gender getlocale greeting hallo handler hello high implement indicator indicators initial inside instantiated interface internally interpolation invoking isn javascript job js key langkey language languagekeys languages layer left level ll loaded loader loaderfactory loaders locale log manage map messageformat method methods missing missingtranslationhandler module multiple not_found object optional options parameter pascalprecht pass passing plain pluralization post preferred preferredlanguage prefix processed provided register registeravailablelanguagekeys registered registering registers represent represents result return returns risk sanitation selection service services set sets setting shortcut simply specific startup storage storagekey storageprefix strategy string style table tables tells throw translate translate-cloak translated translation translation-tables translationid translationnotfoundindicator translationnotfoundindicatorleft translationnotfoundindicatorright translations translationtable type url usecookiestorage useinterpolation useloader uselocalstorage usemessageformatinterpolation usemissingtranslationhandler usemissingtranslationhandlerlog usepostcompiling user usesanitizestrategy usestaticfilesloader usestorage useurlloader valid values welt whitespace work world"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateStaticFilesLoader",
      "shortName": "pascalprecht.translate.$translateStaticFilesLoader",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Creates a loading function for a typical static file url pattern:",
      "keywords": "$http $q $translatestaticfilesloader api builder creates file function json key key-value lang-de_de lang-en_us loading object options pairs pascalprecht pattern prefix response static suffix translate typical url urls"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.$translateUrlLoader",
      "shortName": "pascalprecht.translate.$translateUrlLoader",
      "type": "object",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Creates a loading function for a typical dynamic url pattern:",
      "keywords": "$http $q $translateurlloader api applied creates current dynamic function key key-value language loading locale object options pairs pascalprecht pattern php prefixing requested response service translate typical url urls"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.directive:translate",
      "shortName": "translate",
      "type": "directive",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Translates given translation id either through attribute or DOM content.",
      "keywords": "$compile $digest $filter $interpolate $rootscope $scope $translateprovider angular api attribute config content controller directive dom dynamic element expect filter function hello html inject internally interpolated js literal module ng-controller ngview object optional pascalprecht pass passed scenario script string text tobe translate translate-values translatectrl translates translation translation_id translationid translations values with_values"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.directive:translateCloak",
      "shortName": "translateCloak",
      "type": "directive",
      "moduleName": "pascalprecht.translate",
      "keywords": "$description $rootscope $translate adds api applied asynchronously class data directive element finished flickering initial initially loader loading pascalprecht prevent removes required string translate translate-cloak translation"
    },
    {
      "section": "api",
      "id": "pascalprecht.translate.filter:translate",
      "shortName": "translate",
      "type": "filter",
      "moduleName": "pascalprecht.translate",
      "shortDescription": "Uses $translate service to translate contents. Accepts interpolate parameters",
      "keywords": "$parse $scope $translate $translateprovider accepts angular api config contents controller dynamic dynamized filter function hash hello html interpolate interpolateparams js literal module ng-controller ngview object optional parameters pascalprecht pass script service string text translate translatectrl translated translation translation_id translationid translations values with_values"
    },
    {
      "section": "guide",
      "id": "index",
      "shortName": "Guide",
      "type": "overview",
      "moduleName": "Guide",
      "shortDescription": "i18n for your Angular apps, made easy",
      "keywords": "$translateprovider _i _provide al angular angular-translate angularjs app apps article asynchronous awesome basically bower bring button check click comment-773 community components config contents contributors cool couldn covered currently customization data de demos dependency dies discuss doc document easier easiest easy ein embed en example expandability extensions feature features feedback find flexibility foo function german github google great guide guys hallo hello high html huh i18n ideas inject install interesting interfaces interpolate ist it_ js l10n learn list ll loading lot love mailinglist module myapp neoskop ng-newsletter ngmodules org overview paragraph partial pascalprecht path people plenty plnkr pluralization preferredlanguage projects public quick read repository requests resources src start support teach thankful thing things title translate translations ultra unicorn values var web wordpress works wouldn"
    },
    {
      "section": "guide",
      "id": "00_installation",
      "shortName": "Installation",
      "type": "overview",
      "moduleName": "Installation",
      "shortDescription": "Installation",
      "keywords": "ahead angular-translate angular-translate-interpolation-default bower broken build building clone cloned code command commands components conf configuration configured consider course created currently default dependencies developing development dist document easily embed engine execute exists featured file files folder framework fuck full generate git github green grunt gruntfile guide happened history html included including install installation installing interpolate interpolation js karma ll love machine matter midway min navigate needed notice npm overview package passed pretty production project properly provided pull raw ready repository request rock running send simply source start tasks testing testrunner tests testsuite things tools translations unicorn unit version waits watch work"
    },
    {
      "section": "guide",
      "id": "01_conceptual-overview",
      "shortName": "Conceptual Overview",
      "type": "overview",
      "moduleName": "Conceptual Overview",
      "shortDescription": "Conceptual Overview",
      "keywords": "$translate abstract addition angular angular-translate app appears apps asynchonous asynchronous asynchronously bit box build built-in business called chapter checks chosen class common component components conceptual configured connected content contents controller cookiestorage core course custom data declarative decoupled default detail determine directive doesn don easily easy executed exist extension extra familiar features figure filter find good guide handler handlers happening img implement influence install interesting internally interpolate interpolation interpolators key kind language layer learn left ll load loaded loader loaders loading localstorage logging logic love main missing multi-language needed nitty-gritty overview packages padding-left pair performance png pretty provided pull-right rely remember represents runtime service services ships situation solves specific speed src start staticfilesloader storage structured style support supports syntax top translate translating translation translations understand unicorn urlloader user values variable view worries"
    },
    {
      "section": "guide",
      "id": "02_getting-started",
      "shortName": "Getting Started",
      "type": "overview",
      "moduleName": "Getting Started",
      "shortDescription": "Getting Started",
      "keywords": "$location $locationprovider $route $routeprovider $translate $translateprovider _configuration _provider_ _use aaaand ability access action add adding angular angular-translate another_namespace app application architecture awesome bar basically better big button called care case change chapter charset clever code components concrete config configurable configuration configure configures confirmation contents controller cool corresponding corresponds course create data declare declared declaring dependencies dependency developers directive directives document don easily easy embed embedded en enclosing enought example existing expects extend feature features filter filters flexible foo forward full function guide handles happen hard hash headline html html5 html5mode huh i18n identifier including inject injection inside instantiated interesting interface interpolate introduced introducing isn javascript js json key kind language languages learn levels link links ll loading localized long love making method methods mode module myapp namespace namespaced namespaces neat nested nesting ng-app object objects ok_text organize overview paragraph pascalprecht path place pointing preferred preferredlanguage prefix pretty properly provide provided provider ready recognize redundancy remotely represent represents service service_ services setup shortcut shortcuts sign simple simply some_namespace somefancyctrl specific src srsly started straight stuff sub_namespace subnamespace table tables takes teach teaching templateurl text things time translate translation translation_id translation_id1 translations unicorn unusual url usage utf-8 var ve websites work working"
    },
    {
      "section": "guide",
      "id": "03_using-translate-service",
      "shortName": "Using $translate service",
      "type": "overview",
      "moduleName": "Using $translate service",
      "shortDescription": "Using $translate service",
      "keywords": "$emit $on $rooscope $rootscope $scope $translate $translatechangesucces $translatechangesuccess $translateprovider accessed achieve add angular angular-translate anotherone app approach apps asynchronous asynchronously awesome basic behaves bind binding building call callback case cases change changed changing code config content contents controller controllers ctrl data default dependency determine directive directly documents doesn don easy en exist expose extend features fired function general going guide hard headline html imagine info inject injection inside json language languages level ll loading logic love manipulate mind module myapp namespace namespaced namespaced_paragraph needed ng-app ng-controller overview paragraph pascalprecht pass performance post preferredlanguage promise properties provide provided re-execute reasons registered rejected resolved return returns running runtime sample service services simply srsly started successful table tag things time title translate translated translating translation translations translatoin turned two-way unicorn updated usage var ways wonder working works world wouldn wrapping"
    },
    {
      "section": "guide",
      "id": "04_using-translate-filter",
      "shortName": "Using translate filter",
      "type": "overview",
      "moduleName": "Using translate filter",
      "shortDescription": "Using translate filter",
      "keywords": "$scope $translate $translateprovider add angular angular-translate angularjs app awesome basically belongs bind business chapter code component config contents controller controllers cool course ctrl decouple decoupled directive don easy en example filter filters flexible forward function general generalusage great guide ha hard headline ids layer learned letting logic love module myapp ng-controller org overview paragraph pascalprecht polluting preferredlanguage pretty provided read registered remove replaceable replacement sample service services srsly straight stuff table templates touching transfering translate translation translation_id translations unicorn update usage using_filters var ve view working works"
    },
    {
      "section": "guide",
      "id": "05_using-translate-directive",
      "shortName": "Using translate directive",
      "type": "overview",
      "moduleName": "Using translate directive",
      "shortDescription": "Using translate directive",
      "keywords": "$compile $scope $translateprovider add addition angular angular-translate app attribute awesome beginners behavior best better case choose compiling concrete config contents context controller cool couldn covered ctrl current dataset directive disable dynamically en enable enabled example expected expressions false feature filter filters flexible function general globally great guide ha handle headline hey identifier ids interpolate interpolated isn iterator layer looping love module myapp ng-controller offers overview paragraph pascalprecht pass passed passed_as_attribute passed_as_interpolation passed_as_text post preferredlanguage processed represents scope sets srsly starting table text texts translate translate-compile translation translation_id translations turned unicorn update updated usage usepostcompiling var version view watch ways work works wouldn yeah"
    },
    {
      "section": "guide",
      "id": "06_variable-replacement",
      "shortName": "Variable replacement",
      "type": "overview",
      "moduleName": "Variable replacement",
      "shortDescription": "Variable replacement",
      "keywords": "$scope $translate $translateprovider _n_ _you achieve add angular angular-translate app argument attribute attributes awesome beginners bind bit bringing case cases code combine components config constant controller cool corresponding course covered ctrl currently custom declarative declare default define depends described directive display dynamic easy-peasy en evaluated exactly example expects explicitly exposes expression extend feature filter filters forward function greeting guide guides ha handle hard hash haven headline hey html identifier internally interpolate interpolated interpolation introduction isn javascript key-value lastlogin learned literal logged love mails_ managed message module myapp named neat ng-controller nice notification number object optional overview pairs paragraph parameters parsed pascal pascalprecht pascalprect pass passed passed_as_attribute passed_as_interpolation passed_as_text passing placeholder plain preferredlanguage prefix pretty read received rely replace replacement replacements required scope second service services simply sold somescopeobject specific srsly straight string syntax table text time translate translate-value- translate-value-name translate-values translation translation_id translationdata translations unicorn update username values var variable variable_replacement ve version wanna ways work working works yeap"
    },
    {
      "section": "guide",
      "id": "07_multi-language",
      "shortName": "Multi Language",
      "type": "overview",
      "moduleName": "Multi Language",
      "shortDescription": "Multi Language",
      "keywords": "$scope $translate $translateprovider add adding als anf angular angular-translate app apps argument asynchronous attribut attribute automatically aware awesome bad basic beginners belongs bin browser browserlanguage button button_lang_de button_lang_en buttons calling calls cases change changelanguage code combination components config controller controllers controls cool corresponding course covered ctrl current custom de decide default detail determine determinepreferredlanguage determines determining deutsch directive doesn dynamic ein en englisch english ernsthaft expect expects extend fallbacklanguage feeling find fit function functionality german going good greeting gro guide ha hallo happen hasn headline hello hey html ich ids implement interesting internally interpolated interpolation interpoliert introduced invokes key language languages learn learned learning level limit ll loaded loaders loading logic love method missing missing_translation modul module multi myapp navigator needed ng-click ng-controller object oder oops order overview paragraph pascalprecht pass passed passed_as_attribute passed_as_interpolation passed_as_text passing points practice prefer preferred preferredlangkey preferredlanguage pretty properties provide ready recognize registered registers registration replacement return returns risk runtime sample scope searches second service setting setup simple srsly started storage support switch switching systemlanguage table tables teach teaching tells text things time translate translate-values translated translation translations translationsde translationsen turns unicorn update usage userlanguage values var variable_replacement ve version voil welt window work world wurde"
    },
    {
      "section": "guide",
      "id": "08_fallback-languages",
      "shortName": "Fallback Languages",
      "type": "overview",
      "moduleName": "Fallback Languages",
      "shortDescription": "Fallback Languages",
      "keywords": "$scope $translate $translateprovider actual additional angular-translate answer app array calling case cases change changelanguage changing configure controls current de define defined developer don easy en english entire example fallback fallbacklanguage find forget fr french function generally german guide handle huh ids ignored imagine isn iterate iterated iterates iteration key langkey language languages left limit loaded love mentioned method missing multi multiple notice order overview point possibility preferred problem process read register registered registering removing rest return runtime scan scanned search searches service set skipped sounds stack start starts stays support switch switched switching table teach teaching texts ticket translated translation translations unicorn usefallbacklanguage user ve wonder yep"
    },
    {
      "section": "guide",
      "id": "09_language-negotiation",
      "shortName": "Language Negotiation",
      "type": "overview",
      "moduleName": "Language Negotiation",
      "shortDescription": "Language Negotiation",
      "keywords": "$translateprovider accessing actual angular-translate app arguments array automatically browser called case covered de de_ch de_de declare determine determinepreferredlanguage discussed en en_uk en_us error expects feature glance guide key language languages lead learned love map maps mention method multi-language_determining-preferred-language-automatically negotiation object overview parameter preferred properties recognise registeravailablelanguagekeys relation relations returned returns second sense set smart support supports system tables translation translations treat unicorn"
    },
    {
      "section": "guide",
      "id": "10_storages",
      "shortName": "Storages",
      "type": "overview",
      "moduleName": "Storages",
      "shortDescription": "Storages",
      "keywords": "$scope $translate $translateprovider add als anf angular angular-translate angular-translate-storage-cookie angular-translate-storage-local app attribut attribute awesome basically beginners bin bower browser built-in button button_lang_de button_lang_en care case change changelanguage chapter chapters choose chosen click config controller cookie cookiestorage cool corresponding course cross ctrl currently de deutsch document doesn don easy ein embeded en englisch english ernsthaft everytime extension fallback falls feels flow function german gro guide ha headline hey html http ich identifier inform initial install interpolated interpoliert isn key kinda language launch launches learned localstorage love method mind modul module myapp ng-click ng-controller ngcookies oder opened opening overview package paragraph pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text preferredlanguage problem provide reasons refresh remember requests rest save silly simply specific srsly storage storages store support supported switches tables takes teach text thing time translate translate-values translation translations translationsde translationsen unicorn update usecookiestorage uselocalstorage user users var variable_replacement ve web wurde"
    },
    {
      "section": "guide",
      "id": "11_custom-storages",
      "shortName": "Custom Storages",
      "type": "overview",
      "moduleName": "Custom Storages",
      "shortDescription": "Custom Storages",
      "keywords": "$injector $scope $translate $translateprovider access add addition als anf angular angular-translate app arguments attribut attribute awesome beginners bin browser build building button_lang_de button_lang_en case changelanguage chosen config controller cookiesstorage cookiestorage cool course cross ctrl custom customstorage de deutsch doesn easily easy ein en englisch english ernsthaft expects extend factory fits flexibility forward function german gro guide ha headline hey high http ich implement instance interface internally interpolated interpoliert isolated key-value language localstorage love method methods modul module myapp ng-click ng-controller ngcookies object oder overview pairs paragraph pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text place preferredlanguage pretty provide providing read refresh remember request requests return runtime sample save separate service set shortcut side simple simply srsly storage storages store straight tables testing text translate translate-values translation translations translationsde translationsen unicorn usecookiestorage uselocalstorage usestorage var variable_replacement ve won work wurde"
    },
    {
      "section": "guide",
      "id": "12_asynchronous-loading",
      "shortName": "Asynchronous Loading",
      "type": "overview",
      "moduleName": "Asynchronous Loading",
      "shortDescription": "Asynchronous Loading",
      "keywords": "$on $rootscope $scope $translate $translatepartialloader $translatepartialloaderprovider $translatepartialloaderstructurechanged $translateprovider $translaterpartialloaderprovider _json_ accessing accross achieve activities add adding addition additional addpart adds ago allright alright als amount anf angular angular-translate angular-translate-loader-partial angular-translate-loader-static-files angular-translate-loader-url app apps argument asynchronous asynchronously attribut attribute automate automatically awesome basically beautifully beginners behavior best better big bigger bin bit bootstraps bower break browser bug build button_lang_de button_lang_en called care case change changelanguage changes changing chapter charm checks choosed clever code combination comment complete complex concatenate config configure configures contact contactctrl content contents controller controllers cool copy corresponding course covered ctrl current currently custom data de dealing default depends describes deutsch devtools differently document doesn don double drawback drops ein embedded embeded en endpoint englisch english ernsthaft event everytime example execute executed executing expects extension extensions file files fired fires fixed flash flickering foo forward fouc function functionality german gro guide ha hard haven headline hello hello_text hey html ich imagine inital inject install installable installed instantiated interesting interpolated interpoliert invoke invoked isn json key kind lang language languages launches lazy learn learned listening ll load loaded loader loaders loading loads locale locale- locale-de locale-en localization logical love main mainapp manipulate match method modul module modules myapp needed network ng-click ng-controller ngcookies ngroute notice notices oder open overview package paragraph parameter partial partialloader parts pascalprecht passed passed_as_attribute passed_as_interpolation passed_as_text pattern plain preferredlanguage prefix pretty process promise property provide provided provider pull quotes real refresh refreshing registered reloads request requests required respond return returns router runtime sample send separate server service services setup short simplest simply sits specifc specific specifies srsly startup static staticfilesloader straight string structured stuff submodule submodules suffix support table tables telling text things three time transform translate translate-values translating translation translations ui unicorn untranslated update url urlloader urltemplate useloader user usestaticfilesloader useurlloader var variable_replacement ve wanna wasn won working works world wurde yea"
    },
    {
      "section": "guide",
      "id": "13_custom-loaders",
      "shortName": "Custom Loaders",
      "type": "overview",
      "moduleName": "Custom Loaders",
      "shortDescription": "Customer Loaders",
      "keywords": "$http $injector $q $scope $timeout $translate $translateprovider access adding additional als anf angular angular-translate app architecture asynchronous asynchronously asyncloader attribut attribute awesome bar beginners behave bin build building button button_lang_de button_lang_en cases changelanguage changing chapter clicking config control controller cool ctrl custom customer customloader data de defer deferred depending deutsch don easily easy ein en englisch english ernsthaft example exists expect expects extend factory files fit fits foo fooooo free full function german gro guide ha headline hey ich indicates internally interpolated interpoliert invoked invoking isn key language learned load loader loaderfn loaders loading localization love method methods modul module myapp ng-click ng-controller ngcookies object oder options overview paragraph pascalprecht pass passed passed_as_attribute passed_as_interpolation passed_as_text patterns place preferredlanguage promise properties property provide provided register registering reject rejected remote resolve resolved resolves rest return returns sample seconds server service simply srsly store table text things totally translate translate-values translation translations unicorn useloader usestaticfilesloader useurlloader var variable_replacement ve wait waits work working worry wouldn wurde"
    },
    {
      "section": "guide",
      "id": "14_pluralization",
      "shortName": "Pluralization",
      "type": "overview",
      "moduleName": "Pluralization",
      "shortDescription": "Pluralization",
      "keywords": "$scope $translate $translatemessageformatinterpolation $translateprovider _can_ _icu _please access achieve adapt add addinterpolation addition additional advantage alright angular angular-translate angular-translate-interpolation-messageformat app application-wide apps argument asynchronous asynchronously attribute aware basically behaves benutze best big bin bit bower bring built button_lang_de button_lang_en c_ called cases challenge change changelanguage check code components config configure configured construct containinig control controller cool corresponding course cross ctrl cultures data de default default_interpolation depending deutsch difference directive document doesn don drawback dynamic earlier easy eine embed embedded en engine englisch english es evaluation exactly example examples expects explained expression extension fact factory fand fanden featured features female file files filter filters find forget fortunately full function functionality gender german guide guide_ gut hard haven headline high html http ich icu-project identifier ids implement implements including install installed internationalization interpolate interpolation interpretations introduce isn javascript job js kind language languages learned level library like_text load loaders locale localization loosing love luckily male match meets messageformat method mf_interpolation module myapp named-keys ng-click ng-controller note opinion optional order org overriding overview parameter pascalprecht pass path plug plural pluralformat pluralization preferredlanguage pretty problem problems proper provide provided re-implement readme relying remember remove replacement replacing requests required rock rules select selectformat seriously server service setup sexton silly simple-variable-replacement simply single situations solves spec specific specifies src storages stuff support supports syntax table tables talked temporarily text texts thing third time topic translate translate-interpolation translate-values translation translations trick type types unicorn update usemessageformatinterpolation user val values var variable ve working wow"
    },
    {
      "section": "guide",
      "id": "15_custom-interpolators",
      "shortName": "Custom Interpolators",
      "type": "overview",
      "moduleName": "Custom Interpolators",
      "shortDescription": "Custom Interpolators",
      "keywords": "$interpolate $locale $scope $translate $translateprovider add addinterpolation addition alright angular angular-translate app appends basic benutze bin build building button_lang_de button_lang_en changelanguage chapters config controller cool ctrl current currently custom custominterpolation de default deutsch eine en englisch english es exactly expects explicitly factory familiar fand fanden features female follow friend function german getinterpolationidentifier guide gut headline ich identifier implement implementing implements integrate interface interpolate interpolateparams interpolates interpolatgeparams interpolation interpolations interpolators language learned library loaders locale logic loose love male mapped messageformat method methods module myapp ng-click ng-controller object optional override overridinginterpolationtemporarily overview params pascalprecht plug plural preferredlanguage prepends pretty previous provided read remember return returns runtime select service services setlocale sets simply smaller smart specific start storages store string strings structure text things translate translate-values translations type unicorn useinterpolation useloader usestorage val var ve work"
    },
    {
      "section": "guide",
      "id": "16_error-handling",
      "shortName": "Error Handling",
      "type": "overview",
      "moduleName": "Error Handling",
      "shortDescription": "Error Handling",
      "keywords": "$scope $translate $translateprovider also_not_existing angular angular-translate angular-translate-handler-log app benutze bin bower browser button_lang_de button_lang_en call changelanguage complex config console controller ctrl de default deutsch doesn don eine en englisch english error es exist extension extensions fand fanden female function german guide gut handler handlers handling headline ich install interpolation log logged logs love male missing module myapp ng-click ng-controller not_existing overview pascalprecht plural preferredlanguage rest sample select specific text translate translation translations unicorn usemissingtranslationhandlerlog val var warnings working"
    },
    {
      "section": "guide",
      "id": "17_custom-error-handler",
      "shortName": "Custom Error Handler",
      "type": "overview",
      "moduleName": "Custom Error Handler",
      "shortDescription": "Custom Error Handler",
      "keywords": "$translateprovider angular angular-translate app called course custom define dep1 dep2 error expects factory function guide handler love method module myapp mycustomhandlerfactory overview pascalprecht return returns tranlation translate unicorn usemissingtranslationhandler usemissingtranslationhandlerlog var"
    },
    {
      "section": "guide",
      "id": "18_events",
      "shortName": "Events",
      "type": "overview",
      "moduleName": "Events",
      "shortDescription": "Events",
      "keywords": "$rootscope $scope $translate $translatechangeend $translatechangeerror $translatechangestart $translatechangesuccess $translateloadingend $translateloadingerror $translateloadingstart $translateloadingsuccess $translatepartialloader $translatepartialloaderstructurechanged angular-translate anytime application-wide asynchronous asynchronously better bus case change changing configured covered create custom data describes document emitted ends event events expect failed fired general guide immediatly independently interpolation invoked kind language level listen load loader loading method notified occurs overview performance promise react registered rejected rejects resolved returned returns runtime services setting starts startup structure successful table time translation triggers updated wether"
    },
    {
      "section": "guide",
      "id": "19_security",
      "shortName": "Security",
      "type": "overview",
      "moduleName": "Security",
      "shortDescription": "Escaping of variable content",
      "keywords": "$scope $translateprovider angular angular-translate angularjs app attacks backwards color compatible completely config content controller correctly ctrl default defines demonstrations disabled en enable enforce ensures escaped escaping function future general global guide headline hello html javascript love method module moment myapp ng-controller null options org output overview owasp paragraph pascalprecht php preferredlanguage regular result secure security serious speaking standard strategy style translate translate-values translations unicorn usesanitizevaluestrategy var variable variant vulnerable xss"
    },
    {
      "section": "guide",
      "id": "20_tools",
      "shortName": "Tools",
      "type": "overview",
      "moduleName": "Tools",
      "shortDescription": "Tools",
      "keywords": "actual add additional angular-translate app apps boolean case cleanprevstrings compatible configuration convert converting covers create created creating currently deeper default depends destination dev developing development devonefile dist enable entire environment example false file files format formatted generate generated generation gettext github grunt grunt-angular-translate grunt-po2json-angular-translate gruntfile guide head help initconfig install interested isn js json loadnpmtasks maintaining module msgid multiple names npm options optionsenablealtplaceholders optionsuppercaseid output overview placeholders pluralization po po-formatted po2json_angular_translate pretty previous print project remove repo result set setting single special steps strings task test things tmp tools true type universe uppercase uppercaseid wanna your_target"
    }
  ],
  "apis": {
    "api": true,
    "guide": false
  },
  "html5Mode": false,
  "startPage": "/guide",
  "scripts": [
    "bootstrap-dropdown.js",
    "messageformat.js",
    "de.js",
    "angular.min.js",
    "angular-cookies.min.js",
    "angular-translate.min.js",
    "angular-translate-interpolation-messageformat.min.js",
    "angular-translate-storage-cookie.min.js",
    "angular-translate-storage-local.min.js",
    "angular-translate-loader-static-files.min.js",
    "angular-translate-handler-log.min.js"
  ]
};