var loadingtext =				'Caricamento';
var errortext =					'Errore';
var filetext =					'Lima';
var notfoundtext =				'non trovato';

var preferenceslink =			'Preferenze';
var datepickerbutton =			'Va!';
var earliertext =				'Pi\u00f9 presto';
var latertext =					'Pi\u00f9 successivamente';

var gridtab =					'Griglia';
var displayhourslabel =			'Ore dell\'esposizione';
	var displayhourshint =		'Seleziona il numero di ore per visualizzare.';
var autosizelabel =				'Formato automatico della tabella';
	var autosizehint =			'Controllo per selezionare automaticamente una larghezza della tabella basata sul numero di colonne. Uncheck per permettere il campo seguente.';
var tablewidthlabel =			'Larghezza della Tabella (in pixel)';
	var tablewidthhint =		'Specifica la larghezza della tabella in pixel. Controlli la suddetta scatola per regolare automaticamente questo.';
var offsetminuteslabel =		'Inizio con l\'ora prossima dopo';
	var offsetminuteshint =		'Ha regolato la parte di minuti del tempo dopo di che la griglia cominci con l\'ora prossima sul carico iniziale.';
var refreshonthelabel =			'Rinfreschi ogni ora a';
	var refreshonthehint =		'XSLTv pu\u00f2 rinfrescare automaticamente gli elenchi ogni ora per mantenere la griglia aggiornata, se il browser \u00e8 mantenuto aperto. Selezioni il momento ogni ora di realizzare il rinfresc.'
	var norefreshoption =		'Non rinfreschi';
var timebarfrequencylabel = 	'Time Bar Frequency';
	var timebarfrequencyhint =	'How often to repeat the time header row.';
	var toponlyoption =			'Top Line Only';
	
var popupstab =					'Popups';
var channelpopupslabel =		'Manica Popups';
	var channelpopupshint =		'Controllo per permettere i popups quando il mouse \u00e8 sopra i nomi della scanalatura.';
var descriptionpopupslabel =	'Descrizione Popups';
	var descriptionpopupshint =	'Controllo per permettere i popups quando il mouse \u00e8 sopra un programma.';
var popupdelaylabel =			'Popup fa ritardare (in ms)';
	var popupdelayhint =		'Si \u00e8 regolato fa ritardare nei millisecondi prima che i popups comparissero. Regoli a 0 per inabilitare fa ritardare.';
var popuptimeslabel =			'Cronometra';
	var popuptimeshint =		'Controllo per mostrare i tempi di conclusione e di inizio nei popups di programma.';
var popupratinglabel =			'Valutazione';
	var popupratinghint =		'Controllo per mostrare le valutazioni di MPAA nei popups di programma.';
var popupsubtitlelabel =		'Sottotitolo';
	var popupsubtitlehint =		'Controllo per mostrare i sottotitoli di programma nei popups di programma.';
var popupdescriptionlabel =		'Descrizione';
	var popupdescriptionhint =	'Controllo per mostrare le descrizioni di programma nei popups di programma.';
var popupdatelabel =			'Data';
	var popupdatehint =			'Controllo per mostrare le date nei popups di programma. Le date sono date di emissione per i films o date primo-ventilate per le esposizioni.';
var popupcategorieslabel =		'Categorie';
	var popupcategorieshint =	'Controllo per mostrare le categorie o i generi di esposizione nei popups di programma.';
var popupstarratinglabel =		'Valutazione della stella';
	var popupstarratinghint =	'Controllo per mostrare una valutazione grafica della stella nei popups di programma.';

var localoptionstab =			'Opzioni locali';
var languagelabel =				'Lingua';
var fixgapslabel =				'Difficolt\u00e0 apre in elenchi';
	var fixgapshint =			'Controllo per permettere spacco-rilevazione in elenchi che non sono attigui. Questa opzione richiede gli elenchi essere fascicolata con --by-channel da funzionare. Questa opzione indurr\u00e0 gli elenchi a caricare molto pi\u00f9 lentamente, in modo da non controlla inutilmente.';
	var fixgapsconfirm =		'Colmare le lacune in elenchi, accerta prego la lima di XML \u00e8 stato fascicolato con opzione della --by-channel!';
