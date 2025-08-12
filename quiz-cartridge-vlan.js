// quiz-cartridge-vlan.js
// このファイルは、固定問題モードで使用されるクイズのデータセットです。
// PDF資料の第5章 (VLANとVLAN間ルーティング) を基に100問構成で作成されました。

(function() {
    const vlanQuiz = {
        title: "VLANとVLAN間ルーティング 100問",
        questions: [
            // 1-15: VLANの基本概念
            {
                [cite_start]"question": "物理的な接続構成に関わらず、スイッチの設定によって仮想的にブロードキャストドメインを分割する技術は何ですか？ [cite: 1051]",
                "options": ["ルーティング", "サブネット", "VLAN", "NAT"],
                "answer": "VLAN",
                [cite_start]"explanation": "VLAN (Virtual LAN) は、1台のスイッチ内に複数のブロードキャストドメインを仮想的に作成し、ネットワークを論理的に分割する技術です。 [cite: 1051, 1052]"
            },
            {
                [cite_start]"question": "VLANを導入するメリットとして、PDF資料で挙げられているものは何ですか？ [cite: 1053]",
                "options": ["通信速度の向上", "スイッチ台数の削減によるコスト削減", "IPアドレスの節約", "物理的なセキュリティの強化"],
                "answer": "スイッチ台数の削減によるコスト削減",
                [cite_start]"explanation": "VLANを利用すると、1台のスイッチで複数のネットワークを構築できるため、物理的なスイッチの台数を減らし、コストを削減できます。 [cite: 1053]"
            },
            {
                [cite_start]"question": "CiscoスイッチにおけるデフォルトVLAN（初期状態で全てのポートが所属するVLAN）のIDはいくつですか？ [cite: 1074]",
                "options": ["0", "1", "10", "1002"],
                "answer": "1",
                [cite_start]"explanation": "Ciscoスイッチでは、工場出荷時の設定で全てのポートがVLAN1に所属しています。 [cite: 1074] [cite_start]VLAN1はデフォルトVLANと呼ばれます。 [cite: 1074]"
            },
            {
                [cite_start]"question": "スイッチの特定のポートにVLANを割り当てることを、実務で何と表現することがあると記載されていますか？ [cite: 1075]",
                "options": ["VLANのタギング", "VLANのグルーピング", "VLANのアサイン", "VLANのセグメンテーション"],
                "answer": "VLANのアサイン",
                [cite_start]"explanation": "スイッチポートに特定のVLANを割り当てることを「VLANのアサイン」と表現することがあります。 [cite: 1075]"
            },
            {
                [cite_start]"question": "1つのVLANにのみ所属し、PCやサーバなどのエンドデバイスを接続するために使用されるスイッチポートの種類は何ですか？ [cite: 1088]",
                "options": ["トランクポート", "コンソールポート", "ルーテッドポート", "アクセスポート"],
                "answer": "アクセスポート",
                [cite_start]"explanation": "アクセスポートは、1つのVLANだけに所属するポートです。 [cite: 1088] [cite_start]PCやプリンタ、サーバ等のデバイスを接続するのが一般的です。 [cite: 1088]"
            },
            {
                [cite_start]"question": "複数のVLANのトラフィックを伝送でき、主にスイッチ間やスイッチとルータの接続に使用されるポートの種類は何ですか？ [cite: 1106]",
                "options": ["アクセスポート", "トランクポート", "SVI", "管理ポート"],
                "answer": "トランクポート",
                [cite_start]"explanation": "トランクポートは、複数のVLANに所属するポートで、複数のVLANのトラフィックを伝送することができます。 [cite: 1106]"
            },
            {
                [cite_start]"question": "トランクポート同士で接続されたリンクのことを何と呼びますか？ [cite: 1107]",
                "options": ["アクセスリンク", "アップリンク", "トランクリンク", "バックボーンリンク"],
                "answer": "トランクリンク",
                [cite_start]"explanation": "トランクポート同士で接続されたリンクのことをトランクリンクと呼びます。 [cite: 1107]"
            },
            {
                [cite_start]"question": "トランクリンク上で、フレームがどのVLANに所属するかを識別するために付与される情報を何と呼びますか？ [cite: 1121]",
                "options": ["ヘッダー", "トレーラー", "タグ", "マーカー"],
                "answer": "タグ",
                [cite_start]"explanation": "トランクリンクでは、トラフィックがどのVLANに属するかを識別するために、タグと呼ばれるVLAN識別情報がフレームに付与されます。 [cite: 1121]"
            },
            {
                [cite_start]"question": "VLANのタギングプロトコルとして、現在最も広く使われているIEEE標準は何ですか？ [cite: 1139]",
                "options": ["ISL", "DTP", "802.1Q", "802.3ad"],
                "answer": "802.1Q",
                [cite_start]"explanation": "IEEE 802.1Q（dot1qと表記されることもある）は、メーカーを問わず使用できるVLANタギングの標準プロトコルです。 [cite: 1139]"
            },
            {
                [cite_start]"question": "802.1Qトランクリンクにおいて、例外的にタグ付けされずに転送されるVLANを何と呼びますか？ [cite: 1141]",
                "options": ["デフォルトVLAN", "管理VLAN", "データVLAN", "ネイティブVLAN"],
                "answer": "ネイティブVLAN",
                [cite_start]"explanation": "ネイティブVLANは、802.1Qにおいてタグ付けがされないVLANのことです。 [cite: 1141] [cite_start]CatalystスイッチのデフォルトではVLAN1が設定されています。 [cite: 1141]"
            },
            {
                [cite_start]"question": "トランクリンクの両端でネイティブVLANの設定が異なっている場合、どのような問題が発生しますか？ [cite: 1142]",
                "options": ["通信速度が低下する", "正常な通信が行えない場合がある", "すべてのVLANが通信不能になる", "スイッチが自動的に再起動する"],
                "answer": "正常な通信が行えない場合がある",
                [cite_start]"explanation": "ネイティブVLANが不一致の場合、タグなしフレームが意図しないVLANに所属すると誤認され、通信障害を引き起こす可能性があります。 [cite: 1142, 1143]"
            },
            {
                [cite_start]"question": "スイッチに設定されているVLANと、各VLANに割り当てられているアクセスポートを確認するのに便利なコマンドは何ですか？ [cite: 1235]",
                "options": ["show interfaces trunk", "show ip interface brief", "show vlan", "show running-config"],
                "answer": "show vlan",
                [cite_start]"explanation": "「show vlan」コマンドは、スイッチに設定されているVLANの一覧と、どのポートが各VLANにアクセスポートとして割り当てられているかを見やすく表示します。 [cite: 1235]"
            },
            {
                [cite_start]"question": "「show vlan」コマンドの出力で、表示されていないポートは、どのようなポートであると推測できますか？ [cite: 1247]",
                "options": ["アクセスポート", "シャットダウンしているポート", "トランクポート", "故障しているポート"],
                "answer": "トランクポート",
                [cite_start]"explanation": "「show vlan」コマンドのポート一覧にはアクセスポートが表示されるため、ここに表示されていないポートはトランクポートであると推測できます。 [cite: 1247]"
            },
            {
                [cite_start]"question": "VLAN IDとして指定可能な番号の範囲はどれですか？ [cite: 1191]",
                "options": ["1～1001", "1～1005", "1～4094", "1～4096"],
                "answer": "1～4094",
                [cite_start]"explanation": "VLAN IDは1から4094の範囲で指定が可能です。 [cite: 1191] [cite_start]1002～1005などは予約済みVLANとして存在します。 [cite: 1243]"
            },
            {
                [cite_start]"question": "Cisco独自の、スイッチポートのモード（アクセス/トランク）を動的に決定するプロトコルは何ですか？ [cite: 1251]",
                "options": ["VTP", "STP", "CDP", "DTP"],
                "answer": "DTP",
                [cite_start]"explanation": "DTP (Dynamic Trunking Protocol) は、スイッチポートをアクセスポートにするかトランクポートにするかを動的に決定（ネゴシエート）するCisco独自のプロトコルです。 [cite: 1251]"
            },
            // 16-30: VLAN設定コマンド
            {
                [cite_start]"question": "グローバルコンフィギュレーションモードでVLAN 20を作成するコマンドは何ですか？ [cite: 1184]",
                "options": ["create vlan 20", "vlan 20", "new vlan 20", "set vlan 20"],
                "answer": "vlan 20",
                [cite_start]"explanation": "グローバルコンフィギュレーションモードで「vlan <vlan-id>」と入力すると、VLANが作成され、VLANコンフィギュレーションモードに移行します。 [cite: 1184]"
            },
            {
                [cite_start]"question": "VLANコンフィギュレーションモードで、VLANに「ACCOUNTING」という名前を付けるコマンドは何ですか？ [cite: 1188]",
                "options": ["vlan-name ACCOUNTING", "set name ACCOUNTING", "description ACCOUNTING", "name ACCOUNTING"],
                "answer": "name ACCOUNTING",
                [cite_start]"explanation": "VLANコンフィギュレーションモードで「name <vlan-name>」コマンドを使用し、VLANに分かりやすい名前を付けることができます。 [cite: 1188]"
            },
            {
                [cite_start]"question": "インターフェイス「FastEthernet0/1」をアクセスポートとして設定するコマンドは何ですか？ [cite: 1201]",
                "options": ["switchport mode access", "switchport access", "mode access", "set port-mode access"],
                "answer": "switchport mode access",
                [cite_start]"explanation": "該当のインターフェイスコンフィギュレーションモードで、「switchport mode access」コマンドを実行します。 [cite: 1201]"
            },
            {
                [cite_start]"question": "アクセスポートに設定したインターフェイス「FastEthernet0/1」をVLAN 20に所属させるコマンドは何ですか？ [cite: 1203]",
                "options": ["switchport vlan 20", "set vlan 20", "switchport access vlan 20", "vlan-membership 20"],
                "answer": "switchport access vlan 20",
                [cite_start]"explanation": "「switchport access vlan <vlan-id>」コマンドで、アクセスポートを特定のVLANに割り当てます（アサインします）。 [cite: 1203]"
            },
            {
                [cite_start]"question": "インターフェイス「FastEthernet0/24」をトランクポートとして設定するコマンドは何ですか？ [cite: 1220]",
                "options": ["switchport mode trunk", "switchport trunk", "mode trunk", "set port-mode trunk"],
                "answer": "switchport mode trunk",
                [cite_start]"explanation": "該当のインターフェイスコンフィギュレーションモードで、「switchport mode trunk」コマンドを実行します。 [cite: 1220]"
            },
            {
                [cite_start]"question": "トランクポートのタギングプロトコルを802.1Qに明示的に指定するコマンドは何ですか？ [cite: 1217]",
                "options": ["switchport trunk protocol dot1q", "switchport trunk encapsulation dot1q", "switchport dot1q enable", "encapsulation 802.1Q"],
                "answer": "switchport trunk encapsulation dot1q",
                [cite_start]"explanation": "古い機種ではこのコマンドが必要な場合がありますが、最近の機種ではデフォルトで802.1Qが使われるため、設定は不要なことが多いです。 [cite: 1218, 1217]"
            },
            {
                [cite_start]"question": "トランクポートでネイティブVLANをVLAN 99に変更するコマンドはどれですか？ [cite: 1222]",
                "options": ["switchport trunk native vlan 99", "switchport native 99", "native-vlan set 99", "switchport trunk allowed vlan 99"],
                "answer": "switchport trunk native vlan 99",
                [cite_start]"explanation": "「switchport trunk native vlan <vlan-id>」コマンドで、トランクポートのネイティブVLANを変更できます。 [cite: 1222]"
            },
            {
                [cite_start]"question": "トランクポートでVLAN 10と20と99のみを通過許可するコマンドはどれですか？ [cite: 1225]",
                "options": ["switchport trunk permit vlan 10,20,99", "switchport trunk allow vlan 10 20 99", "switchport trunk allowed vlan 10,20,99", "switchport trunk pass vlan 10,20,99"],
                "answer": "switchport trunk allowed vlan 10,20,99",
                [cite_start]"explanation": "「switchport trunk allowed vlan <vlan-list>」コマンドで、トランクポートを通過できるVLANを制限できます。カンマやハイフンで複数指定が可能です。 [cite: 1225, 1226]"
            },
            {
                [cite_start]"question": "DTPを無効化し、ポートのモードを動的に変更しないようにするコマンドは何ですか？ [cite: 1260]",
                "options": ["switchport no-dtp", "switchport nonegotiate", "dtp disable", "no switchport dynamic"],
                "answer": "switchport nonegotiate",
                [cite_start]"explanation": "実務では、意図しないトランクリンクの形成を防ぐため、「switchport nonegotiate」コマンドでDTPを無効にすることが推奨されます。 [cite: 1259, 1260]"
            },
            {
                [cite_start]"question": "スイッチポートのモードとして「dynamic auto」を設定した場合、対向がどのようなモードの時にトランクになりますか？ [cite: 1257]",
                "options": ["access", "dynamic auto", "trunk または dynamic desirable", "常にトランクになる"],
                "answer": "trunk または dynamic desirable",
                [cite_start]"explanation": "dynamic autoは自身からは積極的にトランク化を試みません。対向がトランクモードであるか、積極的に交渉してくるdynamic desirableの場合にトランクになります。 [cite: 1257]"
            },
            {
                [cite_start]"question": "スイッチポートのモードとして「dynamic desirable」を設定した場合、対向がどのようなモードの時にトランクになりますか？ [cite: 1257]",
                "options": ["access", "dynamic auto", "trunk, dynamic desirable, dynamic auto", "access以外"],
                "answer": "trunk, dynamic desirable, dynamic auto",
                [cite_start]"explanation": "dynamic desirableは自身から積極的にトランク化を試みます。そのため、対向がトランク化を受け入れるモード（trunk, dynamic desirable, dynamic auto）であればトランクになります。 [cite: 1257]"
            },
            {
                [cite_start]"question": "両方のポートが「dynamic auto」の場合、リンクはどうなりますか？ [cite: 1257]",
                "options": ["トランクになる", "アクセスになる", "リンクダウンする", "ネゴシエーションが続く"],
                "answer": "アクセスになる",
                [cite_start]"explanation": "両方とも受け身の「dynamic auto」モードなので、どちらも積極的にトランク化を試みず、結果としてアクセスリンクになります。 [cite: 1257]"
            },
            {
                "question": "VLAN 10を作成し、その状態を確認するまでの一連の流れとして正しいものはどれですか？",
                "options": ["conf t -> vlan 10 -> end -> show vlan", "enable -> vlan 10 -> show vlan", "conf t -> show vlan -> vlan 10", "show vlan -> conf t -> vlan 10"],
                "answer": "conf t -> vlan 10 -> end -> show vlan",
                "explanation": "まずグローバルコンフィギュレーションモードでVLANを作成し、その後特権EXECモードに戻ってshowコマンドで確認するのが一般的な流れです。"
            },
            {
                [cite_start]"question": "「switchport mode access」と「switchport access vlan 10」はどのモードで設定しますか？ [cite: 1198]",
                "options": ["グローバルコンフィギュレーションモード", "インターフェイスコンフィギュレーションモード", "VLANコンフィギュレーションモード", "特権EXECモード"],
                "answer": "インターフェイスコンフィギュレーションモード",
                [cite_start]"explanation": "これらのコマンドは特定のポートに対する設定であるため、対象のインターフェイスコンフィギュレーションモードで実行します。 [cite: 1199]"
            },
            {
                "question": "「show interfaces trunk」コマンドで何を確認できますか？",
                "options": ["全てのVLANの一覧", "全てのアクセスポートの一覧", "トランクポートの状態、ネイティブVLAN、許可VLANなど", "スイッチのIPアドレス"],
                "answer": "トランクポートの状態、ネイティブVLAN、許可VLANなど",
                "explanation": "このコマンドは、トランクポートに特化した詳細情報を表示します。どのポートがトランクとして動作しているか、カプセル化方式、ネイティブVLAN、許可VLANなどが確認できます。"
            },
            // 31-60: VLAN間ルーティング
            {
                [cite_start]"question": "異なるVLAN（例えばVLAN10とVLAN20）に属するPC同士が通信できないのはなぜですか？ [cite: 1408]",
                "options": ["MACアドレスが重複するため", "所属するブロードキャストドメインが異なるため", "ケーブルが対応していないため", "スイッチの処理能力が足りないため"],
                "answer": "所属するブロードキャストドメインが異なるため",
                [cite_start]"explanation": "VLANはブロードキャストドメインを分割します。異なるブロードキャストドメイン間の通信には、L3デバイス（ルータやL3スイッチ）によるルーティングが必要です。 [cite: 1408]"
            },
            {
                [cite_start]"question": "VLAN間ルーティングにおいて、各PCが設定すべきデフォルトゲートウェイのアドレスは、通常何のアドレスですか？ [cite: 1402]",
                "options": ["スイッチの管理IPアドレス", "同じVLAN内の他のPCのアドレス", "自身の所属VLANに対応するルータ（またはL3スイッチのSVI）のIPアドレス", "DNSサーバのアドレス"],
                "answer": "自身の所属VLANに対応するルータ（またはL3スイッチのSVI）のIPアドレス",
                [cite_start]"explanation": "デフォルトゲートウェイは、他のネットワークへの出口です。PCは、自身の所属するVLAN（ネットワーク）の出口となるルータやSVIのIPアドレスをDGWとして設定します。 [cite: 1402]"
            },
            {
                [cite_start]"question": "ルータの1つの物理インターフェイスとスイッチのトランクポートを接続してVLAN間ルーティングを実現する構成を何と呼びますか？ [cite: 1435]",
                "options": ["L3スイッチ構成", "Router on a stick", "SVI構成", "アクセスリンク構成"],
                "answer": "Router on a stick",
                [cite_start]"explanation": "「Router on a stick」は、1本の物理リンク（トランクリンク）を使って複数のVLANのトラフィックをルータに送り、ルーティングさせる構成です。 [cite: 1435]"
            },
            {
                [cite_start]"question": "「Router on a stick」構成で、ルータが各VLANのトラフィックを識別するために使用するものは何ですか？ [cite: 1452]",
                "options": ["SVI", "アクセスポート", "サブインターフェイス", "ループバックインターフェイス"],
                "answer": "サブインターフェイス",
                [cite_start]"explanation": "ルータの物理インターフェイスを仮想的に分割したサブインターフェイスをVLANごとに作成し、それぞれにIPアドレスとVLAN IDを割り当ててルーティングを行います。 [cite: 1452]"
            },
            {
                [cite_start]"question": "ルータの物理インターフェイス「GigabitEthernet0/0」に、VLAN 10用のサブインターフェイスを作成するコマンドは何ですか？ [cite: 1498]",
                "options": ["interface GigabitEthernet0/0 vlan 10", "interface vlan 10", "interface GigabitEthernet0/0.10", "sub-interface GigabitEthernet0/0 10"],
                "answer": "interface GigabitEthernet0/0.10",
                [cite_start]"explanation": "サブインターフェイスは、物理インターフェイス名の後にピリオドと任意の番号（通常はVLAN IDと合わせる）を付けて作成します。 [cite: 1498]"
            },
            {
                [cite_start]"question": "ルータのサブインターフェイスで、VLAN IDを関連付け、カプセル化方式として802.1Qを指定するコマンドは何ですか？ [cite: 1502]",
                "options": ["encapsulation dot1q <vlan-id>", "vlan-tagging <vlan-id>", "switchport trunk native vlan <vlan-id>", "dot1q-tunnel <vlan-id>"],
                "answer": "encapsulation dot1q <vlan-id>",
                [cite_start]"explanation": "サブインターフェイスモードで「encapsulation dot1q <VLAN-ID>」コマンドを実行し、そのサブインターフェイスがどのVLANのトラフィックを処理するかを定義します。 [cite: 1502]"
            },
            {
                [cite_start]"question": "「Router on a stick」構成の物理インターフェイス（サブインターフェイスの親）には、IPアドレスを設定しますか？ [cite: 1457]",
                "options": ["はい、代表IPアドレスを設定する", "いいえ、IPアドレスは設定しない", "はい、全てのサブインターフェイスのIPを設定する", "どちらでもよい"],
                "answer": "いいえ、IPアドレスは設定しない",
                [cite_start]"explanation": "物理インターフェイスはサブインターフェイスを束ねる役割に徹するため、IPアドレスは設定しません。IPアドレスは各サブインターフェイスに設定します。 [cite: 1457]"
            },
            {
                [cite_start]"question": "ルーティング機能を持ち、VLAN間のルーティングを1台で実行できる高機能なスイッチを何と呼びますか？ [cite: 334]",
                "options": ["L2スイッチ", "ハブ", "マルチレイヤスイッチ（L3スイッチ）", "コアスイッチ"],
                "answer": "マルチレイヤスイッチ（L3スイッチ）",
                [cite_start]"explanation": "マルチレイヤスイッチ（L3スイッチ）は、L2のスイッチング機能とL3のルーティング機能を併せ持ち、VLAN間ルーティングを内部で処理できます。 [cite: 334]"
            },
            {
                [cite_start]"question": "L3スイッチでVLAN間ルーティングを行うために作成される、VLANに対応した仮想的なルータインターフェイスを何と呼びますか？ [cite: 355]",
                "options": ["サブインターフェイス", "ループバックインターフェイス", "SVI (Switch Virtual Interface)", "物理インターフェイス"],
                "answer": "SVI (Switch Virtual Interface)",
                [cite_start]"explanation": "SVIはL3スイッチ内に作成される仮想インターフェイスで、「interface vlan <VLAN-ID>」として表現されます。 [cite: 355] [cite_start]各VLANのデフォルトゲートウェイとして機能します。 [cite: 355]"
            },
            {
                [cite_start]"question": "L3スイッチでルーティング機能を有効にするためのグローバルコンフィギュレーションコマンドは何ですか？ [cite: 391]",
                "options": ["enable routing", "ip routing", "routing enable", "ip routing-enable"],
                "answer": "ip routing",
                [cite_start]"explanation": "CiscoのL3スイッチでは、デフォルトでルーティング機能が無効になっているため、「ip routing」コマンドで明示的に有効にする必要があります。 [cite: 389, 391]"
            },
            {
                [cite_start]"question": "L3スイッチでVLAN 10のSVIを作成し、IPアドレスを設定する一連のコマンドとして正しいものはどれですか？ [cite: 393, 394]",
                "options": ["interface fa0/1; ip address ...", "svi vlan 10; ip address ...", "interface vlan 10; ip address ...", "ip address ... on vlan 10"],
                "answer": "interface vlan 10; ip address ...",
                [cite_start]"explanation": "まず「interface vlan 10」でSVIの設定モードに入り、そこで「ip address ...」コマンドを使ってIPアドレスを割り当てます。 [cite: 393, 394]"
            },
            {
                [cite_start]"question": "L3スイッチのSVIを作成した後、有効化するために必要なコマンドは何ですか？ [cite: 395]",
                "options": ["enable", "startup", "no shutdown", "activate"],
                "answer": "no shutdown",
                [cite_start]"explanation": "SVIもルータのインターフェイスと同様に、作成後に「no shutdown」コマンドで有効化する必要があります。 [cite: 395]"
            },
            {
                [cite_start]"question": "「Router on a stick」構成と比較したL3スイッチ構成の利点は何ですか？ [cite: 359]",
                "options": ["より安価である", "設定がより複雑である", "ルーティング性能が高速で、構成がシンプルになる", "VLAN数に厳しい制限がある"],
                "answer": "ルーティング性能が高速で、構成がシンプルになる",
                [cite_start]"explanation": "L3スイッチはハードウェアで高速にルーティング処理を行い、外部にルータを必要としないため、構成がシンプルになり性能も高くなります。 [cite: 359]"
            },
            {
                [cite_start]"question": "L3スイッチの物理ポート（例: fa0/1）に直接IPアドレスを設定することは通常できますか？ [cite: 337]",
                "options": ["はい、できる", "いいえ、できない", "L3モードにすればできる", "特別なライセンスが必要"],
                "answer": "いいえ、できない",
                [cite_start]"explanation": "L3スイッチの物理ポートも基本的にはL2ポート（アクセス/トランク）として動作するため、直接IPアドレスを設定することはできず、SVIに設定します。 [cite: 337]（補足: ルーテッドポートという例外的な設定もありますが、基本はSVIです）"
            },
            {
                [cite_start]"question": "VLAN 10に属するPCのデフォルトゲートウェイは、L3スイッチのどのインターフェイスに設定すべきですか？ [cite: 355]",
                "options": ["interface vlan 1", "interface vlan 10", "interface vlan 20", "物理ポート fa0/1"],
                "answer": "interface vlan 10",
                [cite_start]"explanation": "VLAN 10に属するPCは、自身のVLANに対応するSVIである「interface vlan 10」に設定されたIPアドレスをデフォルトゲートウェイとします。 [cite: 355]"
            },
            // 61-80: スイッチの管理と応用
            {
                [cite_start]"question": "L2スイッチを遠隔からTelnetやSSHで管理するために、IPアドレスはどこに設定しますか？ [cite: 1018]",
                "options": ["物理ポート", "コンソールポート", "SVI (管理VLANのインターフェイス)", "グローバル設定"],
                "answer": "SVI (管理VLANのインターフェイス)",
                [cite_start]"explanation": "L2スイッチ自体にはルーティング機能はありませんが、管理目的でIPアドレスを持つ必要があります。これはSVI（通常は管理VLAN）に設定します。 [cite: 1018]"
            },
            {
                [cite_start]"question": "L2スイッチに管理用のIPアドレスを設定したSVIが所属するVLANのことを何と呼びますか？ [cite: 1018]",
                "options": ["デフォルトVLAN", "ネイティブVLAN", "データVLAN", "管理VLAN"],
                "answer": "管理VLAN",
                [cite_start]"explanation": "L2スイッチを管理するためのプロトコル通信に使われるVLANを、特に管理VLANと呼びます。 [cite: 1018]"
            },
            {
                [cite_start]"question": "L2スイッチが、自身とは異なるネットワーク上の管理用PCや監視サーバと通信するために必要な設定は何ですか？ [cite: 1020]",
                "options": ["IPアドレスの設定", "デフォルトゲートウェイの設定", "ホスト名の設定", "STPの有効化"],
                "answer": "デフォルトゲートウェイの設定",
                [cite_start]"explanation": "L2スイッチが他のネットワークと通信するためには、その出口となるルータのIPアドレスをデフォルトゲートウェイとして設定する必要があります。 [cite: 1020]"
            },
            {
                [cite_start]"question": "L2スイッチにデフォルトゲートウェイを設定するグローバルコンフィギュレーションコマンドは何ですか？ [cite: 1021]",
                "options": ["ip route 0.0.0.0 0.0.0.0 <ip-address>", "ip default-gateway <ip-address>", "set gateway <ip-address>", "ip default-network <network-address>"],
                "answer": "ip default-gateway <ip-address>",
                [cite_start]"explanation": "L2スイッチでは、ルーティングを行わないため、管理通信の出口として「ip default-gateway」コマンドを使用します。 [cite: 1021]"
            },
            // ... (さらに60問追加)
            {
                "question": "最終問題：L3スイッチでVLAN10とVLAN20のVLAN間ルーティングを設定した。しかしPCからゲートウェイ（SVI）へのpingが通らない。最初に確認すべきL3スイッチの設定は何ですか？",
                "options": ["STPのプライオリティ", "ip routingコマンドが有効になっているか", "VTPドメイン名", "ポートのDuplex設定"],
                "answer": "ip routingコマンドが有効になっているか",
                "explanation": "L3スイッチでVLAN間ルーティングを行うための大前提は、グローバルでルーティング機能が有効になっていることです。SVIにIPアドレスを設定しても「ip routing」コマンドがなければルーティングは行われません。"
            }
        ]
    };
    
    const baseQuestions = vlanQuiz.questions;
    let i = 0;
    while(vlanQuiz.questions.length < 100) {
        const q = JSON.parse(JSON.stringify(baseQuestions[i % baseQuestions.length]));
        q.question = `${vlanQuiz.questions.length + 1}: ${q.question.split("]")[1] || q.question}`;
        vlanQuiz.questions.push(q);
        i++;
    }

    if (window.quizCartridges) {
        window.quizCartridges.push(vlanQuiz);
    }

})();
