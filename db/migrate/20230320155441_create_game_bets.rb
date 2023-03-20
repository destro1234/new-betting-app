class CreateGameBets < ActiveRecord::Migration[6.1]
  def change
    create_table :game_bets do |t|
      t.integer :game_id
      t.integer :bet_id

      t.timestamps
    end
  end
end
