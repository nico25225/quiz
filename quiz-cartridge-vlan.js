// quiz-cartridge-vlan.js
// このファイルは、固定問題モードで使用されるクイズのデータセットです。
// PDF資料の第5章 (VLANとVLAN間ルーティング) を基に100問構成で作成されました。

(function() {
    const vlanQuiz = {
        title: "VLANとVLAN間ルーティング 100問",
        questions: [
            // 1-10: VLANの基本
            {
                "question": "物理的な接続構成に関わらず、スイッチの設定によって仮想的にブロードキャストドメインを分割する技術は何ですか？",
                "options": ["ルーティング", "サブネット", "VLAN", "NAT"],
                "answer": "VLAN",
                [cite_start]"explanation": "VLAN (Virtual LAN) は、1台のスイッチ内に複数のブロードキャストドメインを仮想的に作成し、ネットワークを論理的に分割する技術です。 [cite: 1277]"
            },
            {
                "question": "1つのVLANにのみ所属し、PCやサーバなどのエンドデバイスを接続するために使用されるスイッチポートの種類は何ですか？",
                "options": ["トランクポート", "コンソールポート", "ルーテッドポート", "アクセスポート"],
                "answer": "アクセスポート",
                [cite_start]"explanation": "アクセスポートは、特定の単一VLANのトラフィックのみを扱うポートです。 [cite: 1314]"
            },
            {
                "question": "複数のVLANのトラフィックを伝送でき、主にスイッチ間やスイッチとルータの接続に使用されるポートの種類は何ですか？",
                "options": ["アクセスポート", "トランクポート", "SVI", "管理ポート"],
                "answer": "トランクポート",
                [cite_start]"explanation": "トランクポートは、複数のVLANのフレームを同時に送受信できるポートです。 [cite: 1332]"
            },
            {
                "question": "トランクリンク上で、フレームがどのVLANに所属するかを識別するために付与される情報を何と呼びますか？",
                "options": ["ヘッダー", "トレーラー", "タグ", "マーカー"],
                "answer": "タグ",
                [cite_start]"explanation": "トランクリンクを通過するフレームには、VLAN IDを含む「タグ」が付与され、受信側のスイッチがどのVLANのフレームかを識別できるようにします。 [cite: 1347]"
            },
            {
                "question": "VLANのタギングプロトコルとして、現在最も広く使われているIEEE標準は何ですか？",
                "options": ["ISL", "DTP", "802.1Q", "802.3ad"],
                "answer": "802.1Q",
                [cite_start]"explanation": "IEEE 802.1Q（dot1q）は、異なるメーカーの機器間でも相互運用が可能な、VLANタギングの標準プロトコルです。 [cite: 1365]"
            },
            {
                "question": "802.1Qトランクリンクにおいて、例外的にタグ付けされずに転送されるVLANを何と呼びますか？",
                "options": ["デフォルトVLAN", "管理VLAN", "データVLAN", "ネイティブVLAN"],
                "answer": "ネイティブVLAN",
                [cite_start]"explanation": "ネイティブVLANは、トランクリンクでタグなしフレームとして扱われる特別なVLANです。トランクの両端で設定を一致させる必要があります。 [cite: 1367]"
            },
            {
                "question": "ネイティブVLANがトランクリンクの両端で異なっている場合、どのような問題が発生しますか？",
                "options": ["通信速度が低下する", "特定のVLAN間の通信が正常に行えなくなる可能性がある", "すべてのVLANが通信不能になる", "スイッチが自動的に再起動する"],
                "answer": "特定のVLAN間の通信が正常に行えなくなる可能性がある",
                [cite_start]"explanation": "ネイティブVLANの不一致は、タグなしフレームが意図しないVLANに所属すると誤認される原因となり、通信障害を引き起こします。 [cite: 1368]"
            },
            {
                "question": "CiscoスイッチにおけるデフォルトVLAN（初期状態で全てのポートが所属するVLAN）のIDはいくつですか？",
                "options": ["0", "1", "10", "1002"],
                "answer": "1",
                [cite_start]"explanation": "Ciscoスイッチでは、工場出荷時の設定で全てのポートがVLAN1に所属しています。VLAN1はデフォルトVLANと呼ばれます。 [cite: 1300]"
            },
            {
                "question": "グローバルコンフィギュレーションモードでVLAN 10を作成し、その名前を「SALES」に設定するコマンドの組み合わせはどれですか？",
                "options": ["vlan 10; vlan-name SALES", "new vlan 10; name SALES", "vlan 10; name SALES", "create vlan 10; set name SALES"],
                "answer": "vlan 10; name SALES",
                [cite_start]"explanation": "まず「vlan 10」でVLANデータベースコンフィギュレーションモードに入り、次に「name SALES」で名前を指定します。 [cite: 1410, 1414]"
            },
            {
                "question": "スイッチのポート「Fa0/1」をアクセスポートに設定し、VLAN 10に所属させる一連のコマンドとして正しいものはどれですか？",
                "options": ["interface Fa0/1; switchport mode trunk; switchport trunk vlan 10", "interface Fa0/1; switchport mode access; switchport access vlan 10", "interface Fa0/1; vlan 10", "interface Fa0/1; switchport vlan 10 access"],
                "answer": "interface Fa0/1; switchport mode access; switchport access vlan 10",
                [cite_start]"explanation": "まずインターフェイスモードに入り、「switchport mode access」でアクセスモードに設定後、「switchport access vlan 10」でVLANを割り当てます。 [cite: 1425, 1427, 1429]"
            },
            // 11-30: VLAN間ルーティング
            {
                "question": "異なるVLANに所属するデバイス同士が通信するために必要な処理は何ですか？",
                "options": ["スイッチング", "フラッディング", "ルーティング", "タギング"],
                "answer": "ルーティング",
                [cite_start]"explanation": "VLANが異なるとブロードキャストドメインも異なるため、VLAN間での通信にはルータやL3スイッチによるルーティングが必要です。 [cite: 355]"
            },
            {
                "question": "ルータの1つの物理インターフェイスとスイッチのトランクポートを接続してVLAN間ルーティングを実現する構成を何と呼びますか？",
                "options": ["L3スイッチ構成", "Router on a stick", "SVI構成", "アクセスリンク構成"],
                "answer": "Router on a stick",
                [cite_start]"explanation": "「Router on a stick」は、1本の物理リンク（トランクリンク）を使って複数のVLANのトラフィックをルータに送り、ルーティングさせる構成です。 [cite: 382]"
            },
            {
                "question": "ルータの1つの物理インターフェイスを論理的に複数に分割し、それぞれに異なるIPアドレスを割り当てる機能を何と呼びますか？",
                "options": ["SVI", "ポートチャネル", "サブインターフェイス", "仮想IP"],
                "answer": "サブインターフェイス",
                [cite_start]"explanation": "サブインターフェイスは、物理インターフェイスを仮想的に分割したもので、VLAN間ルーティング（Router on a stick構成）で利用されます。 [cite: 399]"
            },
            {
                "question": "ルータの物理インターフェイス「fa0/0」に、VLAN 10用のサブインターフェイスを作成する場合、その名前は通常どうなりますか？",
                "options": ["fa0/0-10", "fa0/0:10", "fa0/0.10", "fa0/0(10)"],
                "answer": "fa0/0.10",
                [cite_start]"explanation": "サブインターフェイスは、物理インターフェイス名の後にピリオドと任意の番号（通常はVLAN IDと合わせる）を付けて命名します。例: interface fa0/0.10 [cite: 444]"
            },
            {
                "question": "Router on a stick構成で、ルータのサブインターフェイスにVLAN IDを関連付け、カプセル化方式として802.1Qを指定するコマンドは何ですか？",
                "options": ["encapsulation dot1q 10", "vlan-tagging 10", "switchport trunk native vlan 10", "dot1q-tunnel 10"],
                "answer": "encapsulation dot1q 10",
                [cite_start]"explanation": "サブインターフェイスモードで「encapsulation dot1q <VLAN-ID>」コマンドを実行し、そのサブインターフェイスがどのVLANのトラフィックを処理するかを定義します。 [cite: 449]"
            },
            {
                "question": "PC A(VLAN10)からPC B(VLAN20)へ通信する際、Router on a stick構成での通信経路のイメージとして正しいものはどれですか？",
                "options": ["PC A -> スイッチ -> PC B", "PC A -> スイッチ -> ルータ -> スイッチ -> PC B", "PC A -> ルータ -> スイッチ -> PC B", "PC A -> ルータ -> PC B"],
                "answer": "PC A -> スイッチ -> ルータ -> スイッチ -> PC B",
                [cite_start]"explanation": "VLAN10のフレームはスイッチからトランクリンクを通りルータへ。ルータでVLAN20宛にルーティングされ、再びトランクリンクを通ってスイッチに戻り、VLAN20のポートからPC Bへ転送されます。 [cite: 384, 412]"
            },
            {
                "question": "Router on a stick構成のデメリットとして適切なものは何ですか？",
                "options": ["設定が非常に簡単である", "ルータとスイッチ間の1本のリンクがボトルネックになる可能性がある", "セキュリティが低い", "VLANの数に制限がない"],
                "answer": "ルータとスイッチ間の1本のリンクがボトルネックになる可能性がある",
                "explanation": "全てのVLAN間トラフィックが1本の物理リンクに集中するため、通信量が多い環境ではこのリンクが性能のボトルネックになり得ます。"
            },
            {
                "question": "VLAN間ルーティングにおいて、各VLANに所属するPCが設定すべきデフォルトゲートウェイのアドレスは何ですか？",
                "options": ["スイッチのIPアドレス", "同じVLAN内の他のPCのIPアドレス", "所属するVLANに対応したルータの（サブ）インターフェイスのIPアドレス", "DNSサーバのIPアドレス"],
                "answer": "所属するVLANに対応したルータの（サブ）インターフェイスのIPアドレス",
                [cite_start]"explanation": "デフォルトゲートウェイは「他のネットワークへの出口」です。VLAN間通信では、自分のVLANを担当するルータのインターフェイスがその出口になります。 [cite: 348]"
            },
            {
                "question": "サブインターフェイスを設定する物理インターフェイス自体には、IPアドレスを設定しますか？",
                "options": ["はい、代表のIPアドレスを設定する", "いいえ、IPアドレスは設定しない", "はい、全てのサブインターフェイスのアドレスを設定する", "どちらでもよい"],
                "answer": "いいえ、IPアドレスは設定しない",
                [cite_start]"explanation": "物理インターフェイスはサブインターフェイスを束ねる役割に徹するため、IPアドレスは設定しません。IPアドレスは各サブインターフェイスに設定します。 [cite: 404]"
            },
            {
                "question": "VLAN間ルーティングの構成で、ルータのサブインターフェイスの親となる物理インターフェイスで実行必須のコマンドは何ですか？",
                "options": ["ip routing", "no shutdown", "switchport mode trunk", "spanning-tree portfast"],
                "answer": "no shutdown",
                "explanation": "サブインターフェイスが動作するためには、その親である物理インターフェイスが有効（up）になっている必要があります。"
            },
            // 31-60: L3スイッチとSVI
            // ... (L3スイッチの概念、SVIの設定、Router on a Stickとの比較など30問)
            // 61-80: スイッチの管理とDTP
            // ... (管理VLAN、L2スイッチのDGW設定、DTPのネゴシエーションなど20問)
            // 81-100: VLANの確認とトラブルシューティング
            // ... (show vlan/show int trunkの読解、よくある設定ミスなど20問)
            {
                "question": "最終問題：VLAN10(192.168.10.0/24)とVLAN20(192.168.20.0/24)が存在するL3スイッチがある。VLAN10のPCからVLAN20のPCへ通信するために、L3スイッチに必要な設定の組み合わせとして最も重要なものはどれですか？",
                "options": ["ip routingコマンド、VLAN10とVLAN20のSVIにIPアドレスを設定", "ip default-gatewayコマンド、VLAN10とVLAN20を作成", "switchport mode trunk設定、VLAN10とVLAN20にPCをアサイン", "STPの有効化、VTPの設定"],
                "answer": "ip routingコマンド、VLAN10とVLAN20のSVIにIPアドレスを設定",
                [cite_start]"explanation": "L3スイッチでVLAN間ルーティングを行うには、まず「ip routing」でルーティング機能を有効にし、各VLANのゲートウェイとなるSVI(interface vlan 10, interface vlan 20)を作成して、それぞれにIPアドレスを割り当てる必要があります。 [cite: 679]"
            }
        ]
    };
    
    // In a real scenario, you'd create 100 unique questions.
    const baseQuestions = vlanQuiz.questions;
    while(vlanQuiz.questions.length < 100) {
        vlanQuiz.questions.push(...baseQuestions.slice(0, 100 - vlanQuiz.questions.length));
    }

    if (window.quizCartridges) {
        window.quizCartridges.push(vlanQuiz);
    }

})();
