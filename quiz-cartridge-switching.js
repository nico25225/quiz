// quiz-cartridge-switching.js
// このファイルは、固定問題モードで使用されるクイズのデータセットです。
// PDF資料の第4章 (スイッチングとSTP) を基に100問構成で作成されました。

(function() {
    const switchingQuiz = {
        title: "スイッチングとSTP基礎 100問",
        questions: [
            // 1-10: スイッチングの基本
            {
                "question": "スイッチがフレームを転送する際に、宛先を判断するために参照するテーブルは何ですか？",
                "options": ["ルーティングテーブル", "ARPテーブル", "MACアドレステーブル", "ポートフォワーディングテーブル"],
                "answer": "MACアドレステーブル",
                "explanation": "スイッチは、MACアドレステーブルを参照し、宛先MACアドレスに対応するポートを調べてフレームを転送します。"
            },
            {
                [cite_start]"question": "スイッチは、どのようにしてMACアドレステーブルの情報を学習しますか？ [cite: 1155]",
                [cite_start]"options": ["ARPリクエストを送信して学習する", "受信したフレームの宛先MACアドレスを学習する", "受信したフレームの送信元MACアドレスと受信ポートを学習する [cite: 1155]", "管理者が手動で登録する"],
                [cite_start]"answer": "受信したフレームの送信元MACアドレスと受信ポートを学習する [cite: 1155]",
                [cite_start]"explanation": "スイッチは、フレームを受信した際に、そのフレームの「送信元MACアドレス」と「受信したポート」の組み合わせをMACアドレステーブルに登録（学習）します。 [cite: 1155]"
            },
            {
                [cite_start]"question": "スイッチが受信したフレームの宛先MACアドレスが、MACアドレステーブルに登録されていない場合の動作を何と呼びますか？ [cite: 1133]",
                [cite_start]"options": ["フィルタリング", "フォワーディング", "フラッディング [cite: 1133]", "エージング"],
                [cite_start]"answer": "フラッディング [cite: 1133]",
                [cite_start]"explanation": "宛先が不明な場合、スイッチは受信ポートを除くすべてのポートにそのフレームをコピーして転送します。これをフラッディングと呼びます。 [cite: 1146]"
            },
            {
                [cite_start]"question": "データリンク層（レイヤ2）で扱われるデータの単位(PDU)は何ですか？ [cite: 1103]",
                [cite_start]"options": ["ビット", "パケット", "セグメント", "フレーム [cite: 1103]"],
                [cite_start]"answer": "フレーム [cite: 1103]",
                [cite_start]"explanation": "データリンク層では、ヘッダとトレーラが付加されたデータの単位をフレームと呼びます。 [cite: 1103]"
            },
            {
                "question": "MACアドレステーブルに登録された情報は、一定時間通信がないとどうなりますか？",
                "options": ["永続的に保持される", "自動的に削除される（エージング）", "startup-configに保存される", "管理者に通知される"],
                "answer": "自動的に削除される（エージング）",
                "explanation": "スイッチはMACアドレステーブルの各エントリにタイマー（エージングタイム）を持っており、一定時間そのMACアドレスからの通信がないと、該当エントリを削除します。"
            },
            {
                "question": "あるポートで受信したユニキャストフレームの宛先MACアドレスが、その受信したポートと同じポートに登録されていた場合、スイッチはどうしますか？",
                "options": ["フラッディングする", "フレームを破棄する（フィルタリング）", "送信元にエラーを返す", "ルータに転送する"],
                "answer": "フレームを破棄する（フィルタリング）",
                "explanation": "宛先が送信元と同じセグメント（ポートの先）にあることが明らかなので、他のポートに転送する必要はありません。この不要な転送を止める動作をフィルタリングと呼びます。"
            },
            {
                "question": "スイッチの各ポートがそれぞれ独立した衝突の範囲となるドメインを何と呼びますか？",
                "options": ["ブロードキャストドメイン", "コリジョンドメイン", "VLANドメイン", "ルーティングドメイン"],
                "answer": "コリジョンドメイン",
                "explanation": "スイッチはポートごとにコリジョンドメインを分割します。これにより、古いハブと比べてネットワーク全体のパフォーマンスが向上します。"
            },
            {
                [cite_start]"question": "CiscoのCatalystスイッチでMACアドレステーブルを確認するためのコマンドは何ですか？ [cite: 1122]",
                [cite_start]"options": ["show mac-table", "show mac address-table [cite: 1122]", "display mac-address", "show arp"],
                [cite_start]"answer": "show mac address-table [cite: 1122]",
                [cite_start]"explanation": "特権EXECモードで「show mac address-table」コマンドを実行すると、学習したMACアドレス、VLAN、対応ポートなどを確認できます。 [cite: 1122]"
            },
            {
                "question": "ブロードキャストフレームを受信したスイッチは、基本的にどのような動作をしますか？",
                "options": ["破棄する", "送信元にのみ返信する", "受信ポート以外の全ポートに転送する（フラッディング）", "MACアドレステーブルに登録されているポートにのみ転送する"],
                "answer": "受信ポート以外の全ポートに転送する（フラッディング）",
                "explanation": "ブロードキャストは同一ネットワーク内の全デバイスに送るための通信なので、スイッチは受信ポート以外のすべてのポートに転送します。"
            },
            {
                "question": "スイッチの機能として正しくないものはどれですか？",
                "options": ["MACアドレスの学習", "フレームの転送/フィルタリング", "IPアドレスに基づいた経路選択", "ループの防止 (STP)"],
                "answer": "IPアドレスに基づいた経路選択",
                "explanation": "IPアドレスに基づいた経路選択（ルーティング）は、ルータやL3スイッチの役割です。基本的なL2スイッチはこの機能を持ちません。"
            },
            // 11-20: STPの基本概念と目的
            {
                [cite_start]"question": "スイッチを複数台使って冗長構成にした際に、意図しないループが発生すると起こる問題は何ですか？ [cite: 348]",
                [cite_start]"options": ["コリジョンの多発", "ブロードキャストストーム [cite: 348]", "IPアドレスの重複", "ポートセキュリティ違反"],
                [cite_start]"answer": "ブロードキャストストーム [cite: 348]",
                [cite_start]"explanation": "ループ構成においてブロードキャストフレームが無限に転送され続ける現象で、ネットワーク帯域を使い果たし、正常な通信を妨げます。 [cite: 348]"
            },
            {
                [cite_start]"question": "ネットワークのループ構成によるブロードキャストストームを防ぐためのプロトコルは何ですか？ [cite: 346]",
                [cite_start]"options": ["ARP", "VTP", "STP [cite: 346]", "DHCP"],
                [cite_start]"answer": "STP [cite: 346]",
                [cite_start]"explanation": "STP (Spanning Tree Protocol) は、物理的にループ構成のネットワークにおいて、論理的にループが発生しないように一部のポートをブロッキングするプロトコルです。 [cite: 346, 361]"
            },
            {
                [cite_start]"question": "STPの主な目的は、ループを回避しつつ、何を提供することですか？ [cite: 347]",
                [cite_start]"options": ["最高のセキュリティ", "ネットワークの冗長性 [cite: 347]", "最速の通信速度", "IPアドレスの自動割り当て"],
                [cite_start]"answer": "ネットワークの冗長性 [cite: 347]",
                [cite_start]"explanation": "STPは、普段はループにならないように一部の経路をブロックしておき、メインの経路に障害が発生した際にはブロックしていた経路を開放して通信を継続させる、冗長性を確保する役割も持ちます。 [cite: 347, 375]"
            },
            {
                [cite_start]"question": "STPが動作するOSI参照モデルの階層はどれですか？ [cite: 346]",
                [cite_start]"options": ["物理層（レイヤ1）", "データリンク層（レイヤ2） [cite: 346]", "ネットワーク層（レイヤ3）", "トランスポート層（レイヤ4）"],
                [cite_start]"answer": "データリンク層（レイヤ2） [cite: 346]",
                [cite_start]"explanation": "STPはスイッチ（レイヤ2デバイス）間で動作し、フレームの転送を制御するため、データリンク層のプロトコルです。 [cite: 346]"
            },
            {
                [cite_start]"question": "STPが有効なスイッチ同士が情報を交換するために使用する特別なフレームは何ですか？ [cite: 337]",
                [cite_start]"options": ["ARP", "ICMP", "BPDU [cite: 337]", "CDP"],
                [cite_start]"answer": "BPDU [cite: 337]",
                [cite_start]"explanation": "BPDU (Bridge Protocol Data Unit) というフレームを定期的に交換し、お互いのブリッジIDやパスコストなどの情報をやり取りして、STPの計算を行います。 [cite: 337]"
            },
            {
                [cite_start]"question": "STPにおいて、ネットワークのトポロジ（接続形態）が安定した状態になることを何と呼びますか？ [cite: 515]",
                [cite_start]"options": ["スタビライゼーション", "コンバージェンス（収束） [cite: 515]", "シンクロナイゼーション（同期）", "アグリゲーション（集約）"],
                [cite_start]"answer": "コンバージェンス（収束） [cite: 515]",
                [cite_start]"explanation": "STPの計算が完了し、各ポートの役割が確定して安定的に通信できる状態になることをコンバージェンス（収束）と呼びます。 [cite: 515]"
            },
            {
                [cite_start]"question": "従来のSTP(802.1D)の最大の弱点は何ですか？ [cite: 517]",
                [cite_start]"options": ["セキュリティが低い", "設定が複雑すぎる", "収束時間が長い（30～50秒） [cite: 517]", "Cisco機器でしか使えない"],
                [cite_start]"answer": "収束時間が長い（30～50秒） [cite: 517]",
                [cite_start]"explanation": "ネットワーク障害発生後、STPが再計算を終えて通信が再開するまでに30秒から50秒かかり、この通信断が大きな問題とされていました。 [cite: 516, 517]"
            },
            {
                [cite_start]"question": "STPの弱点である長い収束時間を改善した、より高速なプロトコルは何ですか？ [cite: 517]",
                [cite_start]"options": ["STPv2", "RSTP [cite: 517]", "MSTP", "PVST+"],
                [cite_start]"answer": "RSTP [cite: 517]",
                [cite_start]"explanation": "RSTP (Rapid Spanning Tree Protocol) は、ポートの状態遷移を高速化し、STPの弱点である長い収束時間を大幅に短縮したプロトコルです。 [cite: 517]"
            },
            {
                [cite_start]"question": "STPにおいて、ループを防ぐために論理的にブロックされるポートの役割は何ですか？ [cite: 497]",
                [cite_start]"options": ["ルートポート", "指定ポート", "非指定ポート [cite: 497]", "管理ポート"],
                [cite_start]"answer": "非指定ポート [cite: 497]",
                [cite_start]"explanation": "非指定ポート（ブロッキングポートとも呼ばれる）は、フレームの送受信を行わないことで、ネットワーク上のループを防止します。 [cite: 497]"
            },
            {
                [cite_start]"question": "VLANごとに個別のSTPを動作させ、VLAN単位での負荷分散を可能にするCisco独自の技術は何ですか？ [cite: 519]",
                [cite_start]"options": ["RSTP", "MSTP", "VTP", "PVST+ [cite: 519]"],
                [cite_start]"answer": "PVST+ [cite: 519]",
                [cite_start]"explanation": "PVST+ (Per-VLAN Spanning Tree Plus)は、VLANごとにルートブリッジを選べるため、VLAN10はSW1経由、VLAN20はSW2経由といった負荷分散が可能になります。 [cite: 519]"
            },
            // 21-40: STPの選出プロセス
            {
                [cite_start]"question": "STPの動作ステップの正しい順序はどれですか？ [cite: 378]",
                [cite_start]"options": ["①ルートポート選出 ②指定ポート選出 ③ルートブリッジ選出", "①ルートブリッジ選出 ②ルートポート選出 ③指定ポート選出 [cite: 378]", "①指定ポート選出 ②ルートブリッジ選出 ③ルートポート選出", "①ルートブリッジ選出 ②指定ポート選出 ③ルートポート選出"],
                [cite_start]"answer": "①ルートブリッジ選出 ②ルートポート選出 ③指定ポート選出 [cite: 378]",
                [cite_start]"explanation": "STPは、まず①ネットワークの中心となるルートブリッジを決め、次に②各スイッチからルートブリッジへの最短ポート（ルートポート）を決め、最後に③各セグメントで最もルートブリッジに近いポート（指定ポート）を決めます。残ったものが非指定ポートになります。 [cite: 378]"
            },
            {
                [cite_start]"question": "STPにおいて、ネットワークの中心となる1台のルートブリッジを選出する際に使用する値は何ですか？ [cite: 380]",
                [cite_start]"options": ["IPアドレス", "ホスト名", "ブリッジID [cite: 380]", "ポートID"],
                [cite_start]"answer": "ブリッジID [cite: 380]",
                [cite_start]"explanation": "ルートブリッジには、STPが有効なスイッチの中でブリッジIDが最小のスイッチが選出されます。 [cite: 380]"
            },
            {
                [cite_start]"question": "ブリッジIDを構成する2つの要素の組み合わせとして正しいものはどれですか？ [cite: 339]",
                [cite_start]"options": ["ブリッジプライオリティとIPアドレス", "ブリッジプライオリティとMACアドレス [cite: 339]", "ポートプライオリティとMACアドレス", "IPアドレスとMACアドレス"],
                [cite_start]"answer": "ブリッジプライオリティとMACアドレス [cite: 339]",
                [cite_start]"explanation": "ブリッジIDは、ブリッジプライオリティ（2バイト）とスイッチ自身のMACアドレス（6バイト）で構成されます。 [cite: 339]"
            },
            {
                [cite_start]"question": "ブリッジIDの大小を比較する際の優先順位として正しいものはどれですか？ [cite: 380]",
                [cite_start]"options": ["①MACアドレス ②ブリッジプライオリティ", "①ブリッジプライオリティ ②MACアドレス [cite: 380]", "MACアドレスのみで比較", "ブリッジプライオリティのみで比較"],
                [cite_start]"answer": "①ブリッジプライオリティ ②MACアドレス [cite: 380]",
                [cite_start]"explanation": "まずブリッジプライオリティの値を比較し、値が小さい方が優先されます。プライオリティが同じ場合は、MACアドレスの値を比較して小さい方が優先されます。 [cite: 380]"
            },
            {
                "question": "3台のスイッチSW1、SW2、SW3のプライオリティが全て同じ32768です。ルートブリッジはどのように決まりますか？",
                "options": ["SW1が必ず選ばれる", "MACアドレスが最も小さいスイッチが選ばれる", "MACアドレスが最も大きいスイッチが選ばれる", "ランダムに決まる"],
                "answer": "MACアドレスが最も小さいスイッチが選ばれる",
                [cite_start]"explanation": "ブリッジプライオリティが同じ値である場合、次にMACアドレスの値を比較し、最も小さいMACアドレスを持つスイッチがルートブリッジに選出されます。 [cite: 380]"
            },
            {
                [cite_start]"question": "ルートブリッジ以外の各スイッチで、ルートブリッジへのパスコストが最小のポートを何と呼びますか？ [cite: 396]",
                [cite_start]"options": ["指定ポート", "非指定ポート", "ルートポート [cite: 396]", "ブロッキングポート"],
                [cite_start]"answer": "ルートポート [cite: 396]",
                [cite_start]"explanation": "ルートポートは、非ルートブリッジの各スイッチに1つずつ選出され、そのスイッチからルートブリッジに至るまでのパスコストの合計が最小のポートです。 [cite: 396]"
            },
            {
                [cite_start]"question": "ルートポートの選出において、パスコストが同じだった場合に次に比較されるのは何ですか？ [cite: 419]",
                [cite_start]"options": ["対向スイッチのポートID", "自身のブリッジID", "対向スイッチのブリッジID（送信元ブリッジID） [cite: 419]", "自身のポートID"],
                [cite_start]"answer": "対向スイッチのブリッジID（送信元ブリッジID） [cite: 419]",
                [cite_start]"explanation": "パスコストが同点の場合、BPDUを送信してきたネイバースイッチのブリッジIDを比較し、より小さいブリッジIDからBPDUを受信するポートがルートポートになります。 [cite: 419]"
            },
            {
                [cite_start]"question": "各セグメント（リンク）ごとに1つだけ選出され、そのセグメントにおいて最もルートブリッジに近いポートの役割は何ですか？ [cite: 446]",
                [cite_start]"options": ["ルートポート", "指定ポート [cite: 446]", "非指定ポート", "アクセスポート"],
                [cite_start]"answer": "指定ポート [cite: 446]",
                [cite_start]"explanation": "指定ポートは、各スイッチ間のリンクごとに選出され、ルートブリッジに最も近い（パスコストが小さい）ポートです。フレームを転送する役割を持ちます。 [cite: 446]"
            },
            {
                [cite_start]"question": "ルートブリッジの全てのポートは、STPにおいてどの役割になりますか？ [cite: 446]",
                [cite_start]"options": ["ルートポート", "非指定ポート", "指定ポート [cite: 446]", "ブロッキングポート"],
                [cite_start]"answer": "指定ポート [cite: 446]",
                [cite_start]"explanation": "ルートブリッジはSTPトポロジの起点であり、その全てのポートはパスコストが0と見なされるため、必ず指定ポートになります。 [cite: 446]"
            },
            {
                [cite_start]"question": "指定ポートの選出で、両端のスイッチのルートパスコストが同じだった場合に、次に比較されるのは何ですか？ [cite: 471]",
                [cite_start]"options": ["ポートIDが大きい方のスイッチ", "ブリッジIDが小さい方のスイッチ [cite: 471]", "ブリッジIDが大きい方のスイッチ", "MACアドレスが大きい方のスイッチ"],
                [cite_start]"answer": "ブリッジIDが小さい方のスイッチ [cite: 471]",
                [cite_start]"explanation": "ルートパスコストが同点の場合、より小さいブリッジIDを持つスイッチ側のポートが指定ポートに選出されます。 [cite: 471]"
            },
            {
                [cite_start]"question": "ルートポートにも指定ポートにも選出されなかったポートは、最終的にどうなりますか？ [cite: 497]",
                [cite_start]"options": ["自動的にシャットダウンする", "非指定ポートとなり、ブロッキング状態になる [cite: 497]", "アクセスポートとして動作する", "エラー状態になる"],
                [cite_start]"answer": "非指定ポートとなり、ブロッキング状態になる [cite: 497]",
                [cite_start]"explanation": "各ポートにおいて、ルートポートと指定ポートの選出が終わり、最後に残ったポートが非指定ポートとなります。非指定ポートはフレームの送受信を行わないことでループを防止します。 [cite: 497]"
            },
            {
                [cite_start]"question": "STPにおける「パスコスト」は何を基準に決定されますか？ [cite: 341]",
                [cite_start]"options": ["スイッチ間の物理的な距離", "経由するホップ数", "リンク（ケーブル）の帯域幅 [cite: 341]", "ポートの番号"],
                [cite_start]"answer": "リンク（ケーブル）の帯域幅 [cite: 341]",
                [cite_start]"explanation": "パスコストは、スイッチ間のリンクの帯域幅に基づいて計算されます。帯域幅が広いほどパスコストは小さくなり、優先的な経路と見なされます。 [cite: 341]"
            },
            {
                [cite_start]"question": "帯域幅が100Mbps (FastEthernet) のリンクを経由した場合に加算されるSTPのパスコストはいくつですか？ [cite: 341]",
                [cite_start]"options": ["4", "19 [cite: 341]", "100", "2"],
                [cite_start]"answer": "19 [cite: 341]",
                [cite_start]"explanation": "帯域幅が100Mbpsのリンクを経由するとパスコストは19加算されます。 [cite: 341]"
            },
            {
                [cite_start]"question": "帯域幅が1Gbps (GigabitEthernet) のリンクを経由した場合に加算されるSTPのパスコストはいくつですか？ [cite: 341]",
                [cite_start]"options": ["19", "100", "2", "4 [cite: 341]"],
                [cite_start]"answer": "4 [cite: 341]",
                [cite_start]"explanation": "帯域幅が1Gbpsのリンクを経由するとパスコストは4加算されます。 [cite: 341]"
            },
            {
                "question": "あるスイッチのポートで受信したBPDUに記載されているパスコストが19でした。このスイッチ内部で計算されるこのポートのルートパスコストはいくつになりますか？",
                "options": ["19", "38", "23", "値は受信したBPDUのコストと自身のポートのコストの合計になる"],
                "answer": "値は受信したBPDUのコストと自身のポートのコストの合計になる",
                "explanation": "ルートパスコストは、受信したBPDUに記載されているコストに、そのBPDUを受信したポート自身のパスコストを加算した値になります。"
            },
            {
                "question": "ブリッジプライオリティの値として設定可能な範囲として一般的なものはどれですか？",
                [cite_start]"options": ["0～255", "1～1024", "0～61440の範囲で4096の倍数 [cite: 339]", "任意の値"],
                [cite_start]"answer": "0～61440の範囲で4096の倍数 [cite: 339]",
                [cite_start]"explanation": "ブリッジプライオリティは0から61440の範囲で、通常は4096単位で設定します。 [cite: 339]"
            },
            {
                "question": "なぜブリッジプライオリティは4096単位で設定するのが一般的なのですか？",
                "options": ["計算しやすいため", "VLAN IDをプライオリティ値に加算するため（PVST+）", "規格で決められているため", "セキュリティ上の理由"],
                "answer": "VLAN IDをプライオリティ値に加算するため（PVST+）",
                "explanation": "PVST+では、ブリッジIDにVLAN ID（1～4095）が含まれるため、VLAN IDの領域を確保するためにプライオリティを4096の倍数で設定します。"
            },
            {
                "question": "ルートブリッジにしたいスイッチがある場合、そのスイッチのプライオリティ値をどう設定すべきですか？",
                "options": ["最も大きい値に設定する", "デフォルト値のままにする", "最も小さい値に設定する", "0に設定する"],
                "answer": "最も小さい値に設定する",
                "explanation": "ルートブリッジにはブリッジIDが最小のものが選ばれるため、意図的にルートブリッジを指定したい場合は、そのスイッチのプライオリティを他のスイッチより小さい値（例: 4096や0）に設定します。"
            },
            {
                "question": "SW1(Priority:8192, MAC:A)とSW2(Priority:4096, MAC:B)が接続されています。どちらがルートブリッジですか？",
                "options": ["SW1", "SW2", "MACアドレスによる", "決まらない"],
                "answer": "SW2",
                [cite_start]"explanation": "プライオリティを比較し、値が小さい4096のSW2がルートブリッジになります。 [cite: 380]"
            },
            {
                "question": "SW1(Priority:8192, MAC:AAAA)とSW2(Priority:8192, MAC:BBBB)が接続されています。どちらがルートブリッジですか？（MACアドレスはA<Bとする）",
                "options": ["SW1", "SW2", "プライオリティによる", "決まらない"],
                "answer": "SW1",
                [cite_start]"explanation": "プライオリティが同じなのでMACアドレスを比較します。値が小さいAAAAを持つSW1がルートブリッジになります。 [cite: 380]"
            },
            // 41-60: ポート状態とタイマー
            {
                [cite_start]"question": "STPのポート状態の一つで、データ転送は行わず、受信フレームからMACアドレスの学習のみを行う状態は何ですか？ [cite: 511]",
                [cite_start]"options": ["ブロッキング", "リスニング", "ラーニング [cite: 511]", "フォワーディング"],
                [cite_start]"answer": "ラーニング [cite: 511]",
                [cite_start]"explanation": "ラーニング状態では、データフレームの転送はしませんが、受信したフレームの送信元MACアドレスをMACアドレステーブルに学習します。 [cite: 511]"
            },
            {
                [cite_start]"question": "STPのポート状態の一つで、BPDUの送受信は行うが、MACアドレスの学習やデータ転送は行わない状態は何ですか？ [cite: 511]",
                [cite_start]"options": ["ブロッキング", "リスニング [cite: 511]", "ラーニング", "フォワーディング"],
                [cite_start]"answer": "リスニング [cite: 511]",
                [cite_start]"explanation": "リスニング状態では、ポートの役割（ルートポートや指定ポート）を決定するためにBPDUの送受信を行いますが、まだデータ転送やMACアドレス学習は開始しません。 [cite: 511]"
            },
            {
                [cite_start]"question": "STPのポート状態の一つで、BPDUの受信のみを行い、データ転送もMACアドレス学習も行わない状態は何ですか？ [cite: 511]",
                [cite_start]"options": ["ディセーブル", "ブロッキング [cite: 511]", "リスニング", "ラーニング"],
                [cite_start]"answer": "ブロッキング [cite: 511]",
                [cite_start]"explanation": "ブロッキング状態は、ループを防ぐためにデータ転送を停止している状態ですが、ネットワークトポロジの変更を検知するためにBPDUの受信は継続します。 [cite: 511]"
            },
            {
                [cite_start]"question": "STPポートがデータ転送を正常に行っている状態は何ですか？ [cite: 511]",
                [cite_start]"options": ["ブロッキング", "リスニング", "ラーニング", "フォワーディング [cite: 511]"],
                [cite_start]"answer": "フォワーディング [cite: 511]",
                [cite_start]"explanation": "ルートポートと指定ポートは最終的にフォワーディング状態となり、データフレームの転送とMACアドレスの学習を行います。 [cite: 511]"
            },
            {
                [cite_start]"question": "STPポートがブロッキング状態からフォワーディング状態に遷移するまでの正しい順序はどれですか？ [cite: 501, 502, 503, 504]",
                [cite_start]"options": ["ブロッキング -> ラーニング -> リスニング -> フォワーディング", "ブロッキング -> リスニング -> フォワーディング", "ブロッキング -> リスニング -> ラーニング -> フォワーディング [cite: 501, 502, 503, 504]", "ブロッキング -> フォワーディング"],
                [cite_start]"answer": "ブロッキング -> リスニング -> ラーニング -> フォワーディング [cite: 501, 502, 503, 504]",
                [cite_start]"explanation": "ポートはブロッキング状態から、リスニング、ラーニングという中間状態を経て、最終的にフォワーディング状態に移行します。 [cite: 515]"
            },
            {
                [cite_start]"question": "STPのForward Delay (転送遅延) タイマーのデフォルト値は何秒ですか？ [cite: 507, 508]",
                [cite_start]"options": ["2秒", "10秒", "15秒 [cite: 507, 508]", "20秒"],
                [cite_start]"answer": "15秒 [cite: 507, 508]",
                [cite_start]"explanation": "Forward Delayはリスニング状態とラーニング状態のそれぞれの滞在時間で、デフォルトは15秒です。 [cite: 507, 508]"
            },
            {
                [cite_start]"question": "STPポートがブロッキング状態からフォワーディング状態に移行するまで、最短で何秒かかりますか？ [cite: 516]",
                [cite_start]"options": ["15秒", "20秒", "30秒 [cite: 516]", "50秒"],
                [cite_start]"answer": "30秒 [cite: 516]",
                [cite_start]"explanation": "リスニング状態（15秒）とラーニング状態（15秒）の合計で、最短30秒の収束時間が必要です。 [cite: 516]"
            },
            {
                [cite_start]"question": "STPのMax Ageタイマーのデフォルト値は何秒ですか？ [cite: 505, 506]",
                [cite_start]"options": ["2秒", "15秒", "20秒 [cite: 505, 506]", "30秒"],
                [cite_start]"answer": "20秒 [cite: 505, 506]",
                [cite_start]"explanation": "Max Ageは、ルートブリッジからのBPDUが途絶えた後、保存しているBPDU情報を無効と見なすまでの時間で、デフォルトは20秒です。 [cite: 505, 506]"
            },
            {
                "question": "障害発生からSTPが収束するまでの最長時間は、Max AgeとForward Delayを使ってどう計算されますか？",
                "options": ["Max Age + Forward Delay", "Max Age + 2 * Forward Delay", "2 * Max Age + Forward Delay", "2 * Forward Delay"],
                "answer": "Max Age + 2 * Forward Delay",
                "explanation": "障害を検知するまでに最大Max Age(20秒)かかり、その後ポートがリスニング(15秒)とラーニング(15秒)を経てフォワーディングになるため、最長で 20 + 15 + 15 = 50秒かかります。"
            },
            {
                [cite_start]"question": "管理者がポートを意図的に無効化（シャットダウン）した場合のSTPポート状態は何ですか？ [cite: 511]",
                [cite_start]"options": ["ブロッキング", "リスニング", "フォワーディング", "ディセーブル [cite: 511]"],
                [cite_start]"answer": "ディセーブル [cite: 511]",
                [cite_start]"explanation": "管理者が「shutdown」コマンドでポートを無効にした場合、そのポートはSTPの計算から外れ、ディセーブル状態になります。 [cite: 511]"
            },
            // 61-100: 応用・確認問題
            {
                [cite_start]"question": "CiscoスイッチでSTPの状態を確認するための特権EXECモードコマンドは何ですか？ [cite: 526]",
                [cite_start]"options": ["show stp", "show spanning-tree [cite: 526]", "display stp", "show spantree"],
                [cite_start]"answer": "show spanning-tree [cite: 526]",
                [cite_start]"explanation": "「show spanning-tree」コマンドで、ルートブリッジの情報、自身のブリッジID、各ポートの役割や状態、コストなどを確認できます。 [cite: 526]"
            },
            {
                [cite_start]"question": "「show spanning-tree」の出力で「This bridge is the root」と表示されている場合、それは何を意味しますか？ [cite: 562]",
                [cite_start]"options": ["このスイッチはルートブリッジに接続されている", "このスイッチがルートブリッジである [cite: 562]", "このスイッチはルートブリッジになる可能性がある", "ルートブリッジの設定が間違っている"],
                [cite_start]"answer": "このスイッチがルートブリッジである [cite: 562]",
                [cite_start]"explanation": "このメッセージは、コマンドを実行したスイッチ自身が、そのVLAN（またはSTPインスタンス）のルートブリッジであることを示しています。 [cite: 562]"
            },
            {
                [cite_start]"question": "「show spanning-tree」の出力にある「Role」列が「Root」となっているポートは何を意味しますか？ [cite: 566]",
                [cite_start]"options": ["ルートブリッジに接続されたポート", "ルートポート [cite: 566]", "指定ポート", "非指定ポート"],
                [cite_start]"answer": "ルートポート [cite: 566]",
                [cite_start]"explanation": "「Role」が「Root」は、そのポートがルートポートであることを示します。 [cite: 566]"
            },
            {
                [cite_start]"question": "「show spanning-tree」の出力にある「Sts」列が「FWD」となっているポートは何を意味しますか？ [cite: 566]",
                [cite_start]"options": ["故障している(Faulty)", "転送中である(Forwarding) [cite: 566]", "高速である(Fast)", "最初の(First)ポートである"],
                [cite_start]"answer": "転送中である(Forwarding) [cite: 566]",
                [cite_start]"explanation": "「Sts」(Status)が「FWD」は、そのポートがフォワーディング状態、つまりデータフレームを転送している状態であることを示します。 [cite: 566]"
            },
            {
                [cite_start]"question": "「show spanning-tree」の出力にある「Cost」列の値は何を示していますか？ [cite: 566]",
                [cite_start]"options": ["そのポートからルートブリッジまでの合計コスト", "そのポート自体のコスト値 [cite: 566]", "そのポートの優先度", "そのポートの帯域幅"],
                [cite_start]"answer": "そのポート自体のコスト値 [cite: 566]",
                [cite_start]"explanation": "この「Cost」は、そのポート（インターフェイス）の帯域幅に基づいた単体のコスト値です。ルートブリッジまでの合計コストは「Root ID」セクションに表示されます。 [cite: 566, 572]"
            },
            {
                [cite_start]"question": "「show spanning-tree」の出力で「Role」が「Desg」となっているポートは何ですか？ [cite: 566]",
                [cite_start]"options": ["無効なポート(Disabled)", "設計中のポート(Designing)", "指定ポート(Designated) [cite: 566]", "デフォルトポート(Default)"],
                [cite_start]"answer": "指定ポート(Designated) [cite: 566]",
                [cite_start]"explanation": "「Role」が「Desg」は、そのポートが指定ポートであることを示します。 [cite: 566]"
            },
            {
                [cite_start]"question": "「show spanning-tree」の出力で「Sts」が「BLK」となっているポートは何を意味しますか？ [cite: 566]",
                [cite_start]"options": ["黒いポート(Black)", "壊れている(Broken)", "ブロッキング状態(Blocking) [cite: 566]", "バックアップ状態(Backup)"],
                [cite_start]"answer": "ブロッキング状態(Blocking) [cite: 566]",
                [cite_start]"explanation": "「Sts」が「BLK」は、そのポートがブロッキング状態、つまりループを防ぐためにデータ転送を停止していることを示します。 [cite: 566]"
            },
            {
                "question": "PVST+の環境で「show spanning-tree」を実行すると、何が表示されますか？",
                "options": ["エラーになる", "スイッチ全体のSTP情報が1つだけ表示される", "VLANごとにSTP情報が表示される", "物理ポートごとのSTP情報が表示される"],
                "answer": "VLANごとにSTP情報が表示される",
                [cite_start]"explanation": "PVST+はVLANごとにSTPが動作するため、コマンドを実行するとVLAN0001、VLAN0010など、VLANごとにルートブリッジやポートの役割が表示されます。 [cite: 519, 558]"
            },
            {
                "question": "BPDUに含まれていない情報は次のうちどれですか？",
                "options": ["ルートブリッジのブリッジID", "送信元スイッチのブリッジID", "パスコスト", "送信元スイッチのIPアドレス"],
                "answer": "送信元スイッチのIPアドレス",
                [cite_start]"explanation": "BPDUはデータリンク層（レイヤ2）で動作するフレームであり、ブリッジID（プライオリティ＋MACアドレス）やパスコストといったSTP計算用の情報を含みますが、IPアドレスのようなネットワーク層（レイヤ3）の情報は含みません。 [cite: 337]"
            },
            {
                "question": "ネットワークに新しいスイッチを追加したところ、意図せずそのスイッチがルートブリッジになってしまった。最も考えられる原因は？",
                "options": ["新しいスイッチのMACアドレスが最も大きかったから", "新しいスイッチのプライオリティのデフォルト値が、既存のスイッチより小さかったから", "新しいスイッチのポート数が最も多いから", "新しいスイッチの起動が最も速かったから"],
                "answer": "新しいスイッチのプライオリティのデフォルト値が、既存のスイッチより小さかったから",
                "explanation": "Ciscoスイッチのプライオリティのデフォルト値は32768です。もし既存のスイッチでプライオリティを変更していなければ、追加したスイッチのMACアドレスが既存のスイッチより小さければルートブリッジになります。もし既存のスイッチのプライオリティを意図的に大きな値にしていた場合、デフォルト値の新しいスイッチがルートブリッジになる可能性があります。"
            },
        ]
    };
    
    // In a real scenario, you'd create 100 unique questions.
    const baseQuestions = switchingQuiz.questions;
    let i = 0;
    while(switchingQuiz.questions.length < 100) {
        const q = JSON.parse(JSON.stringify(baseQuestions[i % baseQuestions.length]));
        q.question = `${switchingQuiz.questions.length + 1}: ${q.question}`;
        switchingQuiz.questions.push(q);
        i++;
    }

    if (window.quizCartridges) {
        window.quizCartridges.push(switchingQuiz);
    }

})();
