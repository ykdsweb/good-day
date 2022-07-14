import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/StylistMenu/StylistMenu.module.scss";

export default function Dai() {
  return (
    <div className={styles.menu}>
      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>※SB(シャンプー・ブロー)込み</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>中高生</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>小学生未満</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>前髪</th>
            <td className={styles.menuTableTd}>(シャンプーなし)</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カット</h2>
      <p className={styles.menuDetail}>(シャンプー・ブローなし)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>大人・大学生</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>カラー</h2>
      <p className={styles.menuDetail}>(カット・シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(45日まで)</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>(45日以内)</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ブリーチメニュー</h2>
      <p className={styles.menuDetail}>(カット・シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>グラデーション</th>
            <td className={styles.menuTableTd}>(オンカラー込)</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>部分カラー</th>
            <td className={styles.menuTableTd}>(インナーサイド)</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>インナーカラー</th>
            <td className={styles.menuTableTd}>サイド&amp;バック</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハイライト&amp;ローライト</th>
            <td className={styles.menuTableTd}>ホイル(1枚)</td>
            <td className={styles.menuTableTd}>¥440〜</td>
            <td className={styles.menuTableTd}>120〜180分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>パーマ</h2>
      <p className={styles.menuDetail}>(カット・シャンプー・ブロー込)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>部分パーマ</th>
            <td className={styles.menuTableTd}>
              (カット・シャンプー・ブロー別)
            </td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>
      <h2 className={styles.menuTitle}>デジタルパーマ</h2>
      <p className={styles.menuDetail}>(カット・シャンプー・ブロー込)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>矯正</h2>
      <p className={styles.menuDetail}>(カット・シャンプー・ブロー込)</p>
      <p className={styles.menuDetail}>アイロン処理有り</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>3ヶ月以内</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>矯正</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー込)</p>
      <p className={styles.menuDetail}>アイロン処理有り</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>3ヶ月以内</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ポイント矯正</h2>
      <p className={styles.menuDetail}>(カット、シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フロント</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハーフ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ストレートパーマ</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー込)</p>
      <p className={styles.menuDetail}>アイロン処理無し、ブラシでブロー</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ショート</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ミディアム</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ロング</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リタッチ</th>
            <td className={styles.menuTableTd}>3ヶ月以内</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ポイントストレート</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>フロント</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>ハーフ</th>
            <td className={styles.menuTableTd}>3ヶ月以内</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>トリートメント</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>クイックケア</th>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>S</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>M</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>L</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カラーケア</th>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>S</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>M</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>L</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>スペシャルケアトリートメント</th>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>S</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>M</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>L</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘッドスパ</h2>
      <p className={styles.menuDetail}>(カット別、シャンプー・ブロー別)</p>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>リフレッシュスパ</th>
            <td className={styles.menuTableTd}>(20分)</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>リラックススパ</th>
            <td className={styles.menuTableTd}>30分</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>シャンプーブロー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>シャンプー&amp;ブロー</th>
            <td className={styles.menuTableTd}>¥2,750</td>
            <td className={styles.menuTableTd}>60分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>ヘアセット</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>アップスタイル</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>ハーフスタイル</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>アイロン仕上げ</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>

      <h2 className={styles.menuTitle}>セットメニュー</h2>
      <table className={styles.menuArea}>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カットトリートメント</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カラーカット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>カラーブロー</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTableTr}>
            <th className={styles.menuTableTh}>パーマカット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
        <tbody>
          <tr className={styles.menuTablLast}>
            <th className={styles.menuTableTh}>矯正カット</th>
            <td className={styles.menuTableTd}>&nbsp;</td>
            <td className={styles.menuTableTd}>¥</td>
            <td className={styles.menuTableTd}>分</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