var absoluteiconslabel =		'Icona assoluta si riferisce';
	var absoluteiconshint =		'XSLTv cerca le icone della scanalatura \u201cicons\u201e indice. Controlli questa scatola se la vostra lima del xml contiene i riferimenti di Absolute URL alle icone.';
var dayfirstlabel =				'Giorno dell\'esposizione in primo luogo nelle date';
	var dayfirsthint =			'Controllo questa scatola per mostrare le date in dd/mm/aaaa formatta. Uncheck per la disposizione di mm/dd/aaaa.';
var grabberlabel =				'Grabber: tv_grab_';
	var grabberhint =			'Seleziona il vostro grabber applicare le regolazioni localizzate di scanalatura-nome.';

var otheroptionstab =			'altre opzioni';
var loadonclicklabel =			'sullo scatto:';
	var loadonclicknothing =	'non fa niente';
	var loadonclickIMDB =		'ricerca IMDB';
	var loadonclickURL =		'URL in XML';
var categorycolorslabel =		'categoria che evidenzia';
	var categorycolorshint=		'prescelto permettere messa in evidenza di categoria (colori devono essere definiti nelle lime di CSS). Deselect per un piccolo miglioramento di velocit\u00e0. Ci\u00f2 \u00e8 a parte dal valutazione-ha basato la messa in evidenza.';
var dailyfileslabel =			'Uso archivia giornalmente';
	var dailyfileshint=			'Seleziona per usare le lime quotidiane nella disposizione AAAAMMDD.xml anzich\u00e9 una singola lima di tv.xml.';
var highlightclickablelabel =	'punto culminante ha collegato i programmi';
	var highlightclickablehint ='programmi di punto culminante che sono collegati ad un URL (si \u00e8 regolato sopra). Il tipo di messa in evidenza dipende dallo stylesheet. \u00e8 suggerito per inabilitare questo se tutti i programmi sono di essere collegamenti, o se nessun sono.';
var highlightmovieslabel =		'films di punto culminante ha valutato a o sopra:';
	var highlightmovieshint =	'films di punto culminante valutati a o sopra questo numero di stelle. Il tipo di messa in evidenza dipende dallo stylesheet, ma \u00e8 generalmente un colore pi\u00f9 luminoso. Ci\u00f2 \u00e8 a parte dalla categoria che evidenzia sotto.';
var highlightnewlabel =			'nuove esposizioni di punto culminante';
	var highlightnewhint =		'punto culminante mostra quale stanno ventilando per la prima volta. La messa in evidenza \u00e8 generalmente un bordo pi\u00f9 scuro o pi\u00f9 spesso.';
var printdateslabel =			'rilascio di film di esposizione data';
	var printdateshint =		'rilascio di film di esposizione data nella griglia. Ci\u00f2 ha luogo a parte dalle date nel popup e soltanto si applica ai films.';
var twelvehourlabel =			'Use twelve-hour clock';
	var twelvehourhint =		'Use twelve-hour (with AM and PM) instead of twenty-four-hour clock.';
var showclocklabel =			'Show clock in upper right';
	var showclockhint =			'Check to show current time and date in the top right of page.';
var showbarclocklabel =			'Show clock in top bar';
	var showbarclockhint =		'Check to show current time in the top bar.';

var reloadbutton =				'ricarica';

var monthnames =				new Array('gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno', 'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre');
var daynames =					new Array('domenica', 'luned\u00ec', 'marted\u00ec', 'mercoled\u00ec', 'gioved\u00ec', 'venerd\u00ec', 'sabato');
var dayletters =				new Array('D', 'L', 'M', 'M', 'G', 'V', 'S');

var alllabel =					'Tutti';
var nonelabel =					'Nessuno';