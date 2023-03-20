class CreateBets < ActiveRecord::Migration[6.1]
  def change
    create_table :bets do |t|
      t.integer :wager
      t.integer :game_id
      t.string :team

      t.timestamps
    end
  end
end
