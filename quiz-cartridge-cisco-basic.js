// quiz-cartridge-cisco-basic.js
// このファイルは、固定問題モードで使用されるクイズのデータセットです。
// PDF資料の第3章 (Cisco機器の基本操作) を基に作成されました。

(function() {
    const ciscoBasicQuiz = {
        title: "Cisco機器 基本操作と設定",
        questions: [
            {
                "question": "Cisco機器にログインした直後の、プロンプトが「>」で表示される最も基本的な操作モードは何ですか？",
                "options": ["特権EXECモード", "グローバルコンフィギュレーションモード", "ユーザEXECモード", "インターフェイスコンフィギュレーションモード"],
                "answer": "ユーザEXECモード",
                "explanation": "Cisco機器にアクセスすると、まずユーザEXECモードになります。このモードでは実行できるコマンドが制限されています。"
            },
            {
                "question": "ユーザEXECモードから特権EXECモード（プロンプトが「#」）に移行するためのコマンドは何ですか？",
                "options": ["configure terminal", "enable", "exit", "show running-config"],
                "answer": "enable",
                "explanation": "「enable」コマンドを実行することで、より多くの権限を持つ特権EXECモードに移行します。"
            },
            {
                "question": "機器の全体的な設定を行うために、特権EXECモードから移行するモードは何ですか？",
                "options": ["インターフェイスコンフィギュレーションモード", "ユーザEXECモード", "ルータコンフィギュレーションモード", "グローバルコンフィギュレーションモード"],
                "answer": "グローバルコンフィギュレーションモード",
                "explanation": "「configure terminal」コマンドで移行し、ホスト名の設定など、機器全体に関わる設定を行います。"
            },
            {
                "question": "現在動作しているCisco機器の設定情報（電源が切れると消去される）を何と呼びますか？",
                "options": ["startup-config", "running-config", "boot-config", "flash-config"],
                "answer": "running-config",
                "explanation": "running-configはRAM上に保存されており、機器が動作している現在の設定です。再起動すると内容は失われます。"
            },
            {
                "question": "機器の起動時に読み込まれる設定情報（電源が切れても消えない）が保存されているメモリは何ですか？",
                "options": ["RAM", "フラッシュメモリ", "ROM", "NVRAM"],
                "answer": "NVRAM",
                "explanation": "startup-configは不揮発性メモリであるNVRAMに保存されており、電源を切っても内容は保持されます。"
            },
            {
                "question": "現在の設定（running-config）を、再起動後も保持されるように保存するためのコマンドは何ですか？",
                "options": ["copy startup-config running-config", "show running-config", "copy running-config startup-config", "write memory"],
                "answer": "copy running-config startup-config",
                "explanation": "このコマンドでrunning-configの内容をstartup-configにコピーし、設定を保存します。「write memory」も古いコマンドですが同様の機能です。"
            },
            {
                "question": "ルータのインターフェイスにIPアドレスを設定するためのコマンドはどれですか？",
                "options": ["hostname RT1", "ip address 192.168.1.1 255.255.255.0", "enable secret cisco", "no shutdown"],
                "answer": "ip address 192.168.1.1 255.255.255.0",
                "explanation": "インターフェイスコンフィギュレーションモードで「ip address <IPアドレス> <サブネットマスク>」の形式で設定します。"
            },
            {
                "question": "Ciscoルータのインターフェイスはデフォルトで無効になっています。これを有効化するコマンドは何ですか？",
                "options": ["shutdown", "enable", "no shutdown", "interface up"],
                "answer": "no shutdown",
                "explanation": "インターフェイスコンフィギュレーションモードで「no shutdown」コマンドを実行すると、インターフェイスが有効（up）になります。"
            },
            {
                "question": "指定したIPアドレスを持つ相手とのネットワーク層での通信が可能か（IP到達性）を確認するためのコマンドは何ですか？",
                "options": ["tracert", "show ip route", "ping", "telnet"],
                "answer": "ping",
                "explanation": "pingはICMPプロトコルを使い、エコー要求とエコー応答のやり取りでIP到達性を確認する基本的な疎通確認コマンドです。"
            },
            {
                "question": "Windowsのコマンドプロンプトで、宛先IPアドレスに到達するまでのネットワーク経路（経由するルータ）を確認するコマンドは何ですか？",
                "options": ["ping", "traceroute", "nslookup", "tracert"],
                "answer": "tracert",
                "explanation": "Windowsでは「tracert」、Cisco IOSやLinuxなどでは「traceroute」というコマンド名で、宛先までの経路情報を確認できます。"
            },
            {
                "question": "グローバルコンフィギュレーションモードでホスト名（機器の名前）を「R1」に変更するコマンドはどれですか？",
                "options": ["name R1", "set hostname R1", "hostname R1", "host-name = R1"],
                "answer": "hostname R1",
                "explanation": "「hostname [新しいホスト名]」コマンドで、機器のホスト名を変更できます。変更後、プロンプトの表示も変わります。"
            },
            {
                "question": "どのコンフィギュレーションモードからでも、一気に特権EXECモードに戻ることができるコマンドは何ですか？",
                "options": ["exit", "disable", "quit", "end"],
                "answer": "end",
                "explanation": "「exit」コマンドは1つ上の階層のモードに戻りますが、「end」コマンド（またはCtrl+Z）はどの深さからでも一気に特権EXECモードに戻ります。"
            }
        ]
    };

    if (window.quizCartridges) {
        window.quizCartridges.push(ciscoBasicQuiz);
    }

})();
